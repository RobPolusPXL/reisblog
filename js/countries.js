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
    cover: { src: null, alt: "Landschap in Bosnië en Herzegovina" },
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
        photo: { src: null, alt: "Mostar" }
      },
      {
        place: "Kulen Vakuf",
        name: "Bungalov Cozy Una",
        nights: 4,
        text: "Een bungalow in het rustige Kulen Vakuf, vlak bij het Nationaal Park Una.",
        photo: { src: null, alt: "Kulen Vakuf en de Una" }
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
      { t: "Raften op de Una (route R1 met Una Aquarius)", text: "Rond €50 per persoon, alles inbegrepen.", ok: false },
      { t: "Dagtrips vanuit Mostar: Blagaj, Počitelj en de Kravice-watervallen", ok: false },
      { t: "Martin Brod en zijn watervallen", ok: false }
    ],
    practical: [
      { t: "Een Belgische identiteitskaart volstaat, neem het paspoort mee als reserve (zeker bij de huurauto).", ok: true },
      { t: "Belgische stekkers werken.", ok: true },
      { t: "Je betaalt in Bosnische mark (BAM). Kies bij het pinnen altijd voor betalen in BAM, niet in euro.", ok: false },
      { t: "Op 24 juni vermeden we Medjugorje en Jajce wegens drukte (feestdagen).", ok: false }
    ],
    costs: [
      { post: "Vlucht", amount: null },
      { post: "Huurauto", amount: null },
      { post: "Verblijf", amount: null },
      { post: "Eten", amount: null },
      { post: "Activiteiten", amount: null }
    ],
    costNote: null, // bv. "Goedkoper dan een gemiddelde reis naar Zuid-Europa."
    gallery: []
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
