/* PACES - neuro deck. 54 text cards.
 * Content comes from the approved content sheets and nowhere else: pipeline/01-content.md
 * (42 cards) followed by pipeline/01b-scars.md (12 scar cards). Change the sheet first, then
 * this file, then run  node test-paces.js.
 *
 * A card:  id, kind (clue | syndrome | findings), region (one of the deck's regions), prompt, stem,
 *          answer   - findings cards only: the condition, in one or two parts
 *          expected - what the trainee is credited for naming
 *          ignore   - four cards only: phrases the matcher uses up but never shows or ticks
 *          note     - pointer for the later notes stage. Carried, never shown.
 * An item: name (what the reveal shows) and accept (the spellings that credit it, written
 *          lower case with hyphens and apostrophes removed).
 */
(function () {
  var deck = {
    id: 'neuro',
    title: 'Neurology',
    regions: [
      { key: 'lower limb', label: 'Lower limb' },
      { key: 'upper limb', label: 'Upper limb' },
      { key: 'bedside clue', label: 'Bedside clues' }
    ],
    cards: [
  {
    id: "clue-catheter", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A urinary catheter at the bedside in the neurology station.",
    answer: [],
    expected: [
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Cord compression or myelopathy",
        accept: ["cord compression", "spinal cord compression", "myelopathy", "cervical myelopathy", "cord lesion", "spinal cord lesion", "cervical spondylotic myelopathy", "degenerative cervical myelopathy", "csm", "cervical spondylosis", "cervical cord compression"] },
      { name: "Cauda equina or conus lesion",
        accept: ["cauda equina", "cauda equina syndrome", "ces", "conus", "conus medullaris", "conus lesion"] },
      { name: "Spina bifida",
        accept: ["spina bifida", "spinal dysraphism", "myelomeningocele"] },
      { name: "Multiple system atrophy",
        accept: ["msa", "multiple system atrophy", "shy drager", "shydrager", "multi system atrophy", "multisystem atrophy", "msa c", "msac", "msa p", "msap"] },
      { name: "Prostatic obstruction (older men; not neurological)",
        accept: ["prostate", "prostatic obstruction", "prostatic hypertrophy", "bph", "benign prostatic hyperplasia", "bladder outflow obstruction"] }
    ],
    note: "p3 \"1. Spastic paraparesis: multiple sclerosis\" — Mx: symptoms (bladder line)"
  },
  {
    id: "clue-catheter-umn", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A urinary catheter, and upper motor neurone signs in the legs.",
    answer: [],
    expected: [
      { name: "A spinal cord lesion",
        accept: ["cord lesion", "spinal cord lesion", "cord", "spinal cord", "myelopathy", "cord compression", "spinal cord disease", "spinal cord compression", "cervical cord compression"] }
    ],
    note: "p3 \"1. Spastic paraparesis: multiple sclerosis\" — Ddx and Ix"
  },
  {
    id: "clue-fingerprick", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Fingerprick marks on the fingertips.",
    answer: [],
    expected: [
      { name: "Diabetes",
        accept: ["diabetes", "diabetic", "diabetes mellitus", "dm", "t1dm", "t2dm", "glucose monitoring", "type 1 diabetes", "type 2 diabetes"] },
      { name: "B12 deficiency (through metformin)",
        accept: ["b12", "b12 deficiency", "vitamin b12", "cobalamin", "metformin", "sacd", "subacute combined degeneration", "b 12", "subacute combined degeneration of the cord"] }
    ],
    note: "p3 \"2. Mixed UMN + LMN\" — Ix and Mx (SACD)"
  },
  {
    id: "clue-pes-cavus", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Pes cavus.",
    answer: [],
    expected: [
      { name: "Charcot–Marie–Tooth disease",
        accept: ["cmt", "charcot marie tooth", "charcotmarietooth", "hmsn", "hereditary motor and sensory neuropathy", "hereditary motor sensory neuropathy", "hsmn", "hereditary sensory and motor neuropathy", "hereditary sensory motor neuropathy", "hereditary sensorimotor neuropathy"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Any childhood neuropathy",
        accept: ["childhood neuropathy", "any childhood neuropathy", "neuropathy in childhood", "neuropathy since childhood", "early onset neuropathy", "longstanding neuropathy"] }
    ],
    note: "p4 \"4. Charcot–Marie–Tooth (HMSN)\" — Ix, Mx; p4 \"3. Friedreich's ataxia\" — Ix, Mx, Pearl"
  },
  {
    id: "clue-spider-naevi", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Spider naevi and palmar erythema in a patient with a neurological problem.",
    answer: [],
    expected: [
      { name: "Alcohol",
        accept: ["alcohol", "alcohol excess", "alcohol misuse", "alcoholic", "etoh", "alcohol related liver disease", "chronic liver disease", "liver disease", "cirrhosis"] }
    ],
    note: "p4 \"6. Cerebellar syndrome: alcohol\" — Ix, Mx"
  },
  {
    id: "clue-neck-scar", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A scar on the neck, or a neck collar.",
    answer: [],
    expected: [
      { name: "Myelopathy",
        accept: ["myelopathy", "cervical myelopathy", "cervical spondylotic myelopathy", "cord compression", "cervical cord compression", "cervical spondylosis", "cervical decompression", "cervical spine surgery", "degenerative cervical myelopathy", "csm", "spinal cord compression"] }
    ],
    note: "p6 \"2. Cervical myelopathy\" — Ix, Mx"
  },
  {
    id: "clue-baclofen-pump", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A baclofen pump.",
    answer: [],
    expected: [
      { name: "Severe spasticity",
        accept: ["spasticity", "severe spasticity", "spastic", "umn", "upper motor neurone", "upper motor neuron"] },
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Cord injury",
        accept: ["cord injury", "spinal cord injury", "sci", "spinal injury", "spinal trauma"] }
    ],
    note: "p3 \"1. Spastic paraparesis: multiple sclerosis\" — Mx: symptoms (spasticity line)"
  },
  {
    id: "clue-painless-burns", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Painless burns on the hands, and a Charcot joint.",
    answer: [],
    expected: [
      { name: "Syringomyelia",
        accept: ["syringomyelia", "syrinx"] }
    ],
    note: "p6 \"4. Syringomyelia\" — Associations, Ix / Mx"
  },
  {
    id: "clue-romberg-positive", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Stands steadily with feet together and eyes open, then loses balance and has to step out when the eyes are closed.",
    answer: [],
    expected: [
      { name: "Sensory ataxia",
        accept: ["sensory ataxia", "proprioceptive loss", "loss of proprioception", "impaired proprioception", "proprioception"] },
      { name: "Dorsal column disease (B12, tabes)",
        accept: ["dorsal column", "dorsal columns", "posterior column", "posterior columns", "b12", "sacd", "subacute combined degeneration", "tabes", "tabes dorsalis", "syphilis", "b 12", "b12 deficiency", "vitamin b12", "cobalamin", "subacute combined degeneration of the cord", "taboparesis", "neurosyphilis"] },
      { name: "Large-fibre neuropathy",
        accept: ["large fibre neuropathy", "largefibre neuropathy", "large fiber neuropathy", "peripheral neuropathy", "sensory neuropathy", "neuropathy", "polyneuropathy"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Vestibular disease",
        accept: ["vestibular", "vestibular disease", "vestibulopathy", "labyrinthine", "inner ear"] }
    ],
    note: "p2 \"Romberg's test\" — Pearl"
  },
  {
    id: "clue-romberg-eyes-open", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "On Romberg's test the patient is already unsteady with feet together and eyes open, and only slightly worse with the eyes closed.",
    answer: [],
    expected: [
      { name: "Cerebellar disease (truncal / vermis ataxia)",
        accept: ["cerebellar", "cerebellar disease", "cerebellar ataxia", "cerebellum", "truncal ataxia", "vermis", "midline cerebellar"] },
      { name: "Romberg's is uninterpretable — never call it positive",
        accept: ["uninterpretable", "not interpretable", "cannot interpret", "cannot be interpreted", "not positive", "negative"] }
    ],
    note: "p2 \"Romberg's test\" — Pearl; p2 \"Tandem gait\" — Meaning"
  },
  {
    id: "clue-inverted-supinator", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Tapping the supinator tendon produces finger flexion, with no biceps or supinator response.",
    answer: [],
    expected: [
      { name: "LMN lesion at C5–6 with UMN signs below (inverted supinator reflex)",
        accept: ["c56", "c5 6", "c5c6", "c5 c6", "c5 and c6", "inverted supinator"] },
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "cord compression", "cervical cord compression", "cervical spondylosis", "degenerative cervical myelopathy", "csm", "spinal cord compression"] }
    ],
    note: "p6 \"2. Cervical myelopathy\" — Ix, Mx"
  },
  {
    id: "clue-split-hand", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Wasting of the thenar eminence and first dorsal interosseous, more than of the hypothenar eminence.",
    answer: [],
    expected: [
      { name: "Motor neurone disease (the split hand)",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] }
    ],
    note: "p6 \"3. Motor neurone disease\" — Ix, Mx"
  },
  {
    id: "syn-spastic-paraparesis", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "Spastic paraparesis.",
    answer: [],
    expected: [
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "degenerative cervical myelopathy", "cervical spondylosis", "csm"] },
      { name: "Cord compression",
        accept: ["cord compression", "spinal cord compression", "compressive lesion", "compression", "cervical cord compression"] },
      { name: "Subacute combined degeneration (B12)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] },
      { name: "Copper deficiency",
        accept: ["copper", "copper deficiency"] },
      { name: "Hereditary spastic paraparesis",
        accept: ["hsp", "hereditary spastic paraparesis", "hereditary spastic paraplegia", "familial spastic paraparesis", "familial spastic paraplegia"] },
      { name: "HTLV-1",
        accept: ["htlv1", "htlv 1", "htlv", "tropical spastic paraparesis", "htlvi", "htlv i"] },
      { name: "Previous trauma",
        accept: ["trauma", "previous trauma", "spinal cord injury", "cord injury", "spinal injury", "sci", "spinal trauma"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Transverse myelitis",
        accept: ["transverse myelitis", "myelitis"] },
      { name: "Parasagittal meningioma",
        accept: ["parasagittal meningioma", "parasagittal", "meningioma", "falcine meningioma"] },
      { name: "Cerebral palsy",
        accept: ["cerebral palsy", "spastic diplegia", "cp"] }
    ],
    note: "p3 \"1. Spastic paraparesis: multiple sclerosis\" — Extra exam, Ix"
  },
  {
    id: "syn-absent-ankle-upgoing", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "Absent ankle jerks with upgoing plantars.",
    answer: [],
    expected: [
      { name: "Subacute combined degeneration (B12)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] },
      { name: "Dual pathology: cervical myelopathy plus peripheral neuropathy",
        accept: ["dual pathology", "myelopathy plus neuropathy", "myelopathy and neuropathy", "myelopathy with neuropathy", "cervical myelopathy plus peripheral neuropathy", "cervical myelopathy and peripheral neuropathy", "cervical myelopathy with peripheral neuropathy", "cervical spondylosis and peripheral neuropathy", "neuropathy plus myelopathy", "neuropathy and myelopathy", "neuropathy with myelopathy", "myelopathy neuropathy", "neuropathy myelopathy", "myelopathy plus peripheral neuropathy", "peripheral neuropathy plus myelopathy", "myelopathy and peripheral neuropathy", "peripheral neuropathy and myelopathy", "myelopathy with peripheral neuropathy", "peripheral neuropathy with myelopathy", "myelopathy peripheral neuropathy", "peripheral neuropathy myelopathy", "cervical myelopathy plus neuropathy", "neuropathy plus cervical myelopathy", "cervical myelopathy and neuropathy", "neuropathy and cervical myelopathy", "cervical myelopathy with neuropathy", "neuropathy with cervical myelopathy", "cervical myelopathy neuropathy", "neuropathy cervical myelopathy", "peripheral neuropathy plus cervical myelopathy", "peripheral neuropathy and cervical myelopathy", "peripheral neuropathy with cervical myelopathy", "cervical myelopathy peripheral neuropathy", "peripheral neuropathy cervical myelopathy", "cervical spondylosis plus neuropathy", "neuropathy plus cervical spondylosis", "cervical spondylosis and neuropathy", "neuropathy and cervical spondylosis", "cervical spondylosis with neuropathy", "neuropathy with cervical spondylosis", "cervical spondylosis neuropathy", "neuropathy cervical spondylosis", "cervical spondylosis plus peripheral neuropathy", "peripheral neuropathy plus cervical spondylosis", "peripheral neuropathy and cervical spondylosis", "cervical spondylosis with peripheral neuropathy", "peripheral neuropathy with cervical spondylosis", "cervical spondylosis peripheral neuropathy", "peripheral neuropathy cervical spondylosis", "cord compression plus neuropathy", "neuropathy plus cord compression", "cord compression and neuropathy", "neuropathy and cord compression", "cord compression with neuropathy", "neuropathy with cord compression", "cord compression neuropathy", "neuropathy cord compression", "cord compression plus peripheral neuropathy", "peripheral neuropathy plus cord compression", "cord compression and peripheral neuropathy", "peripheral neuropathy and cord compression", "cord compression with peripheral neuropathy", "peripheral neuropathy with cord compression", "cord compression peripheral neuropathy", "peripheral neuropathy cord compression"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Taboparesis (syphilis)",
        accept: ["taboparesis", "syphilis", "neurosyphilis", "tabes dorsalis", "tabes"] },
      { name: "Conus medullaris lesion",
        accept: ["conus", "conus medullaris", "conus lesion"] }
    ],
    note: "p3 \"2. Mixed UMN + LMN\" — Memory hook, History, Ix"
  },
  {
    id: "syn-bilateral-hand-wasting", kind: "syndrome", region: "upper limb",
    prompt: "Differentials?",
    stem: "Bilateral wasting of the small muscles of the hands.",
    answer: [],
    expected: [
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "cervical spondylosis", "degenerative cervical myelopathy", "csm", "cord compression", "spinal cord compression", "cervical cord compression"] },
      { name: "Syringomyelia",
        accept: ["syringomyelia", "syrinx"] },
      { name: "Charcot–Marie–Tooth disease",
        accept: ["cmt", "charcot marie tooth", "charcotmarietooth", "hmsn", "hereditary motor and sensory neuropathy", "hereditary motor sensory neuropathy", "hsmn", "hereditary sensory and motor neuropathy", "hereditary sensory motor neuropathy", "hereditary sensorimotor neuropathy"] },
      { name: "Peripheral neuropathy",
        accept: ["peripheral neuropathy", "polyneuropathy"] },
      { name: "Rheumatoid arthritis",
        accept: ["ra", "rheumatoid", "rheumatoid arthritis"] },
      { name: "Old age",
        accept: ["old age", "ageing", "aging", "elderly", "age related", "senile"] }
    ],
    note: "p6 \"1. Wasting of the small muscles of the hand\" — Approach"
  },
  {
    id: "syn-unilateral-hand-wasting", kind: "syndrome", region: "upper limb",
    prompt: "Differentials?",
    stem: "Unilateral wasting of the small muscles of the hand.",
    answer: [],
    expected: [
      { name: "T1 root lesion",
        accept: ["t1", "t1 root", "t1 root lesion", "t1 radiculopathy", "t1 lesion"] },
      { name: "Pancoast tumour (look for Horner's, clubbing)",
        accept: ["pancoast", "pancoasts", "pancoast tumour", "pancoast tumor", "apical lung tumour", "apical lung cancer", "lung apex tumour"] },
      { name: "Cervical rib / thoracic outlet",
        accept: ["cervical rib", "thoracic outlet", "thoracic outlet syndrome", "tos"] },
      { name: "Klumpke's palsy",
        accept: ["klumpkes palsy", "klumpkes", "klumpke", "lower brachial plexus", "brachial plexus"] },
      { name: "Ulnar nerve lesion",
        accept: ["ulnar", "ulnar nerve", "ulnar nerve lesion", "ulnar nerve palsy", "ulnar neuropathy"] },
      { name: "Combined median and ulnar lesion",
        accept: ["median", "combined lesion"] }
    ],
    note: "p6 \"1. Wasting of the small muscles of the hand\" — Approach; p7 \"7. Ulnar nerve palsy\" — Ix / Mx"
  },
  {
    id: "syn-unilateral-foot-drop", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "Unilateral foot drop.",
    answer: [],
    expected: [
      { name: "L5 radiculopathy",
        accept: ["l5", "l5 root", "l5 nerve root", "l5 radiculopathy", "lumbar radiculopathy"] },
      { name: "Common peroneal nerve palsy",
        accept: ["common peroneal", "peroneal", "common peroneal nerve palsy", "cpn", "common fibular", "fibular"] },
      { name: "Sciatic nerve lesion",
        accept: ["sciatic", "sciatic nerve", "sciatic nerve lesion", "sciatic neuropathy"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Central cause (UMN signs), e.g. stroke",
        accept: ["central", "central cause", "umn", "umn lesion", "upper motor neurone", "upper motor neuron", "stroke", "cva", "cerebrovascular accident", "infarct", "infarction", "cerebral infarction"] }
    ],
    note: "p5 \"7. Unilateral foot drop\" — Ix, Mx"
  },
  {
    id: "syn-stocking-neuropathy", kind: "syndrome", region: "lower limb",
    prompt: "Causes?",
    stem: "A peripheral sensorimotor neuropathy: stocking sensory loss, distal wasting and weakness, absent ankle jerks, Romberg's positive.",
    answer: [],
    expected: [
      { name: "Diabetes",
        accept: ["diabetes", "diabetic", "diabetes mellitus", "dm", "t1dm", "t2dm", "type 1 diabetes", "type 2 diabetes"] },
      { name: "Alcohol",
        accept: ["alcohol", "alcoholic", "alcohol excess", "etoh", "alcohol misuse"] },
      { name: "B12 deficiency",
        accept: ["b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] },
      { name: "Chronic kidney disease",
        accept: ["ckd", "chronic kidney disease", "kidney disease", "renal failure", "renal disease", "uraemia", "uremia", "kidney failure"] },
      { name: "Hypothyroidism",
        accept: ["hypothyroidism", "hypothyroid", "underactive thyroid"] },
      { name: "Drugs (chemotherapy, isoniazid)",
        accept: ["drugs", "drug", "drug induced", "medication", "chemotherapy", "chemo", "isoniazid", "druginduced", "medications"] },
      { name: "Paraprotein",
        accept: ["paraprotein", "paraproteinaemia", "paraproteinemia", "myeloma", "mgus"] },
      { name: "CIDP",
        accept: ["cidp", "chronic inflammatory demyelinating polyneuropathy", "chronic inflammatory demyelinating polyradiculoneuropathy"] },
      { name: "Vasculitis",
        accept: ["vasculitis", "vasculitic"] }
    ],
    note: "p4 \"5. Peripheral sensorimotor neuropathy\" — Ix, Mx"
  },
  {
    id: "syn-cerebellar", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "A cerebellar syndrome.",
    answer: [],
    expected: [
      { name: "Alcohol",
        accept: ["alcohol", "alcoholic", "alcohol excess", "etoh", "alcohol misuse"] },
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Previous posterior circulation stroke",
        accept: ["stroke", "posterior circulation stroke", "cerebellar stroke", "cva", "infarct", "cerebrovascular accident", "infarction", "cerebral infarction"] },
      { name: "Phenytoin",
        accept: ["phenytoin", "anticonvulsant", "anticonvulsants", "antiepileptic", "antiepileptics"] },
      { name: "Hypothyroidism",
        accept: ["hypothyroidism", "hypothyroid", "underactive thyroid"] },
      { name: "Paraneoplastic",
        accept: ["paraneoplastic", "paraneoplastic cerebellar degeneration"] },
      { name: "MSA-C",
        accept: ["msa", "msa c", "msac", "multiple system atrophy", "multi system atrophy", "multisystem atrophy", "msa p", "msap", "shy drager", "shydrager"] },
      { name: "Coeliac disease",
        accept: ["coeliac", "celiac", "gluten ataxia", "gluten"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Spinocerebellar ataxia",
        accept: ["sca", "spinocerebellar ataxia", "spinocerebellar ataxias", "spinocerebellar"] },
      { name: "Posterior fossa tumour / space-occupying lesion",
        accept: ["posterior fossa tumour", "posterior fossa tumor", "posterior fossa lesion", "posterior fossa mass", "posterior fossa sol", "cerebellar tumour", "cerebellar tumor", "tumour", "tumor", "space occupying lesion", "sol", "neoplasm"] }
    ],
    note: "p4 \"6. Cerebellar syndrome: alcohol\" — Ix"
  },
  {
    id: "syn-hemiparesis", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "Hemiparesis: unilateral spasticity, pyramidal weakness, hyperreflexia, an upgoing plantar and a circumducting gait.",
    answer: [],
    expected: [
      { name: "Stroke (most common)",
        accept: ["stroke", "cva", "cerebrovascular accident", "infarct", "intracerebral haemorrhage", "infarction", "cerebral infarction", "intracranial haemorrhage", "haemorrhagic stroke", "haemorrhage", "hemorrhage", "bleed"] },
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Tumour",
        accept: ["tumour", "tumor", "brain tumour", "space occupying lesion", "sol", "neoplasm", "metastases", "metastasis", "malignancy", "brain tumor", "brain metastases"] },
      { name: "Previous trauma",
        accept: ["trauma", "previous trauma", "head injury", "traumatic brain injury", "tbi"] },
      { name: "Subdural haematoma",
        accept: ["subdural", "subdural haematoma", "subdural hematoma", "subdural haemorrhage", "chronic subdural", "sdh"] },
      { name: "Abscess",
        accept: ["abscess", "cerebral abscess", "brain abscess", "abscesses"] }
    ],
    note: "p5 \"8. Hemiparesis: stroke\" — Ix, Mx; p7 \"9. UMN arm: stroke\""
  },
  {
    id: "syn-parkinsonism", kind: "syndrome", region: "lower limb",
    prompt: "Differentials?",
    stem: "Tremor, bradykinesia and rigidity. Idiopathic Parkinson's disease is taken as read — what else could it be?",
    answer: [],
    expected: [
      { name: "Drug-induced parkinsonism (antipsychotics, metoclopramide, prochlorperazine)",
        accept: ["drug induced", "druginduced", "drugs", "medication", "antipsychotic", "antipsychotics", "neuroleptics", "metoclopramide", "prochlorperazine", "drug", "medications", "neuroleptic"] },
      { name: "Essential tremor",
        accept: ["essential tremor", "benign essential tremor", "et"] },
      { name: "Vascular parkinsonism",
        accept: ["vascular", "vascular parkinsonism", "lower body parkinsonism"] },
      { name: "PD-plus syndromes",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "psp", "msa", "dlb", "cbd", "progressive supranuclear palsy", "multiple system atrophy", "lewy body", "corticobasal", "atypical parkinsons", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski", "multi system atrophy", "multisystem atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "dementia with lewy bodies", "lewy body dementia", "lewy bodies", "lewy", "lbd", "corticobasal degeneration", "corticobasal syndrome", "cortico basal", "cbs"] },
      { name: "Wilson's disease (if young)",
        accept: ["wilsons", "wilsons disease", "wilson"] },
      { name: "Normal pressure hydrocephalus",
        accept: ["nph", "normal pressure hydrocephalus", "hydrocephalus"] }
    ],
    note: "p5 \"9. Parkinson's disease\" — Ix; p5 \"10. PD-plus syndromes\" — Red flags"
  },
  {
    id: "syn-carpal-tunnel-causes", kind: "syndrome", region: "upper limb",
    prompt: "Causes?",
    stem: "Carpal tunnel syndrome.",
    answer: [],
    expected: [
      { name: "Idiopathic",
        accept: ["idiopathic", "no cause", "unknown"] },
      { name: "Pregnancy",
        accept: ["pregnancy", "pregnant"] },
      { name: "Hypothyroidism",
        accept: ["hypothyroidism", "hypothyroid", "underactive thyroid"] },
      { name: "Acromegaly",
        accept: ["acromegaly", "acromegalic"] },
      { name: "Rheumatoid arthritis",
        accept: ["ra", "rheumatoid", "rheumatoid arthritis"] },
      { name: "Diabetes",
        accept: ["diabetes", "diabetic", "diabetes mellitus", "dm", "t1dm", "t2dm", "type 1 diabetes", "type 2 diabetes"] },
      { name: "Obesity",
        accept: ["obesity", "obese", "raised bmi"] },
      { name: "Amyloid (dialysis)",
        accept: ["amyloid", "amyloidosis", "dialysis", "dialysis related amyloid", "ckd", "chronic kidney disease", "kidney disease", "kidney failure", "renal failure", "renal disease", "uraemia", "uremia"] }
    ],
    note: "p7 \"6. Carpal tunnel syndrome\" — Ix / Mx; p7 \"Rheumatology crossover\""
  },
  {
    id: "syn-cervical-myelopathy-causes", kind: "syndrome", region: "upper limb",
    prompt: "Causes?",
    stem: "Cervical myelopathy.",
    answer: [],
    expected: [
      { name: "Degenerative spondylosis (commonest)",
        accept: ["spondylosis", "cervical spondylosis", "degenerative", "degeneration", "osteoarthritis", "oa"] },
      { name: "Disc prolapse",
        accept: ["disc prolapse", "prolapsed disc", "disc herniation", "herniated disc", "slipped disc", "disc", "disk"] },
      { name: "Rheumatoid atlantoaxial subluxation",
        accept: ["ra", "rheumatoid", "rheumatoid arthritis", "atlantoaxial subluxation", "atlantoaxial", "atlanto axial"] },
      { name: "Trauma",
        accept: ["trauma", "injury", "fracture", "previous trauma"] },
      { name: "Tumour",
        accept: ["tumour", "tumor", "neoplasm", "malignancy", "metastasis", "metastases"] }
    ],
    note: "p6 \"2. Cervical myelopathy\" — Ix, Mx; p7 \"Rheumatology crossover\""
  },
  {
    id: "find-ms", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "A young woman with a suprapubic catheter. Bilateral increased tone in the legs with ankle clonus and a scissoring gait. Pyramidal weakness. Brisk reflexes and upgoing plantars. Reduced vibration sense. Cerebellar signs.",
    answer: [
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] }
    ],
    expected: [
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "degenerative cervical myelopathy", "cervical spondylosis", "csm"] },
      { name: "Cord compression",
        accept: ["cord compression", "spinal cord compression", "compressive lesion", "compression", "cervical cord compression"] },
      { name: "Subacute combined degeneration (B12)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] },
      { name: "Copper deficiency",
        accept: ["copper", "copper deficiency"] },
      { name: "Hereditary spastic paraparesis",
        accept: ["hsp", "hereditary spastic paraparesis", "hereditary spastic paraplegia", "familial spastic paraparesis", "familial spastic paraplegia"] },
      { name: "HTLV-1",
        accept: ["htlv1", "htlv 1", "htlv", "tropical spastic paraparesis", "htlvi", "htlv i"] },
      { name: "Previous trauma",
        accept: ["trauma", "previous trauma", "spinal cord injury", "cord injury", "spinal injury", "sci", "spinal trauma"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Transverse myelitis",
        accept: ["transverse myelitis", "myelitis"] },
      { name: "Parasagittal meningioma",
        accept: ["parasagittal meningioma", "parasagittal", "meningioma", "falcine meningioma"] },
      { name: "Cerebral palsy",
        accept: ["cerebral palsy", "spastic diplegia", "cp"] }
    ],
    note: "p3 \"1. Spastic paraparesis: multiple sclerosis\" — Extra exam, Ix, Mx (relapse, DMT, symptoms, general), Pearl"
  },
  {
    id: "find-sacd", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "An older patient with fingerprick marks on the fingertips. Absent ankle jerks with upgoing plantars. Vibration and proprioception lost in the legs.",
    answer: [
      { name: "Subacute combined degeneration of the cord (B12 deficiency)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] }
    ],
    expected: [
      { name: "Dual pathology: cervical myelopathy plus peripheral neuropathy",
        accept: ["dual pathology", "myelopathy plus neuropathy", "myelopathy and neuropathy", "myelopathy with neuropathy", "cervical myelopathy plus peripheral neuropathy", "cervical myelopathy and peripheral neuropathy", "cervical myelopathy with peripheral neuropathy", "cervical spondylosis and peripheral neuropathy", "neuropathy plus myelopathy", "neuropathy and myelopathy", "neuropathy with myelopathy", "myelopathy neuropathy", "neuropathy myelopathy", "myelopathy plus peripheral neuropathy", "peripheral neuropathy plus myelopathy", "myelopathy and peripheral neuropathy", "peripheral neuropathy and myelopathy", "myelopathy with peripheral neuropathy", "peripheral neuropathy with myelopathy", "myelopathy peripheral neuropathy", "peripheral neuropathy myelopathy", "cervical myelopathy plus neuropathy", "neuropathy plus cervical myelopathy", "cervical myelopathy and neuropathy", "neuropathy and cervical myelopathy", "cervical myelopathy with neuropathy", "neuropathy with cervical myelopathy", "cervical myelopathy neuropathy", "neuropathy cervical myelopathy", "peripheral neuropathy plus cervical myelopathy", "peripheral neuropathy and cervical myelopathy", "peripheral neuropathy with cervical myelopathy", "cervical myelopathy peripheral neuropathy", "peripheral neuropathy cervical myelopathy", "cervical spondylosis plus neuropathy", "neuropathy plus cervical spondylosis", "cervical spondylosis and neuropathy", "neuropathy and cervical spondylosis", "cervical spondylosis with neuropathy", "neuropathy with cervical spondylosis", "cervical spondylosis neuropathy", "neuropathy cervical spondylosis", "cervical spondylosis plus peripheral neuropathy", "peripheral neuropathy plus cervical spondylosis", "peripheral neuropathy and cervical spondylosis", "cervical spondylosis with peripheral neuropathy", "peripheral neuropathy with cervical spondylosis", "cervical spondylosis peripheral neuropathy", "peripheral neuropathy cervical spondylosis", "cord compression plus neuropathy", "neuropathy plus cord compression", "cord compression and neuropathy", "neuropathy and cord compression", "cord compression with neuropathy", "neuropathy with cord compression", "cord compression neuropathy", "neuropathy cord compression", "cord compression plus peripheral neuropathy", "peripheral neuropathy plus cord compression", "cord compression and peripheral neuropathy", "peripheral neuropathy and cord compression", "cord compression with peripheral neuropathy", "peripheral neuropathy with cord compression", "cord compression peripheral neuropathy", "peripheral neuropathy cord compression"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Taboparesis (syphilis)",
        accept: ["taboparesis", "syphilis", "neurosyphilis", "tabes dorsalis", "tabes"] },
      { name: "Conus medullaris lesion",
        accept: ["conus", "conus medullaris", "conus lesion"] }
    ],
    note: "p3 \"2. Mixed UMN + LMN\" — History, Ix, Mx (SACD)"
  },
  {
    id: "find-friedreich", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "A patient in their early twenties. Gait and limb ataxia, dysarthria and nystagmus. Vibration and proprioception lost; Romberg's positive. Areflexia with upgoing plantars. Pes cavus and kyphoscoliosis.",
    answer: [
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] }
    ],
    expected: [
      { name: "Subacute combined degeneration (B12)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] },
      { name: "Dual pathology: cervical myelopathy plus peripheral neuropathy",
        accept: ["dual pathology", "myelopathy plus neuropathy", "myelopathy and neuropathy", "myelopathy with neuropathy", "cervical myelopathy plus peripheral neuropathy", "cervical myelopathy and peripheral neuropathy", "cervical myelopathy with peripheral neuropathy", "cervical spondylosis and peripheral neuropathy", "neuropathy plus myelopathy", "neuropathy and myelopathy", "neuropathy with myelopathy", "myelopathy neuropathy", "neuropathy myelopathy", "myelopathy plus peripheral neuropathy", "peripheral neuropathy plus myelopathy", "myelopathy and peripheral neuropathy", "peripheral neuropathy and myelopathy", "myelopathy with peripheral neuropathy", "peripheral neuropathy with myelopathy", "myelopathy peripheral neuropathy", "peripheral neuropathy myelopathy", "cervical myelopathy plus neuropathy", "neuropathy plus cervical myelopathy", "cervical myelopathy and neuropathy", "neuropathy and cervical myelopathy", "cervical myelopathy with neuropathy", "neuropathy with cervical myelopathy", "cervical myelopathy neuropathy", "neuropathy cervical myelopathy", "peripheral neuropathy plus cervical myelopathy", "peripheral neuropathy and cervical myelopathy", "peripheral neuropathy with cervical myelopathy", "cervical myelopathy peripheral neuropathy", "peripheral neuropathy cervical myelopathy", "cervical spondylosis plus neuropathy", "neuropathy plus cervical spondylosis", "cervical spondylosis and neuropathy", "neuropathy and cervical spondylosis", "cervical spondylosis with neuropathy", "neuropathy with cervical spondylosis", "cervical spondylosis neuropathy", "neuropathy cervical spondylosis", "cervical spondylosis plus peripheral neuropathy", "peripheral neuropathy plus cervical spondylosis", "peripheral neuropathy and cervical spondylosis", "cervical spondylosis with peripheral neuropathy", "peripheral neuropathy with cervical spondylosis", "cervical spondylosis peripheral neuropathy", "peripheral neuropathy cervical spondylosis", "cord compression plus neuropathy", "neuropathy plus cord compression", "cord compression and neuropathy", "neuropathy and cord compression", "cord compression with neuropathy", "neuropathy with cord compression", "cord compression neuropathy", "neuropathy cord compression", "cord compression plus peripheral neuropathy", "peripheral neuropathy plus cord compression", "cord compression and peripheral neuropathy", "peripheral neuropathy and cord compression", "cord compression with peripheral neuropathy", "peripheral neuropathy with cord compression", "cord compression peripheral neuropathy", "peripheral neuropathy cord compression"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Taboparesis (syphilis)",
        accept: ["taboparesis", "syphilis", "neurosyphilis", "tabes dorsalis", "tabes"] },
      { name: "Conus medullaris lesion",
        accept: ["conus", "conus medullaris", "conus lesion"] }
    ],
    note: "p4 \"3. Friedreich's ataxia\" — Systemic, Ix, Mx, Pearl"
  },
  {
    id: "find-cmt", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Pes cavus, claw toes and inverted champagne bottle legs. Bilateral foot drop with a steppage gait. Areflexia with mute plantars. Mild sensory loss. Wasting of the hands. Thickened nerves. Several relatives are affected.",
    answer: [
      { name: "Charcot–Marie–Tooth disease (HMSN)",
        accept: ["cmt", "charcot marie tooth", "charcotmarietooth", "hmsn", "hereditary motor and sensory neuropathy", "hereditary motor sensory neuropathy", "hsmn", "hereditary sensory and motor neuropathy", "hereditary sensory motor neuropathy", "hereditary sensorimotor neuropathy"] }
    ],
    expected: [
      { name: "CIDP",
        accept: ["cidp", "chronic inflammatory demyelinating polyneuropathy", "chronic inflammatory demyelinating polyradiculoneuropathy"] },
      { name: "Other acquired neuropathies",
        accept: ["acquired neuropathy", "acquired neuropathies", "acquired"] },
      { name: "Distal hereditary motor neuropathy",
        accept: ["distal hereditary motor neuropathy", "hereditary motor neuropathy", "dhmn", "distal hmn", "hmn"] },
      { name: "Distal myopathy",
        accept: ["distal myopathy", "myopathy"] }
    ],
    note: "p4 \"4. Charcot–Marie–Tooth (HMSN)\" — Ix, Mx"
  },
  {
    id: "find-alcohol-cerebellar", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Broad-based gait; cannot tandem walk. Poor heel–shin, hypotonia and pendular reflexes in the legs; the arms are relatively spared. Unsteady with the eyes open, so Romberg's is uninterpretable. A mild distal neuropathy. Spider naevi and palmar erythema.",
    answer: [
      { name: "Alcohol-related cerebellar degeneration",
        accept: ["alcohol", "alcoholic", "alcohol excess", "etoh", "alcohol related cerebellar degeneration", "alcoholic cerebellar degeneration", "alcohol misuse"] }
    ],
    expected: [
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Previous posterior circulation stroke",
        accept: ["stroke", "posterior circulation stroke", "cerebellar stroke", "cva", "infarct", "cerebrovascular accident", "infarction", "cerebral infarction"] },
      { name: "Phenytoin",
        accept: ["phenytoin", "anticonvulsant", "anticonvulsants", "antiepileptic", "antiepileptics"] },
      { name: "Hypothyroidism",
        accept: ["hypothyroidism", "hypothyroid", "underactive thyroid"] },
      { name: "Paraneoplastic",
        accept: ["paraneoplastic", "paraneoplastic cerebellar degeneration"] },
      { name: "MSA-C",
        accept: ["msa", "msa c", "msac", "multiple system atrophy", "multi system atrophy", "multisystem atrophy", "msa p", "msap", "shy drager", "shydrager"] },
      { name: "Coeliac disease",
        accept: ["coeliac", "celiac", "gluten ataxia", "gluten"] },
      { name: "Friedreich's ataxia",
        accept: ["friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] },
      { name: "Spinocerebellar ataxia",
        accept: ["sca", "spinocerebellar ataxia", "spinocerebellar ataxias", "spinocerebellar"] },
      { name: "Posterior fossa tumour / space-occupying lesion",
        accept: ["posterior fossa tumour", "posterior fossa tumor", "posterior fossa lesion", "posterior fossa mass", "posterior fossa sol", "cerebellar tumour", "cerebellar tumor", "tumour", "tumor", "space occupying lesion", "sol", "neoplasm"] }
    ],
    note: "p4 \"6. Cerebellar syndrome: alcohol\" — Ix, Mx (including DVLA)"
  },
  {
    id: "find-l5", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Unilateral foot drop with a steppage gait: weak ankle dorsiflexion and great toe extension. Ankle inversion and hip abduction are also weak. Sensory loss over the lateral leg, the dorsum of the foot and the great toe. Knee extension is spared; knee and ankle jerks are normal.",
    answer: [
      { name: "L5 radiculopathy",
        accept: ["l5", "l5 root", "l5 nerve root", "l5 radiculopathy", "lumbar radiculopathy"] }
    ],
    expected: [
      { name: "Common peroneal nerve palsy",
        accept: ["common peroneal", "peroneal", "common peroneal nerve palsy", "cpn", "common fibular", "fibular"] },
      { name: "Sciatic nerve lesion",
        accept: ["sciatic", "sciatic nerve", "sciatic nerve lesion", "sciatic neuropathy"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Central cause (UMN signs), e.g. stroke",
        accept: ["central", "central cause", "umn", "umn lesion", "upper motor neurone", "upper motor neuron", "stroke", "cva", "cerebrovascular accident", "infarct", "infarction", "cerebral infarction"] }
    ],
    note: "p5 \"7. Unilateral foot drop\" — Ix, Mx; p2 \"B. Core tools\" (root table)"
  },
  {
    id: "find-peroneal", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Unilateral foot drop with a steppage gait: weak ankle dorsiflexion and great toe extension. Ankle inversion and hip abduction are spared. Sensory loss is limited to the dorsum of the foot.",
    answer: [
      { name: "Common peroneal nerve palsy",
        accept: ["common peroneal", "peroneal", "common peroneal nerve palsy", "cpn", "common fibular", "fibular"] }
    ],
    expected: [
      { name: "L5 radiculopathy",
        accept: ["l5", "l5 root", "l5 nerve root", "l5 radiculopathy", "lumbar radiculopathy"] },
      { name: "Sciatic nerve lesion",
        accept: ["sciatic", "sciatic nerve", "sciatic nerve lesion", "sciatic neuropathy"] },
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Central cause (UMN signs), e.g. stroke",
        accept: ["central", "central cause", "umn", "umn lesion", "upper motor neurone", "upper motor neuron", "stroke", "cva", "cerebrovascular accident", "infarct", "infarction", "cerebral infarction"] }
    ],
    note: "p5 \"7. Unilateral foot drop\" — Ix, Mx"
  },
  {
    id: "find-pd", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "An asymmetric pill-rolling rest tremor. Bradykinesia with decrement on repetition. Cogwheel rigidity, enhanced by synkinesis. A shuffling gait with reduced arm swing, festination and turning en bloc. Hypomimia and micrographia.",
    answer: [
      { name: "Idiopathic Parkinson's disease",
        accept: ["parkinsons disease", "idiopathic parkinsons disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinsons", "pd", "parkinson disease", "idiopathic parkinson disease", "parkinson"] }
    ],
    expected: [
      { name: "Drug-induced parkinsonism (antipsychotics, metoclopramide, prochlorperazine)",
        accept: ["drug induced", "druginduced", "drugs", "medication", "antipsychotic", "antipsychotics", "neuroleptics", "metoclopramide", "prochlorperazine", "drug", "medications", "neuroleptic"] },
      { name: "Essential tremor",
        accept: ["essential tremor", "benign essential tremor", "et"] },
      { name: "Vascular parkinsonism",
        accept: ["vascular", "vascular parkinsonism", "lower body parkinsonism"] },
      { name: "PD-plus syndromes",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "psp", "msa", "dlb", "cbd", "progressive supranuclear palsy", "multiple system atrophy", "lewy body", "corticobasal", "atypical parkinsons", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski", "multi system atrophy", "multisystem atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "dementia with lewy bodies", "lewy body dementia", "lewy bodies", "lewy", "lbd", "corticobasal degeneration", "corticobasal syndrome", "cortico basal", "cbs"] },
      { name: "Wilson's disease (if young)",
        accept: ["wilsons", "wilsons disease", "wilson"] },
      { name: "Normal pressure hydrocephalus",
        accept: ["nph", "normal pressure hydrocephalus", "hydrocephalus"] }
    ],
    note: "p5 \"9. Parkinson's disease\" — Ix, Mx, Pearl"
  },
  {
    id: "find-psp", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Parkinsonism with a poor response to levodopa. A vertical gaze palsy, worst on looking down. Axial rigidity. Early backward falls. A surprised stare. Pseudobulbar palsy.",
    answer: [
      { name: "Progressive supranuclear palsy",
        accept: ["psp", "progressive supranuclear palsy", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski"] }
    ],
    expected: [
      { name: "Multiple system atrophy",
        accept: ["msa", "multiple system atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "multi system atrophy", "multisystem atrophy"] },
      { name: "Dementia with Lewy bodies",
        accept: ["dlb", "dementia with lewy bodies", "lewy body dementia", "lewy body", "lbd", "lewy bodies", "lewy"] },
      { name: "Corticobasal degeneration",
        accept: ["cbd", "corticobasal degeneration", "corticobasal syndrome", "corticobasal", "cortico basal", "cbs"] },
      { name: "Idiopathic Parkinson's disease",
        accept: ["parkinsons disease", "idiopathic parkinsons disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinsons", "pd", "parkinson disease", "idiopathic parkinson disease", "parkinson"] }
    ],
    ignore: [
      { name: "[never shown, never ticked] Parkinson's plus, unspecified",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "atypical parkinsons"] }
    ],
    note: "p5 \"10. PD-plus syndromes\" — Ix / Mx"
  },
  {
    id: "find-msa", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Parkinsonism with a poor response to levodopa. Early autonomic failure: postural hypotension, bladder involvement and erectile dysfunction. Cerebellar signs. Stridor.",
    answer: [
      { name: "Multiple system atrophy",
        accept: ["msa", "multiple system atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "multi system atrophy", "multisystem atrophy"] }
    ],
    expected: [
      { name: "Progressive supranuclear palsy",
        accept: ["psp", "progressive supranuclear palsy", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski"] },
      { name: "Dementia with Lewy bodies",
        accept: ["dlb", "dementia with lewy bodies", "lewy body dementia", "lewy body", "lbd", "lewy bodies", "lewy"] },
      { name: "Corticobasal degeneration",
        accept: ["cbd", "corticobasal degeneration", "corticobasal syndrome", "corticobasal", "cortico basal", "cbs"] },
      { name: "Idiopathic Parkinson's disease",
        accept: ["parkinsons disease", "idiopathic parkinsons disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinsons", "pd", "parkinson disease", "idiopathic parkinson disease", "parkinson"] }
    ],
    ignore: [
      { name: "[never shown, never ticked] Parkinson's plus, unspecified",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "atypical parkinsons"] }
    ],
    note: "p5 \"10. PD-plus syndromes\" — Ix / Mx (midodrine/fludrocortisone)"
  },
  {
    id: "find-dlb", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Parkinsonism, with dementia that began within a year of it. Fluctuating cognition. Visual hallucinations. REM sleep behaviour disorder. Severe sensitivity to neuroleptics.",
    answer: [
      { name: "Dementia with Lewy bodies",
        accept: ["dlb", "dementia with lewy bodies", "lewy body dementia", "lewy body", "lbd", "lewy bodies", "lewy"] }
    ],
    expected: [
      { name: "Progressive supranuclear palsy",
        accept: ["psp", "progressive supranuclear palsy", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski"] },
      { name: "Multiple system atrophy",
        accept: ["msa", "multiple system atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "multi system atrophy", "multisystem atrophy"] },
      { name: "Corticobasal degeneration",
        accept: ["cbd", "corticobasal degeneration", "corticobasal syndrome", "corticobasal", "cortico basal", "cbs"] },
      { name: "Idiopathic Parkinson's disease",
        accept: ["parkinsons disease", "idiopathic parkinsons disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinsons", "pd", "parkinson disease", "idiopathic parkinson disease", "parkinson"] }
    ],
    ignore: [
      { name: "[never shown, never ticked] Parkinson's plus, unspecified",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "atypical parkinsons"] }
    ],
    note: "p5 \"10. PD-plus syndromes\" — Ix / Mx (rivastigmine; avoid typical antipsychotics)"
  },
  {
    id: "find-cbd", kind: "findings", region: "lower limb",
    prompt: "What is it, and what else could it be?",
    stem: "Markedly asymmetric rigidity. An alien limb. Apraxia. Cortical sensory loss. Myoclonus.",
    answer: [
      { name: "Corticobasal degeneration",
        accept: ["cbd", "corticobasal degeneration", "corticobasal syndrome", "corticobasal", "cortico basal", "cbs"] }
    ],
    expected: [
      { name: "Progressive supranuclear palsy",
        accept: ["psp", "progressive supranuclear palsy", "supranuclear palsy", "steele richardson olszewski", "steelerichardsonolszewski"] },
      { name: "Multiple system atrophy",
        accept: ["msa", "multiple system atrophy", "msa c", "msac", "msa p", "msap", "shy drager", "shydrager", "multi system atrophy", "multisystem atrophy"] },
      { name: "Dementia with Lewy bodies",
        accept: ["dlb", "dementia with lewy bodies", "lewy body dementia", "lewy body", "lbd", "lewy bodies", "lewy"] },
      { name: "Idiopathic Parkinson's disease",
        accept: ["parkinsons disease", "idiopathic parkinsons disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinsons", "pd", "parkinson disease", "idiopathic parkinson disease", "parkinson"] }
    ],
    ignore: [
      { name: "[never shown, never ticked] Parkinson's plus, unspecified",
        accept: ["parkinsons plus", "parkinson plus", "pd plus", "pdplus", "atypical parkinsonism", "atypical parkinsons"] }
    ],
    note: "p5 \"10. PD-plus syndromes\" — Ix / Mx"
  },
  {
    id: "find-cervical-myelopathy", kind: "findings", region: "upper limb",
    prompt: "What is it, and what else could it be?",
    stem: "Clumsy hands. Wasting in the C5–6 muscles, with an inverted supinator reflex. Brisk triceps and finger jerks; Hoffmann's positive. Spastic legs. Glove sensory loss. Lhermitte's. Reduced neck movement.",
    answer: [
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "degenerative cervical myelopathy", "csm", "cervical cord compression", "cord compression", "cervical spondylosis", "spinal cord compression"] }
    ],
    expected: [
      { name: "Motor neurone disease (but no sensory loss)",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] },
      { name: "Multiple sclerosis",
        accept: ["ms", "multiple sclerosis", "demyelination", "demyelinating disease", "demyelinating"] },
      { name: "Syringomyelia",
        accept: ["syringomyelia", "syrinx"] },
      { name: "Subacute combined degeneration (B12)",
        accept: ["sacd", "subacute combined degeneration", "subacute combined degeneration of the cord", "b12", "b12 deficiency", "vitamin b12", "cobalamin", "b 12"] }
    ],
    note: "p6 \"2. Cervical myelopathy\" — Causes, Ix, Mx"
  },
  {
    id: "find-mnd", kind: "findings", region: "upper limb",
    prompt: "What is it, and what else could it be?",
    stem: "Wasting and fasciculations, with brisk reflexes in the same limb. The thenar eminence and first dorsal interosseous are wasted more than the hypothenar eminence. No sensory deficit. Eye movements and sphincters are spared.",
    answer: [
      { name: "Motor neurone disease",
        accept: ["mnd", "motor neurone disease", "motor neuron disease", "als", "amyotrophic lateral sclerosis", "motor neurone", "motor neuron"] }
    ],
    expected: [
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "cervical spondylosis", "cord compression", "degenerative cervical myelopathy", "csm", "spinal cord compression", "cervical cord compression"] },
      { name: "Multifocal motor neuropathy with conduction block",
        accept: ["mmn", "mmncb", "multifocal motor neuropathy", "multifocal motor neuropathy with conduction block"] },
      { name: "Inclusion body myositis",
        accept: ["ibm", "sibm", "inclusion body myositis"] },
      { name: "Kennedy's disease",
        accept: ["kennedys", "kennedys disease", "kennedy", "sbma", "spinobulbar muscular atrophy", "spinal and bulbar muscular atrophy", "spinal bulbar muscular atrophy"] }
    ],
    note: "p6 \"3. Motor neurone disease\" — Ix, Mx"
  },
  {
    id: "find-syrinx", kind: "findings", region: "upper limb",
    prompt: "What is it, and what else could it be?",
    stem: "Pain and temperature sensation lost in a cape distribution, with vibration and proprioception preserved. Wasting of the small muscles of the hands; arm reflexes absent. UMN signs in the legs. Painless burns on the hands and a Charcot shoulder. Horner's syndrome.",
    answer: [
      { name: "Syringomyelia",
        accept: ["syringomyelia", "syrinx"] }
    ],
    expected: [
      { name: "Cervical myelopathy",
        accept: ["cervical myelopathy", "myelopathy", "cervical spondylotic myelopathy", "cervical spondylosis", "cord compression", "degenerative cervical myelopathy", "csm", "spinal cord compression", "cervical cord compression"] }
    ],
    note: "p6 \"4. Syringomyelia\" — Associations, Ix / Mx"
  },
  {
    id: "find-dm1", kind: "findings", region: "upper limb",
    prompt: "What is it, and what else could it be?",
    stem: "Frontal balding, ptosis and a hatchet face, with wasting of temporalis, masseter and sternocleidomastoid. Distal weakness. After gripping the examiner's fingers the patient is slow to let go; percussing the thenar eminence leaves a contraction that is slow to relax.",
    answer: [
      { name: "Myotonic dystrophy type 1",
        accept: ["myotonic dystrophy", "myotonic dystrophy type 1", "dystrophia myotonica", "dm1", "steinerts", "myotonic dystrophy 1", "dm 1"] }
    ],
    expected: [
      { name: "Myotonic dystrophy type 2 (proximal, milder)",
        accept: ["myotonic dystrophy type 2", "dm2", "type 2", "proximal myotonic myopathy", "promm", "myotonic dystrophy 2", "myotonic dystrophy type ii", "type ii", "dm 2"] }
    ],
    note: "p6–7 \"5. Myotonic dystrophy type 1\" — Systemic, Genetics, Ix, Mx"
  },
  {
    id: "find-cts", kind: "findings", region: "upper limb",
    prompt: "What is it, and what else could it be?",
    stem: "Thenar wasting. Weak thumb abduction. Sensory loss over the lateral three and a half fingers, with the palm spared. Tinel's and Phalen's positive.",
    answer: [
      { name: "Carpal tunnel syndrome (median nerve at the wrist)",
        accept: ["carpal tunnel", "carpal tunnel syndrome", "cts", "median nerve", "median neuropathy", "median nerve compression", "median nerve palsy", "median"] }
    ],
    expected: [],
    note: "p7 \"6. Carpal tunnel syndrome\" — Causes, Ix / Mx; p7 \"Rheumatology crossover\""
  },
  {
    id: "find-ulnar", kind: "findings", region: "upper limb",
    prompt: "What is it, at what level, and what else could it be?",
    stem: "Wasting of the first dorsal interosseous and the hypothenar eminence. Clawing of the ring and little fingers. Weak finger abduction; Froment's positive. Sensory loss over the medial one and a half fingers, including the dorsum of the hand. Flexion at the tips of the ring and little fingers is weak.",
    answer: [
      { name: "Ulnar nerve palsy",
        accept: ["ulnar", "ulnar nerve", "ulnar nerve palsy", "ulnar neuropathy", "ulnar nerve lesion"] },
      { name: "Lesion at the elbow",
        accept: ["elbow", "at the elbow", "cubital tunnel", "medial epicondyle", "high lesion", "proximal", "high"] }
    ],
    expected: [
      { name: "Lesion at the wrist (Guyon's canal): dorsal sensation spared, clawing worse",
        accept: ["wrist", "at the wrist", "guyons", "guyon", "guyons canal", "low lesion", "distal", "low"] }
    ],
    note: "p7 \"7. Ulnar nerve palsy\" — Level (ulnar paradox), Ix / Mx"
  },
  {
    id: "find-radial", kind: "findings", region: "upper limb",
    prompt: "What is it, at what level, and what else could it be?",
    stem: "Wrist drop with weak finger extension; the grip is weak until the wrist is supported. Sensory loss over the anatomical snuffbox. Triceps is spared.",
    answer: [
      { name: "Radial nerve palsy",
        accept: ["radial", "radial nerve", "radial nerve palsy", "radial neuropathy", "radial nerve lesion"] },
      { name: "Lesion at the spiral groove",
        accept: ["spiral groove", "humerus", "humeral", "mid humerus", "saturday night"] }
    ],
    expected: [
      { name: "Lesion in the axilla (crutch palsy): triceps weak",
        accept: ["axilla", "in the axilla", "crutch", "crutches", "high lesion", "high"] }
    ],
    note: "p7 \"8. Radial nerve palsy\" — Causes / Mx"
  },
  {
    id: "clue-scar-scalp", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A long curved scar on the scalp, partly hidden in the hair.",
    answer: [],
    expected: [
      { name: "Previous craniotomy",
        accept: ["craniotomy", "previous craniotomy", "craniectomy", "neurosurgery", "brain surgery", "cranial surgery"] },
      { name: "Tumour resection",
        accept: ["tumour", "tumor", "brain tumour", "brain tumor", "meningioma", "glioma", "space occupying lesion", "sol", "neoplasm", "resection"] },
      { name: "Haematoma evacuation or aneurysm surgery",
        accept: ["haematoma", "hematoma", "subdural", "extradural", "haemorrhage", "hemorrhage", "bleed", "aneurysm", "aneurysm clipping", "subarachnoid", "trauma", "head injury", "previous trauma", "subdural haematoma", "subdural hematoma", "subdural haemorrhage", "chronic subdural", "sdh"] }
    ],
    note: "PDF p5 \"8. Hemiparesis: stroke\" — Ddx (tumour, previous trauma)"
  },
  {
    id: "clue-scar-shunt", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A small scar on the scalp with a firm bump under it, tubing that can be felt under the skin behind the ear and down the neck, and a small scar on the abdomen.",
    answer: [],
    expected: [
      { name: "Ventriculoperitoneal shunt",
        accept: ["vp shunt", "ventriculoperitoneal shunt", "shunt", "csf shunt", "ventricular shunt"] },
      { name: "Hydrocephalus (including normal pressure hydrocephalus)",
        accept: ["hydrocephalus", "nph", "normal pressure hydrocephalus"] }
    ],
    note: "PDF p5 \"9. Parkinson's disease\" — Ddx (NPH)"
  },
  {
    id: "clue-scar-suboccipital", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A vertical midline scar at the back of the head, running down to the top of the neck.",
    answer: [],
    expected: [
      { name: "Posterior fossa surgery",
        accept: ["posterior fossa surgery", "posterior fossa", "suboccipital craniectomy", "suboccipital craniotomy", "suboccipital", "craniectomy", "craniotomy"] },
      { name: "Foramen magnum decompression (Chiari malformation, syringomyelia)",
        accept: ["foramen magnum decompression", "foramen magnum", "decompression", "chiari", "chiari malformation", "arnold chiari", "syringomyelia", "syrinx"] },
      { name: "Posterior fossa tumour",
        accept: ["tumour", "tumor", "cerebellar tumour", "cerebellar tumor", "space occupying lesion", "sol", "neoplasm"] }
    ],
    note: "PDF p6 \"4. Syringomyelia\" — Ix / Mx; p4 \"6. Cerebellar syndrome: alcohol\" — Ddx"
  },
  {
    id: "clue-scar-anterior-neck", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A transverse scar on the front of the neck, to one side of the midline.",
    answer: [],
    expected: [
      { name: "Anterior cervical decompression (cervical myelopathy or radiculopathy)",
        accept: ["anterior cervical discectomy", "acdf", "cervical discectomy", "discectomy", "cervical decompression", "decompression", "cervical spine surgery", "cervical myelopathy", "myelopathy", "cervical spondylosis", "cervical spondylotic myelopathy", "degenerative cervical myelopathy", "csm", "cervical radiculopathy"] },
      { name: "Carotid endarterectomy (stroke or TIA) — a look-alike",
        accept: ["carotid endarterectomy", "endarterectomy", "carotid", "cea", "stroke", "tia", "cva", "cerebrovascular accident", "infarct", "infarction", "cerebral infarction"] },
      { name: "Thyroid surgery — a look-alike",
        accept: ["thyroidectomy", "thyroid surgery", "parathyroidectomy", "thyroid operation"] }
    ],
    note: "PDF p6 \"2. Cervical myelopathy\" — Ix, Mx"
  },
  {
    id: "clue-scar-thoracic-spine", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A long vertical midline scar over the thoracic spine.",
    answer: [],
    expected: [
      { name: "Spinal decompression or fixation",
        accept: ["spinal decompression", "decompression", "laminectomy", "spinal surgery", "spinal fixation", "fixation", "spinal fusion", "fusion"] },
      { name: "Cord compression (tumour, trauma)",
        accept: ["cord compression", "spinal cord compression", "tumour", "tumor", "metastases", "metastasis", "trauma", "fracture", "spinal cord injury", "cord injury", "cervical cord compression", "sci", "spinal injury", "spinal trauma", "previous trauma", "neoplasm", "malignancy"] },
      { name: "Scoliosis correction (e.g. Friedreich's ataxia)",
        accept: ["scoliosis", "scoliosis surgery", "scoliosis correction", "kyphoscoliosis", "friedreichs ataxia", "friedreichs", "friedreich", "friedrichs", "friedrich", "frda"] }
    ],
    note: "PDF p3 \"1. Spastic paraparesis: multiple sclerosis\" — Ddx, Ix; p4 \"3. Friedreich's ataxia\" — Mx"
  },
  {
    id: "clue-scar-lumbar", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A vertical midline scar over the lower back.",
    answer: [],
    expected: [
      { name: "Lumbar laminectomy or discectomy",
        accept: ["laminectomy", "lumbar laminectomy", "discectomy", "microdiscectomy", "lumbar decompression", "decompression", "lumbar spine surgery", "spinal surgery"] },
      { name: "Disc prolapse with root compression",
        accept: ["disc prolapse", "prolapsed disc", "slipped disc", "disc herniation", "herniated disc", "l5 radiculopathy", "sciatica", "root compression", "lumbar radiculopathy"] },
      { name: "Cauda equina syndrome",
        accept: ["cauda equina", "cauda equina syndrome", "ces"] },
      { name: "Lumbar canal stenosis",
        accept: ["spinal stenosis", "canal stenosis", "lumbar stenosis", "lumbar canal stenosis", "stenosis"] }
    ],
    note: "PDF p5 \"7. Unilateral foot drop: L5 vs common peroneal\" — Ix, Mx"
  },
  {
    id: "clue-scar-chest-box", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A short scar below the collarbone, with a firm box that can be felt under the skin.",
    answer: [],
    expected: [
      { name: "Deep brain stimulator (Parkinson's disease, essential tremor, dystonia)",
        accept: ["dbs", "deep brain stimulator", "deep brain stimulation", "brain stimulator", "parkinsons", "parkinsons disease", "essential tremor", "benign essential tremor", "tremor", "et", "dystonia", "parkinson disease", "idiopathic parkinsons disease", "idiopathic parkinson disease", "idiopathic parkinsons", "idiopathic pd", "ipd", "parkinson", "pd"] },
      { name: "Vagal nerve stimulator (epilepsy) — left side, with a second scar on the left of the neck",
        accept: ["vns", "vagal nerve stimulator", "vagus nerve stimulator", "vagal nerve stimulation", "vagus nerve stimulation", "nerve stimulator", "epilepsy"] },
      { name: "Cardiac pacemaker or ICD — a look-alike",
        accept: ["pacemaker", "cardiac pacemaker", "ppm", "icd", "defibrillator", "implantable cardioverter defibrillator"] }
    ],
    note: "PDF p5 \"9. Parkinson's disease\" — Mx (advanced); p6–7 \"5. Myotonic dystrophy type 1\" — Systemic, Mx"
  },
  {
    id: "clue-scar-lateral-ankle", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A small scar over the outer side of the ankle.",
    answer: [],
    expected: [
      { name: "Sural nerve biopsy",
        accept: ["sural nerve biopsy", "nerve biopsy", "sural biopsy", "sural"] },
      { name: "Peripheral neuropathy that needed a tissue diagnosis",
        accept: ["peripheral neuropathy", "neuropathy", "polyneuropathy", "vasculitis", "vasculitic neuropathy", "cidp", "chronic inflammatory demyelinating polyneuropathy", "chronic inflammatory demyelinating polyradiculoneuropathy", "vasculitic"] }
    ],
    note: "PDF p4 \"5. Peripheral sensorimotor neuropathy\" — Ddx, Ix"
  },
  {
    id: "clue-scar-muscle-biopsy", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A small scar over the deltoid, or over the outer thigh.",
    answer: [],
    expected: [
      { name: "Muscle biopsy",
        accept: ["muscle biopsy", "biopsy"] },
      { name: "A myopathy under investigation",
        accept: ["myopathy", "muscle disease", "myositis", "polymyositis", "inclusion body myositis", "ibm", "muscular dystrophy", "dystrophy", "sibm"] }
    ],
    note: "PDF p6 \"3. Motor neurone disease\" — Ddx"
  },
  {
    id: "clue-scar-wrist", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A short lengthways scar at the base of the palm, starting at the wrist crease.",
    answer: [],
    expected: [
      { name: "Surgical decompression",
        accept: ["decompression", "release", "flexor retinaculum"] },
      { name: "Carpal tunnel syndrome",
        accept: ["carpal tunnel syndrome", "carpal tunnel", "cts", "median nerve", "median nerve compression", "median", "median neuropathy", "median nerve palsy"] }
    ],
    note: "PDF p7 \"6. Carpal tunnel syndrome\" — Signs, Causes, Ix / Mx"
  },
  {
    id: "clue-scar-medial-elbow", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "A curved scar over the inner side of the elbow.",
    answer: [],
    expected: [
      { name: "Ulnar nerve decompression or transposition",
        accept: ["decompression", "transposition", "release"] },
      { name: "Ulnar neuropathy at the elbow",
        accept: ["ulnar", "ulnar nerve", "ulnar neuropathy", "ulnar nerve palsy", "ulnar nerve lesion", "cubital tunnel", "cubital tunnel syndrome"] }
    ],
    note: "PDF p7 \"7. Ulnar nerve palsy\" — Signs, Level, Ix / Mx"
  },
  {
    id: "clue-scar-foot", kind: "clue", region: "bedside clue",
    prompt: "What does this point to?",
    stem: "Surgical scars over both feet and ankles, in a patient with pes cavus.",
    answer: [],
    expected: [
      { name: "Corrective foot surgery (tendon transfer, osteotomy, fusion)",
        accept: ["foot surgery", "corrective surgery", "orthopaedic surgery", "orthopedic surgery", "tendon transfer", "tendon release", "osteotomy", "arthrodesis", "fusion"] },
      { name: "Charcot–Marie–Tooth disease",
        accept: ["cmt", "charcot marie tooth", "charcotmarietooth", "hmsn", "hereditary motor and sensory neuropathy", "hereditary motor sensory neuropathy", "hsmn", "hereditary sensory and motor neuropathy", "hereditary sensory motor neuropathy", "hereditary sensorimotor neuropathy"] }
    ],
    note: "PDF p4 \"4. Charcot–Marie–Tooth (HMSN)\" — Mx; see also `clue-pes-cavus`"
  }
    ]
  };
  var root = typeof window !== 'undefined' ? window : globalThis;
  (root.PACES_DECKS = root.PACES_DECKS || []).push(deck);
  if (typeof module !== 'undefined' && module.exports) module.exports = deck;
})();
