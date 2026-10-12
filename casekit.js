/* The Monday Patient - case kit: a typed list is entered one item at a time.
   Players type "FBC, U&E, CRP" into boxes that take one item. This splits the entry on commas,
   semicolons and new lines and puts each item through the case's OWN form submit, in order, so the
   matcher, clock, basket, chips and refusals behave exactly as if each had been typed singly.
   An entry with no separator is never touched. Hooks nothing in the engine; every failure is swallowed. */
(function(){
  'use strict';
  var SEP = /[,;\n]+/, busy = false, wait = null;

  function split(v){
    var out = [], seen = {}, a = v.split(SEP), i, p;
    for (i = 0; i < a.length; i++) {
      p = a[i].trim();
      if (p && !seen[p.toLowerCase()]) { seen[p.toLowerCase()] = 1; out.push(p); }
    }
    return out;
  }

  /* "urine m, c and s" is one test. If the case already reads the whole entry as one thing, it is left alone.
     matchExam / matchIx are the case's own matchers, asked and not changed; a case without them is simply split. */
  function whole(inp){
    try { return /^(one|proc|panel)$/.test(window[inp.id === 'ixInput' ? 'matchIx' : 'matchExam'](inp.value.trim()).kind); }
    catch(_) { return false; }
  }

  /* q = { inp, form, msg, parts: still to enter, left: what the case left in the box, notes: what it said } */
  function run(q){
    var p;
    busy = true;
    try {
      while (q.parts.length) {
        p = q.parts.shift();
        q.inp.value = p;
        q.msg.innerHTML = '';
        q.form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        if (q.msg.querySelector('button,a,input')) { wait = q; break; }      /* "Which did you mean?" - the player answers first */
        if (q.inp.value.trim() === p) q.left.push(p);                        /* refused, and left in the box by the case */
        if (q.notes.indexOf(q.msg.innerHTML) < 0) q.notes += q.msg.innerHTML;   /* the same sentence is said once */
      }
      if (wait === q) q.msg.insertAdjacentHTML('afterbegin', q.notes);
      else if (q.msg.innerHTML !== q.notes) q.msg.innerHTML = q.notes;       /* every refusal stays readable, not only the last */
      q.inp.value = q.left.concat(q.parts).join(', ');
    } catch(_) {}
    busy = false;
  }

  document.addEventListener('submit', function(ev){
    if (busy) return;
    try {
      var form = ev.target, inp = form.querySelector('#examInput, #ixInput'), msg, parts;
      wait = null;
      if (!inp || !SEP.test(inp.value) || whole(inp)) return;
      msg = document.getElementById(inp.id.replace('Input', 'Msg'));
      parts = split(inp.value);
      if (!msg || !parts.length) return;
      ev.preventDefault(); ev.stopImmediatePropagation();
      run({ inp: inp, form: form, msg: msg, parts: parts, left: [], notes: '' });
    } catch(_) {}
  }, true);

  /* a chip was tapped: let the case act on it, then carry on with the rest of the list */
  document.addEventListener('click', function(ev){
    try {
      var q = wait;
      if (!q || !q.msg.contains(ev.target) || !ev.target.closest('button')) return;
      wait = null;
      setTimeout(function(){ if (q.notes.indexOf(q.msg.innerHTML) < 0) q.notes += q.msg.innerHTML; run(q); }, 0);
    } catch(_) {}
  }, true);
})();
