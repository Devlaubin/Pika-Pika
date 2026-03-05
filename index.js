let students = [];
        let isAnimating = false;

        // Charger les élèves depuis le localStorage
        window.addEventListener('DOMContentLoaded', () => {
            const saved = localStorage.getItem('ploufStudents');
            if (saved) {
                students = JSON.parse(saved);
                renderStudents();
            }
            // bouton ouvre la modale tant que l'utilisateur le souhaite
            const btn = document.getElementById('openUpdateBtn');
            if (btn) {
                btn.addEventListener('click', () => {
                    showUpdateModal();
                });
            }
        });

        // Afficher la modale des mises à jour
        function showUpdateModal() {
            const modal = document.getElementById('updateModal');
            if (modal) {
                modal.style.display = 'block';
            }
        }

        // Masquer la modale
        function hideUpdateModal() {
            const modal = document.getElementById('updateModal');
            if (modal) {
                modal.style.display = 'none';
            }
        }

        // Fermer lorsque l'utilisateur clique sur la croix ou en dehors
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn') || e.target.id === 'updateModal') {
                hideUpdateModal();
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
            // la liste se rafraîchit automatiquement, pas besoin de reload
        }

        // Vider complètement la liste
        function clearStudents() {
            if (!confirm('Effacer tous les élèves ?')) return;
            students = [];
            saveStudents();
            renderStudents();
            const resultSection = document.getElementById('resultSection');
            if (resultSection) {
                resultSection.innerHTML = '<p class="empty-state">Añadir a los alumnos...</p>';
            }
        }

        // Afficher les élèves
        function renderStudents() {
            const list = document.getElementById('studentsList');
            const ploufBtn = document.getElementById('ploufBtn');
            const clearBtn = document.getElementById('clearBtn');

            if (students.length === 0) {
                list.innerHTML = '';
                if (ploufBtn) ploufBtn.disabled = true;
                if (clearBtn) clearBtn.disabled = true;
                return;
            }

            list.innerHTML = students.map((student, index) => `
                <div class="student-tag" id="student-${index}">
                    <span class="student-name">${student}</span>
                    <button class="btn-remove" onclick="removeStudent(${index})">✕</button>
                </div>
            `).join('');

            if (ploufBtn) ploufBtn.disabled = false;
            if (clearBtn) clearBtn.disabled = false;
        }

        // Animation Plouf Plouf
        async function startPlouf() {
            if (isAnimating || students.length === 0) return;

            isAnimating = true;
            const ploufBtn = document.getElementById('ploufBtn');
            if (ploufBtn) ploufBtn.disabled = true;

            // nettoyer un ancien highlight éventuel
            document.querySelectorAll('.student-tag').forEach(tag => tag.classList.remove('highlight'));

            const resultSection = document.getElementById('resultSection');
            if (resultSection) {
                resultSection.innerHTML = '<p class="winner-text loading">🎲</p>';
            }

            try {
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
                if (resultSection) {
                    resultSection.innerHTML = `
                        <p class="winner-text">L'élève choisi est...</p>
                        <p class="winner-name">${winner}</p>
                    `;
                }

                // retirer le gagnant de la liste pour qu'il ne puisse plus être tiré au sort
                students.splice(winnerIndex, 1);
                saveStudents();
                renderStudents();

                // je lance les confetie (prochine maj je pesne a faire une animation de confetie plus jolie) // suprimerpour l'instant pour eviter les bug de confetie
                createConfetti();
            } finally {
                // Réinitialiser l'état d'animation et le bouton (peu importe si une erreur est survenue)
                setTimeout(() => {
                    document.querySelectorAll('.student-tag').forEach(tag => {
                        tag.classList.remove('highlight');
                    });
                    if (ploufBtn) ploufBtn.disabled = students.length === 0;
                    isAnimating = false;
                }, 1000);
            }
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