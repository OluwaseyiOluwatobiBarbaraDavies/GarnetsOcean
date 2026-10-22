'use strict';

(() => {
  /******************************/
  /* MARK: THEMA-INSTELLINGEN */
  /******************************/

  const storageKey = 'country-roots-theme';
  const root = document.documentElement;





  /******************************/
  /* MARK: THEMA TOEPASSEN */
  /******************************/

  function updateToggle(toggle) {
    toggle.setAttribute('aria-label', window.siteI18n?.t('a11y_light_mode', 'Lichte modus') ?? 'Lichte modus');
    toggle.setAttribute('aria-pressed', String(root.dataset.theme === 'light'));
    toggle.hidden = false;
  }

  function applyTheme(theme) {
    const light = theme === 'light';
    root.dataset.theme = light ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', light ? '#f7f1e5' : '#190e08');
    document.querySelectorAll('#themeToggle').forEach(updateToggle);
  }

  // Pas de opgeslagen keuze ook toe wanneer de knop nog niet is ingeladen.
  let savedTheme = 'dark';
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch {
    // Zonder browseropslag blijft donker de standaard.
  }
  applyTheme(savedTheme);





  /******************************/
  /* MARK: THEMA WISSELEN */
  /******************************/

  // Eventdelegatie werkt ook voor een navigatie die later met fetch wordt geladen.
  document.addEventListener('click', event => {
    if (!event.target?.closest?.('#themeToggle')) return;
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // De keuze blijft voor deze pagina geldig als opslaan geblokkeerd is.
    }
  });

  document.addEventListener('languagechange', () => {
    document.querySelectorAll('#themeToggle').forEach(updateToggle);
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) applyTheme(event.newValue);
  });





  /******************************/
  /* MARK: INGELADEN NAVIGATIE */
  /******************************/

  // Geef een later ingevoegde knop meteen de juiste toegankelijke toestand.
  const observer = new MutationObserver(records => {
    records.forEach(record => {
      record.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches('#themeToggle')) updateToggle(node);
        node.querySelectorAll('#themeToggle').forEach(updateToggle);
      });
    });
  });
  observer.observe(root, { childList: true, subtree: true });
})();
