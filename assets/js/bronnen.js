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
        author: "Plum Rose Publishing",
        description: "Achtergrondinformatie over de geschiedenis van countrymuziek en de Amerikaanse cultuur.",
        url: "https://plumrosepublishing.com/the-history-of-country-music/"
    },
    {
        title: "De Evolutie van Country Muziek & Subgenres",
        category: "Muziek",
        author: "Country Music Hall of Fame",
        description: "Historische documentatie over de oorsprong van Honky Tonk, Outlaw Country en de moderne countrymuziekindustrie.",
        url: "https://www.countrymusichalloffame.org/learn/country-music-history"
    },
    {
        title: "Roots & Branches of Country Music",
        category: "Cultuur & Evenementen",
        author: "PBS - Ken Burns",
        description: "Gedocumenteerde geschiedenis van de roots, vertakkingen en culturele impact van countrymuziek.",
        url: "https://www.pbs.org/kenburns/country-music/roots-branches-of-country-music"
    },
    {
        title: "History of Country Music in Oklahoma",
        category: "Geschiedenis",
        author: "Oklahoma Historical Society",
        description: "Online encyclopedie en academische artikelen over de geschiedenis van countrymuziek.",
        url: "https://www.okhistory.org/publications/enc/entry?entry=CO072"
    },
    {
        title: "The Roots of American Roots & Bluegrass Music",
        category: "Muziek",
        author: "Britannica",
        description: "Onderzoek naar traditionele Amerikaanse volksmuziek, bluegrass en vroege verhalen verteld via liedjes.",
        url: "https://www.britannica.com/art/bluegrass-music"
    },
    {
        title: "History of Country Music",
        category: "Muziek",
        author: "Grizzly Rose",
        description: "Overzicht van de rijke geschiedenis van countrymuziek, artiesten en locaties.",
        url: "https://grizzlyrose.com/history-of-country-music/"
    },
    {
        title: "Discover Country Music Themes",
        category: "Muziek",
        author: "Music Rising at Tulane",
        description: "Thematisch onderzoek naar de muzikale tradities en ontwikkeling van countrymuziek.",
        url: "https://musicrising.tulane.edu/discover/themes/country-music/"
    },
    {
        title: "A Brief History of Country Music",
        category: "Geschiedenis",
        author: "Medium (Midweek Crisis)",
        description: "Een beknopt historisch overzicht van het ontstaan en de evolutie van het genre.",
        url: "https://midweekcrisis.medium.com/a-brief-history-of-country-music-ca72e8fff803"
    },
    {
        title: "An American Tradition: History of Country Music Influences",
        category: "Muziek",
        author: "Musicnotes",
        description: "Artikelen over de invloeden en muzikale tradities die country gevormd hebben.",
        url: "https://www.musicnotes.com/blog/an-american-tradition-the-history-of-country-music-influences/?srsltid=AfmBOopG-MGnrjlAKgoXNbYHh73PstFLviQs8-YRZ_68QN1us4Aj6wYG"
    },
    {
        title: "Dolly Parton and the Roots of Country Music",
        category: "Muziek & Geschiedenis",
        author: "Library of Congress",
        description: "Tijdlijn en historische artikelen over de wortels van countrymuziek en iconische artiesten.",
        url: "https://www.loc.gov/collections/dolly-parton-and-the-roots-of-country-music/articles-and-essays/country-music-timeline/"
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