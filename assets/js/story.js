'use strict';

(() => {
  // Pas herbruikbare instellingen hier aan, niet in de interactiefuncties.





  /**********************/
  /* MARK: INSTELLINGEN */
  /********************/

  const settings = {
    announcementDelay: 300,
    revealThreshold: 0.08,
  };





  /*****************/
  /* MARK: TEKSTEN */
  /***************/

  const labels = {
    artistResults: 'Artiesten gevonden: {count} van {total}.',
    chooseEra: 'Kies {name}: {subtitle}',
    eventHint: 'Ontdek dit moment in de countrygeschiedenis',
    archive: 'ARCHIEF · {year}',
  };

  // Stabiele IDs bepalen de selectie; de volgorde bepaalt de plaats op de gitaar.





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
          description: 'Europese ballades, Afro-Amerikaanse muziektradities en regionale vioolmuziek hielpen de basis van countrymuziek te vormen.',
        },
        {
          year: 'Jaren 1830',
          title: 'Banjotradities',
          icon: '♬',
          description: 'De banjo, met wortels in Afrikaanse instrumenten, kreeg een steeds prominentere plaats in de Amerikaanse populaire muziek.',
        },
        {
          year: 'Eind 19e eeuw',
          title: 'Snaargroepen op het platteland',
          icon: '♪',
          description: 'Regionale tradities van snaargroepen, vioolmuziek en volksmuziek bloeiden in het zuiden van de Verenigde Staten.',
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
          description: 'Willie Nelson en Waylon Jennings hielpen countrymuziek te vernieuwen met een onafhankelijkere aanpak.',
        },
        {
          year: '1974',
          title: 'Jolene',
          icon: '♫',
          description: 'Dolly Parton bracht een van haar meest geliefde en blijvende nummers uit.',
        },
        {
          year: '1980',
          title: 'Urban Cowboy',
          icon: '▣',
          description: 'De film Urban Cowboy hielp countrymuziek en de westerncultuur onder de aandacht van een breed publiek te brengen.',
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
          description: 'Het radioprogramma dat later de Grand Ole Opry werd, begon in Nashville en bracht regionale muziek naar een groeiend publiek.',
        },
        {
          year: '1927',
          title: 'De Bristol Sessions',
          icon: '◉',
          description: 'The Carter Family en Jimmie Rodgers maakten belangrijke opnamen die de commerciële countrymuziek hielpen vormgeven.',
        },
        {
          year: '1935',
          title: 'Het tijdperk van de zingende cowboy',
          icon: '★',
          description: 'Gene Autry hielp de zingende cowboy populair te maken via films en muziekopnamen.',
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
          title: 'Friends in Low Places',
          icon: '♫',
          description: 'Garth Brooks hielp countrymuziek naar een enorm publiek in grote concertarena’s te brengen.',
        },
        {
          year: '1997',
          title: 'Come On Over',
          icon: '◉',
          description: 'Shania Twain bracht een bijzonder succesvol album uit dat country en pop samenbracht.',
        },
        {
          year: '2006',
          title: 'Het debuut van Taylor Swift',
          icon: '★',
          description: 'Taylor Swift bracht haar eerste countryalbum uit, dat haar eigen naam droeg.',
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
          description: 'Hank Williams bracht Jambalaya (On the Bayou) uit, een blijvende countryklassieker.',
        },
        {
          year: '1957',
          title: 'Walkin’ After Midnight',
          icon: '◉',
          description: 'Patsy Cline bereikte met Walkin’ After Midnight ook een publiek buiten de countrymuziek.',
        },
        {
          year: '1961',
          title: 'Crazy',
          icon: '♪',
          description: 'Patsy Cline nam Crazy van Willie Nelson op. Het nummer groeide uit tot een countryklassieker.',
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
          year: '2013',
          title: 'Cruise',
          icon: '♫',
          description: 'Florida Georgia Line hielp de bro-country-stijl populair te maken.',
        },
        {
          year: '2018',
          title: 'Golden Hour',
          icon: '◉',
          description: 'Kacey Musgraves bracht Golden Hour uit, een album dat verschillende muziekgenres combineert.',
        },
        {
          year: '2024',
          title: 'Cowboy Carter',
          icon: '★',
          description: 'Beyoncé verkende op Cowboy Carter het erfgoed van countrymuziek en de grenzen tussen muziekgenres.',
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
      text.textContent = info.text;
      const image = cardImage.cloneNode(false);
      image.alt = name;
      image.loading = 'eager';
      imageContainer.replaceChildren(image);
      tags.replaceChildren(...info.tags.map(tag => createElement('span', '', tag)));
      if (!dialog.open) dialog.showModal();
    });

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
      symbol: find('#archive-symbol'),
      archive: find('#archive-year'),
      year: find('#card-year'),
      title: find('#card-title'),
      description: find('#card-description'),
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
      const left = index % 2 === 0;
      const button = createButton(`tuner ${left ? 'left' : 'right'}`);
      button.setAttribute('aria-label', format(labels.chooseEra, era));
      button.setAttribute('aria-controls', card.id);

      const label = createElement('span', 'key-label');
      label.append(createElement('strong', '', era.name), createElement('small', '', era.subtitle));
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
      eventButtons = selectedEra.events.map((event, index) => {
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
          createElement('small', '', labels.eventHint),
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

    function updateEvent() {
      eventButtons.forEach((button, index) => setPressed(button, index === selectedEvent));
      shortcutButtons.forEach((button, index) => setPressed(button, index === selectedEvent));
      const current = selectedEra.events[selectedEvent];
      fields.era.textContent = selectedEra.name;
      fields.heading.textContent = selectedEra.heading;
      fields.symbol.textContent = current.icon;
      fields.archive.textContent = format(labels.archive, current);
      fields.year.textContent = current.year;
      fields.title.textContent = current.title;
      fields.description.textContent = current.description;

      // Geen geforceerde layoutmeting nodig om de animatie opnieuw te starten.
      if (typeof card.getAnimations === 'function') {
        card.getAnimations().forEach(animation => animation.cancel());
      }
      card.classList.remove('paper-swap');
      window.requestAnimationFrame(() => card.classList.add('paper-swap'));
    }

    updateTuners();
    buildEvents();
    updateEvent();
  }





  /************************/
  /* MARK: PAGINA STARTEN */
  /**********************/

  function initPage() {
    const page = document.querySelector('.story-page');
    if (!page) return;
    initArtistSearch(page);
    initArtistDialog(page);
    initTimeline(page);
    page.querySelectorAll('[data-explorer]').forEach(initExplorer);
    initReveals(page);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage, { once: true });
  } else {
    initPage();
  }
})();
