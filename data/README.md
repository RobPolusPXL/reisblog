# Inhoud van de site

- `data/landen/<slug>.js`: één bestand per bestemming (teksten, plaatsen, foto's).
- `data/reizen/<slug>.js`: één bestand per reis (dagen, foto's, kosten).
- `data/index.js`: **gegenereerd**, niet met de hand aanpassen. Bevat per bestemming/reis alleen wat de homepage, het menu en de kaart nodig hebben.

Na elke wijziging in `data/landen` of `data/reizen`: `python3 build.py` (maakt de index opnieuw en de pagina's),
of alleen de index: `node tools/maak-index.js`.

De bestandsnaam moet gelijk zijn aan de slug (de tool controleert dat).

## Nieuwe bestemming
Maak `data/landen/<slug>.js`:

    (window.LAND = window.LAND || {})["<slug>"] = { slug: "<slug>", iso: "...", name: "...", done: false, pin: [lat, lng] };

Een land met `done: true` heeft een uitgewerkte pagina, de rest toont "volgt binnenkort".
Items met `ok: false` zijn concept en moeten nog door Rob bevestigd worden (ze worden gestippeld getoond).
Foto's: zet het bestand in `images/<land>/` en vul `src` en `alt` in. Zonder `src` toont de site een lege plaatshouder.

## Nieuwe reis
Maak `data/reizen/<slug>.js` met `window.REIS["<slug>"]`. Zie een bestaande reis voor de velden.
`countries` bevat de slugs van de bestemmingen; `days[].places` de slugs van plaatsen in die bestemming.
