// ==================== MARK: NAVIGATIE ====================

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const list = nav?.querySelector('ul');
  if (!list || nav.querySelector('.guitar-menu-toggle')) return;

  const smallScreen = window.matchMedia('(max-width: 53.125rem)');
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('guitar-menu-toggle');
  button.setAttribute('aria-label', 'Menu');
  if (!list.id) list.id = 'mainNavigation';
  button.setAttribute('aria-controls', list.id);

  const icon = document.createElement('span');
  icon.classList.add('guitar-icon');
  icon.setAttribute('aria-hidden', 'true');
  const strings = document.createElement('span');
  strings.classList.add('banjo-strings');
  icon.append(strings);
  button.append(icon);
  nav.prepend(button);

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    button.classList.toggle('active', open);
    list.classList.toggle('open', open);
    // Een dicht menu is ook echt onbereikbaar voor toetsenbord en screenreader.
    list.inert = smallScreen.matches && !open;
    document.body.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('menu-open', open);
  }

  button.addEventListener('click', () => setOpen(!list.classList.contains('open')));
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && list.classList.contains('open')) {
      event.preventDefault();
      button.focus();
      setOpen(false);
    }
  });
  // Bij verder tabben sluit het menu zodra je de navigatie verlaat.
  nav.addEventListener('focusout', () => {
    window.setTimeout(() => {
      if (!nav.contains(document.activeElement)) setOpen(false);
    }, 0);
  });
  smallScreen.addEventListener('change', () => {
    if (smallScreen.matches && list.contains(document.activeElement)) button.focus();
    if (!smallScreen.matches && document.activeElement === button) list.querySelector('a')?.focus();
    setOpen(false);
  });
  nav.classList.add('nav-enhanced');
  setOpen(false);
});
