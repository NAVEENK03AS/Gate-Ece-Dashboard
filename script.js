// App Data Constants
const EXAM_DATE = new Date("2027-02-06T00:00:00");

const MOTIVATIONS = [
    { text: "Dream Big. Work Hard. The IITs are waiting.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IIT_Madras_Administration_Block.jpg/1200px-IIT_Madras_Administration_Block.jpg", label: "IIT Madras" },
    { text: "Consistency is what transforms average into excellence.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IISc_Main_Building_1.jpg/1200px-IISc_Main_Building_1.jpg", label: "IISc Bangalore" },
    { text: "Push harder than yesterday if you want a different tomorrow.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/IIT_Bombay_Main_Building.jpg/1200px-IIT_Bombay_Main_Building.jpg", label: "IIT Bombay" },
    { text: "The harder the battle, the sweeter the victory.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IIT_Delhi_Main_Building.jpg/1200px-IIT_Delhi_Main_Building.jpg", label: "IIT Delhi" }
];

const INIT_SYLLABUS = {
    "Network Theory": ["Graph Theory", "Nodal & Mesh Analysis", "Network Theorems", "Transient Analysis", "Steady State Analysis", "Two-port Networks"],
    "Signals & Systems": ["Continuous & Discrete Signals", "LTI Systems", "Fourier Series", "Fourier Transform", "Laplace Transform", "Z-Transform", "DFT/FFT"],
    "Electronic Devices": ["Energy Bands", "Carrier Transport", "PN Junction Diode", "Zener Diode", "BJT", "MOSFET"],
    "Analog Circuits": ["Diode Circuits & Clippers", "BJT Amplifiers", "FET/MOSFET Amplifiers", "Op-Amps & Applications", "Oscillators"],
    "Digital Circuits": ["Boolean Algebra", "Logic Gates", "Combinational Circuits", "Sequential Circuits (Flip Flops, Counters)", "Data Converters (ADC/DAC)", "Semiconductor Memories"],
    "Control Systems": ["Block Diagram & Signal Flow", "Time Domain Analysis", "Routh-Hurwitz State", "Root Locus", "Bode Plot & Nyquist", "State Space Analysis"],
    "Communications": ["Amplitude Modulation", "Angle Modulation", "Random Variables & Noise", "Information Theory", "Digital Modulation (ASK, PSK, FSK)", "PCM & DPCM"],
    "Electromagnetics": ["Maxwell's Equations", "Plane Waves", "Transmission Lines", "Waveguides", "Antennas"],
    "Engineering Math": ["Linear Algebra", "Calculus", "Differential Equations", "Vector Analysis", "Complex Analysis", "Probability & Stats"],
    "General Aptitude": ["Quantitative Aptitude", "Verbal Reasoning", "Spatial Aptitude", "Analytical Skills"]
};
const PYQ_BUCKETS = ["2000 - 2005", "2006 - 2010", "2011 - 2015", "2016 - 2026"];

// Based on GATE 2019-2025 Average Marks
const SUBJECT_WEIGHTAGE = {
    "Communications": "~12M",
    "Engineering Math": "~13M",
    "General Aptitude": "15M",
    "Electronic Devices": "~11M",
    "Analog Circuits": "~10M",
    "Electromagnetics": "~9M",
    "Digital Circuits": "~9M",
    "Signals & Systems": "~9M",
    "Control Systems": "~8M",
    "Network Theory": "~7M"
};

// State Management
let state = {
    syllabus: {},
    pyq: {},
    tests: [],
    hours: {}
};

// Initialization
function initApp() {
    loadState();
    setupNavigation();
    updateCountdown();
    setMotivation();
    document.getElementById('today-date-display').innerText = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Initial Renders
    renderSyllabus();
    renderPYQ();
    renderTests();
    renderHoursChart();

    // Set today for hours form
    document.getElementById('h-date').valueAsDate = new Date();

    // Bind Form Submits
    document.getElementById('test-form').addEventListener('submit', handleTestSubmit);
    document.getElementById('hours-form').addEventListener('submit', handleHoursSubmit);
}

function loadState() {
    const saved = localStorage.getItem('gateECEState');
    if (saved) {
        state = JSON.parse(saved);
    } else {
        // Initialize Defaults
        for (const [subj, topics] of Object.entries(INIT_SYLLABUS)) {
            state.syllabus[subj] = topics.map(t => ({ text: t, done: false }));
            state.pyq[subj] = PYQ_BUCKETS.map(b => ({ period: b, done: false }));
        }
        saveState();
    }
}

function saveState() {
    localStorage.setItem('gateECEState', JSON.stringify(state));
    updateDashboardStats(); // update dashboard whenever state is saved
}

// Navigation
function setupNavigation() {
    const btns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    const title = document.getElementById('page-title');
    const subtitle = document.getElementById('page-subtitle');

    const titles = {
        'view-dashboard': { t: 'Dashboard', s: 'Track your progress and stay motivated.' },
        'view-syllabus': { t: 'Syllabus Tracker', s: 'Check off theory topics as you finish them.' },
        'view-pyq': { t: 'PYQ Tracker', s: 'Past Year Questions completion tracker.' },
        'view-tests': { t: 'Test Series Tracker', s: 'Log your ACE or other mock test performances.' },
        'view-hours': { t: 'Study Hours', s: 'Log your daily grind.' }
    };

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            title.innerText = titles[targetId].t;
            subtitle.innerText = titles[targetId].s;

            if (targetId === 'view-dashboard') updateDashboardStats();
            if (targetId === 'view-hours') renderHoursChart();
        });
    });
}

function updateCountdown() {
    const now = new Date();
    const diff = EXAM_DATE - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('days-left-count').innerText = Math.max(0, days);
}

function setMotivation() {
    // Pick based on day of year to give a daily rotating effect
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const mot = MOTIVATIONS[dayOfYear % MOTIVATIONS.length];

    document.getElementById('motivation-banner').style.backgroundImage = `url('${mot.img}')`;
    document.getElementById('motivational-quote').innerText = mot.text;
    document.getElementById('motivational-inst').innerText = mot.label;
}

// Renderers
function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = '';

    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const completed = topics.filter(t => t.done).length;
        const total = topics.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        const weight = SUBJECT_WEIGHTAGE[subj] || "";

        const card = document.createElement('div');
        card.className = 'subject-card glass';
        card.innerHTML = `
            <div class="subject-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'flex' ? 'none' : 'flex'">
                 <div style="display:flex; align-items:center; gap: 12px; flex: 1;">
                    <h3 class="subject-title" style="flex: none;">${subj}</h3>
                    <span class="weight-badge">${weight}</span>
                </div>
                <span class="subject-progress" id="prog-${subj.replace(/\s+/g, '')}">${percent}%</span>
            </div>
            <div class="topic-list">
                ${topics.map((t, idx) => `
                    <div class="topic-item">
                        <input type="checkbox" id="topic_${subj}_${idx}" ${t.done ? 'checked' : ''} 
                               onchange="toggleTopic('${subj}', ${idx})">
                        <label for="topic_${subj}_${idx}">${t.text}</label>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(card);
    }
}

function toggleTopic(subj, idx) {
    state.syllabus[subj][idx].done = !state.syllabus[subj][idx].done;

    // Update local UI immediately
    const topics = state.syllabus[subj];
    const percent = Math.round((topics.filter(t => t.done).length / topics.length) * 100);
    document.getElementById(`prog-${subj.replace(/\s+/g, '')}`).innerText = `${percent}%`;

    saveState();
    showToast();
}

function renderPYQ() {
    const container = document.getElementById('pyq-container');
    container.innerHTML = '';

    for (const [subj, buckets] of Object.entries(state.pyq)) {
        const card = document.createElement('div');
        card.className = 'pyq-card glass';
        card.innerHTML = `
            <h3>${subj}</h3>
            <div class="pyq-grid">
                ${buckets.map((b, idx) => `
                    <div class="topic-item">
                        <input type="checkbox" id="pyq_${subj}_${idx}" ${b.done ? 'checked' : ''} 
                               onchange="togglePYQ('${subj}', ${idx})">
                        <label for="pyq_${subj}_${idx}">${b.period}</label>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(card);
    }
}

function togglePYQ(subj, idx) {
    state.pyq[subj][idx].done = !state.pyq[subj][idx].done;
    saveState();
    showToast();
}

function handleTestSubmit(e) {
    e.preventDefault();
    const test = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        provider: document.getElementById('t-provider').value,
        topic: document.getElementById('t-topic').value,
        scored: parseFloat(document.getElementById('t-scored').value),
        total: parseFloat(document.getElementById('t-total').value),
        analysis: document.getElementById('t-analysis').value,
    };

    state.tests.unshift(test); // add to top
    saveState();
    renderTests();
    e.target.reset();
    showToast("Test logged successfully!");
}

function renderTests() {
    const list = document.getElementById('tests-list');
    if (state.tests.length === 0) {
        list.innerHTML = `<p style="color:var(--text-muted);">No tests logged yet. Start attempting mocks!</p>`;
        return;
    }

    list.innerHTML = state.tests.map(t => `
        <div class="test-result-card glass">
            <div class="tr-header">
                <div>
                    <h4>${t.topic}</h4>
                    <span class="tr-meta">${t.provider} • ${new Date(t.date).toLocaleDateString()}</span>
                </div>
                <div class="tr-score">${t.scored} / ${t.total}</div>
            </div>
            <div class="tr-analysis">" ${t.analysis} "</div>
        </div>
    `).join('');
}

function handleHoursSubmit(e) {
    e.preventDefault();
    const date = document.getElementById('h-date').value;
    const hrs = parseFloat(document.getElementById('h-amount').value);

    state.hours[date] = hrs;
    saveState();
    renderHoursChart();
    showToast("Hours logged!");
}

function renderHoursChart() {
    const chart = document.getElementById('hours-chart');
    chart.innerHTML = '';

    // Get last 7 days
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        days.push(d.toISOString().split('T')[0]);
    }

    const maxHour = Math.max(10, ...Object.values(state.hours)); // scale up to at least 10 hrs

    days.forEach(d => {
        const val = state.hours[d] || 0;
        const heightPct = (val / maxHour) * 100;
        const dayLabel = new Date(d).toLocaleDateString('en-US', { weekday: 'short' });

        chart.innerHTML += `
            <div class="bar-col">
                <div style="font-size:0.75rem; color:var(--text-main); font-weight:bold;">${val ? val + 'h' : ''}</div>
                <div class="bar" style="height: ${heightPct}%;"></div>
                <div class="bar-label">${dayLabel}</div>
            </div>
        `;
    });
}

function updateDashboardStats() {
    // Calc Syllabus %
    let sylDone = 0; let sylTotal = 0;
    for (const t of Object.values(state.syllabus)) {
        sylTotal += t.length;
        sylDone += t.filter(x => x.done).length;
    }
    const sylPct = sylTotal > 0 ? Math.round((sylDone / sylTotal) * 100) : 0;
    document.getElementById('dash-syl-fill').style.width = `${sylPct}%`;
    document.getElementById('dash-syl-text').innerText = `${sylPct}%`;

    // Calc PYQ %
    let pyqDone = 0; let pyqTotal = 0;
    for (const b of Object.values(state.pyq)) {
        pyqTotal += b.length;
        pyqDone += b.filter(x => x.done).length;
    }
    const pyqPct = pyqTotal > 0 ? Math.round((pyqDone / pyqTotal) * 100) : 0;
    document.getElementById('dash-pyq-fill').style.width = `${pyqPct}%`;
    document.getElementById('dash-pyq-text').innerText = `${pyqPct}%`;

    // Tests
    document.getElementById('dash-tests-text').innerText = state.tests.length;

    // Hours this week
    let weekHrs = 0;
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        weekHrs += (state.hours[dateStr] || 0);
    }
    document.getElementById('dash-hours-text').innerText = weekHrs.toFixed(1);
}

function showToast(msg = "Saved successfully!") {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => { t.classList.remove('show'); }, 3000);
}

document.addEventListener('DOMContentLoaded', initApp);
