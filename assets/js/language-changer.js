'use strict';

document.addEventListener('DOMContentLoaded', async () => {
  /************************/
  /* MARK: INSTELLINGEN */
  /************************/

  const config = {
    storageKey: 'preferredLanguage',
    defaultLang: 'NL',
    jsonPath: document.documentElement.dataset.translationsPath || '../../translations.json',
  };
  const toggleBtn = document.getElementById('langToggleBtn');
  let currentLang = config.defaultLang;
  try {
    currentLang = localStorage.getItem(config.storageKey) || config.defaultLang;
  } catch (error) {
    console.warn('Language preference storage is unavailable.', error);
  }

  let translations;
  try {
    const response = await fetch(config.jsonPath);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    translations = await response.json();
  } catch (error) {
    console.error('Failed to load translations:', error);
    return;
  }

  if (!['NL', 'ENG'].includes(currentLang) || !translations[currentLang]) {
    currentLang = config.defaultLang;
  }

  const t = (key, fallback = key) => translations[currentLang]?.[key]
    ?? translations[config.defaultLang]?.[key] ?? fallback;





  /******************************/
  /* MARK: TEKST EN OPMAAK */
  /******************************/

  function renderMarkdown(element, text) {
    const fragment = document.createDocumentFragment();
    // Alleen vetgedrukte tekst en links worden omgezet; er wordt geen HTML ingelezen.
    const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\((?:"([^"]+)"|([^\s)]+))\)/g;
    let end = 0;
    for (const match of text.matchAll(pattern)) {
      fragment.append(document.createTextNode(text.slice(end, match.index)));
      if (match[1] !== undefined) {
        const strong = document.createElement('strong');
        strong.textContent = match[1];
        fragment.append(strong);
      } else {
        const href = match[3] || match[4];
        const url = new URL(href, document.baseURI);
        if (['https:', 'http:'].includes(url.protocol)) {
          const link = document.createElement('a');
          link.href = url.href;
          link.textContent = match[2];
          link.target = '_blank';
          link.rel = 'noopener';
          fragment.append(link);
        } else {
          fragment.append(document.createTextNode(match[2]));
        }
      }
      end = match.index + match[0].length;
    }
    fragment.append(document.createTextNode(text.slice(end)));
    element.replaceChildren(fragment);
  }





  /******************************/
  /* MARK: TAALKNOP BIJWERKEN */
  /******************************/

  function updateToggle() {
    if (!toggleBtn) return;
    if (toggleBtn.tagName === 'SELECT') {
      toggleBtn.value = currentLang;
    } else if (!toggleBtn.querySelector('.language-option')) {
      // Maak op andere pagina's dezelfde twee labels, zonder inline CSS.
      const options = ['NL', 'ENG'].map(language => {
        const option = document.createElement('span');
        option.className = `language-option language-${language.toLowerCase()}`;
        option.textContent = language;
        option.setAttribute('aria-hidden', 'true');
        return option;
      });
      toggleBtn.replaceChildren(...options);
    }

    // Gebruik geen textContent op de hele knop: dat zou beide labels verwijderen.
    toggleBtn.classList.toggle('is-eng', currentLang === 'ENG');
    const label = currentLang === 'ENG'
      ? 'Language: English. Switch to Dutch'
      : 'Taal: Nederlands. Wissel naar Engels';
    toggleBtn.setAttribute('aria-label', label);
    toggleBtn.title = label;
  }





  /******************************/
  /* MARK: VERTALINGEN TOEPASSEN */
  /******************************/

  function updateContent() {
    document.documentElement.lang = currentLang === 'NL' ? 'nl' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const value = t(key, element.textContent);
      if (element.matches('input, textarea')) {
        element.placeholder = value;
      } else if (element.tagName === 'TITLE') {
        element.textContent = value;
      } else {
        renderMarkdown(element, value);
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      element.placeholder = t(element.dataset.i18nPlaceholder, element.placeholder);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
      element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
    });
    updateToggle();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: currentLang } }));
  }





  /******************************/
  /* MARK: TAAL WISSELEN */
  /******************************/

  window.siteI18n = { t, get language() { return currentLang; } };
  updateContent();
  if (toggleBtn) {
    toggleBtn.addEventListener(toggleBtn.tagName === 'SELECT' ? 'change' : 'click', () => {
      const nextLang = toggleBtn.tagName === 'SELECT'
        ? toggleBtn.value : currentLang === 'NL' ? 'ENG' : 'NL';
      if (!['NL', 'ENG'].includes(nextLang) || !translations[nextLang]) return;
      currentLang = nextLang;
      try {
        localStorage.setItem(config.storageKey, currentLang);
      } catch (error) {
        console.warn('Could not save language preference.', error);
      }
      updateContent();
    });
  }
});
