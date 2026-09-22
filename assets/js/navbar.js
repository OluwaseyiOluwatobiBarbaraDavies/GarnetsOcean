function initNavToggle() {
  const nav = document.querySelector('nav');
  const navUl = document.querySelector('nav ul');

  if (!nav || !navUl) return;

  if (!nav.querySelector('.guitar-menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'guitar-menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle Navigation Menu');
    
    const iconSpan = document.createElement('span');
    iconSpan.className = 'guitar-icon';

    const stringsSpan = document.createElement('span');
    stringsSpan.className = 'banjo-strings';
    iconSpan.appendChild(stringsSpan);

    menuToggle.appendChild(iconSpan);

    nav.prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navUl.classList.toggle('open');
      document.body.classList.toggle('menu-open');
      document.documentElement.classList.toggle('menu-open');
    });
  }
}

document.addEventListener('DOMContentLoaded', initNavToggle);