'use strict';

/******************************/
/* MARK: AFBEELDING VERGROTEN */
/****************************/

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#imageModal');
  const modalImage = document.querySelector('#modalImg');
  const caption = document.querySelector('#modalCaption');
  const closeButton = modal?.querySelector('.modal-close');
  if (!modal || !modalImage || !caption || !closeButton) return;
  let trigger = null;

  function updateDescription() {
    if (!trigger) return;
    const image = trigger.querySelector('img');
    modalImage.alt = image.alt;
    caption.textContent = trigger.nextElementSibling?.textContent.trim() || image.alt;
  }

  document.querySelectorAll('.gallery-image-link').forEach(link => {
    link.addEventListener('click', event => {
      // Enter op een link levert dezelfde native click op als een muisklik.
      // Nieuwe-tabgebaren en browsers zonder dialog-ondersteuning blijven werken.
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey
        || event.shiftKey || event.altKey || typeof modal.showModal !== 'function') return;
      event.preventDefault();
      trigger = link;
      modalImage.src = link.href;
      updateDescription();
      if (!modal.open) modal.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => modal.close());
  // Escape en focus binnen de modal worden door de native dialog afgehandeld.
  modal.addEventListener('close', () => {
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  });
  document.addEventListener('languagechange', () => {
    if (modal.open) updateDescription();
  });
});
