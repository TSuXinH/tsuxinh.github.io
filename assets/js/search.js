(function () {
  const input = document.getElementById('search-input');
  const output = document.getElementById('search-results');
  if (!input || !output || !window.SEARCH_INDEX) return;

  const escapeHTML = (value) => value.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const render = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      output.innerHTML = '<p class="empty-state">Type a topic, project name, venue, or tag.</p>';
      return;
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const results = window.SEARCH_INDEX.filter((item) => {
      const haystack = [item.title, item.summary, item.date, ...(item.tags || [])].join(' ').toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
    if (!results.length) {
      output.innerHTML = '<p class="empty-state">No matching pages.</p>';
      return;
    }
    output.innerHTML = results.map((item) => `
      <article class="search-result">
        <h2><a href="${item.url}">${escapeHTML(item.title)}</a></h2>
        <p>${escapeHTML(item.summary)}</p>
        <small>${escapeHTML(String(item.date))} · ${(item.tags || []).map(escapeHTML).join(' · ')}</small>
      </article>
    `).join('');
  };

  input.addEventListener('input', () => {
    render(input.value);
    const url = new URL(window.location);
    input.value ? url.searchParams.set('q', input.value) : url.searchParams.delete('q');
    history.replaceState(null, '', url);
  });

  const initial = new URLSearchParams(window.location.search).get('q') || '';
  input.value = initial;
  render(initial);
})();
