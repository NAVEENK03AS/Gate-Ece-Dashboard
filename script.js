// ═══════════════════════════════════════════════════════════════════════════════
// GATE 2027 ECE SUPREME TRACKER — script.js
// ═══════════════════════════════════════════════════════════════════════════════

// ─── INSTITUTIONS ─────────────────────────────────────────────────────────────
const INSTITUTIONS = [
    { name: "IIT Madras", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IIT_Madras_Logo.svg/200px-IIT_Madras_Logo.svg.png" },
    { name: "IISc Bangalore", tag: "Research Institute", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Indian_Institute_of_Science_logo.svg/200px-Indian_Institute_of_Science_logo.svg.png" },
    { name: "IIT Bombay", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/IIT_Bombay_Logo.svg/200px-IIT_Bombay_Logo.svg.png" },
    { name: "IIT Delhi", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
    { name: "IIT Kharagpur", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/IIT_Kharagpur_Logo.svg/200px-IIT_Kharagpur_Logo.svg.png" },
    { name: "IIT Roorkee", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/IIT_Roorkee_logo.svg/200px-IIT_Roorkee_logo.svg.png" },
    { name: "BARC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Bhabha_Atomic_Research_Centre_Logo.svg/200px-Bhabha_Atomic_Research_Centre_Logo.svg.png" },
    { name: "ISRO", tag: "Space Agency", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/ISRO_Logo.svg/200px-ISRO_Logo.svg.png" },
    { name: "ONGC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/ONGC_Logo.svg/200px-ONGC_Logo.svg.png" },
    { name: "NTPC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/NTPC_logo.svg/200px-NTPC_logo.svg.png" },
    { name: "BEL", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Bharat_Electronics_Limited_Logo.svg/200px-Bharat_Electronics_Limited_Logo.svg.png" },
    { name: "DRDO", tag: "Defence", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/DRDO_Logo.svg/200px-DRDO_Logo.svg.png" },
];

const MOTIVATIONS = [
    { text: "Dream Big. Work Hard. The IITs are waiting.", label: "IIT Madras", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000" },
    { text: "Consistency is what transforms average into excellence.", label: "IISc Bangalore", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000" },
    { text: "Push harder than yesterday if you want a different tomorrow.", label: "IIT Bombay", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000" },
    { text: "The harder the battle, the sweeter the victory.", label: "IIT Delhi", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" },
];

// ─── OFFICIAL GATE 2026 EC SYLLABUS (Verbatim from IIT Guwahati PDF) ──────────
const GATE_SYLLABUS = {
    "General Aptitude": {
        color: "#f59e0b", marks: 15,
        sections: {
            "Verbal Aptitude": [
                "Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, and other parts of speech",
                "Basic vocabulary: words, idioms, and phrases in context",
                "Reading and comprehension",
                "Narrative sequencing"
            ],
            "Quantitative Aptitude": [
                "Data interpretation: data graphs (bar graphs, pie charts, and other graphs representing data), 2- and 3-dimensional plots, maps, and tables",
                "Numerical computation and estimation: ratios, percentages, powers, exponents and logarithms, permutations and combinations, and series",
                "Mensuration and geometry",
                "Elementary statistics and probability"
            ],
            "Analytical Aptitude": [
                "Logic: deduction and induction",
                "Analogy",
                "Numerical relations and reasoning"
            ],
            "Spatial Aptitude": [
                "Transformation of shapes: translation, rotation, scaling, mirroring, assembling, and grouping",
                "Paper folding, cutting, and patterns in 2 and 3 dimensions"
            ]
        }
    },
    "Engineering Mathematics": {
        color: "#3b82f6", marks: 13,
        sections: {
            "Linear Algebra": [
                "Vector space, basis, linear dependence and independence, matrix algebra",
                "Eigenvalues and eigenvectors",
                "Rank, solution of linear equations – existence and uniqueness"
            ],
            "Calculus": [
                "Mean value theorems, theorems of integral calculus",
                "Evaluation of definite and improper integrals",
                "Partial derivatives, maxima and minima, multiple integrals",
                "Line, surface and volume integrals",
                "Taylor series"
            ],
            "Differential Equations": [
                "First order equations (linear and nonlinear)",
                "Higher order linear differential equations with constant coefficients",
                "Method of variation of parameters",
                "Cauchy's and Euler's equations",
                "Initial and boundary value problems",
                "Partial differential equations and separation of variables method"
            ],
            "Vector Analysis": [
                "Vectors in plane and space, vector operations",
                "Gradient, divergence and curl",
                "Gauss's, Green's and Stoke's theorems"
            ],
            "Complex Analysis": [
                "Analytic functions, Cauchy's integral theorem, Cauchy's integral formula",
                "Sequences and series, convergence tests",
                "Laurent series, residue theorem"
            ],
            "Probability and Statistics": [
                "Mean, median, mode and standard deviation",
                "Combinatorial probability",
                "Probability distribution functions: binomial, Poisson, exponential and normal",
                "Joint and conditional probability",
                "Correlation and regression"
            ]
        }
    },
    "Networks, Signals and Systems": {
        color: "#8b5cf6", marks: 11,
        sections: {
            "Circuit Analysis": [
                "Node and mesh analysis",
                "Superposition, Thevenin's theorem, Norton's theorem, reciprocity"
            ],
            "Sinusoidal Steady State Analysis": [
                "Phasors, complex power, maximum power transfer"
            ],
            "Time and Frequency Domain Analysis": [
                "RL, RC and RLC circuits",
                "Solution of network equations using Laplace transform"
            ],
            "Two-Port Networks": [
                "Linear 2-port network parameters",
                "Wye-delta transformation"
            ],
            "Continuous-time Signals": [
                "Fourier series and Fourier transform",
                "Sampling theorem and applications"
            ],
            "Discrete-time Signals": [
                "DTFT, DFT, z-transform",
                "Discrete-time processing of continuous-time signals"
            ],
            "LTI Systems": [
                "Definition and properties, causality, stability",
                "Impulse response, convolution, poles and zeros",
                "Parallel and cascade structure",
                "Frequency response, group delay, phase delay",
                "Digital filter design techniques"
            ]
        }
    },
    "Electronic Devices": {
        color: "#ec4899", marks: 10,
        sections: {
            "Semiconductor Physics": [
                "Energy bands in intrinsic and extrinsic semiconductors",
                "Equilibrium carrier concentration",
                "Direct and indirect band-gap semiconductors"
            ],
            "Carrier Transport": [
                "Drift and diffusion current, mobility, resistivity",
                "Excess carriers, recombination and generation"
            ],
            "P-N Junction": [
                "Ideal current-voltage characteristics",
                "Capacitance: diffusion and depletion"
            ],
            "BJT": [
                "Physics of transistor operation",
                "Current-voltage characteristics, common-emitter configuration"
            ],
            "MOSFET": [
                "Physics of transistor operation",
                "Current-voltage characteristics",
                "Enhancement and depletion modes"
            ],
            "MOS Capacitor & Small Signal Models": [
                "Threshold voltage",
                "Small signal models of diodes, BJT and MOSFET"
            ],
            "Other Devices": [
                "Junction field effect transistors (JFET)",
                "LED, photo-diode and solar cell (Optoelectronics)"
            ]
        }
    },
    "Analog Circuits": {
        color: "#14b8a6", marks: 10,
        sections: {
            "Small Signal Models": [
                "Small signal equivalent circuits of diodes, BJTs and MOSFETs"
            ],
            "Diode Circuits": [
                "Simple diode circuits: clipping, clamping, rectifiers"
            ],
            "Biasing": [
                "Biasing and bias stability of transistor and FET amplifiers"
            ],
            "Amplifiers": [
                "Single-stage and multi-stage amplifiers",
                "Differential amplifiers",
                "Operational amplifiers",
                "Feedback amplifiers",
                "Power amplifiers",
                "Frequency response of amplifiers"
            ],
            "Op-Amp Circuits": [
                "Active filters",
                "Sinusoidal oscillators: Wein-bridge and phase shift, criterion for oscillation",
                "Function generators, wave-shaping circuits",
                "Current-to-voltage and voltage-to-current converters",
                "Precision rectifiers"
            ]
        }
    },
    "Digital Circuits": {
        color: "#f97316", marks: 9,
        sections: {
            "Number Systems": [
                "Number representations: binary, integer, and floating-point numbers"
            ],
            "Combinatorial Circuits": [
                "Boolean algebra, minimization of functions using Boolean algebra and Karnaugh map",
                "Logic gates, arithmetic circuits, code converters",
                "Multiplexers, decoders, and PLAs"
            ],
            "Sequential Circuits": [
                "Latches and flip-flops, counters, shift-registers"
            ],
            "Data Converters": [
                "Sample and hold circuits, ADCs and DACs"
            ],
            "Semiconductor Memories": [
                "ROM, SRAM, DRAM"
            ],
            "Computer Organization": [
                "Machine instructions and addressing modes",
                "ALU, data-path and control unit",
                "Instruction pipelining"
            ]
        }
    },
    "Control Systems": {
        color: "#06b6d4", marks: 8,
        sections: {
            "Basic Components & Representation": [
                "Basic control system components",
                "Feedback principle",
                "Transfer function",
                "Block diagram representation",
                "Signal flow graph"
            ],
            "Time Domain Analysis": [
                "Transient and steady-state analysis of LTI systems"
            ],
            "Frequency Domain Analysis": [
                "Frequency response",
                "Routh-Hurwitz stability criterion",
                "Nyquist stability criterion"
            ],
            "Design & State Space": [
                "Bode and root-locus plots",
                "Lag, lead, and lag-lead compensation",
                "State variable representation and solution of state equation for LTI systems"
            ]
        }
    },
    "Communications": {
        color: "#10b981", marks: 12,
        sections: {
            "Random Processes": [
                "Auto correlation and power spectral density",
                "Properties of white noise",
                "Filtering of random signals through LTI systems"
            ],
            "Analog Communications": [
                "Amplitude modulation and demodulation",
                "Angle modulation and demodulation",
                "Spectra of AM and FM",
                "Superheterodyne receivers"
            ],
            "Information Theory": [
                "Entropy, mutual information, and channel capacity theorem"
            ],
            "Digital Communications": [
                "PCM, DPCM",
                "Digital modulation schemes: ASK, PSK, FSK, QAM",
                "Bandwidth, inter-symbol interference (ISI)",
                "MAP, ML detection, matched filter receiver",
                "SNR and BER"
            ],
            "Error Correction & Multiple Access": [
                "Fundamentals of error correction: Hamming codes, CRC",
                "Basics of TDMA, FDMA, and CDMA"
            ]
        }
    },
    "Electromagnetics": {
        color: "#e11d48", marks: 9,
        sections: {
            "Maxwell's Equations": [
                "Differential and integral forms and their interpretation",
                "Boundary conditions, wave equation, Poynting vector"
            ],
            "Plane Waves": [
                "Reflection and refraction, polarization",
                "Phase and group velocity",
                "Propagation through various media, skin depth"
            ],
            "Transmission Lines": [
                "Equations, characteristic impedance",
                "Impedance matching, impedance transformation",
                "S-parameters, Smith chart"
            ],
            "Waveguides": [
                "Modes in rectangular waveguides",
                "Boundary conditions, cut-off frequencies",
                "Dispersion relations"
            ],
            "Antennas": [
                "Antenna arrays, phase array",
                "Gain, aperture, reflection coefficient, VSWR, return loss",
                "Antenna temperature, radiation pattern",
                "Friis transmission equation"
            ]
        }
    }
};

// For preparation tracking
const INIT_SYLLABUS = (() => {
    const flat = {};
    for (const [subj, data] of Object.entries(GATE_SYLLABUS)) {
        flat[subj] = [];
        for (const [section, topics] of Object.entries(data.sections)) {
            topics.forEach(t => flat[subj].push({ text: `[${section}] ${t}`, done: false, note: '', completedDate: null }));
        }
    }
    return flat;
})();

const PYQ_BUCKETS = ["2000–2005", "2006–2010", "2011–2015", "2016–2020", "2021–2024"];

const WEIGHTAGE = {
    "General Aptitude":         { marks: 15, years: { "2020": 15, "2021": 15, "2022": 15, "2023": 15, "2024": 15 } },
    "Engineering Mathematics":  { marks: 13, years: { "2020": 13, "2021": 13, "2022": 12, "2023": 13, "2024": 13 } },
    "Communications":           { marks: 12, years: { "2020": 12, "2021": 11, "2022": 13, "2023": 12, "2024": 12 } },
    "Networks, Signals and Systems": { marks: 11, years: { "2020": 11, "2021": 10, "2022": 11, "2023": 11, "2024": 11 } },
    "Electronic Devices":       { marks: 10, years: { "2020": 10, "2021": 10, "2022": 10, "2023": 10, "2024": 11 } },
    "Analog Circuits":          { marks: 10, years: { "2020": 10, "2021": 10, "2022": 10, "2023": 10, "2024": 9  } },
    "Electromagnetics":         { marks: 9,  years: { "2020": 9,  "2021": 9,  "2022": 9,  "2023": 8,  "2024": 9  } },
    "Digital Circuits":         { marks: 9,  years: { "2020": 9,  "2021": 9,  "2022": 9,  "2023": 9,  "2024": 8  } },
    "Control Systems":          { marks: 8,  years: { "2020": 8,  "2021": 8,  "2022": 7,  "2023": 8,  "2024": 8  } },
};

const IIT_CUTOFFS = [
    { name: "IIT Madras (M.Tech EC)", type: "IIT", gen: 750, obc: 700, scst: 600, year: 2024 },
    { name: "IIT Bombay (M.Tech EC)", type: "IIT", gen: 780, obc: 720, scst: 620, year: 2024 },
    { name: "IIT Delhi (M.Tech EC)",  type: "IIT", gen: 760, obc: 710, scst: 610, year: 2024 },
    { name: "IIT Kharagpur (M.Tech)", type: "IIT", gen: 730, obc: 680, scst: 580, year: 2024 },
    { name: "IIT Roorkee (M.Tech EC)",type: "IIT", gen: 720, obc: 670, scst: 570, year: 2024 },
    { name: "IIT Guwahati (M.Tech)",  type: "IIT", gen: 690, obc: 640, scst: 540, year: 2024 },
    { name: "IISc (M.Tech / Research)",type:"IISc",gen: 800, obc: 750, scst: 650, year: 2024 },
    { name: "BARC (Scientific Officer)",type:"PSU",gen: 700, obc: 650, scst: 550, year: 2024 },
    { name: "ISRO (Scientist/Eng)",   type: "PSU", gen: 720, obc: 660, scst: 560, year: 2024 },
    { name: "ONGC (Executive EC)",    type: "PSU", gen: 650, obc: 600, scst: 500, year: 2024 },
    { name: "NTPC (Exec Trainee EC)", type: "PSU", gen: 650, obc: 595, scst: 490, year: 2024 },
    { name: "BEL (Engineer EC)",      type: "PSU", gen: 640, obc: 590, scst: 480, year: 2024 },
    { name: "DRDO (Scientist B)",     type: "PSU", gen: 700, obc: 645, scst: 540, year: 2024 },
];

const TARGET_SCORES = [
    { name: "IIT Madras", gen: 750, obc: 700, scst: 600 },
    { name: "IISc Bangalore", gen: 800, obc: 750, scst: 650 },
    { name: "IIT Bombay", gen: 780, obc: 720, scst: 620 },
    { name: "ISRO / BARC", gen: 720, obc: 660, scst: 560 },
    { name: "Top PSUs (BEL/NTPC)", gen: 650, obc: 595, scst: 490 },
];

const STREAK_BADGES = [
    { days: 3, label: "🌱 Started", color: "#10b981" },
    { days: 7, label: "🔥 One Week Warrior", color: "#f59e0b" },
    { days: 14, label: "⚡ Fortnight Fighter", color: "#3b82f6" },
    { days: 30, label: "🏆 Month Master", color: "#8b5cf6" },
    { days: 60, label: "💎 Diamond Grinder", color: "#e11d48" },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let state = {
    userName: "Naveenkumar A",
    examDate: "2027-02-06",
    syllabus: {},
    pyq: {},
    tests: [],
    hours: {},
    trendsCustomMarks: {},
    trendImgData: null,
    topicNotes: {},
    formulas: {},
    darkMode: true,
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
function initApp() {
    loadState();
    applyTheme();
    renderProfile();
    renderCountdown();
    setMotivation();
    renderInstitutions();
    setupNavigation();
    populateHourSubjects();

    document.getElementById('today-date-display').innerText =
        new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('target-date-label').innerText =
        new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById('h-date').valueAsDate = new Date();

    renderSyllabus();
    renderSyllabusStatic();
    renderFormulas();
    renderPYQ();
    renderTests();
    renderHoursChart();
    renderHoursLog();
    renderTrendsPage();
    renderCutoffs('all');
    renderTargetScores();
    updateDashboardStats();

    document.getElementById('test-form').addEventListener('submit', handleTestSubmit);
    document.getElementById('hours-form').addEventListener('submit', handleHoursSubmit);
}

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────
function loadState() {
    const saved = localStorage.getItem('gateECEState_v5');
    if (saved) {
        try { state = Object.assign(state, JSON.parse(saved)); } catch(e) {}
    }
    for (const [subj, topics] of Object.entries(INIT_SYLLABUS)) {
        if (!state.syllabus[subj]) {
            state.syllabus[subj] = topics.map(t => ({ text: t.text, done: false, note: '', completedDate: null }));
        } else {
            // Ensure new fields exist on old data
            state.syllabus[subj] = state.syllabus[subj].map(t => ({
                note: '', completedDate: null, ...t
            }));
        }
        if (!state.pyq[subj]) state.pyq[subj] = PYQ_BUCKETS.map(b => ({ period: b, done: false }));
    }
    if (!state.trendsCustomMarks) state.trendsCustomMarks = {};
    if (!state.topicNotes) state.topicNotes = {};
    if (!state.formulas) state.formulas = {};
}

function saveState() {
    localStorage.setItem('gateECEState_v5', JSON.stringify(state));
    updateDashboardStats();
}

// ─── THEME ────────────────────────────────────────────────────────────────────
function toggleTheme() {
    state.darkMode = !state.darkMode;
    saveState();
    applyTheme();
}

function applyTheme() {
    const btn = document.getElementById('theme-toggle');
    if (state.darkMode) {
        document.documentElement.removeAttribute('data-theme');
        if (btn) btn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function renderProfile() {
    document.getElementById('user-name-display').innerText = state.userName;
    document.getElementById('profile-img').src =
        `https://ui-avatars.com/api/?name=${encodeURIComponent(state.userName)}&background=0D8ABC&color=fff&size=120`;
}

function openNameModal() {
    document.getElementById('name-input').value = state.userName;
    document.getElementById('name-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('name-input').focus(), 100);
}
function closeNameModal() { document.getElementById('name-modal').style.display = 'none'; }
function saveName() {
    const val = document.getElementById('name-input').value.trim();
    if (!val) return;
    state.userName = val;
    renderProfile();
    saveState();
    closeNameModal();
    showToast('Name updated!');
}

// ─── EXAM DATE ────────────────────────────────────────────────────────────────
function renderCountdown() {
    const examDate = new Date(state.examDate + 'T00:00:00');
    const days = Math.max(0, Math.floor((examDate - new Date()) / 86400000));
    document.getElementById('days-left-count').innerText = days;
    const p = document.querySelector('.countdown-widget p');
    if (p) {
        const formatted = examDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        p.innerHTML = `GATE — ${formatted} <button onclick="editExamDate()" style="background:transparent;border:none;color:var(--accent-blue);cursor:pointer;font-size:0.8rem;">✏️</button>`;
    }
}
function editExamDate() {
    const newDate = prompt('Enter new GATE exam date (YYYY-MM-DD):', state.examDate);
    if (newDate && /^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
        state.examDate = newDate; saveState(); renderCountdown(); showToast('Exam date updated!');
    }
}

// ─── MOTIVATION ───────────────────────────────────────────────────────────────
function setMotivation() {
    const day = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const m = MOTIVATIONS[day % MOTIVATIONS.length];
    document.getElementById('motivation-banner').style.backgroundImage = `url('${m.img}')`;
    document.getElementById('motivational-quote').innerText = m.text;
    document.getElementById('motivational-inst').innerText = m.label;
}

// ─── INSTITUTIONS ─────────────────────────────────────────────────────────────
function renderInstitutions() {
    const grid = document.getElementById('inst-grid');
    grid.innerHTML = INSTITUTIONS.map(inst => `
        <div class="inst-card">
            <div class="inst-logo-wrap">
                <img src="${inst.img}" alt="${inst.name}"
                     onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(inst.name)}&background=1e3a5f&color=38bdf8&size=100&bold=true&font-size=0.35'">
            </div>
            <div class="inst-card-info">
                <div class="inst-card-tag">${inst.tag}</div>
                <div class="inst-card-name">${inst.name}</div>
            </div>
        </div>
    `).join('');
}

// ─── STREAK ───────────────────────────────────────────────────────────────────
function calcStreak() {
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = d.toISOString().split('T')[0];
        if ((state.hours[key] || 0) > 0) streak++;
        else if (i > 0) break;
    }
    return streak;
}

function renderStreakBadge() {
    const streak = calcStreak();
    document.getElementById('streak-count').innerText = streak;
    document.getElementById('dash-streak-text').innerText = streak;
    const badge = document.getElementById('streak-badge');
    const earned = STREAK_BADGES.filter(b => streak >= b.days).pop();
    if (earned) {
        badge.title = earned.label;
        badge.style.borderColor = earned.color;
        badge.style.color = earned.color;
    }
}

// ─── HEATMAP ──────────────────────────────────────────────────────────────────
function renderHeatmap() {
    const container = document.getElementById('heatmap-container');
    if (!container) return;
    const today = new Date();
    const cells = [];
    for (let i = 59; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = d.toISOString().split('T')[0];
        const hrs = state.hours[key] || 0;
        let intensity = 0;
        if (hrs > 0) intensity = hrs < 3 ? 1 : hrs < 6 ? 2 : hrs < 9 ? 3 : 4;
        const label = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
        cells.push(`<div class="heat-cell heat-${intensity}" title="${label}: ${hrs}h studied"></div>`);
    }
    container.innerHTML = cells.join('');
}

// ─── TODAY'S TARGET (Smart Planner) ──────────────────────────────────────────
function renderTodayTarget() {
    const container = document.getElementById('today-target-list');
    // Find subjects with lowest completion, pick top 3 topics to study
    const undonePriority = [];
    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const done = topics.filter(t => t.done).length;
        const total = topics.length;
        if (total === 0) continue;
        const pct = (done / total) * 100;
        const undone = topics.filter(t => !t.done);
        const wt = WEIGHTAGE[subj] ? WEIGHTAGE[subj].marks : 8;
        // score: lower completion + higher weight = higher priority
        undone.forEach(t => undonePriority.push({ subj, text: t.text, score: (100 - pct) + wt * 2 }));
    }
    undonePriority.sort((a, b) => b.score - a.score);
    const targets = undonePriority.slice(0, 4);
    if (targets.length === 0) {
        container.innerHTML = `<p style="color:var(--success);font-weight:600;">🎉 All topics completed! Review and practice PYQs.</p>`;
        return;
    }
    container.innerHTML = targets.map(t => `
        <div class="target-item">
            <span class="target-subj">${t.subj}</span>
            <span class="target-text">${t.text.replace(/^\[.*?\] /, '')}</span>
        </div>`).join('');
}

// ─── WEAK AREA DETECTOR ────────────────────────────────────────────────────────
function renderWeakAreaAlert() {
    const alert = document.getElementById('weak-area-alert');
    const alertText = document.getElementById('weak-alert-text');
    const weak = [];
    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const done = topics.filter(t => t.done).length;
        const total = topics.length;
        const pct = total > 0 ? Math.round(done / total * 100) : 0;
        if (pct < 20 && total > 0) weak.push({ subj, pct });
    }
    weak.sort((a, b) => a.pct - b.pct);
    if (weak.length > 0) {
        alert.style.display = 'flex';
        alertText.innerHTML = `<b>⚠️ Weak Areas Detected:</b> ${weak.slice(0,3).map(w => `<b>${w.subj}</b> (${w.pct}%)`).join(', ')} — needs attention!`;
    } else {
        alert.style.display = 'none';
    }
}

// ─── SPACED REPETITION ────────────────────────────────────────────────────────
function renderRevisionDue() {
    const box = document.getElementById('revision-due-box');
    const list = document.getElementById('revision-due-list');
    const today = new Date().toISOString().split('T')[0];
    const INTERVALS = [3, 7, 14, 30]; // days after completion
    const due = [];
    for (const [subj, topics] of Object.entries(state.syllabus)) {
        topics.forEach(t => {
            if (!t.done || !t.completedDate) return;
            const completedAt = new Date(t.completedDate);
            for (const interval of INTERVALS) {
                const revDate = new Date(completedAt);
                revDate.setDate(completedAt.getDate() + interval);
                if (revDate.toISOString().split('T')[0] === today) {
                    due.push({ subj, text: t.text.replace(/^\[.*?\] /, ''), interval });
                }
            }
        });
    }
    if (due.length > 0) {
        box.style.display = 'block';
        list.innerHTML = due.slice(0, 5).map(d => `
            <div class="revision-item">
                <span class="target-subj">${d.subj}</span>
                <span>${d.text}</span>
                <span style="color:var(--accent-orange);font-size:0.78rem;">+${d.interval}d review</span>
            </div>`).join('');
    } else {
        box.style.display = 'none';
    }
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function setupNavigation() {
    const btns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    const titles = {
        'view-dashboard':     { t: 'Dashboard', s: 'Your mission control center.' },
        'view-syllabus-static': { t: 'GATE 2026 EC Syllabus', s: 'Official verbatim syllabus from IIT Guwahati.' },
        'view-preparation':   { t: 'Preparation Tracker', s: 'Mark topics done. Track subject % and overall preparation.' },
        'view-formulas':      { t: 'Formula Bank', s: 'Quick-access formulas and notes per subject.' },
        'view-trends':        { t: 'Previous Year Trends', s: 'Year-wise marks distribution and your uploaded trend charts.' },
        'view-pyq':           { t: 'PYQ Tracker', s: 'Previous Year Questions completion tracker.' },
        'view-tests':         { t: 'Test Series Tracker', s: 'Schedule and log your mock test performances.' },
        'view-hours':         { t: 'Study Hours', s: 'Log your daily study sessions.' },
        'view-calculator':    { t: 'GATE Score Calculator', s: 'Estimate your GATE score, percentile, and AIR range.' },
        'view-cutoffs':       { t: 'Cutoff Tracker', s: 'IIT / IISc / PSU year-wise cutoff scores for ECE.' },
    };
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            const id = btn.getAttribute('data-target');
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
            document.getElementById('page-title').innerText = titles[id]?.t || '';
            document.getElementById('page-subtitle').innerText = titles[id]?.s || '';
            if (id === 'view-hours') { renderHoursChart(); renderHoursLog(); }
            if (id === 'view-dashboard') updateDashboardStats();
            if (id === 'view-trends') renderTrendsPage();
        });
    });
}

// ─── TREND IMAGE ──────────────────────────────────────────────────────────────
function loadTrendImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = document.getElementById('trend-img-preview');
        img.src = e.target.result;
        img.style.display = 'block';
        state.trendImgData = e.target.result;
        saveState();
        showToast('Trend Image Saved!');
    };
    reader.readAsDataURL(file);
}

// ─── TRENDS PAGE ──────────────────────────────────────────────────────────────
function renderTrendsPage() {
    if (state.trendImgData) {
        const img = document.getElementById('trend-img-preview');
        img.src = state.trendImgData;
        img.style.display = 'block';
    }
    const tbody = document.getElementById('trends-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const years = ["2020", "2021", "2022", "2023", "2024"];
    const sorted = Object.entries(WEIGHTAGE).sort((a, b) => b[1].marks - a[1].marks);
    for (const [subj, data] of sorted) {
        const customVal = state.trendsCustomMarks[subj] !== undefined ? state.trendsCustomMarks[subj] : '';
        const yearCols = years.map(y => {
            const ym = data.years[y] !== undefined ? data.years[y] : '-';
            return `<td style="padding:10px 12px;text-align:center;color:var(--text-muted);">${ym}</td>`;
        }).join('');
        const avg = Math.round(years.reduce((s, y) => s + (data.years[y] || 0), 0) / years.length);
        const val = data.marks;
        let priority = `<span style="color:var(--success);">Medium</span>`;
        if (val >= 12) priority = `<span style="color:var(--accent-orange);font-weight:bold;">High ⭐</span>`;
        if (val < 9) priority = `<span style="color:var(--text-muted);">Lower</span>`;
        tbody.innerHTML += `
            <tr style="border-bottom:1px solid var(--card-border);">
                <td style="padding:10px 12px;font-weight:bold;">${subj}</td>
                ${yearCols}
                <td style="padding:10px 12px;text-align:center;color:#60a5fa;font-weight:bold;">${avg}</td>
                <td style="padding:8px 12px;text-align:center;">
                    <input type="number" class="marks-input" placeholder="?" value="${customVal}"
                           onchange="saveTrendMarks('${subj}',this.value)"
                           style="width:55px;background:rgba(255,255,255,0.08);border:1px solid var(--card-border);border-radius:6px;color:var(--text-main);padding:4px 8px;font-size:0.9rem;text-align:center;">
                </td>
                <td style="padding:10px 12px;text-align:center;">${priority}</td>
            </tr>`;
    }
}

function saveTrendMarks(subj, val) {
    state.trendsCustomMarks[subj] = val === '' ? undefined : parseFloat(val);
    saveState();
    showToast('Marks saved!');
}

// ─── STATIC SYLLABUS ──────────────────────────────────────────────────────────
function renderSyllabusStatic() {
    const container = document.getElementById('syllabus-static-container');
    if (!container) return;
    container.innerHTML = '';
    for (const [subj, data] of Object.entries(GATE_SYLLABUS)) {
        const card = document.createElement('div');
        card.className = 'subject-card glass';
        card.style.borderLeft = `4px solid ${data.color}`;
        let sectionsHTML = '';
        for (const [section, topics] of Object.entries(data.sections)) {
            sectionsHTML += `
                <div class="static-section">
                    <div class="static-section-title"><i class="fas fa-chevron-right" style="color:${data.color};margin-right:6px;font-size:0.75rem;"></i>${section}</div>
                    <ul class="static-topic-list">${topics.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>`;
        }
        card.innerHTML = `
            <div class="subject-header" onclick="toggleAccordion(this)">
                <div class="subject-title-wrap">
                    <span class="subject-title" style="color:${data.color};">${subj}</span>
                    <span class="weight-badge" style="background:${data.color}22;color:${data.color};border:1px solid ${data.color}44;">~${data.marks} Marks</span>
                </div>
                <i class="fas fa-chevron-down" style="color:var(--text-muted);font-size:0.9rem;"></i>
            </div>
            <div class="topic-list" style="padding:16px 20px 20px;">${sectionsHTML}</div>`;
        container.appendChild(card);
    }
}

// ─── PREPARATION TRACKER ──────────────────────────────────────────────────────
function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    if (!container) return;
    container.innerHTML = '';
    let globalDone = 0, globalTotal = 0;
    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const done = topics.filter(t => t.done).length;
        const total = topics.length;
        globalDone += done; globalTotal += total;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const color = GATE_SYLLABUS[subj]?.color || '#3b82f6';
        const weight = WEIGHTAGE[subj] ? `~${WEIGHTAGE[subj].marks}M` : '';
        const card = document.createElement('div');
        card.className = 'subject-card glass';
        card.style.borderLeft = `4px solid ${color}`;
        card.innerHTML = `
            <div class="subject-header" onclick="toggleAccordion(this)">
                <div class="subject-title-wrap">
                    <span class="subject-title">${subj}</span>
                    ${weight ? `<span class="weight-badge">${weight}</span>` : ''}
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <div class="progress-bar" style="width:70px;height:6px;margin:0;background:rgba(255,255,255,0.1);">
                        <div class="fill" style="width:${pct}%;background:${color};"></div>
                    </div>
                    <span class="subject-progress" style="color:${pct===100?'var(--success)':'var(--text-main)'}">${pct}%</span>
                </div>
            </div>
            <div class="topic-list">
                ${topics.map((t, idx) => `
                    <div class="topic-item ${t.done ? 'topic-done' : ''}">
                        <input type="checkbox" id="tp_${subj.replace(/\W/g,'')}_${idx}" ${t.done ? 'checked' : ''} onchange="toggleTopic('${subj}',${idx})">
                        <label for="tp_${subj.replace(/\W/g,'')}_${idx}">${t.text.replace(/^\[.*?\] /, '<span style="color:var(--text-muted);font-size:0.78rem;margin-right:4px;">' + t.text.match(/^\[([^\]]+)\]/)?.[1] + '</span> ') || t.text}</label>
                        <button class="icon-btn" onclick="openNotesModal('${subj}',${idx})" title="${t.note ? '📝 Has notes' : 'Add notes'}" style="color:${t.note ? 'var(--accent-orange)' : 'var(--text-muted)'};">📝</button>
                        <button class="del-btn" onclick="deleteTopic(event,'${subj}',${idx})" title="Delete"><i class="fas fa-trash"></i></button>
                    </div>`).join('')}
                <button class="primary-btn" onclick="addTopic(event,'${subj}')" style="margin-top:10px;font-size:0.83rem;padding:6px 0;background:rgba(59,130,246,0.3);border:1px dashed var(--accent-blue);"><i class="fas fa-plus"></i> Add Topic</button>
            </div>`;
        container.appendChild(card);
    }
    const pct = globalTotal > 0 ? Math.round(globalDone / globalTotal * 100) : 0;
    const el1 = document.getElementById('prep-page-overall-fill');
    const el2 = document.getElementById('prep-page-overall-text');
    if (el1) el1.style.width = pct + '%';
    if (el2) el2.innerText = pct + '%';
}

// ─── TOPIC NOTES MODAL ────────────────────────────────────────────────────────
let _noteSubj = '', _noteIdx = -1;
function openNotesModal(subj, idx) {
    _noteSubj = subj; _noteIdx = idx;
    const t = state.syllabus[subj][idx];
    document.getElementById('notes-modal-topic').innerText = t.text.replace(/^\[.*?\] /, '');
    document.getElementById('notes-modal-content').value = t.note || '';
    document.getElementById('notes-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('notes-modal-content').focus(), 100);
}
function closeNotesModal() { document.getElementById('notes-modal').style.display = 'none'; }
function saveTopicNote() {
    const val = document.getElementById('notes-modal-content').value;
    state.syllabus[_noteSubj][_noteIdx].note = val;
    saveState();
    renderSyllabus();
    closeNotesModal();
    showToast('Note saved!');
}

function toggleAccordion(header) {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === 'none' || list.style.display === '' ? 'flex' : 'none';
}
function toggleTopic(subj, idx) {
    const t = state.syllabus[subj][idx];
    t.done = !t.done;
    t.completedDate = t.done ? new Date().toISOString().split('T')[0] : null;
    saveState(); renderSyllabus(); showToast();
}
function addTopic(e, subj) {
    e.stopPropagation();
    const text = prompt(`Add custom topic to "${subj}":`);
    if (text?.trim()) {
        state.syllabus[subj].push({ text: text.trim(), done: false, note: '', completedDate: null });
        saveState(); renderSyllabus(); showToast('Topic added!');
    }
}
function deleteTopic(e, subj, idx) {
    e.stopPropagation();
    if (!confirm(`Delete this topic?`)) return;
    state.syllabus[subj].splice(idx, 1);
    saveState(); renderSyllabus(); showToast('Deleted!');
}

// ─── FORMULA BANK ─────────────────────────────────────────────────────────────
function renderFormulas() {
    const container = document.getElementById('formula-container');
    if (!container) return;
    container.innerHTML = '';
    for (const [subj, data] of Object.entries(GATE_SYLLABUS)) {
        if (!state.formulas[subj]) state.formulas[subj] = [];
        const color = data.color;
        const card = document.createElement('div');
        card.className = 'subject-card glass';
        card.style.borderLeft = `4px solid ${color}`;
        const formulasHTML = state.formulas[subj].length === 0
            ? `<p style="color:var(--text-muted);font-size:0.88rem;font-style:italic;">No formulas added yet. Click + to add.</p>`
            : state.formulas[subj].map((f, i) => `
                <div class="formula-item">
                    <div class="formula-text">${f.text.replace(/\n/g,'<br>')}</div>
                    <button class="del-btn" onclick="deleteFormula('${subj}',${i})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>`).join('');
        card.innerHTML = `
            <div class="subject-header" onclick="toggleAccordion(this)">
                <div class="subject-title-wrap">
                    <span class="subject-title" style="color:${color};">${subj}</span>
                    <span class="weight-badge" style="background:${color}22;color:${color};border:1px solid ${color}44;">${state.formulas[subj].length} entries</span>
                </div>
                <i class="fas fa-chevron-down" style="color:var(--text-muted);"></i>
            </div>
            <div class="topic-list" style="flex-direction:column;">
                ${formulasHTML}
                <div style="display:flex;gap:8px;margin-top:10px;">
                    <textarea id="formula-input-${subj.replace(/\W/g,'')}" rows="2" placeholder="Type formula or note..." style="flex:1;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.1);padding:8px;color:#fff;border-radius:6px;font-family:inherit;font-size:0.9rem;resize:vertical;"></textarea>
                    <button onclick="addFormula('${subj}')" class="primary-btn" style="width:auto;padding:6px 14px;align-self:flex-end;"><i class="fas fa-plus"></i></button>
                </div>
            </div>`;
        container.appendChild(card);
    }
}

function addFormula(subj) {
    const id = `formula-input-${subj.replace(/\W/g,'')}`;
    const text = document.getElementById(id)?.value?.trim();
    if (!text) return;
    if (!state.formulas[subj]) state.formulas[subj] = [];
    state.formulas[subj].push({ text });
    saveState(); renderFormulas(); showToast('Formula saved!');
}
function deleteFormula(subj, idx) {
    if (!confirm('Delete this formula?')) return;
    state.formulas[subj].splice(idx, 1);
    saveState(); renderFormulas(); showToast('Deleted!');
}

// ─── PYQ ──────────────────────────────────────────────────────────────────────
function renderPYQ() {
    const container = document.getElementById('pyq-container');
    container.innerHTML = '';
    for (const [subj, buckets] of Object.entries(state.pyq)) {
        const card = document.createElement('div');
        card.className = 'pyq-card glass';
        card.innerHTML = `
            <div class="pyq-card-header">
                <h3>${subj}</h3>
                <button class="del-btn" onclick="deletePYQSubject('${subj}')"><i class="fas fa-trash"></i></button>
            </div>
            <div class="pyq-grid">
                ${buckets.map((b, idx) => `
                    <div class="topic-item">
                        <input type="checkbox" id="pyq_${subj.replace(/\W/g,'')}_${idx}" ${b.done?'checked':''} onchange="togglePYQ('${subj}',${idx})">
                        <label for="pyq_${subj.replace(/\W/g,'')}_${idx}">${b.period}</label>
                        <button class="del-btn" onclick="deletePYQEntry('${subj}',${idx})"><i class="fas fa-trash"></i></button>
                    </div>`).join('')}
            </div>`;
        container.appendChild(card);
    }
}
function togglePYQ(subj, idx) { state.pyq[subj][idx].done = !state.pyq[subj][idx].done; saveState(); showToast(); }
function deletePYQEntry(subj, idx) {
    if (!confirm(`Remove this entry?`)) return;
    state.pyq[subj].splice(idx, 1); saveState(); renderPYQ(); showToast('Deleted!');
}
function deletePYQSubject(subj) {
    if (!confirm(`Remove all for "${subj}"?`)) return;
    delete state.pyq[subj]; saveState(); renderPYQ(); showToast('Removed!');
}

// ─── TEST SERIES ──────────────────────────────────────────────────────────────
function setTestFormType(type) {
    document.getElementById('t-form-type').value = type;
    document.getElementById('btn-type-schedule').classList.toggle('active', type==='schedule');
    document.getElementById('btn-type-completed').classList.toggle('active', type==='completed');
    document.getElementById('marks-section').style.display = type==='completed' ? 'block' : 'none';
    document.getElementById('t-date-label').innerText = type==='completed' ? 'Date Taken' : 'Scheduled Date';
    document.getElementById('t-submit-btn').innerText = type==='completed' ? 'Save Result' : 'Save to Schedule';
}
function handleTestSubmit(e) {
    e.preventDefault();
    const type = document.getElementById('t-form-type').value;
    const editingId = document.getElementById('t-editing-id').value;
    const test = {
        id: editingId ? Number(editingId) : Date.now(),
        isCompleted: type==='completed',
        date: document.getElementById('t-date').value,
        provider: document.getElementById('t-provider').value.trim(),
        topic: document.getElementById('t-topic').value.trim(),
        scored: type==='completed' ? (parseFloat(document.getElementById('t-scored').value)||0) : null,
        total: type==='completed' ? (parseFloat(document.getElementById('t-total').value)||0) : null,
        analysis: type==='completed' ? document.getElementById('t-analysis').value.trim() : null,
    };
    if (editingId) { state.tests = state.tests.filter(t => t.id !== test.id); document.getElementById('t-editing-id').value=''; }
    state.tests.unshift(test);
    saveState(); renderTests(); e.target.reset(); setTestFormType('schedule');
    showToast(type==='schedule' ? 'Scheduled!' : 'Result Saved!');
}
function convertScheduledToCompleted(id) {
    const test = state.tests.find(t => t.id===id); if (!test) return;
    setTestFormType('completed');
    document.getElementById('t-editing-id').value = id;
    document.getElementById('t-provider').value = test.provider;
    document.getElementById('t-topic').value = test.topic;
    document.getElementById('t-date').value = test.date;
    document.querySelector('.test-form')?.scrollIntoView({behavior:'smooth'});
}
function deleteTest(id) {
    if (!confirm('Delete?')) return;
    state.tests = state.tests.filter(t => t.id!==id); saveState(); renderTests(); showToast('Deleted!');
}
function renderTests() {
    const list = document.getElementById('tests-list');
    const schList = document.getElementById('tests-scheduled-list');
    const completed = state.tests.filter(t => t.isCompleted !== false);
    const scheduled = state.tests.filter(t => t.isCompleted === false);
    list.innerHTML = completed.length===0 ? `<p style="color:var(--text-muted);font-size:0.9rem;">No completed tests yet.</p>`
        : completed.map(t => {
            const pct = t.total>0 ? Math.round(t.scored/t.total*100) : 0;
            const color = pct>=70?'var(--success)':pct>=50?'var(--accent-orange)':'var(--danger)';
            return `<div class="test-result-card glass">
                <div class="tr-header">
                    <div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div>
                    <div class="tr-score" style="color:${color}">${t.scored}/${t.total} (${pct}%)</div>
                </div>
                ${t.analysis ? `<div class="tr-analysis">${t.analysis}</div>` : ''}
                <div class="tr-actions"><button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i> Delete</button></div>
            </div>`;
        }).join('');
    schList.innerHTML = scheduled.length===0 ? `<p style="color:var(--text-muted);font-size:0.9rem;">No tests scheduled.</p>`
        : scheduled.map(t => `<div class="test-result-card glass" style="border-left-color:var(--accent-orange)">
            <div class="tr-header"><div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div></div>
            <div class="tr-actions">
                <button class="small-btn" onclick="convertScheduledToCompleted(${t.id})"><i class="fas fa-pen"></i> Log Result</button>
                <button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>`).join('');
}

// ─── STUDY HOURS ──────────────────────────────────────────────────────────────
function populateHourSubjects() {
    const sel = document.getElementById('h-subject');
    if (!sel) return;
    Object.keys(GATE_SYLLABUS).forEach(s => {
        const opt = document.createElement('option');
        opt.value = s; opt.textContent = s;
        sel.appendChild(opt);
    });
}
function handleHoursSubmit(e) {
    e.preventDefault();
    const date = document.getElementById('h-date').value;
    const hrs = parseFloat(document.getElementById('h-amount').value);
    if (!date || isNaN(hrs)) return;
    state.hours[date] = (state.hours[date] || 0) + hrs;
    saveState(); renderHoursChart(); renderHoursLog(); renderHeatmap(); renderStreakBadge();
    showToast('Hours logged!');
}
function deleteHoursEntry(date) {
    if (!confirm(`Delete hours for ${date}?`)) return;
    delete state.hours[date];
    saveState(); renderHoursChart(); renderHoursLog(); renderHeatmap(); renderStreakBadge();
    showToast('Deleted!');
}
function renderHoursChart() {
    const chart = document.getElementById('hours-chart');
    const today = new Date();
    const days = [];
    for (let i=6;i>=0;i--) { const d=new Date(today); d.setDate(today.getDate()-i); days.push(d.toISOString().split('T')[0]); }
    const max = Math.max(10, ...days.map(d => state.hours[d]||0));
    chart.innerHTML = days.map(d => {
        const val = state.hours[d]||0;
        const pct = (val/max)*100;
        const label = new Date(d).toLocaleDateString('en-US',{weekday:'short'});
        return `<div class="bar-col">
            <div style="font-size:0.72rem;color:var(--text-main);font-weight:bold;">${val?val+'h':''}</div>
            <div class="bar" style="height:${pct}%;"></div>
            <div class="bar-label">${label}</div>
        </div>`;
    }).join('');
}
function renderHoursLog() {
    const container = document.getElementById('hours-log-list');
    const entries = Object.entries(state.hours).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,20);
    container.innerHTML = entries.length===0 ? `<p style="color:var(--text-muted);font-size:0.85rem;">No hours logged yet.</p>`
        : entries.map(([date,hrs]) => `
            <div class="hours-log-item">
                <span>${new Date(date).toLocaleDateString('en-IN',{day:'numeric',month:'short'})}</span>
                <span style="font-weight:600;">${hrs}h</span>
                <button class="del-btn" onclick="deleteHoursEntry('${date}')"><i class="fas fa-trash"></i></button>
            </div>`).join('');
}

// ─── GATE SCORE CALCULATOR ────────────────────────────────────────────────────
// GATE score formula: Score = Sq + (St - Sq) * (M - Mq) / (Mt - Mq)
// Simplified AIR estimation based on historical EC data
function calculateScore() {
    const raw = parseFloat(document.getElementById('calc-raw')?.value);
    const year = document.getElementById('calc-year')?.value || '2024';
    const box = document.getElementById('calc-result');
    if (!box) return;
    if (isNaN(raw) || raw < 0 || raw > 100) { box.style.display = 'none'; return; }

    // Approximate GATE score normalization for EC paper
    // GATE Score = 900 * (M - Mq) / (Mt - Mq) + 350 (simplified linear)
    // Historical params for EC:
    const params = {
        '2024': { Mq: 25, Mt: 80 },
        '2023': { Mq: 23, Mt: 82 },
        '2022': { Mq: 24, Mt: 79 },
    };
    const p = params[year] || params['2024'];
    let gateScore = Math.round(350 + ((raw - p.Mq) / (p.Mt - p.Mq)) * 550);
    gateScore = Math.min(1000, Math.max(0, gateScore));

    // AIR estimation (EC typically ~130k candidates)
    let airMin, airMax;
    if (raw >= 75) { airMin = 1; airMax = 50; }
    else if (raw >= 65) { airMin = 51; airMax = 300; }
    else if (raw >= 55) { airMin = 301; airMax = 800; }
    else if (raw >= 50) { airMin = 801; airMax = 1500; }
    else if (raw >= 45) { airMin = 1501; airMax = 3000; }
    else if (raw >= 40) { airMin = 3001; airMax = 6000; }
    else if (raw >= 35) { airMin = 6001; airMax = 12000; }
    else { airMin = 12001; airMax = 50000; }

    const percentile = Math.round(Math.max(0, Math.min(99.9, 100 - (airMin / 130000) * 100)));
    const scoreColor = gateScore >= 750 ? '#10b981' : gateScore >= 600 ? '#f59e0b' : '#ef4444';

    box.style.display = 'block';
    box.innerHTML = `
        <div class="calc-result-grid">
            <div class="calc-metric" style="border-color:${scoreColor};">
                <div class="calc-metric-val" style="color:${scoreColor};">${gateScore}</div>
                <div class="calc-metric-label">GATE Score</div>
            </div>
            <div class="calc-metric">
                <div class="calc-metric-val">${raw}/100</div>
                <div class="calc-metric-label">Raw Marks</div>
            </div>
            <div class="calc-metric">
                <div class="calc-metric-val">${airMin}–${airMax}</div>
                <div class="calc-metric-label">Est. AIR Range</div>
            </div>
            <div class="calc-metric">
                <div class="calc-metric-val">~${percentile}%ile</div>
                <div class="calc-metric-label">Percentile (est.)</div>
            </div>
        </div>
        <p style="margin-top:12px;font-size:0.82rem;color:var(--text-muted);">⚠️ Estimation only. Actual score depends on session normalization and paper difficulty.</p>
    `;
}

function renderTargetScores() {
    const tbody = document.getElementById('target-score-tbody');
    if (!tbody) return;
    tbody.innerHTML = TARGET_SCORES.map(t => `
        <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:10px;font-weight:600;">${t.name}</td>
            <td style="padding:10px;text-align:center;color:var(--accent-orange);font-weight:bold;">${t.gen}</td>
            <td style="padding:10px;text-align:center;color:var(--accent-blue);">${t.obc}</td>
            <td style="padding:10px;text-align:center;color:var(--success);">${t.scst}</td>
        </tr>`).join('');
}

// ─── CUTOFF TRACKER ───────────────────────────────────────────────────────────
let _cutoffFilter = 'all';
function filterCutoffs(type, btn) {
    _cutoffFilter = type;
    document.querySelectorAll('#cutoff-filter .type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCutoffs(type);
}
function renderCutoffs(type) {
    const tbody = document.getElementById('cutoffs-tbody');
    if (!tbody) return;
    const filtered = type==='all' ? IIT_CUTOFFS : IIT_CUTOFFS.filter(c => c.type===type);
    tbody.innerHTML = filtered.map(c => {
        const typeColor = c.type==='IIT' ? '#3b82f6' : c.type==='IISc' ? '#10b981' : '#f59e0b';
        return `<tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:12px;font-weight:600;">${c.name}</td>
            <td style="padding:12px;text-align:center;"><span style="background:${typeColor}22;color:${typeColor};padding:2px 8px;border-radius:10px;font-size:0.78rem;font-weight:700;">${c.type}</span></td>
            <td style="padding:12px;text-align:center;font-weight:bold;color:var(--accent-orange);">${c.gen}</td>
            <td style="padding:12px;text-align:center;color:var(--accent-blue);">${c.obc}</td>
            <td style="padding:12px;text-align:center;color:var(--success);">${c.scst}</td>
            <td style="padding:12px;text-align:center;color:var(--text-muted);">${c.year}</td>
        </tr>`;
    }).join('');
}

// ─── DASHBOARD STATS ──────────────────────────────────────────────────────────
function renderScoreChart() {
    const container = document.getElementById('dash-score-chart');
    if (!container) return;
    const completed = state.tests.filter(t => t.isCompleted && t.total > 0)
        .sort((a,b) => new Date(a.date)-new Date(b.date)).slice(-8);
    if (completed.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);font-size:0.88rem;text-align:center;padding:30px 0;">No completed tests yet. Log test results to see your progress chart.</p>`;
        return;
    }
    const max = 100;
    container.innerHTML = `<div style="display:flex;align-items:flex-end;gap:8px;height:140px;padding-bottom:24px;position:relative;">
        ${completed.map(t => {
            const pct = Math.round(t.scored/t.total*100);
            const color = pct>=70?'var(--success)':pct>=50?'var(--accent-orange)':'var(--danger)';
            return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
                <div style="font-size:0.7rem;color:${color};font-weight:bold;">${pct}%</div>
                <div style="width:100%;height:${pct}%;background:${color};border-radius:4px 4px 0 0;min-height:4px;transition:height 0.5s;"></div>
                <div style="font-size:0.65rem;color:var(--text-muted);text-align:center;overflow:hidden;max-width:40px;white-space:nowrap;text-overflow:ellipsis;" title="${t.topic}">${t.topic.split(' ')[0]}</div>
            </div>`;
        }).join('')}
    </div>`;
}

function updateDashboardStats() {
    let sylDone=0, sylTotal=0;
    const breakdown = document.getElementById('dash-subject-breakdown');
    if (breakdown) {
        breakdown.innerHTML = '';
        for (const [subj, topics] of Object.entries(state.syllabus)) {
            const total2=topics.length, done2=topics.filter(x=>x.done).length;
            sylTotal+=total2; sylDone+=done2;
            const pct2=total2>0?Math.round(done2/total2*100):0;
            const color=GATE_SYLLABUS[subj]?.color||'#3b82f6';
            breakdown.innerHTML+=`
                <div style="background:rgba(255,255,255,0.03);padding:9px;border-radius:6px;border-left:3px solid ${color};">
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.88rem;">
                        <span>${subj}</span><span style="color:${pct2===100?'var(--success)':'var(--text-muted)'}">${pct2}%</span>
                    </div>
                    <div class="progress-bar" style="margin:0;height:5px;">
                        <div class="fill" style="width:${pct2}%;background:${color};"></div>
                    </div>
                </div>`;
        }
    }
    const sylPct=sylTotal>0?Math.round(sylDone/sylTotal*100):0;
    const sf=document.getElementById('dash-syl-fill'); const st=document.getElementById('dash-syl-text');
    if(sf) sf.style.width=sylPct+'%'; if(st) st.innerText=sylPct+'%';

    let pyqDone=0,pyqTotal=0;
    for (const b of Object.values(state.pyq)) { pyqTotal+=b.length; pyqDone+=b.filter(x=>x.done).length; }
    const pyqPct=pyqTotal>0?Math.round(pyqDone/pyqTotal*100):0;
    const pf=document.getElementById('dash-pyq-fill'); const pt=document.getElementById('dash-pyq-text');
    if(pf) pf.style.width=pyqPct+'%'; if(pt) pt.innerText=pyqPct+'%';

    let weekHrs=0;
    const today3=new Date();
    for(let i=0;i<7;i++){const d3=new Date(today3);d3.setDate(today3.getDate()-i);weekHrs+=(state.hours[d3.toISOString().split('T')[0]]||0);}
    const ht=document.getElementById('dash-hours-text'); if(ht) ht.innerText=weekHrs.toFixed(1);

    renderStreakBadge();
    renderHeatmap();
    renderTodayTarget();
    renderWeakAreaAlert();
    renderRevisionDue();
    renderScoreChart();
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
function exportPDF() {
    let sylDone=0,sylTotal=0;
    for(const t of Object.values(state.syllabus)){sylTotal+=t.length;sylDone+=t.filter(x=>x.done).length;}
    const pct=sylTotal>0?Math.round(sylDone/sylTotal*100):0;
    const streak=calcStreak();
    const html=`
    <html><head><title>GATE ECE Progress Report</title><style>
    body{font-family:Arial,sans-serif;padding:30px;color:#111;}
    h1{color:#1e40af;} h2{color:#374151;border-bottom:2px solid #e5e7eb;padding-bottom:6px;}
    table{width:100%;border-collapse:collapse;margin-bottom:20px;}
    th,td{border:1px solid #e5e7eb;padding:8px 12px;text-align:left;}
    th{background:#f3f4f6;} .done{color:#059669;font-weight:bold;} .pct{font-weight:bold;color:#1d4ed8;}
    </style></head><body>
    <h1>GATE ECE 2027 — Progress Report</h1>
    <p><b>Name:</b> ${state.userName} | <b>Date:</b> ${new Date().toLocaleDateString('en-IN')} | <b>Streak:</b> ${streak} days 🔥</p>
    <h2>Overall Preparation: <span class="pct">${pct}%</span></h2>
    <h2>Subject-wise Progress</h2>
    <table><tr><th>Subject</th><th>Completed</th><th>Total</th><th>%</th></tr>
    ${Object.entries(state.syllabus).map(([s,t])=>{
        const done=t.filter(x=>x.done).length,total=t.length,p=total>0?Math.round(done/total*100):0;
        return `<tr><td>${s}</td><td>${done}</td><td>${total}</td><td class="${p===100?'done':'pct'}">${p}%</td></tr>`;
    }).join('')}
    </table>
    </body></html>`;
    const w=window.open('','_blank');
    w.document.write(html);
    w.document.close();
    w.print();
}

// ─── LOAD PDF ─────────────────────────────────────────────────────────────────
function loadPDF(event) {
    const file=event.target.files[0];
    if(!file||file.type!=='application/pdf'){alert('Please select a valid PDF file.');return;}
    const url=URL.createObjectURL(file);
    document.getElementById('pdf-placeholder').style.display='none';
    const frame=document.getElementById('pdf-frame');
    frame.style.display='block'; frame.src=url;
    const link=document.getElementById('pdf-fallback-link');
    if(link){link.style.display='inline-block';link.href=url;}
}

// ─── TOAST & HELPERS ──────────────────────────────────────────────────────────
function showToast(msg='Saved! ✅') {
    const el=document.getElementById('toast');
    el.innerText=msg; el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'),2800);
}

document.addEventListener('click', e => {
    const nm=document.getElementById('name-modal');
    const notesm=document.getElementById('notes-modal');
    if(e.target===nm) closeNameModal();
    if(e.target===notesm) closeNotesModal();
});
document.addEventListener('keydown', e => {
    if(e.key==='Escape'){closeNameModal();closeNotesModal();}
    if(e.key==='Enter'&&document.getElementById('name-modal').style.display!=='none') saveName();
});

document.addEventListener('DOMContentLoaded', initApp);
