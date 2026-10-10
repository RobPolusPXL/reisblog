# Travel Mustache

Reisblog per land, met foto's en tips van plaatsen waar ik echt geweest ben. Alleen in het Nederlands.

Statische site met echte adressen per land en activiteit (bv. `/bosnie-en-herzegovina/kravice-watervallen/`), zodat Google ze apart kan indexeren.

Lokaal bekijken: `python3 -m http.server` en ga naar http://localhost:8000.

## Pagina's genereren (na elke wijziging)

`python3 build.py` maakt uit `template.html` en `js/countries.js` alle pagina's (`index.html`, `reizen/<reis>/`, `bestemmingen/<land>/` en `bestemmingen/<land>/<plaats>/`), `404.html`, `sitemap.xml` en `robots.txt`. Draai dit na elke wijziging aan `js/countries.js`, `js/app.js` of `template.html` en commit de gegenereerde bestanden mee. Vereist: `pip install playwright` en `playwright install chromium`.

Bewerk dus nooit `index.html` of de land-mappen met de hand, maar `template.html`. Het adres van de site (voor canonical-links en sitemap) staat in `site.js`; pas dat aan zodra je een eigen domein hebt en draai `build.py` opnieuw.

## Structuur

- `js/trips.js`: alle reizen (persoonlijk verhaal, dag per dag, verblijven, kosten). Foto's in `images/reizen/<reis>/`.
- `js/countries.js`: alle bestemmingen (algemene gids: er geraken, praktisch, plaatsen).
- `js/app.js`: kaart, overzicht en landenpagina's (routing op basis van het pad).
- `css/style.css`: opmaak.
- `images/<land>/`: foto's per land (verkleind naar ongeveer 1600 px, bij voorkeur WebP).

## Een land uitwerken

1. Zet `done: true` bij het land en vul de velden in (zie Bosnië als voorbeeld).
2. Zet foto's in `images/<land>/` en vul `src` en `alt` in.
3. Items met `ok: false` zijn concept en worden gestippeld getoond. Zet `ok: true` zodra ze kloppen.

## Git

- `main`: stabiel, wat gehost wordt.
- `dev`: ontwikkelbranch.
- `content/<land>`: één branch per land, met alle commits van dat land. Gaat daarna naar `dev`.
- Commits: `feat:`, `content:`, `fix:`, `chore:` gevolgd door een korte beschrijving.

De kaart gebruikt Leaflet (in `vendor/leaflet`) en landgrenzen van Natural Earth (`js/world.js`). Alles zit in de repo, er zijn geen externe kaartdiensten of sleutels nodig.
