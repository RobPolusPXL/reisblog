# Travel Mustache

Reisblog per land, met foto's en tips van plaatsen waar ik echt geweest ben. Alleen in het Nederlands.

Statische site zonder build-stap: open `index.html` in een browser, of draai lokaal `python3 -m http.server` en ga naar http://localhost:8000.

## Structuur

- `js/countries.js`: alle landen en hun inhoud. Hier voeg je een land of tekst toe.
- `js/app.js`: kaart, overzicht en landenpagina's (adressen zoals `#/bosnie-en-herzegovina`).
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
