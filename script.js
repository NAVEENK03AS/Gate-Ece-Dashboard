// ═══════════════════════════════════════════════════════════════════════════════
// GATE 2027 ECE SUPREME TRACKER — script.js (v6)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── INSTITUTIONS (Campus Photos via Unsplash) ────────────────────────────────
const INSTITUTIONS = [
    { name:"IIT Madras",    tag:"IIT",         img:"https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",  color:"#3b82f6" },
    { name:"IISc Bangalore",tag:"Research",    img:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80",color:"#10b981" },
    { name:"IIT Bombay",    tag:"IIT",         img:"https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&q=80",color:"#6366f1" },
    { name:"IIT Delhi",     tag:"IIT",         img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",color:"#8b5cf6" },
    { name:"IIT Kharagpur", tag:"IIT",         img:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&q=80",color:"#f59e0b" },
    { name:"IIT Roorkee",   tag:"IIT",         img:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&q=80",color:"#ec4899" },
    { name:"IIT Kanpur",    tag:"IIT",         img:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&q=80",color:"#14b8a6" },
    { name:"BARC",          tag:"PSU",         img:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",color:"#06b6d4" },
    { name:"ISRO",          tag:"Space Agency",img:"https://images.unsplash.com/photo-1541873676-a18131494184?w=400&q=80", color:"#f97316" },
    { name:"ONGC",          tag:"PSU",         img:"https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80",color:"#a78bfa" },
    { name:"NTPC",          tag:"PSU",         img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80",color:"#34d399" },
    { name:"BEL",           tag:"PSU",         img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",color:"#fb7185" },
    { name:"DRDO",          tag:"Defence",     img:"https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=400&q=80",color:"#e11d48" },
    { name:"HAL",           tag:"PSU",         img:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&q=80",color:"#0ea5e9" },
];

// ─── DAILY MOTIVATION (15 quotes — rotates every day) ─────────────────────────
const MOTIVATIONS = [
    { text:"Dream Big. Work Hard. The IITs are waiting.", label:"IIT Madras",    img:"https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80" },
    { text:"Consistency transforms average into excellence.", label:"IISc",       img:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" },
    { text:"Push harder than yesterday if you want a different tomorrow.", label:"IIT Bombay", img:"https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80" },
    { text:"The harder the battle, the sweeter the victory.", label:"IIT Delhi",  img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" },
    { text:"Your GATE rank is decided today, not on exam day.", label:"ISRO",     img:"https://images.unsplash.com/photo-1541873676-a18131494184?w=1200&q=80" },
    { text:"One topic a day keeps the failure away.", label:"IIT Roorkee",        img:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&q=80" },
    { text:"BARC, ISRO, IISc — they're all rooting for you to show up today.", label:"BARC", img:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80" },
    { text:"Every formula you learn is a step closer to your dream.", label:"IIT Kharagpur", img:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=80" },
    { text:"Doubt kills more dreams than failure ever will. Keep going.", label:"IIT Kanpur", img:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=80" },
    { text:"Focus. One question at a time. One topic at a time.", label:"IIT Madras", img:"https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80" },
    { text:"The exam is fixed. Your preparation is the variable.", label:"IISc",  img:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" },
    { text:"NTPC, BEL, ONGC — the PSU dream is real. Make it happen.", label:"NTPC", img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80" },
    { text:"You don't have to be perfect. You just have to outperform 99% of others.", label:"IIT Delhi", img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" },
    { text:"Study now so you can relax later. Future you will thank present you.", label:"DRDO", img:"https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=1200&q=80" },
    { text:"The only bad session is the one that didn't happen.", label:"IIT Bombay", img:"https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80" },
];

let _motivationIdx = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000) % MOTIVATIONS.length;

// ─── GATE 2026 EC OFFICIAL SYLLABUS (Verbatim — IIT Guwahati) ────────────────
const GATE_SYLLABUS = {
    "General Aptitude":{color:"#f59e0b",marks:15,sections:{"Verbal Aptitude":["Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, and other parts of speech","Basic vocabulary: words, idioms, and phrases in context","Reading and comprehension","Narrative sequencing"],"Quantitative Aptitude":["Data interpretation: data graphs (bar graphs, pie charts, and other graphs representing data), 2- and 3-dimensional plots, maps, and tables","Numerical computation and estimation: ratios, percentages, powers, exponents and logarithms, permutations and combinations, and series","Mensuration and geometry","Elementary statistics and probability"],"Analytical Aptitude":["Logic: deduction and induction","Analogy","Numerical relations and reasoning"],"Spatial Aptitude":["Transformation of shapes: translation, rotation, scaling, mirroring, assembling, and grouping","Paper folding, cutting, and patterns in 2 and 3 dimensions"]}},
    "Engineering Mathematics":{color:"#3b82f6",marks:13,sections:{"Linear Algebra":["Vector space, basis, linear dependence and independence, matrix algebra","Eigenvalues and eigenvectors","Rank, solution of linear equations – existence and uniqueness"],"Calculus":["Mean value theorems, theorems of integral calculus","Evaluation of definite and improper integrals","Partial derivatives, maxima and minima, multiple integrals","Line, surface and volume integrals","Taylor series"],"Differential Equations":["First order equations (linear and nonlinear)","Higher order linear differential equations with constant coefficients","Method of variation of parameters","Cauchy's and Euler's equations","Initial and boundary value problems","Partial differential equations and separation of variables method"],"Vector Analysis":["Vectors in plane and space, vector operations","Gradient, divergence and curl","Gauss's, Green's and Stoke's theorems"],"Complex Analysis":["Analytic functions, Cauchy's integral theorem, Cauchy's integral formula","Sequences and series, convergence tests","Laurent series, residue theorem"],"Probability and Statistics":["Mean, median, mode and standard deviation","Combinatorial probability","Probability distribution functions: binomial, Poisson, exponential and normal","Joint and conditional probability","Correlation and regression"]}},
    "Networks, Signals and Systems":{color:"#8b5cf6",marks:11,sections:{"Circuit Analysis":["Node and mesh analysis","Superposition, Thevenin's theorem, Norton's theorem, reciprocity"],"Sinusoidal Steady State Analysis":["Phasors, complex power, maximum power transfer"],"Time and Frequency Domain Analysis":["RL, RC and RLC circuits","Solution of network equations using Laplace transform"],"Two-Port Networks":["Linear 2-port network parameters","Wye-delta transformation"],"Continuous-time Signals":["Fourier series and Fourier transform","Sampling theorem and applications"],"Discrete-time Signals":["DTFT, DFT, z-transform","Discrete-time processing of continuous-time signals"],"LTI Systems":["Definition and properties, causality, stability","Impulse response, convolution, poles and zeros","Parallel and cascade structure","Frequency response, group delay, phase delay","Digital filter design techniques"]}},
    "Electronic Devices":{color:"#ec4899",marks:10,sections:{"Semiconductor Physics":["Energy bands in intrinsic and extrinsic semiconductors","Equilibrium carrier concentration","Direct and indirect band-gap semiconductors"],"Carrier Transport":["Drift and diffusion current, mobility, resistivity","Excess carriers, recombination and generation"],"P-N Junction":["Ideal current-voltage characteristics","Capacitance: diffusion and depletion"],"BJT":["Physics of transistor operation","Current-voltage characteristics, common-emitter configuration"],"MOSFET":["Physics of transistor operation","Current-voltage characteristics","Enhancement and depletion modes"],"MOS Capacitor & Small Signal Models":["Threshold voltage","Small signal models of diodes, BJT and MOSFET"],"Other Devices":["Junction field effect transistors (JFET)","LED, photo-diode and solar cell (Optoelectronics)"]}},
    "Analog Circuits":{color:"#14b8a6",marks:10,sections:{"Small Signal Models":["Small signal equivalent circuits of diodes, BJTs and MOSFETs"],"Diode Circuits":["Simple diode circuits: clipping, clamping, rectifiers"],"Biasing":["Biasing and bias stability of transistor and FET amplifiers"],"Amplifiers":["Single-stage and multi-stage amplifiers","Differential amplifiers","Operational amplifiers","Feedback amplifiers","Power amplifiers","Frequency response of amplifiers"],"Op-Amp Circuits":["Active filters","Sinusoidal oscillators: Wein-bridge and phase shift, criterion for oscillation","Function generators, wave-shaping circuits","Current-to-voltage and voltage-to-current converters","Precision rectifiers"]}},
    "Digital Circuits":{color:"#f97316",marks:9,sections:{"Number Systems":["Number representations: binary, integer, and floating-point numbers"],"Combinatorial Circuits":["Boolean algebra, minimization of functions using Boolean algebra and Karnaugh map","Logic gates, arithmetic circuits, code converters","Multiplexers, decoders, and PLAs"],"Sequential Circuits":["Latches and flip-flops, counters, shift-registers"],"Data Converters":["Sample and hold circuits, ADCs and DACs"],"Semiconductor Memories":["ROM, SRAM, DRAM"],"Computer Organization":["Machine instructions and addressing modes","ALU, data-path and control unit","Instruction pipelining"]}},
    "Control Systems":{color:"#06b6d4",marks:8,sections:{"Basic Components & Representation":["Basic control system components","Feedback principle","Transfer function","Block diagram representation","Signal flow graph"],"Time Domain Analysis":["Transient and steady-state analysis of LTI systems"],"Frequency Domain Analysis":["Frequency response","Routh-Hurwitz stability criterion","Nyquist stability criterion"],"Design & State Space":["Bode and root-locus plots","Lag, lead, and lag-lead compensation","State variable representation and solution of state equation for LTI systems"]}},
    "Communications":{color:"#10b981",marks:12,sections:{"Random Processes":["Auto correlation and power spectral density","Properties of white noise","Filtering of random signals through LTI systems"],"Analog Communications":["Amplitude modulation and demodulation","Angle modulation and demodulation","Spectra of AM and FM","Superheterodyne receivers"],"Information Theory":["Entropy, mutual information, and channel capacity theorem"],"Digital Communications":["PCM, DPCM","Digital modulation schemes: ASK, PSK, FSK, QAM","Bandwidth, inter-symbol interference (ISI)","MAP, ML detection, matched filter receiver","SNR and BER"],"Error Correction & Multiple Access":["Fundamentals of error correction: Hamming codes, CRC","Basics of TDMA, FDMA, and CDMA"]}},
    "Electromagnetics":{color:"#e11d48",marks:9,sections:{"Maxwell's Equations":["Differential and integral forms and their interpretation","Boundary conditions, wave equation, Poynting vector"],"Plane Waves":["Reflection and refraction, polarization","Phase and group velocity","Propagation through various media, skin depth"],"Transmission Lines":["Equations, characteristic impedance","Impedance matching, impedance transformation","S-parameters, Smith chart"],"Waveguides":["Modes in rectangular waveguides","Boundary conditions, cut-off frequencies","Dispersion relations"],"Antennas":["Antenna arrays, phase array","Gain, aperture, reflection coefficient, VSWR, return loss","Antenna temperature, radiation pattern","Friis transmission equation"]}},
};

// ─── PY WEIGHTAGE + 2025 data ─────────────────────────────────────────────────
const WEIGHTAGE = {
    "General Aptitude":               {marks:15, years:{"2021":15,"2022":15,"2023":15,"2024":15,"2025":15}},
    "Engineering Mathematics":        {marks:13, years:{"2021":13,"2022":12,"2023":13,"2024":13,"2025":13}},
    "Communications":                 {marks:12, years:{"2021":11,"2022":13,"2023":12,"2024":12,"2025":12}},
    "Networks, Signals and Systems":  {marks:11, years:{"2021":10,"2022":11,"2023":11,"2024":11,"2025":10}},
    "Electronic Devices":             {marks:10, years:{"2021":10,"2022":10,"2023":10,"2024":11,"2025":10}},
    "Analog Circuits":                {marks:10, years:{"2021":10,"2022":10,"2023":10,"2024": 9,"2025":11}},
    "Electromagnetics":               {marks: 9, years:{"2021": 9,"2022": 9,"2023": 8,"2024": 9,"2025": 9}},
    "Digital Circuits":               {marks: 9, years:{"2021": 9,"2022": 9,"2023": 9,"2024": 8,"2025": 7}},
    "Control Systems":                {marks: 8, years:{"2021": 8,"2022": 7,"2023": 8,"2024": 8,"2025": 8}},
};

// ─── TOPIC-WISE PYQ COUNT (2015-2025) ────────────────────────────────────────
const PYQ_TOPIC_COUNTS = [
    {topic:"Fourier Transform & Series",          subj:"Networks, Signals and Systems",   count:18},
    {topic:"Laplace Transform",                   subj:"Networks, Signals and Systems",   count:15},
    {topic:"MOSFET Characteristics",              subj:"Electronic Devices",              count:14},
    {topic:"Op-Amp Circuits",                     subj:"Analog Circuits",                 count:13},
    {topic:"Nyquist / Bode Stability",            subj:"Control Systems",                 count:12},
    {topic:"Probability & Random Variables",      subj:"Engineering Mathematics",         count:12},
    {topic:"Digital Modulation (PSK/FSK/QAM)",    subj:"Communications",                  count:12},
    {topic:"BJT Amplifiers & Biasing",            subj:"Analog Circuits",                 count:11},
    {topic:"Transmission Lines & Smith Chart",    subj:"Electromagnetics",                count:11},
    {topic:"Eigenvalues & Linear Algebra",        subj:"Engineering Mathematics",         count:10},
    {topic:"Z-Transform & DFT",                   subj:"Networks, Signals and Systems",   count:10},
    {topic:"Amplitude Modulation (AM/FM)",        subj:"Communications",                  count:10},
    {topic:"Karnaugh Map & Boolean Algebra",      subj:"Digital Circuits",                count:10},
    {topic:"P-N Junction & Diode",                subj:"Electronic Devices",              count: 9},
    {topic:"Maxwell's Equations & EM Waves",      subj:"Electromagnetics",                count: 9},
    {topic:"Network Theorems (Thevenin/Norton)",  subj:"Networks, Signals and Systems",   count: 9},
    {topic:"State Space Representation",          subj:"Control Systems",                 count: 9},
    {topic:"ADC / DAC",                           subj:"Digital Circuits",                count: 8},
    {topic:"Flip-Flops & Sequential Circuits",    subj:"Digital Circuits",                count: 8},
    {topic:"Channel Capacity & Shannon",          subj:"Communications",                  count: 8},
    {topic:"Differential Equations",             subj:"Engineering Mathematics",          count: 7},
    {topic:"Convolution & LTI Systems",           subj:"Networks, Signals and Systems",   count: 7},
    {topic:"Antenna Arrays & VSWR",               subj:"Electromagnetics",                count: 7},
    {topic:"JFET & LED",                          subj:"Electronic Devices",              count: 6},
    {topic:"Hamming Codes & Error Correction",    subj:"Communications",                  count: 6},
    {topic:"Root Locus",                          subj:"Control Systems",                 count: 6},
    {topic:"Feedback Amplifiers",                 subj:"Analog Circuits",                 count: 6},
    {topic:"Waveguides",                          subj:"Electromagnetics",                count: 5},
    {topic:"Calculus (Limits & Integration)",     subj:"Engineering Mathematics",         count: 5},
    {topic:"Pipelining & Computer Organization",  subj:"Digital Circuits",                count: 5},
];

// ─── IIT CUTOFFS ─────────────────────────────────────────────────────────────
const IIT_CUTOFFS=[
    {name:"IIT Madras (M.Tech EC)",   type:"IIT",  gen:750,obc:700,scst:600,year:2024},
    {name:"IIT Bombay (M.Tech EC)",   type:"IIT",  gen:780,obc:720,scst:620,year:2024},
    {name:"IIT Delhi (M.Tech EC)",    type:"IIT",  gen:760,obc:710,scst:610,year:2024},
    {name:"IIT Kharagpur (M.Tech)",   type:"IIT",  gen:730,obc:680,scst:580,year:2024},
    {name:"IIT Roorkee (M.Tech EC)",  type:"IIT",  gen:720,obc:670,scst:570,year:2024},
    {name:"IIT Kanpur (M.Tech EC)",   type:"IIT",  gen:710,obc:660,scst:560,year:2024},
    {name:"IIT Guwahati (M.Tech)",    type:"IIT",  gen:690,obc:640,scst:540,year:2024},
    {name:"IISc (M.Tech/PhD EC)",     type:"IISc", gen:800,obc:750,scst:650,year:2024},
    {name:"BARC (Scientific Officer)",type:"PSU",  gen:700,obc:650,scst:550,year:2024},
    {name:"ISRO (Scientist/Eng-SD)",  type:"PSU",  gen:720,obc:660,scst:560,year:2024},
    {name:"DRDO (Scientist B)",       type:"PSU",  gen:700,obc:645,scst:540,year:2024},
    {name:"ONGC (Exec EC)",           type:"PSU",  gen:650,obc:600,scst:500,year:2024},
    {name:"NTPC (Exec Trainee EC)",   type:"PSU",  gen:650,obc:595,scst:490,year:2024},
    {name:"BEL (Engineer EC)",        type:"PSU",  gen:640,obc:590,scst:480,year:2024},
    {name:"HAL (Engineer EC)",        type:"PSU",  gen:630,obc:580,scst:470,year:2024},
];

const TARGET_SCORES=[
    {name:"IISc Bangalore",     gen:800,obc:750,scst:650},
    {name:"IIT Madras",         gen:750,obc:700,scst:600},
    {name:"IIT Bombay",         gen:780,obc:720,scst:620},
    {name:"ISRO / BARC / DRDO", gen:720,obc:660,scst:560},
    {name:"Top PSUs (BEL/NTPC)",gen:650,obc:595,scst:490},
];

const PYQ_BUCKETS=["2000–2005","2006–2010","2011–2015","2016–2020","2021–2025"];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
const ACHIEVEMENTS=[
    {id:"first_topic",icon:"🌱",name:"First Step",     desc:"Complete your first topic",         check:s=>Object.values(s.syllabus).flat().some(t=>t.done)},
    {id:"ten_topics", icon:"📚",name:"Bookworm",       desc:"Complete 10 topics",                check:s=>Object.values(s.syllabus).flat().filter(t=>t.done).length>=10},
    {id:"fifty_topics",icon:"⚡",name:"Halfway Scholar",desc:"Complete 50 topics",               check:s=>Object.values(s.syllabus).flat().filter(t=>t.done).length>=50},
    {id:"half_done",  icon:"🎯",name:"Half-Time",      desc:"50% syllabus completed",            check:s=>{const a=Object.values(s.syllabus).flat();return a.length>0&&a.filter(t=>t.done).length/a.length>=0.5}},
    {id:"all_done",   icon:"🏆",name:"GATE Ready",     desc:"100% syllabus completed!",          check:s=>{const a=Object.values(s.syllabus).flat();return a.length>0&&a.every(t=>t.done)}},
    {id:"three_streak",icon:"🔥",name:"Ignited",       desc:"3-day study streak",                check:s=>calcStreakFromState(s)>=3},
    {id:"seven_streak",icon:"💪",name:"Warrior",       desc:"7-day streak",                      check:s=>calcStreakFromState(s)>=7},
    {id:"thirty_streak",icon:"💎",name:"Diamond",      desc:"30-day streak",                     check:s=>calcStreakFromState(s)>=30},
    {id:"first_test", icon:"📝",name:"Test Taker",     desc:"Log your first mock test result",   check:s=>s.tests.filter(t=>t.isCompleted).length>=1},
    {id:"five_tests", icon:"📊",name:"Test Veteran",   desc:"Complete 5 mock tests",             check:s=>s.tests.filter(t=>t.isCompleted).length>=5},
    {id:"ten_tests",  icon:"🎖",name:"Mock Master",    desc:"Complete 10 mock tests",            check:s=>s.tests.filter(t=>t.isCompleted).length>=10},
    {id:"fifty_hours",icon:"⏰",name:"Dedicated",      desc:"Log 50+ study hours",               check:s=>Object.values(s.hours).reduce((a,b)=>a+b,0)>=50},
    {id:"hundred_hours",icon:"🌟",name:"Scholar",      desc:"Log 100+ study hours",              check:s=>Object.values(s.hours).reduce((a,b)=>a+b,0)>=100},
    {id:"pyq_done",   icon:"📋",name:"PYQ Pro",        desc:"Complete all PYQ buckets",          check:s=>Object.values(s.pyq).flat().every(p=>p.done)},
    {id:"note_taker", icon:"🖊",name:"Note Maker",     desc:"Add notes to 10+ topics",           check:s=>Object.values(s.syllabus).flat().filter(t=>t.note).length>=10},
    {id:"first_journal",icon:"📔",name:"Diarist",      desc:"Write your first journal entry",    check:s=>Object.keys(s.journalEntries||{}).length>=1},
    {id:"formula_master",icon:"🔢",name:"Formula King",desc:"Add 20+ formulas to Formula Bank",  check:s=>Object.values(s.formulas||{}).flat().length>=20},
];

// ─── REFERENCE LINKS ──────────────────────────────────────────────────────────
const DEFAULT_REFS={
    "General Aptitude":[{title:"Quantitative Aptitude — RS Aggarwal",url:"https://www.youtube.com/results?search_query=gate+quantitative+aptitude+rs+aggarwal"},{title:"GATE GA Playlist — Made Easy",url:"https://www.youtube.com/results?search_query=gate+general+aptitude+made+easy"}],
    "Engineering Mathematics":[{title:"NPTEL Engineering Mathematics",url:"https://nptel.ac.in/courses/111/108/111108099/"},{title:"Krishna Nayak — Gate Math Playlist",url:"https://www.youtube.com/results?search_query=gate+engineering+mathematics+playlist"}],
    "Networks, Signals and Systems":[{title:"Signals & Systems — Oppenheim (MIT OCW)",url:"https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/"},{title:"NPTEL Networks & Systems",url:"https://nptel.ac.in/courses/117/104/117104064/"}],
    "Electronic Devices":[{title:"Semiconductor Physics — NPTEL",url:"https://nptel.ac.in/courses/117/105/117105080/"},{title:"IIT Lectures — Electronic Devices",url:"https://www.youtube.com/results?search_query=electronic+devices+GATE+IIT+lecture"}],
    "Analog Circuits":[{title:"Analog Electronics — NPTEL Nandita Das",url:"https://nptel.ac.in/courses/117/104/117104141/"},{title:"Op-Amp Circuits — Khan Academy",url:"https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic"}],
    "Digital Circuits":[{title:"Digital Electronics — GATE Lectures",url:"https://www.youtube.com/results?search_query=digital+circuits+GATE+lecture+playlist"},{title:"Neso Academy — Digital Circuits",url:"https://www.youtube.com/@nesoacademy"}],
    "Control Systems":[{title:"Control Systems — NPTEL IIT Kharagpur",url:"https://nptel.ac.in/courses/108/105/108105020/"},{title:"GATE Control Systems Playlist",url:"https://www.youtube.com/results?search_query=control+systems+GATE+preparation"}],
    "Communications":[{title:"Communication Engineering — NPTEL",url:"https://nptel.ac.in/courses/117/105/117105081/"},{title:"GATE Communications Playlist — ACE",url:"https://www.youtube.com/results?search_query=communications+GATE+ace+academy"}],
    "Electromagnetics":[{title:"Electromagnetics — IIT Madras NPTEL",url:"https://nptel.ac.in/courses/108/106/108106099/"},{title:"Antennas & EM Waves Playlist",url:"https://www.youtube.com/results?search_query=electromagnetics+GATE+lecture+playlist"}],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let state={
    userName:"Naveenkumar A",examDate:"2027-02-06",
    syllabus:{},pyq:{},tests:[],hours:{},
    trendsCustomMarks:{},trendImgData:null,
    topicNotes:{},formulas:{},bookmarks:{},
    journalEntries:{},schedule:{},
    todayTargets:{},           // { "YYYY-MM-DD": [{text,done},...] }
    subjectTargetDates:{},     // { subj: "YYYY-MM-DD" }
    userGoal:null,             // { label, date }
    darkMode:true,
};

// ─── INIT ──────────────────────────────────────────────────────────────────────
function initApp(){
    loadState(); applyTheme();
    renderProfile(); renderCountdown();
    setMotivation(); renderInstitutions();
    setupNavigation(); populateHourSubjects();
    populateScheduleSubjects();

    const today=new Date();
    document.getElementById('today-date-display').innerText=
        today.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    document.getElementById('target-date-label').innerText=
        today.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
    document.getElementById('h-date').valueAsDate=today;
    document.getElementById('journal-date').valueAsDate=today;
    document.getElementById('sch-date').valueAsDate=today;

    renderSyllabus(); renderSyllabusStatic(); renderFormulas();
    renderPYQ(); renderTests(); renderHoursChart(); renderHoursLog();
    renderTrendsPage(); renderPYQCounts();
    renderCutoffs('all'); renderTargetScores();
    renderJournal(); renderAchievements();
    renderSchedule(); renderSubjectTargets();
    renderTodayTargets();
    updateDashboardStats();

    document.getElementById('test-form').addEventListener('submit',handleTestSubmit);
    document.getElementById('hours-form').addEventListener('submit',handleHoursSubmit);
}

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────
const INIT_SYLLABUS=(()=>{
    const flat={};
    for(const[subj,data]of Object.entries(GATE_SYLLABUS)){
        flat[subj]=[];
        for(const[sec,topics]of Object.entries(data.sections)){
            topics.forEach(t=>flat[subj].push({text:`[${sec}] ${t}`,done:false,note:'',completedDate:null}));
        }
    }
    return flat;
})();

function loadState(){
    const saved=localStorage.getItem('gateECEState_v6');
    if(saved){try{state=Object.assign(state,JSON.parse(saved));}catch(e){}}
    for(const[subj,topics]of Object.entries(INIT_SYLLABUS)){
        if(!state.syllabus[subj]) state.syllabus[subj]=topics.map(t=>({...t}));
        else state.syllabus[subj]=state.syllabus[subj].map(t=>({note:'',completedDate:null,...t}));
        if(!state.pyq[subj]) state.pyq[subj]=PYQ_BUCKETS.map(b=>({period:b,done:false}));
        if(!state.bookmarks[subj]) state.bookmarks[subj]=[];
        if(!state.formulas[subj]) state.formulas[subj]=[];
    }
    if(!state.trendsCustomMarks) state.trendsCustomMarks={};
    if(!state.journalEntries) state.journalEntries={};
    if(!state.schedule) state.schedule={};
    if(!state.todayTargets) state.todayTargets={};
    if(!state.subjectTargetDates) state.subjectTargetDates={};
}
function saveState(){localStorage.setItem('gateECEState_v6',JSON.stringify(state));updateDashboardStats();}

// ─── THEME ─────────────────────────────────────────────────────────────────────
function toggleTheme(){state.darkMode=!state.darkMode;saveState();applyTheme();}
function applyTheme(){
    const btn=document.getElementById('theme-toggle');
    if(state.darkMode){document.documentElement.removeAttribute('data-theme');if(btn)btn.innerHTML='<i class="fas fa-moon"></i>';}
    else{document.documentElement.setAttribute('data-theme','light');if(btn)btn.innerHTML='<i class="fas fa-sun"></i>';}
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function renderProfile(){
    document.getElementById('user-name-display').innerText=state.userName;
    document.getElementById('profile-img').src=`https://ui-avatars.com/api/?name=${encodeURIComponent(state.userName)}&background=0D8ABC&color=fff&size=120`;
}
function openNameModal(){document.getElementById('name-input').value=state.userName;document.getElementById('name-modal').style.display='flex';}
function closeNameModal(){document.getElementById('name-modal').style.display='none';}
function saveName(){const v=document.getElementById('name-input').value.trim();if(!v)return;state.userName=v;renderProfile();saveState();closeNameModal();showToast('Name updated!');}

// ─── COUNTDOWN ─────────────────────────────────────────────────────────────────
function renderCountdown(){
    const exam=new Date(state.examDate+'T00:00:00');
    const days=Math.max(0,Math.ceil((exam-new Date())/86400000));
    document.getElementById('days-left-count').innerText=days;
    const fmtd=exam.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
    document.getElementById('exam-date-label').innerText=`GATE — ${fmtd}`;
    document.getElementById('exam-countdown-mini').innerText=`📅 ${days} days to exam`;
    renderGoalPill();
}
function editExamDate(){
    const d=prompt('Enter GATE exam date (YYYY-MM-DD):',state.examDate);
    if(d&&/^\d{4}-\d{2}-\d{2}$/.test(d)){state.examDate=d;saveState();renderCountdown();showToast('Date updated!');}
}
function renderGoalPill(){
    const pill=document.getElementById('goal-days-pill');
    const gl=document.getElementById('goal-label');
    const gd=document.getElementById('goal-days-left');
    if(!state.userGoal){pill.style.display='none';return;}
    const goalDate=new Date(state.userGoal.date);
    const daysLeft=Math.max(0,Math.ceil((goalDate-new Date())/86400000));
    pill.style.display='flex';
    gl.innerText=state.userGoal.label||'Goal';
    gd.innerText=`${daysLeft} days left`;
}
function setUserGoal(){
    const label=prompt('Goal name (e.g. "Finish Electromagnetics"):');
    if(!label)return;
    const date=prompt('Target date (YYYY-MM-DD):');
    if(!date)return;
    state.userGoal={label,date};saveState();renderGoalPill();showToast('Goal set!');
}

// ─── MOTIVATION ────────────────────────────────────────────────────────────────
function setMotivation(){
    const m=MOTIVATIONS[_motivationIdx];
    document.getElementById('motivation-banner').style.backgroundImage=`url('${m.img}')`;
    document.getElementById('motivational-quote').innerText=m.text;
    document.getElementById('motivational-inst').innerText=m.label;
}
function nextMotivation(){_motivationIdx=(_motivationIdx+1)%MOTIVATIONS.length;setMotivation();}

// ─── INSTITUTIONS ──────────────────────────────────────────────────────────────
function renderInstitutions(){
    const grid=document.getElementById('inst-grid');
    grid.innerHTML=INSTITUTIONS.map(inst=>`
        <div class="inst-card">
            <img src="${inst.img}" alt="${inst.name}"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                 loading="lazy">
            <div class="inst-photo-fallback" style="display:none;height:130px;background:${inst.color}22;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:${inst.color};">
                ${inst.name.split(' ').map(w=>w[0]).join('').slice(0,3)}
            </div>
            <div class="inst-card-info">
                <div class="inst-card-tag" style="color:${inst.color};">${inst.tag}</div>
                <div class="inst-card-name">${inst.name}</div>
            </div>
        </div>`).join('');
}

// ─── STREAK ────────────────────────────────────────────────────────────────────
function calcStreakFromState(s){
    let streak=0;const today=new Date();
    for(let i=0;i<365;i++){const d=new Date(today);d.setDate(today.getDate()-i);const k=d.toISOString().split('T')[0];if((s.hours[k]||0)>0)streak++;else if(i>0)break;}
    return streak;
}
function calcStreak(){return calcStreakFromState(state);}
function renderStreakBadge(){
    const s=calcStreak();
    document.getElementById('streak-count').innerText=s;
    document.getElementById('dash-streak-text').innerText=s;
}

// ─── HEATMAP ──────────────────────────────────────────────────────────────────
function renderHeatmap(){
    const container=document.getElementById('heatmap-container');if(!container)return;
    const today=new Date();const cells=[];
    for(let i=59;i>=0;i--){const d=new Date(today);d.setDate(today.getDate()-i);const k=d.toISOString().split('T')[0];const hrs=state.hours[k]||0;
        let lvl=0;if(hrs>0)lvl=hrs<2?1:hrs<5?2:hrs<8?3:4;
        const lbl=d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
        cells.push(`<div class="heat-cell heat-${lvl}" title="${lbl}: ${hrs}h"></div>`);}
    container.innerHTML=cells.join('');
}

// ─── TODAY'S TARGET (User-Editable) ───────────────────────────────────────────
function getTodayKey(){return new Date().toISOString().split('T')[0];}
function renderTodayTargets(){
    const k=getTodayKey();
    if(!state.todayTargets[k]) state.todayTargets[k]=[];
    const tasks=state.todayTargets[k];
    const container=document.getElementById('today-target-list');
    if(!container)return;
    if(tasks.length===0){container.innerHTML='<p style="color:var(--text-muted);font-size:0.88rem;padding:6px;">No tasks yet. Add tasks or click "Load Smart Suggestions".</p>';return;}
    container.innerHTML=tasks.map((t,i)=>`
        <div class="target-item ${t.done?'target-item-done':''}">
            <input type="checkbox" ${t.done?'checked':''} onchange="toggleTargetTask(${i})" style="accent-color:var(--accent-blue);width:15px;height:15px;cursor:pointer;flex-shrink:0;">
            <span class="target-text" style="${t.done?'text-decoration:line-through;opacity:0.5;':''}">${t.text}</span>
            <button onclick="deleteTargetTask(${i})" class="del-btn"><i class="fas fa-times"></i></button>
        </div>`).join('');
}
function addTodayTarget(){
    const inp=document.getElementById('target-input');const text=inp.value.trim();if(!text)return;
    const k=getTodayKey();if(!state.todayTargets[k])state.todayTargets[k]=[];
    state.todayTargets[k].push({text,done:false});inp.value='';saveState();renderTodayTargets();showToast('Task added!');
}
function toggleTargetTask(idx){const k=getTodayKey();state.todayTargets[k][idx].done=!state.todayTargets[k][idx].done;saveState();renderTodayTargets();}
function deleteTargetTask(idx){const k=getTodayKey();state.todayTargets[k].splice(idx,1);saveState();renderTodayTargets();}
function clearTodayTargets(){if(!confirm('Clear all tasks for today?'))return;const k=getTodayKey();state.todayTargets[k]=[];saveState();renderTodayTargets();}
function loadSmartSuggestions(){
    const priority=[];
    for(const[subj,topics]of Object.entries(state.syllabus)){
        const done=topics.filter(t=>t.done).length;const total=topics.length;if(!total)continue;
        const pct=done/total*100;const wt=WEIGHTAGE[subj]?.marks||8;
        const undone=topics.filter(t=>!t.done);
        undone.forEach(t=>priority.push({text:`${subj}: ${t.text.replace(/^\[.*?\]\s/,'')}`,score:(100-pct)+wt*2}));
    }
    priority.sort((a,b)=>b.score-a.score);const top=priority.slice(0,5);
    const k=getTodayKey();if(!state.todayTargets[k])state.todayTargets[k]=[];
    top.forEach(t=>{if(!state.todayTargets[k].find(x=>x.text===t.text))state.todayTargets[k].push({text:t.text,done:false});});
    saveState();renderTodayTargets();showToast('5 smart tasks loaded!');
}

// ─── WEAK AREA DETECTOR ────────────────────────────────────────────────────────
function renderWeakAreaAlert(){
    const alert=document.getElementById('weak-area-alert');const alertText=document.getElementById('weak-alert-text');if(!alert)return;
    const weak=[];
    for(const[subj,topics]of Object.entries(state.syllabus)){const done=topics.filter(t=>t.done).length;const total=topics.length;const pct=total>0?Math.round(done/total*100):0;if(pct<20&&total>0)weak.push({subj,pct});}
    weak.sort((a,b)=>a.pct-b.pct);
    if(weak.length>0){alert.style.display='flex';alertText.innerHTML=`<b>Needs attention:</b> ${weak.slice(0,3).map(w=>`<b>${w.subj}</b> (${w.pct}%)`).join(', ')}`;}
    else alert.style.display='none';
}

// ─── SPACED REPETITION ────────────────────────────────────────────────────────
function renderRevisionDue(){
    const box=document.getElementById('revision-due-box');const list=document.getElementById('revision-due-list');if(!box||!list)return;
    const today=new Date().toISOString().split('T')[0];const INTERVALS=[3,7,14,30];const due=[];
    for(const[subj,topics]of Object.entries(state.syllabus)){
        topics.forEach(t=>{
            if(!t.done||!t.completedDate)return;
            for(const interval of INTERVALS){const rev=new Date(t.completedDate);rev.setDate(rev.getDate()+interval);if(rev.toISOString().split('T')[0]===today)due.push({subj,text:t.text.replace(/^\[.*?\]\s/,''),interval});}
        });
    }
    if(due.length>0){box.style.display='block';list.innerHTML=due.slice(0,5).map(d=>`<div class="revision-item"><span class="target-subj">${d.subj}</span><span>${d.text}</span><span style="color:var(--accent-orange);font-size:0.76rem;">+${d.interval}d</span></div>`).join('');}
    else box.style.display='none';
}

// ─── TIMELINE (Completion Estimate) ───────────────────────────────────────────
function renderTimeline(){
    const container=document.getElementById('timeline-container');if(!container)return;
    const today=new Date();
    // avg topics done per day (last 30 days)
    let totalDone=0;Object.values(state.syllabus).flat().forEach(t=>{if(t.done&&t.completedDate){const d=new Date(t.completedDate);const diff=(today-d)/86400000;if(diff<=30)totalDone++;}});
    const rate=totalDone/30||0.3;
    const items=Object.entries(state.syllabus).map(([subj,topics])=>{
        const done=topics.filter(t=>t.done).length;const total=topics.length;const left=total-done;
        const pct=total>0?Math.round(done/total*100):0;const color=GATE_SYLLABUS[subj]?.color||'#3b82f6';
        const daysNeeded=rate>0?Math.ceil(left/rate):999;const finDate=new Date(today);finDate.setDate(today.getDate()+daysNeeded);
        const finLabel=pct===100?'✅ Done!':daysNeeded>365?'> 1 year':finDate.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
        return `<div style="display:grid;grid-template-columns:160px 1fr 90px 90px;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--card-border);">
            <span style="font-size:0.85rem;font-weight:600;color:${color};">${subj}</span>
            <div class="progress-bar" style="margin:0;height:7px;background:rgba(255,255,255,0.07);">
                <div class="fill" style="width:${pct}%;background:${color};"></div>
            </div>
            <span style="font-size:0.82rem;text-align:right;color:${pct===100?'var(--success)':'var(--text-muted)'};">${pct}%</span>
            <span style="font-size:0.78rem;text-align:right;color:${pct===100?'var(--success)':'var(--accent-orange)'};">${finLabel}</span>
        </div>`;
    });
    container.innerHTML=`<div style="display:grid;grid-template-columns:160px 1fr 90px 90px;gap:10px;padding:6px 0;margin-bottom:4px;border-bottom:2px solid var(--card-border);">
        <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);">SUBJECT</span>
        <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);">PROGRESS</span>
        <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);text-align:right;">DONE</span>
        <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);text-align:right;">EST. DATE</span>
    </div>${items.join('')}
    <p style="margin-top:10px;font-size:0.78rem;color:var(--text-muted);">At your current pace of ~${rate.toFixed(1)} topics/day</p>`;
}

// ─── SUBJECT TARGET DATES ─────────────────────────────────────────────────────
function renderSubjectTargets(){
    const container=document.getElementById('subject-targets-grid');if(!container)return;
    container.innerHTML=Object.keys(GATE_SYLLABUS).map(subj=>{
        const color=GATE_SYLLABUS[subj]?.color||'#3b82f6';
        const tDate=state.subjectTargetDates[subj]||'';
        const pct=getPct(subj);
        return`<div class="subj-target-card glass" style="border-left:3px solid ${color};">
            <div style="font-weight:600;font-size:0.85rem;color:${color};margin-bottom:4px;">${subj}</div>
            <div style="display:flex;gap:6px;align-items:center;">
                <input type="date" value="${tDate}" onchange="setSubjectTargetDate('${subj}',this.value)"
                    style="background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.1);padding:4px 7px;color:var(--text-main);border-radius:5px;font-size:0.8rem;font-family:inherit;flex:1;">
                <span style="font-size:0.78rem;color:${pct===100?'var(--success)':'var(--text-muted)'};">${pct}%</span>
            </div>
        </div>`;
    }).join('');
}
function setSubjectTargetDate(subj,date){state.subjectTargetDates[subj]=date;saveState();showToast(`Target set for ${subj}!`);}
function getPct(subj){const t=state.syllabus[subj];if(!t||!t.length)return 0;return Math.round(t.filter(x=>x.done).length/t.length*100);}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function setupNavigation(){
    const btns=document.querySelectorAll('.nav-btn');const views=document.querySelectorAll('.view');
    const TITLES={
        'view-dashboard':{t:'Dashboard',s:'Your GATE mission control center.'},
        'view-syllabus-static':{t:'GATE 2026 EC Syllabus',s:'Official verbatim syllabus from IIT Guwahati.'},
        'view-preparation':{t:'Preparation Tracker',s:'Mark topics done. Track subject % and overall progress.'},
        'view-schedule':{t:'Study Schedule',s:'Plan your week. Editable daily study planner.'},
        'view-formulas':{t:'Formula Bank',s:'Formulas, notes, and NPTEL/YouTube references per subject.'},
        'view-trends':{t:'Previous Year Trends',s:'Year-wise marks distribution (2021–2025) + topic frequency.'},
        'view-pyq':{t:'PYQ Tracker',s:'Previous Year Question solving tracker.'},
        'view-tests':{t:'Test Series Tracker',s:'Schedule and log your mock test results.'},
        'view-hours':{t:'Study Hours',s:'Log your daily study sessions and track weekly activity.'},
        'view-journal':{t:'Daily Journal',s:'Record what you studied, learnings, and areas to revisit.'},
        'view-achievements':{t:'Achievements',s:'Badges earned through your preparation milestones.'},
        'view-calculator':{t:'GATE Score Calculator',s:'Estimate your GATE score, percentile, and AIR.'},
        'view-cutoffs':{t:'Cutoff Tracker',s:'Historical IIT / IISc / PSU cutoffs for ECE.'},
        'view-backup':{t:'Backup & Restore',s:'Export your data as JSON. Restore from backup.'},
    };
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            btns.forEach(b=>b.classList.remove('active'));views.forEach(v=>v.classList.remove('active'));
            btn.classList.add('active');
            const id=btn.getAttribute('data-target');document.getElementById(id)?.classList.add('active');
            document.getElementById('page-title').innerText=TITLES[id]?.t||'';
            document.getElementById('page-subtitle').innerText=TITLES[id]?.s||'';
            if(id==='view-hours'){renderHoursChart();renderHoursLog();}
            if(id==='view-dashboard')updateDashboardStats();
            if(id==='view-achievements')renderAchievements();
            if(id==='view-schedule')renderSchedule();
        });
    });
}

// ─── TRENDS PAGE ──────────────────────────────────────────────────────────────
function renderTrendsPage(){
    const tbody=document.getElementById('trends-tbody');if(!tbody)return;
    const years=["2021","2022","2023","2024","2025"];
    const sorted=Object.entries(WEIGHTAGE).sort((a,b)=>b[1].marks-a[1].marks);
    tbody.innerHTML=sorted.map(([subj,data])=>{
        const customVal=state.trendsCustomMarks[subj]!==undefined?state.trendsCustomMarks[subj]:'';
        const avg=Math.round(years.reduce((s,y)=>s+(data.years[y]||0),0)/years.length);
        const cols=years.map(y=>{
            const v=data.years[y]!==undefined?data.years[y]:'-';
            const isNew=y==='2025';
            return`<td style="padding:10px;text-align:center;color:${isNew?'var(--accent-orange)':'var(--text-muted)'};${isNew?'font-weight:bold;':''}">${v}</td>`;
        }).join('');
        const priority=data.marks>=12?`<span style="color:var(--accent-orange);font-weight:bold;">High ⭐</span>`:data.marks<9?`<span style="color:var(--text-muted);">Lower</span>`:`<span style="color:var(--success);">Medium</span>`;
        return`<tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:10px;font-weight:bold;">${subj}</td>
            ${cols}
            <td style="padding:10px;text-align:center;color:#60a5fa;font-weight:bold;">${avg}</td>
            <td style="padding:8px 10px;text-align:center;">
                <input type="number" class="marks-input" placeholder="?" value="${customVal}"
                    onchange="saveTrendMarks('${subj}',this.value)"
                    style="width:55px;background:rgba(255,255,255,0.08);border:1px solid var(--card-border);border-radius:5px;color:var(--text-main);padding:4px 8px;font-size:0.88rem;text-align:center;">
            </td>
            <td style="padding:10px;text-align:center;">${priority}</td>
        </tr>`;
    }).join('');
    if(state.trendImgData){const img=document.getElementById('trend-img-preview');img.src=state.trendImgData;document.getElementById('trend-img-container').style.display='block';}
}
function saveTrendMarks(subj,val){state.trendsCustomMarks[subj]=val===''?undefined:parseFloat(val);saveState();showToast('Marks saved!');}
function loadTrendImage(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{const img=document.getElementById('trend-img-preview');img.src=ev.target.result;document.getElementById('trend-img-container').style.display='block';state.trendImgData=ev.target.result;saveState();showToast('Image saved!');};r.readAsDataURL(f);}
function clearTrendImage(){state.trendImgData=null;document.getElementById('trend-img-preview').src='';document.getElementById('trend-img-container').style.display='none';saveState();showToast('Image removed!');}

// ─── PYQ COUNT TABLE ──────────────────────────────────────────────────────────
function renderPYQCounts(){
    const tbody=document.getElementById('pyqcount-tbody');if(!tbody)return;
    const sorted=[...PYQ_TOPIC_COUNTS].sort((a,b)=>b.count-a.count);
    tbody.innerHTML=sorted.map(r=>{
        const color=GATE_SYLLABUS[r.subj]?.color||'#3b82f6';
        const imp=r.count>=15?`<span style="background:rgba(239,68,68,0.15);color:#f87171;padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:700;">Must Do</span>`:
                  r.count>=10?`<span style="background:rgba(249,115,22,0.15);color:var(--accent-orange);padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:700;">High</span>`:
                  r.count>=7?`<span style="background:rgba(16,185,129,0.15);color:var(--success);padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:700;">Medium</span>`:
                  `<span style="font-size:0.75rem;color:var(--text-muted);">Normal</span>`;
        return`<tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:9px 10px;font-size:0.87rem;">${r.topic}</td>
            <td style="padding:9px 10px;text-align:center;"><span style="background:${color}22;color:${color};padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:700;">${r.subj.split(' ')[0]}</span></td>
            <td style="padding:9px 10px;text-align:center;font-weight:bold;color:${r.count>=15?'#f87171':r.count>=10?'var(--accent-orange)':'var(--text-main)'};">${r.count}x</td>
            <td style="padding:9px 10px;text-align:center;">${imp}</td>
        </tr>`;
    }).join('');
}

// ─── STATIC SYLLABUS ─────────────────────────────────────────────────────────
function renderSyllabusStatic(){
    const container=document.getElementById('syllabus-static-container');if(!container)return;
    container.innerHTML='';
    for(const[subj,data]of Object.entries(GATE_SYLLABUS)){
        const card=document.createElement('div');card.className='subject-card glass';card.style.borderLeft=`4px solid ${data.color}`;
        let sections='';
        for(const[sec,topics]of Object.entries(data.sections)){
            sections+=`<div class="static-section"><div class="static-section-title"><i class="fas fa-chevron-right" style="color:${data.color};margin-right:6px;font-size:0.72rem;"></i>${sec}</div><ul class="static-topic-list">${topics.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
        }
        card.innerHTML=`<div class="subject-header" onclick="toggleAccordion(this)">
            <div class="subject-title-wrap"><span class="subject-title" style="color:${data.color};">${subj}</span><span class="weight-badge" style="background:${data.color}22;color:${data.color};border:1px solid ${data.color}44;">~${data.marks} Marks</span></div>
            <i class="fas fa-chevron-down" style="color:var(--text-muted);font-size:0.85rem;"></i></div>
            <div class="topic-list" style="padding:14px 18px 18px;">${sections}</div>`;
        container.appendChild(card);
    }
}

// ─── PREPARATION TRACKER ─────────────────────────────────────────────────────
let _prepFilter='all';
function filterPrep(f,btn){_prepFilter=f;document.querySelectorAll('#view-preparation .type-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderSyllabus();}
function renderSyllabus(){
    const container=document.getElementById('syllabus-container');if(!container)return;container.innerHTML='';
    let gDone=0,gTotal=0;
    for(const[subj,topics]of Object.entries(state.syllabus)){
        let filtered=topics;
        if(_prepFilter==='bookmarks') filtered=topics.filter((_,i)=>state.bookmarks[subj]?.includes(i));
        if(_prepFilter==='pending') filtered=topics.filter(t=>!t.done);
        if(_prepFilter==='done') filtered=topics.filter(t=>t.done);
        const done=topics.filter(t=>t.done).length;const total=topics.length;
        gDone+=done;gTotal+=total;
        const pct=total>0?Math.round(done/total*100):0;const color=GATE_SYLLABUS[subj]?.color||'#3b82f6';
        const wt=WEIGHTAGE[subj]?`~${WEIGHTAGE[subj].marks}M`:'';
        if(filtered.length===0&&_prepFilter!=='all')continue;
        const card=document.createElement('div');card.className='subject-card glass';card.style.borderLeft=`4px solid ${color}`;
        card.innerHTML=`<div class="subject-header" onclick="toggleAccordion(this)">
            <div class="subject-title-wrap"><span class="subject-title">${subj}</span>${wt?`<span class="weight-badge">${wt}</span>`:''}</div>
            <div style="display:flex;align-items:center;gap:8px;">
                <div class="progress-bar" style="width:60px;height:6px;margin:0;background:rgba(255,255,255,0.1);"><div class="fill" style="width:${pct}%;background:${color};"></div></div>
                <span style="font-size:0.85rem;color:${pct===100?'var(--success)':'var(--text-main)'};">${pct}%</span>
            </div></div>
            <div class="topic-list">
                ${filtered.map((t,i)=>{
                    const realIdx=topics.indexOf(t);const isBookmarked=state.bookmarks[subj]?.includes(realIdx);
                    const secMatch=t.text.match(/^\[([^\]]+)\]/);const secLabel=secMatch?secMatch[1]:'';const topicText=t.text.replace(/^\[.*?\]\s/,'');
                    return`<div class="topic-item ${t.done?'topic-done':''}">
                        <input type="checkbox" id="tp_${subj.replace(/\W/g,'')}_${realIdx}" ${t.done?'checked':''} onchange="toggleTopic('${subj}',${realIdx})">
                        <label for="tp_${subj.replace(/\W/g,'')}_${realIdx}">
                            ${secLabel?`<span style="color:var(--text-muted);font-size:0.73rem;background:rgba(255,255,255,0.06);padding:1px 5px;border-radius:3px;margin-right:5px;">${secLabel}</span>`:''}${topicText}
                        </label>
                        <button onclick="toggleBookmark('${subj}',${realIdx})" title="Bookmark" style="background:transparent;border:none;cursor:pointer;font-size:0.85rem;padding:2px 4px;">${isBookmarked?'⭐':'☆'}</button>
                        <button onclick="openNotesModal('${subj}',${realIdx})" title="${t.note?'📝 Has notes':'Add notes'}" style="background:transparent;border:none;cursor:pointer;font-size:0.82rem;padding:2px 4px;color:${t.note?'var(--accent-orange)':'var(--text-muted)'};">📝</button>
                        <button class="del-btn" onclick="deleteTopic(event,'${subj}',${realIdx})"><i class="fas fa-trash"></i></button>
                    </div>`;
                }).join('')}
                <button class="primary-btn" onclick="addTopic(event,'${subj}')" style="margin-top:10px;font-size:0.82rem;padding:6px 0;background:rgba(59,130,246,0.18);border:1px dashed var(--accent-blue);"><i class="fas fa-plus"></i> Add Topic</button>
            </div>`;
        container.appendChild(card);
    }
    const pct=gTotal>0?Math.round(gDone/gTotal*100):0;
    const el1=document.getElementById('prep-page-overall-fill');const el2=document.getElementById('prep-page-overall-text');
    if(el1)el1.style.width=pct+'%';if(el2)el2.innerText=pct+'%';
}

function toggleBookmark(subj,idx){
    if(!state.bookmarks[subj])state.bookmarks[subj]=[];
    const i=state.bookmarks[subj].indexOf(idx);
    if(i===-1)state.bookmarks[subj].push(idx);else state.bookmarks[subj].splice(i,1);
    saveState();renderSyllabus();showToast(i===-1?'⭐ Bookmarked!':'Bookmark removed');
}

// ─── TOPIC NOTES ──────────────────────────────────────────────────────────────
let _noteSubj='',_noteIdx=-1;
function openNotesModal(subj,idx){_noteSubj=subj;_noteIdx=idx;const t=state.syllabus[subj][idx];document.getElementById('notes-modal-topic').innerText=t.text.replace(/^\[.*?\]\s/,'');document.getElementById('notes-modal-content').value=t.note||'';document.getElementById('notes-modal').style.display='flex';}
function closeNotesModal(){document.getElementById('notes-modal').style.display='none';}
function saveTopicNote(){const val=document.getElementById('notes-modal-content').value;state.syllabus[_noteSubj][_noteIdx].note=val;saveState();renderSyllabus();closeNotesModal();showToast('Note saved!');}
function toggleAccordion(hdr){const list=hdr.nextElementSibling;list.style.display=list.style.display==='flex'?'none':'flex';}
function toggleTopic(subj,idx){const t=state.syllabus[subj][idx];t.done=!t.done;t.completedDate=t.done?new Date().toISOString().split('T')[0]:null;saveState();renderSyllabus();showToast();}
function addTopic(e,subj){e.stopPropagation();const text=prompt(`Add topic to "${subj}":`);if(text?.trim()){state.syllabus[subj].push({text:text.trim(),done:false,note:'',completedDate:null});saveState();renderSyllabus();showToast('Topic added!');}}
function deleteTopic(e,subj,idx){e.stopPropagation();if(!confirm('Delete?'))return;state.syllabus[subj].splice(idx,1);if(state.bookmarks[subj])state.bookmarks[subj]=state.bookmarks[subj].filter(i=>i!==idx).map(i=>i>idx?i-1:i);saveState();renderSyllabus();showToast('Deleted!');}

// ─── FORMULA BANK ──────────────────────────────────────────────────────────────
function renderFormulas(){
    const container=document.getElementById('formula-container');if(!container)return;container.innerHTML='';
    for(const[subj,data]of Object.entries(GATE_SYLLABUS)){
        if(!state.formulas[subj])state.formulas[subj]=[];
        const color=data.color;const refs=DEFAULT_REFS[subj]||[];
        const card=document.createElement('div');card.className='subject-card glass';card.style.borderLeft=`4px solid ${color}`;
        const fHTML=state.formulas[subj].length===0?`<p style="color:var(--text-muted);font-size:0.85rem;font-style:italic;margin-bottom:10px;">No formulas yet. Add your first one below.</p>`:
            state.formulas[subj].map((f,i)=>`<div class="formula-item"><div class="formula-text">${f.text.replace(/\n/g,'<br>')}</div><button class="del-btn" onclick="deleteFormula('${subj}',${i})"><i class="fas fa-trash"></i></button></div>`).join('');
        const refsHTML=refs.map(r=>`<a href="${r.url}" target="_blank" style="display:flex;align-items:center;gap:6px;padding:5px 9px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:5px;color:#60a5fa;font-size:0.82rem;text-decoration:none;transition:0.2s;" onmouseover="this.style.background='rgba(59,130,246,0.2)'" onmouseout="this.style.background='rgba(59,130,246,0.08)'"><i class="fas fa-external-link-alt"></i>${r.title}</a>`).join('');
        card.innerHTML=`<div class="subject-header" onclick="toggleAccordion(this)">
            <div class="subject-title-wrap"><span class="subject-title" style="color:${color};">${subj}</span><span class="weight-badge" style="background:${color}22;color:${color};border:1px solid ${color}44;">${state.formulas[subj].length} formulas</span></div>
            <i class="fas fa-chevron-down" style="color:var(--text-muted);"></i></div>
            <div class="topic-list" style="flex-direction:column;gap:8px;">
                ${fHTML}
                <div style="display:flex;gap:8px;margin-bottom:4px;">
                    <textarea id="fi_${subj.replace(/\W/g,'')}" rows="2" placeholder="e.g. L{e^at} = 1/(s-a)  or any notes..." style="flex:1;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.1);padding:7px;color:var(--text-main);border-radius:6px;font-family:monospace;font-size:0.87rem;resize:vertical;"></textarea>
                    <button onclick="addFormula('${subj}')" class="primary-btn" style="width:auto;padding:6px 12px;align-self:flex-end;"><i class="fas fa-plus"></i></button>
                </div>
                ${refs.length>0?`<h4 style="font-size:0.85rem;color:var(--text-muted);margin-top:6px;">📚 Reference Links</h4><div style="display:flex;flex-direction:column;gap:5px;">${refsHTML}</div>`:''}
            </div>`;
        container.appendChild(card);
    }
}
function addFormula(subj){const id=`fi_${subj.replace(/\W/g,'')}`;const text=document.getElementById(id)?.value?.trim();if(!text)return;if(!state.formulas[subj])state.formulas[subj]=[];state.formulas[subj].push({text});saveState();renderFormulas();showToast('Formula saved!');}
function deleteFormula(subj,idx){if(!confirm('Delete formula?'))return;state.formulas[subj].splice(idx,1);saveState();renderFormulas();showToast('Deleted!');}

// ─── PYQ ──────────────────────────────────────────────────────────────────────
function renderPYQ(){
    const container=document.getElementById('pyq-container');container.innerHTML='';
    for(const[subj,buckets]of Object.entries(state.pyq)){
        const card=document.createElement('div');card.className='pyq-card glass';
        card.innerHTML=`<div class="pyq-card-header"><h3>${subj}</h3><button class="del-btn" onclick="deletePYQSubject('${subj}')"><i class="fas fa-trash"></i></button></div>
            <div class="pyq-grid">${buckets.map((b,i)=>`<div class="topic-item"><input type="checkbox" id="pyq_${subj.replace(/\W/g,'')}_${i}" ${b.done?'checked':''} onchange="togglePYQ('${subj}',${i})"><label for="pyq_${subj.replace(/\W/g,'')}_${i}">${b.period}</label></div>`).join('')}</div>`;
        container.appendChild(card);
    }
}
function togglePYQ(subj,idx){state.pyq[subj][idx].done=!state.pyq[subj][idx].done;saveState();showToast();}
function deletePYQSubject(subj){if(!confirm(`Remove "${subj}"?`))return;delete state.pyq[subj];saveState();renderPYQ();}

// ─── STUDY SCHEDULE ───────────────────────────────────────────────────────────
function populateScheduleSubjects(){
    const sel=document.getElementById('sch-subject');if(!sel)return;
    Object.keys(GATE_SYLLABUS).forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o);});
}
function saveScheduleEntry(){
    const date=document.getElementById('sch-date').value;const subj=document.getElementById('sch-subject').value;
    const hrs=document.getElementById('sch-hours').value;const tasks=document.getElementById('sch-tasks').value.trim();
    if(!date)return;if(!state.schedule[date])state.schedule[date]=[];
    state.schedule[date].push({subject:subj,hours:hrs,tasks});
    saveState();renderSchedule();showToast('Schedule saved!');
}
function deleteScheduleEntry(date,idx){if(!confirm('Delete?'))return;state.schedule[date].splice(idx,1);if(!state.schedule[date].length)delete state.schedule[date];saveState();renderSchedule();}
function renderSchedule(){
    const container=document.getElementById('schedule-grid');if(!container)return;
    const entries=Object.entries(state.schedule).sort((a,b)=>a[0].localeCompare(b[0]));
    if(entries.length===0){container.innerHTML='<div class="glass" style="padding:20px;text-align:center;color:var(--text-muted);">No schedule entries yet. Add one below!</div>';return;}
    container.innerHTML=entries.map(([date,items])=>{
        const fmtDate=new Date(date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'});
        const today=getTodayKey();const isPast=date<today;const isToday=date===today;
        const borderColor=isToday?'var(--accent-orange)':isPast?'var(--text-muted)':'var(--accent-blue)';
        return`<div class="glass" style="padding:14px;border-left:3px solid ${borderColor};margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-weight:700;font-size:0.9rem;color:${isToday?'var(--accent-orange)':'var(--text-main)'};">${fmtDate}${isToday?' — TODAY':''}</span>
            </div>
            ${items.map((item,i)=>`<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:6px 10px;background:rgba(255,255,255,0.04);border-radius:5px;margin-bottom:5px;gap:10px;">
                <div><span style="color:${GATE_SYLLABUS[item.subject]?.color||'#3b82f6'};font-weight:600;font-size:0.85rem;">${item.subject}</span>${item.hours?`<span style="color:var(--text-muted);font-size:0.8rem;margin-left:8px;">⏱ ${item.hours}h</span>`:''}${item.tasks?`<div style="color:var(--text-muted);font-size:0.82rem;margin-top:3px;">${item.tasks}</div>`:''}</div>
                <button onclick="deleteScheduleEntry('${date}',${i})" class="del-btn"><i class="fas fa-trash"></i></button>
            </div>`).join('')}
        </div>`;
    }).join('');
}

// ─── TEST SERIES ──────────────────────────────────────────────────────────────
function setTestFormType(type){document.getElementById('t-form-type').value=type;document.getElementById('btn-type-schedule').classList.toggle('active',type==='schedule');document.getElementById('btn-type-completed').classList.toggle('active',type==='completed');document.getElementById('marks-section').style.display=type==='completed'?'block':'none';document.getElementById('t-date-label').innerText=type==='completed'?'Date Taken':'Scheduled Date';document.getElementById('t-submit-btn').innerText=type==='completed'?'Save Result':'Save Schedule';}
function handleTestSubmit(e){e.preventDefault();const type=document.getElementById('t-form-type').value;const editId=document.getElementById('t-editing-id').value;const test={id:editId?Number(editId):Date.now(),isCompleted:type==='completed',date:document.getElementById('t-date').value,provider:document.getElementById('t-provider').value.trim(),topic:document.getElementById('t-topic').value.trim(),scored:type==='completed'?(parseFloat(document.getElementById('t-scored').value)||0):null,total:type==='completed'?(parseFloat(document.getElementById('t-total').value)||0):null,analysis:type==='completed'?document.getElementById('t-analysis').value.trim():null};if(editId){state.tests=state.tests.filter(t=>t.id!==test.id);document.getElementById('t-editing-id').value='';}state.tests.unshift(test);saveState();renderTests();e.target.reset();setTestFormType('schedule');showToast(type==='schedule'?'Scheduled!':'Result Saved!');}
function convertScheduled(id){const t=state.tests.find(t=>t.id===id);if(!t)return;setTestFormType('completed');document.getElementById('t-editing-id').value=id;document.getElementById('t-provider').value=t.provider;document.getElementById('t-topic').value=t.topic;document.getElementById('t-date').value=t.date;document.querySelector('.test-form')?.scrollIntoView({behavior:'smooth'});}
function deleteTest(id){if(!confirm('Delete?'))return;state.tests=state.tests.filter(t=>t.id!==id);saveState();renderTests();showToast('Deleted!');}
function renderTests(){
    const list=document.getElementById('tests-list');const sch=document.getElementById('tests-scheduled-list');
    const completed=state.tests.filter(t=>t.isCompleted);const scheduled=state.tests.filter(t=>!t.isCompleted);
    list.innerHTML=completed.length===0?'<p style="color:var(--text-muted);font-size:0.88rem;">No completed tests yet.</p>':completed.map(t=>{const pct=t.total>0?Math.round(t.scored/t.total*100):0;const color=pct>=70?'var(--success)':pct>=50?'var(--accent-orange)':'var(--danger)';return`<div class="test-result-card glass"><div class="tr-header"><div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div><div class="tr-score" style="color:${color}">${t.scored}/${t.total} (${pct}%)</div></div>${t.analysis?`<div class="tr-analysis">${t.analysis}</div>`:''}<div class="tr-actions"><button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i></button></div></div>`;}).join('');
    sch.innerHTML=scheduled.length===0?'<p style="color:var(--text-muted);font-size:0.88rem;">No tests scheduled.</p>':scheduled.map(t=>`<div class="test-result-card glass" style="border-left-color:var(--accent-orange)"><div class="tr-header"><div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div></div><div class="tr-actions"><button class="small-btn" onclick="convertScheduled(${t.id})"><i class="fas fa-pen"></i> Log Result</button><button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i></button></div></div>`).join('');
}

// ─── STUDY HOURS ──────────────────────────────────────────────────────────────
function populateHourSubjects(){const sel=document.getElementById('h-subject');if(!sel)return;Object.keys(GATE_SYLLABUS).forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o);});}
function handleHoursSubmit(e){e.preventDefault();const date=document.getElementById('h-date').value;const hrs=parseFloat(document.getElementById('h-amount').value);if(!date||isNaN(hrs))return;state.hours[date]=(state.hours[date]||0)+hrs;saveState();renderHoursChart();renderHoursLog();renderHeatmap();renderStreakBadge();showToast('Hours logged!');}
function deleteHoursEntry(date){if(!confirm(`Delete hours for ${date}?`))return;delete state.hours[date];saveState();renderHoursChart();renderHoursLog();renderHeatmap();renderStreakBadge();}
function renderHoursChart(){const chart=document.getElementById('hours-chart');if(!chart)return;const today=new Date();const days=[];for(let i=6;i>=0;i--){const d=new Date(today);d.setDate(today.getDate()-i);days.push(d.toISOString().split('T')[0]);}const max=Math.max(10,...days.map(d=>state.hours[d]||0));chart.innerHTML=days.map(d=>{const val=state.hours[d]||0;const pct=(val/max)*100;const label=new Date(d).toLocaleDateString('en-US',{weekday:'short'});return`<div class="bar-col"><div style="font-size:0.72rem;color:var(--text-main);font-weight:bold;">${val?val+'h':''}</div><div class="bar" style="height:${pct}%;"></div><div class="bar-label">${label}</div></div>`;}).join('');}
function renderHoursLog(){const c=document.getElementById('hours-log-list');const entries=Object.entries(state.hours).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,20);c.innerHTML=entries.length===0?'<p style="color:var(--text-muted);font-size:0.85rem;">No hours logged.</p>':entries.map(([date,hrs])=>`<div class="hours-log-item"><span>${new Date(date).toLocaleDateString('en-IN',{day:'numeric',month:'short'})}</span><span style="font-weight:600;">${hrs}h</span><button class="del-btn" onclick="deleteHoursEntry('${date}')"><i class="fas fa-trash"></i></button></div>`).join('');}

// ─── DAILY JOURNAL ────────────────────────────────────────────────────────────
function saveJournalEntry(){
    const date=document.getElementById('journal-date').value;const mood=document.getElementById('journal-mood').value;
    const studied=document.getElementById('journal-studied').value.trim();const learnings=document.getElementById('journal-learnings').value.trim();const review=document.getElementById('journal-review').value.trim();
    if(!date||(!studied&&!learnings&&!review)){showToast('Add at least some content!');return;}
    state.journalEntries[date]={mood,studied,learnings,review,ts:Date.now()};saveState();renderJournal();showToast('Journal saved!');}
function deleteJournalEntry(date){if(!confirm('Delete this journal entry?'))return;delete state.journalEntries[date];saveState();renderJournal();showToast('Deleted!');}
function renderJournal(){
    const container=document.getElementById('journal-list');if(!container)return;
    const entries=Object.entries(state.journalEntries).sort((a,b)=>b[0].localeCompare(a[0]));
    container.innerHTML=entries.length===0?'<div class="glass" style="padding:16px;text-align:center;color:var(--text-muted);">No journal entries yet. Write your first one above!</div>':
        entries.map(([date,e])=>{
            const fmtDate=new Date(date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
            return`<div class="glass" style="padding:16px;border-left:4px solid #06b6d4;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div><span style="font-weight:700;">${e.mood} ${fmtDate}</span></div>
                    <button onclick="deleteJournalEntry('${date}')" class="del-btn"><i class="fas fa-trash"></i></button>
                </div>
                ${e.studied?`<div style="margin-bottom:8px;"><span style="color:#06b6d4;font-size:0.78rem;font-weight:700;text-transform:uppercase;">Studied</span><p style="font-size:0.87rem;margin-top:3px;">${e.studied}</p></div>`:''}
                ${e.learnings?`<div style="margin-bottom:8px;"><span style="color:var(--success);font-size:0.78rem;font-weight:700;text-transform:uppercase;">Key Learnings</span><p style="font-size:0.87rem;margin-top:3px;">${e.learnings}</p></div>`:''}
                ${e.review?`<div><span style="color:var(--accent-orange);font-size:0.78rem;font-weight:700;text-transform:uppercase;">To Revisit</span><p style="font-size:0.87rem;margin-top:3px;">${e.review}</p></div>`:''}
            </div>`;
        }).join('');
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
function renderAchievements(){
    const container=document.getElementById('achievements-grid');if(!container)return;
    container.innerHTML=ACHIEVEMENTS.map(a=>{
        const earned=a.check(state);
        return`<div class="achievement-card ${earned?'earned':'locked'} glass">
            <div class="ach-icon">${a.icon}</div>
            <div class="ach-name">${a.name}</div>
            <div class="ach-desc">${a.desc}</div>
            ${earned?'<div class="ach-earned-badge">✅ Earned</div>':'<div class="ach-locked-badge">🔒 Locked</div>'}
        </div>`;
    }).join('');
}

// ─── SCORE CALCULATOR ────────────────────────────────────────────────────────
function calculateScore(){
    const raw=parseFloat(document.getElementById('calc-raw')?.value);
    const box=document.getElementById('calc-result');if(!box)return;
    if(isNaN(raw)||raw<0||raw>100){box.style.display='none';return;}
    const params={'2025':{Mq:24,Mt:78},'2024':{Mq:25,Mt:80},'2023':{Mq:23,Mt:82}};
    const p=params[document.getElementById('calc-year')?.value]||params['2025'];
    let score=Math.round(350+((raw-p.Mq)/(p.Mt-p.Mq))*550);score=Math.min(1000,Math.max(0,score));
    let airMin,airMax;
    if(raw>=78){airMin=1;airMax=50;}else if(raw>=65){airMin=51;airMax=300;}else if(raw>=55){airMin=301;airMax=800;}else if(raw>=50){airMin=801;airMax=1500;}else if(raw>=45){airMin=1501;airMax=3000;}else if(raw>=40){airMin=3001;airMax=6000;}else if(raw>=35){airMin=6001;airMax=12000;}else{airMin=12001;airMax=50000;}
    const percentile=Math.round(Math.max(0,Math.min(99.9,100-(airMin/130000)*100)));
    const col=score>=750?'#10b981':score>=600?'#f59e0b':'#ef4444';
    box.style.display='block';box.innerHTML=`<div class="calc-result-grid">
        <div class="calc-metric" style="border-color:${col};"><div class="calc-metric-val" style="color:${col};">${score}</div><div class="calc-metric-label">GATE Score</div></div>
        <div class="calc-metric"><div class="calc-metric-val">${raw}/100</div><div class="calc-metric-label">Raw Marks</div></div>
        <div class="calc-metric"><div class="calc-metric-val">${airMin}–${airMax}</div><div class="calc-metric-label">Est. AIR</div></div>
        <div class="calc-metric"><div class="calc-metric-val">~${percentile}%ile</div><div class="calc-metric-label">Percentile</div></div>
    </div><p style="margin-top:10px;font-size:0.8rem;color:var(--text-muted);">⚠️ Estimation only. Actual score depends on normalization.</p>`;
}
function renderTargetScores(){const tbody=document.getElementById('target-score-tbody');if(!tbody)return;tbody.innerHTML=TARGET_SCORES.map(t=>`<tr style="border-bottom:1px solid var(--card-border);"><td style="padding:9px;">${t.name}</td><td style="padding:9px;text-align:center;color:var(--accent-orange);font-weight:bold;">${t.gen}</td><td style="padding:9px;text-align:center;color:var(--accent-blue);">${t.obc}</td><td style="padding:9px;text-align:center;color:var(--success);">${t.scst}</td></tr>`).join('');}

// ─── CUTOFF TRACKER ──────────────────────────────────────────────────────────
function filterCutoffs(type,btn){document.querySelectorAll('#cutoff-filter .type-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderCutoffs(type);}
function renderCutoffs(type){
    const tbody=document.getElementById('cutoffs-tbody');if(!tbody)return;
    const data=type==='all'?IIT_CUTOFFS:IIT_CUTOFFS.filter(c=>c.type===type);
    tbody.innerHTML=data.map(c=>{const col=c.type==='IIT'?'#3b82f6':c.type==='IISc'?'#10b981':'#f59e0b';return`<tr style="border-bottom:1px solid var(--card-border);"><td style="padding:11px;font-weight:600;">${c.name}</td><td style="padding:11px;text-align:center;"><span style="background:${col}22;color:${col};padding:2px 8px;border-radius:10px;font-size:0.75rem;font-weight:700;">${c.type}</span></td><td style="padding:11px;text-align:center;font-weight:bold;color:var(--accent-orange);">${c.gen}</td><td style="padding:11px;text-align:center;color:var(--accent-blue);">${c.obc}</td><td style="padding:11px;text-align:center;color:var(--success);">${c.scst}</td><td style="padding:11px;text-align:center;color:var(--text-muted);">${c.year}</td></tr>`;}).join('');
}

// ─── BACKUP / RESTORE / RESET ────────────────────────────────────────────────
function backupData(){
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');
    a.href=url;a.download=`gate_ece_backup_${new Date().toISOString().split('T')[0]}.json`;a.click();URL.revokeObjectURL(url);showToast('Backup downloaded!');}
function restoreData(e){
    const file=e.target.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=ev=>{try{const data=JSON.parse(ev.target.result);Object.assign(state,data);saveState();window.location.reload();}catch{document.getElementById('restore-status').innerHTML='<span style="color:var(--danger);">❌ Invalid JSON file. Please use a valid backup.</span>';}};
    reader.readAsText(file);}
function resetAllData(){if(!confirm('⚠️ DELETE ALL DATA? This cannot be undone!'))return;localStorage.removeItem('gateECEState_v6');window.location.reload();}

// ─── WEEKLY REPORT ────────────────────────────────────────────────────────────
function showWeeklyReport(){
    const modal=document.getElementById('weekly-report-modal');const content=document.getElementById('weekly-report-content');if(!modal||!content)return;
    const today=new Date();let weekHrs=0;const weekDays=[];
    for(let i=6;i>=0;i--){const d=new Date(today);d.setDate(today.getDate()-i);const k=d.toISOString().split('T')[0];weekHrs+=(state.hours[k]||0);weekDays.push({label:d.toLocaleDateString('en-US',{weekday:'short'}),hrs:state.hours[k]||0});}
    let sylDone=0,sylTotal=0;Object.values(state.syllabus).flat().forEach(t=>{sylTotal++;if(t.done)sylDone++;});
    const weekTests=state.tests.filter(t=>t.isCompleted&&t.date&&new Date(t.date)>=(new Date(today.getTime()-7*86400000)));
    const avgScore=weekTests.length>0?Math.round(weekTests.reduce((s,t)=>s+(t.scored/t.total*100),0)/weekTests.length):0;
    content.innerHTML=`
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);padding:14px;border-radius:8px;text-align:center;"><div style="font-size:1.8rem;font-weight:700;color:#60a5fa;">${weekHrs.toFixed(1)}h</div><div style="font-size:0.82rem;color:var(--text-muted);">Hours This Week</div></div>
            <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);padding:14px;border-radius:8px;text-align:center;"><div style="font-size:1.8rem;font-weight:700;color:#34d399;">${Math.round(sylDone/Math.max(1,sylTotal)*100)}%</div><div style="font-size:0.82rem;color:var(--text-muted);">Syllabus Done</div></div>
            <div style="background:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.2);padding:14px;border-radius:8px;text-align:center;"><div style="font-size:1.8rem;font-weight:700;color:var(--accent-orange);">${calcStreak()}</div><div style="font-size:0.82rem;color:var(--text-muted);">Current Streak 🔥</div></div>
            <div style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);padding:14px;border-radius:8px;text-align:center;"><div style="font-size:1.8rem;font-weight:700;color:#a78bfa;">${weekTests.length>0?avgScore+'%':'—'}</div><div style="font-size:0.82rem;color:var(--text-muted);">Avg Test Score</div></div>
        </div>
        <h4 style="margin-bottom:10px;">Daily Hours This Week</h4>
        <div style="display:flex;align-items:flex-end;gap:8px;height:80px;margin-bottom:16px;padding-bottom:20px;">
            ${weekDays.map(d=>{const pct=weekHrs>0?(d.hrs/Math.max(...weekDays.map(x=>x.hrs),1))*100:0;return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="font-size:0.7rem;color:var(--text-main);">${d.hrs?d.hrs+'h':''}</div><div style="width:100%;height:${pct}%;background:var(--accent-blue);border-radius:4px 4px 0 0;min-height:3px;"></div><div style="font-size:0.7rem;color:var(--text-muted);">${d.label}</div></div>`;}).join('')}
        </div>
        <button onclick="exportPDF()" class="primary-btn" style="max-width:200px;"><i class="fas fa-download"></i> Export Full Report</button>`;
    modal.style.display='flex';
}
function closeWeeklyReport(){document.getElementById('weekly-report-modal').style.display='none';}

// ─── SCORE CHART ──────────────────────────────────────────────────────────────
function renderScoreChart(){
    const container=document.getElementById('dash-score-chart');if(!container)return;
    const completed=state.tests.filter(t=>t.isCompleted&&t.total>0).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(-8);
    if(completed.length===0){container.innerHTML='<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:20px 0;">Log test results to see your score trend here.</p>';return;}
    const html=`<div style="display:flex;align-items:flex-end;gap:8px;height:130px;padding-bottom:24px;">
        ${completed.map(t=>{const pct=Math.round(t.scored/t.total*100);const col=pct>=70?'var(--success)':pct>=50?'var(--accent-orange)':'var(--danger)';return`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;"><div style="font-size:0.68rem;color:${col};font-weight:bold;">${pct}%</div><div style="width:100%;height:${pct}%;background:${col};border-radius:4px 4px 0 0;min-height:4px;"></div><div style="font-size:0.63rem;color:var(--text-muted);overflow:hidden;max-width:35px;white-space:nowrap;text-overflow:ellipsis;" title="${t.topic}">${t.topic.split(' ')[0]}</div></div>`;}).join('')}
    </div>`;container.innerHTML=html;
}

// ─── DASHBOARD STATS ─────────────────────────────────────────────────────────
function updateDashboardStats(){
    let sd=0,st=0;const bkd=document.getElementById('dash-subject-breakdown');
    if(bkd){bkd.innerHTML='';for(const[subj,topics]of Object.entries(state.syllabus)){const done=topics.filter(t=>t.done).length;const total=topics.length;st+=total;sd+=done;const pct=total>0?Math.round(done/total*100):0;const color=GATE_SYLLABUS[subj]?.color||'#3b82f6';bkd.innerHTML+=`<div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:5px;border-left:3px solid ${color};"><div style="display:flex;justify-content:space-between;margin-bottom:3px;font-size:0.85rem;"><span>${subj}</span><span style="color:${pct===100?'var(--success)':'var(--text-muted)'};">${pct}%</span></div><div class="progress-bar" style="margin:0;height:4px;"><div class="fill" style="width:${pct}%;background:${color};"></div></div></div>`;}}
    const sp=st>0?Math.round(sd/st*100):0;const sf=document.getElementById('dash-syl-fill');const st2=document.getElementById('dash-syl-text');if(sf)sf.style.width=sp+'%';if(st2)st2.innerText=sp+'%';
    let pd=0,pt=0;for(const b of Object.values(state.pyq)){pt+=b.length;pd+=b.filter(x=>x.done).length;}
    const pp=pt>0?Math.round(pd/pt*100):0;const pf=document.getElementById('dash-pyq-fill');const pt2=document.getElementById('dash-pyq-text');if(pf)pf.style.width=pp+'%';if(pt2)pt2.innerText=pp+'%';
    const totalHrs=Object.values(state.hours).reduce((a,b)=>a+b,0);const th=document.getElementById('dash-total-hours');if(th)th.innerText=totalHrs.toFixed(1);
    renderStreakBadge();renderHeatmap();renderWeakAreaAlert();renderRevisionDue();renderTodayTargets();renderScoreChart();renderTimeline();
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
function exportPDF(){
    let sd=0,st=0;for(const t of Object.values(state.syllabus)){st+=t.length;sd+=t.filter(x=>x.done).length;}
    const pct=st>0?Math.round(sd/st*100):0;const streak=calcStreak();
    const totalHrs=Object.values(state.hours).reduce((a,b)=>a+b,0);
    const html=`<html><head><title>GATE ECE Progress</title><style>body{font-family:Arial,sans-serif;padding:28px;color:#111;}h1{color:#1e40af;}h2{color:#374151;border-bottom:2px solid #e5e7eb;padding-bottom:5px;margin-top:20px;}table{width:100%;border-collapse:collapse;margin-bottom:16px;}th,td{border:1px solid #e5e7eb;padding:7px 10px;}th{background:#f3f4f6;}.done{color:#059669;font-weight:bold;}.pct{font-weight:bold;color:#1d4ed8;}</style></head><body>
    <h1>GATE ECE 2027 — Progress Report</h1>
    <p><b>Name:</b> ${state.userName} | <b>Date:</b> ${new Date().toLocaleDateString('en-IN')} | <b>Streak:</b> ${streak}🔥 | <b>Total Hours:</b> ${totalHrs.toFixed(1)}h</p>
    <h2>Overall: <span class="pct">${pct}%</span> Syllabus Completed</h2>
    <h2>Subject-wise Progress</h2>
    <table><tr><th>Subject</th><th>Done</th><th>Total</th><th>%</th></tr>
    ${Object.entries(state.syllabus).map(([s,t])=>{const d=t.filter(x=>x.done).length;const p=t.length>0?Math.round(d/t.length*100):0;return`<tr><td>${s}</td><td>${d}</td><td>${t.length}</td><td class="${p===100?'done':'pct'}">${p}%</td></tr>`;}).join('')}
    </table></body></html>`;
    const w=window.open('','_blank');w.document.write(html);w.document.close();w.print();
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function showToast(msg='Saved! ✅'){const el=document.getElementById('toast');el.innerText=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2800);}
document.addEventListener('click',e=>{if(e.target===document.getElementById('name-modal'))closeNameModal();if(e.target===document.getElementById('notes-modal'))closeNotesModal();if(e.target===document.getElementById('weekly-report-modal'))closeWeeklyReport();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNameModal();closeNotesModal();closeWeeklyReport();}if(e.key==='Enter'&&document.getElementById('name-modal').style.display!=='none')saveName();});
document.addEventListener('DOMContentLoaded',initApp);
