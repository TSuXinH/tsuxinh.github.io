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

  document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
    button.addEventListener('click', () => {
      const box = document.getElementById('lightbox');
      if (!box) return;
      box.querySelector('img').src = button.dataset.lightboxSrc;
      box.querySelector('.lightbox-caption').textContent = button.dataset.lightboxCaption || '';
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
      box.querySelector('.lightbox-close').focus();
    });
  });

  const closeLightbox = () => {
    const box = document.getElementById('lightbox');
    if (!box) return;
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
  };
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', (event) => {
    if (event.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
})();
