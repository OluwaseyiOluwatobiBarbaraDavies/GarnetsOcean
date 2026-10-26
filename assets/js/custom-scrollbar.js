document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    classes: {
      track: 'country-scroll-track',
      progress: 'country-scroll-progress',
      widget: 'country-scroll-widget',
      vinyl: 'vinyl-disc-indicator',
      note: 'scroll-music-note'
    },
    ids: {
      vinyl: 'vinylScrollIndicator'
    },
    titles: {
      widget: 'Drag to scroll page'
    },
    symbols: ['♪', '♫', '♬', '♩', '♭', '♯'],
    metrics: {
      padding: 60,
      rotationMultiplier: 0.8,
      scrollDeltaThreshold: 4,
      spawnCooldown: 180,
      noteLeftOffset: 10,
      noteTopOffset: 10,
    }
  };

  const track = document.createElement('div');
  track.className = CONFIG.classes.track;
  track.setAttribute('aria-hidden', 'true');

  const progressLine = document.createElement('div');
  progressLine.className = CONFIG.classes.progress;
  track.appendChild(progressLine);
  document.body.appendChild(track);

  const widget = document.createElement('div');
  widget.className = CONFIG.classes.widget;
  widget.tabIndex = 0;
  widget.setAttribute('role', 'scrollbar');
  widget.setAttribute('aria-orientation', 'vertical');
  widget.setAttribute('aria-valuemin', '0');
  widget.setAttribute('aria-valuemax', '100');
  widget.setAttribute('aria-valuenow', '0');
  const controlled = document.querySelector('main');
  if (controlled) {
    if (!controlled.id) controlled.id = 'mainContent';
    widget.setAttribute('aria-controls', controlled.id);
  }

  function updateScrollLabel() {
    const label = window.siteI18n?.t('a11y_scroll_label', 'Scrollpositie op de pagina') ?? 'Scrollpositie op de pagina';
    const help = window.siteI18n?.t('a11y_scroll_help', 'Gebruik pijltoetsen, Page Up, Page Down, Home of End.') ?? 'Gebruik pijltoetsen, Page Up, Page Down, Home of End.';
    widget.setAttribute('aria-label', label);
    widget.title = `${label}. ${help}`;
  }
  updateScrollLabel();
  document.addEventListener('languagechange', updateScrollLabel);
  
  const vinyl = document.createElement('div');
  vinyl.className = CONFIG.classes.vinyl;
  vinyl.id = CONFIG.ids.vinyl;
  vinyl.setAttribute('aria-hidden', 'true');
  
  widget.appendChild(vinyl);
  document.body.appendChild(widget);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const supportsCssScroll = window.CSS?.supports('animation-timeline', 'scroll(root block)') ?? false;
  const useCssScroll = () => supportsCssScroll && !reducedMotion.matches;
  let lastRange = -1;

  let lastScrollY = window.scrollY;
  let vinylRotation = 0;
  let isSpawning = false;
  let isDragging = false;

  const updateScrollUI = () => {

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight !== lastRange) {
      lastRange = totalHeight;
      vinyl.style.setProperty('--scroll-turn', `${Math.max(0, totalHeight) * CONFIG.metrics.rotationMultiplier}deg`);
    }
    if (totalHeight <= 0) {
      widget.hidden = true;
      widget.setAttribute('aria-valuenow', '0');
      if (!useCssScroll()) progressLine.style.height = '0%';
      return;
    }

    widget.hidden = false;
    const scrollPercent = Math.max(0, Math.min(1, window.scrollY / totalHeight));
    widget.setAttribute('aria-valuenow', String(Math.round(scrollPercent * 100)));
    if (!useCssScroll()) progressLine.style.height = `${scrollPercent * 100}%`;

    const topPx = CONFIG.metrics.padding + scrollPercent * (window.innerHeight - (CONFIG.metrics.padding * 2));
    if (!useCssScroll()) widget.style.top = `${topPx}px`;
  };

  const spawnNoteParticle = () => {
    const note = document.createElement('div');
    note.className = CONFIG.classes.note;
    
    note.setAttribute('aria-hidden', 'true');
    note.textContent = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
    // CSS bepaalt kleur, grootte, drift en draaiing via een variantklasse.
    note.classList.add(`note-variant-${Math.floor(Math.random() * 5) + 1}`);
    const widgetRect = widget.getBoundingClientRect();
    // De startpositie moet de actuele, versleepbare bediening volgen.
    note.style.left = `${widgetRect.left - CONFIG.metrics.noteLeftOffset}px`;
    note.style.top = `${widgetRect.top + CONFIG.metrics.noteTopOffset}px`;

    document.body.appendChild(note);

    note.addEventListener('animationend', () => note.remove(), { once: true });
  };

  reducedMotion.addEventListener('change', () => {
    document.querySelectorAll('.scroll-music-note').forEach(note => note.remove());
    if (reducedMotion.matches) vinyl.style.transform = '';
    else { progressLine.style.height = ''; widget.style.top = ''; }
    updateScrollUI();
  });

  updateScrollUI();

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    updateScrollUI();

    if (!useCssScroll() && !reducedMotion.matches) {
      vinylRotation += scrollDelta * CONFIG.metrics.rotationMultiplier;
      vinyl.style.transform = `rotate(${vinylRotation}deg)`;
    }

    if (!reducedMotion.matches && Math.abs(scrollDelta) > CONFIG.metrics.scrollDeltaThreshold && !isSpawning) {
      isSpawning = true;
      spawnNoteParticle();
      
      setTimeout(() => {
        isSpawning = false;
      }, CONFIG.metrics.spawnCooldown);
    }

    lastScrollY = currentScrollY;
  });

  window.addEventListener('resize', updateScrollUI);

  // Een scrollbar is ook een toetsenbordbediening, geen muis-only div.
  widget.addEventListener('keydown', event => {
    const totalHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const pageStep = window.innerHeight * 0.85;
    const destinations = {
      ArrowUp: window.scrollY - 40,
      ArrowLeft: window.scrollY - 40,
      ArrowDown: window.scrollY + 40,
      ArrowRight: window.scrollY + 40,
      PageUp: window.scrollY - pageStep,
      PageDown: window.scrollY + pageStep,
      Home: 0,
      End: totalHeight,
    };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    window.scrollTo({ top: Math.max(0, Math.min(totalHeight, destinations[event.key])), behavior: 'instant' });
  });

  widget.addEventListener('pointerdown', (e) => {
    widget.focus({ preventScroll: true });
    isDragging = true;
    widget.setPointerCapture(e.pointerId);
  });

  widget.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    if (window.innerHeight <= CONFIG.metrics.padding * 2) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const availableHeight = window.innerHeight - (CONFIG.metrics.padding * 2);

    let clampedY = Math.max(CONFIG.metrics.padding, Math.min(e.clientY, window.innerHeight - CONFIG.metrics.padding));
    let dragPercent = (clampedY - CONFIG.metrics.padding) / availableHeight;

    widget.setAttribute('aria-valuenow', String(Math.round(dragPercent * 100)));
    if (!useCssScroll()) progressLine.style.height = `${dragPercent * 100}%`;
    if (!useCssScroll()) widget.style.top = `${clampedY}px`;

    window.scrollTo({
      top: dragPercent * totalHeight,
      behavior: 'instant'
    });
  });

  widget.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { widget.releasePointerCapture(e.pointerId); } catch(err) {}
  });

  widget.addEventListener('pointercancel', () => {
    isDragging = false;
  });
});