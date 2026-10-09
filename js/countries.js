// Alle landen van de reisblog.
//
// Een land met `done: true` heeft een uitgewerkte pagina, de rest toont "volgt binnenkort".
// Items met `ok: false` zijn concept: ze komen uit de planning of eerdere gesprekken en
// moeten nog door Rob bevestigd worden. Ze worden gestippeld getoond. Zet `ok: true`
// (of verwijder het veld) zodra het klopt.
//
// Foto's: zet het bestand in /images/<land>/ en vul `src` en `alt` in.
// Zonder `src` toont de site een lege plaatshouder.

window.COUNTRIES = [
  {
    slug: "bosnie-en-herzegovina",
    name: "Bosnië en Herzegovina",
    done: true,
    pin: [43.9, 17.7],
    visited: "21 – 28 juni 2026",
    nights: 7,
    with: "Joke",
    tagline: "Een brug in Mostar, groene rivieren in de Una-vallei.",
    intro:
      "Acht dagen in twee delen: eerst Mostar en omgeving, daarna Kulen Vakuf in het Nationaal Park Una. " +
      "Een reis voor wie van natuur, water en een beetje avontuur houdt, zonder dat het ver of duur hoeft te zijn.",
    cover: { src: "images/bosnie-en-herzegovina/stari-most-schemering.webp", alt: "De Stari Most in Mostar bij schemering" },
    transport: [
      { t: "Vlucht Charleroi – Sarajevo met Ryanair", ok: true },
      { t: "Huurauto (automaat) via Sunny Cars, opgehaald op de luchthaven van Sarajevo", ok: true }
    ],
    stays: [
      {
        place: "Mostar",
        name: "Villa Olea",
        nights: 3,
        text: "Onze basis voor de eerste dagen, dicht genoeg bij het centrum om te voet te gaan.",
        photo: { src: "images/bosnie-en-herzegovina/mostar-rivier-zonsondergang.webp", alt: "Zonsondergang boven de Neretva en de oude stad van Mostar" }
      },
      {
        place: "Kulen Vakuf",
        name: "Bungalov Cozy Una",
        nights: 4,
        text: "Een bungalow in het rustige Kulen Vakuf, vlak bij het Nationaal Park Una.",
        photo: { src: "images/bosnie-en-herzegovina/kulen-vakuf-tuin-aan-de-una.webp", alt: "Tuin met hangmat aan de Una in Kulen Vakuf" }
      }
    ],
    activities: [
      {
        t: "Via ferrata aan de Fortica in Mostar",
        text: "Steil en pittig. Materiaal huur je ter plaatse, een gids is niet verplicht.",
        ok: true
      },
      {
        t: "Štrbački buk",
        text: "De grote waterval op de Una. We hadden prachtig weer.",
        ok: true
      },
      { t: "Raften op de Una", text: "Samen betaalden we €110.", ok: true },
      { t: "Kravice-watervallen", text: "Een dagtrip vanuit Mostar.", ok: true },
      { t: "Počitelj", text: "Een stenen dorpje met fort en moskee boven de Neretva.", ok: true },
      { t: "Martin Brod", text: "Watervallen aan de Una, mooi in het avondlicht.", ok: true },
      { t: "Jajce", text: "Een laatste stop op de terugweg, met de waterval midden in de stad.", ok: true },
      { t: "Blagaj", ok: false }
    ],
    practical: [
      { t: "Een Belgische identiteitskaart volstaat, neem het paspoort mee als reserve (zeker bij de huurauto).", ok: true },
      { t: "Belgische stekkers werken.", ok: true },
      { t: "Je betaalt in Bosnische mark (BAM). Kies bij het pinnen altijd voor betalen in BAM, niet in euro.", ok: false },
      { t: "Op 24 juni vermeden we Medjugorje en Jajce wegens drukte (feestdagen).", ok: false }
    ],
    // Bedragen in euro, voor ons tweeën samen.
    costs: [
      { post: "Vervoer", amount: "€ 495,28" },
      { post: "Verblijf", amount: "€ 337,32" },
      { post: "Eten", amount: "€ 137,55" },
      { post: "Boodschappen", amount: "€ 60,26" },
      { post: "Uitstappen", amount: "€ 130,78" },
      { post: "Overig", amount: "€ 718,27" }
    ],
    costTotal: { amount: "€ 1.879,46" },
    costNote:
      "Eten, boodschappen en slapen kostte ons samen ongeveer € 76 per dag voor twee. " +
      "Dat ligt iets onder het gemiddelde van ongeveer € 90 per dag dat Budget Your Trip voor Bosnië opgeeft.",
    costSource: { t: "Budget Your Trip: Bosnië en Herzegovina", url: "https://www.budgetyourtrip.com/bosnia-and-herzegowina" },
    gallery: [
      { src: "images/bosnie-en-herzegovina/mostar-brug-bij-nacht.webp", alt: "De Stari Most verlicht bij nacht", caption: "Mostar bij nacht" },
      { src: "images/bosnie-en-herzegovina/kravice-watervallen.webp", alt: "De Kravice-watervallen met een meertje eronder", caption: "Kravice-watervallen" },
      { src: "images/bosnie-en-herzegovina/fortica-via-ferrata-hangbrug.webp", alt: "Klimmer op de hangbrug van de via ferrata aan de Fortica", caption: "Via ferrata aan de Fortica" },
      { src: "images/bosnie-en-herzegovina/pocitelj-fort-en-dorp.webp", alt: "Het fort van Počitelj tussen de bomen", caption: "Počitelj" },
      { src: "images/bosnie-en-herzegovina/strbacki-buk.webp", alt: "De Štrbački buk, een brede waterval op de Una", caption: "Štrbački buk" },
      { src: "images/bosnie-en-herzegovina/una-boot-turkoois-water.webp", alt: "Houten boot op het turkooisgroene water van de Una", caption: "De Una" },
      { src: "images/bosnie-en-herzegovina/martin-brod-waterval.webp", alt: "Waterval bij Martin Brod", caption: "Martin Brod" }
    ]
  },

  { slug: "costa-rica", name: "Costa Rica", done: false, pin: [9.9, -84.1], visited: "2025" },
  { slug: "italie", name: "Italië", done: false, pin: [42.5, 12.5] },
  { slug: "slovenie", name: "Slovenië", done: false, pin: [46.1, 14.8] },
  { slug: "kroatie", name: "Kroatië", done: false, pin: [45.1, 15.2] },
  { slug: "montenegro", name: "Montenegro", done: false, pin: [42.7, 19.3] },
  { slug: "verenigde-staten", name: "Verenigde Staten", done: false, pin: [25.76, -80.19] },
  { slug: "bahamas", name: "Bahamas", done: false, pin: [25.03, -77.4] },
  { slug: "frankrijk", name: "Frankrijk", done: false, pin: [46.6, 2.5] },
  { slug: "polen", name: "Polen", done: false, pin: [50.3, 19.0], visited: "september 2026" },
  { slug: "slowakije", name: "Slowakije", done: false, pin: [49.0, 20.0], visited: "september 2026" }
];
