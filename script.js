// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const INSTITUTIONS = [
    { name: "IIT Madras", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IIT_Madras_Administration_Block.jpg/640px-IIT_Madras_Administration_Block.jpg" },
    { name: "IISc Bangalore", tag: "Research Institute", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IISc_Main_Building_1.jpg/640px-IISc_Main_Building_1.jpg" },
    { name: "IIT Bombay", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/IIT_Bombay_Main_Building.jpg/640px-IIT_Bombay_Main_Building.jpg" },
    { name: "IIT Delhi", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IIT_Delhi_Main_Building.jpg/640px-IIT_Delhi_Main_Building.jpg" },
    { name: "IIT Kharagpur", tag: "IIT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/IIT_Kharagpur_Campus.jpg/640px-IIT_Kharagpur_Campus.jpg" },
    { name: "BHEL", tag: "PSU", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BHEL_Haridwar_Plant.jpg/640px-BHEL_Haridwar_Plant.jpg" },
    { name: "ISRO", tag: "PSU / Research", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/ISRO_Logo.svg/640px-ISRO_Logo.svg.png" },
    { name: "DRDO", tag: "Defence PSU", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DRDO_Logo.png/640px-DRDO_Logo.png" },
];

const MOTIVATIONS = [
    { text: "Dream Big. Work Hard. The IITs are waiting.", label: "IIT Madras", img: INSTITUTIONS[0].img },
    { text: "Consistency is what transforms average into excellence.", label: "IISc Bangalore", img: INSTITUTIONS[1].img },
    { text: "Push harder than yesterday if you want a different tomorrow.", label: "IIT Bombay", img: INSTITUTIONS[2].img },
    { text: "The harder the battle, the sweeter the victory.", label: "IIT Delhi", img: INSTITUTIONS[3].img },
];

const INIT_SYLLABUS = {
    "Network Theory": ["Graph Theory", "Nodal & Mesh Analysis", "Network Theorems", "Transient Analysis", "Steady State Analysis", "Two-port Networks"],
    "Signals & Systems": ["Continuous & Discrete Signals", "LTI Systems", "Fourier Series", "Fourier Transform", "Laplace Transform", "Z-Transform", "DFT/FFT"],
    "Electronic Devices": ["Energy Bands", "Carrier Transport", "PN Junction Diode", "Zener Diode", "BJT", "MOSFET"],
    "Analog Circuits": ["Diode Circuits & Clippers", "BJT Amplifiers", "FET/MOSFET Amplifiers", "Op-Amps & Applications", "Oscillators"],
    "Digital Circuits": ["Boolean Algebra", "Logic Gates", "Combinational Circuits", "Sequential Circuits (Flip-Flops, Counters)", "Data Converters (ADC/DAC)", "Semiconductor Memories"],
    "Control Systems": ["Block Diagram & Signal Flow", "Time Domain Analysis", "Routh-Hurwitz Criterion", "Root Locus", "Bode Plot & Nyquist", "State Space Analysis"],
    "Communications": ["Amplitude Modulation", "Angle Modulation", "Random Variables & Noise", "Information Theory", "Digital Modulation (ASK, PSK, FSK)", "PCM & DPCM"],
    "Electromagnetics": ["Maxwell's Equations", "Plane Waves", "Transmission Lines", "Waveguides", "Antennas"],
    "Engineering Math": ["Linear Algebra", "Calculus", "Differential Equations", "Vector Analysis", "Complex Analysis", "Probability & Stats"],
    "General Aptitude": ["Quantitative Aptitude", "Verbal Reasoning", "Spatial Aptitude", "Analytical Skills"],
};

const PYQ_BUCKETS = ["2000–2005", "2006–2010", "2011–2015", "2016–2026"];

const WEIGHTAGE = {
    "General Aptitude": "15M", "Engineering Math": "~13M", "Communications": "~12M",
    "Electronic Devices": "~11M", "Analog Circuits": "~10M", "Electromagnetics": "~9M",
    "Digital Circuits": "~9M", "Signals & Systems": "~9M", "Control Systems": "~8M",
    "Network Theory": "~7M",
};

// ─── STATE ───────────────────────────────────────────────────────────────────

let state = {
    userName: "Naveenkumar A",
    examDate: "2027-02-06",
    syllabus: {},
    pyq: {},
    tests: [],
    hours: {},
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
    const saved = localStorage.getItem('gateECEState_v3');
    if (saved) {
        const parsed = JSON.parse(saved);
        state = Object.assign(state, parsed);
    }
    // ensure syllabus & pyq initialized
    for (const [subj, topics] of Object.entries(INIT_SYLLABUS)) {
        if (!state.syllabus[subj]) state.syllabus[subj] = topics.map(t => ({ text: t, done: false }));
        if (!state.pyq[subj]) state.pyq[subj] = PYQ_BUCKETS.map(b => ({ period: b, done: false }));
    }
}

function saveState() {
    localStorage.setItem('gateECEState_v3', JSON.stringify(state));
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

    // Show date label next to countdown widget
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
            <img src="${inst.img}" alt="${inst.name}" onerror="this.style.display='none'">
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
        'view-syllabus': { t: 'Syllabus Tracker', s: 'Check off topics as you finish them.' },
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
        });
    });
}

// ─── SYLLABUS ─────────────────────────────────────────────────────────────────

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = '';
    for (const [subj, topics] of Object.entries(state.syllabus)) {
        const done = topics.filter(t => t.done).length;
        const total = topics.length;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const weight = WEIGHTAGE[subj] || '';
        const card = document.createElement('div');
        card.className = 'subject-card glass';
        card.innerHTML = `
            <div class="subject-header" onclick="toggleAccordion(this)">
                <div class="subject-title-wrap">
                    <span class="subject-title">${subj}</span>
                    ${weight ? `<span class="weight-badge">${weight}</span>` : ''}
                </div>
                <span class="subject-progress" id="prog-${subj.replace(/\W/g, '')}">${pct}%</span>
            </div>
            <div class="topic-list">
                ${topics.map((t, idx) => `
                    <div class="topic-item">
                        <input type="checkbox" id="tp_${subj}_${idx}" ${t.done ? 'checked' : ''} onchange="toggleTopic('${subj}',${idx})">
                        <label for="tp_${subj}_${idx}">${t.text}</label>
                        <button class="del-btn" onclick="deleteTopic(event,'${subj}',${idx})" title="Delete topic"><i class="fas fa-trash"></i></button>
                    </div>`).join('')}
                <button class="primary-btn" onclick="addTopic(event,'${subj}')" style="margin-top:10px;font-size:0.83rem;padding:6px 0;"><i class="fas fa-plus"></i> Add Topic</button>
            </div>`;
        container.appendChild(card);
    }
}

function toggleAccordion(header) {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTopic(subj, idx) {
    state.syllabus[subj][idx].done = !state.syllabus[subj][idx].done;
    const topics = state.syllabus[subj];
    const pct = topics.length > 0 ? Math.round(topics.filter(t => t.done).length / topics.length * 100) : 0;
    const el = document.getElementById(`prog-${subj.replace(/\W/g, '')}`);
    if (el) el.innerText = pct + '%';
    saveState();
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
                        <input type="checkbox" id="pyq_${subj}_${idx}" ${b.done ? 'checked' : ''} onchange="togglePYQ('${subj}',${idx})">
                        <label for="pyq_${subj}_${idx}">${b.period}</label>
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
    // Syllabus %
    let sylDone = 0, sylTotal = 0;
    const breakdown = document.getElementById('dash-subject-breakdown');
    if (breakdown) {
        breakdown.innerHTML = '';
        for (const [subj, topics] of Object.entries(state.syllabus)) {
            const total2 = topics.length;
            const done2 = topics.filter(x => x.done).length;
            sylTotal += total2; sylDone += done2;
            const pct2 = total2 > 0 ? Math.round(done2 / total2 * 100) : 0;
            breakdown.innerHTML += `
                <div style="background:rgba(255,255,255,0.03);padding:9px;border-radius:6px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.88rem;">
                        <span>${subj}</span><span style="color:var(--text-muted)">${pct2}%</span>
                    </div>
                    <div class="progress-bar" style="margin:0;height:5px;">
                        <div class="fill" style="width:${pct2}%;"></div>
                    </div>
                </div>`;
        }
    }
    const sylPct = sylTotal > 0 ? Math.round(sylDone / sylTotal * 100) : 0;
    document.getElementById('dash-syl-fill').style.width = sylPct + '%';
    document.getElementById('dash-syl-text').innerText = sylPct + '%';

    // PYQ %
    let pyqDone = 0, pyqTotal = 0;
    for (const b of Object.values(state.pyq)) {
        pyqTotal += b.length;
        pyqDone += b.filter(x => x.done).length;
    }
    const pyqPct = pyqTotal > 0 ? Math.round(pyqDone / pyqTotal * 100) : 0;
    document.getElementById('dash-pyq-fill').style.width = pyqPct + '%';
    document.getElementById('dash-pyq-text').innerText = pyqPct + '%';

    // Tests count
    document.getElementById('dash-tests-text').innerText = state.tests.filter(t => t.isCompleted !== false).length;

    // Hours this week
    let weekHrs = 0;
    const today3 = new Date();
    for (let i = 0; i < 7; i++) {
        const d3 = new Date(today3);
        d3.setDate(today3.getDate() - i);
        weekHrs += (state.hours[d3.toISOString().split('T')[0]] || 0);
    }
    document.getElementById('dash-hours-text').innerText = weekHrs.toFixed(1);

    // Upcoming tests
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

// Close modal on backdrop click
document.addEventListener('click', e => {
    const modal = document.getElementById('name-modal');
    if (e.target === modal) closeNameModal();
});

// Enter key in name modal
document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && document.getElementById('name-modal').style.display !== 'none') saveName();
    if (e.key === 'Escape') closeNameModal();
});

document.addEventListener('DOMContentLoaded', initApp);
