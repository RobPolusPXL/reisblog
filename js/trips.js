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
  }
];
