const themes = [
  {
    id: "krop",
    title: "Krop",
    deck: "Kroppen som figur, spænding og nærvær.",
    description:
      "Værker hvor kroppen bærer billedet og bliver et følelsesmæssigt centrum i sig selv.",
  },
  {
    id: "psyke",
    title: "Psyke",
    deck: "Billeder med indre spænding og stille uro.",
    description:
      "Rum og figurer hvor stemningen er lige så vigtig som motivet, og hvor billedet læses som sindstilstand.",
  },
  {
    id: "uskyld",
    title: "Uskyld",
    deck: "Familie, barndom og de bløde fortællinger med skygger.",
    description:
      "Værker om erindring, nærhed og relationer, hvor det genkendelige altid har en undertone af noget mere sårbart.",
  },
  {
    id: "farve",
    title: "Farve",
    deck: "Værker hvor kulør, flade og rytme løfter oplevelsen.",
    description:
      "Billeder valgt for deres særlige brug af farve, kontrast og malerisk energi.",
  },
];

const artworks = [
  {
    id: "juleaften",
    title: "Juleaften",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Paint_238-scaled.jpg",
    theme: "uskyld",
    dimensions: "120 x 90 cm",
    medium: "Akryl på lærred",
    description:
      "Et fortællende værk med en stille spænding mellem nærhed, omsorg og noget, der ikke helt falder på plads.",
    positions: {
      hero: "34% 36%",
      featured: "40% 36%",
      theme: "38% 38%",
      sequence: "36% 38%",
    },
  },
  {
    id: "mormors-kokken",
    title: "Mormors køkken",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Eva-kokkenvaegt-scaled.jpg",
    theme: "uskyld",
    dimensions: "40 x 40 cm",
    medium: "Akryl på lærred",
    description:
      "Et lille værk med stor erindringskraft, hvor genstanden bliver en portal til en familiehistorie.",
    positions: {
      featured: "50% 50%",
      theme: "50% 50%",
      sequence: "50% 50%",
    },
  },
  {
    id: "tommer-mors-hus",
    title: "Tømmer mors hus",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Tommer-mors-hus-scaled.jpg",
    theme: "uskyld",
    dimensions: "100 x 100 cm",
    medium: "Akryl på lærred",
    description:
      "Et værk om afsked, hukommelse og de historier, der bliver liggende i rummets ting.",
    positions: {
      featured: "54% 34%",
      theme: "54% 36%",
      sequence: "54% 36%",
    },
  },
  {
    id: "cykel",
    title: "Jeg er så glad for min cykel",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Jeg-er-sa-glad-for-min-cykel-scaled.jpg",
    theme: "farve",
    dimensions: "90 x 60 cm",
    medium: "Akryl på lærred",
    description:
      "Et lysere, mere legende motiv, hvor udsnittet kan lægges, så cyklen og farven får lov at bære kortet.",
    positions: {
      featured: "44% 42%",
      theme: "40% 42%",
      sequence: "50% 42%",
    },
  },
  {
    id: "inside-the-man",
    title: "Inside the man",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/09/IMG_0283-scaled.jpg",
    theme: "psyke",
    dimensions: "80 x 60 cm",
    medium: "Akryl på lærred",
    description:
      "Et billede hvor det indre og det ydre spejler hinanden, og hvor roen hele tiden er på vej til at slå revner.",
    positions: {
      featured: "42% 24%",
      theme: "50% 24%",
      sequence: "48% 24%",
    },
  },
  {
    id: "woman-green-dress",
    title: "Woman in green dress",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/09/IMG_0281-scaled.jpg",
    theme: "krop",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Figuren står som både portræt og sindstilstand, med kroppen som det vigtigste holdepunkt.",
    positions: {
      featured: "50% 22%",
      theme: "50% 22%",
      sequence: "50% 24%",
    },
  },
  {
    id: "man-in-the-clouds",
    title: "Man in the clouds",
    image: "https://sahlart.dk/wp-indhold/uploads/2021/06/paint_219-scaled.jpg",
    theme: "psyke",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Et motiv der balancerer mellem opløsning, drøm og en krop, der alligevel fastholdes i billedfladen.",
    positions: {
      featured: "50% 28%",
      theme: "50% 28%",
      sequence: "50% 28%",
    },
  },
  {
    id: "jump-into-the-dark",
    title: "Jump into the dark",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/2.jpg",
    theme: "krop",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Et øjebliksbillede af krop, risiko og bevægelse, hvor handlingen næsten er standset i luften.",
    positions: {
      featured: "50% 24%",
      theme: "50% 24%",
      sequence: "50% 24%",
    },
  },
  {
    id: "freeze-1",
    title: "Freeze #1",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/freeze_1.jpg",
    theme: "psyke",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Serien fungerer stærkt som en gruppe, fordi små forskydninger i positur og rytme bliver tydelige.",
    positions: {
      featured: "50% 26%",
      theme: "50% 26%",
      sequence: "50% 26%",
    },
  },
  {
    id: "freeze-4",
    title: "Freeze #4",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/freeze100_100.jpg",
    theme: "farve",
    dimensions: "100 x 100 cm",
    medium: "Akryl på lærred",
    description:
      "Det kvadratiske format giver serien en ro, der står fint i kontrast til motivets spænding.",
    positions: {
      featured: "50% 50%",
      theme: "50% 50%",
      sequence: "50% 50%",
    },
  },
  {
    id: "freeze-7",
    title: "Freeze #7",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/IMG_2452.jpg",
    theme: "psyke",
    dimensions: "60 x 80 cm",
    medium: "Akryl på lærred",
    description:
      "Et senere punkt i serien, hvor stilstanden føles som noget psykologisk og ikke bare fysisk.",
    positions: {
      featured: "50% 24%",
      theme: "50% 24%",
      sequence: "50% 24%",
    },
  },
  {
    id: "akrobatik",
    title: "Akrobatik",
    image: "https://sahlart.dk/wp-indhold/uploads/2015/11/Paint_240-scaled.jpg",
    theme: "krop",
    dimensions: "80 x 100 cm",
    medium: "Akryl på lærred",
    description:
      "Et kropsligt motiv med både lethed og uro, velegnet som en stærk lodret note i det kuraterede grid.",
    positions: {
      featured: "54% 20%",
      theme: "54% 20%",
      sequence: "54% 20%",
    },
  },
];

const featuredIds = [
  { id: "inside-the-man", size: "large" },
  { id: "jump-into-the-dark", size: "tall" },
  { id: "mormors-kokken", size: "medium" },
  { id: "juleaften", size: "wide" },
  { id: "woman-green-dress", size: "tall" },
  { id: "cykel", size: "medium" },
];

const sequenceIds = [
  "inside-the-man",
  "juleaften",
  "freeze-7",
  "woman-green-dress",
];

const heroArtwork = artworks.find((artwork) => artwork.id === "inside-the-man");

const heroCopy = document.querySelector("#hero-copy");
const heroMedia = document.querySelector("#hero-media");
const featuredGrid = document.querySelector("#featured-grid");
const themeRail = document.querySelector("#theme-rail");
const themeGroups = document.querySelector("#theme-groups");
const sequenceList = document.querySelector("#sequence-list");

const modal = document.querySelector("#art-modal");
const modalImage = document.querySelector("#modal-image");
const modalTheme = document.querySelector("#modal-theme");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalDescription = document.querySelector("#modal-description");
const modalCounter = document.querySelector("#modal-counter");

let currentArtworkIndex = 0;
let lastFocusedElement = null;

function getTheme(themeId) {
  return themes.find((theme) => theme.id === themeId);
}

function getArtwork(artworkId) {
  return artworks.find((artwork) => artwork.id === artworkId);
}

function getPosition(artwork, context) {
  return artwork.positions?.[context] || artwork.positions?.theme || "50% 50%";
}

function renderHero() {
  heroCopy.innerHTML = `
    <p class="eyebrow">Født som kodhætte</p>
    <h1 id="hero-title">${heroArtwork.title}</h1>
    <p class="hero-text">
      Et stærkt værk som første møde. Mørkere omkring billedet, mere ro omkring teksten, og
      en tydelig fornemmelse af identitet fra første blik.
    </p>
    <p class="hero-meta">
      <span>${heroArtwork.dimensions}</span>
      <span>${heroArtwork.medium}</span>
    </p>
    <div class="hero-actions" aria-label="Primære handlinger">
      <a class="button primary" href="#featured">Se udvalgte værker</a>
      <a class="button secondary" href="#themes">Gå til temaer</a>
    </div>
  `;

  heroMedia.innerHTML = `
    <img
      src="${heroArtwork.image}"
      alt="${heroArtwork.title} af Lisbeth Sahl Bauditz"
      style="object-position: ${getPosition(heroArtwork, "hero")};"
    >
    <figcaption>
      <span>${heroArtwork.title}</span>
      <span>${heroArtwork.dimensions}</span>
    </figcaption>
  `;
}

function renderFeaturedGrid() {
  featuredGrid.innerHTML = featuredIds
    .map((entry) => {
      const artwork = getArtwork(entry.id);
      return `
        <button class="featured-card ${entry.size}" type="button" data-artwork-id="${artwork.id}">
          <img
            src="${artwork.image}"
            alt="${artwork.title} af Lisbeth Sahl Bauditz"
            loading="lazy"
            style="object-position: ${getPosition(artwork, "featured")};"
          >
          <div class="featured-card-copy">
            <p class="art-meta">${getTheme(artwork.theme).title} · ${artwork.dimensions}</p>
            <h3>${artwork.title}</h3>
            <p>${artwork.description}</p>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderThemeRail() {
  themeRail.innerHTML = themes
    .map((theme, index) => {
      const count = artworks.filter((artwork) => artwork.theme === theme.id).length;
      return `
        <a class="theme-link" href="#${theme.id}">
          <span>${String(index + 1).padStart(2, "0")} · ${count} værker</span>
          <strong>${theme.title}</strong>
          <p>${theme.deck}</p>
        </a>
      `;
    })
    .join("");
}

function renderThemeGroups() {
  themeGroups.innerHTML = themes
    .map((theme) => {
      const cards = artworks
        .filter((artwork) => artwork.theme === theme.id)
        .map((artwork) => {
          return `
            <button class="art-card" type="button" data-artwork-id="${artwork.id}">
              <figure>
                <img
                  src="${artwork.image}"
                  alt="${artwork.title} af Lisbeth Sahl Bauditz"
                  loading="lazy"
                  style="object-position: ${getPosition(artwork, "theme")};"
                >
              </figure>
              <div class="art-card-copy">
                <h4>${artwork.title}</h4>
                <p class="art-meta">${artwork.dimensions} · ${artwork.medium}</p>
                <p>${artwork.description}</p>
              </div>
            </button>
          `;
        })
        .join("");

      return `
        <section class="theme-group" id="${theme.id}">
          <div class="theme-group-header">
            <div>
              <p class="eyebrow">Tema</p>
              <h3>${theme.title}</h3>
            </div>
            <p>${theme.description}</p>
          </div>
          <div class="theme-group-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function renderSequence() {
  sequenceList.innerHTML = sequenceIds
    .map((artworkId, index) => {
      const artwork = getArtwork(artworkId);
      const theme = getTheme(artwork.theme);
      return `
        <article class="sequence-panel">
          <figure class="sequence-media">
            <img
              src="${artwork.image}"
              alt="${artwork.title} af Lisbeth Sahl Bauditz"
              loading="lazy"
              style="object-position: ${getPosition(artwork, "sequence")};"
            >
          </figure>
          <div class="sequence-copy">
            <p class="eyebrow">Sekvens ${String(index + 1).padStart(2, "0")} / ${theme.title}</p>
            <h3>${artwork.title}</h3>
            <p>${artwork.description}</p>
            <p class="art-meta">${artwork.dimensions} · ${artwork.medium}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function openModalById(artworkId) {
  const index = artworks.findIndex((artwork) => artwork.id === artworkId);
  if (index === -1) return;
  currentArtworkIndex = index;
  const artwork = artworks[currentArtworkIndex];
  const theme = getTheme(artwork.theme);

  lastFocusedElement = document.activeElement;
  modalImage.src = artwork.image;
  modalImage.alt = `${artwork.title} af Lisbeth Sahl Bauditz`;
  modalImage.style.objectPosition = getPosition(artwork, "sequence");
  modalTheme.textContent = theme.title;
  modalTitle.textContent = artwork.title;
  modalMeta.textContent = `${artwork.dimensions} · ${artwork.medium}`;
  modalDescription.textContent = artwork.description;
  modalCounter.textContent = `${currentArtworkIndex + 1} / ${artworks.length}`;
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

function stepModal(direction) {
  currentArtworkIndex = (currentArtworkIndex + direction + artworks.length) % artworks.length;
  openModalById(artworks[currentArtworkIndex].id);
}

renderHero();
renderFeaturedGrid();
renderThemeRail();
renderThemeGroups();
renderSequence();

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-artwork-id]");
  if (card) {
    openModalById(card.dataset.artworkId);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }

  if (event.target.closest("[data-prev-art]")) {
    stepModal(-1);
    return;
  }

  if (event.target.closest("[data-next-art]")) {
    stepModal(1);
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "ArrowLeft") {
    stepModal(-1);
  }

  if (event.key === "ArrowRight") {
    stepModal(1);
  }
});
