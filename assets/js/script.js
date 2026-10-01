// ==================== MARK: DE SALOON BINNENGAAN ====================

document.addEventListener('DOMContentLoaded', () => {
  const entrance = document.querySelector('.saloon-doors');
  const tooltip = document.querySelector('.doorToolTip');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion)');

  if (!entrance) return;

  let opening = false;
  let tooltipDimissed = false;
  let navigationTime;





  // ==================== MARK: TEKST BIJ DE MUIS ====================

  function hideTooltip() {
    tooltip?.classList.remove('is-visible');
  }

  function showTooltip(event) {
    if (!tooltip || opening || tooltipDismissed) return;

    // Achter een open dialoog hoort geen tooltip zichtbaar te zijn.
    if (document.querySelector('dialog[open]')) {
      hideTooltip();
      return;
    }

    const offset = 15;
    const edge = 8;

    // Houd de tekst binnen het scherm, ook vlak bij de rand.
    const x = Math.max(
      edge,
      Math.min(
        event.clientX + offset,
        window.innerWidth - tooltip.offsetWidth - edge
      )
    );

    const y = Math.max(
      edge,
      Math.min(
        event.clientY + offset,
        window.innerHeight - tooltip.offsetHeight - edge
      )
    );

    // Alleen de muispositie komt uit JavaScript; de styling staat in CSS.
    tooltip.style.setProperty('--tooltip-x', `${x}px`);
    tooltip.style.setProperty('--tooltip-y', `${y}px`);
    tooltip.classList.add('is-visible');
  }

  entrance.addEventListener('mouseenter', event => {
    tooltipDismissed = false;
    showTooltip(event);
  });

  entrance.addEventListener('mousemove', showTooltip);
  entrance.addEventListener('mouseleave', hideTooltip);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      tooltipDismissed = true;
      hideTooltip();
    }
  });

  window.addEventListener('blur', hideTooltip);
  window.addEventListener('scroll', hideTooltip);
  window.addEventListener('resize', hideTooltip);





  // ==================== MARK: DEUREN OPENEN ====================

  entrance.addEventListener('click', event => {
    hideTooltip();

    // Ctrl-klik en andere aangepaste klikken blijven normale linkacties.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    // Zonder animatie volgt de browser meteen de link.
    if (reducedMotion.matches) return;

    event.preventDefault();

    // Meerdere klikken starten niet meerdere timers.
    if (opening) return;

    opening = true;
    entrance.classList.add('open');

    navigationTimer = window.setTimeout(() => {
      window.location.assign(entrance.href);
    }, 850);
  });





  // ==================== MARK: TERUG NAAR DE PAGINA ====================

  function resetEntrance() {
    window.clearTimeout(navigationTimer);
    opening = false;
    tooltipDismissed = false;
    entrance.classList.remove('open');
    hideTooltip();
  }

  // Na Terug in de browser kunnen de deuren opnieuw open.
  window.addEventListener('pagehide', resetEntrance);
  window.addEventListener('pageshow', resetEntrance);
});