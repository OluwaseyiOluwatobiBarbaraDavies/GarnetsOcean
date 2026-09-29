document.addEventListener('DOMContentLoaded', async () => {
    const CONFIG = {
        storageKey: 'preferredLanguage',
        defaultLang: 'NL',
        jsonPath: document.documentElement.dataset.translationsPath || '../../translations.json'
    };
    const toggleBtn = document.getElementById('langToggleBtn');
    let currentLang = CONFIG.defaultLang;
    try {
        currentLang = localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLang;
    } catch (error) {
        console.warn('Language preference storage is unavailable.', error);
    }

    let translations;
    try {
        const response = await fetch(CONFIG.jsonPath);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        translations = await response.json();
    } catch (error) {
        console.error('Failed to load translations:', error);
        return;
    }
    if (!['NL', 'ENG'].includes(currentLang) || !translations[currentLang]) {
        currentLang = CONFIG.defaultLang;
    }

    const t = (key, fallback = key) => translations[currentLang]?.[key]
        ?? translations[CONFIG.defaultLang]?.[key] ?? fallback;

    function renderMarkdown(element, text) {
        const fragment = document.createDocumentFragment();
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

    function updateContent() {
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
        document.documentElement.lang = currentLang === 'NL' ? 'nl' : 'en';
        if (toggleBtn) {
            if (toggleBtn.tagName === 'SELECT') toggleBtn.value = currentLang;
            else toggleBtn.textContent = currentLang;
            toggleBtn.classList.toggle('is-eng', currentLang === 'ENG');
            const label = currentLang === 'ENG' ? 'Schakel naar Nederlands' : 'Switch to English';
            toggleBtn.setAttribute('aria-label', label);
            toggleBtn.title = label;
        }
        document.dispatchEvent(new CustomEvent('languagechange', {detail: {lang: currentLang}}));
    }

    window.siteI18n = {t, get language() { return currentLang; }};
    updateContent();
    if (toggleBtn) {
        toggleBtn.addEventListener(toggleBtn.tagName === 'SELECT' ? 'change' : 'click', () => {
            const nextLang = toggleBtn.tagName === 'SELECT'
                ? toggleBtn.value : currentLang === 'NL' ? 'ENG' : 'NL';
            if (!['NL', 'ENG'].includes(nextLang) || !translations[nextLang]) return;
            currentLang = nextLang;
            try { localStorage.setItem(CONFIG.storageKey, currentLang); }
            catch (error) { console.warn('Could not save language preference.', error); }
            updateContent();
        });
    }
});
