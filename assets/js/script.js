// ==================== MARK: DE SALOON BINNENGAAN ====================

document.addEventListener('DOMContentLoaded', () => {
  const entrance = document.querySelector('#saloonDoors');
  if (!entrance) return;

  let opening = false;
  entrance.addEventListener('click', event => {
    // Een nieuw tabblad openen blijft gewoon werken.
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    event.preventDefault();
    if (opening) return;
    opening = true;
    entrance.classList.add('open');
    window.setTimeout(() => window.location.assign(entrance.href), 850);
  });

  // Ook na Terug in de browser kunnen de deuren opnieuw open.
  window.addEventListener('pageshow', () => {
    opening = false;
    entrance.classList.remove('open');
  });
});
