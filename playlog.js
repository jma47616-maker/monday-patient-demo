/* ============================================================
   The Monday Patient - play log
   One shared file, included by every case just before </body>.

   Scores used to reach the database only when the player pressed
   "Save result & return to the hub", so a play-through abandoned on
   the death screen or the outcome left no trace at all - and a second,
   better-informed attempt looked like a first one. This writes what
   happens AS it happens, to the insert-only `play_log` table.

   It hooks nothing inside the case engine. It watches three things all
   cases share: the `.screen.on` section, the global state object `S`,
   and the text boxes. A new case needs the include line and nothing else
   (python playlog/apply-playlog.py "<folder>/<case>.html").

   Signed-in trainees only: the Supabase session lives in localStorage on
   this origin, shared with the hub. No session, no logging, no network.
   Every failure in here is swallowed - the log must never break a case.
   ============================================================ */
(function(){
  "use strict";
  var SB_URL = 'https://mjldqraifzpncjyafdkd.supabase.co';
  var SB_KEY = 'sb_publishable_9SqBEM4bxhYgNdaFwe_j9A_yXINlFBF';
  var TOKEN_KEY = 'sb-mjldqraifzpncjyafdkd-auth-token';
  var SB_LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  var MAX_EVENTS = 800, BATCH = 25, DATA_LIMIT = 9000;

  /* On a local preview there is no live session to write with; setting
     localStorage 'mp-playlog-debug' there collects the events in
     MP_PLAYLOG.sent instead, so the logger can be exercised offline. */
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  var DEBUG = false, signedIn = false;
  try {
    signedIn = !!localStorage.getItem(TOKEN_KEY);
    DEBUG = LOCAL && !!localStorage.getItem('mp-playlog-debug');
  } catch(_) { return; }
  if (!signedIn && !DEBUG) return;
  if (typeof S === 'undefined' || !S) return;

  var Q = new URLSearchParams(location.search);
  var SID = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : uuid4();
  var WEEK = Q.get('week') || null;
  var CASE_ID = caseId();
  var t0 = performance.now();
  var queue = [], seq = 0, sending = false, dead = false, timer = null;
  var client = null, token = null, tokenExp = 0;
  var sent = [];

  function uuid4(){
    var b = new Uint8Array(16); crypto.getRandomValues(b);
    b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
    var h = Array.prototype.map.call(b, function(x){ return ('0' + x.toString(16)).slice(-2); }).join('');
    return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);
  }
  /* The slug the case hands the hub as mp_case, so play_log.case_id joins
     to attempts.case_id. Falls back to the file name. */
  function caseId(){
    try {
      var m = String(window.mpReturnBtn).match(/mp_case'\s*,\s*'([^']+)'/);
      if (m) return m[1];
    } catch(_) {}
    var f = location.pathname.split('/').pop().replace(/\.html?$/,'');
    return f || 'index';
  }
  function screenNow(){
    var s = document.querySelector('.screen.on');
    return s && s.id ? s.id.replace(/^s-/,'') : null;
  }
  function wardMin(){
    try { if (typeof elapsed === 'function') { var e = elapsed(); if (isFinite(e)) return Math.round(e); } } catch(_) {}
    return null;
  }

  /* ---------- state snapshot ---------- */
  function plain(v, depth){
    if (v == null) return null;
    var t = typeof v;
    if (t === 'string') return v.length > 300 ? v.slice(0,300) + '…' : v;
    if (t === 'number') return isFinite(v) ? v : null;
    if (t === 'boolean') return v;
    if (t !== 'object') return undefined;
    if (depth > 3) return undefined;
    if (typeof Node !== 'undefined' && v instanceof Node) return undefined;
    if (v instanceof Set) v = Array.from(v);
    if (v instanceof Map) { var mo = {}; v.forEach(function(val,k){ mo[String(k)] = val; }); v = mo; }
    if (Array.isArray(v)) return v.slice(0,300).map(function(x){ var p = plain(x, depth+1); return p === undefined ? null : p; });
    var o = {};
    Object.keys(v).forEach(function(k){ var p = plain(v[k], depth+1); if (p !== undefined) o[k] = p; });
    return o;
  }
  function snapshot(){ try { return plain(S, 0) || {}; } catch(_) { return {}; } }

  var prev = snapshot();
  /* What changed since the last look. A Set that only grew is reported as
     its additions ({"+":[...]}), which is what makes the order of the
     player's questions, examinations and tests readable from the log. */
  function diffState(needNonNumeric){
    var now = snapshot(), d = {}, n = 0, real = false;
    Object.keys(now).forEach(function(k){
      var a = JSON.stringify(prev[k]), b = JSON.stringify(now[k]);
      if (a === b) return;
      var pv = prev[k], nv = now[k];
      if (Array.isArray(pv) && Array.isArray(nv) && nv.length > pv.length &&
          JSON.stringify(nv.slice(0, pv.length)) === a) d[k] = { '+': nv.slice(pv.length) };
      else d[k] = nv;
      n++; if (typeof nv !== 'number') real = true;
    });
    if (!n) return null;
    /* a case may keep a running clock in S; on the idle poll that alone is not an event */
    if (needNonNumeric && !real) return null;
    prev = now;
    return d;
  }

  /* ---------- queue ---------- */
  function push(event, data, screen){
    if (dead || seq >= MAX_EVENTS) return;
    if (data) { try { if (JSON.stringify(data).length > DATA_LIMIT) data = { truncated: true }; } catch(_) { data = null; } }
    queue.push({ session_id: SID, seq: seq++, case_id: CASE_ID, week_id: WEEK, event: event,
                 screen: screen || screenNow(), ward_min: wardMin(),
                 real_ms: Math.round(performance.now() - t0), data: data || null });
    if (!timer) timer = setTimeout(function(){ timer = null; flush(false); }, 1200);
  }
  function post(batch, bearer, keepalive){
    return fetch(SB_URL + '/rest/v1/play_log', {
      method: 'POST', keepalive: !!keepalive,
      headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + bearer,
                 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
      body: JSON.stringify(batch)
    });
  }
  function requeue(batch){ queue = batch.concat(queue); }
  function flush(leaving){
    if (dead || !queue.length) return;
    if (DEBUG) { sent.push.apply(sent, queue.splice(0)); return; }
    /* page is going away: no time for an async session lookup, use the token in hand */
    if (leaving) {
      if (token && Date.now() < tokenExp) { try { post(queue.splice(0, BATCH), token, true); } catch(_) {} }
      return;
    }
    if (sending || !client) return;
    sending = true;
    var batch = queue.splice(0, BATCH);
    client.auth.getSession().then(function(r){
      var s = r && r.data && r.data.session;
      if (!s) { dead = true; queue = []; return; }
      token = s.access_token; tokenExp = (s.expires_at || 0) * 1000 - 5000;
      return post(batch, token, false).then(function(res){
        /* a 4xx will not get better on retry; a 5xx or a rate limit might */
        if (!res.ok && (res.status >= 500 || res.status === 429)) requeue(batch);
      });
    }).catch(function(){ requeue(batch); })
      .then(function(){
        sending = false;
        if (queue.length && !timer) timer = setTimeout(function(){ timer = null; flush(false); }, 4000);
      });
  }

  /* ---------- what is watched ---------- */
  var lastScreen = screenNow();
  function onScreen(){
    var s = screenNow();
    if (s === lastScreen) return;
    lastScreen = s;
    var d = diffState(false);
    push('screen', d ? { diff: d } : null, s);
    if (s === 'out' && !outcomeLogged) outcome(null, null);
  }
  function onAction(){ var d = diffState(false); if (d) push('state', { diff: d }); }

  var typed = {};
  function scanText(){
    var els = document.querySelectorAll('textarea, input:not([type]), input[type=text], input[type=search]');
    for (var i = 0; i < els.length; i++) {
      var e = els[i], v = (e.value || '').trim();
      if (!v) continue;
      var key = e.id || e.name || ('field' + i);
      if (typed[key] === v) continue;
      typed[key] = v;
      push('typed', { field: key, text: v.slice(0, 1500) });
    }
  }

  var outcomeLogged = false;
  function outcome(score, max){
    if (outcomeLogged) return;
    var rows = [], rank = null;
    try {
      document.querySelectorAll('#scoreTable tr').forEach(function(tr){
        var c = tr.children; if (c.length >= 2) rows.push([c[0].textContent.trim().slice(0,160), c[1].textContent.trim()]);
      });
      var rk = document.querySelector('#rank'); rank = rk ? rk.textContent.trim() : null;
      if (score == null && rows.length) {
        var m = rows[rows.length-1][1].match(/(-?\d+)\s*\/\s*(\d+)/);
        if (m) { score = +m[1]; max = +m[2]; }
      }
    } catch(_) {}
    if (score == null) return;
    outcomeLogged = true;
    var d = diffState(false);
    push('outcome', { score: score, max: max, rank: rank, rows: rows.slice(0,60), diff: d || undefined, state: snapshot() }, 'out');
  }

  /* The one engine function every case shares for "the score is final".
     A top-level function declaration is a property of window, so the case's
     own bare call resolves to this wrapper. */
  try {
    var orig = window.mpReturnBtn;
    if (typeof orig === 'function') {
      window.mpReturnBtn = function(score, max){
        try { outcome(score, max); } catch(_) {}
        return orig.apply(this, arguments);
      };
    }
  } catch(_) {}

  var actT = null;
  function afterAction(){ clearTimeout(actT); actT = setTimeout(onAction, 500); }
  document.addEventListener('click', function(ev){
    try {
      scanText();
      if (ev.target && ev.target.closest && ev.target.closest('.mp-return')) { push('save', null); flush(true); return; }
      afterAction();
    } catch(_) {}
  }, true);
  document.addEventListener('keydown', function(ev){
    if (ev.key !== 'Enter') return;
    try { scanText(); afterAction(); } catch(_) {}
  }, true);

  try {
    var mo = new MutationObserver(function(){ try { onScreen(); } catch(_) {} });
    document.querySelectorAll('.screen').forEach(function(s){ mo.observe(s, { attributes: true, attributeFilter: ['class'] }); });
  } catch(_) {}

  /* timers inside a case (a drill timeout, a deterioration) change state with no click */
  setInterval(function(){
    try { onScreen(); var d = diffState(true); if (d) push('state', { diff: d }); } catch(_) {}
  }, 5000);

  document.addEventListener('visibilitychange', function(){
    try {
      if (document.visibilityState === 'hidden') { push('hidden', null); flush(true); }
      else push('visible', null);
    } catch(_) {}
  });
  window.addEventListener('pagehide', function(){ try { flush(true); } catch(_) {} });

  push('open', { viaHub: !!Q.get('return'), v: Q.get('v') || null, width: window.innerWidth, state: prev });

  window.MP_PLAYLOG = { session: SID, caseId: CASE_ID, sent: sent, debug: DEBUG };
  if (DEBUG) return;

  /* supabase-js is loaded only for a signed-in player, and only to keep the
     access token fresh - the writes themselves are plain fetches so the last
     batch can go out with keepalive as the page closes. */
  function boot(){
    try {
      client = window.supabase.createClient(SB_URL, SB_KEY);
      flush(false);
    } catch(_) { dead = true; }
  }
  if (window.supabase && window.supabase.createClient) boot();
  else {
    var sc = document.createElement('script');
    sc.src = SB_LIB; sc.async = true;
    sc.onload = boot;
    sc.onerror = function(){ dead = true; };
    document.head.appendChild(sc);
  }
})();
