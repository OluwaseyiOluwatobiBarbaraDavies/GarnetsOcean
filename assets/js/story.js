/***************************/
/* MARK: ARTIESTEN ZOEKEN */
/*************************/

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('.garden-controls');
  const search = document.querySelector('#gardenSearch');
  const sort = document.querySelector('#gardenSort');
  const list = document.querySelector('#gardenArtistList');
  const status = document.querySelector('#gardenResults');
  const empty = document.querySelector('#gardenEmpty');

  if (!controls || !search || !sort || !list || !status || !empty) return;

  // De kaarten staan al in de HTML en blijven zonder JavaScript leesbaar.
  const artists = Array.from(list.querySelectorAll('[data-artist]'));
  let announcementTimer;

  function updateArtists(announce = true) {
    const query = search.value.trim().toLocaleLowerCase();
    const direction = sort.value === 'desc' ? -1 : 1;
    let count = 0;

    artists.sort((a, b) => direction * a.dataset.artist.localeCompare(b.dataset.artist));

    artists.forEach(artist => {
      const matches = artist.dataset.artist.toLocaleLowerCase().includes(query);
      artist.hidden = !matches;
      if (matches) count++;
      list.append(artist);
    });

    empty.hidden = count !== 0;
    window.clearTimeout(announcementTimer);

    function updateStatus() {
      const fallback = 'Artiesten gevonden: {count} van 5.';
      const text = window.siteI18n?.t('garden_result_count', fallback) ?? fallback;
      status.textContent = text.replace('{count}', String(count));
    }

    // De screenreader krijgt pas na een korte typepauze het aantal te horen.
    if (announce) announcementTimer = window.setTimeout(updateStatus, 300);
    else updateStatus();
  }

  controls.hidden = false;
  search.addEventListener('input', () => updateArtists());
  sort.addEventListener('change', () => updateArtists());
  document.addEventListener('languagechange', () => updateArtists(false));
  updateArtists(false);
});
