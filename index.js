// ─── Traductions ──────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  fr: {
    flag: "🇫🇷",
    code: "FR",
    htmlLang: "fr",
    subtitle: "Qui sera choisi aujourd'hui ?",
    placeholder: "Écris un nom ou plusieurs séparés par une virgule...",
    addBtn: "Ajouter",
    clearBtn: "✕ Tout effacer",
    ploufBtn: "Pika Pika !",
    emptyState: "Ajoute des élèves pour commencer",
    studentSingular: "élève",
    studentPlural: "élèves",
    notifAdded1: "¡Élève ajouté !",
    notifAddedN: (n) => `${n} élèves ajoutés !`,
    notifDup: (a, d) => `${a} ajouté(s) · ${d} doublon(s) ignoré(s)`,
    confirmClear: "Voulez-vous supprimer tous les élèves ?",
    winnerText: "L'élu(e) est... !",
    "modal.title": "Mises à jour et informations",
    "modal.date": "Dernière mise à jour le 30/05/2026",
    "modal.item1": "Rechargement automatique de la page",
    "modal.item2": "Nombreux bugs résolus",
    "modal.item3": "Bouton de suppression totale ajouté (avec alerte)",
    "modal.item4": "Problème de traduction en espagnol résolu",
    "modal.item5": "Interface responsive améliorée",
    "modal.item6": "Musique pendant la sélection",
    "modal.item7": "Compteur d'élèves en temps réel",
    "modal.item8": "Confettis améliorés et bugs corrigés",
    "modal.item9": "Sélection de langue + routing par URL",
    "modal.new": "Nouveau !",
    "modal.contact":
      "N'hésitez pas à me signaler les bugs pour améliorer le site !",
    "modal.contactLink": "contacter",
    "modal.thanks": "Merci d'utiliser Pika Pika 🎉",
    "footer.made": "Fait avec",
    "footer.by": "par",
    "footer.updateBtn": "Mise à jour et informations",
    closeAriaLabel: "Fermer",
    removeAriaLabel: (name) => `Supprimer ${name}`,
  },
  en: {
    flag: "🇬🇧",
    code: "EN",
    htmlLang: "en",
    subtitle: "Who will be chosen today?",
    placeholder: "Type a name or several separated by a comma...",
    addBtn: "Add",
    clearBtn: "✕ Clear all",
    ploufBtn: "Pika Pika!",
    emptyState: "Add students to get started",
    studentSingular: "student",
    studentPlural: "students",
    notifAdded1: "Student added!",
    notifAddedN: (n) => `${n} students added!`,
    notifDup: (a, d) => `${a} added · ${d} duplicate(s) ignored`,
    confirmClear: "Do you want to remove all students?",
    winnerText: "The chosen one is...!",
    "modal.title": "Updates & information",
    "modal.date": "Last updated on 30/05/2026",
    "modal.item1": "Automatic page reload",
    "modal.item2": "Many bugs fixed",
    "modal.item3": "Clear all button added (with confirmation)",
    "modal.item4": "Spanish translation issue fixed",
    "modal.item5": "Improved responsive interface",
    "modal.item6": "Music during student selection",
    "modal.item7": "Real-time student counter",
    "modal.item8": "Improved confetti & bug fixes",
    "modal.item9": "Language selection + URL routing",
    "modal.new": "New!",
    "modal.contact": "Feel free to report bugs to help improve the site!",
    "modal.contactLink": "contact me",
    "modal.thanks": "Thanks for using Pika Pika 🎉",
    "footer.made": "Made with",
    "footer.by": "by",
    "footer.updateBtn": "Updates & information",
    closeAriaLabel: "Close",
    removeAriaLabel: (name) => `Remove ${name}`,
  },
  es: {
    flag: "🇪🇸",
    code: "ES",
    htmlLang: "es",
    subtitle: "¿Quién será elegido hoy?",
    placeholder: "Escribe un nombre o varios separados por coma...",
    addBtn: "Añadir",
    clearBtn: "✕ Borrar todo",
    ploufBtn: "¡Pika Pika!",
    emptyState: "Añade alumnos para comenzar",
    studentSingular: "alumno",
    studentPlural: "alumnos",
    notifAdded1: "¡Alumno añadido!",
    notifAddedN: (n) => `¡${n} alumnos añadidos!`,
    notifDup: (a, d) => `${a} añadido(s) · ${d} duplicado(s) ignorado(s)`,
    confirmClear: "¿Deseas eliminar todos los estudiantes?",
    winnerText: "¡El elegido es...!",
    "modal.title": "Actualizaciones e información",
    "modal.date": "Última actualización el 30/05/2026",
    "modal.item1": "Recarga automática de la página",
    "modal.item2": "Muchos errores resueltos",
    "modal.item3": "Botón para borrar todo agregado (con alerta)",
    "modal.item4": "Problema de traducción al español solucionado",
    "modal.item5": "Interfaz responsive mejorada",
    "modal.item6": "Música durante la selección del estudiante",
    "modal.item7": "Contador de alumnos en tiempo real",
    "modal.item8": "Confeti mejorado y bugs corregidos",
    "modal.item9": "Selección de idioma + routing por URL",
    "modal.new": "¡Nueva!",
    "modal.contact":
      "¡No dudes en compartirme los errores para mejorar el sitio!",
    "modal.contactLink": "contactarme",
    "modal.thanks": "Gracias por usar Pika Pika 🎉",
    "footer.made": "Hecho con",
    "footer.by": "por",
    "footer.updateBtn": "Actualización e información",
    closeAriaLabel: "Cerrar",
    removeAriaLabel: (name) => `Eliminar ${name}`,
  },
  de: {
    flag: "🇩🇪",
    code: "DE",
    htmlLang: "de",
    subtitle: "Wer wird heute ausgewählt?",
    placeholder: "Gib einen oder mehrere durch Komma getrennte Namen ein...",
    addBtn: "Hinzufügen",
    clearBtn: "✕ Alles löschen",
    ploufBtn: "Pika Pika!",
    emptyState: "Füge Schüler hinzu, um zu beginnen",
    studentSingular: "Schüler",
    studentPlural: "Schüler",
    notifAdded1: "Schüler hinzugefügt!",
    notifAddedN: (n) => `${n} Schüler hinzugefügt!`,
    notifDup: (a, d) => `${a} hinzugefügt · ${d} Duplikat(e) ignoriert`,
    confirmClear: "Möchtest du alle Schüler entfernen?",
    winnerText: "Die/Der Auserwählte ist...!",
    "modal.title": "Updates & Informationen",
    "modal.date": "Letzte Aktualisierung am 30.05.2026",
    "modal.item1": "Automatisches Neuladen der Seite",
    "modal.item2": "Viele Fehler behoben",
    "modal.item3": 'Schaltfläche „Alles löschen" hinzugefügt (mit Bestätigung)',
    "modal.item4": "Übersetzungsproblem auf Spanisch behoben",
    "modal.item5": "Verbessertes responsives Interface",
    "modal.item6": "Musik während der Schülerauswahl",
    "modal.item7": "Echtzeit-Schülerzähler",
    "modal.item8": "Verbesserte Konfetti & Fehlerbehebungen",
    "modal.item9": "Sprachauswahl + URL-Routing",
    "modal.new": "Neu!",
    "modal.contact": "Melde gerne Fehler, um die Seite zu verbessern!",
    "modal.contactLink": "kontaktieren",
    "modal.thanks": "Danke, dass du Pika Pika nutzt 🎉",
    "footer.made": "Gemacht mit",
    "footer.by": "von",
    "footer.updateBtn": "Updates & Informationen",
    closeAriaLabel: "Schließen",
    removeAriaLabel: (name) => `${name} entfernen`,
  },
  pt: {
    flag: "🇵🇹",
    code: "PT",
    htmlLang: "pt",
    subtitle: "Quem será escolhido hoje?",
    placeholder: "Escreve um nome ou vários separados por vírgula...",
    addBtn: "Adicionar",
    clearBtn: "✕ Limpar tudo",
    ploufBtn: "Pika Pika!",
    emptyState: "Adiciona alunos para começar",
    studentSingular: "aluno",
    studentPlural: "alunos",
    notifAdded1: "Aluno adicionado!",
    notifAddedN: (n) => `${n} alunos adicionados!`,
    notifDup: (a, d) => `${a} adicionado(s) · ${d} duplicado(s) ignorado(s)`,
    confirmClear: "Deseja remover todos os alunos?",
    winnerText: "O escolhido é...!",
    "modal.title": "Atualizações e informações",
    "modal.date": "Última atualização em 30/05/2026",
    "modal.item1": "Recarga automática da página",
    "modal.item2": "Muitos erros resolvidos",
    "modal.item3": "Botão para apagar tudo adicionado (com alerta)",
    "modal.item4": "Problema de tradução para espanhol resolvido",
    "modal.item5": "Interface responsiva melhorada",
    "modal.item6": "Música durante a seleção do aluno",
    "modal.item7": "Contador de alunos em tempo real",
    "modal.item8": "Confetti melhorado e bugs corrigidos",
    "modal.item9": "Seleção de idioma + routing por URL",
    "modal.new": "Novo!",
    "modal.contact": "Não hesites em partilhar os erros para melhorar o site!",
    "modal.contactLink": "contactar",
    "modal.thanks": "Obrigado por usar o Pika Pika 🎉",
    "footer.made": "Feito com",
    "footer.by": "por",
    "footer.updateBtn": "Atualização e informações",
    closeAriaLabel: "Fechar",
    removeAriaLabel: (name) => `Remover ${name}`,
  },
};

const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const DEFAULT_LANG = "fr";

// ─── État global ──────────────────────────────────────────────────────────────

let students = [];
let isAnimating = false;
let currentLang = DEFAULT_LANG;

// ─── Initialisation ───────────────────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  // Déterminer la langue depuis l'URL
  const langFromUrl = getLangFromUrl();
  currentLang = langFromUrl || getLangFromBrowser() || DEFAULT_LANG;

  // Mettre à jour l'URL sans recharger
  updateUrl(currentLang, false);
  applyTranslations(currentLang);

  // Charger les étudiants depuis localStorage
  const saved = localStorage.getItem("ploufStudents");
  if (saved) {
    try {
      students = JSON.parse(saved);
    } catch (e) {
      students = [];
    }
    renderStudents();
  }

  // Bouton modal
  const btn = document.getElementById("openUpdateBtn");
  if (btn) btn.addEventListener("click", showUpdateModal);

  // Fermer le modal
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("close-btn") ||
      e.target.id === "updateModal"
    ) {
      hideUpdateModal();
    }
  });

  // Ajouter avec Ctrl+Enter ou Shift+Enter
  const textarea = document.getElementById("studentInput");
  if (textarea) {
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
        addStudent();
      }
    });
  }

  // Sélecteur de langue
  setupLangSelector();

  // Fermer le dropdown si clic en dehors
  document.addEventListener("click", (e) => {
    const selector = document.getElementById("langSelector");
    if (selector && !selector.contains(e.target)) {
      closeLangDropdown();
    }
  });

  // Navigation navigateur (bouton précédent/suivant)
  window.addEventListener("popstate", () => {
    const lang = getLangFromUrl() || DEFAULT_LANG;
    if (lang !== currentLang) {
      currentLang = lang;
      applyTranslations(currentLang);
    }
  });
});

// ─── Routing URL ──────────────────────────────────────────────────────────────

function getLangFromUrl() {
  // Supporte /fr/, /en/, /fr, /en, ?lang=fr
  const path = window.location.pathname;
  const match = path.match(/\/([a-z]{2})(\/|$)/i);
  if (match && SUPPORTED_LANGS.includes(match[1].toLowerCase())) {
    return match[1].toLowerCase();
  }
  const params = new URLSearchParams(window.location.search);
  const qLang = params.get("lang");
  if (qLang && SUPPORTED_LANGS.includes(qLang)) return qLang;
  return null;
}

function getLangFromBrowser() {
  const nav = (navigator.language || navigator.userLanguage || "")
    .toLowerCase()
    .slice(0, 2);
  return SUPPORTED_LANGS.includes(nav) ? nav : null;
}

function updateUrl(lang, pushState = true) {
  const path = `/${lang}/`;
  if (window.history && window.history.pushState) {
    if (pushState) {
      window.history.pushState({ lang }, "", path);
    } else {
      window.history.replaceState({ lang }, "", path);
    }
  }
}

// ─── Sélecteur de langue ──────────────────────────────────────────────────────

function setupLangSelector() {
  const currentBtn = document.getElementById("langCurrent");
  if (currentBtn) {
    currentBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangDropdown();
    });
    // Accessibilité clavier
    currentBtn.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangDropdown();
    });
  }

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        currentLang = lang;
        updateUrl(lang, true);
        applyTranslations(lang);
        renderStudents(); // Re-rendre avec nouvelles traductions
      }
      closeLangDropdown();
    });
  });
}

function toggleLangDropdown() {
  const dropdown = document.getElementById("langDropdown");
  const btn = document.getElementById("langCurrent");
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains("open");
  if (isOpen) {
    closeLangDropdown();
  } else {
    dropdown.classList.add("open");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }
}

function closeLangDropdown() {
  const dropdown = document.getElementById("langDropdown");
  const btn = document.getElementById("langCurrent");
  if (dropdown) dropdown.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

// ─── Application des traductions ──────────────────────────────────────────────

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  // Attribut lang sur <html>
  document.documentElement.lang = t.htmlLang;

  // Mettre à jour le sélecteur de langue affiché
  const flagEl = document.getElementById("langFlag");
  const codeEl = document.getElementById("langCode");
  if (flagEl) flagEl.textContent = t.flag;
  if (codeEl) codeEl.textContent = t.code;

  // Marquer l'option active
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Éléments data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined && typeof t[key] === "string") {
      // Pour les éléments avec des enfants <strong>, ne remplacer que le texte du nœud si besoin
      if (el.children.length === 0) {
        el.textContent = t[key];
      }
    }
  });

  // Placeholder du textarea
  const textarea = document.getElementById("studentInput");
  if (textarea) textarea.placeholder = t.placeholder;

  // Bouton ajouter
  const addBtn = document.querySelector(".btn-add");
  if (addBtn) addBtn.textContent = t.addBtn;

  // Bouton effacer
  const clearBtn = document.querySelector(".btn-clear-inline");
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  // Bouton plouf
  const ploufBtn = document.getElementById("ploufBtn");
  if (ploufBtn) ploufBtn.textContent = t.ploufBtn;

  // Subtitle
  const subtitle = document.querySelector(".subtitle");
  if (subtitle) subtitle.textContent = t.subtitle;

  // Empty state (si présent)
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.textContent = t.emptyState;

  // Bouton modal footer
  const updateBtn = document.getElementById("openUpdateBtn");
  if (updateBtn) updateBtn.textContent = t["footer.updateBtn"];

  // Footer textes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (typeof t[key] === "string" && el.children.length === 0) {
      el.textContent = t[key];
    }
  });

  // Close btn aria-label
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) closeBtn.setAttribute("aria-label", t.closeAriaLabel);

  // Contenu du modal (items de liste)
  updateModalTranslations(t);

  // Compteur d'étudiants
  updateStudentCount();
}

function updateModalTranslations(t) {
  const modal = document.getElementById("updateModal");
  if (!modal) return;

  const title = modal.querySelector("h2");
  if (title) title.textContent = t["modal.title"];

  const date = modal.querySelector(".modal-date");
  if (date) date.textContent = t["modal.date"];

  const items = modal.querySelectorAll(".modal-list li");
  const itemKeys = [
    "modal.item1",
    "modal.item2",
    "modal.item3",
    "modal.item4",
    "modal.item5",
    "modal.item6",
    "modal.item7",
    "modal.item8",
    "modal.item9",
  ];
  items.forEach((li, i) => {
    if (itemKeys[i]) {
      const strong = li.querySelector("strong");
      if (strong) {
        strong.textContent = t["modal.new"];
        // Texte après le strong
        const textNode = Array.from(li.childNodes).find(
          (n) => n.nodeType === 3,
        );
        if (textNode) textNode.textContent = " " + t[itemKeys[i]];
      } else {
        li.textContent = t[itemKeys[i]];
      }
    }
  });

  const contact = modal.querySelector(".modal-contact");
  if (contact) {
    const link = contact.querySelector("a");
    const linkHref = link ? link.href : "mailto:aubin.dev@proton.me";
    contact.innerHTML =
      t["modal.contact"] +
      '<br>Pour me <a href="' +
      linkHref +
      '">' +
      t["modal.contactLink"] +
      "</a>";
  }

  const thanks = modal.querySelector(".modal-thanks");
  if (thanks) thanks.textContent = t["modal.thanks"];
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function showUpdateModal() {
  const modal = document.getElementById("updateModal");
  if (modal) modal.style.display = "flex";
}

function hideUpdateModal() {
  const modal = document.getElementById("updateModal");
  if (modal) modal.style.display = "none";
}

// ─── Persistance ──────────────────────────────────────────────────────────────

function saveStudents() {
  localStorage.setItem("ploufStudents", JSON.stringify(students));
}

// ─── Ajouter des étudiants ────────────────────────────────────────────────────

function addStudent() {
  const input = document.getElementById("studentInput");
  const text = input.value.trim();

  if (text === "") {
    input.classList.add("input-error");
    setTimeout(() => input.classList.remove("input-error"), 500);
    return;
  }

  const names = text
    .split(/[,;\n]+/)
    .map((name) => name.trim())
    .filter((name) => name !== "");

  let added = 0;
  let duplicates = 0;

  names.forEach((name) => {
    if (!students.includes(name)) {
      students.push(name);
      added++;
    } else {
      duplicates++;
    }
  });

  input.value = "";
  saveStudents();
  renderStudents();
  input.focus();

  const t = TRANSLATIONS[currentLang];
  if (duplicates > 0) {
    showNotification(t.notifDup(added, duplicates));
  } else if (added > 1) {
    showNotification(t.notifAddedN(added));
  } else if (added === 1) {
    showNotification(t.notifAdded1);
  }
}

// ─── Supprimer un étudiant ────────────────────────────────────────────────────

function removeStudent(index) {
  const tag = document.getElementById(`student-${index}`);
  if (tag) {
    tag.style.animation = "slideOut 0.25s ease-in forwards";
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
  const t = TRANSLATIONS[currentLang];
  if (!confirm(t.confirmClear)) return;
  students = [];
  saveStudents();
  renderStudents();
  const resultSection = document.getElementById("resultSection");
  if (resultSection) {
    resultSection.innerHTML = `<p class="empty-state">${escapeHtml(t.emptyState)}</p>`;
  }
}

// ─── Afficher les étudiants ───────────────────────────────────────────────────

function renderStudents() {
  const list = document.getElementById("studentsList");
  const ploufBtn = document.getElementById("ploufBtn");
  const listHeader = document.getElementById("listHeader");
  const t = TRANSLATIONS[currentLang];

  if (students.length === 0) {
    list.innerHTML = "";
    if (ploufBtn) ploufBtn.disabled = true;
    if (listHeader) listHeader.style.display = "none";
    return;
  }

  if (listHeader) listHeader.style.display = "flex";
  updateStudentCount();

  list.innerHTML = students
    .map(
      (student, index) => `
        <div class="student-tag" id="student-${index}">
            <span class="student-name">${escapeHtml(student)}</span>
            <button class="btn-remove" onclick="removeStudent(${index})" aria-label="${escapeHtml(t.removeAriaLabel(student))}">✕</button>
        </div>
    `,
    )
    .join("");

  if (ploufBtn) {
    ploufBtn.disabled = false;
    ploufBtn.textContent = t.ploufBtn;
  }
}

function updateStudentCount() {
  const studentCount = document.getElementById("studentCount");
  const t = TRANSLATIONS[currentLang];
  if (studentCount && students.length > 0) {
    const word = students.length === 1 ? t.studentSingular : t.studentPlural;
    studentCount.textContent = `${students.length} ${word}`;
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Notification ─────────────────────────────────────────────────────────────

function showNotification(message) {
  document.querySelectorAll(".notification").forEach((n) => n.remove());
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3200);
}

// ─── Animation Pika Pika ──────────────────────────────────────────────────────

async function startPlouf() {
  if (isAnimating || students.length === 0) return;

  isAnimating = true;
  const ploufBtn = document.getElementById("ploufBtn");
  if (ploufBtn) ploufBtn.disabled = true;

  const audio = document.getElementById("selectionMusic");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  document
    .querySelectorAll(".student-tag")
    .forEach((tag) => tag.classList.remove("highlight"));

  const resultSection = document.getElementById("resultSection");
  if (resultSection) {
    resultSection.innerHTML = '<p class="winner-text loading">🎲</p>';
  }

  try {
    const cycles = 18;
    for (let i = 0; i < cycles; i++) {
      const randomIndex = Math.floor(Math.random() * students.length);
      highlightStudent(randomIndex);
      await sleep(80 + i * 12);
    }

    const winnerIndex = Math.floor(Math.random() * students.length);
    const winner = students[winnerIndex];

    highlightStudent(winnerIndex);
    await sleep(600);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const t = TRANSLATIONS[currentLang];
    if (resultSection) {
      resultSection.innerHTML = `
                <p class="winner-text">${escapeHtml(t.winnerText)}</p>
                <p class="winner-name">${escapeHtml(winner)}</p>
            `;
    }

    students.splice(winnerIndex, 1);
    saveStudents();
    renderStudents();

    createConfetti();
  } finally {
    setTimeout(() => {
      document
        .querySelectorAll(".student-tag")
        .forEach((tag) => tag.classList.remove("highlight"));
      if (ploufBtn) ploufBtn.disabled = students.length === 0;
      isAnimating = false;
    }, 1000);
  }
}

function highlightStudent(index) {
  document
    .querySelectorAll(".student-tag")
    .forEach((tag) => tag.classList.remove("highlight"));
  const tag = document.getElementById(`student-${index}`);
  if (tag) {
    tag.classList.add("highlight");
    tag.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Confetti ─────────────────────────────────────────────────────────────────

function createConfetti() {
  const colors = [
    "#6b86ff",
    "#ecce22",
    "#176d7c",
    "#A78BFA",
    "#ff6868",
    "#52d98a",
    "#ff9f43",
  ];
  const shapes = ["square", "circle", "rect"];
  const count = 60;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";

    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 10 + 7;
    const color = colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = color;
    confetti.style.width = (shape === "rect" ? size * 2 : size) + "px";
    confetti.style.height = size + "px";
    confetti.style.borderRadius =
      shape === "circle" ? "50%" : shape === "rect" ? "2px" : "3px";
    confetti.style.animationDuration = Math.random() * 2 + 2.5 + "s";
    confetti.style.animationDelay = Math.random() * 0.8 + "s";
    confetti.style.opacity = "0.9";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5500);
  }
}
