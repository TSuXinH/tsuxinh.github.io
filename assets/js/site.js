(function () {
  const body = document.body;
  const stored = localStorage.getItem('pref-theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark');
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('pref-theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  const menuButton = document.querySelector('.menu-button');
  const menu = document.getElementById('menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  const topLink = document.getElementById('top-link');
  if (topLink) {
    const update = () => topLink.classList.toggle('visible', window.scrollY > 500);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  if (!document.querySelector('[data-hit-counter]')) {
    const hitCounter = new Image();
    hitCounter.src = 'https://hits.sh/tsuxinh.github.io.svg';
    hitCounter.alt = '';
    hitCounter.hidden = true;
    hitCounter.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hitCounter);
  }

})();
