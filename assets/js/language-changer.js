document.addEventListener('DOMContentLoaded', async () => {
    const CONFIG = {
        storageKey: 'preferredLanguage',
        defaultLang: 'NL',
        jsonPath: '../../translations.json'
    };

    const toggleBtn = document.getElementById('langToggleBtn');
    if (!toggleBtn) return;

    let translations = {};
    let currentLang = localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLang;

    try {
        const response = await fetch(CONFIG.jsonPath);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        translations = await response.json();
    } catch (error) {
        console.error('Failed to load translations:', error);
        return;
    }

    const markdownToHTML = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[(.*?)\]\("(.*?)"\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    };

    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');

            if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
                const translatedText = translations[lang][key];

                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translatedText;
                } else {
                    element.innerHTML = markdownToHTML(translatedText);
                }
            }
        });

        document.documentElement.setAttribute('lang', lang === 'NL' ? 'nl' : 'eng');

        if (toggleBtn.tagName === 'SELECT') {
            toggleBtn.value = lang;
        } else {
            toggleBtn.textContent = lang;
        }

        if (lang === 'ENG') {
            toggleBtn.classList.add('is-eng');
            toggleBtn.setAttribute('aria-label', 'Schakel naar Nederlands');
            toggleBtn.setAttribute('title', 'Schakel naar Nederlands');
        } else {
            toggleBtn.classList.remove('is-eng');
            toggleBtn.setAttribute('aria-label', 'Switch to English');
            toggleBtn.setAttribute('title', 'Switch to English');
        }
    };

    if (!translations[currentLang]) {
        currentLang = CONFIG.defaultLang;
    }

    updateContent(currentLang);

    if (toggleBtn.tagName === 'SELECT') {
        toggleBtn.addEventListener('change', () => {
            currentLang = toggleBtn.value;
            localStorage.setItem(CONFIG.storageKey, currentLang);
            updateContent(currentLang);
        });
    } else {
        toggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'NL' ? 'ENG' : 'NL';
            localStorage.setItem(CONFIG.storageKey, currentLang);
            updateContent(currentLang);
        });
    }
});