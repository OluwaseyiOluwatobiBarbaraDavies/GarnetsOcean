// ==================== MARK: PRIVACYMELDING ====================

document.addEventListener('DOMContentLoaded', () => {
  const notice = document.querySelector('#privacyNotice');
  const closeButton = notice?.querySelector('[data-close-privacy]');

  if (!notice || !closeButton) return;

  closeButton.addEventListener('click', () => {
    notice.close();
  });

  // De melding verschijnt bij elk bezoek aan de startpagina.
  if (!notice.open) {
    notice.showModal();
  }
});