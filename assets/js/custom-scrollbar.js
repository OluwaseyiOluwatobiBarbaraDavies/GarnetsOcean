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

  const progressLine = document.createElement('div');
  progressLine.className = CONFIG.classes.progress;
  track.appendChild(progressLine);
  document.body.appendChild(track);

  const widget = document.createElement('div');
  widget.className = CONFIG.classes.widget;
  widget.title = CONFIG.titles.widget;
  
  const vinyl = document.createElement('div');
  vinyl.className = CONFIG.classes.vinyl;
  vinyl.id = CONFIG.ids.vinyl;
  
  widget.appendChild(vinyl);
  document.body.appendChild(widget);

  let lastScrollY = window.scrollY;
  let vinylRotation = 0;
  let isSpawning = false;
  let isDragging = false;

  const updateScrollUI = () => {
    if (isDragging) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressLine.style.height = '0%';
      return;
    }

    const scrollPercent = window.scrollY / totalHeight;
    progressLine.style.height = `${scrollPercent * 100}%`;

    const topPx = CONFIG.metrics.padding + scrollPercent * (window.innerHeight - (CONFIG.metrics.padding * 2));
    widget.style.top = `${topPx}px`;
  };

  const spawnNoteParticle = () => {
    const note = document.createElement('div');
    note.className = CONFIG.classes.note;
    
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

    vinylRotation += scrollDelta * CONFIG.metrics.rotationMultiplier;
    vinyl.style.transform = `rotate(${vinylRotation}deg)`;

    if (Math.abs(scrollDelta) > CONFIG.metrics.scrollDeltaThreshold && !isSpawning) {
      isSpawning = true;
      spawnNoteParticle();
      
      setTimeout(() => {
        isSpawning = false;
      }, CONFIG.metrics.spawnCooldown);
    }

    lastScrollY = currentScrollY;
  });

  window.addEventListener('resize', updateScrollUI);

  widget.addEventListener('pointerdown', (e) => {
    isDragging = true;
    widget.setPointerCapture(e.pointerId);
  });

  widget.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const availableHeight = window.innerHeight - (CONFIG.metrics.padding * 2);

    let clampedY = Math.max(CONFIG.metrics.padding, Math.min(e.clientY, window.innerHeight - CONFIG.metrics.padding));
    let dragPercent = (clampedY - CONFIG.metrics.padding) / availableHeight;

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