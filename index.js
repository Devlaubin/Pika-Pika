let students = [];
        let isAnimating = false;

        // Charger les élèves depuis le localStorage
        window.addEventListener('DOMContentLoaded', () => {
            const saved = localStorage.getItem('ploufStudents');
            if (saved) {
                students = JSON.parse(saved);
                renderStudents();
            }
        });

        // Sauvegarder les élèves dans le localStorage
        function saveStudents() {
            localStorage.setItem('ploufStudents', JSON.stringify(students));
        }

        // Ajouter un ou plusieurs élèves
        function addStudent() {
            const input = document.getElementById('studentInput');
            const text = input.value.trim();

            if (text === '') {
                input.style.borderColor = 'var(--primary)';
                setTimeout(() => input.style.borderColor = 'var(--secondary)', 300);
                return;
            }

            // Séparer par virgules, retours à la ligne, ou points-virgules
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

            // Afficher un message si des doublons ont été ignorés
            if (duplicates > 0) {
                showNotification(`${added} élève(s) ajouté(s) • ${duplicates} doublon(s) ignoré(s)`);
            } else if (added > 1) {
                showNotification(`${added} élèves ajoutés !`);
            }
        }

        // Afficher une notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Supprimer un élève
        function removeStudent(index) {
            students.splice(index, 1);
            saveStudents();
            renderStudents();
            Location.reload();
        }

        // Afficher les élèves
        function renderStudents() {
            const list = document.getElementById('studentsList');
            const btn = document.getElementById('ploufBtn');

            if (students.length === 0) {
                list.innerHTML = '';
                btn.disabled = true;
                return;
            }

            list.innerHTML = students.map((student, index) => `
                <div class="student-tag" id="student-${index}">
                    <span class="student-name">${student}</span>
                    <button class="btn-remove" onclick="removeStudent(${index})">✕</button>
                </div>
            `).join('');

            btn.disabled = false;
        }

        // Animation Plouf Plouf
        async function startPlouf() {
            if (isAnimating || students.length === 0) return;

            isAnimating = true;
            document.getElementById('ploufBtn').disabled = true;

            const resultSection = document.getElementById('resultSection');
            resultSection.innerHTML = '<p class="winner-text loading">🎲</p>';

            // Animation de sélection rapide
            const cycles = 15;
            const delay = 100;

            for (let i = 0; i < cycles; i++) {
                const randomIndex = Math.floor(Math.random() * students.length);
                highlightStudent(randomIndex);
                await sleep(delay + (i * 10)); // Ralentissement progressif
            }

            // Sélection finale
            const winnerIndex = Math.floor(Math.random() * students.length);
            const winner = students[winnerIndex];

            highlightStudent(winnerIndex);
            await sleep(500);

            // Afficher le gagnant
            resultSection.innerHTML = `
                <p class="winner-text">L'élève choisi est...</p>
                <p class="winner-name">${winner}</p>
            `;

            // je lance les confetie (prochine maj je pesne a faire une animation de confetie plus jolie) // suprimerpour l'instant pour eviter les bug de confetie
            createConfetti();

            // Réinitialiser
            setTimeout(() => {
                document.querySelectorAll('.student-tag').forEach(tag => {
                    tag.classList.remove('highlight');
                });
                document.getElementById('ploufBtn').disabled = false;
                isAnimating = false;
            }, 1000);
        }

        // Surligner un élève
        function highlightStudent(index) {
            document.querySelectorAll('.student-tag').forEach(tag => {
                tag.classList.remove('highlight');
            });
            const tag = document.getElementById(`student-${index}`);
            if (tag) {
                tag.classList.add('highlight');
            }
        }

        // Utilitaire de délai
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Permettre l'ajout avec Ctrl+Entrée ou Shift+Entrée
        document.getElementById('studentInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.shiftKey)) {
                e.preventDefault();
                addStudent();
            }
        });