// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const INSTITUTIONS = [
    { name: "IIT Madras", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IIT_Madras_Logo.svg/200px-IIT_Madras_Logo.svg.png", isBadge: true },
    { name: "IISc Bangalore", tag: "Research Institute", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Indian_Institute_of_Science_logo.svg/200px-Indian_Institute_of_Science_logo.svg.png", isBadge: true },
    { name: "IIT Bombay", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/IIT_Bombay_Logo.svg/200px-IIT_Bombay_Logo.svg.png", isBadge: true },
    { name: "IIT Delhi", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png", isBadge: true },
    { name: "IIT Kharagpur", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/IIT_Kharagpur_Logo.svg/200px-IIT_Kharagpur_Logo.svg.png", isBadge: true },
    { name: "BARC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Bhabha_Atomic_Research_Centre_Logo.svg/200px-Bhabha_Atomic_Research_Centre_Logo.svg.png", isBadge: true },
    { name: "ISRO", tag: "Space Agency", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/ISRO_Logo.svg/200px-ISRO_Logo.svg.png", isBadge: true },
    { name: "ONGC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/ONGC_Logo.svg/200px-ONGC_Logo.svg.png", isBadge: true },
    { name: "NTPC", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/NTPC_logo.svg/200px-NTPC_logo.svg.png", isBadge: true },
    { name: "BEL", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Bharat_Electronics_Limited_Logo.svg/200px-Bharat_Electronics_Limited_Logo.svg.png", isBadge: true },
];

const MOTIVATIONS = [
    { text: "Dream Big. Work Hard. The IITs are waiting.", label: "IIT Madras", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000" },
    { text: "Consistency is what transforms average into excellence.", label: "IISc Bangalore", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000" },
    { text: "Push harder than yesterday if you want a different tomorrow.", label: "IIT Bombay", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000" },
    { text: "The harder the battle, the sweeter the victory.", label: "IIT Delhi", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" },
];

// ─── GATE 2026 ECE OFFICIAL SYLLABUS ─────────────────────────────────────────

const GATE_SYLLABUS = {
    "General Aptitude": {
        color: "#f59e0b",
        marks: 15,
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
        color: "#3b82f6",
        marks: 13,
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
                "Probability distribution functions – binomial, Poisson, exponential and normal",
                "Joint and conditional probability",
                "Correlation and regression"
            ]
        }
    },
    "Networks, Signals & Systems": {
        color: "#8b5cf6",
        marks: 11,
        sections: {
            "Network Solution Methods": [
                "Node and mesh analysis",
                "Wye-Delta transformation"
            ],
            "Network Theorems": [
                "Superposition, Thevenin, Norton, Maximum Power Transfer theorems",
                "Reciprocity theorem"
            ],
            "Transient and Steady State Analysis": [
                "Transient response of DC and AC networks",
                "Sinusoidal steady-state analysis using phasors",
                "Resonance in circuits"
            ],
            "Two-Port Networks": [
                "Two-port network parameters: driving point and transfer functions",
                "State equations for networks"
            ],
            "Continuous-Time Signals": [
                "Fourier series and Fourier transform representations",
                "Sampling theorem and applications"
            ],
            "Discrete-Time Signals": [
                "DTFT, DFT, FFT, Z-transform, interpolation of discrete-time signals"
            ],
            "LTI Systems": [
                "Causality, stability, impulse response, convolution, poles and zeros",
                "Frequency and phase response",
                "Group delay, Phase delay",
                "Signal transmission through LTI systems"
            ]
        }
    },
    "Electronic Devices": {
        color: "#ec4899",
        marks: 10,
        sections: {
            "Semiconductor Physics": [
                "Energy bands in intrinsic and extrinsic semiconductors",
                "Equilibrium carrier concentration",
                "Direct and indirect band-gap semiconductors"
            ],
            "Carrier Transport": [
                "Diffusion current, drift current, mobility, and resistivity",
                "Generation and recombination of carriers"
            ],
            "P-N Junctions": [
                "P-N junction diode, Zener diode, tunnel diode",
                "BJT, MOS capacitor, MOSFET",
                "LED, Photodiode, Solar cell"
            ],
            "Integrated Circuits": [
                "Fabrication of p-n junction and MOSFETs",
                "Poisson and continuity equations"
            ]
        }
    },
    "Analog Circuits": {
        color: "#14b8a6",
        marks: 10,
        sections: {
            "Diode Circuits": [
                "Diode circuits for clipping, clamping, rectifiers"
            ],
            "BJT and MOSFET Amplifiers": [
                "Small signal equivalent circuits",
                "Frequency response, CE/CS amplifiers",
                "CB/CG amplifiers, Cascode amplifiers",
                "Current mirrors, active loads"
            ],
            "Feedback Amplifiers": [
                "Negative feedback circuits",
                "Stability criterion",
                "Simple active filters"
            ],
            "Oscillators": [
                "Sinusoidal oscillators – Barkhausen criterion",
                "Phase shift and Wein bridge oscillators"
            ],
            "Op-Amp Circuits": [
                "Ideal and non-ideal operational amplifier circuits",
                "Op-amp based active filters, integrators, differentiators",
                "Instrumentation amplifier",
                "Precision rectifier"
            ]
        }
    },
    "Digital Circuits": {
        color: "#f97316",
        marks: 9,
        sections: {
            "Number Systems": [
                "Number representations: binary, integer and floating-point",
                "Fixed-point and floating-point arithmetic"
            ],
            "Combinatorial Circuits": [
                "Boolean algebra, minimization of functions using Boolean identities and Karnaugh map",
                "Logic gates and their static CMOS implementations",
                "Arithmetic circuits, code converters, multiplexers, decoders and PLAs"
            ],
            "Sequential Circuits": [
                "Latches and flip-flops, counters, shift-registers and finite state machines",
                "Hazards in sequential circuits"
            ],
            "Data Converters": [
                "Sample and hold circuits, ADCs, DACs"
            ],
            "Semiconductor Memories": [
                "ROM, SRAM, DRAM"
            ],
            "Computer Organization": [
                "Machine instructions and addressing modes, ALU, data-path and control unit, instruction pipelining, memory hierarchy"
            ]
        }
    },
    "Control Systems": {
        color: "#06b6d4",
        marks: 8,
        sections: {
            "Basic Control": [
                "Basic control system components",
                "Feedback principle",
                "Transfer function",
                "Signal flow graph"
            ],
            "Transient Response": [
                "Transient and steady-state analysis of LTI control systems",
                "Frequency response",
                "Tools and techniques for LTI control system analysis"
            ],
            "Stability": [
                "Routh-Hurwitz criterion",
                "Nyquist stability criterion",
                "Bode and root-locus plots"
            ],
            "Compensation": [
                "Lag, lead and lag-lead compensation",
                "State variable model and solution of state equation of LTI control systems"
            ]
        }
    },
    "Communications": {
        color: "#10b981",
        marks: 12,
        sections: {
            "Random Processes": [
                "Autocorrelation and power spectral density",
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
                "Entropy, mutual information and channel capacity theorem"
            ],
            "Digital Communications": [
                "PCM, DPCM, digital modulation schemes, bandwidth, inter-symbol interference",
                "MAP and ML decoding, matched filter receiver, calculation of bandwidth",
                "SNR and BER for digital modulation: ASK, PSK, FSK, QAM",
                "Basics of TDMA, FDMA and CDMA",
                "Spread spectrum communications"
            ]
        }
    },
    "Electromagnetics": {
        color: "#e11d48",
        marks: 9,
        sections: {
            "Maxwell's Equations": [
                "Electrostatics and magnetostatics",
                "Maxwell's equations: differential and integral forms",
                "Wave equation, Poynting vector"
            ],
            "Plane Waves": [
                "Plane waves and properties: reflection and refraction",
                "Polarization, phase and group velocity",
                "Propagation through various media; skin depth"
            ],
            "Transmission Lines": [
                "Transmission lines: equations, characteristic impedance, impedance matching",
                "S-parameters, Smith chart"
            ],
            "Waveguides": [
                "Rectangular and circular waveguides",
                "Light propagation in optical fibers"
            ],
            "Antennas": [
                "Dipole antennas",
                "Antenna gain and effective aperture",
                "Radiation pattern, Friis transmission formula"
            ]
        }
    }
};

// For preparation tracking (flat list per subject)
const INIT_SYLLABUS = (() => {
    const flat = {};
    for (const [subj, data] of Object.entries(GATE_SYLLABUS)) {
        flat[subj] = [];
        for (const [section, topics] of Object.entries(data.sections)) {
            topics.forEach(t => flat[subj].push({ text: `[${section}] ${t}`, done: false }));
        }
    }
    return flat;
})();

const PYQ_BUCKETS = ["2000–2005", "2006–2010", "2011–2015", "2016–2024"];

const WEIGHTAGE = {
    "General Aptitude": { marks: 15, years: { "2021": 15, "2022": 15, "2023": 15, "2024": 15 } },
    "Engineering Mathematics": { marks: 13, years: { "2021": 13, "2022": 12, "2023": 13, "2024": 13 } },
    "Communications": { marks: 12, years: { "2021": 11, "2022": 13, "2023": 12, "2024": 12 } },
    "Networks, Signals & Systems": { marks: 11, years: { "2021": 10, "2022": 11, "2023": 11, "2024": 11 } },
    "Electronic Devices": { marks: 10, years: { "2021": 10, "2022": 10, "2023": 10, "2024": 11 } },
    "Analog Circuits": { marks: 10, years: { "2021": 10, "2022": 10, "2023": 10, "2024": 9 } },
    "Electromagnetics": { marks: 9, years: { "2021": 9, "2022": 9, "2023": 8, "2024": 9 } },
    "Digital Circuits": { marks: 9, years: { "2021": 9, "2022": 9, "2023": 9, "2024": 8 } },
    "Control Systems": { marks: 8, years: { "2021": 8, "2022": 7, "2023": 8, "2024": 8 } },
};

// ─── STATE ───────────────────────────────────────────────────────────────────

let state = {
    userName: "Naveenkumar A",
    examDate: "2027-02-06",
    syllabus: {},
    pyq: {},
    tests: [],
    hours: {},
    trendsCustomMarks: {},
};

// ─── INIT ─────────────────────────────────────────────────────────────────────

function initApp() {
    loadState();
    renderProfile();
    renderCountdown();
    setMotivation();
    renderInstitutions();
    setupNavigation();

    document.getElementById('today-date-display').innerText =
        new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('h-date').valueAsDate = new Date();

    renderSyllabus();
    renderSyllabusStatic();
    renderPYQ();
    renderTests();
    renderHoursChart();
    renderHoursLog();
    updateDashboardStats();

    document.getElementById('test-form').addEventListener('submit', handleTestSubmit);
    document.getElementById('hours-form').addEventListener('submit', handleHoursSubmit);
}

// ─── PERSISTENCE ──────────────────────────────────────────────────────────────

function loadState() {
    const saved = localStorage.getItem('gateECEState_v4');
    if (saved) {
        const parsed = JSON.parse(saved);
        state = Object.assign(state, parsed);
    }
    for (const [subj, topics] of Object.entries(INIT_SYLLABUS)) {
        if (!state.syllabus[subj]) state.syllabus[subj] = topics.map(t => ({ text: t.text, done: false }));
        if (!state.pyq[subj]) state.pyq[subj] = PYQ_BUCKETS.map(b => ({ period: b, done: false }));
    }
    if (!state.trendsCustomMarks) state.trendsCustomMarks = {};
}

function saveState() {
    localStorage.setItem('gateECEState_v4', JSON.stringify(state));
    updateDashboardStats();
}

// ─── PROFILE / NAME ───────────────────────────────────────────────────────────

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

function closeNameModal() {
    document.getElementById('name-modal').style.display = 'none';
}

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
        p.innerHTML = `GATE — ${formatted} <button onclick="editExamDate()" 
            style="background:transparent;border:none;color:var(--accent-blue);cursor:pointer;font-size:0.8rem;" title="Change date">✏️</button>`;
    }
}

function editExamDate() {
    const newDate = prompt('Enter new GATE exam date (YYYY-MM-DD):', state.examDate);
    if (newDate && /^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
        state.examDate = newDate;
        saveState();
        renderCountdown();
        showToast('Exam date updated!');
    } else if (newDate) {
        alert('Please enter date in YYYY-MM-DD format (e.g. 2027-02-01)');
    }
}

// ─── MOTIVATION BANNER ────────────────────────────────────────────────────────

function setMotivation() {
    const day = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const m = MOTIVATIONS[day % MOTIVATIONS.length];
    document.getElementById('motivation-banner').style.backgroundImage = `url('${m.img}')`;
    document.getElementById('motivational-quote').innerText = m.text;
    document.getElementById('motivational-inst').innerText = m.label;
}

// ─── INSTITUTION PHOTOS ───────────────────────────────────────────────────────

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

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

function setupNavigation() {
    const btns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    const titles = {
        'view-dashboard': { t: 'Dashboard', s: 'Track your progress and stay motivated.' },
        'view-syllabus-static': { t: 'GATE 2026 ECE Syllabus', s: 'Official GATE 2026 ECE & General Aptitude syllabus from IIT Guwahati.' },
        'view-preparation': { t: 'Preparation Tracker', s: 'Mark topics completed. Track subject-wise and overall preparation %.' },
        'view-trends': { t: 'Previous Year Trends', s: 'Analyze approximate marks per subject across previous years.' },
        'view-pyq': { t: 'PYQ Tracker', s: 'Previous Year Questions completion.' },
        'view-tests': { t: 'Test Series Tracker', s: 'Schedule and log your mock test performances.' },
        'view-hours': { t: 'Study Hours', s: 'Log your daily grind.' },
    };
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            const id = btn.getAttribute('data-target');
            document.getElementById(id).classList.add('active');
            document.getElementById('page-title').innerText = titles[id].t;
            document.getElementById('page-subtitle').innerText = titles[id].s;
            if (id === 'view-hours') { renderHoursChart(); renderHoursLog(); }
            if (id === 'view-dashboard') updateDashboardStats();
            if (id === 'view-trends') renderTrendsPage();
        });
    });
}

function loadTrendImage(event) {
    const file = event.target.files[0];
    if (file) {
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
}

function renderTrendsPage() {
    // Restore saved image if any
    const savedImg = state.trendImgData;
    if (savedImg) {
        const img = document.getElementById('trend-img-preview');
        img.src = savedImg;
        img.style.display = 'block';
    }

    const tbody = document.getElementById('trends-tbody');
    tbody.innerHTML = '';

    const sorted = Object.entries(WEIGHTAGE).sort((a, b) => b[1].marks - a[1].marks);
    const years = ["2021", "2022", "2023", "2024"];

    for (const [subj, data] of sorted) {
        const customVal = state.trendsCustomMarks[subj] !== undefined ? state.trendsCustomMarks[subj] : '';
        const val = data.marks;
        let priority = '<span style="color:var(--success);">Medium</span>';
        if (val >= 12) priority = '<span style="color:var(--accent-orange); font-weight:bold;">High ⭐</span>';
        if (val < 9) priority = '<span style="color:var(--text-muted);">Lower</span>';

        const yearCols = years.map(y => {
            const ym = data.years[y] || '-';
            return `<td style="padding:10px 12px; text-align:center; color:var(--text-muted);">${ym}</td>`;
        }).join('');

        tbody.innerHTML += `
            <tr style="border-bottom:1px solid var(--card-border);">
                <td style="padding:10px 12px; font-weight:bold;">${subj}</td>
                ${yearCols}
                <td style="padding:10px 12px; color:var(--text-main); font-size:1rem; font-weight:bold; text-align:center;">~${data.marks}M</td>
                <td style="padding:8px 12px; text-align:center;">
                    <input type="number" class="marks-input" placeholder="?" value="${customVal}" 
                           onchange="saveTrendMarks('${subj}', this.value)" 
                           style="width:55px;background:rgba(255,255,255,0.08);border:1px solid var(--card-border);border-radius:6px;color:var(--text-main);padding:4px 8px;font-size:0.9rem;text-align:center;">
                </td>
                <td style="padding:10px 12px; text-align:center;">${priority}</td>
            </tr>
        `;
    }
}

function saveTrendMarks(subj, val) {
    state.trendsCustomMarks[subj] = val === '' ? undefined : parseFloat(val);
    saveState();
    showToast('Marks saved!');
}

// ─── SYLLABUS STATIC VIEW ─────────────────────────────────────────────────────

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
                    <ul class="static-topic-list">
                        ${topics.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="subject-header" onclick="toggleAccordion(this)">
                <div class="subject-title-wrap">
                    <span class="subject-title" style="color:${data.color};">${subj}</span>
                    <span class="weight-badge" style="background:${data.color}22; color:${data.color}; border:1px solid ${data.color}44;">~${data.marks} Marks</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chevron-down" style="color:var(--text-muted); font-size:0.9rem;"></i>
                </div>
            </div>
            <div class="topic-list" style="padding:16px 20px 20px;">
                ${sectionsHTML}
            </div>`;
        container.appendChild(card);
    }
}

// ─── PREPARATION TRACKER ──────────────────────────────────────────────────────

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    if (!container) return;
    container.innerHTML = '';

    let globalDone = 0;
    let globalTotal = 0;

    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const done = topics.filter(t => t.done).length;
        const total = topics.length;
        globalDone += done;
        globalTotal += total;

        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const subjectData = GATE_SYLLABUS[subj];
        const color = subjectData ? subjectData.color : '#3b82f6';
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
                <div style="display:flex; align-items:center; gap:8px;">
                     <div class="progress-bar" style="width: 60px; height: 6px; margin:0; background:rgba(255,255,255,0.1);">
                        <div class="fill" style="width:${pct}%; background:${color};"></div>
                     </div>
                     <span class="subject-progress" id="prog-${subj.replace(/\W/g, '')}" style="color:${pct === 100 ? 'var(--success)' : 'var(--text-main)'}">${pct}%</span>
                </div>
            </div>
            <div class="topic-list">
                ${topics.map((t, idx) => `
                    <div class="topic-item ${t.done ? 'topic-done' : ''}">
                        <input type="checkbox" id="tp_${subj.replace(/\W/g,'')}_${idx}" ${t.done ? 'checked' : ''} onchange="toggleTopic('${subj}',${idx})">
                        <label for="tp_${subj.replace(/\W/g,'')}_${idx}">${t.text}</label>
                        <button class="del-btn" onclick="deleteTopic(event,'${subj}',${idx})" title="Delete topic"><i class="fas fa-trash"></i></button>
                    </div>`).join('')}
                <button class="primary-btn" onclick="addTopic(event,'${subj}')" style="margin-top:10px;font-size:0.83rem;padding:6px 0; background:rgba(59,130,246,0.3); border:1px dashed var(--accent-blue);"><i class="fas fa-plus"></i> Add Topic</button>
            </div>`;
        container.appendChild(card);
    }

    const overallPct = globalTotal > 0 ? Math.round((globalDone / globalTotal) * 100) : 0;
    const ovFill = document.getElementById('prep-page-overall-fill');
    const ovText = document.getElementById('prep-page-overall-text');
    if (ovFill) ovFill.style.width = overallPct + '%';
    if (ovText) ovText.innerText = overallPct + '%';
}

function toggleAccordion(header) {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === 'none' ? 'flex' : 'none';
}

function toggleTopic(subj, idx) {
    state.syllabus[subj][idx].done = !state.syllabus[subj][idx].done;
    saveState();
    renderSyllabus();
    showToast();
}

function addTopic(e, subj) {
    e.stopPropagation();
    const text = prompt(`Add a custom topic to "${subj}":`);
    if (text && text.trim()) {
        state.syllabus[subj].push({ text: text.trim(), done: false });
        saveState();
        renderSyllabus();
        showToast('Topic added!');
    }
}

function deleteTopic(e, subj, idx) {
    e.stopPropagation();
    if (!confirm(`Delete "${state.syllabus[subj][idx].text}"?`)) return;
    state.syllabus[subj].splice(idx, 1);
    saveState();
    renderSyllabus();
    showToast('Topic deleted!');
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
                <button class="del-btn" onclick="deletePYQSubject('${subj}')" title="Remove subject"><i class="fas fa-trash"></i></button>
            </div>
            <div class="pyq-grid">
                ${buckets.map((b, idx) => `
                    <div class="topic-item">
                        <input type="checkbox" id="pyq_${subj.replace(/\W/g,'')}_${idx}" ${b.done ? 'checked' : ''} onchange="togglePYQ('${subj}',${idx})">
                        <label for="pyq_${subj.replace(/\W/g,'')}_${idx}">${b.period}</label>
                        <button class="del-btn" onclick="deletePYQEntry('${subj}',${idx})" title="Remove row"><i class="fas fa-trash"></i></button>
                    </div>`).join('')}
            </div>`;
        container.appendChild(card);
    }
}

function togglePYQ(subj, idx) {
    state.pyq[subj][idx].done = !state.pyq[subj][idx].done;
    saveState();
    showToast();
}

function deletePYQEntry(subj, idx) {
    if (!confirm(`Remove "${state.pyq[subj][idx].period}" from ${subj}?`)) return;
    state.pyq[subj].splice(idx, 1);
    saveState();
    renderPYQ();
    showToast('Entry deleted!');
}

function deletePYQSubject(subj) {
    if (!confirm(`Remove all PYQ entries for "${subj}"?`)) return;
    delete state.pyq[subj];
    saveState();
    renderPYQ();
    showToast('Subject removed!');
}

// ─── TEST SERIES ──────────────────────────────────────────────────────────────

function setTestFormType(type) {
    document.getElementById('t-form-type').value = type;
    document.getElementById('btn-type-schedule').classList.toggle('active', type === 'schedule');
    document.getElementById('btn-type-completed').classList.toggle('active', type === 'completed');
    const marks = document.getElementById('marks-section');
    const dateLabel = document.getElementById('t-date-label');
    const btn = document.getElementById('t-submit-btn');
    if (type === 'completed') {
        marks.style.display = 'block';
        dateLabel.innerText = 'Date Taken';
        btn.innerText = 'Save Result';
    } else {
        marks.style.display = 'none';
        dateLabel.innerText = 'Scheduled Date';
        btn.innerText = 'Save to Schedule';
    }
}

function handleTestSubmit(e) {
    e.preventDefault();
    const type = document.getElementById('t-form-type').value;
    const editingId = document.getElementById('t-editing-id').value;
    const test = {
        id: editingId ? Number(editingId) : Date.now(),
        isCompleted: (type === 'completed'),
        date: document.getElementById('t-date').value,
        provider: document.getElementById('t-provider').value.trim(),
        topic: document.getElementById('t-topic').value.trim(),
        scored: type === 'completed' ? (parseFloat(document.getElementById('t-scored').value) || 0) : null,
        total: type === 'completed' ? (parseFloat(document.getElementById('t-total').value) || 0) : null,
        analysis: type === 'completed' ? document.getElementById('t-analysis').value.trim() : null,
    };
    if (editingId) {
        state.tests = state.tests.filter(t => t.id !== test.id);
        document.getElementById('t-editing-id').value = '';
    }
    state.tests.unshift(test);
    saveState();
    renderTests();
    e.target.reset();
    setTestFormType('schedule');
    showToast(type === 'schedule' ? 'Added to Schedule!' : 'Test Result Saved!');
}

function convertScheduledToCompleted(id) {
    const test = state.tests.find(t => t.id === id);
    if (!test) return;
    setTestFormType('completed');
    document.getElementById('t-editing-id').value = id;
    document.getElementById('t-provider').value = test.provider;
    document.getElementById('t-topic').value = test.topic;
    document.getElementById('t-date').value = test.date;
    document.querySelector('.test-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('t-scored').focus();
    showToast('Fill in marks and save result!');
}

function deleteTest(id) {
    if (!confirm('Delete this test record?')) return;
    state.tests = state.tests.filter(t => t.id !== id);
    saveState();
    renderTests();
    showToast('Test deleted!');
}

function renderTests() {
    const list = document.getElementById('tests-list');
    const schList = document.getElementById('tests-scheduled-list');
    const completed = state.tests.filter(t => t.isCompleted !== false);
    const scheduled = state.tests.filter(t => t.isCompleted === false);

    list.innerHTML = completed.length === 0
        ? `<p style="color:var(--text-muted);font-size:0.9rem;">No completed tests yet.</p>`
        : completed.map(t => {
            const pct = t.total > 0 ? Math.round(t.scored / t.total * 100) : 0;
            const color = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--accent-orange)' : 'var(--danger)';
            return `<div class="test-result-card glass">
                <div class="tr-header">
                    <div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div>
                    <div class="tr-score" style="color:${color}">${t.scored} / ${t.total} (${pct}%)</div>
                </div>
                ${t.analysis ? `<div class="tr-analysis">${t.analysis}</div>` : ''}
                <div class="tr-actions"><button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i> Delete</button></div>
            </div>`;
        }).join('');

    schList.innerHTML = scheduled.length === 0
        ? `<p style="color:var(--text-muted);font-size:0.9rem;">No tests scheduled yet.</p>`
        : scheduled.map(t => `
            <div class="test-result-card glass" style="border-left-color:var(--accent-orange)">
                <div class="tr-header">
                    <div><h4>${t.topic}</h4><span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span></div>
                </div>
                <div class="tr-actions">
                    <button class="small-btn" onclick="convertScheduledToCompleted(${t.id})"><i class="fas fa-pen"></i> Log Result</button>
                    <button class="small-btn danger" onclick="deleteTest(${t.id})"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </div>`).join('');
}

// ─── STUDY HOURS ──────────────────────────────────────────────────────────────

function handleHoursSubmit(e) {
    e.preventDefault();
    const date = document.getElementById('h-date').value;
    const hrs = parseFloat(document.getElementById('h-amount').value);
    if (!date || isNaN(hrs)) return;
    state.hours[date] = hrs;
    saveState();
    renderHoursChart();
    renderHoursLog();
    showToast('Hours logged!');
}

function deleteHoursEntry(date) {
    if (!confirm(`Delete hours for ${date}?`)) return;
    delete state.hours[date];
    saveState();
    renderHoursChart();
    renderHoursLog();
    showToast('Entry deleted!');
}

function renderHoursChart() {
    const chart = document.getElementById('hours-chart');
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        days.push(d.toISOString().split('T')[0]);
    }
    const max = Math.max(10, ...days.map(d => state.hours[d] || 0));
    chart.innerHTML = days.map(d => {
        const val = state.hours[d] || 0;
        const pct = (val / max) * 100;
        const label = new Date(d).toLocaleDateString('en-US', { weekday: 'short' });
        return `<div class="bar-col">
            <div style="font-size:0.72rem;color:var(--text-main);font-weight:bold;">${val ? val + 'h' : ''}</div>
            <div class="bar" style="height:${pct}%;"></div>
            <div class="bar-label">${label}</div>
        </div>`;
    }).join('');
}

function renderHoursLog() {
    const container = document.getElementById('hours-log-list');
    const entries = Object.entries(state.hours).sort((a, b) => b[0].localeCompare(a[0])).slice(0, 20);
    container.innerHTML = entries.length === 0
        ? `<p style="color:var(--text-muted);font-size:0.85rem;">No hours logged yet.</p>`
        : entries.map(([date, hrs]) => `
            <div class="hours-log-item">
                <span>${new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                <span style="font-weight:600;">${hrs}h</span>
                <button class="del-btn" onclick="deleteHoursEntry('${date}')" title="Delete"><i class="fas fa-trash"></i></button>
            </div>`).join('');
}

// ─── PDF ──────────────────────────────────────────────────────────────────────

function loadPDF(event) {
    const file = event.target.files[0];
    if (!file || file.type !== 'application/pdf') { alert('Please select a valid PDF file.'); return; }
    const url = URL.createObjectURL(file);
    document.getElementById('pdf-placeholder').style.display = 'none';
    const frame = document.getElementById('pdf-frame');
    frame.style.display = 'block';
    frame.src = url;
    const link = document.getElementById('pdf-fallback-link');
    link.style.display = 'inline-block';
    link.href = url;
}

// ─── DASHBOARD STATS ──────────────────────────────────────────────────────────

function updateDashboardStats() {
    let sylDone = 0, sylTotal = 0;
    const breakdown = document.getElementById('dash-subject-breakdown');
    if (breakdown) {
        breakdown.innerHTML = '';
        for (const [subj, topics] of Object.entries(state.syllabus)) {
            const total2 = topics.length;
            const done2 = topics.filter(x => x.done).length;
            sylTotal += total2; sylDone += done2;
            const pct2 = total2 > 0 ? Math.round(done2 / total2 * 100) : 0;
            const color = GATE_SYLLABUS[subj] ? GATE_SYLLABUS[subj].color : '#3b82f6';
            breakdown.innerHTML += `
                <div style="background:rgba(255,255,255,0.03);padding:9px;border-radius:6px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.88rem;">
                        <span>${subj}</span><span style="color:${pct2 === 100 ? 'var(--success)' : 'var(--text-muted)'}">${pct2}%</span>
                    </div>
                    <div class="progress-bar" style="margin:0;height:5px;">
                        <div class="fill" style="width:${pct2}%; background:${color};"></div>
                    </div>
                </div>`;
        }
    }
    const sylPct = sylTotal > 0 ? Math.round(sylDone / sylTotal * 100) : 0;
    document.getElementById('dash-syl-fill').style.width = sylPct + '%';
    document.getElementById('dash-syl-text').innerText = sylPct + '%';

    let pyqDone = 0, pyqTotal = 0;
    for (const b of Object.values(state.pyq)) {
        pyqTotal += b.length;
        pyqDone += b.filter(x => x.done).length;
    }
    const pyqPct = pyqTotal > 0 ? Math.round(pyqDone / pyqTotal * 100) : 0;
    document.getElementById('dash-pyq-fill').style.width = pyqPct + '%';
    document.getElementById('dash-pyq-text').innerText = pyqPct + '%';

    document.getElementById('dash-tests-text').innerText = state.tests.filter(t => t.isCompleted !== false).length;

    let weekHrs = 0;
    const today3 = new Date();
    for (let i = 0; i < 7; i++) {
        const d3 = new Date(today3);
        d3.setDate(today3.getDate() - i);
        weekHrs += (state.hours[d3.toISOString().split('T')[0]] || 0);
    }
    document.getElementById('dash-hours-text').innerText = weekHrs.toFixed(1);

    const upcoming = document.getElementById('dash-upcoming-tests');
    if (upcoming) {
        const sched = state.tests.filter(t => t.isCompleted === false);
        upcoming.innerHTML = sched.length === 0
            ? `<p style="color:var(--text-muted);font-size:0.88rem;">No tests scheduled. Keep grinding!</p>`
            : sched.map(t => `
                <div style="background:rgba(249,115,22,0.1);border-left:3px solid var(--accent-orange);padding:9px 12px;border-radius:4px;">
                    <div style="font-weight:600;font-size:0.9rem;">${t.topic}</div>
                    <div style="font-size:0.78rem;color:var(--text-muted);">${t.provider} • ${new Date(t.date).toLocaleDateString()}</div>
                </div>`).join('');
    }
}

// ─── TOAST & HELPERS ──────────────────────────────────────────────────────────

function showToast(msg = 'Saved!') {
    const el = document.getElementById('toast');
    el.innerText = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2800);
}

document.addEventListener('click', e => {
    const modal = document.getElementById('name-modal');
    if (e.target === modal) closeNameModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && document.getElementById('name-modal').style.display !== 'none') saveName();
    if (e.key === 'Escape') closeNameModal();
});

document.addEventListener('DOMContentLoaded', initApp);
