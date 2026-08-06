(function () {
  const body = document.body;
  const stored = localStorage.getItem('pref-theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark');
  }

  const toggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const updateThemeIcon = () => {
    const dark = body.classList.contains('dark');
    if (themeIcon) {
      themeIcon.src = dark ? '/assets/img/night.png' : '/assets/img/day.png';
    }
    if (toggle) {
      const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  };

  updateThemeIcon();
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('pref-theme', body.classList.contains('dark') ? 'dark' : 'light');
      updateThemeIcon();
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

  const visitorMap = document.querySelector('.visitor-map-embed');
  if (visitorMap) {
    const disableBrokenStatsLink = () => {
      const mapLink = visitorMap.querySelector('#mapmyvisitors-widget');
      if (mapLink) {
        mapLink.removeAttribute('href');
        mapLink.removeAttribute('target');
      }
    };

    const mapObserver = new MutationObserver(disableBrokenStatsLink);
    mapObserver.observe(visitorMap, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href']
    });
    disableBrokenStatsLink();

    visitorMap.addEventListener('click', (event) => {
      if (event.target.closest('#mapmyvisitors-widget')) {
        event.preventDefault();
      }
    });
  }

})();
