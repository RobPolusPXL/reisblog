#!/usr/bin/env node
// Maakt data/index.js: de lichte lijst die de homepage, het menu en de kaart nodig hebben.
// De volledige teksten blijven in data/landen/<slug>.js en data/reizen/<slug>.js en worden pas geladen
// op de pagina waar ze bij horen. Draai dit na elke wijziging in data/ (build.py doet het automatisch).
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");

function lees(dir, naam) {
  const out = [];
  for (const f of fs.readdirSync(path.join(root, dir)).filter((x) => x.endsWith(".js")).sort()) {
    const w = {};
    vm.runInNewContext(fs.readFileSync(path.join(root, dir, f), "utf8"), { window: w });
    const o = w[naam];
    const slug = Object.keys(o)[0];
    if (slug + ".js" !== f) throw new Error(dir + "/" + f + ": slug " + slug + " komt niet overeen met de bestandsnaam");
    out.push(o[slug]);
  }
  return out;
}

const landen = lees("data/landen", "LAND").map((c) => {
  const licht = Object.assign({}, c);
  delete licht.activities;
  const acts = (c.activities || []).filter((a) => a.photos && a.photos.length).map((a) => {
    const k = { t: a.t };
    for (const key of ["text", "park", "ok", "pin"]) if (a[key] !== undefined) k[key] = a[key];
    if (a.hero) k.hero = a.hero;
    k.photos = [a.photos[0]];
    return k;
  });
  if (acts.length) licht.activities = acts;
  licht._volledig = !(c.activities && c.activities.length) && !c.practical && !c.weetjes;
  return licht;
});
const reizen = lees("data/reizen", "REIS").map((t) => { const l = Object.assign({}, t); delete l.days; return l; });

const kop = "// GEGENEREERD door tools/maak-index.js, niet met de hand aanpassen.\n";
fs.writeFileSync(path.join(root, "data/index.js"), kop + "window.COUNTRIES = " + JSON.stringify(landen) + ";\nwindow.TRIPS = " + JSON.stringify(reizen) + ";\n");
console.log("index: " + landen.length + " bestemmingen, " + reizen.length + " reizen, " + fs.statSync(path.join(root, "data/index.js")).size + " bytes");
