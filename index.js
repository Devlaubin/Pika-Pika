let students = [];
let isAnimating = false;

window.addEventListener('DOMContentLoaded', () => {
    // Charger les étudiants depuis localStorage
    const saved = localStorage.getItem('ploufStudents');
    if (saved) {
        try {
            students = JSON.parse(saved);
        } catch (e) {
            students = [];
        }
        renderStudents();
    }

    // Bouton d'ouverture du modal
    const btn = document.getElementById('openUpdateBtn');
    if (btn) {
        btn.addEventListener('click', showUpdateModal);
    }

    // Fermer le modal via la croix ou le fond
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.id === 'updateModal') {
            hideUpdateModal();
        }
    });

    // Ajouter avec Ctrl+Enter ou Shift+Enter
    const textarea = document.getElementById('studentInput');
    if (textarea) {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.shiftKey)) {
                e.preventDefault();
                addStudent();
            }
        });
    }
});

// ─── Modal ───────────────────────────────────────────────────────────────────

function showUpdateModal() {
    const modal = document.getElementById('updateModal');
    if (modal) modal.style.display = 'flex';
}

function hideUpdateModal() {
    const modal = document.getElementById('updateModal');
    if (modal) modal.style.display = 'none';
}

// ─── Persistance ─────────────────────────────────────────────────────────────

function saveStudents() {
    localStorage.setItem('ploufStudents', JSON.stringify(students));
}

// ─── Ajouter des étudiants ────────────────────────────────────────────────────

function addStudent() {
    const input = document.getElementById('studentInput');
    const text = input.value.trim();

    if (text === '') {
        input.classList.add('input-error');
        setTimeout(() => input.classList.remove('input-error'), 500);
        return;
    }

    const names = text.split(/[,;\n]+/)
        .map(name => name.trim())
        .filter(name => name !== '');

    let added = 0;
    let duplicates = 0;

    names.forEach(name => {
        if (!students.includes(name)) {
            students.push(name);
            added++;
        } else {
            duplicates++;
        }
    });

    input.value = '';
    saveStudents();
    renderStudents();
    input.focus();

    if (duplicates > 0) {
        showNotification(`${added} añadido(s) · ${duplicates} duplicado(s) ignorado(s)`);
    } else if (added > 1) {
        showNotification(`¡${added} alumnos añadidos!`);
    } else if (added === 1) {
        showNotification(`¡Alumno añadido!`);
    }
}

// ─── Supprimer un étudiant ────────────────────────────────────────────────────

function removeStudent(index) {
    const tag = document.getElementById(`student-${index}`);
    if (tag) {
        tag.style.animation = 'slideOut 0.25s ease-in forwards';
        setTimeout(() => {
            students.splice(index, 1);
            saveStudents();
            renderStudents();
        }, 220);
    } else {
        students.splice(index, 1);
        saveStudents();
        renderStudents();
    }
}

// ─── Vider la liste ───────────────────────────────────────────────────────────

function clearStudents() {
    if (!confirm('¿Deseas eliminar todos los estudiantes?')) return;
    students = [];
    saveStudents();
    renderStudents();
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.innerHTML = '<p class="empty-state">✨ Añade alumnos para comenzar</p>';
    }
}

// ─── Afficher les étudiants ───────────────────────────────────────────────────

function renderStudents() {
    const list = document.getElementById('studentsList');
    const ploufBtn = document.getElementById('ploufBtn');
    const listHeader = document.getElementById('listHeader');
    const studentCount = document.getElementById('studentCount');

    if (students.length === 0) {
        list.innerHTML = '';
        if (ploufBtn) ploufBtn.disabled = true;
        if (listHeader) listHeader.style.display = 'none';
        return;
    }

    if (listHeader) listHeader.style.display = 'flex';
    if (studentCount) {
        studentCount.textContent = `${students.length} alumno${students.length !== 1 ? 's' : ''}`;
    }

    list.innerHTML = students.map((student, index) => `
        <div class="student-tag" id="student-${index}">
            <span class="student-name">${escapeHtml(student)}</span>
            <button class="btn-remove" onclick="removeStudent(${index})" aria-label="Eliminar ${escapeHtml(student)}">✕</button>
        </div>
    `).join('');

    if (ploufBtn) ploufBtn.disabled = false;
}

// Échapper le HTML pour éviter les injections XSS
function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── Notification ─────────────────────────────────────────────────────────────

function showNotification(message) {
    // Supprimer les anciennes notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3200);
}

// ─── Animation Pika Pika ──────────────────────────────────────────────────────

async function startPlouf() {
    if (isAnimating || students.length === 0) return;

    isAnimating = true;
    const ploufBtn = document.getElementById('ploufBtn');
    if (ploufBtn) ploufBtn.disabled = true;

    // Audio
    const audio = document.getElementById('selectionMusic');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }

    // Reset highlight
    document.querySelectorAll('.student-tag').forEach(tag => tag.classList.remove('highlight'));

    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.innerHTML = '<p class="winner-text loading">🎲</p>';
    }

    try {
        const cycles = 18;
        for (let i = 0; i < cycles; i++) {
            const randomIndex = Math.floor(Math.random() * students.length);
            highlightStudent(randomIndex);
            await sleep(80 + i * 12); // Décélération progressive
        }

        const winnerIndex = Math.floor(Math.random() * students.length);
        const winner = students[winnerIndex];

        highlightStudent(winnerIndex);
        await sleep(600);

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        if (resultSection) {
            resultSection.innerHTML = `
                <p class="winner-text">¡El elegido es...!</p>
                <p class="winner-name">${escapeHtml(winner)}</p>
            `;
        }

        students.splice(winnerIndex, 1);
        saveStudents();
        renderStudents();

        createConfetti();

    } finally {
        setTimeout(() => {
            document.querySelectorAll('.student-tag').forEach(tag => tag.classList.remove('highlight'));
            if (ploufBtn) ploufBtn.disabled = students.length === 0;
            isAnimating = false;
        }, 1000);
    }
}

function highlightStudent(index) {
    document.querySelectorAll('.student-tag').forEach(tag => tag.classList.remove('highlight'));
    const tag = document.getElementById(`student-${index}`);
    if (tag) {
        tag.classList.add('highlight');
        tag.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Confetti ────────────────────────────────────────────────────────────────
// BUG CORRIGÉ : les confettis n'avaient pas de width/height → invisibles

function createConfetti() {
    const colors = ['#6b86ff', '#ecce22', '#176d7c', '#A78BFA', '#ff6868', '#52d98a', '#ff9f43'];
    const shapes = ['square', 'circle', 'rect'];
    const count = 60;

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';

        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 10 + 7; // 7–17px
        const color = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = color;
        confetti.style.width = (shape === 'rect' ? size * 2 : size) + 'px';
        confetti.style.height = size + 'px';
        confetti.style.borderRadius = shape === 'circle' ? '50%' : shape === 'rect' ? '2px' : '3px';
        confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        confetti.style.animationDelay = (Math.random() * 0.8) + 's';
        confetti.style.opacity = '0.9';

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5500);
    }
}