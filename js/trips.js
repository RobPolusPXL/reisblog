// Alle reizen van de reisblog. Eén reis kan meerdere bestemmingen (landen) bevatten.
//
// Een reis is het persoonlijke verhaal ("wij"), een bestemming (js/countries.js) de algemene gids ("je").
// `countries`: slugs van de bestemmingen. `days[].places`: slugs van plaatsen in die bestemming.
// Foto's: zet het bestand in /images/reizen/<reis>/ en vul `src` en `alt` in.

window.TRIPS = [
  {
    slug: "bosnie-juni-2026",
    title: "Acht dagen Bosnië: van Mostar naar de Una",
    countries: ["bosnie-en-herzegovina"],
    period: "21 – 28 juni 2026",
    nights: 7,
    with: "Joke",
    tagline: "Eerst Mostar en de watervallen, daarna de Una. Bijna elke dag 35 graden of meer.",
    cover: { src: "images/reizen/bosnie-juni-2026/dag1-stari-most.webp", alt: "De Stari Most in Mostar bij valavond" },
    intro:
      "Zeven nachten in Bosnië en Herzegovina, in twee delen: de eerste dagen in Mostar met watervallen en een via ferrata, daarna vier dagen in een houten huisje aan de Una. " +
      "Met een hittegolf, een rafttour, veel burek en een ijsjesteller die flink opliep.",
    route: ["Charleroi", "Sarajevo", "Mostar", "Kulen Vakuf", "Sarajevo"],
    days: [
      {
        title: "Reisdagje", date: "21 juni", temp: 38,
        places: ["mostar-de-oude-stad-en-de-stari-most"],
        text: [
          "Na het hevige onweer van de nacht stonden we om zes uur op om nog in te pakken, af te wassen en naar de luchthaven van Charleroi te vertrekken. Op een zondag vertrekken blijkt een aanrader: de rit verliep vlot.",
          "We parkeerden de auto en wandelden een half uurtje naar de luchthaven. Aan de bagage-incheck schoven we minstens een uur aan, gelukkig waren we ruim op tijd. In het vliegtuig zaten we niet naast elkaar: Joke op de tweede rij met extra beenruimte, Rob op een middenstoel tussen twee onbekenden.",
          "In Sarajevo was het al goed warm. De autoverhuur was op tien minuten te voet en op tien minuten geregeld. Daarna reden we naar Mostar over de M17, niet voor niets de mooiste weg van Bosnië genoemd: meren, rivier en bergen.",
          "Onderweg stopten we voor een ijsje en voor een traditionele burek, iets tussen filodeeg en dumplingdeeg, één met gehakt en één met spinazie. Lekker en erg vullend, en samen maar € 6.",
          "Ons verblijf bleek modern, proper en rustig, met een vriendelijke gastheer. Na een korte rust trokken we naar de oude stad van Mostar met de beroemde brug. Hoe donkerder het werd, hoe mooier het er werd. We zetten onze voeten in de ijskoude Neretva en kochten een waaiertje tegen de hitte. Alles kost hier ongeveer de helft van bij ons. De ijsjesteller staat na dag één op 2 voor Joke en 3 voor Rob."
        ],
        tips: ["Airco en rolluiken in de kamer maken een groot verschil bij 38 graden."],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag1-m17-weg.webp", alt: "De M17 tussen de rotswanden op weg naar Mostar" }, { src: "images/reizen/bosnie-juni-2026/dag1-meer-onderweg.webp", alt: "Een meer tussen de bergen onderweg naar Mostar" }, { src: "images/reizen/bosnie-juni-2026/dag1-burek.webp", alt: "Een burek op papier" }, { src: "images/reizen/bosnie-juni-2026/dag1-stari-most.webp", alt: "De Stari Most in Mostar bij valavond" }, { src: "images/reizen/bosnie-juni-2026/dag1-neretva-zonsondergang.webp", alt: "De Neretva en de oude stad van Mostar bij zonsondergang" }]
      },
      {
        title: "Watervallendagje", date: "22 juni", temp: 36,
        places: ["kravice-watervallen"],
        text: [
          "Na een goede nacht vertrokken we rond acht uur naar de Kravice-watervallen, een rit van ongeveer vijftig minuten, met airco in de auto. De huurauto was een Hyundai i20: niet te groot en ideaal voor de smalle straatjes.",
          "We waren vroeg, dus het was nog rustig. Eerst een broodje en een wrap, daarna een plekje voor onze handdoeken. Die grote microvezelhanddoeken van Action zijn een aanrader: groot, mooie kleuren en ze drogen snel. Daarna het water in, heerlijk bij bijna 39 graden.",
          "Voor de lunch namen we een traditionele schotel voor twee: zwaar en vet, met veel vlees, maar mals en sappig. Leuk om eens te proeven, niet voor elke dag.",
          "Na Kravice reden we door naar de Kocusa-waterval. Even mooi en erg koud water. De horeca ter plaatse was verzegeld en verlaten, maar na een korte wandeling vonden we een plekje waar we helemaal alleen zaten. Rob klauterde nog naar de bovenkant van de waterval, gelukkig zonder ongelukken.",
          "Na de winkel en een rustpauze wandelden we naar het centrum van Mostar, voor pasta en pizza met zicht op de brug, en een cocktail (een mojito en een Blue Lagoon). Morgen staat de via ferrata op het programma, zo vroeg mogelijk voor de warmte."
        ],
        tips: ["Kravice is betalend, Kocusa gratis.", "Kom vroeg naar Kravice: dan is het nog rustig."],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag2-kravice.webp", alt: "De Kravice-watervallen met zwemmers" }, { src: "images/reizen/bosnie-juni-2026/dag2-kravice-meer.webp", alt: "Het meer onder de Kravice-watervallen" }, { src: "images/reizen/bosnie-juni-2026/dag2-kocusa.webp", alt: "De Kocusa-waterval met iemand bovenaan" }]
      },
      {
        title: "Avontuurlijk dagje", date: "23 juni", temp: 38,
        places: ["via-ferrata-aan-de-fortica-in-mostar", "pocitelj"],
        text: [
          "We stonden op ons gemak op en reden richting de via ferrata. Onderweg stopten we bij de Bingo, een supergrote winkel waar ze alles hebben, een beetje zoals de Makro maar zonder Makrokaart. Eten en drinken ingeslagen en verder.",
          "Eerst reden we helemaal naar boven en liepen we even over de glazen brug, niet super spectaculair. In het horecazaakje huurden we een klimgordel en een helm. Daarna zochten we de weg naar het startpunt en parkeerden de auto. Het deed ons denken aan onze avonturen in de Dolomieten: de route is aangeduid met rode bollen op de rotsen.",
          "Bij het startpunt moesten we even slikken: dat is heel steil. Na een tijdje werd het erg uitdagend, op ijzeren bogen bijna verticaal omhoog klauteren. Joke merkte dat de kracht in haar armen er niet was en besloot terug naar beneden te gaan. Rob was het lastige stuk al voorbij en durfde niet meer terug. Omdat we allebei bereik hadden, splitsten we op en belden we elkaar later.",
          "We wandelden allebei naar het punt waar Joke via een minder uitdagende route weer omhoog kon. Dat was nog een pittige klim in 39 graden, met blaren op de handen van de ijzeren kabels. Joke nam even een verkeerd pad, kwam vast te zitten en moest terug naar beneden. Toch klom ze nog naar boven voor de hoge brug, en dat was geweldig. Via de Devil's Stairs gingen we terug naar beneden.",
          "Na een douche en rust reden we naar Počitelj, een middeleeuws stadje met ruïnes van forten. Op de terugweg stopten we bij Blagaj Tekija, een historisch derwisjklooster. We wandelden langs de rivier, maar gingen niet tot bij het klooster: schouders en knieën moeten bedekt zijn, en daar was het te warm voor."
        ],
        tips: ["Voor Blagaj Tekija moeten schouders en knieën bedekt zijn.", "De ijzeren kabels van de via ferrata geven blaren op je handen."],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag3-mostar-letters.webp", alt: "De Mostar-letters boven de stad" }, { src: "images/reizen/bosnie-juni-2026/dag3-hangbrug.webp", alt: "Een klimmer op de hangbrug van de via ferrata" }, { src: "images/reizen/bosnie-juni-2026/dag3-via-ferrata-wand.webp", alt: "Klimmer op de rotswand van de via ferrata" }, { src: "images/reizen/bosnie-juni-2026/dag3-pocitelj-toren.webp", alt: "De toren van Počitelj tussen de bomen" }, { src: "images/reizen/bosnie-juni-2026/dag3-pocitelj-moskee.webp", alt: "De moskee van Počitelj" }]
      },
      {
        title: "Naar de Una", date: "24 juni", temp: 34,
        places: [],
        text: [
          "Een reisdag. Na het inpakken laadden we de auto en begonnen we aan 4,5 uur rijden door prachtige berglandschappen, met af en toe een stop. Wat een mooi land.",
          "Het was even zoeken naar de juiste plek, maar toen we er waren: een houten huisje vlak aan de Una. Prachtig. Helaas geen airco, dus we gaven ons luxeleventje op. De Una is met 12 graden te koud om in te plonsen. Voor het avondeten wandelden we naar een restaurantje iets verderop, weer met een lokale vleesspecialiteit. In het begin is die lekker, maar na tien happen begint het vettige en simpele te steken."
        ],
        tips: [],
        photos: []
      },
      {
        title: "Wandeldagje", date: "25 juni", temp: 35,
        places: ["martin-brod", "kulen-vakuf"],
        text: [
          "Het koelt hier 's nachts goed af, waardoor we zelfs zonder airco goed sliepen. De muggeninvasie bleef uit, al gebruikten we voor de zekerheid deet. Het werd een slome ochtend.",
          "Daarna reden we een kwartier naar het Nationaal Park voor een wandeling, maar daar beseften we dat we nergens een winkel waren tegengekomen en dus geen eten hadden. Terug naar het dorpje dan, waar de dichtstbijzijnde winkel erg klein was en niets eetbaars had. We hebben ook geen keukentje. Dus ontbeten we in het restaurant waar we de dag ervoor gegeten hadden, en dat was een goede keuze: een omelet en een traditioneel gerecht dat lijkt op holle smoutebollen met jam, huttenkaas en gewone kaas. Rob waagde zich aan een Bosnische koffie, niet echt bijzonder.",
          "Tijdens het ontbijt zagen we mensen staan wachten aan een deur met een open raam bovenaan. Dat bleek de bakkerij te zijn: de keuken van het restaurant dient ook als plaatselijke bakker.",
          "Met volle magen reden we terug naar het startpunt. De wandeling begon bij een mooie waterval en liep langs de Una omhoog, met een verlaten treinbrug op de terugweg naar beneden. Leuke wandeling, weer warm.",
          "Na een dutje waagde Joke zich aan een plons in de Una, 12 tot 14 graden en een echte energieboost. Voor Rob was het te koud. Voor het avondeten gingen we naar een ander restaurantje (er zijn er drie), uitgebaat door de eigenaars van ons huisje. Weer typisch Bosnisch, en we zijn het eerlijk gezegd een beetje beu. Het was een moeizamere dag, met voor niets op en af rijden, maar dat hoort erbij.",
          "In het dorp ligt een moskee waar vijf keer per dag wordt opgeroepen tot gebed, de eerste keer om vier uur 's nachts. En Joke had na de via ferrata zoveel spierpijn in de bovenbenen dat naar beneden wandelen en gaan zitten een uitdaging was."
        ],
        tips: ["In Kulen Vakuf is bijna geen winkel: koop eten in voordat je naar het park rijdt."],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag5-martin-brod-waterval.webp", alt: "De watervallen van Martin Brod" }, { src: "images/reizen/bosnie-juni-2026/dag5-treinbrug.webp", alt: "De verlaten treinbrug aan de Una" }, { src: "images/reizen/bosnie-juni-2026/dag5-canyon.webp", alt: "De Una in een canyon met een treinbrug" }, { src: "images/reizen/bosnie-juni-2026/dag5-boot-op-de-una.webp", alt: "Een houten boot op het turkooizen water van de Una" }, { src: "images/reizen/bosnie-juni-2026/dag5-bosnische-koffie.webp", alt: "Bosnische koffie op een koperen schaal" }],
        hike: {"label":"Wandeling Martin Brod","km":5.7,"tijd":"1 u 38 min","omhoog":139,"hoogste":407,"route":[[44.494131,16.141038],[44.49413,16.141359],[44.494042,16.141681],[44.494013,16.142034],[44.493957,16.142367],[44.493778,16.142556],[44.493548,16.142746],[44.493299,16.14287],[44.493076,16.142964],[44.4928,16.143028],[44.492526,16.143141],[44.492325,16.14337],[44.49218,16.143627],[44.491949,16.143804],[44.491712,16.143932],[44.491478,16.143963],[44.491239,16.144052],[44.490983,16.144043],[44.49071,16.144005],[44.490459,16.143942],[44.490228,16.144045],[44.489986,16.144007],[44.489899,16.143656],[44.48976,16.14336],[44.489578,16.143095],[44.489422,16.14283],[44.489252,16.142518],[44.489068,16.142297],[44.488877,16.142261],[44.488674,16.142397],[44.488442,16.142524],[44.48817,16.142517],[44.487943,16.14264],[44.487727,16.142824],[44.487725,16.142805],[44.487854,16.143015],[44.487808,16.143268],[44.487669,16.143551],[44.487478,16.143761],[44.487345,16.144039],[44.487288,16.144299],[44.487386,16.144675],[44.487284,16.144918],[44.487096,16.145157],[44.486891,16.1453],[44.486716,16.145502],[44.486439,16.145575],[44.4862,16.145699],[44.485982,16.145783],[44.485731,16.145918],[44.485504,16.14601],[44.485238,16.146104],[44.48498,16.146202],[44.484777,16.146275],[44.484526,16.146196],[44.484306,16.146111],[44.48407,16.145852],[44.483848,16.145685],[44.483615,16.14559],[44.483375,16.145542],[44.48314,16.145423],[44.482995,16.145121],[44.483117,16.144836],[44.483057,16.14455],[44.482915,16.14441],[44.482701,16.14439],[44.48265,16.144633],[44.482301,16.144609],[44.481535,16.144261],[44.481363,16.143951],[44.481237,16.143709],[44.481058,16.14349],[44.481188,16.143712],[44.480966,16.14372],[44.480747,16.143507],[44.480551,16.143249],[44.480367,16.143243],[44.480236,16.143025],[44.480002,16.142871],[44.479703,16.142505],[44.479538,16.142297],[44.479531,16.142122],[44.479722,16.1424],[44.479847,16.142537],[44.480025,16.142558],[44.480014,16.142303],[44.480213,16.142255],[44.480046,16.142121],[44.479885,16.141994],[44.47983,16.141833],[44.479977,16.141706],[44.479922,16.141575],[44.480012,16.141555],[44.480209,16.141503],[44.480195,16.141699],[44.480395,16.141949],[44.480539,16.142268],[44.480667,16.142547],[44.480949,16.142647],[44.481329,16.142656],[44.481535,16.142639],[44.481814,16.142838],[44.482045,16.142953],[44.482329,16.143099],[44.482544,16.143067],[44.48282,16.142999],[44.48303,16.143062],[44.483259,16.143175],[44.483518,16.143088],[44.483717,16.142888],[44.483953,16.142689],[44.48411,16.142437],[44.484201,16.142085],[44.484368,16.141819],[44.484537,16.141551],[44.484675,16.141279],[44.484695,16.140906],[44.484757,16.140613],[44.484975,16.140361],[44.485178,16.140093],[44.485393,16.139784],[44.485604,16.139671],[44.485679,16.139381],[44.48585,16.139073],[44.486046,16.138832],[44.486237,16.13853],[44.486427,16.138306],[44.486608,16.138106],[44.486825,16.13797],[44.487061,16.138146],[44.487288,16.138394],[44.487466,16.138554],[44.487703,16.138754],[44.487953,16.138898],[44.488099,16.139208],[44.488008,16.139437],[44.487901,16.139763],[44.488003,16.140025],[44.488209,16.140303],[44.488362,16.140612],[44.488496,16.140918],[44.488581,16.141168],[44.488752,16.141522],[44.488901,16.141849],[44.489058,16.142103],[44.489215,16.14236],[44.4894,16.142745],[44.489686,16.143226],[44.489868,16.143527],[44.489965,16.143821],[44.490152,16.143985],[44.490421,16.143987],[44.490682,16.143989],[44.490936,16.144026],[44.491192,16.144061],[44.491437,16.144043],[44.491673,16.143927],[44.491861,16.143779],[44.492142,16.143554],[44.492287,16.143317],[44.492496,16.143107],[44.49275,16.14297],[44.492983,16.142912],[44.493267,16.14285],[44.493516,16.142755],[44.493694,16.142624],[44.493895,16.14226],[44.493978,16.141963],[44.494002,16.141645],[44.494067,16.141183],[44.494069,16.140888]],"alt":[324,322,321,320,319,319,318,319,319,319,320,321,323,326,329,332,333,333,335,337,339,341,340,339,338,337,337,337,341,343,345,346,347,345,343,342,342,343,350,354,354,355,357,358,361,363,364,361,360,361,363,364,363,362,361,362,361,360,360,360,361,361,361,362,362,363,367,370,383,390,393,398,401,407,407,404,404,404,407,405,402,400,399,398,396,399,396,397,397,397,390,391,390,384,376,369,369,371,377,372,369,369,369,369,369,368,367,367,366,366,366,364,365,364,365,365,365,366,366,366,367,369,371,373,376,378,380,382,383,383,382,379,376,375,373,370,368,365,363,361,358,354,353,352,349,346,343,343,343,341,339,337,334,335,335,336,336,337,338,339,341,340,340,341,342,343,340,338,337,336,335,332,330,326,324,323,321,320,319,319,318,317,317,318,318,318,319]}
      },
      {
        title: "Raftdagje", date: "26 juni", temp: 36,
        places: [],
        text: [
          "Tijd voor actie. De dag ervoor hadden we een rafttour geboekt, dus de wekker ging en om half negen vertrokken we voor een rit van ongeveer 45 minuten naar Bihać. Onderweg haalden we nog eten en drinken.",
          "We moesten om tien uur zijn, maar vertrokken uiteindelijk om half elf met het busje, samen met drie andere (Bosnische) rafters, later aangevuld met nog drie. Iedereen sprak dezelfde taal als de gids: wij waren de enige anderstaligen. Een gordel hoeft hier niet per se, maar wij deden hem toch om. In het busje was plaats voor negen, we zaten er met tien in.",
          "Na uitleg over het peddelen en hoe je je voeten onder een touw steekt, gingen we het water op. Bij de eerste waterval, ongeveer 25 meter hoog, stapten we uit en liepen een stuk te voet. Onze gids gooide de boot van bovenaan naar beneden en dook er achteraan. Een stukje verder stapten we weer in en begon de echte tocht.",
          "Bij de eerste waterval lag Joke meteen uit de boot en in het water. Iedereen hielp haar terug aan boord. Daarna verdeelden we het gewicht anders en bleef ze zitten. Later viel er nog iemand uit de boot, dus ze was niet de enige. Het was een leuke tocht met spannende watervalletjes, een toffe sfeer en pauzes. Op een van de pauzes sprongen we van een rots, die hoger bleek dan op de filmpjes.",
          "We zaten iets meer dan vier uur op het water, met heen- en terugrit een hele daguitstap. Dankzij onze zonnecrème waren wij de enigen die niet verbrand waren: één keer insmeren voor vertrek was genoeg. Daarna aten we in Bihać nog een pasta pesto en een pizza met pancetta, om half zes voor het eerst een echte maaltijd."
        ],
        tips: ["Samen betaalden we € 110 voor de rafttour.", "Je rijdt ongeveer 45 minuten van Kulen Vakuf naar Bihać."],
        photos: []
      },
      {
        title: "Rustig-aan-dagje", date: "27 juni", temp: 36,
        places: ["strbacki-buk"],
        text: [
          "Na alle avonturen hadden we nood aan rust: een voormiddag uitslapen en bijkomen in het huisje. 's Middags 'ontbeten' we in het restaurantje, hetzelfde als twee dagen eerder.",
          "Daarna wandelden we omhoog naar het oude fort dat we vanuit ons huisje zagen. Een hete wandeling, veel bergop voor eigenlijk weinig indrukwekkend uitzicht, al hadden we onze beweging gehad. Daarna de rivier in aan het huisje, waar het water voor Rob nog steeds te koud was.",
          "De rest van de dag deden we rustig aan, met een serie en wat gsm. Dit was de warmste dag tot nu toe. We gingen eten in hetzelfde zaakje als altijd, deze keer allebei een burger met wedges.",
          "Na het eten reden we nog twintig minuten naar de waterval waar onze gids de dag ervoor vanaf was gesprongen. Prachtig en zalig rustig. Op de terugweg zagen we vuurvliegjes, een magische afsluiter van onze vakantie."
        ],
        tips: ["Na 20 uur zijn de bezoekers weg en is de Štrbački buk heerlijk rustig."],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag7-strbacki-buk.webp", alt: "De Štrbački buk in de avond" }, { src: "images/reizen/bosnie-juni-2026/dag7-una-avond.webp", alt: "De Una tussen de bergen bij zonsondergang" }]
      },
      {
        title: "Terug naar huis", date: "28 juni", temp: null,
        places: [],
        text: [
          "We vertrokken vroeg, want we hadden nog een hele rit voor de boeg tot aan de luchthaven van Sarajevo. Onderweg stopten we in Jajce, met de waterval midden in de stad."
        ],
        tips: [],
        photos: [{ src: "images/reizen/bosnie-juni-2026/dag8-jajce.webp", alt: "De waterval midden in Jajce" }, { src: "images/reizen/bosnie-juni-2026/dag8-sarajevo.webp", alt: "Rob bij de Sarajevo-letters voor de luchthaven" }]
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
        photo: { src: "images/bosnie-en-herzegovina/villa-olea-mostar.webp", alt: "De woonkamer en slaapkamer van Villa Olea in Mostar" }
      },
      {
        place: "Kulen Vakuf",
        name: "Bungalov Cozy Una",
        nights: 4,
        text: "Een bungalow in het rustige Kulen Vakuf, vlak bij het Nationaal Park Una.",
        photo: { src: "images/bosnie-en-herzegovina/bungalov-cozy-una-kulen-vakuf.webp", alt: "Bungalov Cozy Una in Kulen Vakuf met houten veranda en tuin" }
      }
    ],
    costPerDay: [
      { label: "Eten, boodschappen en slapen", amount: "€ 76", sub: "per dag, voor ons tweeën" },
      { label: "Verblijf", amount: "€ 48", sub: "gemiddeld per nacht, voor ons tweeën" }
    ],
    costNote: "Daarmee zitten we iets onder het gemiddelde van ongeveer € 90 per dag dat Budget Your Trip voor Bosnië opgeeft.",
    costSource: { t: "Budget Your Trip: Bosnië en Herzegovina", url: "https://www.budgetyourtrip.com/bosnia-and-herzegowina" }
  }
];
