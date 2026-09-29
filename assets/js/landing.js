// ==================== MARK: AFBEELDING VERGROTEN ====================

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#imageModal');
  const modalImage = document.querySelector('#modalImg');
  const caption = document.querySelector('#modalCaption');
  const closeButton = modal?.querySelector('.modal-close');
  if (!modal || !modalImage || !caption || !closeButton) return;

  let trigger = null;
  document.querySelectorAll('.gallery-image-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      const image = link.querySelector('img');
      modalImage.src = link.href;
      modalImage.alt = image.alt;
      caption.textContent = link.nextElementSibling?.textContent || image.alt;
      modal.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => trigger?.focus());
});
