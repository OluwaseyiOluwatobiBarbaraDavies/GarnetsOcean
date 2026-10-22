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
    colors: ['#d4af37', '#e6c280', '#c5a059', '#fdfbf7', '#b37228'],
    metrics: {
      padding: 60,
      rotationMultiplier: 0.8,
      scrollDeltaThreshold: 4,
      spawnCooldown: 180,
      noteLifetime: 1000,
      noteLeftOffset: 10,
      noteTopOffset: 10,
      minFontSize: 18,
      fontSizeRange: 8,
      minDrift: -20,
      driftRange: -30,
      rotationRange: 60
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

  let lastScrollY = window.scrollY;
  let vinylRotation = 0;
  let isSpawning = false;
  let isDragging = false;

  const updateScrollUI = () => {
    if (isDragging) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      widget.hidden = true;
      widget.setAttribute('aria-valuenow', '0');
      progressLine.style.height = '0%';
      return;
    }

    widget.hidden = false;
    const scrollPercent = Math.max(0, Math.min(1, window.scrollY / totalHeight));
    widget.setAttribute('aria-valuenow', String(Math.round(scrollPercent * 100)));
    progressLine.style.height = `${scrollPercent * 100}%`;

    const topPx = CONFIG.metrics.padding + scrollPercent * (window.innerHeight - (CONFIG.metrics.padding * 2));
    widget.style.top = `${topPx}px`;
  };

  const spawnNoteParticle = () => {
    const note = document.createElement('div');
    note.className = CONFIG.classes.note;
    
    note.setAttribute('aria-hidden', 'true');
    note.textContent = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
    note.style.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
    
    const widgetRect = widget.getBoundingClientRect();
    
    note.style.left = `${widgetRect.left - CONFIG.metrics.noteLeftOffset}px`;
    note.style.top = `${widgetRect.top + CONFIG.metrics.noteTopOffset}px`;
    note.style.fontSize = `${CONFIG.metrics.minFontSize + Math.random() * CONFIG.metrics.fontSizeRange}px`;
    
    const horizontalDrift = CONFIG.metrics.minDrift - (Math.random() * Math.abs(CONFIG.metrics.driftRange));
    const rotationDeg = (Math.random() - 0.5) * CONFIG.metrics.rotationRange;
    
    note.style.setProperty('--dx', `${horizontalDrift}px`);
    note.style.setProperty('--dr', `${rotationDeg}deg`);

    document.body.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, CONFIG.metrics.noteLifetime);
  };

  updateScrollUI();

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    updateScrollUI();

    if (!reducedMotion.matches) {
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
    progressLine.style.height = `${dragPercent * 100}%`;
    widget.style.top = `${clampedY}px`;

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