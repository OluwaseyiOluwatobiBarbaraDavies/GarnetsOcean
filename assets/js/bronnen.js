const imageSources = [
    {
        title: "Vlag van Texas",
        filename: "texasFlag.jpg",
        filepath: "../resources/images/texasFlag.jpg",
        category: "Landschap",
        sourceAuthor: "Valley Homes",
        secondaryCredit: null,
        url: "https://valleyhomeslc.com/location/mobile-homes-for-sale-dumas-tx/"
    },
    {
        title: "Rodeo Evenement",
        filename: "rodeo.jpg",
        filepath: "../resources/images/rodeo.jpg",
        category: "Evenementen & Posters",
        sourceAuthor: "National Western Stock Show",
        secondaryCredit: null,
        url: "https://nationalwestern.com/rodeos/"
    },
    {
        title: "Country Day bij Houston Rodeo",
        filename: "CountryDay.jpg",
        filepath: "../resources/images/CountryDay.jpg",
        category: "Evenementen & Posters",
        sourceAuthor: "Houstonia Magazine",
        secondaryCredit: "Houston Livestock Show and Rodeo",
        url: "https://www.houstoniamag.com/arts-and-culture/2025/03/houston-rodeo-best-days-to-visit"
    },
    {
        title: "Festival Poster / Line-up",
        filename: "FestivalPoster.jpg",
        filepath: "../resources/images/FestivalPoster.jpg",
        category: "Evenementen & Posters",
        sourceAuthor: "Houston Chronicle",
        secondaryCredit: "Houston Livestock Show and Rodeo",
        url: "https://www.houstonchronicle.com/entertainment/music/article/houston-rodeo-genre-calendar-2025-acts-lineup-tix-19934612.php"
    },
    {
        title: "Dolly Parton",
        filename: "artist-dolly.jpg",
        filepath: "../resources/images/artist-dolly.jpg",
        category: "Artiesten",
        sourceAuthor: "Daily Bruin",
        secondaryCredit: "Foto door Richard E. Aaron / Redferns / Getty Images",
        url: "https://dailybruin.com/2026/08/27/in-moments-remembering-queen-of-country-dolly-partons-career"
    },
    {
        title: "Don Williams",
        filename: "artist_don.jpg",
        filepath: "../resources/images/artist_don.jpg",
        category: "Artiesten",
        sourceAuthor: "Getty Images",
        secondaryCredit: "Foto door Michael Putland",
        url: "https://www.gettyimages.nl/detail/nieuwsfoto%27s/don-williams-portrait-london-1989-nieuwsfotos/109364677?adppopup=true"
    },
    {
        title: "Ella Langley",
        filename: "artist_ella.jpg",
        filepath: "../resources/images/artist_ella.jpg",
        category: "Artiesten",
        sourceAuthor: "Woman's World",
        secondaryCredit: null,
        url: "https://www.womansworld.com/entertainment/celebrities/ella-langley-before-fame-was-totally-different-how-she-found-her-look"
    },
    {
        title: "Kameron Marlowe",
        filename: "artist_kameron.jpg",
        filepath: "../resources/images/artist_kameron.jpg",
        category: "Artiesten",
        sourceAuthor: "Oluwaseyi Davies",
        secondaryCredit: "Directe vermelding",
        url: null
    },
    {
        title: "Warren Zeiders",
        filename: "artist_warren.jpg",
        filepath: "../resources/images/artist_warren.jpg",
        category: "Artiesten",
        sourceAuthor: "Wikipedia",
        secondaryCredit: null,
        url: "https://en.wikipedia.org/wiki/Warren_Zeiders"
    }
];

const researchSources = [
    {
        title: "Geschiedenis van het Wilde Westen & Frontier Life",
        category: "Geschiedenis",
        author: "National Cowboy & Western Heritage Museum",
        description: "Achtergrondinformatie over het leven van cowboys, veeteelt en de ontwikkeling van de Amerikaanse frontier in de 19e eeuw.",
        url: "https://nationalcowboymuseum.org/"
    },
    {
        title: "De Evolutie van Country Muziek & Subgenres",
        category: "Muziek",
        author: "Country Music Hall of Fame",
        description: "Historische documentatie over de oorsprong van Honky Tonk, Outlaw Country en de moderne countrymuziekindustrie.",
        url: "https://www.countrymusichalloffame.org/"
    },
    {
        title: "Houston Livestock Show and Rodeo Geschiedenis",
        category: "Cultuur & Evenementen",
        author: "HLSR Archieven",
        description: "Gedocumenteerde geschiedenis van de grootste rodeo ter wereld en de impact ervan op de Texaanse cultuur.",
        url: "https://www.rodeohouston.com/"
    },
    {
        title: "Texas State Historical Association (TSHA)",
        category: "Geschiedenis",
        author: "Handbook of Texas",
        description: "Online encyclopedie en academische artikelen over historische gebeurtenissen, bevolking en cultuur in Texas.",
        url: "https://www.tshaonline.org/handbook"
    },
    {
        title: "The Roots of American Roots Music",
        category: "Muziek",
        author: "Smithsonian Folkways",
        description: "Onderzoek naar traditionele Amerikaanse volksmuziek, bluegrass en vroege verhalen verteld via liedjes.",
        url: "https://folkways.si.edu/"
    }
];

let currentCategory = "Alle";

function switchView(view) {
    const visualView = document.getElementById('visualView');
    const researchView = document.getElementById('researchView');
    const tabVisualBtn = document.getElementById('tabVisualBtn');
    const tabResearchBtn = document.getElementById('tabResearchBtn');

    if (view === 'visual') {
        visualView.classList.remove('hidden');
        researchView.classList.add('hidden');
        tabVisualBtn.className = "tab-btn tab-btn-active";
        tabResearchBtn.className = "tab-btn tab-btn-inactive";
    } else if (view === 'research') {
        visualView.classList.add('hidden');
        researchView.classList.remove('hidden');
        tabVisualBtn.className = "tab-btn tab-btn-inactive";
        tabResearchBtn.className = "tab-btn tab-btn-active";
        renderResearchList(researchSources);
    }
}

function setCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isActive = btn.innerText.includes(category);
        btn.className = `filter-btn ${isActive ? 'filter-btn-active' : 'filter-btn-inactive'}`;
    });
    filterSources();
}

function filterSources() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = imageSources.filter(item => {
        const matchesCat = currentCategory === "Alle" || item.category === currentCategory;
        const matchesQuery = item.title.toLowerCase().includes(query) || 
                            item.filename.toLowerCase().includes(query) || 
                            item.sourceAuthor.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });
    renderSourcesGrid(filtered);
}

function renderSourcesGrid(items) {
    const grid = document.getElementById("sourcesGrid");
    if (!grid) return;

    if (!items.length) {
        grid.innerHTML = `<div style="grid-column: 1 / -1;" class="parchment-bg source-card p-8 text-center font-bold">Geen afbeeldingen gevonden.</div>`;
        return;
    }

    grid.innerHTML = items.map(item => `
        <div class="parchment-bg source-card">
        <div>
            <div class="card-img-container">
            <img src="${item.filepath}" alt="${item.title}">
            <span class="category-badge">${item.category}</span>
            </div>
            <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-filename">${item.filename}</p>
            <div class="card-details">
                <div><strong>Bron:</strong> ${item.sourceAuthor}</div>
                ${item.secondaryCredit ? `<div style="font-size: 11px; margin-top: 2px;"><strong>Fotograaf:</strong> ${item.secondaryCredit}</div>` : ''}
            </div>
            </div>
        </div>
        <div class="card-footer">
            ${item.url ? `
            <a href="${item.url}" target="_blank" rel="noopener" class="card-btn">
                <span>Bekijk Originele Bron</span> ↗
            </a>
            ` : `
            <span class="card-badge-direct">
                Directe Vermelding
            </span>
            `}
        </div>
        </div>
    `).join('');
}

function renderResearchList(items) {
    const container = document.getElementById("researchList");
    if (!container) return;

    container.innerHTML = items.map(item => `
        <div class="parchment-bg source-card" style="padding: 1.25rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(120,53,15,0.2); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
            <h3 class="card-title" style="font-size: 1.125rem;">${item.title}</h3>
            <span class="category-badge" style="position: relative; top: auto; right: auto;">${item.category}</span>
        </div>
        <p style="font-size: 0.875rem; margin: 0.5rem 0; line-height: 1.5; color: var(--amber-950);">${item.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; margin-top: 0.5rem;">
            <span><strong>Auteur/Instituut:</strong> ${item.author}</span>
            <a href="${item.url}" target="_blank" rel="noopener" style="color: var(--amber-900); font-weight: bold; text-decoration: underline;">Bezoek Bron ↗</a>
        </div>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    renderSourcesGrid(imageSources);
});