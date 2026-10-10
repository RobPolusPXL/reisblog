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
    facts: [
      { icon: "pin", label: "Hoofdstad", v: "Sarajevo" },
      { icon: "talk", label: "Taal", v: "Bosnisch, Kroatisch, Servisch" },
      { icon: "coin", label: "Munt", v: "Bosnische mark (BAM)" },
      { icon: "plane", label: "Vliegtijd", v: "2 u 5 vanaf Charleroi" },
      { icon: "clock", label: "Tijdzone", v: "Zelfde als in België" }
    ],
    tagline: "De Stari Most in Mostar, de smaragdgroene Una in Nationaal Park Una.",
    intro:
      "Bosnië en Herzegovina, het begint al in de auto. De M17 van Sarajevo naar Mostar kronkelt langs Konjic en de Neretva en is misschien wel de mooiste weg van Europa. " +
      "In Mostar staat de Stari Most, de oude, bekende brug, 's avonds prachtig verlicht boven het water. " +
      "Daarna reden we naar de Una: smaragdgroen, met watervallen, en raften op een ijskoude rivier waar je op een hete dag zo in springt. " +
      "Een via ferrata boven Mostar, zwemmen bij Kravice, Bosnische koffie op een terras. " +
      "Twee uur vliegen en je zit in een van de mooiste landen van Europa.",
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
        photos: [{ src: "images/bosnie-en-herzegovina/martin-brod-waterval.webp", alt: "Waterval bij Martin Brod" }, { src: "images/bosnie-en-herzegovina/martin-brod-rivier-avond.webp", alt: "De Una bij Martin Brod in het avondlicht" }],
        hero: {"src": "images/bosnie-en-herzegovina/martin-brod-waterval-start.webp", "alt": "De watervallen van Martin Brod"},
        body: [{"h": "De waterval", "p": ["Martin Brod ligt in het zuiden van Nationaal Park Una, in het noordwesten van Bosnië en Herzegovina, op zo'n 330 meter hoogte. De Una stroomt dwars door het dorp en wordt aan de oostkant versterkt door de Unac. Hier ligt het grootste watervalcomplex van het park: een reeks watervallen, stroomversnellingen en kalktufterrassen over ongeveer 800 meter, met samen zo'n 54 meter verval.", "De grootste val is de Milančev buk, 10 à 12 meter hoog. Jalak en Donji buk zijn iets lager. Bij de hoofdval stroomt ongeveer 63 kubieke meter water per seconde. De watervallen zijn van kalktuf (travertijn): ze ontstaan door een samenspel van fysische, chemische en biologische processen, waarbij mos en algen een sleutelrol spelen. Bosnië en Herzegovina zette het complex in 2019 op de voorlopige lijst voor Unesco-Werelderfgoed."]}],
        sources: [{"t": "Unesco: Complex of travertine waterfalls in Martin Brod", "url": "https://whc.unesco.org/en/tentativelists/6400/"}, {"t": "Vlado Vince: Traveling the Una railroad", "url": "https://blog.vladovince.com/traveling-the-una-railroad-thoughts-on-potential-revitalization/"}, {"t": "Railway Gazette: Croatia and Bosnia & Herzegovina discuss reopening of Una line", "url": "https://www.railwaygazette.com/passenger/2026/02/10/croatia-and-bosnia-herzegovina-discuss-reopening-of-una-line/"}, {"t": "Wikipedia: Martin Brod", "url": "https://en.wikipedia.org/wiki/Martin_Brod"}],
        gallery: [{"video": "images/bosnie-en-herzegovina/martin-brod-video.mp4", "poster": "images/bosnie-en-herzegovina/martin-brod-video.webp", "alt": "Video van de watervallen van Martin Brod", "span": 6}, {"src": "images/bosnie-en-herzegovina/martin-brod-boot.webp", "alt": "Een houten boot op het turkooizen water van de Una"}, {"src": "images/bosnie-en-herzegovina/martin-brod-canyon.webp", "alt": "De Una in een canyon, met een treinbrug in de verte"}, {"src": "images/bosnie-en-herzegovina/martin-brod-canyon-staand.webp", "alt": "De Una van boven, in de canyon", "span": 2, "tall": true}, {"embed": true, "span": 2}, {"src": "images/bosnie-en-herzegovina/martin-brod-treinbrug-staand.webp", "alt": "Wandelen over de groene treinbrug", "span": 2, "tall": true}, {"section": {"h": "De wandeling en het oude treinspoor", "p": ["De wandeling begint bij de waterval en volgt de Una de canyon in. Onderweg kom je langs tunnels in de rots, een groene stalen treinbrug en het spoor zelf. Dat is de Una-lijn (Unska pruga), die de rivier volgt van Novi Grad naar Knin. De aanleg begon in 1936, maar door de Tweede Wereldoorlog reden de eerste treinen pas in 1948. De lijn werd de kortste verbinding tussen Zagreb en Split en de belangrijkste toegangspoort tot de Dalmatische kust, met op het hoogtepunt tot 70 treinen per dag. In 1987 was ze volledig geëlektrificeerd.", "Dat veranderde met het uiteenvallen van Joegoslavië. In de oorlog van 1992 tot 1995 werden de bruggen over de Una vernield. De lijn ging in 1998 weer open, maar het is nooit meer een gewone treinroute geworden. Ze kruist negen keer de grens tussen Bosnië en Kroatië en wordt beheerd door drie verschillende spoorbedrijven, die moeilijk samenwerken. Het Kroatische deel tussen Martin Brod en Knin wordt sinds 2010 niet meer onderhouden, en ook het stuk van Bihać naar Martin Brod is nooit opnieuw geëlektrificeerd. Stations, rails en bruggen zijn in slechte staat. De laatste trein die hier reed, was in 2019 een chartertrein van Bihać naar Martin Brod. In 2026 praten Kroatië en Bosnië en Herzegovina weer over heropening, maar concrete plannen zijn er nog niet."]}}, {"src": "images/bosnie-en-herzegovina/martin-brod-treinbrug.webp", "alt": "De groene treinbrug bij de tunnel"}, {"src": "images/bosnie-en-herzegovina/martin-brod-tunnel.webp", "alt": "Uitzicht door de tunnel op de verlaten treinbrug"}, {"src": "images/bosnie-en-herzegovina/martin-brod-rivier.webp", "alt": "De Una onder de treinbrug"}, {"src": "images/bosnie-en-herzegovina/martin-brod-hangbrug.webp", "alt": "De houten hangbrug over de Una"}, {"src": "images/bosnie-en-herzegovina/martin-brod-kleine-watervallen.webp", "alt": "De kleine watervallen van de Una", "span": 6}],
        tips: ["Als je deze route volgt, kom je niet langs de betaalkiosk en kan je dus gratis naar de waterval (stand van zaken in 2026). Dit is niet illegaal: je volgt gewoon officiële wegen."],
        stravaEmbed: '<div class="strava-embed-placeholder" data-embed-type="route" data-embed-id="3465650689946590076" data-full-width="true" data-style="standard" data-surface-type="true" data-map-hash="12.92/44.48685/16.14203" data-from-embed="true" data-token="QW9MC-Lj-Ma9ODljw664Q_iIBd_0GEKhJM5WFhefzQg"></div>'
      },
      { t: "Jajce", text: "Een laatste stop op de terugweg, met de waterval midden in de stad.", ok: true },
      { t: "Blagaj", ok: false }
    ],
    practical: [
      { label: "Identiteit", t: "Belgische identiteitskaart volstaat.", ok: true },
      { label: "Rijbewijs", t: "Belgisch rijbewijs is geldig. Een internationaal rijbewijs is niet nodig.", ok: true },
      { label: "Stekker", t: "Belgische stekkers werken. Geen reisstekker nodig.", ok: true },
      { label: "Munt", t: "Bosnische mark (BAM), vast gekoppeld aan de euro: 1 euro is ongeveer 1,96 BAM.", ok: true },
      { label: "Cash", t: "Cash is koning. Zorg voor kleine biljetten. Op veel plaatsen kun je ook in euro betalen.", ok: true },
      { label: "Pinnen", t: "Kies bij het pinnen altijd voor BAM, niet voor euro." },
      { label: "Tol", t: "Op de snelweg A1 betaal je een paar euro bij de uitrit.", ok: true },
      { label: "Tanken", t: "Eerst tanken, daarna binnen betalen.", ok: true },
      { label: "Mobiel", t: "Geen EU-roaming. Regel mobiel internet vooraf.", ok: true }
    ],
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
