// ==================== MARK: AFBEELDINGSBRONNEN ====================

const imageSources = [
  {
    "title": "Vlag van Texas",
    "filename": "texasFlag.jpg",
    "filepath": "../resources/images/texasFlag.jpg",
    "category": "Landschap",
    "sourceAuthor": "Valley Homes",
    "secondaryCredit": null,
    "url": "https://valleyhomeslc.com/location/mobile-homes-for-sale-dumas-tx/",
    "titleKey": "sources_image_0_title",
    "categoryKey": "sources_category_0"
  },
  {
    "title": "Rodeo Evenement",
    "filename": "rodeo.jpg",
    "filepath": "../resources/images/rodeo.jpg",
    "category": "Evenementen & Posters",
    "sourceAuthor": "National Western Stock Show",
    "secondaryCredit": null,
    "url": "https://nationalwestern.com/rodeos/",
    "titleKey": "sources_image_1_title",
    "categoryKey": "sources_category_1"
  },
  {
    "title": "Country Day bij Houston Rodeo",
    "filename": "CountryDay.jpg",
    "filepath": "../resources/images/CountryDay.jpg",
    "category": "Evenementen & Posters",
    "sourceAuthor": "Houstonia Magazine",
    "secondaryCredit": "Houston Livestock Show and Rodeo",
    "url": "https://www.houstoniamag.com/arts-and-culture/2025/03/houston-rodeo-best-days-to-visit",
    "titleKey": "sources_image_2_title",
    "categoryKey": "sources_category_1",
    "creditKey": "sources_image_2_credit"
  },
  {
    "title": "Festival Poster / Line-up",
    "filename": "FestivalPoster.jpg",
    "filepath": "../resources/images/FestivalPoster.jpg",
    "category": "Evenementen & Posters",
    "sourceAuthor": "Houston Chronicle",
    "secondaryCredit": "Houston Livestock Show and Rodeo",
    "url": "https://www.houstonchronicle.com/entertainment/music/article/houston-rodeo-genre-calendar-2025-acts-lineup-tix-19934612.php",
    "titleKey": "sources_image_3_title",
    "categoryKey": "sources_category_1",
    "creditKey": "sources_image_3_credit"
  },
  {
    "title": "Dolly Parton",
    "filename": "artist-dolly.jpg",
    "filepath": "../resources/images/artist-dolly.jpg",
    "category": "Artiesten",
    "sourceAuthor": "Daily Bruin",
    "secondaryCredit": "Foto door Richard E. Aaron / Redferns / Getty Images",
    "url": "https://dailybruin.com/2026/08/27/in-moments-remembering-queen-of-country-dolly-partons-career",
    "titleKey": "sources_image_4_title",
    "categoryKey": "sources_category_2",
    "creditKey": "sources_image_4_credit"
  },
  {
    "title": "Don Williams",
    "filename": "artist_don.jpg",
    "filepath": "../resources/images/artist_don.jpg",
    "category": "Artiesten",
    "sourceAuthor": "Getty Images",
    "secondaryCredit": "Foto door Michael Putland",
    "url": "https://www.gettyimages.nl/detail/nieuwsfoto%27s/don-williams-portrait-london-1989-nieuwsfotos/109364677?adppopup=true",
    "titleKey": "sources_image_5_title",
    "categoryKey": "sources_category_2",
    "creditKey": "sources_image_5_credit"
  },
  {
    "title": "Ella Langley",
    "filename": "artist_ella.jpg",
    "filepath": "../resources/images/artist_ella.jpg",
    "category": "Artiesten",
    "sourceAuthor": "Woman's World",
    "secondaryCredit": null,
    "url": "https://www.womansworld.com/entertainment/celebrities/ella-langley-before-fame-was-totally-different-how-she-found-her-look",
    "titleKey": "sources_image_6_title",
    "categoryKey": "sources_category_2"
  },
  {
    "title": "Kameron Marlowe",
    "filename": "artist_kameron.jpg",
    "filepath": "../resources/images/artist_kameron.jpg",
    "category": "Artiesten",
    "sourceAuthor": "Oluwaseyi Davies",
    "secondaryCredit": "Directe vermelding",
    "url": null,
    "titleKey": "sources_image_7_title",
    "categoryKey": "sources_category_2",
    "creditKey": "sources_image_7_credit"
  },
  {
    "title": "Warren Zeiders",
    "filename": "artist_warren.jpg",
    "filepath": "../resources/images/artist_warren.jpg",
    "category": "Artiesten",
    "sourceAuthor": "Wikipedia",
    "secondaryCredit": null,
    "url": "https://en.wikipedia.org/wiki/Warren_Zeiders",
    "titleKey": "sources_image_8_title",
    "categoryKey": "sources_category_2"
  },
  {
    "title": "Johnny Cash — American Recordings",
    "filename": "superstars_2.jpg",
    "filepath": "../resources/images/superstars_2.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Wikipedia — American Recordings",
    "secondaryCredit": null,
    "url": "https://en.wikipedia.org/wiki/American_Recordings_(album)",
    "titleKey": "sources_timeline_superstars_2_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "cover"
  },
  {
    "title": "Beyoncé — Cowboy Carter",
    "filename": "modern_3.png",
    "filepath": "../resources/images/modern_3.png",
    "category": "Tijdlijn",
    "sourceAuthor": "Wikipedia — Cowboy Carter",
    "secondaryCredit": null,
    "url": "https://en.wikipedia.org/wiki/Cowboy_Carter",
    "titleKey": "sources_timeline_modern_3_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "cover"
  },
  {
    "title": "De zingende cowboy — filmafbeelding",
    "filename": "radio_3.jpg",
    "filepath": "../resources/images/radio_3.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "IMDb",
    "secondaryCredit": null,
    "url": "https://www.imdb.com/title/tt0045305/",
    "titleKey": "sources_timeline_radio_3_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "The Carter Family",
    "filename": "radio_2.jpg",
    "filepath": "../resources/images/radio_2.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Country Music Hall of Fame and Museum",
    "secondaryCredit": null,
    "url": "https://www.countrymusichalloffame.org/hall-of-fame/carter-family",
    "titleKey": "sources_timeline_radio_2_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Grand Ole Opry",
    "filename": "radio_1.jpg",
    "filepath": "../resources/images/radio_1.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Grand Ole Opry",
    "secondaryCredit": null,
    "url": "https://www.opry.com/about/history",
    "titleKey": "sources_timeline_radio_1_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Urban Cowboy",
    "filename": "outlaw_3.jpg",
    "filepath": "../resources/images/outlaw_3.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "IMDb",
    "secondaryCredit": null,
    "url": "https://www.imdb.com/title/tt0081696/",
    "titleKey": "sources_timeline_outlaw_3_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Dolly Parton — Jolene",
    "filename": "outlaw_2.jpg",
    "filepath": "../resources/images/outlaw_2.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Oluwaseyi Davies",
    "secondaryCredit": null,
    "url": null,
    "titleKey": "sources_timeline_outlaw_2_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Waylon & Willie",
    "filename": "outlaw_1.jpg",
    "filepath": "../resources/images/outlaw_1.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Wikipedia — Waylon & Willie",
    "secondaryCredit": null,
    "url": "https://en.wikipedia.org/wiki/Waylon_%26_Willie",
    "titleKey": "sources_timeline_outlaw_1_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "cover"
  },
  {
    "title": "Snaargroepen op het platteland",
    "filename": "roots_3.png",
    "filepath": "../resources/images/roots_3.png",
    "category": "Tijdlijn",
    "sourceAuthor": "NCpedia",
    "secondaryCredit": null,
    "url": "https://www.ncpedia.org/country-music",
    "titleKey": "sources_timeline_roots_3_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Banjotradities",
    "filename": "roots_2.jpg",
    "filepath": "../resources/images/roots_2.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Wellcome Collection",
    "secondaryCredit": null,
    "url": "https://wellcomecollection.org/works/n3733yh6",
    "titleKey": "sources_timeline_roots_2_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  },
  {
    "title": "Afro-Amerikaanse muzikale wortels",
    "filename": "roots_1.jpg",
    "filepath": "../resources/images/roots_1.jpg",
    "category": "Tijdlijn",
    "sourceAuthor": "Wood & Steel — Taylor Guitars",
    "secondaryCredit": null,
    "url": "https://woodandsteel.taylorguitars.com/issue/2021-issue-2/feature-story/deep-roots-the-national-museum-of-african-american-music/",
    "titleKey": "sources_timeline_roots_1_title",
    "categoryKey": "sources_category_timeline",
    "mediaKind": "image"
  }
];





// ==================== MARK: ONDERZOEK EN LITERATUUR ====================

const researchSources = [
  {
    "title": "Geschiedenis van het Wilde Westen & Frontier Life",
    "category": "Geschiedenis",
    "author": "Plum Rose Publishing",
    "description": "Achtergrondinformatie over de geschiedenis van countrymuziek en de Amerikaanse cultuur.",
    "url": "https://plumrosepublishing.com/the-history-of-country-music/",
    "titleKey": "sources_research_0_title",
    "descriptionKey": "sources_research_0_description",
    "categoryKey": "sources_category_3"
  },
  {
    "title": "De Evolutie van Country Muziek & Subgenres",
    "category": "Muziek",
    "author": "Country Music Hall of Fame",
    "description": "Historische documentatie over de oorsprong van Honky Tonk, Outlaw Country en de moderne countrymuziekindustrie.",
    "url": "https://www.countrymusichalloffame.org/learn/country-music-history",
    "titleKey": "sources_research_1_title",
    "descriptionKey": "sources_research_1_description",
    "categoryKey": "sources_category_4"
  },
  {
    "title": "Roots & Branches of Country Music",
    "category": "Cultuur & Evenementen",
    "author": "PBS - Ken Burns",
    "description": "Gedocumenteerde geschiedenis van de roots, vertakkingen en culturele impact van countrymuziek.",
    "url": "https://www.pbs.org/kenburns/country-music/roots-branches-of-country-music",
    "titleKey": "sources_research_2_title",
    "descriptionKey": "sources_research_2_description",
    "categoryKey": "sources_category_5"
  },
  {
    "title": "History of Country Music in Oklahoma",
    "category": "Geschiedenis",
    "author": "Oklahoma Historical Society",
    "description": "Online encyclopedie en academische artikelen over de geschiedenis van countrymuziek.",
    "url": "https://www.okhistory.org/publications/enc/entry?entry=CO072",
    "titleKey": "sources_research_3_title",
    "descriptionKey": "sources_research_3_description",
    "categoryKey": "sources_category_3"
  },
  {
    "title": "The Roots of American Roots & Bluegrass Music",
    "category": "Muziek",
    "author": "Britannica",
    "description": "Onderzoek naar traditionele Amerikaanse volksmuziek, bluegrass en vroege verhalen verteld via liedjes.",
    "url": "https://www.britannica.com/art/bluegrass-music",
    "titleKey": "sources_research_4_title",
    "descriptionKey": "sources_research_4_description",
    "categoryKey": "sources_category_4"
  },
  {
    "title": "History of Country Music",
    "category": "Muziek",
    "author": "Grizzly Rose",
    "description": "Overzicht van de rijke geschiedenis van countrymuziek, artiesten en locaties.",
    "url": "https://grizzlyrose.com/history-of-country-music/",
    "titleKey": "sources_research_5_title",
    "descriptionKey": "sources_research_5_description",
    "categoryKey": "sources_category_4"
  },
  {
    "title": "Discover Country Music Themes",
    "category": "Muziek",
    "author": "Music Rising at Tulane",
    "description": "Thematisch onderzoek naar de muzikale tradities en ontwikkeling van countrymuziek.",
    "url": "https://musicrising.tulane.edu/discover/themes/country-music/",
    "titleKey": "sources_research_6_title",
    "descriptionKey": "sources_research_6_description",
    "categoryKey": "sources_category_4"
  },
  {
    "title": "A Brief History of Country Music",
    "category": "Geschiedenis",
    "author": "Medium (Midweek Crisis)",
    "description": "Een beknopt historisch overzicht van het ontstaan en de evolutie van het genre.",
    "url": "https://midweekcrisis.medium.com/a-brief-history-of-country-music-ca72e8fff803",
    "titleKey": "sources_research_7_title",
    "descriptionKey": "sources_research_7_description",
    "categoryKey": "sources_category_3"
  },
  {
    "title": "An American Tradition: History of Country Music Influences",
    "category": "Muziek",
    "author": "Musicnotes",
    "description": "Artikelen over de invloeden en muzikale tradities die country gevormd hebben.",
    "url": "https://www.musicnotes.com/blog/an-american-tradition-the-history-of-country-music-influences/?srsltid=AfmBOopG-MGnrjlAKgoXNbYHh73PstFLviQs8-YRZ_68QN1us4Aj6wYG",
    "titleKey": "sources_research_8_title",
    "descriptionKey": "sources_research_8_description",
    "categoryKey": "sources_category_4"
  },
  {
    "title": "Dolly Parton and the Roots of Country Music",
    "category": "Muziek & Geschiedenis",
    "author": "Library of Congress",
    "description": "Tijdlijn en historische artikelen over de wortels van countrymuziek en iconische artiesten.",
    "url": "https://www.loc.gov/collections/dolly-parton-and-the-roots-of-country-music/articles-and-essays/country-music-timeline/",
    "titleKey": "sources_research_9_title",
    "descriptionKey": "sources_research_9_description",
    "categoryKey": "sources_category_6"
  }
];





// ==================== MARK: VERTALINGEN ====================

/******************************/
/* MARK: YOUTUBE-VIDEOBRONNEN */
/****************************/

// Alleen bronlinks; deze pagina laadt geen YouTube-spelers of thumbnails.
// De artiest is afkomstig uit de tijdlijn, niet een veronderstelde uploader.
const videoSources = [
  {
    "title": "If Tomorrow Never Comes",
    "videoId": "M9r0XxLsgic",
    "performer": "Garth Brooks",
    "period": "1990–2009",
    "periodKey": "story_era_superstars_name",
    "url": "https://www.youtube.com/watch?v=M9r0XxLsgic"
  },
  {
    "title": "Before He Cheats",
    "videoId": "b3Kd15TVNCY",
    "performer": "Carrie Underwood",
    "period": "1990–2009",
    "periodKey": "story_era_superstars_name",
    "url": "https://www.youtube.com/watch?v=b3Kd15TVNCY"
  },
  {
    "title": "Jambalaya",
    "videoId": "Mc_2sOWVTxI",
    "performer": "Hank Williams",
    "period": "1950–1969",
    "periodKey": "story_era_nashville_name",
    "url": "https://www.youtube.com/watch?v=Mc_2sOWVTxI"
  },
  {
    "title": "Walkin’ After Midnight",
    "videoId": "lgGI-HOQZBk",
    "performer": "Patsy Cline",
    "period": "1950–1969",
    "periodKey": "story_era_nashville_name",
    "url": "https://www.youtube.com/watch?v=lgGI-HOQZBk"
  },
  {
    "title": "Harper Valley, P.T.A.",
    "videoId": "aOZPBUu7Fro",
    "performer": "Jeannie C. Riley",
    "period": "1950–1969",
    "periodKey": "story_era_nashville_name",
    "url": "https://www.youtube.com/watch?v=aOZPBUu7Fro"
  },
  {
    "title": "Cruise",
    "videoId": "8PvebsWcpto",
    "performer": "Florida Georgia Line",
    "period": "2010–heden",
    "periodKey": "story_era_modern_name",
    "url": "https://www.youtube.com/watch?v=8PvebsWcpto"
  },
  {
    "title": "Tennessee Whiskey",
    "videoId": "IBLruNfUqUs",
    "performer": "Chris Stapleton",
    "period": "2010–heden",
    "periodKey": "story_era_modern_name",
    "url": "https://www.youtube.com/watch?v=IBLruNfUqUs"
  }
];





function translated(key, fallback) {
  return window.siteI18n ? window.siteI18n.t(key, fallback) : fallback;
}

// Zo worden tekens zoals & en < als tekst getoond in de kaartjes.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

// De categorie blijft hetzelfde, ook als de taal verandert.
let currentCategory = "Alle";
let resultTimer;





// ==================== MARK: WISSELEN TUSSEN OVERZICHTEN ====================

let currentView = "visual";

function switchView(view, announce = true) {
  const views = [
    ['visual', 'visualView', 'tabVisualBtn'],
    ['research', 'researchView', 'tabResearchBtn'],
    ['video', 'videoView', 'tabVideoBtn'],
  ];
  if (!views.some(([name]) => name === view)) return;
  currentView = view;
  views.forEach(([name, sectionId, buttonId]) => {
    const active = name === view;
    const section = document.getElementById(sectionId);
    const button = document.getElementById(buttonId);
    if (!active && section.contains(document.activeElement)) document.getElementById(views.find(([name]) => name === view)[2]).focus();
    section.hidden = !active;
    section.classList.toggle('hidden', !active);
    button.classList.toggle('tab-btn-active', active);
    button.classList.toggle('tab-btn-inactive', !active);
    button.setAttribute('aria-pressed', String(active));
  });
  const heading = document.getElementById(views.find(([name]) => name === view)[1]).querySelector('h2');
  document.getElementById('sourcesReadLink').href = `#${heading.id}`;
  if (announce) document.getElementById('sourcesViewStatus').textContent = translated('a11y_sources_view', 'Getoond: {title}.').replace('{title}', heading.textContent);
  if (view !== 'visual') window.clearTimeout(resultTimer);
}





// ==================== MARK: FILTEREN EN ZOEKEN ====================

function updateCategoryCounts() {
  document.querySelectorAll('#filterContainer button[data-category]').forEach(button => {
    const category = button.dataset.category;
    const count = category === 'Alle' ? imageSources.length
      : imageSources.filter(item => item.category === category).length;
    const label = button.querySelector('.filter-count');
    if (label) label.textContent = String(count);
  });
}

function setCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle("filter-btn-active", isActive);
    btn.classList.toggle("filter-btn-inactive", !isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
  filterSources();
}

function filterSources() {
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const filtered = imageSources.filter(item => {
    const matchesCat = currentCategory === "Alle" || item.category === currentCategory;
    const matchesQuery = translated(item.titleKey, item.title).toLowerCase().includes(query) || item.title.toLowerCase().includes(query) || item.filename.toLowerCase().includes(query) || item.sourceAuthor.toLowerCase().includes(query) || (item.secondaryCredit || "").toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });
  renderSourcesGrid(filtered);

  // Even wachten voorkomt een melding bij elke losse toetsaanslag.
  window.clearTimeout(resultTimer);
  resultTimer = window.setTimeout(() => {
    const status = document.getElementById('sourcesResults');
    if (status && currentView === 'visual') {
      status.textContent = translated('sources_result_count', 'Aantal gevonden afbeeldingen: {count}.')
        .replace('{count}', String(filtered.length));
    }
  }, 300);
}





// ==================== MARK: AFBEELDINGEN TONEN ====================

function renderSourcesGrid(items) {
  const grid = document.getElementById("sourcesGrid");
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<div class="parchment-bg source-card sources-empty">${escapeHTML(translated("sources_empty", "Geen afbeeldingen gevonden."))}</div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="parchment-bg source-card" data-media-kind="${escapeHTML(item.mediaKind || 'image')}">
    <div>
      <div class="card-img-container">
      <img loading="lazy" decoding="async" src="${escapeHTML(item.filepath)}" alt="${escapeHTML(translated(item.titleKey, item.title))}">
      <span class="category-badge">${escapeHTML(translated(item.categoryKey, item.category))}</span>
      </div>
      <div class="card-body">
      <h3 class="card-title">${escapeHTML(translated(item.titleKey, item.title))}</h3>
      <p id="image-file-${imageSources.indexOf(item)}" class="card-filename"><span class="visually-hidden">${escapeHTML(translated('sources_filename_label', 'Bestandsnaam:'))} </span>${escapeHTML(item.filename)}</p>
      <div id="image-details-${imageSources.indexOf(item)}" class="card-details">
        <div><strong>${escapeHTML(translated("sources_source", "Bron:"))}</strong> ${escapeHTML(item.sourceAuthor)}</div>
        ${item.secondaryCredit ? `<div id="image-credit-${imageSources.indexOf(item)}" class="source-credit"><strong>${escapeHTML(translated("sources_photographer", "Fotograaf:"))}</strong> ${escapeHTML(translated(item.creditKey, item.secondaryCredit))}</div>` : ''}
      </div>
      </div>
    </div>
    <p id="image-context-${imageSources.indexOf(item)}" class="visually-hidden">
      ${escapeHTML(translated('sources_category_label', 'Categorie:'))} ${escapeHTML(translated(item.categoryKey, item.category))}.
      ${item.url ? escapeHTML(translated('sources_new_tab', 'Opent in een nieuw tabblad.')) : ''}
    </p>
    <div class="card-footer">
      ${item.url ? `
      <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" class="card-btn" aria-describedby="image-file-${imageSources.indexOf(item)} ${item.secondaryCredit ? `image-credit-${imageSources.indexOf(item)} ` : ''}image-context-${imageSources.indexOf(item)}">
        <span>${escapeHTML(translated("sources_original", "Bekijk Originele Bron"))}</span>
        <span class="visually-hidden"> — ${escapeHTML(translated(item.titleKey, item.title))} — ${escapeHTML(translated("sources_source", "Bron:"))} ${escapeHTML(item.sourceAuthor)}</span>
        <span aria-hidden="true">↗</span>
      </a>
      ` : `
      <span class="card-badge-direct">
        ${escapeHTML(translated("sources_direct", "Directe Vermelding"))}
      </span>
      `}
    </div>
    </div>
  `).join('');
}





// ==================== MARK: ONDERZOEK TONEN ====================

function renderResearchList(items) {
  const container = document.getElementById("researchList");
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="parchment-bg source-card">
    <div class="research-source-heading">
      <h3 class="card-title">${escapeHTML(translated(item.titleKey, item.title))}</h3>
      <span class="category-badge">${escapeHTML(translated(item.categoryKey, item.category))}</span>
    </div>
    <p id="research-description-${researchSources.indexOf(item)}" class="research-description">${escapeHTML(translated(item.descriptionKey, item.description))}</p>
    <div class="research-source-footer">
      <span id="research-author-${researchSources.indexOf(item)}"><strong>${escapeHTML(translated("sources_author", "Auteur/Instituut:"))}</strong> ${escapeHTML(item.author)}</span>
      <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" aria-describedby="research-description-${researchSources.indexOf(item)} research-author-${researchSources.indexOf(item)} research-context-${researchSources.indexOf(item)}">
        ${escapeHTML(translated("sources_visit", "Bezoek Bron"))}
        <span class="visually-hidden"> — ${escapeHTML(translated(item.titleKey, item.title))}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <span id="research-context-${researchSources.indexOf(item)}" class="visually-hidden">${escapeHTML(translated('sources_new_tab', 'Opent in een nieuw tabblad.'))}</span>
    </div>
    </div>
  `).join('');
}





// ==================== MARK: PAGINA STARTEN ====================

/******************************/
/* MARK: VIDEOBRONNEN TONEN */
/****************************/

function renderVideoList() {
  const container = document.getElementById('videoList');
  if (!container) return;
  container.innerHTML = videoSources.map((item, index) => {
    const period = translated(item.periodKey, item.period);
    const context = translated('sources_video_context', 'Gebruikt in Story · {period}').replace('{period}', period);
    return `
      <article class="parchment-bg source-card">
        <div class="research-source-heading">
          <h3>${escapeHTML(item.title)}</h3>
          <span class="category-badge">YouTube</span>
        </div>
        <p id="video-credit-${index}" class="research-description"><strong>${escapeHTML(translated('sources_video_performer', 'Artiest:'))}</strong> ${escapeHTML(item.performer)}</p>
        <div class="research-source-footer">
          <span>${escapeHTML(context)}</span>
          <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" aria-describedby="video-credit-${index} video-context-${index}">
            ${escapeHTML(translated('sources_video_open', 'Bekijk op YouTube'))}
            <span class="visually-hidden"> — ${escapeHTML(item.performer)} — ${escapeHTML(item.title)}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span id="video-context-${index}" class="visually-hidden">${escapeHTML(translated('sources_new_tab', 'Opent in een nieuw tabblad.'))}</span>
        </div>
      </article>`;
  }).join('');
}





document.addEventListener("DOMContentLoaded", () => {
  // De knoppen gebruiken de functies hierboven, zonder onclick in de HTML.
  document.querySelector("#tabVisualBtn").addEventListener("click", () => {
    document.querySelectorAll('.tab-btn, .filter-btn, #searchInput').forEach(control => { control.disabled = false; });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      target?.focus({ preventScroll: true });
    });
  });
  switchView("visual", false);
  });

  document.querySelector("#tabResearchBtn").addEventListener("click", () => {
    switchView("research");
  });

  document.querySelector('#tabVideoBtn').addEventListener('click', () => {
    switchView('video');
  });

  updateCategoryCounts();
  renderVideoList();
  document.querySelectorAll("#filterContainer button[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.category);
    });
  });

  document.querySelector("#searchInput").addEventListener("input", filterSources);

  document.querySelectorAll('.tab-btn, .filter-btn, #searchInput').forEach(control => { control.disabled = false; });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      target?.focus({ preventScroll: true });
    });
  });
  switchView("visual", false);
  setCategory(currentCategory);
  renderResearchList(researchSources);
});

// Bij een andere taal worden de kaartjes opnieuw ingevuld.
// Het zoekveld, de categorie en het gekozen overzicht blijven staan.
document.addEventListener("languagechange", () => {
  switchView(currentView, false);
  updateCategoryCounts();
  renderVideoList();
  filterSources();
  renderResearchList(researchSources);
});
