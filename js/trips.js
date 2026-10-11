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
        places: ["kravice-watervallen","kocusa"],
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
        places: ["via-ferrata-fortica-in-mostar", "pocitelj"],
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
      },
      {
        title: "Raftdagje", date: "26 juni", temp: 36,
        places: ["raften-op-de-una"],
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
  },
  {
    "slug": "slowakije-polen-september-2026",
    "title": "Zeven nachten Slowakije en Polen: van de Tatra naar Energylandia",
    "countries": [
      "slowakije",
      "polen"
    ],
    "period": "6 – 13 september 2026",
    "nights": 7,
    "with": "Joke",
    "tagline": "Eerst over de boomtoppen en door de Hoge Tatra, daarna twee dagen pretpark en een stille dag in Auschwitz.",
    "cover": {
      "src": "images/slowakije/bachledova-dolina-looppad-en-tatra.webp",
      "alt": "Het houten looppad kronkelt door het bos, met de Belianske Tatry erachter"
    },
    "intro": "Zeven nachten in twee landen: eerst een paar dagen wandelen in het noorden van Slowakije, daarna naar Polen voor twee dagen Energylandia, een nacht in een huifkar en een bezoek aan Auschwitz-Birkenau. Met een boomkruinenpad, een lange bergdag naar de meren van de Hoge Tatra en een regendag in een pretpark.",
    "route": [
      "Charleroi",
      "Bachledova dolina",
      "Štrbské Pleso",
      "Suchá Belá",
      "Zator",
      "Oświęcim"
    ],
    "days": [
      {
        "title": "Reisdag en het Boomkruinenpad",
        "date": "6 september",
        "temp": 19,
        "places": [
          "boomkruinenpad-bachledova-dolina"
        ],
        "text": [
          "Om half drie ging de wekker, want vroeg vertrekken betekent een rustige baan. Rob zette Joke met alle bagage af bij de luchthaven en parkeerde de auto, waarna hij te voet naar de incheckbalie kwam, na een salto bij het oversteken. Gelukkig zonder schade. Aan de bagage-incheck stond geen rij en we zagen de zon opkomen vanop de tarmac. De vlucht was rustig, op wat turbulentie bij het landen na.",
          "In het zuiden van Polen haalden we de huurauto op, voor tijd want we waren vroeger geland dan voorzien. Een drietal uur later doken de Slowaakse grens en de bergen op.",
          "Onderweg naar ons appartement stopten we bij het Boomkruinenpad in Bachledova dolina. De kabellift lieten we liggen: we wandelden te voet naar boven, een mooie, soms steile wandeling met prachtig uitzicht op de bergen. Even zoeken naar waar je het ticket voor de wandeling koopt, maar ook dat lukte.",
          "Ons appartement was heel mooi. Na een stop in de Lidl kookten we snel iets, en daarna was er nog tijd voor een saunatje."
        ],
        "tips": [
          "Je koopt het ticket voor het Boomkruinenpad niet aan de kabellift: vraag het even na.",
          "Vroeg vertrekken naar de luchthaven: dan is het rustig op de baan."
        ],
        "photos": [
          {
            "src": "images/slowakije/bachledova-dolina-looppad-door-het-bos.webp",
            "alt": "Het houten looppad door het bos"
          },
          {
            "src": "images/slowakije/bachledova-dolina-net-op-de-toren.webp",
            "alt": "Het net op de toren"
          },
          {
            "src": "images/slowakije/bachledova-dolina-uitzicht-vanaf-de-toren.webp",
            "alt": "Uitzicht vanaf de toren"
          }
        ]
      },
      {
        "title": "Hiken en een beetje afzien",
        "date": "7 september",
        "temp": 23,
        "places": [
          "solisko-en-de-wahlenbergove-plesa"
        ],
        "text": [
          "We sliepen uit en maakten ons op ons gemak klaar voor een hikedag. Eerst naar de Lidl voor eten en drinken, met lekkere pistachecroissants, en dan door naar Štrbské Pleso, een meer waar verschillende wandelingen naar de bergen beginnen.",
          "We namen de stoeltjeslift naar boven en deden een eerste hike naar een kruis en een uitkijkpunt. Pittig! Wat ons opviel: veel oudere mensen met Nordic walking sticks. Dat zijn we elders niet zo tegengekomen.",
          "Na een hapje begonnen we aan de tweede, langste hike. Nu gingen we echt de bergen in. De mensen die de route andersom deden, zagen er serieus moe uit. Zuurtjes gaven ons energieboosts en we haalden de top. Onderweg zagen we berggeitjes en moesten we serieus klimmen en dalen. De laatste kilometers legden we af in het donker, met de zaklamp van de gsm.",
          "Daarna was het bekomen en nog even de sauna in, want onze lijfjes hadden het zwaar. Het weer was prachtig, en in de bergen is het zo stil dat je niets hoort."
        ],
        "tips": [
          "Neem een zaklamp mee: wij waren pas in het donker terug beneden."
        ],
        "photos": [
          {
            "src": "images/slowakije/solisko-meer-met-berg.webp",
            "alt": "Een bergmeer in de Hoge Tatra"
          },
          {
            "src": "images/slowakije/solisko-bij-het-kruis.webp",
            "alt": "Bij het kruis op Predné Solisko"
          },
          {
            "src": "images/slowakije/solisko-meer-met-gems.webp",
            "alt": "Een gems bij het meer"
          }
        ]
      },
      {
        "title": "Suchá Belá en een restdag",
        "date": "8 september",
        "temp": 28,
        "places": [
          "sucha-bela"
        ],
        "text": [
          "Na de zware dag luisterden we naar onze tere lijfjes en deden we het rustig aan, niet zoals gepland om acht uur aan de volgende wandeling beginnen. Drukte? Die viel supergoed mee. Het weer ook: de hele dag zon en 28 graden. Blij dat we dit weer hadden en niet de dag voordien bij die grote klim.",
          "Het was een prachtige wandeling met leuke paadjes, ladders en klimstukjes, waar je innerlijke kind naar boven komt. De klim van de dag voordien zat nog in onze benen, dus we waren blij na ruim 10 kilometer terug bij de auto te zijn.",
          "Onderweg naar het appartement namen we twee liftende Polen mee, twee jongens van begin twintig die we tijdens de wandeling al een paar keer waren tegengekomen. In de late namiddag hielden we platte rust."
        ],
        "tips": [],
        "photos": [
          {
            "src": "images/slowakije/sucha-bela-houten-ladder-in-de-kloof.webp",
            "alt": "Een houten ladder in de kloof"
          },
          {
            "src": "images/slowakije/sucha-bela-smalle-kloof.webp",
            "alt": "De smalle kloof"
          },
          {
            "src": "images/slowakije/sucha-bela-waterval-met-paal.webp",
            "alt": "Een waterval in de kloof"
          }
        ]
      },
      {
        "title": "Naar Polen en Western Camp",
        "date": "9 september",
        "temp": 31,
        "places": [
          "western-camp-resort"
        ],
        "text": [
          "We waren vroeg wakker en net op tijd om Robs resultaten te checken: geslaagd! Supertrots. Daarna pakten we in en vertrokken we naar Polen, een prachtige, warme dag en een vlotte rit.",
          "Onze kamer was al sneller klaar dan voorzien. Het lijkt alsof je in een westernfilm rondloopt: we sliepen in een westernwagon, een soort glamping. Eerst stuurden ze ons naar de verkeerde wagon met twee stapelbedden, maar dat werd snel rechtgezet en we kregen een queensize bed. Het terrein en de sanitaire blokken zijn supernet. Er zijn ook tipi's en huisjes op het water.",
          "We plonsden in het buitenzwembad (28 graden) en lagen nog even op de ligbedden. Daarna een cocktailtje en eten, niet hoogstaand: Rob een soort fish and chips en Joke ribbetjes. Om 21 uur zaten we als enigen klaar voor de openluchtfilm, in het Pools met Engelse ondertitels. Na een halfuurtje vonden we de film niet zo goed en gingen we terug naar onze wagon."
        ],
        "tips": [
          "Het terrein en de sanitaire blokken zijn heel proper."
        ],
        "photos": [
          {
            "src": "images/polen/western-camp-huifkarren.webp",
            "alt": "Huifkarren van Western Camp"
          },
          {
            "src": "images/polen/western-camp-zwembad.webp",
            "alt": "Uitzicht vanaf een ligbed aan het zwembad"
          },
          {
            "src": "images/polen/western-camp-terras-in-de-avond.webp",
            "alt": "Het verlichte terras in de avond"
          }
        ]
      },
      {
        "title": "Een adrenalinedag in Energylandia",
        "date": "10 september",
        "temp": null,
        "places": [
          "energylandia"
        ],
        "text": [
          "Na een goede nachtrust schoven we aan bij het ontbijtbuffet, handig voor een dag pretparkplezier. De wagon is 's morgens verrassend donker, waardoor we niet bij de eerste lichtstralen wakker worden.",
          "Omdat we op de verkeerde plaats stonden te wachten, zat het treintje vanuit het kamp vol, dus liepen we maar te voet: gelukkig maar een kilometertje. Een kwartier voor opening waren we er, zodat we de opening zagen. We begonnen meteen met een binnenkomer, en toen waren we echt wakker.",
          "Daarna volgde een hele dag vol adrenaline. Wat een groot park, en de wachttijden vielen goed mee: maximaal 20 minuten, en dat was eerder een uitzondering. We deden die dag 15 ritten, een record voor ons. Om 18 uur sloot het park en sloten wij af met een tweede en laatste ritje in de fijnste achtbaan.",
          "We konden nog net mee met het treintje naar het kamp: Rob op een bankje bij een paar kinderen en Joke vooraan in de locomotief naast de chauffeur, die geen Engels sprak. Daarna nog even rusten, een saunatje en zwemmen. Het weer was ideaal, maar voor de volgende twee dagen was veel regen voorspeld."
        ],
        "tips": [
          "Wees een kwartier voor opening aanwezig: dan zie je de opening en kan je meteen beginnen.",
          "Het treintje vanuit het kamp zit snel vol. Wacht op de juiste plaats of loop de kilometer."
        ],
        "photos": [
          {
            "src": "images/polen/energylandia-hoofdingang.webp",
            "alt": "De hoofdingang van Energylandia"
          },
          {
            "src": "images/polen/energylandia-reuzenrad-en-achtbaan.webp",
            "alt": "Een reuzenrad en achtbaan"
          }
        ]
      },
      {
        "title": "Regendagje",
        "date": "11 september",
        "temp": null,
        "places": [],
        "text": [
          "Het thema van de dag was regen, regen en nog eens regen. Dat hield ons niet tegen om weer de adrenaline op te zoeken. Gisteren deden we 15 ritten, vandaag 9, een rustigere dag. Rob houdt alle statistieken van onze pretparkbezoeken bij.",
          "Er waren nog minder bezoekers dan de dag ervoor, maar daardoor lieten ze vaak maar één trein per attractie rijden, waardoor de wachttijden toch langer waren. In andere pretparken laten ze altijd minstens twee treinen rijden. Een aantal toppers deden we op de eerste rij, waarbij we een veiligheidsbril moesten opzetten.",
          "Tussendoor gingen we een gebakje eten om op te drogen en op te warmen. Middageten in het park, 's avonds in het restaurant van het kamp, waar Joke een Pornstar Martini dronk en het eten en dessert lekker waren. Joke oefende ook nog even voor Halloween. 's Nachts belde Rob de security van het verblijf, omdat er tot een uur of twee in de nacht mensen aan het roepen, fluiten en zingen waren. Daarna werd het gelukkig stiller."
        ],
        "tips": [
          "Bij sommige attracties moet je op de eerste rij een veiligheidsbril opzetten.",
          "Bij regen zijn er minder bezoekers, maar vaak rijdt er maar één trein per attractie."
        ],
        "photos": [
          {
            "src": "images/polen/energylandia-wachttijdenbord.webp",
            "alt": "Het wachttijdenbord in het park"
          },
          {
            "src": "images/polen/energylandia-pompoenspook.webp",
            "alt": "Een pompoenspook in het park"
          }
        ]
      },
      {
        "title": "Auschwitz-Birkenau",
        "date": "12 september",
        "temp": 17,
        "places": [
          "auschwitz-birkenau"
        ],
        "text": [
          "We stonden vroeg op om in te pakken, te ontbijten, uit te checken en naar Auschwitz te vertrekken. Alles liep vlot, alleen stonden we op de verkeerde site: we waren de parking van Auschwitz-Birkenau opgereden en onze rondleiding begon aan Auschwitz I. Snel een shuttlebusje betaald en naar de juiste plaats gesneld. Onze groep was al weg, maar we haalden ze in en misten niet al te veel. We kregen een ontvanger en koptelefoon om de gids te verstaan, en door flarden van een mannenstem merkten we dat we dichter bij de groep kwamen.",
          "Het was een leerrijke ervaring, gelukkig niet te overweldigend. Wel confronterend om alle spullen te zien liggen: schoenen, brillen, reiskoffers, menselijk haar. Daardoor besef je hoeveel mensen er effectief gestorven zijn, anders gaat het over aantallen die moeilijk te bevatten zijn. In Auschwitz I hadden we geen nood om foto's te maken.",
          "Na de rondleiding bracht een bus ons naar Birkenau, een veel grotere, weidsere site zonder foto's of spullen, minder tentoonstellingachtig en groener (nu, toen niet). Daar namen we wel één foto van de poort en het treinspoor, niet geposeerd zoals sommigen deden. Het was een goede beslissing om met gids te gaan, anders hadden we veel info gemist.",
          "Daarna reden we naar onze laatste slaapplaats. We waren moe. Na inchecken en platte rust bekwamen we van een zalige vakantie: we geven allebei 9/10. Nog een burger in een afgelegen zaakje, en onderweg werden we getrakteerd op een mooie zonsondergang."
        ],
        "tips": [
          "Check goed op welke site je rondleiding start: Auschwitz I en Birkenau liggen een eind uit elkaar.",
          "Met gids bezoeken is een goede keuze."
        ],
        "photos": [
          {
            "src": "images/polen/auschwitz-sporen-naar-de-poort.webp",
            "alt": "De sporen naar de poort van Birkenau"
          }
        ]
      },
      {
        "title": "Terug naar huis",
        "date": "13 september",
        "temp": null,
        "places": [],
        "text": [
          "Vroeg naar de luchthaven om terug te keren naar ons Belgenlandje."
        ],
        "tips": [],
        "photos": []
      }
    ],
    "stays": [
      {
        "place": "Zator",
        "name": "Western Camp Resort",
        "nights": 3,
        "text": "Een Wild West-resort vlak bij Energylandia, waar wij in een huifkar sliepen.",
        "photo": {
          "src": "images/polen/western-camp-huifkar.webp",
          "alt": "Een huifkar met houten trap"
        }
      }
    ]
  },
  {
    "slug": "florida-bahamas-lissabon-februari-2026",
    "title": "Van Florida naar de Bahama's en Lissabon",
    "countries": [
      "verenigde-staten",
      "bahamas",
      "portugal"
    ],
    "period": "1 – 13 februari 2026",
    "nights": 11,
    "with": "Joke",
    "tagline": "Pretparken in Orlando, een cruise naar de Bahama's en een laatste dag in Lissabon. Het was veel kouder dan verwacht.",
    "cover": {
      "src": "images/reizen/februari-2026/dag3-iron-gwazi.webp",
      "alt": "De ingang van de achtbaan Iron Gwazi in Busch Gardens"
    },
    "intro": "Elf nachten in Florida, op de Bahama's en in Lissabon. We vlogen via Lissabon naar Miami, trokken naar Orlando voor de pretparken, gingen aan boord van de MSC Seashore voor een korte cruise naar Nassau en Ocean Cay, en eindigden in Miami en Lissabon. Met een koudegolf, een zeekoe tijdens het snorkelen en een basketbalmatch van de Miami Heat.",
    "route": [
      "Düsseldorf",
      "Lissabon",
      "Miami",
      "Orlando",
      "Cape Canaveral",
      "Nassau",
      "Ocean Cay",
      "Miami",
      "Lissabon"
    ],
    "days": [
      {
        "title": "Reisdag",
        "date": "1 februari",
        "temp": 14,
        "places": [],
        "text": [
          "We vertrokken om kwart voor negen van huis. Eerst tanken, dan het afval en de etensresten wegbrengen en nog even langs de winkel voor een kleine voorraad chocolade. Daarna reden we naar Düsseldorf, een vlotte rit. Op de parking vonden we een plekje aan de zijkant, zodat er maar langs één kant iemand naast ons kan staan. Een belletje naar de shuttledienst en twee minuten later zaten we in het busje naar de luchthaven.",
          "Door de douane ging vlot, alleen was Rob zijn e-reader uit zijn rugzak vergeten te halen. De vlucht vertrok te vroeg, waardoor we twintig minuten vroeger dan voorzien in Lissabon waren. Daar liepen we vlot door de digitale paspoortcontrole en wachtten we een tweetal uurtjes op de volgende vlucht.",
          "Die vertrok met een uur vertraging voor een lange vlucht naar Miami. De Amerikaanse douane verliep goed. Daarna bereikten we de huurauto eerst te voet, dan met de lift en dan met de zelfrijdende trein. Het was zeer rustig op de baan naar het hotel, al was dat niet onze favoriete plek: een smoezelig hotel waar we maar één nachtje bleven. De jetlag was al voelbaar."
        ],
        "tips": [
          "Bij een transfer in Lissabon: reken op een wachttijd van een paar uur tussen de vluchten."
        ],
        "photos": [
          {
            "src": "images/reizen/februari-2026/dag1-welcome-to-miami.webp",
            "alt": "Het welkomstbord 'Welcome to Miami' op de luchthaven"
          }
        ]
      },
      {
        "title": "Naar Orlando",
        "date": "2 februari",
        "temp": 12,
        "places": [],
        "text": [
          "Na een nacht met weinig slaap (hello jetlag en een ijskoude kamer) checkten we uit en reden we naar Orlando. Die rit duurde uiteindelijk meer dan vijf uur en we hadden even genoeg van onderweg zijn.",
          "Het weerbericht waarschuwde voor extreme koude, hier zes graden. Koude temperaturen zijn ze hier duidelijk niet gewoon. Het was gisteren en vandaag veel kouder dan normaal in februari. Onderweg reden we veel door the middle of nowhere: ranches en lange uitgestrekte wegen waar niet veel te zien was.",
          "Onze tussenstop was bij Wendy's, de eerste hamburgerketen die we niet kennen uit België. Geen hoogvlieger qua smaak. Aldi's hebben ze hier ook, gelijkaardig aan thuis met iets andere producten.",
          "Het hotel waar we de komende nachten bleven, zag er veel beter uit dan het vorige. We moesten alleen nog kiezen in welk bed we zouden slapen."
        ],
        "tips": [
          "Een rit van Miami naar Orlando duurt ruim vijf uur. Plan er een tussenstop voor in."
        ],
        "photos": [
          {
            "src": "images/reizen/februari-2026/dag2-zonsondergang-orlando.webp",
            "alt": "De zon zakt achter de palmbomen bij ons hotel in Orlando"
          },
          {
            "src": "images/reizen/februari-2026/dag2-hotel-avond.webp",
            "alt": "Het hotel in Orlando bij valavond"
          },
          {
            "src": "images/reizen/februari-2026/dag2-hotel-toren.webp",
            "alt": "De verlichte toren van het hotel in de avond"
          }
        ]
      },
      {
        "title": "Busch Gardens",
        "date": "3 februari",
        "temp": 17,
        "places": [
        "busch-gardens-tampa-bay"
      ],
        "text": [
          "Een dagje pretpark én beter weer. Het hotel serveerde ontbijt met toast, scrambled eggs, sausage, cereal en wafelbeslag uit een machine, waarna je zelf je wafels bakt in een wafelijzer. Niks speciaals, maar een ok ontbijt.",
          "Daarna reden we anderhalf uur naar Tampa. We waren een halfuur voor opening ter plaatse, de tiende auto op de parking. Het park was superrustig: heel de dag schoven we eigenlijk nergens aan. Het langste dat we wachtten was een kwartiertje omdat we graag op de eerste rij wilden zitten. Eén keer konden we gewoon blijven zitten voor een tweede ronde.",
          "Busch Gardens combineert een pretpark met een dierentuin, dus Rob kon zijn twee favorieten combineren: achtbanen en giraffen spotten. In de vogelkooi vloog er ineens een vogel op Jokes schouder, waar hij heel lang bleef zitten. Helaas waren er ook een aantal attracties gesloten voor onderhoud: het risico van in het laagseizoen op reis te gaan.",
          "Op de terugweg stopten we bij een drugstore voor lippenbalsem, want we waren verbrand: een hele dag zon en warmere temperaturen. Joke liep zelfs in t-shirt rond. We stelden ook onze huurauto, Carmen, voor: een leuke auto met een stoere look."
        ],
        "tips": [
          "Wees een halfuur voor opening aanwezig: wij waren de tiende auto op de parking.",
          "In het laagseizoen zijn sommige attracties gesloten voor onderhoud."
        ],
        "photos": [
          {
            "src": "images/reizen/februari-2026/dag3-busch-gardens-mardi-gras.webp",
            "alt": "De ingang van een themazone in Busch Gardens met Mardi Gras-versiering"
          },
          {
            "src": "images/reizen/februari-2026/dag3-iron-gwazi.webp",
            "alt": "De ingang van de achtbaan Iron Gwazi"
          },
          {
            "src": "images/reizen/februari-2026/dag3-achtbaan-oranje.webp",
            "alt": "Een oranje-zwarte achtbaan boven de bomen"
          },
          {
            "src": "images/reizen/februari-2026/dag3-sheikra.webp",
            "alt": "Een rode achtbaan tussen de bomen"
          },
          {
            "src": "images/reizen/februari-2026/dag3-tijger.webp",
            "alt": "Een tijger in zijn verblijf"
          },
          {
            "src": "images/reizen/februari-2026/dag3-giraf.webp",
            "alt": "Een giraf in de savanne"
          },
          {
            "src": "images/reizen/februari-2026/dag3-flamingos.webp",
            "alt": "Flamingo's in het gras"
          },
          {
            "src": "images/reizen/februari-2026/dag3-lorikeets.webp",
            "alt": "Twee lorikeets op een touw"
          },
          {
            "src": "images/reizen/februari-2026/dag3-pinguin.webp",
            "alt": "Een pinguïn onder water"
          }
        ]
      },
      {
        "title": "Islands of Adventure",
        "date": "4 februari",
        "temp": 22,
        "places": [
        "islands-of-adventure"
      ],
        "text": [
          "Opnieuw een dagje pretpark en nog beter weer. Na het ontbijt vertrokken we te voet naar Islands of Adventure. Een halfuurtje stappen, als je tenminste de juiste afslag neemt. Wij waren te ver gewandeld en moesten een stukje terug met de elektrische step.",
          "Het was een leuke dag met fijne spanning en adrenaline. Het was best druk, maar de wachtrijen vielen mee: één keer 45 minuten en voor de rest minder dan 30. Tot we aan de laatste attractie kwamen, Hagrid's Magical Creatures Motorbike Adventure: al heel de dag was de wachtrij enorm. Vol goede moed begonnen we eraan en 180 minuten later waren we aan de beurt. Wat een afsluiter. De les: geen enkele attractie is het voor ons waard om drie uur te wachten.",
          "Daarna aten we nog bij Chili's, een tiktokhit die Joke wou proberen. Lekker, niet wauw, en de porties zijn echt groot. Het weer was zalig, zelfs zo goed dat we in een waterattractie gingen en snel terug droog waren. Heerlijk in zomerkleding rondlopen in februari."
        ],
        "tips": [
          "Geen enkele attractie is een wachtrij van drie uur waard.",
          "Gezond eten is moeilijker te vinden dan gedacht: de porties zijn groot en vettig."
        ],
        "photos": [
        {
                "src": "images/reizen/februari-2026/dag4-kasteel.webp",
                "alt": "Het kasteel van Hogwarts boven de bomen"
        },
        {
                "src": "images/reizen/februari-2026/dag4-universal-globe.webp",
                "alt": "Het Universal-logo aan het water"
        },
        {
                "src": "images/reizen/februari-2026/dag4-dorp.webp",
                "alt": "Het dorp met kleine huisjes en veel bezoekers"
        },
        {
                "src": "images/reizen/februari-2026/dag4-jurassic-park-poort.webp",
                "alt": "De poort van Jurassic Park"
        },
        {
                "src": "images/reizen/februari-2026/dag4-jurassic-park-jeep.webp",
                "alt": "Een rode jeep met een dinosauruskop in het groen"
        },
        {"src": "images/reizen/februari-2026/dag4-dinosaurusskelet.webp", "alt": "Een dinosaurusskelet in een grote hal"},
        {"src": "images/reizen/februari-2026/dag4-velociraptor-in-kooi.webp", "alt": "Een velociraptor met muilkorf in een stalen frame, bij de VelociCoaster"},
        {
                "src": "images/reizen/februari-2026/dag4-spider-man.webp",
                "alt": "De gevel van de Spider-Man-attractie"
        },
        {
                "src": "images/reizen/februari-2026/dag4-achtbaan-boven-het-water.webp",
                "alt": "De VelociCoaster boven het water"
        },
        {
                "src": "images/reizen/februari-2026/dag4-meer-met-achtbaan.webp",
                "alt": "De VelociCoaster rond het meer"
        },
        {
                "src": "images/reizen/februari-2026/dag4-avond-waterattractie.webp",
                "alt": "Een verlichte waterattractie bij nacht"
        }
]
      },
      {
        "title": "Aan boord van de MSC Seashore",
        "date": "5 februari",
        "temp": 15,
        "places": ["cruisen-met-de-msc-seashore"],
        "text": [
          "Een kort reisdagje. We ontbeten, pakten alles in en checkten uit, op weg naar Cape Canaveral om aan boord te gaan van de MSC Seashore. Onderweg stopten we om te tanken en koffiecups te halen bij Walmart, voor Robs compacte koffiemachientje dat mee kan op reis.",
          "In de haven lag het gigantische schip al te wachten, en de parking stond al heel vol. Boarden gaat zoals op de luchthaven: paspoortcontrole, bagage door een scanner en wij door een metaaldetector. Daarna werden onze documenten gecontroleerd, en gelukkig had Rob onze ESTA afgedrukt.",
          "Aan boord zeiden we minstens vijf keer 'we zitten hier op een boot, niet normaal'. Het schip heeft een volwaardig casino, drie theaters, twee binnenzwembaden met glijbanen, buitenzwembaden, winkels, een inkomhal van drie verdiepingen en verschillende restaurants en bars: een gigantisch drijvend appartementencomplex. Om 15 uur mochten we naar onze kajuit. Aan het verzamelpunt lieten we ons ticket scannen, en daarna keken we de safetyvideo.",
          "We pasten ons etensuur aan van 17.15 naar 19.15, wat betekent dat we een tafel delen met een ander koppel: Amerikanen uit Florida zelf, die graag eens naar onze kerstmarkten komen. Het avondeten was lekker, met drie gangen en een keuze uit een achttal gerechten per gang. Je kan altijd kiezen tussen een buffet en een restaurant met kaart, maar de betalende restaurants sloegen we over.",
          "Van de zonsondergang zagen we nog net de laatste glimp."
        ],
        "tips": [
          "Print je ESTA uit: het wordt gecontroleerd bij het inschepen, en je hebt hem nodig om de VS weer binnen te mogen.",
          "Je kan je etensuur aanpassen aan de balie, maar dan deel je mogelijk een tafel."
        ],
        "photos": [{"src": "images/reizen/februari-2026/dag5-msc-seashore-romp.webp", "alt": "De MSC Seashore aan de kade in Cape Canaveral"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-atrium.webp", "alt": "De inkomhal van drie verdiepingen"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-casino.webp", "alt": "Het casino aan boord"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-dek-zwembad.webp", "alt": "Het zwembaddek van de MSC Seashore"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-kajuit-bed.webp", "alt": "Onze kajuit"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-octopus-glijbaan.webp", "alt": "De glijbanen op het bovendek"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-sail-away-party.webp", "alt": "De sail-away party op het dek"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-diner-hoofdgerecht.webp", "alt": "Het hoofdgerecht van het avondeten"}, {"src": "images/reizen/februari-2026/dag5-msc-seashore-zonsondergang-op-zee.webp", "alt": "Zonsondergang op zee"}]
      },
      {
        "title": "Nassau",
        "date": "6 februari",
        "temp": 20,
        "places": ["nassau"],
        "text": [
          "We begonnen de dag met heerlijke Eggs Benedict in het restaurant, inbegrepen in de prijs. Daarna gingen we van boord in Nassau, de hoofdstad van de Bahama's. In de zon was het aangenaam warm, maar met wolken en wind was het toch fris, te koud om te zwemmen of te snorkelen.",
          "Dan maar Nassau bezoeken. De cruisehaven ligt midden in het centrum, dus we konden alles te voet doen. Eerst gingen we naar de Queen's Staircase: een trap van 66 treden, in de late achttiende eeuw met de hand uitgehouwen. Mooi, maar niet indrukwekkend, een beetje zoals de rest van Nassau.",
          "Tussen de kleurrijke huizen en de muurschilderingen in het centrum liepen we daarna naar het strand, waar we een tijdje aan het water lagen. Rond 14 uur kregen we honger en gingen we terug aan boord om te lunchen.",
          "Na het eten probeerden we de glijbaan aan boord, na het ondertekenen van een document dat de rederij niet aansprakelijk is. We gleden samen in een dubbele zwemband. Het water was zeer koud, de jacuzzi daarna gelukkig iets warmer. 's Avonds aten we weer met onze Amerikaanse dinnerbuddy's, nog steeds lekker."
        ],
        "tips": [],
        "photos": [{"src": "images/reizen/februari-2026/dag6-msc-seashore-eggs-benedict.webp", "alt": "Eggs Benedict als ontbijt"}, {"src": "images/reizen/februari-2026/dag6-nassau-bord-in-de-haven.webp", "alt": "Welkomstbord in de haven van Nassau"}, {"src": "images/reizen/februari-2026/dag6-nassau-schip-aan-de-kade.webp", "alt": "De MSC Seashore aan de kade in Nassau"}, {"src": "images/reizen/februari-2026/dag6-nassau-bay-street-hoekhuis.webp", "alt": "Een kleurrijk hoekhuis in het centrum"}, {"src": "images/reizen/februari-2026/dag6-nassau-bay-street-trap.webp", "alt": "Een trap in het centrum van Nassau"}, {"src": "images/reizen/februari-2026/dag6-nassau-bay-street-muurschildering.webp", "alt": "Een muurschildering in Nassau"}, {"src": "images/reizen/februari-2026/dag6-nassau-zonsondergang-bij-vertrek.webp", "alt": "Zonsondergang bij het vertrek uit Nassau"}]
      },
      {
        "title": "Ocean Cay",
        "date": "7 februari",
        "temp": 20,
        "places": ["ocean-cay"],
        "text": [
          "We waren op tijd wakker en klaar om van boord te gaan, toen er werd omgeroepen dat de wind (8 Beaufort, bijna 9) en de stroming het aanmeren onmogelijk maakten. We ontbeten dan maar op het dek in het zonnetje. Na een tweede poging lukte het de kapitein om aan te meren, en we keken vanop het bovenste dek hoe het immense schip steeds dichter bij de kade kwam.",
          "Ocean Cay is het privé-eiland van de rederij en gaf ons het Bahama's-gevoel: zon, zee, strand en gekleurde huisjes. Zo'n blauwe zee hadden we nog nooit gezien. We verkenden het eiland eerst te voet, namen dan een plekje met ligbedden op het strand en doken af en toe het water in.",
          "We konden zelfs snorkelen. Mooi, maar na Costa Rica niet te vergelijken met het koraal en de vissen daar.",
          "Tussen de middag genoten we van het buffet op het eiland. Tegen 16 uur stopten we nog bij de vuurtoren voor we terug aan boord gingen.",
          "Het laatste diner met onze Amerikaanse tafelgenoten verliep met tips over reizen en cultuurverschillen. Omdat het de laatste avond was, gaven de obers een show: ze dansten de Macarena, liepen in polonaise door de zaal en wij zwaaiden met onze servetten.",
          "Drie dagen zijn eigenlijk te kort voor zo'n groot schip: jammer genoeg hebben we geen enkele show kunnen bekijken. Het weer was net te fris, maar de cruise-ervaring was geweldig. Wij betaalden maar 208 euro voor deze cruise, en voor die kwaliteit is dat absurd laag. Het is zelfs mogelijk dat het goedkoper is dan een dagtrip naar de Bahama's vanuit Florida, meestal naar Bimini."
        ],
        "tips": [],
        "photos": [{"src": "images/reizen/februari-2026/dag7-ocean-cay-welkomsttoren.webp", "alt": "De welkomsttoren op Ocean Cay"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-roze-huisjes.webp", "alt": "Gekleurde huisjes op het eiland"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-helder-water.webp", "alt": "Helder blauw water"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-strand-met-schip.webp", "alt": "Het strand met de MSC Seashore op de achtergrond"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-vuurtoren.webp", "alt": "De vuurtoren van Ocean Cay"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-lunch-op-het-strand.webp", "alt": "Lunch op het strand"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-ontspannen-op-de-ligbedden.webp", "alt": "Op de ligbedden aan het strand"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-we-love-ocean-cay.webp", "alt": "We love Ocean Cay"}, {"src": "images/reizen/februari-2026/dag7-ocean-cay-zonsondergang.webp", "alt": "Zonsondergang bij Ocean Cay"}]
      },
      {
        "title": "Van boord en naar Miami",
        "date": "8 februari",
        "temp": 23,
        "places": [],
        "text": [
          "We moesten om 8 uur uit onze kajuit zijn. We ontbeten nog op de boot en namen afscheid van het cruiseleven. Onderweg naar de auto zagen we een cybertruck: er rijden er hier een aantal rond.",
          "Op weg naar Miami stopten we aan Phil Foster Park, een mooie en gratis plek om te snorkelen, een tip van onze Amerikaanse dinnerbuddy's. Onder water liggen betonnen objecten waarop koraal groeit en waar de vissen op afkomen. We zagen mooie exemplaren en aan het einde zwom zelfs een zeekoe voorbij. Een indrukwekkend beest van zo dichtbij. Jammer genoeg konden we onder water geen foto's maken.",
          "Daarna zetten we onze weg naar Miami voort en stopten we aan Ocean Drive, de bekendste promenade van de stad. Rob had een goedkope parkeergarage gevonden, waarna we te voet gingen. De gebouwen zijn in Art Deco-stijl in allerlei kleurtjes. We gingen ook naar dezelfde plekjes als Rob in 2013.",
          "We checkten in ons laatste verblijf op Amerikaanse bodem, een volledig contactloze check-in waarbij je sleutel een app is. Een leuke kamer met gemeenschappelijke keuken en zitkamer."
        ],
        "tips": [
          "Phil Foster Park is gratis om te snorkelen, met betonnen objecten waar koraal en vissen op afkomen."
        ],
        "photos": []
      },
      {
        "title": "Miami verkennen en Miami Heat",
        "date": "9 februari",
        "temp": 24,
        "places": [],
        "text": [
          "Een relaxte ochtend, daarna verkenden we Miami op een stralende warme dag. We wandelden flink wat en namen de Metromover: een gratis metro die boven de stad op een betonnen brug rijdt. We liepen ook veel langs het water.",
          "We verkenden een klein winkelcentrum en aten bij Bacon Bitch: lekkere burger en pannenkoeken, maar weer zeer vettig. We ontdekten de hot honey: een lekker sausje met de zoetigheid van honing en een milde pikantheid. We namen ons ook voor ons niet meer te laten vangen aan de gewone drankjes: dat is vaak kraantjeswater met een siroopje, en het water heeft een felle chloorsmaak. In de stad rijden bezorgrobots rond die zelf pakjes afleveren.",
          "Na twee uurtjes platte rust liepen we naar het stadion van de Miami Heat. Wat een belevenis: veel muziek, amusement en sfeer. We hadden heel goede plaatsen. Opvallend is hoe partijdig ze supporteren, zelfs de commentatoren. Toch bestaat hooliganisme hier niet: supporters van beide ploegen zitten naast elkaar, zonder thuis- en uitvakken. Een superleuke ervaring, ook al wonnen ze net niet."
        ],
        "tips": [
          "De Metromover in Miami is gratis."
        ],
        "photos": []
      },
      {
        "title": "Bootje varen bij de alligators",
        "date": "10 februari",
        "temp": 24,
        "places": [],
        "text": [
          "Een rustig-aan-dagje. We reden vijftig minuten naar de plek om alligators te spotten, onderweg alweer stralende zon. We kochten tickets voor de boottocht van 11 uur, maar kregen de melding dat ze pas over 30 minuten beschikbaar waren. Aan de kassa vroegen ze een betalingsbewijs, en we toonden onze mail, in het Nederlands. Onderweg kregen we een mail dat er een technische fout was en we ons geld terugkregen: een gratis boottocht dus, met een bezoek aan het opvangcentrum.",
          "We proefden ook 'gatortots', stukjes gebakken alligator, een beetje zoals kippenvlees maar minder dradig. Daarna reden we naar Secret Woods Nature Center: vlonderpaden in moerassig gebied, leuk maar niet wauw. We zagen er een wasbeertje en een eekhoorntje.",
          "Daarna zochten we The Cheesecake Factory, een Amerikaanse keten met een uitgebreide kaart van 500 gerechten en uiteraard cheesecake. Lekker gegeten: tortilla chips met een dip van kaas, spinazie en ansjovis, daarna fish and chips voor Rob en taco's met kip, rijst en bonen voor Joke. We namen nog een stuk Key Lime cheesecake mee."
        ],
        "tips": [],
        "photos": []
      },
      {
        "title": "Laatste dagje Miami",
        "date": "11 februari",
        "temp": 25,
        "places": [],
        "text": [
          "Om 11 uur moesten we uit ons Airbnb-appartementje. Gelukkig had de huurauto een hoedenplank waardoor niemand kon zien dat onze spullen in de koffer lagen. We wandelden naar Little Havana, maar daar was niet veel te beleven, dus gingen we terug naar de auto.",
          "Na wat opzoekwerk reden we naar Miami Beach bij Lincoln Road, waar we een parkeergarage vonden voor 2 dollar per uur. Opnieuw naar de Cheesecake Factory, deze keer enkel een hoofdgerecht. Daarna gingen we naar het strand: het was warm. Rob dook even de zee in en Joke lag op het strand. 's Avonds aten we in een 'Italiaans' restaurantje, niet te vergelijken met de Italiaanse keuken in Italië.",
          "Daarna leverden we de huurauto in op de luchthaven en gingen we door de douane. We vertrokken 1 uur 15 later dan gepland voor de nachtvlucht naar Lissabon."
        ],
        "tips": [
          "Een hoedenplank in de huurauto laat je spullen niet zien van buitenaf."
        ],
        "photos": []
      },
      {
        "title": "Lissabon",
        "date": "12 februari",
        "temp": 16,
        "places": [],
        "text": [
          "Na een uiteindelijk vlotte vlucht kwamen we goed aan in Lissabon, onder een stralende zon. We sliepen onderweg wat, maar niet te veel om de jetlag te beperken. We namen een dagkaart voor het openbaar vervoer, zodat we de bus, metro en tram zoveel mochten gebruiken als we wilden.",
          "Met de bus gingen we naar het hotel, waar we onze spullen in een mooie kamer lieten. Daarna namen we weer de bus naar het centrum. Het blijft een heerlijke stad. We aten pastéis de nata en kochten een doosje voor onderweg en thuis.",
          "Daarna namen we de bus naar LX Factory, een coole wijk die we nog nooit bezocht hadden, met veel boetiekjes en eetzaakjes in oude gebouwen. Het was happy hour met alle cocktails voor 5 euro: allebei een Passion Mule, lekker gegeten en daarna een espresso martini voor Rob en een pornstar martini voor Joke. Toen sloeg de jetlag toe en gingen we naar het hotel. Het regende een beetje toen we binnen zaten te eten, en een waarschuwing voor hevige regen trok net langs Lissabon voorbij."
        ],
        "tips": [
          "Een dagkaart voor bus, metro en tram is handig in Lissabon.",
          "LX Factory heeft veel boetiekjes en eetzaakjes in oude gebouwen."
        ],
        "photos": []
      },
      {
        "title": "Terug naar huis",
        "date": "13 februari",
        "temp": null,
        "places": [],
        "text": [
          "Vroeg op om terug naar huis te vliegen."
        ],
        "tips": [],
        "photos": []
      }
    ]
  },
{
  "slug": "montenegro-april-2025",
  "title": "Acht nachten Montenegro: van Durmitor naar de Baai van Kotor",
  "countries": [
    "montenegro"
  ],
  "period": "20 – 28 april 2025",
  "nights": 8,
  "with": "Joke",
  "tagline": "Sneeuw op de bergen, ziplinen over de Tarakloof en een baai die op een fjord lijkt: een van onze mooiste reizen.",
  "cover": {
    "src": "images/montenegro/kotor-baai-vanaf-fort.webp",
    "alt": "De Baai van Kotor vanaf het fort"
  },
  "intro": "Acht nachten in Montenegro, met een huurauto en weinig plannen. In het noorden bleven we rond Žabljak voor sneeuw, meren en een zipline, aan de kust verbleven we aan de Baai van Kotor, met een boottocht, een alpinecoaster en veel focaccia.",
  "route": [
    "Charleroi",
    "Ostrog",
    "Žabljak",
    "Tarakloof",
    "Kotor",
    "Meer van Shkodër",
    "Tivat",
    "Budva",
    "Podgorica"
  ],
  "days": [
    {
      "title": "Reisdag naar Ostrog en het Zwarte Meer",
      "date": "20 april",
      "temp": 15,
      "places": [
        "klooster-van-ostrog",
        "nationaal-park-durmitor"
      ],
      "text": [
        "Een vroege start: om 02.15 uur ging de wekker. Bedje uit, de laatste spullen pakken en naar Charleroi Airport, in de hoop dat we op tijd waren voor de vlucht.",
        "Aan de parking liep het bijna fout: Rob had ineens geen internet en kon het parkeerticket niet scannen. Wachten, proberen, opnieuw proberen. Met een hotspot lukte het ineens. Geen tijd te verliezen en te voet naar de luchthaven, tot we aan de uitgang van de parking kwamen: je kan alleen terug binnen met een parkeerticket, dat we voor alle zekerheid in de auto hadden laten liggen. Gelukkig kan Rob heel snel lopen.",
        "Bagage inchecken en douanecontrole verliepen vlot, en het was weer onnodige stress op voorhand. Een rustige vlucht met zalige nekkussentjes, die net op tijd waren toegekomen voor onze vakantie. In Montenegro moesten we maximum tien minuten op onze bagage wachten: nog nooit zo vlug uit een luchthaven geraakt. Huurauto ophalen en cruisen maar, al was het schakelen even terug wennen.",
        "Onderweg naar ons eerste huisje stopten we bij het klooster van Ostrog, een Servisch-orthodox klooster. Een mooi gebouw midden in de bergen, met veel gelovigen, zeker met Pasen. Daarna reden we de bergen in. Op de weg maakten we een vriendin: Bella, een koe. Het was fijn rijden en we kwamen goed aan in ons huisje met de leuke naam S&S, proper en gezellig ingericht.",
        "Op onze foto's zie je dat we nog een wandeling maakten aan het Zwarte Meer, in het avondlicht, voor we in Žabljak gingen eten."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag1-zonsopgang-charleroi.webp",
          "alt": "Zonsopgang boven de luchthaven van Charleroi"
        },
        {
          "src": "images/reizen/april-2025/dag1-ryanair-charleroi.webp",
          "alt": "Het Ryanair-vliegtuig op de tarmac in Charleroi"
        },
        {
          "src": "images/reizen/april-2025/dag1-ostrog-klooster-gevel.webp",
          "alt": "De gevel van het klooster van Ostrog, tegen de rotswand gebouwd"
        },
        {
          "src": "images/reizen/april-2025/dag1-ostrog-klooster-rotswand.webp",
          "alt": "Het klooster van Ostrog in de rotswand, met pelgrims langs de muur"
        },
        {
          "src": "images/reizen/april-2025/dag1-koeien-op-de-weg.webp",
          "alt": "Koeien op de weg door de bergen"
        },
        {
          "src": "images/reizen/april-2025/dag1-zwart-meer-bergtop.webp",
          "alt": "Het Zwarte Meer met de bergtop erachter"
        },
        {
          "src": "images/reizen/april-2025/dag1-zwart-meer-weerspiegeling.webp",
          "alt": "De bergen weerspiegelen in het Zwarte Meer"
        },
        {
          "src": "images/reizen/april-2025/dag1-zwart-meer-joke-aan-het-water.webp",
          "alt": "Joke aan het Zwarte Meer"
        },
        {
          "src": "images/reizen/april-2025/dag1-avondeten-zabljak.webp",
          "alt": "Avondeten in Žabljak"
        }
      ]
    },
    {
      "title": "Ring rond Durmitor en een sneeuwhike",
      "date": "21 april",
      "temp": 17,
      "places": [
        "nationaal-park-durmitor"
      ],
      "text": [
        "Wat een topdag! Prachtig en vermoeiend, met zalig weer. We vertrokken in de ochtend met de auto om de 'ring rond Durmitor' te rijden: een panoramische route met prachtige uitzichten.",
        "Op het eerste panoramische punt begon een hike naar de top van Bobotov Kuk. We vreesden dat ze niet zou lukken door de sneeuw die er nog lag, en vertrokken met 'we zien wel hoe ver we komen'. Dat bleek heel ver. Een magnifieke en dodelijk vermoeiende tocht. We lieten het kind in onszelf los en gleden op onze billen van de helling. Wie heeft er een slee nodig?",
        "Het was een magnifieke ervaring om met ons tweetjes een bergtocht in de sneeuw te doen, met supertemperaturen en een stralende zon. Weer wat grenzen verlegd en supermooie herinneringen erbij. 's Namiddags eindigden we aan het Pivameer, met zijn turkooizen water tussen de bergen.",
        "Ook in de bergen maakten we weer vriendjes: berggeiten. Wie zoekt die vindt ze op de filmpjes. Tip: zet je geluid aan. Tot nu toe zijn we helemaal hoteldebotel van Montenegro."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag2-bord-bobotov-kuk.webp",
          "alt": "Het bord naar Bobotov Kuk"
        },
        {
          "src": "images/reizen/april-2025/dag2-houten-kader-durmitor.webp",
          "alt": "Een houten kader met uitzicht op Durmitor"
        },
        {
          "src": "images/reizen/april-2025/dag2-sneeuw-en-rotsen.webp",
          "alt": "Sneeuw en kalkrotsen in Durmitor"
        },
        {
          "src": "images/reizen/april-2025/dag2-sneeuwtoppen.webp",
          "alt": "Besneeuwde bergtoppen in Durmitor"
        },
        {
          "src": "images/reizen/april-2025/dag2-wij-in-de-sneeuw.webp",
          "alt": "Wij in de sneeuw in Durmitor"
        },
        {
          "src": "images/reizen/april-2025/dag2-sneeuwhelling.webp",
          "alt": "Een sneeuwhelling met voetsporen"
        },
        {
          "src": "images/reizen/april-2025/dag2-pivameer-uitzicht.webp",
          "alt": "Het turkooizen Pivameer tussen de bergen"
        }
      ]
    },
    {
      "title": "Ziplinen over de Tarakloof",
      "date": "22 april",
      "temp": 16,
      "places": [
        "tarakloof"
      ],
      "text": [
        "Vandaag was het ziplinedag: een leuke ervaring! Door de Tarakloof roetsjen in het zonnetje, met de wind op onze snoet. Heerlijk. Op voorhand hadden we een beetje zenuwen, maar die bleken voor niets nodig. Wiiiiiiii.",
        "Daarna wandelden we over de mooie brug en genoten we van de prachtige kloof. De landschappen zijn hier echt postkaartjes. Op sommige foto's lijkt het alsof we in het landschap gephotoshopt zijn, maar we zijn hier echt.",
        "Na de kloof reden we een stukje verder met onze Cleo, de huurauto, en maakten we een wandelingetje naar het water. Daar waren we helemaal alleen: prachtig helderblauw water en stilte. Er was niets anders te horen dan vogeltjes en het stromende water.",
        "Daarna reden we nog verder voor een wandelingetje naar een panoramisch uitzicht, waar we ook weer alleen waren. Daarna nog even naar de winkel, seffes koken in ons appartementje en een rustige avond tegemoet."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag3-tara-houten-platform.webp",
          "alt": "Een houten platform boven de Tarakloof"
        },
        {
          "src": "images/reizen/april-2025/dag3-tara-kloof.webp",
          "alt": "De Tarakloof"
        },
        {
          "src": "images/reizen/april-2025/dag3-djurdjevica-tarabrug.webp",
          "alt": "De Đurđevića Tarabrug over de kloof"
        },
        {
          "src": "images/reizen/april-2025/dag3-tara-turquoise-rivier.webp",
          "alt": "Het turkooizen water van de Tara"
        },
        {
          "src": "images/reizen/april-2025/dag3-tara-kloof-uitzicht.webp",
          "alt": "Een groot uitzicht over de Tarakloof"
        }
      ]
    },
    {
      "title": "Rustdag in de bergen",
      "date": "23 april",
      "temp": 14,
      "places": [],
      "text": [
        "Vandaag hadden we een rustdagje, want we hadden zowat alle bezienswaardigheden in de buurt gezien. 's Morgens scheen de zon super. We reden terug naar de wandeling met uitzichtpunt van de dag ervoor, in de hoop de vallei in de zon te zien, maar helaas pindakaas: het was bewolkt toen we boven waren.",
        "Bij het startpunt stond ineens een parkwachter die zei dat we €5 per persoon moesten betalen. Gisteren zat er niemand en hadden we dezelfde wandeling gratis gedaan. Gelukkig kenden we een ander start- en eindpunt en parkeerden we daar. Gratis it is: het zit hem in de kleine gelukjes.",
        "Na het middageten en wat rust vertrokken we naar een mooi uitkijkpunt. Wat een avontuur: de wegen hier zijn niet allemaal verhard. Denk aan de Spieke in Meeswijk maal 2 of 3, 'met de Jeep door het oerwoud', hobbel de bobbel. Gelukkig is alles goed gegaan en is de auto nog heel, al was het een veel langere rit dan gepland. Het uitzichtpunt was gelukkig mooi, met kronkelende waterwegen.",
        "We wilden ook nog aan een meertje gaan wandelen, maar de weergoden waren ons niet goed gezind: regen, regen, regen. Dan maar terug naar huis, deze keer over goed verharde wegen. Onderweg overleefden we een politiecontrole: 'did you drink today? Did you use drugs today?' Gelukkig was het een vriendelijke politieman."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag4-kloof-uitkijkpunt.webp",
          "alt": "Een uitkijkpunt boven de kloof"
        },
        {
          "src": "images/reizen/april-2025/dag4-rivierbochten-uitzicht.webp",
          "alt": "De bochten van de rivier in het dal"
        }
      ]
    },
    {
      "title": "Van de bergen naar de zee in Kotor",
      "date": "24 april",
      "temp": 21,
      "places": [
        "kotor",
        "baai-van-kotor"
      ],
      "text": [
        "Vandaag was het een reisdagje, met een vlotte rit uit de bergen naar de zee. Onderweg zagen we weer prachtige landschappen, onder andere een meer met eilandjes, en naast de weg ook veel afval. Hier gooien ze hun afval gewoon op de grond waar ze staan, zie het laatste filmpje.",
        "We kwamen aan bij ons verblijf: een super appartementje met zalig uitzicht. Even rusten en dan naar Kotor, een gezellig stadje. We maakten een pittige wandeling omhoog, met ook daar weer prachtige uitzichten, naar het fort boven de stad. Terug beneden aten we een burgertje en proefden we voor het eerst schepijs.",
        "Om af te sluiten nog een paar wist je datjes over Montenegro. In de bergen lopen veel straathonden rond die heel lief zijn, aan de kust meer katten. We zagen er nog Lada's rijden. Volle witte lijnen betekenen hier niets en flitspalen kennen ze niet. We hebben hier al de mooiste uitzichten ooit gezien en we zijn het hier nog lang niet beu."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag5-meer-van-slano.webp",
          "alt": "Het Slanomeer met zijn eilandjes"
        },
        {
          "src": "images/reizen/april-2025/dag5-baai-van-kotor-vanaf-het-water.webp",
          "alt": "De Baai van Kotor vanaf de oever"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-serpentines.webp",
          "alt": "De serpentines boven Kotor"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-baai-vanaf-fort.webp",
          "alt": "De Baai van Kotor vanaf het fort"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-fort-rob-bij-vlag.webp",
          "alt": "Rob bij de vlag op het fort"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-tunnel.webp",
          "alt": "Een tunnel op het pad naar het fort"
        },
        {
          "src": "images/reizen/april-2025/dag5-ijsjes-kotor.webp",
          "alt": "Twee ijsjes in Kotor"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-burger.webp",
          "alt": "Een burger op een terras in Kotor"
        },
        {
          "src": "images/reizen/april-2025/dag5-kotor-wandelpad.webp",
          "alt": "Het pad naar het fort van Kotor"
        }
      ]
    },
    {
      "title": "Bootje varen op het meer van Shkodër",
      "date": "25 april",
      "temp": 19,
      "places": [
        "meer-van-shkoder"
      ],
      "text": [
        "De dag begon bewolkt. We reden met de auto over de bergtoppen, door wolken en mist, naar het meer van Shkodër. Onderweg werd het weer gelukkig beter en beter, en zagen we weer prachtige uitzichten.",
        "Het meer van Shkodër is magnifiek. Eerst bewonderden we het van bovenaf, later gingen we twee uur met een bootje op het meer varen. Altijd zalig om zo op het water te zijn.",
        "Na het boottripje reden we via de kant van de zee terug, met weer hallucinant mooie uitzichten, onder andere op het vestingeiland Sveti Stefan. Het was een lange maar prachtige autorijdag. Een rustig avondje op ons appartement met nog steeds prachtig uitzicht."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag6-rijeka-crnojevica-rivierbocht.webp",
          "alt": "De rivierbocht bij Rijeka Crnojevića"
        },
        {
          "src": "images/reizen/april-2025/dag6-meer-van-shkoder-uitzicht.webp",
          "alt": "Uitzicht over het meer van Shkodër"
        },
        {
          "src": "images/reizen/april-2025/dag6-meer-van-shkoder-boot.webp",
          "alt": "Op de boot over het meer van Shkodër"
        },
        {
          "src": "images/reizen/april-2025/dag6-kust-baai.webp",
          "alt": "Een baai aan de Montenegrijnse kust"
        },
        {
          "src": "images/reizen/april-2025/dag6-sveti-stefan.webp",
          "alt": "Sveti Stefan"
        }
      ]
    },
    {
      "title": "Rustdagje en Perast",
      "date": "26 april",
      "temp": 18,
      "places": [
        "baai-van-kotor"
      ],
      "text": [
        "Vandaag hadden we een rustig dagje: 's morgens regende het, maar vanaf 12 uur begon het op te klaren. We deden de voormiddag rustig aan: een boekje lezen, een serietje kijken en wat rusten. Even videobellen met mijn zussie: leuk!",
        "In de namiddag gingen we naar het stadje Perast. De zon scheen terug, het was warm en de uitzichten waren uiteraard weer mooi. Fijn om rustig langs het water te kunnen wandelen. Daarna terug naar het appartementje voor een middagdutje, en tegen de avond liepen we te voet de andere kant op.",
        "Het was zaaaalig weertje en fijn rustig langs het water. We aten op een heel mooi plekje, met pizza aan het water terwijl de zon achter de bergen zakte. Een leuk dagje."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag7-perast-aanlegsteiger.webp",
          "alt": "Een aanlegsteiger aan de Baai van Kotor"
        },
        {
          "src": "images/reizen/april-2025/dag7-perast-terras.webp",
          "alt": "Een terras aan het water"
        },
        {
          "src": "images/reizen/april-2025/dag7-perast-zonsondergang.webp",
          "alt": "Zonsondergang boven de Baai van Kotor"
        },
        {
          "src": "images/reizen/april-2025/dag7-perast-pizza.webp",
          "alt": "Pizza aan het water"
        },
        {
          "src": "images/reizen/april-2025/dag7-perast-wij-aan-tafel.webp",
          "alt": "Wij aan tafel bij zonsondergang"
        }
      ]
    },
    {
      "title": "Alpinecoaster, Tivat en de Blue Cave",
      "date": "27 april",
      "temp": 24,
      "places": [
        "kotor-cable-car-en-alpinecoaster",
        "tivat",
        "blue-cave-en-de-baai-van-kotor"
      ],
      "text": [
        "Wat een topdag! In de voormiddag gingen we met de skilift naar boven en zagen we onderweg weer prachtige vergezichten. Boven deden we de alpinecoaster: superleuk op een unieke locatie. Het mocht nog wat langer duren voor ons. Daarna maakten we nog een leuke wandeling met uitzichtpunten en gingen we terug naar beneden met de skilift. Deze keer was het een gesloten cabine, veel minder eng dan in de Alpen, zeker voor sommigen.",
        "Na dit avontuur reden we naar het stadje Tivat, prachtig aan het water gelegen. Het was er warm! We wandelden wat rond en kwamen terecht bij een Italiaans delicatessewinkeltje. Daar namen we de beste focaccia ooit mee en aten die op een leuk bankje: focaccia met mortadella, een soort pesto, rucola en burrata. Hmmm.",
        "Daarna was het tijd om terug naar Kotor te rijden, want we hadden online een speedboottour naar de Blue Cave geboekt. Een boottrip van drie uur met een tussenstop op een eilandje onderweg. Zalig onder de warme zon! We zaten helemaal vooraan op de boot en hadden het beste uitzicht. Op de terugweg werd het frisser en door de wind werd Rob weer even een bodybuilder.",
        "Wat een zalige voorlaatste dag in Montenegro."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag8-lovcen-uitzicht-op-kotor.webp",
          "alt": "Uitzicht op Kotor en de baai vanaf de kabelbaan"
        },
        {
          "src": "images/reizen/april-2025/dag8-lovcen-bovenstation.webp",
          "alt": "Het bovenstation van de kabelbaan"
        },
        {
          "src": "images/reizen/april-2025/dag8-alpinecoaster-baan.webp",
          "alt": "De baan van de alpinecoaster op de berghelling"
        },
        {
          "src": "images/reizen/april-2025/dag8-tivat-promenade.webp",
          "alt": "De promenade van Tivat"
        },
        {
          "src": "images/reizen/april-2025/dag8-tivat-focaccia.webp",
          "alt": "Twee focaccia's op de promenade"
        },
        {
          "src": "images/reizen/april-2025/dag8-onze-lieve-vrouw-van-de-rots.webp",
          "alt": "Onze-Lieve-Vrouw van de Rots"
        },
        {
          "src": "images/reizen/april-2025/dag8-mamula-fort.webp",
          "alt": "Het fort op het eiland Mamula"
        },
        {
          "src": "images/reizen/april-2025/dag8-blue-cave.webp",
          "alt": "De Blue Cave met een bootje voor de ingang"
        },
        {
          "src": "images/reizen/april-2025/dag8-bootje-joke.webp",
          "alt": "Joke op de speedboot"
        }
      ]
    },
    {
      "title": "Laatste dagje: Tivat, Budva en naar huis",
      "date": "28 april",
      "temp": 24,
      "places": [
        "tivat",
        "budva-en-sveti-stefan"
      ],
      "text": [
        "Vandaag was onze laatste dag in Montenegro. We hadden gisteren al zo goed als alles ingepakt, dus het uitchecken uit ons appartementje verliep vlot. We reden naar Tivat, het havenstadje waar we de dag voordien waren geweest. Mooi en heerlijk warm, bijna té. We aten een lekker citroentaartje (Joke) en een pistachemacaron (Rob) bij hetzelfde zaakje waar we de focaccia's hadden gehaald, en namen allebei weer een focaccia mee voor onderweg.",
        "Daarna reden we door naar Budva, een stadje aan de zee. We zaten heerlijk op het strand met een prachtig uitzicht, de ideale plek om onze focaccia op te eten. We wandelden nog wat rond en stapten dan in de auto naar de luchthaven.",
        "Op de parking van de luchthaven bleek dat we vergeten waren te tanken. Gelukkig mochten we 15 minuten gratis parkeren: snel naar de uitgang en tanken. Gelukt! De auto werd netjes ingeleverd, de bagage ingecheckt en de douanecontrole overleefd. Helaas pindakaas zat de heerlijke vakantie erop. We hebben enorm genoten, en dit is een van de mooiste vakanties die we hebben gedaan."
      ],
      "photos": [
        {
          "src": "images/reizen/april-2025/dag9-tivat-citroentaartje.webp",
          "alt": "Een citroentaartje en een pistachemacaron in Tivat"
        },
        {
          "src": "images/reizen/april-2025/dag9-budva-helder-water.webp",
          "alt": "Helder water bij Budva"
        },
        {
          "src": "images/reizen/april-2025/dag9-budva-strand.webp",
          "alt": "Een strand bij Budva"
        },
        {
          "src": "images/reizen/april-2025/dag9-budva-houten-pad-rotsboog.webp",
          "alt": "Een houten pad door een rotsboog"
        },
        {
          "src": "images/reizen/april-2025/dag9-ryanair-podgorica.webp",
          "alt": "Het Ryanair-toestel in Podgorica"
        }
      ]
    }
  ],
  "stays": [
    {
      "place": "Baai van Kotor",
      "name": "Appartement aan de baai",
      "nights": 4,
      "text": "Een super appartementje met zalig uitzicht over het water, waar we vier nachten bleven.",
      "photo": {
        "src": "images/montenegro/perast-zonsondergang.webp",
        "alt": "Zonsondergang boven de Baai van Kotor"
      }
    }
  ]
}
];
