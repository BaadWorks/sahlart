const categories = [
  {
    id: "familie",
    title: "Familiefortællinger",
    deck: "Hverdagsbilleder, minder og små scener, hvor relationer og genstande får psykologisk vægt.",
    description:
      "Her er køkkener, cykler, juleaftener og familiære rum. Værkerne føles genkendelige, men har en stille uro under overfladen.",
  },
  {
    id: "figur",
    title: "Figur og rum",
    deck: "Mennesker i rum, hvor kroppen ofte virker fastfrosset mellem handling og erindring.",
    description:
      "Figurerne er placeret i tydelige billedrum, men rummet bliver mere sindstilstand end scene. Det gør billederne åbne for langsom læsning.",
  },
  {
    id: "freeze",
    title: "Freeze-serien",
    deck: "En samlet serie, der fortjener at blive oplevet som et forløb frem for enkeltstående billeder.",
    description:
      "Freeze-værkerne samler gentagelse, bevægelse og stilstand. Serien får sin egen plads, så variationerne bliver lettere at se.",
  },
  {
    id: "tryk",
    title: "Tryk og oplag",
    deck: "Værker og motiver, der kan fungere som en mere tilgængelig indgang til samlingen.",
    description:
      "Tryksektionen gør det tydeligt, hvilke værker der findes som gicléetryk eller poster, uden at blande dem sammen med originalmalerier.",
  },
  {
    id: "projekter",
    title: "Streetart og projekter",
    deck: "Objekter og projekter, hvor værkerne træder ud af den klassiske maleriramme.",
    description:
      "Denne gruppe viser, hvordan billedsproget også fungerer i skulpturelle og offentlige formater.",
  },
];

const artworks = [
  {
    title: "Juleaften",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Paint_238-scaled.jpg",
    category: "familie",
    dimensions: "120 x 90 cm",
    medium: "Akryl på lærred",
    description:
      "Et fortællende værk med tydelig hverdagsgenkendelse og den dobbelte stemning, der går igen i mange af billederne.",
  },
  {
    title: "Mormors køkken",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Eva-kokkenvaegt-scaled.jpg",
    category: "familie",
    dimensions: "40 x 40 cm",
    medium: "Akryl på lærred",
    description:
      "Et lille format med stor erindringskraft, hvor en genstand og et rum åbner for en hel familiehistorie.",
  },
  {
    title: "Tømmer mors hus",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Tommer-mors-hus-scaled.jpg",
    category: "familie",
    dimensions: "100 x 100 cm",
    medium: "Akryl på lærred",
    description:
      "Et værk om oprydning, afsked og de fortællinger, der ligger gemt i hjemmets ting.",
  },
  {
    title: "Jeg er så glad for min cykel",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Jeg-er-sa-glad-for-min-cykel-scaled.jpg",
    category: "familie",
    dimensions: "90 x 60 cm",
    medium: "Akryl på lærred",
    description:
      "En enkel titel og et dagligdags motiv, der giver gruppen en mere legende indgang.",
  },
  {
    title: "Inside the man",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/09/IMG_0283-scaled.jpg",
    category: "figur",
    dimensions: "80 x 60 cm",
    medium: "Akryl på lærred",
    description:
      "Et billede, hvor det ydre rum og den indre tilstand spejler hinanden.",
  },
  {
    title: "Woman in green dress",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/09/IMG_0281-scaled.jpg",
    category: "figur",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "En figur i et stramt billedrum, hvor positur og farve skaber en stille dramatik.",
  },
  {
    title: "Man in the clouds",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/06/paint_219-scaled.jpg",
    category: "figur",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Et motiv, der balancerer mellem tyngde og opløsning, hverdag og drøm.",
  },
  {
    title: "Jump into the dark",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/2.jpg",
    category: "figur",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Kroppen bliver et øjebliksbillede af tøven, risiko og bevægelse.",
  },
  {
    title: "Freeze #1",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/freeze_1.jpg",
    category: "freeze",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Første værk i en serie, hvor gentagelsen gør det lettere at aflæse forskelle i rytme og positur.",
  },
  {
    title: "Freeze #2",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/freeze_2.jpg",
    category: "freeze",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Seriens variationer fungerer bedst samlet, så blikket kan vandre fra billede til billede.",
  },
  {
    title: "Freeze #4",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/freeze100_100.jpg",
    category: "freeze",
    dimensions: "100 x 100 cm",
    medium: "Akryl på lærred",
    description:
      "Det kvadratiske format giver serien en anden tyngde og ro.",
  },
  {
    title: "Freeze #7",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/IMG_2452.jpg",
    category: "freeze",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Et senere nedslag i serien, hvor motivets stilstand fortsat står centralt.",
  },
  {
    title: "Gicléetryk A2",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Paint_223_tryk-scaled.jpg",
    category: "tryk",
    dimensions: "42 x 59 cm",
    medium: "Gicléetryk på Hahnemühle 210 g papir",
    description:
      "Et begrænset oplag på mat kunstpapir, fremhævet som en klarere købsindgang.",
  },
  {
    title: "Gicléetryk A2",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Paint_206_tryk-scaled.jpg",
    category: "tryk",
    dimensions: "42 x 59 cm",
    medium: "Gicléetryk på Hahnemühle 210 g papir",
    description:
      "En printvisning, der kan suppleres med pris og oplag, når indholdet er afklaret.",
  },
  {
    title: "Poster A3",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/fullsizeoutput_6b42.jpeg",
    category: "tryk",
    dimensions: "A3",
    medium: "Poster på 170 g papir",
    description:
      "Et lavere prispunkt kan på sigt placeres separat fra originalværkerne.",
  },
  {
    title: "Kube: Mast af virkeligheden",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/kube.jpg",
    category: "projekter",
    dimensions: "120 x 120 x 120 cm",
    medium: "Streetartprojekt, Artstreet på Østerbro",
    description:
      "Et tredimensionelt projekt om det travle bymenneske, der ikke kan følge med egne og omverdenens krav.",
  },
  {
    title: "Streetart på Østerbro",
    image: "https://sahlart.dk/wp-indhold/uploads/2018/10/IMG_1807.jpg",
    category: "projekter",
    dimensions: "Projektfoto",
    medium: "Dokumentation",
    description:
      "Projektbilleder giver siden variation og viser, at praksissen også rækker ud i byrum og events.",
  },
];

const categoryLinks = document.querySelector("#category-links");
const workGroups = document.querySelector("#work-groups");
const modal = document.querySelector("#art-modal");
const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalDescription = document.querySelector("#modal-description");
let lastFocusedElement = null;

function getCategory(id) {
  return categories.find((category) => category.id === id);
}

function renderCategoryLinks() {
  categoryLinks.innerHTML = categories
    .map((category, index) => {
      const count = artworks.filter((artwork) => artwork.category === category.id).length;
      return `
        <a class="category-link" href="#${category.id}">
          <span>${String(index + 1).padStart(2, "0")} / ${count} værker</span>
          <strong>${category.title}</strong>
          <p>${category.deck}</p>
        </a>
      `;
    })
    .join("");
}

function renderWorkGroups() {
  workGroups.innerHTML = categories
    .map((category) => {
      const cards = artworks
        .filter((artwork) => artwork.category === category.id)
        .map((artwork) => {
          const index = artworks.indexOf(artwork);
          return `
            <button class="art-card" type="button" data-artwork-index="${index}">
              <figure>
                <img
                  src="${artwork.image}"
                  alt="${artwork.title} af Lisbeth Sahl Bauditz"
                  loading="lazy"
                >
              </figure>
              <div class="art-card-copy">
                <h3>${artwork.title}</h3>
                <p class="art-meta">${artwork.dimensions} · ${artwork.medium}</p>
                <p>${artwork.description}</p>
              </div>
            </button>
          `;
        })
        .join("");

      return `
        <section class="group" id="${category.id}" aria-labelledby="${category.id}-title">
          <div class="group-header">
            <div>
              <p class="eyebrow">Tema</p>
              <h3 id="${category.id}-title">${category.title}</h3>
            </div>
            <p>${category.description}</p>
          </div>
          <div class="art-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function openModal(artwork) {
  const category = getCategory(artwork.category);
  lastFocusedElement = document.activeElement;
  modalImage.src = artwork.image;
  modalImage.alt = `${artwork.title} af Lisbeth Sahl Bauditz`;
  modalCategory.textContent = category.title;
  modalTitle.textContent = artwork.title;
  modalMeta.textContent = `${artwork.dimensions} · ${artwork.medium}`;
  modalDescription.textContent = artwork.description;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  modalImage.src = "";
  document.body.style.overflow = "";
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

renderCategoryLinks();
renderWorkGroups();

workGroups.addEventListener("click", (event) => {
  const card = event.target.closest("[data-artwork-index]");
  if (!card) return;
  openModal(artworks[Number(card.dataset.artworkIndex)]);
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});
