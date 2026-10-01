//*************************  
// * MARK: PRIVACYMELDING *
//*************************

document.addEventListener('DOMContentLoaded', () => {
  const notice = document.querySelector('#privacyNotice');
  const closeButton = notice?.querySelector('[data-close-privacy]');
  const heading = notice?.querySelector('#privacyTitle');
  const entrance = document.querySelector('#saloonDoors');
  if (!notice || !closeButton) return;

  closeButton.addEventListener('click', () => notice.close());
  notice.addEventListener('close', () => entrance?.focus());

  // Begin bij de uitleg. Na het sluiten kun je meteen naar binnen.
  notice.showModal();
  heading?.focus();
});
