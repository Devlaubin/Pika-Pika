// ─── Traductions ──────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  fr: {
    flag: "🇫🇷",
    code: "FR",
    htmlLang: "fr",
    subtitle: "Qui sera choisi aujourd'hui ?",
    placeholder: "Écris un nom ou plusieurs séparés par une virgule...",
    inputLabel: "Noms des élèves",
    inputHelp: "Appuie sur Ctrl+Entrée ou Shift+Entrée pour ajouter",
    addBtn: "Ajouter",
    clearBtn: "✕ Tout effacer",
    ploufBtn: "Pika Pika !",
    emptyState: "Ajoute des élèves pour commencer",
    studentSingular: "élève",
    studentPlural: "élèves",
    notifAdded1: "Élève ajouté !",
    notifAddedN: (n) => `${n} élèves ajoutés !`,
    notifDup: (a, d) => `${a} ajouté(s) · ${d} doublon(s) ignoré(s)`,
    confirmClear: "Voulez-vous supprimer tous les élèves ?",
    winnerText: "L'élu(e) est... !",
    "modal.title": "Mises à jour et informations",
    "modal.date": "Dernière mise à jour le 02/07/2026",
    "modal.item1": "Rechargement automatique de la page",
    "modal.item2": "Nombreux bugs résolus",
    "modal.item3": "Bouton de suppression totale ajouté (avec alerte)",
    "modal.item4": "Problème de traduction en espagnol résolu",
    "modal.item5": "Interface responsive améliorée",
    "modal.item6": "Musique pendant la sélection",
    "modal.item7": "Compteur d'élèves en temps réel",
    "modal.item8": "Confettis améliorés et bugs corrigés",
    "modal.item9": "Sélection de langue + routing par URL",
    "modal.item10": "Mode sombre + accessibilité améliorée",
    "modal.item11": "Historique des sélections",
    "modal.item12": "Panneau de paramètres",
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
    skipToContent: "Aller au contenu principal",
    skipToInput: "Aller à la saisie",
    "settings.title": "Paramètres",
    "settings.sound": "Sons",
    "settings.animations": "Animations",
    "settings.confetti": "Confettis",
    "settings.darkMode": "Mode sombre",
    "history.title": "Historique",
    "history.clear": "Effacer l'historique",
    "history.empty": "Aucune sélection enregistrée",
    "history.stats": (count) => `${count} élève${count !== 1 ? "s" : ""} sélectionné${count !== 1 ? "s" : ""}`,
  },
  en: {
    flag: "🇬🇧",
    code: "EN",
    htmlLang: "en",
    subtitle: "Who will be chosen today?",
    placeholder: "Type a name or several separated by a comma...",
    inputLabel: "Student names",
    inputHelp: "Press Ctrl+Enter or Shift+Enter to add",
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
    "modal.date": "Last updated on 02/07/2026",
    "modal.item1": "Automatic page reload",
    "modal.item2": "Many bugs fixed",
    "modal.item3": "Clear all button added (with confirmation)",
    "modal.item4": "Spanish translation issue fixed",
    "modal.item5": "Improved responsive interface",
    "modal.item6": "Music during student selection",
    "modal.item7": "Real-time student counter",
    "modal.item8": "Improved confetti & bug fixes",
    "modal.item9": "Language selection + URL routing",
    "modal.item10": "Dark mode + improved accessibility",
    "modal.item11": "Selection history",
    "modal.item12": "Settings panel",
    "modal.new": "New!",
    "modal.contact": "Feel free to report bugs to help improve the site!",
    "modal.contactLink": "contact me",
    "modal.thanks": "Thanks for using Pika Pika 🎉",
    "footer.made": "Made with",
    "footer.by": "by",
    "footer.updateBtn": "Updates & information",
    closeAriaLabel: "Close",
    removeAriaLabel: (name) => `Remove ${name}`,
    skipToContent: "Skip to main content",
    skipToInput: "Skip to input",
    "settings.title": "Settings",
    "settings.sound": "Sounds",
    "settings.animations": "Animations",
    "settings.confetti": "Confetti",
    "settings.darkMode": "Dark mode",
    "history.title": "History",
    "history.clear": "Clear history",
    "history.empty": "No selections recorded",
    "history.stats": (count) => `${count} student${count !== 1 ? "s" : ""} selected`,
  },
  es: {
    flag: "🇪🇸",
    code: "ES",
    htmlLang: "es",
    subtitle: "¿Quién será elegido hoy?",
    placeholder: "Escribe un nombre o varios separados por coma...",
    inputLabel: "Nombres de alumnos",
    inputHelp: "Pulsa Ctrl+Enter o Shift+Enter para añadir",
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
    "modal.date": "Última actualización el 02/07/2026",
    "modal.item1": "Recarga automática de la página",
    "modal.item2": "Muchos errores resueltos",
    "modal.item3": "Botón para borrar todo agregado (con alerta)",
    "modal.item4": "Problema de traducción al español solucionado",
    "modal.item5": "Interfaz responsive mejorada",
    "modal.item6": "Música durante la selección del estudiante",
    "modal.item7": "Contador de alumnos en tiempo real",
    "modal.item8": "Confeti mejorado y bugs corregidos",
    "modal.item9": "Selección de idioma + routing por URL",
    "modal.item10": "Modo oscuro + accesibilidad mejorada",
    "modal.item11": "Historial de selecciones",
    "modal.item12": "Panel de configuración",
    "modal.new": "¡Nuevo!",
    "modal.contact":
      "¡No dudes en compartirme los errores para mejorar el sitio!",
    "modal.contactLink": "contactarme",
    "modal.thanks": "Gracias por usar Pika Pika 🎉",
    "footer.made": "Hecho con",
    "footer.by": "por",
    "footer.updateBtn": "Actualización e información",
    closeAriaLabel: "Cerrar",
    removeAriaLabel: (name) => `Eliminar ${name}`,
    skipToContent: "Ir al contenido principal",
    skipToInput: "Ir a la entrada",
    "settings.title": "Configuración",
    "settings.sound": "Sonidos",
    "settings.animations": "Animaciones",
    "settings.confetti": "Confeti",
    "settings.darkMode": "Modo oscuro",
    "history.title": "Historial",
    "history.clear": "Borrar historial",
    "history.empty": "Sin selecciones registradas",
    "history.stats": (count) => `${count} alumno${count !== 1 ? "s" : ""} seleccionado${count !== 1 ? "s" : ""}`,
  },
  de: {
    flag: "🇩🇪",
    code: "DE",
    htmlLang: "de",
    subtitle: "Wer wird heute ausgewählt?",
    placeholder: "Gib einen oder mehrere durch Komma getrennte Namen ein...",
    inputLabel: "Schülernamen",
    inputHelp: "Drücke Strg+Enter oder Shift+Enter zum Hinzufügen",
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
    "modal.date": "Letzte Aktualisierung am 02.07.2026",
    "modal.item1": "Automatisches Neuladen der Seite",
    "modal.item2": "Viele Fehler behoben",
    "modal.item3": 'Schaltfläche „Alles löschen" hinzugefügt (mit Bestätigung)',
    "modal.item4": "Übersetzungsproblem auf Spanisch behoben",
    "modal.item5": "Verbessertes responsives Interface",
    "modal.item6": "Musik während der Schülerauswahl",
    "modal.item7": "Echtzeit-Schülerzähler",
    "modal.item8": "Verbesserte Konfetti & Fehlerbehebungen",
    "modal.item9": "Sprachauswahl + URL-Routing",
    "modal.item10": "Dunkelmodus + verbesserte Barrierefreiheit",
    "modal.item11": "Auswahlverlauf",
    "modal.item12": "Einstellungspanel",
    "modal.new": "Neu!",
    "modal.contact": "Melde gerne Fehler, um die Seite zu verbessern!",
    "modal.contactLink": "kontaktieren",
    "modal.thanks": "Danke, dass du Pika Pika nutzt 🎉",
    "footer.made": "Gemacht mit",
    "footer.by": "von",
    "footer.updateBtn": "Updates & Informationen",
    closeAriaLabel: "Schließen",
    removeAriaLabel: (name) => `${name} entfernen`,
    skipToContent: "Zum Hauptinhalt springen",
    skipToInput: "Zur Eingabe springen",
    "settings.title": "Einstellungen",
    "settings.sound": "Töne",
    "settings.animations": "Animationen",
    "settings.confetti": "Konfetti",
    "settings.darkMode": "Dunkelmodus",
    "history.title": "Verlauf",
    "history.clear": "Verlauf löschen",
    "history.empty": "Keine Auswahlen gespeichert",
    "history.stats": (count) => `${count} Schüler ausgewählt`,
  },
  pt: {
    flag: "🇵🇹",
    code: "PT",
    htmlLang: "pt",
    subtitle: "Quem será escolhido hoje?",
    placeholder: "Escreve um nome ou vários separados por vírgula...",
    inputLabel: "Nomes dos alunos",
    inputHelp: "Pressiona Ctrl+Enter ou Shift+Enter para adicionar",
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
    "modal.date": "Última atualização em 02/07/2026",
    "modal.item1": "Recarga automática da página",
    "modal.item2": "Muitos erros resolvidos",
    "modal.item3": "Botão para apagar tudo adicionado (com alerta)",
    "modal.item4": "Problema de tradução para espanhol resolvido",
    "modal.item5": "Interface responsiva melhorada",
    "modal.item6": "Música durante a seleção do aluno",
    "modal.item7": "Contador de alunos em tempo real",
    "modal.item8": "Confetti melhorado e bugs corrigidos",
    "modal.item9": "Seleção de idioma + routing por URL",
    "modal.item10": "Modo escuro + acessibilidade melhorada",
    "modal.item11": "Histórico de seleções",
    "modal.item12": "Painel de configurações",
    "modal.new": "Novo!",
    "modal.contact": "Não hesites em partilhar os erros para melhorar o site!",
    "modal.contactLink": "contactar",
    "modal.thanks": "Obrigado por usar o Pika Pika 🎉",
    "footer.made": "Feito com",
    "footer.by": "por",
    "footer.updateBtn": "Atualização e informações",
    closeAriaLabel: "Fechar",
    removeAriaLabel: (name) => `Remover ${name}`,
    skipToContent: "Ir para o conteúdo principal",
    skipToInput: "Ir para a entrada",
    "settings.title": "Configurações",
    "settings.sound": "Sons",
    "settings.animations": "Animações",
    "settings.confetti": "Confetti",
    "settings.darkMode": "Modo escuro",
    "history.title": "Histórico",
    "history.clear": "Limpar histórico",
    "history.empty": "Sem seleções registadas",
    "history.stats": (count) => `${count} aluno${count !== 1 ? "s" : ""} selecionado${count !== 1 ? "s" : ""}`,
  },
};

const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const DEFAULT_LANG = "fr";

// ─── État global ──────────────────────────────────────────────────────────────

let students = [];
let isAnimating = false;
let currentLang = DEFAULT_LANG;
let history = [];

// Settings
let settings = {
  sound: true,
  animations: true,
  confetti: true,
  darkMode: false,
};

// ─── Initialisation ───────────────────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  // Load settings
  loadSettings();
  loadHistory();

  // Check system preference for reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    settings.animations = false;
    document.body.classList.add("reduced-motion");
  }

  // Check system preference for dark mode
  if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("pikaSettings")) {
    settings.darkMode = true;
  }

  // Apply dark mode if needed
  if (settings.darkMode) {
    document.body.classList.add("dark-mode");
  }

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

  // Setup buttons
  setupButtons();

  // Sélecteur de langue
  setupLangSelector();

  // Clic en dehors des panels
  document.addEventListener("click", handleOutsideClick);

  // Navigation navigateur
  window.addEventListener("popstate", () => {
    const lang = getLangFromUrl() || DEFAULT_LANG;
    if (lang !== currentLang) {
      currentLang = lang;
      applyTranslations(currentLang);
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyDown);
});

// ─── Settings Management ─────────────────────────────────────────────────────

function loadSettings() {
  const saved = localStorage.getItem("pikaSettings");
  if (saved) {
    try {
      settings = { ...settings, ...JSON.parse(saved) };
    } catch (e) {}
  }
  updateSettingsUI();
}

function saveSettings() {
  localStorage.setItem("pikaSettings", JSON.stringify(settings));
}

function updateSettingsUI() {
  const soundToggle = document.getElementById("soundToggle");
  const animToggle = document.getElementById("animToggle");
  const confettiToggle = document.getElementById("confettiToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (soundToggle) soundToggle.checked = settings.sound;
  if (animToggle) animToggle.checked = settings.animations;
  if (confettiToggle) confettiToggle.checked = settings.confetti;
  if (darkModeToggle) darkModeToggle.checked = settings.darkMode;

  // Update body classes
  document.body.classList.toggle("reduced-motion", !settings.animations);
  document.body.classList.toggle("dark-mode", settings.darkMode);
}

function setupSettingsListeners() {
  const soundToggle = document.getElementById("soundToggle");
  const animToggle = document.getElementById("animToggle");
  const confettiToggle = document.getElementById("confettiToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (soundToggle) {
    soundToggle.addEventListener("change", (e) => {
      settings.sound = e.target.checked;
      saveSettings();
    });
  }

  if (animToggle) {
    animToggle.addEventListener("change", (e) => {
      settings.animations = e.target.checked;
      saveSettings();
      document.body.classList.toggle("reduced-motion", !settings.animations);
    });
  }

  if (confettiToggle) {
    confettiToggle.addEventListener("change", (e) => {
      settings.confetti = e.target.checked;
      saveSettings();
    });
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", (e) => {
      settings.darkMode = e.target.checked;
      saveSettings();
      document.body.classList.toggle("dark-mode", settings.darkMode);
    });
  }
}

// ─── History Management ──────────────────────────────────────────────────────

function loadHistory() {
  const saved = localStorage.getItem("pikaHistory");
  if (saved) {
    try {
      history = JSON.parse(saved);
    } catch (e) {
      history = [];
    }
  }
}

function saveHistory() {
  localStorage.setItem("pikaHistory", JSON.stringify(history));
}

function addToHistory(name) {
  history.unshift({
    name,
    date: new Date().toISOString(),
  });
  // Keep only last 50 entries
  if (history.length > 50) {
    history = history.slice(0, 50);
  }
  saveHistory();
}

function clearHistory() {
  const t = TRANSLATIONS[currentLang];
  if (!confirm(t.confirmClear)) return;
  history = [];
  saveHistory();
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  const stats = document.getElementById("historyStats");
  const t = TRANSLATIONS[currentLang];

  if (!list || !stats) return;

  stats.textContent = typeof t["history.stats"] === "function"
    ? t["history.stats"](history.length)
    : `${history.length} sélections`;

  if (history.length === 0) {
    list.innerHTML = "";
    list.setAttribute("data-empty", t["history.empty"] || "Aucune sélection");
    return;
  }

  list.removeAttribute("data-empty");
  list.innerHTML = history.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString(currentLang === "en" ? "en-US" : currentLang === "de" ? "de-DE" : currentLang === "es" ? "es-ES" : currentLang === "pt" ? "pt-PT" : "fr-FR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return `
      <li>
        <span class="history-name">${escapeHtml(item.name)}</span>
        <span class="history-date">${formattedDate}</span>
      </li>
    `;
  }).join("");
}

// ─── Button Setup ────────────────────────────────────────────────────────────

function setupButtons() {
  // Modal button
  const openUpdateBtn = document.getElementById("openUpdateBtn");
  if (openUpdateBtn) {
    openUpdateBtn.addEventListener("click", showUpdateModal);
  }

  // Settings button
  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", showSettingsPanel);
  }

  // History button
  const historyBtn = document.getElementById("historyBtn");
  if (historyBtn) {
    historyBtn.addEventListener("click", showHistoryPanel);
  }

  // Textarea keyboard shortcuts
  const textarea = document.getElementById("studentInput");
  if (textarea) {
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
        addStudent();
      }
    });
  }

  // Setup settings listeners
  setupSettingsListeners();
}

// ─── Panel Management ────────────────────────────────────────────────────────

function showUpdateModal() {
  const modal = document.getElementById("updateModal");
  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
    focusFirstFocusable(modal);
  }
}

function hideUpdateModal() {
  const modal = document.getElementById("updateModal");
  if (modal) {
    modal.classList.remove("open");
    modal.style.display = "none";
  }
}

function showSettingsPanel() {
  const panel = document.getElementById("settingsPanel");
  if (panel) {
    panel.classList.add("open");
    focusFirstFocusable(panel);
  }
}

function hideSettingsPanel() {
  const panel = document.getElementById("settingsPanel");
  if (panel) {
    panel.classList.remove("open");
  }
}

function showHistoryPanel() {
  const panel = document.getElementById("historyPanel");
  if (panel) {
    renderHistory();
    panel.classList.add("open");
    focusFirstFocusable(panel);
  }
}

function hideHistoryPanel() {
  const panel = document.getElementById("historyPanel");
  if (panel) {
    panel.classList.remove("open");
  }
}

function focusFirstFocusable(container) {
  const focusable = container.querySelector("button, input, textarea, [tabindex]:not([tabindex='-1'])");
  if (focusable) focusable.focus();
}

// ─── Event Handlers ───────────────────────────────────────────────────────────

function handleOutsideClick(e) {
  // Lang dropdown
  const selector = document.getElementById("langSelector");
  if (selector && !selector.contains(e.target)) {
    closeLangDropdown();
  }

  // Close panels and modals on background click
  if (e.target.id === "updateModal") {
    hideUpdateModal();
  }
  if (e.target.id === "settingsPanel") {
    hideSettingsPanel();
  }
  if (e.target.id === "historyPanel") {
    hideHistoryPanel();
  }

  // Close buttons
  if (e.target.classList.contains("close-btn")) {
    const panel = e.target.closest(".modal, .settings-panel, .history-panel");
    if (panel) {
      panel.classList.remove("open");
      if (panel.id === "updateModal") {
        panel.style.display = "none";
      }
    }
  }
}

function handleKeyDown(e) {
  // Escape closes open panels
  if (e.key === "Escape") {
    closeLangDropdown();
    hideUpdateModal();
    hideSettingsPanel();
    hideHistoryPanel();
  }
}

// ─── Routing URL ──────────────────────────────────────────────────────────────

function getLangFromUrl() {
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
  }

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        currentLang = lang;
        updateUrl(lang, true);
        applyTranslations(lang);
        renderStudents();
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

  document.documentElement.lang = t.htmlLang;

  const flagEl = document.getElementById("langFlag");
  const codeEl = document.getElementById("langCode");
  if (flagEl) flagEl.textContent = t.flag;
  if (codeEl) codeEl.textContent = t.code;

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined && typeof t[key] === "string" && el.children.length === 0) {
      el.textContent = t[key];
    }
  });

  const textarea = document.getElementById("studentInput");
  if (textarea) textarea.placeholder = t.placeholder;

  const addBtn = document.querySelector(".btn-add");
  if (addBtn) addBtn.textContent = t.addBtn;

  const clearBtn = document.querySelector(".btn-clear-inline");
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  const ploufBtn = document.getElementById("ploufBtn");
  if (ploufBtn) ploufBtn.textContent = t.ploufBtn;

  const subtitle = document.querySelector(".subtitle");
  if (subtitle) subtitle.textContent = t.subtitle;

  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.textContent = t.emptyState;

  const updateBtn = document.getElementById("openUpdateBtn");
  if (updateBtn) updateBtn.textContent = t["footer.updateBtn"];

  const inputHelp = document.getElementById("inputHelp");
  if (inputHelp) inputHelp.textContent = t.inputHelp;

  // Update aria labels
  const closeBtns = document.querySelectorAll(".close-btn");
  closeBtns.forEach((btn) => btn.setAttribute("aria-label", t.closeAriaLabel));

  updateModalTranslations(t);
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
    "modal.item1", "modal.item2", "modal.item3", "modal.item4",
    "modal.item5", "modal.item6", "modal.item7", "modal.item8",
    "modal.item9", "modal.item10", "modal.item11", "modal.item12",
  ];

  items.forEach((li, i) => {
    if (itemKeys[i]) {
      const strong = li.querySelector("strong");
      if (strong) {
        strong.textContent = t["modal.new"];
        const textNode = Array.from(li.childNodes).find(
          (n) => n.nodeType === 3 || (n.nodeType === 1 && n.tagName === "SPAN"),
        );
        if (textNode) {
          if (textNode.nodeType === 1) {
            textNode.textContent = t[itemKeys[i]];
          } else {
            textNode.textContent = " " + t[itemKeys[i]];
          }
        }
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
    if (settings.animations) {
      setTimeout(() => input.classList.remove("input-error"), 500);
    } else {
      input.classList.remove("input-error");
    }
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
  if (tag && settings.animations) {
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
        <div class="student-tag" id="student-${index}" role="listitem">
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
  notification.setAttribute("role", "status");
  notification.setAttribute("aria-live", "polite");
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3200);
}

// ─── Animation Pika Pika ──────────────────────────────────────────────────────

async function startPlouf() {
  if (isAnimating || students.length === 0) return;

  isAnimating = true;
  const ploufBtn = document.getElementById("ploufBtn");
  if (ploufBtn) ploufBtn.disabled = true;

  // Play sound if enabled
  if (settings.sound) {
    const audio = document.getElementById("selectionMusic");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }

  document
    .querySelectorAll(".student-tag")
    .forEach((tag) => tag.classList.remove("highlight"));

  const resultSection = document.getElementById("resultSection");
  if (resultSection) {
    resultSection.innerHTML = '<p class="winner-text loading" aria-live="polite">🎲</p>';
  }

  try {
    // Only animate if animations are enabled
    if (settings.animations) {
      const cycles = 18;
      for (let i = 0; i < cycles; i++) {
        const randomIndex = Math.floor(Math.random() * students.length);
        highlightStudent(randomIndex);
        await sleep(80 + i * 12);
      }
    }

    const winnerIndex = Math.floor(Math.random() * students.length);
    const winner = students[winnerIndex];

    if (settings.animations) {
      highlightStudent(winnerIndex);
      await sleep(600);
    }

    // Stop sound
    if (settings.sound) {
      const audio = document.getElementById("selectionMusic");
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }

    const t = TRANSLATIONS[currentLang];
    if (resultSection) {
      resultSection.innerHTML = `
                <p class="winner-text">${escapeHtml(t.winnerText)}</p>
                <p class="winner-name">${escapeHtml(winner)}</p>
            `;
    }

    // Add to history
    addToHistory(winner);

    students.splice(winnerIndex, 1);
    saveStudents();
    renderStudents();

    // Create confetti if enabled
    if (settings.confetti) {
      createConfetti();
    }
  } finally {
    setTimeout(() => {
      document
        .querySelectorAll(".student-tag")
        .forEach((tag) => tag.classList.remove("highlight"));
      if (ploufBtn) ploufBtn.disabled = students.length === 0;
      isAnimating = false;
    }, settings.animations ? 1000 : 100);
  }
}

function highlightStudent(index) {
  document
    .querySelectorAll(".student-tag")
    .forEach((tag) => tag.classList.remove("highlight"));
  const tag = document.getElementById(`student-${index}`);
  if (tag) {
    tag.classList.add("highlight");
    tag.scrollIntoView({ behavior: settings.animations ? "smooth" : "auto", block: "nearest" });
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
    confetti.style.animationDuration = (Math.random() * 2 + 2.5) + "s";
    confetti.style.animationDelay = (Math.random() * 0.8) + "s";
    confetti.style.opacity = "0.9";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5500);
  }
}
