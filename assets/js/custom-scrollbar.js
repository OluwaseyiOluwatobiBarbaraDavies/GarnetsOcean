document.addEventListener('DOMContentLoaded', () => {
  const track = document.createElement('div');
  track.className = 'country-scroll-track';

  const progressLine = document.createElement('div');
  progressLine.className = 'country-scroll-progress';
  track.appendChild(progressLine);
  document.body.appendChild(track);

  const widget = document.createElement('div');
  widget.className = 'country-scroll-widget';
  widget.title = 'Drag to scroll page';
  
  const vinyl = document.createElement('div');
  vinyl.className = 'vinyl-disc-indicator';
  vinyl.id = 'vinylScrollIndicator';
  
  widget.appendChild(vinyl);
  document.body.appendChild(widget);

  let lastScrollY = window.scrollY;
  let vinylRotation = 0;
  let isSpawning = false;
  let isDragging = false;
  
  const noteSymbols = ['♪', '♫', '♬', '♩', '♭', '♯'];
  const colors = ['#d4af37', '#e6c280', '#c5a059', '#fdfbf7', '#b37228'];

  updateScrollUI();

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    updateScrollUI();

    vinylRotation += scrollDelta * 0.8;
    vinyl.style.transform = `rotate(${vinylRotation}deg)`;

    if (Math.abs(scrollDelta) > 4 && !isSpawning) {
      isSpawning = true;
      spawnNoteParticle();
      
      setTimeout(() => {
        isSpawning = false;
      }, 180);
    }

    lastScrollY = currentScrollY;
  });

  function updateScrollUI() {
    if (isDragging) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressLine.style.height = '0%';
      return;
    }

    const scrollPercent = window.scrollY / totalHeight;
    
    progressLine.style.height = `${scrollPercent * 100}%`;

    const topPx = 60 + scrollPercent * (window.innerHeight - 120);
    widget.style.top = `${topPx}px`;
  }

  window.addEventListener('resize', updateScrollUI);

  widget.addEventListener('pointerdown', (e) => {
    isDragging = true;
    widget.setPointerCapture(e.pointerId);
  });

  widget.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const padding = 60;
    const availableHeight = window.innerHeight - (padding * 2);

    let clampedY = Math.max(padding, Math.min(e.clientY, window.innerHeight - padding));
    let dragPercent = (clampedY - padding) / availableHeight;

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

  function spawnNoteParticle() {
    const note = document.createElement('div');
    note.className = 'scroll-music-note';
    
    note.textContent = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    const widgetRect = widget.getBoundingClientRect();
    
    note.style.left = `${widgetRect.left - 10}px`;
    note.style.top = `${widgetRect.top + 10}px`;
    note.style.fontSize = `${18 + Math.random() * 8}px`;
    
    const horizontalDrift = -20 - (Math.random() * 30);
    const rotationDeg = (Math.random() - 0.5) * 60;
    
    note.style.setProperty('--dx', `${horizontalDrift}px`);
    note.style.setProperty('--dr', `${rotationDeg}deg`);

    document.body.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, 1000);
  }
});