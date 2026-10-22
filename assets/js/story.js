'use strict';

(() => {
  // Pas herbruikbare instellingen hier aan, niet in de interactiefuncties.





  /**********************/
  /* MARK: INSTELLINGEN */
  /********************/

  const settings = {
    announcementDelay: 300,
    revealThreshold: 0.08,
    timelineImagePath: '../resources/images/',
  };





  /*****************/
  /* MARK: TEKSTEN */
  /***************/

  const labels = {
    artistResults: 'Artiesten gevonden: {count} van {total}.',
    chooseEra: 'Kies {name}: {subtitle}',
    eventHint: 'Ontdek dit moment in de countrygeschiedenis',
    archive: 'ARCHIEF · {year}',
    timelineVideoTitle: '{title} — YouTube-video',
    timelineImageUnavailable: 'De afbeelding is niet beschikbaar.',
  };

  // Stabiele IDs bepalen de selectie; de volgorde bepaalt de plaats op de gitaar.





  /************************/
  /* MARK: TIJDLIJNBRONNEN */
  /************************/

  // Bewaar bronadressen centraal. Een achtergrondbron onderbouwt de context,
  // maar is geen afzonderlijke publicatie over het getoonde nummer of album.
  const timelineSources = {
    tulane: {
      name: 'Tulane — Music Rising',
      url: 'https://musicrising.tulane.edu/discover/themes/country-music/',
    },
    libraryOfCongress: {
      name: 'Library of Congress — Timeline',
      url: 'https://www.loc.gov/collections/dolly-parton-and-the-roots-of-country-music/articles-and-essays/country-music-timeline/',
    },
    oklahoma: {
      name: 'Oklahoma Historical Society',
      url: 'https://www.okhistory.org/publications/enc/entry?entry=CO072',
    },
    musicnotes: {
      name: 'Musicnotes — Influences',
      url: 'https://www.musicnotes.com/blog/an-american-tradition-the-history-of-country-music-influences/',
    },
  };





  /************************************/
  /* MARK: PERIODEN EN GEBEURTENISSEN */
  /**********************************/

  const countryEras = [
    {
      id: 'roots',
      name: '19e eeuw',
      subtitle: 'Wortels',
      heading: 'FOLK EN DE MUZIKALE WORTELS',
      events: [
        {
          year: '19e eeuw',
          title: 'Traditionele volksmuziek',
          icon: '♫',
          media: { type: 'image', file: 'roots_1.jpg' },
          source: 'tulane',
          sourceLabel: 'Historische bron',
          description: 'De wortels van Country muziek liggen in verschillende muzikale tradities. Europese immigranten brachten volksliederen en ballades mee, terwijl Afro-Amerikaanse gemeenschappen blues, ritmes en zangtechnieken ontwiikkelden. Deze invloeden kwamen samen in het zuiden van de Verenigde Staten en vormden de basis voor Country muziek.',
        },
        {
          year: 'Jaren 1830',
          title: 'Banjotradities',
          icon: '♬',
          media: { type: 'image', file: 'roots_2.jpg' },
          source: 'tulane',
          sourceLabel: 'Historische achtergrond',
          description: 'De banjo vindt zijn oorsprong in snaarinstrumenten die door tot slaaf gemaakte Afrikanen naar Amerika werden gebracht. In de 19e eeuwe verspreidde het instrument zich via verschillende muziektradities. De herkenbare klank van de banjo werd later een belangrrijk onderdeel van traditionele Country muziek en bluegrass.',
        },
        {
          year: 'Eind 19e eeuw',
          title: 'Snaargroepen op het platteland',
          icon: '♪',
          media: { type: 'image', file: 'roots_3.png' },
          source: 'tulane',
          sourceLabel: 'Historische achtergrond',
          description: 'Op het Amerikaanse platteland speelden muzikanten samen op instrumenten zoals de viool, banjo en gitaar. Deze snaargroepen traden op tijdens feesten, dansavonden en bijeenkomsten. Hun muziek werd van generatie op generatie doorgegeven en groeide later uit tot een belangrijke basis voor de eerste Country opnames.',
        },
      ],
    },
    {
      id: 'outlaw',
      name: '1970–1989',
      subtitle: 'Outlaw en pop',
      heading: 'OUTLAW COUNTRY EN POP',
      events: [
        {
          year: '1973',
          title: 'Outlaw country',
          icon: '★',
          media: { type: 'image', file: 'outlaw_1.jpg' },
          source: 'libraryOfCongress',
          sourceLabel: 'Historische achtergrond',
          description: 'In de jaren 1970 ontstond outlaw country als reactie op het gepolijste geluid van Nashville. Artiesten zoals Willie Nelson en Waylon Jennings wilden meer creatieve vrijheid en controle over hun muziek. Met een rauwer geluid en persoonlijke teksten veranderden ze de richting van countrymuziek.',
        },
        {
          year: '1973',
          title: 'Jolene',
          icon: '♫',
          media: { type: 'image', file: 'outlaw_2.jpg' },
          source: 'libraryOfCongress',
          sourceLabel: 'Achtergrond: country in de jaren 1970',
          description: 'Dolly Parton bracht in 1973 het nummer "Jolene" uit, dat in 1974 uitgroeide tot een grote hit. Het lied vertelt het verhaal van een vrouw die een andere vrouw smeekt haar geliefde niet af te pakken. Door de herkenbare melodie, emotionele tekst en krachtige zang werd het een van de bekendste countrynummers ooit.',
        },
        {
          year: '1980',
          title: 'Urban Cowboy',
          icon: '▣',
          media: { type: 'image', file: 'outlaw_3.jpg' },
          source: 'oklahoma',
          sourceLabel: 'Achtergrond: country en westerncultuur',
          description: 'De film "Urban Cowboy", met John Travolta in de hoofdrol, bracht countrymuziek en de Texaanse honky-tonkcultuur onder de aandacht van een groot publiek. De soundtrack werd een succes en zorgde voor een nieuwe populariteit van countrymuziek, cowboylaarzen en linedancing.',
        },
      ],
    },
    {
      id: 'radio',
      name: '1920–1949',
      subtitle: 'Radio en pioniers',
      heading: 'RADIO EN PIONIERS',
      events: [
        {
          year: '1925',
          title: 'Uitzendingen van de Grand Ole Opry',
          icon: '♬',
          media: { type: 'image', file: 'radio_1.jpg' },
          source: 'oklahoma',
          sourceLabel: 'Achtergrond: country en radio',
          description: 'In 1925 begon in Nashville een radioprogramma dat later bekend werd als de "Grand Ole Opry". Het programma gaf traditionele muzikanten een podium en bracht countrymuziek bij luisteraars in heel Amerika. De Grand Ole Opry groeide uit tot een van de belangrijkste instellingen binnen de countrygeschiedenis.',
        },
        {
          year: '1927',
          title: 'De Bristol Sessions',
          icon: '◉',
          media: { type: 'image', file: 'radio_2.jpg' },
          source: 'libraryOfCongress',
          sourceLabel: 'Historische bron',
          description: 'Tijdens de Bristol Sessions in 1927 werden opnames gemaakt van onder anderen Jimmie Rodgers en The Carter Family. Deze artiesten hielpen het geluid van vroege countrymuziek vorm te geven. De opnames worden vaak beschouwd als een belangrijk keerpunt in de ontwikkeling van country als commercieel muziekgenre.',
        },
        {
          year: '1935',
          title: 'Het tijdperk van de zingende cowboy',
          icon: '★',
          media: { type: 'image', file: 'radio_3.jpg' },
          source: 'oklahoma',
          sourceLabel: 'Historische bron',
          description: 'In de jaren 1930 werd de zingende cowboy populair dankzij westernfilms en radio. Gene Autry groeide uit tot een van de bekendste vertegenwoordigers van deze stijl. Zijn muziek combineerde romantische verhalen over het Wilde Westen met toegankelijke countrymelodieën en maakte het genre aantrekkelijk voor een breder publiek.',
        },
      ],
    },
    {
      id: 'superstars',
      name: '1990–2009',
      subtitle: 'Supersterren',
      heading: 'SUPERSTERREN IN STADIONS',
      events: [
        {
          year: '1990',
          title: 'If Tomorrow Never Comes',
          icon: '♫',
          media: { type: 'youtube', videoId: 'M9r0XxLsgic' },
          source: 'oklahoma',
          sourceLabel: 'Achtergrond: Garth Brooks en de jaren 1990',
          description: 'Garth Brooks bracht in 1989 "If Tomorrow Never Comes" uit, een emotionele countryballad over liefde en de vraag of je genoeg laat merken hoeveel iemand voor je betekent. Het nummer werd zijn eerste nummer 1-hit in de Amerikaanse countryhitlijsten en hielp hem uit te groeien tot een van de grootste countrysterren van de jaren 1990.',
        },
        {
          year: '1994',
          title: 'American Recordings',
          icon: '◉',
          media: { type: 'image', file: 'superstars_2.jpg' },
          source: 'tulane',
          sourceLabel: 'Achtergrond: Johnny Cash en country',
          description: 'Johnny Cash werkte in 1994 samen met producer Rick Rubin aan het album "American Recordings". Met sobere arrangementen en zijn karakteristieke stem keerde Cash terug naar de kern van zijn muziek. Het album kreeg veel waardering en zorgde ervoor dat een nieuwe generatie luisteraars zijn werk ontdekte.',
        },
        {
          year: '2005',
          title: 'Before He Cheats',
          icon: '★',
          media: { type: 'youtube', videoId: 'b3Kd15TVNCY' },
          source: 'musicnotes',
          sourceLabel: 'Achtergrond: country en popinvloeden',
          description: 'Carrie Underwood bracht "Before He Cheats" in 2006 uit als single van haar debuutalbum "Some Hearts" uit 2005. Het nummer vertelt het verhaal van een vrouw die wraak neemt op haar ontrouwe partner. De combinatie van country, pop en rock werd een enorm succes en leverde Underwood twee Grammy Awards op.',
        },
      ],
    },
    {
      id: 'nashville',
      name: '1950–1969',
      subtitle: 'Nashville-sound',
      heading: 'DE NASHVILLE-SOUND',
      events: [
        {
          year: '1952',
          title: 'Jambalaya',
          icon: '♫',
          media: { type: 'youtube', videoId: 'Mc_2sOWVTxI' },
          source: 'tulane',
          sourceLabel: 'Historische bron',
          description: 'Hank Williams bracht in 1952 "Jambalaya (On the Bayou)" uit, een vrolijk countrynummer met invloeden uit de Cajunmuziek van Louisiana. Het lied beschrijft een feestelijke bijeenkomst vol eten, dans en muziek. Door de aanstekelijke melodie groeide het uit tot een countryklassieker die door veel artiesten opnieuw werd opgenomen.',
        },
        {
          year: '1957',
          title: 'Walkin’ After Midnight',
          icon: '◉',
          media: { type: 'youtube', videoId: 'lgGI-HOQZBk' },
          source: 'oklahoma',
          sourceLabel: 'Achtergrond: de Nashville Sound',
          description: 'Patsy Cline brak in 1957 door met "Walkin’ After Midnight". Het nummer vertelt over een vrouw die tijdens nachtelijke wandelingen verlangt naar een verloren liefde. Dankzij haar krachtige stem en de combinatie van country en pop werd het een grote hit en hielp het Cline uit te groeien tot een van de invloedrijkste countryzangeressen.',
        },
        {
          year: '1968',
          title: 'Harper Valley, P.T.A.',
          icon: '♪',
          media: { type: 'youtube', videoId: 'aOZPBUu7Fro' },
          source: 'oklahoma',
          sourceLabel: 'Achtergrond: country in de jaren 1960',
          description: 'Jeannie C. Riley bracht in 1968 "Harper Valley P.T.A." uit, geschreven door Tom T. Hall. Het lied vertelt over een alleenstaande moeder die de hypocrisie van de plaatselijke oudervereniging aan de kaak stelt. Het nummer bereikte de eerste plaats in zowel de Amerikaanse country- als pophitlijsten en werd een van de grootste countryhits van dat jaar.',
        },
      ],
    },
    {
      id: 'modern',
      name: '2010–heden',
      subtitle: 'Moderne country',
      heading: 'MODERNE COUNTRYMUZIEK',
      events: [
        {
          year: '2012',
          title: 'Cruise',
          icon: '♫',
          media: { type: 'youtube', videoId: '8PvebsWcpto' },
          source: 'musicnotes',
          sourceLabel: 'Achtergrond: moderne country en pop',
          description: 'Florida Georgia Line bracht in 2012 "Cruise" uit, een nummer dat country combineert met invloeden uit pop en rock. Het lied werd een van de bekendste voorbeelden van bro-country, een moderne stijl met thema’s zoals autorijden, feesten en het buitenleven. Het enorme succes liet zien hoe countrymuziek steeds meer aansluiting vond bij een jong publiek.',
        },
        {
          year: '2015',
          title: 'Tennessee Whiskey',
          icon: '◉',
          media: { type: 'youtube', videoId: 'IBLruNfUqUs' },
          source: 'tulane',
          sourceLabel: 'Achtergrond: country, blues en soul',
          description: 'Chris Stapleton bracht in 2015 zijn versie van "Tennessee Whiskey" uit op het album "Traveller". Hij combineerde traditionele country met invloeden uit soul en blues. Zijn krachtige, warme stem gaf het nummer een nieuwe uitstraling en maakte het tot een moderne countryklassieker.',
        },
        {
          year: '2024',
          title: 'Cowboy Carter',
          icon: '★',
          media: { type: 'image', file: 'modern_3.png' },
          source: 'tulane',
          sourceLabel: 'Achtergrond: Afro-Amerikaanse invloeden',
          description: 'Beyoncé bracht in 2024 het album "Cowboy Carter" uit, waarin ze countrymuziek combineert met onder andere folk, blues, gospel en pop. Het album onderzoekt de invloed van zwarte muzikanten op de geschiedenis van countrymuziek en laat zien hoe het genre zich blijft ontwikkelen en muzikale grenzen kan doorbreken.',
        },
      ],
    },
  ];

  // Namen en afbeeldingen komen uit de HTML-kaarten: geen dubbele paden.





  /*****************************/
  /* MARK: ARTIESTENINFORMATIE */
  /***************************/

  const artistInfo = {
    dolly: {
      text: 'Dolly Parton is een invloedrijke singer-songwriter binnen de countrymuziek. Ze staat bekend om haar verhalen, herkenbare stem en nummers als Jolene en Coat of Many Colors.',
      tags: ['Traditional country', 'Countrypop', 'Songwriter'],
    },
    don: {
      text: 'Don Williams kreeg de bijnaam The Gentle Giant. Zijn warme stem en rustige, verhalende nummers maakten hem een geliefde countryartiest.',
      tags: ['Traditional country', 'Country ballads'],
    },
    ella: {
      text: 'Ella Langley vertegenwoordigt een nieuwe generatie countryartiesten. Haar muziek combineert moderne country met een rauwe, persoonlijke vertelstijl.',
      tags: ['Modern country', 'Countryrock'],
    },
    kameron: {
      text: 'Kameron Marlowe is een hedendaagse countryzanger met een krachtige stem en invloeden uit countryrock en soul.',
      tags: ['Modern country', 'Countryrock'],
    },
    warren: {
      text: 'Warren Zeiders combineert moderne country met een ruiger rockgeluid en emotionele teksten.',
      tags: ['Modern country', 'Countryrock'],
    },
  };

  // Kleine gedeelde hulpmiddelen.





  /**********************/
  /* MARK: HULPFUNCTIES */
  /********************/

  function format(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
  }

  function translate(key, fallback, values = {}) {
    return format(window.siteI18n?.t(key, fallback) ?? fallback, values);
  }

  function translatedEra(era) {
    return Object.fromEntries(Object.entries(era).map(([key, value]) => [key,
      ['name', 'subtitle', 'heading'].includes(key)
        ? translate(`story_era_${era.id}_${key}`, value) : value]));
  }

  function translatedEvent(era, index) {
    const event = era.events[index];
    return Object.fromEntries(Object.entries(event).map(([key, value]) => [key,
      ['year', 'title', 'description', 'sourceLabel'].includes(key)
        ? translate(`story_event_${era.id}_${index + 1}_${key === 'sourceLabel' ? 'source_label' : key}`, value)
        : value]));
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createButton(className, text) {
    const button = createElement('button', className, text);
    button.type = 'button';
    return button;
  }

  function setPressed(button, pressed) {
    button.classList.toggle('active', pressed);
    button.setAttribute('aria-pressed', String(pressed));
  }

  // Inhoud blijft standaard zichtbaar, ook zonder JavaScript.





  /*************************/
  /* MARK: SCROLLANIMATIES */
  /***********************/

  function initReveals(page) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || reducedMotion.matches) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: settings.revealThreshold });

    page.querySelectorAll('.reveal').forEach(element => {
      // Alleen elementen buiten het scherm krijgen een introductieanimatie.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-pending');
      observer.observe(element);
    });
  }





  /**************************************/
  /* MARK: ARTIESTEN ZOEKEN EN SORTEREN */
  /************************************/

  function initArtistSearch(page) {
    const controls = page.querySelector('.garden-controls');
    const search = page.querySelector('#gardenSearch');
    const sort = page.querySelector('#gardenSort');
    const list = page.querySelector('#gardenArtistList');
    const status = page.querySelector('#gardenResults');
    const empty = page.querySelector('#gardenEmpty');
    if (!controls || !search || !sort || !list || !status || !empty) return;

    const artists = Array.from(list.querySelectorAll('[data-artist]'));
    const getName = card => card.querySelector('.record-title')?.textContent.trim() ?? '';
    let announcementTimer;

    function updateArtists(announce = true) {
      const locale = document.documentElement.lang || undefined;
      const query = search.value.trim().toLocaleLowerCase(locale);
      const direction = sort.value === 'desc' ? -1 : 1;
      const collator = new Intl.Collator(locale, { sensitivity: 'base' });
      let count = 0;

      artists.sort((a, b) => direction * collator.compare(getName(a), getName(b)));
      artists.forEach(artist => {
        const matches = getName(artist).toLocaleLowerCase(locale).includes(query);
        artist.hidden = !matches;
        if (matches) count += 1;
        list.append(artist);
      });

      empty.hidden = count !== 0;
      window.clearTimeout(announcementTimer);

      function report() {
        const translated = window.siteI18n?.t('garden_result_count', labels.artistResults)
          ?? labels.artistResults;
        // Ondersteun ook het bestaande vertaalbestand met een vast totaal.
        const template = translated.includes('{total}')
          ? translated
          : translated.replace(/\b\d+(?=[^\d]*$)/u, '{total}');
        status.textContent = format(template, { count, total: artists.length });
      }

      if (announce) announcementTimer = window.setTimeout(report, settings.announcementDelay);
      else report();
    }

    controls.hidden = false;
    search.addEventListener('input', () => updateArtists());
    sort.addEventListener('change', () => updateArtists());
    document.addEventListener('languagechange', () => updateArtists(false));
    updateArtists(false);
  }





  /**************************/
  /* MARK: ARTIESTENDIALOOG */
  /************************/

  function initArtistDialog(page) {
    const dialog = page.querySelector('#artistDialog');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    const title = dialog.querySelector('#artistDialogTitle');
    const text = dialog.querySelector('#artistDialogText');
    const imageContainer = dialog.querySelector('#artistDialogImageContainer')
      ?? dialog.querySelector('.dialog-image');
    const tags = dialog.querySelector('#artistDialogTags');
    const close = dialog.querySelector('#artistDialogClose');
    if (!title || !text || !imageContainer || !tags || !close) return;

    page.addEventListener('click', event => {
      const button = event.target.closest('[data-artist-open]');
      if (!button) return;

      const card = button.closest('[data-artist]');
      const info = artistInfo[card?.dataset.artist];
      const cardImage = card?.querySelector('img');
      const name = card?.querySelector('.record-title')?.textContent.trim();
      if (!info || !cardImage || !name) return;

      title.textContent = name;
      dialog.dataset.artist = card.dataset.artist;
      updateArtistText();
      const image = cardImage.cloneNode(false);
      image.alt = name;
      image.loading = 'eager';
      imageContainer.replaceChildren(image);

      if (!dialog.open) dialog.showModal();
    });

    function updateArtistText() {
      const id = dialog.dataset.artist;
      const info = artistInfo[id];
      if (!info) return;
      text.textContent = translate(`story_artist_${id}_text`, info.text);
      tags.replaceChildren(...info.tags.map((tag, index) =>
        createElement('span', '', translate(`story_artist_${id}_tag_${index + 1}`, tag))));
    }

    document.addEventListener('languagechange', updateArtistText);
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) dialog.close();
    });
  }

  // Beide onderzoeksdelen gebruiken dezelfde logica en lezen hun eigen HTML.





  /*************************************/
  /* MARK: MUZIKALE WORTELS EN STIJLEN */
  /***********************************/

  function initExplorer(explorer) {
    const controls = explorer.querySelector('[data-explorer-controls]');
    const panelGroup = explorer.querySelector('[data-explorer-panels]');
    const panels = Array.from(explorer.querySelectorAll('[data-explorer-panel]'));
    if (!controls || !panelGroup || !panels.length) return;

    const cardControls = explorer.hasAttribute('data-card-controls');
    const buttons = panels.map((panel, index) => {
      const number = String(index + 1).padStart(2, '0');
      const heading = panel.querySelector('h3');
      const label = panel.dataset.label || heading.textContent;
      const button = createButton(cardControls ? 'style-card' : 'research-tab');
      button.setAttribute('aria-controls', panel.id);

      if (cardControls) {
        button.append(
          createElement('span', '', number),
          createElement('strong', '', label),
          createElement('small', '', panel.dataset.summary),
        );
      } else {
        button.textContent = `${panel.dataset.icon || ''} ${label}`.trim();
      }

      const stamp = panel.querySelector('[data-explorer-stamp]');
      if (stamp) stamp.textContent = `${explorer.dataset.stamp} / ${number}`;
      button.addEventListener('click', () => selectPanel(index));
      return button;
    });

    function selectPanel(selectedIndex) {
      panels.forEach((panel, index) => {
        const active = index === selectedIndex;
        panel.hidden = !active;
        setPressed(buttons[index], active);
      });
    }

    controls.replaceChildren(...buttons);
    selectPanel(0);
    panelGroup.setAttribute('aria-live', 'polite');
    panelGroup.setAttribute('aria-atomic', 'true');
    controls.hidden = false;
  }





  /************************/





  /********************************/
  /* MARK: MEDIA IN DE TIJDLIJN */
  /******************************/

  function renderTimelineMedia(frame, videoLink, event) {
    const media = event.media;
    const isVideo = media.type === 'youtube';
    frame.classList.toggle('is-video', isVideo);
    videoLink.hidden = !isVideo;

    if (isVideo) {
      const player = createElement('iframe', 'history-video');
      // Geen autoplay; de vorige speler verdwijnt bij een andere gebeurtenis.
      player.src = `https://www.youtube-nocookie.com/embed/${media.videoId}?rel=0`;
      player.title = translate('story_video_title', labels.timelineVideoTitle, event);
      player.loading = 'lazy';
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      player.allow = 'encrypted-media; picture-in-picture; fullscreen';
      player.setAttribute('allowfullscreen', '');
      frame.replaceChildren(player);
      videoLink.href = `https://www.youtube.com/watch?v=${media.videoId}`;
      return;
    }

    videoLink.removeAttribute('href');
    const image = createElement('img', 'history-image');
    image.src = `${settings.timelineImagePath}${media.file}`;
    image.alt = event.title;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      // Een ontbrekend bestand mag de kaart of de gitaarbediening niet breken.
      if (frame.contains(image)) {
        frame.replaceChildren(createElement('p', 'history-media-message', translate('story_image_unavailable', labels.timelineImageUnavailable)));
      }
    }, { once: true });
    frame.replaceChildren(image);
  }





  /* MARK: GITAARTIJDLIJN */
  /**********************/

  function initTimeline(page) {
    const section = page.querySelector('.country-history');
    if (!section) return;
    const find = selector => section.querySelector(selector);
    const keys = find('#tuning-keys');
    const posts = find('#machine-posts');
    const markers = find('#event-markers');
    const shortcuts = find('#event-shortcuts');
    const card = find('#history-card');
    const fields = {
      era: find('#card-era'),
      heading: find('#card-heading'),
      mediaFrame: find('#historyMediaFrame'),
      mediaLink: find('#historyMediaLink'),
      archive: find('#archive-year'),
      year: find('#card-year'),
      title: find('#card-title'),
      description: find('#card-description'),
      source: find('.history-source'),
    };
    const eras = countryEras.filter(era => era.events.length);
    if (!keys || !posts || !markers || !shortcuts || !card || !eras.length
      || Object.values(fields).some(field => !field)) return;

    let selectedEra = eras.find(era => era.id === section.dataset.initialEra) ?? eras[0];
    let selectedEvent = 0;
    let eventButtons = [];
    let shortcutButtons = [];
    posts.replaceChildren();

    const tunerButtons = eras.map((era, index) => {
      const displayEra = translatedEra(era);
      const left = index % 2 === 0;
      const button = createButton(`tuner ${left ? 'left' : 'right'}`);
      button.setAttribute('aria-label', translate('story_choose_era', labels.chooseEra, displayEra));
      button.setAttribute('aria-controls', card.id);

      const label = createElement('span', 'key-label');
      label.append(createElement('strong', '', displayEra.name), createElement('small', '', displayEra.subtitle));
      const shaft = createElement('span', 'key-shaft');
      const wing = createElement('span', 'key-wing');
      shaft.setAttribute('aria-hidden', 'true');
      wing.setAttribute('aria-hidden', 'true');
      button.append(label, shaft, wing);

      const post = createElement('span', `machine-post ${left ? 'left' : 'right'}`);
      posts.append(post);

      button.addEventListener('click', () => {
        if (selectedEra.id === era.id) return;
        selectedEra = era;
        selectedEvent = 0;
        updateTuners();
        buildEvents();
        updateEvent();
      });
      return button;
    });

    keys.replaceChildren(...tunerButtons);

    function updateTuners() {
      tunerButtons.forEach((button, index) => {
        const active = eras[index].id === selectedEra.id;
        setPressed(button, active);
      });
    }

    function buildEvents() {
      const markerNodes = [];
      shortcutButtons = [];
      eventButtons = selectedEra.events.map((originalEvent, index) => {
        const event = translatedEvent(selectedEra, index);
        // CSS Grid verdeelt de gebeurtenisgroepen over de beschikbare hals.
        const marker = createButton('event-marker', event.icon);
        marker.setAttribute('aria-label', `${event.year}: ${event.title}`);
        marker.setAttribute('aria-controls', card.id);
        marker.addEventListener('click', () => selectEvent(index));

        const label = createElement('div', 'marker-label');
        label.setAttribute('aria-hidden', 'true');
        label.append(createElement('strong', '', event.year), document.createTextNode(event.title));
        const eventGroup = createElement('div', 'timeline-event');
        eventGroup.append(marker, label);
        markerNodes.push(eventGroup);

        const shortcut = createButton('');
        shortcut.setAttribute('aria-controls', card.id);
        shortcut.append(
          createElement('strong', '', `${event.year} · ${event.title}`),
          createElement('small', '', translate('story_event_hint', labels.eventHint)),
        );
        shortcut.addEventListener('click', () => selectEvent(index));
        shortcutButtons.push(shortcut);
        return marker;
      });
      markers.replaceChildren(...markerNodes);
      shortcuts.replaceChildren(...shortcutButtons);
    }

    function selectEvent(index) {
      if (selectedEvent === index) return;
      selectedEvent = index;
      updateEvent();
    }

    function updateEvent(refreshMedia = true) {
      eventButtons.forEach((button, index) => setPressed(button, index === selectedEvent));
      shortcutButtons.forEach((button, index) => setPressed(button, index === selectedEvent));
      const current = translatedEvent(selectedEra, selectedEvent);
      const displayEra = translatedEra(selectedEra);
      fields.era.textContent = displayEra.name;
      fields.heading.textContent = displayEra.heading;
      if (refreshMedia) renderTimelineMedia(fields.mediaFrame, fields.mediaLink, current);
      else {
        // Een taalwissel onderbreekt een spelende video niet.
        const player = fields.mediaFrame.querySelector('iframe');
        const image = fields.mediaFrame.querySelector('img');
        const message = fields.mediaFrame.querySelector('.history-media-message');
        if (player) player.title = translate('story_video_title', labels.timelineVideoTitle, current);
        if (image) image.alt = current.title;
        if (message) message.textContent = translate('story_image_unavailable', labels.timelineImageUnavailable);
      }
      fields.mediaLink.textContent = translate('story_watch_youtube', 'Bekijk op YouTube ↗');
      fields.archive.textContent = translate('story_archive', labels.archive, current);
      fields.year.textContent = current.year;
      fields.title.textContent = current.title;
      fields.description.textContent = current.description;

      // De bron volgt de geselecteerde gebeurtenis, ook binnen dezelfde periode.
      const source = timelineSources[current.source];
      fields.source.href = source.url;
      fields.source.textContent = `${current.sourceLabel}: ${source.name} ↗`;

      // Geen geforceerde layoutmeting nodig om de animatie opnieuw te starten.
      if (typeof card.getAnimations === 'function') {
        card.getAnimations().forEach(animation => animation.cancel());
      }
      card.classList.remove('paper-swap');
      window.requestAnimationFrame(() => card.classList.add('paper-swap'));
    }

    document.addEventListener('languagechange', () => {
      tunerButtons.forEach((button, index) => {
        const era = translatedEra(eras[index]);
        button.setAttribute('aria-label', translate('story_choose_era', labels.chooseEra, era));
        button.querySelector('strong').textContent = era.name;
        button.querySelector('small').textContent = era.subtitle;
      });
      buildEvents();
      updateEvent(false);
    });

    updateTuners();
    buildEvents();
    updateEvent();
  }





  /********************************/
  /* MARK: PAGINANAVIGATIE */
  /******************************/

  function initPageNavigation(page) {
    const ticket = page.querySelector('#concertTicketNav');
    const paper = page.querySelector('#ticketPaper');
    const toggle = page.querySelector('#ticketToggle');
    const backToTop = page.querySelector('#mobileBackToTop');
    const trigger = page.querySelector('.garden-crossroads')
      ?? page.querySelector('.garden-hero');
    if (!ticket || !paper || !toggle || !backToTop) return;

    // Houd deze grens gelijk aan de min-width-query van de ticketnavigatie.
    const desktop = window.matchMedia('(min-width: 48.001rem)');
    let framePending = false;

    // Gebruik de bestaande menulinks als bron: geen tweede lijst met secties.
    const destinations = Array.from(ticket.querySelectorAll('.ticket-destinations a'))
      .map(link => ({ link, section: document.getElementById(link.hash.slice(1)) }))
      .filter(destination => destination.section);
    const destinationCards = Array.from(page.querySelectorAll('.garden-index a'));

    function updateCurrentSection() {
      if (!destinations.length) return;
      // Een sectie wordt actief wanneer de titel het bovenste schermdeel bereikt.
      const readingLine = window.innerHeight * 0.3;
      let current = destinations[0];
      destinations.forEach(destination => {
        if (destination.section.getBoundingClientRect().top <= readingLine) {
          current = destination;
        }
      });

      // Ook een korte laatste sectie moet onderaan de pagina actief worden.
      const pageHeight = document.documentElement.scrollHeight;
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= pageHeight - 1) {
        current = destinations[destinations.length - 1];
      }

      [...destinations.map(destination => destination.link), ...destinationCards]
        .forEach(link => {
          if (link.hash === current.link.hash) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
    }

    function setTicketOpen(open, restoreFocus = false) {
      const expanded = open && desktop.matches && ticket.classList.contains('is-visible');
      ticket.classList.toggle('is-open', expanded);
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-label', expanded
        ? translate('story_ticket_close', 'Sluit paginanavigatie')
        : translate('story_ticket_open', 'Open paginanavigatie'));
      // Inert voorkomt tabben naar links op het ingeschoven papier.
      paper.inert = !expanded;
      paper.setAttribute('aria-hidden', String(!expanded));
      if (restoreFocus) toggle.focus({ preventScroll: true });
    }

    function updateNavigation() {
      framePending = false;
      updateCurrentSection();
      const passedTrigger = trigger
        ? trigger.getBoundingClientRect().bottom < 0
        : window.scrollY > window.innerHeight;
      ticket.classList.toggle('is-visible', passedTrigger && desktop.matches);
      backToTop.classList.toggle('is-visible', passedTrigger && !desktop.matches);
      if (!passedTrigger || !desktop.matches) setTicketOpen(false);
    }

    function scheduleUpdate() {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(updateNavigation);
    }

    toggle.addEventListener('click', () => {
      setTicketOpen(!ticket.classList.contains('is-open'));
    });

    ticket.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        setTicketOpen(false);
        // Verplaats ook de toetsenbordfocus naar de gekozen inhoud.
        const destination = document.getElementById(link.hash.slice(1));
        if (!destination) return;
        if (!destination.hasAttribute('tabindex')) destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      });
    });

    document.addEventListener('click', event => {
      if (!ticket.contains(event.target)) setTicketOpen(false);
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !ticket.classList.contains('is-open')) return;
      event.preventDefault();
      setTicketOpen(false, true);
    });

    document.addEventListener('languagechange', () => {
      setTicketOpen(ticket.classList.contains('is-open'));
    });
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    desktop.addEventListener('change', () => {
      setTicketOpen(false);
      scheduleUpdate();
    });

    // Zonder JavaScript blijven de gewone inhoudslinks op de pagina beschikbaar.
    ticket.hidden = false;
    backToTop.hidden = false;
    setTicketOpen(false);
    updateNavigation();
  }





  /******************************/
  /* MARK: INTERACTIEVE VIOOL */
  /******************************/

  function initViolin(page) {
    const explorer = page.querySelector('[data-violin]');
    if (!explorer) return;
    const buttons = Array.from(explorer.querySelectorAll('[data-violin-topic]'));
    const stories = Array.from(explorer.querySelectorAll('[data-violin-story]'));
    const parts = Array.from(explorer.querySelectorAll('[data-violin-part]'));
    if (!buttons.length || !stories.length) return;

    function selectTopic(topic) {
      buttons.forEach(button => {
        setPressed(button, button.dataset.violinTopic === topic);
      });
      stories.forEach(story => {
        story.hidden = story.dataset.violinStory !== topic;
      });
      parts.forEach(part => {
        part.classList.toggle('is-selected', part.dataset.violinPart === topic);
      });
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => selectTopic(button.dataset.violinTopic));
    });

    // Behoud de focus op de gekozen knop; kondig alleen de nieuwe inhoud aan.
    const storyGroup = explorer.querySelector('.violin-stories');
    storyGroup.setAttribute('aria-live', 'polite');
    storyGroup.setAttribute('aria-atomic', 'true');
    selectTopic(buttons[0].dataset.violinTopic);
  }





  /************************/
  /* MARK: PAGINA STARTEN */
  /**********************/

  function initPage() {
    const page = document.querySelector('.story-page');
    if (!page) return;
    initPageNavigation(page);
    initArtistSearch(page);
    initArtistDialog(page);
    initTimeline(page);
    initViolin(page);
    page.querySelectorAll('[data-explorer]').forEach(initExplorer);
    initReveals(page);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage, { once: true });
  } else {
    initPage();
  }
})();
