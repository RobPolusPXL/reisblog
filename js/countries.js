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
    slug: "bosnie-en-herzegovina", iso: "070",
    name: "Bosnië en Herzegovina",
    done: true,
    pin: [43.9, 17.7],
    visited: "21 – 28 juni 2026",
    nights: 7,
    with: "Joke",
    info: [
      ["Hoofdstad", "Sarajevo"],
      ["Taal", "Bosnisch, Kroatisch, Servisch"],
      ["Munt", "Bosnische mark (BAM)"],
      ["Tijdzone", "Zelfde als in België"]
    ],
    tagline: "Een brug in Mostar, groene rivieren in de Una-vallei.",
    intro:
      "Acht dagen in twee delen: eerst Mostar en omgeving, daarna Kulen Vakuf in het Nationaal Park Una. " +
      "Een reis voor wie van natuur, water en een beetje avontuur houdt, zonder dat het ver of duur hoeft te zijn.",
    cover: { src: "images/bosnie-en-herzegovina/stari-most-schemering.webp", alt: "De Stari Most in Mostar bij schemering" },
    // Vluchten gecontroleerd in oktober 2026 (Ryanair-routelijst, Eurowings, FlightConnections). Dienstregelingen veranderen.
    getThere: [
      {
        from: "Vanuit België",
        routes: [
          { airport: "Brussels South Charleroi (CRL)", airline: "Ryanair", to: "Sarajevo", ours: true },
          { airport: "Brussels South Charleroi (CRL)", airline: "Ryanair", to: "Banja Luka", seasonal: true },
          { airport: "Maastricht Aachen (MST)", airline: "Wizz Air", to: "Tuzla", seasonal: true }
        ]
      },
      {
        from: "Vanuit Nederland",
        routes: [
          { airport: "Maastricht Aachen (MST)", airline: "Wizz Air", to: "Tuzla", seasonal: true }
        ]
      },
      {
        from: "Duitsland, vlak bij de grens",
        routes: [
          { airport: "Weeze (NRN), bij Nijmegen en Venlo", airline: "Ryanair", to: "Sarajevo" },
          { airport: "Keulen/Bonn (CGN)", airline: "Eurowings", to: "Sarajevo" },
          { airport: "Keulen/Bonn (CGN)", airline: "Wizz Air", to: "Tuzla" },
          { airport: "Dortmund (DTM)", airline: "Wizz Air", to: "Tuzla" },
          { airport: "Dortmund (DTM)", airline: "Wizz Air", to: "Banja Luka", seasonal: true },
          { airport: "Düsseldorf (DUS)", airline: "Eurowings", to: "Mostar", seasonal: true }
        ]
      }
    ],
    transport: [
      { t: "Huurauto (automaat) via Sunny Cars, opgehaald op de luchthaven van Sarajevo", ok: true }
    ],
    stays: [
      {
        place: "Mostar",
        name: "Villa Olea",
        nights: 3,
        text: "Onze basis voor de eerste dagen, dicht genoeg bij het centrum om te voet te gaan.",
        photo: { src: null, alt: "Villa Olea in Mostar" }
      },
      {
        place: "Kulen Vakuf",
        name: "Bungalov Cozy Una",
        nights: 4,
        text: "Een bungalow in het rustige Kulen Vakuf, vlak bij het Nationaal Park Una.",
        photo: { src: null, alt: "Bungalov Cozy Una in Kulen Vakuf" }
      }
    ],
    activities: [
      {
        t: "Mostar: de oude stad en de Stari Most",
        text: "De beroemde brug is 's avonds mooi verlicht, de oude stad zit vol terrasjes langs de Neretva.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/mostar-brug-bij-nacht.webp", alt: "De Stari Most verlicht bij nacht", caption: "Mostar bij nacht" }, { src: "images/bosnie-en-herzegovina/mostar-rivier-zonsondergang.webp", alt: "Zonsondergang boven de Neretva en de oude stad van Mostar" }]
      },
      {
        t: "Kravice-watervallen",
        text: "Een dagtrip vanuit Mostar.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/kravice-watervallen.webp", alt: "De Kravice-watervallen met een meertje eronder" }, { src: "images/bosnie-en-herzegovina/kravice-zwemmen.webp", alt: "Zwemmers voor een brede waterval van Kravice" }]
      },
      {
        t: "Via ferrata aan de Fortica in Mostar",
        text: "Steil en pittig, met onder meer een hangbrug. Materiaal huur je ter plaatse, een gids is niet verplicht.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/fortica-via-ferrata-hangbrug.webp", alt: "Klimmer op de hangbrug van de via ferrata aan de Fortica" }, { src: "images/bosnie-en-herzegovina/fortica-via-ferrata-wand.webp", alt: "Klimmer op een steile rotswand van de via ferrata" }]
      },
      {
        t: "Počitelj",
        text: "Een stenen dorpje met fort en moskee boven de Neretva.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/pocitelj-fort-en-dorp.webp", alt: "Het fort van Počitelj tussen de bomen" }, { src: "images/bosnie-en-herzegovina/pocitelj-moskee-en-klokkentoren.webp", alt: "Moskee en klokkentoren van Počitelj" }]
      },
      {
        t: "Kulen Vakuf",
        text: "Een rustig dorp aan de Una, onze basis voor het tweede deel.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/kulen-vakuf-tuin-aan-de-una.webp", alt: "Tuin met hangmat aan de Una in Kulen Vakuf" }, { src: "images/bosnie-en-herzegovina/kulen-vakuf-bosnische-koffie.webp", alt: "Bosnische koffie op een houten tafel" }]
      },
      {
        t: "Štrbački buk",
        text: "De grote waterval op de Una. We hadden prachtig weer.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/strbacki-buk.webp", alt: "De Štrbački buk, een brede waterval op de Una" }, { src: "images/bosnie-en-herzegovina/una-boot-turkoois-water.webp", alt: "Houten boot op het turkooisgroene water van de Una" }]
      },
      { t: "Raften op de Una", text: "Samen betaalden we €110.", ok: true },
      {
        t: "Martin Brod",
        text: "Watervallen aan de Una, mooi in het avondlicht.",
        ok: true,
        photos: [{ src: "images/bosnie-en-herzegovina/martin-brod-waterval.webp", alt: "Waterval bij Martin Brod" }, { src: "images/bosnie-en-herzegovina/martin-brod-rivier-avond.webp", alt: "De Una bij Martin Brod in het avondlicht" }]
      },
      { t: "Jajce", text: "Een laatste stop op de terugweg, met de waterval midden in de stad.", ok: true },
      { t: "Blagaj", ok: false }
    ],
    practical: [
      { t: "Een Belgische identiteitskaart volstaat, neem het paspoort mee als reserve (zeker bij de huurauto).", ok: true },
      { t: "Belgische stekkers werken.", ok: true },
      { t: "Je betaalt in Bosnische mark (BAM). Kies bij het pinnen altijd voor betalen in BAM, niet in euro.", ok: false },
      { t: "Op 24 juni vermeden we Medjugorje en Jajce wegens drukte (feestdagen).", ok: false }
    ],
    // Bedragen in euro, voor ons tweeën samen. Geen totaalbedrag en geen vervoer: enkel dagprijzen.
    costPerDay: [
      { label: "Eten, boodschappen en slapen", amount: "€ 76", sub: "per dag, voor ons tweeën" },
      { label: "Verblijf", amount: "€ 48", sub: "gemiddeld per nacht, voor ons tweeën" }
    ],
    costNote:
      "Daarmee zitten we iets onder het gemiddelde van ongeveer € 90 per dag dat Budget Your Trip voor Bosnië opgeeft.",
    costSource: { t: "Budget Your Trip: Bosnië en Herzegovina", url: "https://www.budgetyourtrip.com/bosnia-and-herzegowina" },
    gallery: []
  },

  { slug: "costa-rica", iso: "188", name: "Costa Rica", done: false, pin: [9.9, -84.1], visited: "2025" },
  { slug: "italie", iso: "380", name: "Italië", done: false, pin: [42.5, 12.5] },
  { slug: "slovenie", iso: "705", name: "Slovenië", done: false, pin: [46.1, 14.8] },
  { slug: "kroatie", iso: "191", name: "Kroatië", done: false, pin: [45.1, 15.2] },
  { slug: "montenegro", iso: "499", name: "Montenegro", done: false, pin: [42.7, 19.3] },
  { slug: "verenigde-staten", iso: "840", name: "Verenigde Staten", done: false, pin: [25.76, -80.19] },
  { slug: "bahamas", iso: "044", name: "Bahamas", done: false, pin: [25.03, -77.4] },
  { slug: "frankrijk", iso: "250", name: "Frankrijk", done: false, pin: [46.6, 2.5] },
  { slug: "polen", iso: "616", name: "Polen", done: false, pin: [50.3, 19.0], visited: "september 2026" },
  { slug: "slowakije", iso: "703", name: "Slowakije", done: false, pin: [49.0, 20.0], visited: "september 2026" }
];
