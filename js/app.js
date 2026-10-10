(function () {
  "use strict";

  var countries = window.COUNTRIES;
  var trips = window.TRIPS || [];
  var $ = function (id) { return document.getElementById(id); };
  var map = null, geoLayer = null;

  var PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function cpath(c) { return "bestemmingen/" + c.slug + "/"; }
  function tpath(t) { return "reizen/" + t.slug + "/"; }
  function countryBySlug(slug) { return countries.filter(function (x) { return x.slug === slug; })[0]; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function photo(p, cls) {
    p = p || {};
    if (p.src) {
      return '<div class="photo ' + (cls || "") + '"><img src="' + esc(p.src) + '" alt="' + esc(p.alt || "") + '" loading="lazy"></div>';
    }
    return '<div class="photo empty ' + (cls || "") + '" role="img" aria-label="' + esc(p.alt || "Foto volgt") + '"></div>';
  }

  function figure(g) {
    return "<figure>" + photo(g) + (g.caption ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") + "</figure>";
  }

  function item(i) {
    var cls = i.ok === false ? ' class="concept"' : "";
    return "<li" + cls + "><strong>" + esc(i.t) + "</strong>" + (i.text ? "<p>" + esc(i.text) + "</p>" : "") + "</li>";
  }

  function slugify(t) {
    return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function excerpt(t, n) {
    t = t || "";
    return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, "") + "…" : t;
  }

  // activiteiten met foto's krijgen een eigen subpagina
  function places(c) {
    return (c.activities || []).filter(function (a) { return a.photos && a.photos.length; })
      .map(function (a) { a.slug = slugify(a.t); return a; });
  }

  /* ---------- home ---------- */

  function hero(src, alt, label, title, text, extra) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" fetchpriority="high">' +
      '<div class="wrap hero-text"><div>' + (label ? '<span class="label">' + esc(label) + "</span>" : "") +
      "<h1>" + esc(title) + "</h1>" + (text ? "<p>" + esc(text) + "</p>" : "") + "</div>" + (extra || "") + "</div>";
  }

  function renderHome() {
    $("hero").innerHTML = hero("images/home/hangmat-panorama.webp", "Rob en Joke in een hangmat, met zicht op zee tussen de palmen",
      "Reisblog van Rob en Joke", "Waar we al geweest zijn",
      "Reisinspiratie per land, enkel over plaatsen waar we zelf verbleven en dingen die we zelf deden.");

    $("trips").innerHTML = trips.map(function (t, i) {
      return '<a class="card' + (i === 0 ? " big" : "") + '" href="' + tpath(t) + '">' +
        photo(t.cover) +
        '<div><span class="label">' + esc(t.period) + " · " + t.nights + " nachten</span>" +
        "<h3>" + esc(t.title) + "</h3>" +
        (t.intro ? "<p>" + esc(excerpt(t.intro, 150)) + "</p>" : "") +
        '<span class="more">Lees de reis ' + ARROW + "</span></div></a>";
    }).join("");

    var done = countries.filter(function (c) { return c.done; });
    var soon = countries.filter(function (c) { return !c.done; });
    $("grid").innerHTML = done.map(function (c, i) {
      return '<a class="card' + (i === 0 ? " big" : "") + '" href="' + cpath(c) + '">' +
        photo(c.cover && c.cover.src ? { src: c.cover.src, alt: c.cover.alt } : { alt: c.name }) +
        "<div><span class=\"label\">Bestemming</span>" +
        "<h3>" + esc(c.name) + "</h3>" +
        (c.tagline ? "<p>" + esc(c.tagline) + "</p>" : "") +
        '<span class="more">Lees verder ' + ARROW + "</span></div></a>";
    }).join("");
    $("soon").innerHTML = soon.length
      ? "<h3>Hier volgen nog meer bestemmingen</h3><ul>" + soon.map(function (c) {
          return '<li><a class="chip" href="' + cpath(c) + '">' + esc(c.name) + "</a></li>";
        }).join("") + "</ul>"
      : "";
  }

  function renderMap() {
    if (!window.L || !window.WORLD) {
      $("map").style.display = "none"; // het landenoverzicht blijft werken
      return;
    }
    var byIso = {};
    countries.forEach(function (c) { byIso[c.iso] = c; });
    var fill = function () { return "#bfdad4"; }; // donkergroen enkel bij hover

    map = L.map("map", {
      scrollWheelZoom: false, worldCopyJump: false, zoomSnap: 0.25,
      minZoom: 2, maxBounds: [[-60, -200], [85, 200]], attributionControl: false
    });

    geoLayer = L.geoJSON(window.WORLD, {
      style: function (f) {
        var c = byIso[f.id];
        return { color: "#ffffff", weight: 0.8, fillColor: c ? fill(c) : "#e9e1d2", fillOpacity: 1 };
      },
      onEachFeature: function (f, layer) {
        var c = byIso[f.id];
        if (!c) return;
        layer.bindTooltip(c.name, { sticky: true });
        layer.on("click", function () { geoLayer.resetStyle(layer); location.href = cpath(c); });
        layer.on("mouseover", function () { layer.setStyle({ fillColor: "#0f766e" }); });
        layer.on("mouseout", function () { geoLayer.resetStyle(layer); });
      }
    }).addTo(map);

    map.fitBounds(L.latLngBounds(countries.map(function (c) { return c.pin; })), { padding: [40, 40], maxZoom: 4 });
  }

  /* ---------- landpagina ---------- */

  var ICONS = {
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    talk: '<path d="M4 5h16v10H10l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',
    coin: '<circle cx="12" cy="12" r="8"/><path d="M15 9.2a3.4 3.4 0 0 0-3-1.2c-1.7 0-3 1.1-3 2.4 0 3.2 6.2 1.6 6.2 4.6 0 1.3-1.4 2.2-3.2 2.2a3.8 3.8 0 0 1-3.2-1.4M12 6v2m0 8v2"/>',
    plane: '<path d="M3 14l18-9-4 15-5-5-3 3-1-5-5-1z"/><path d="M11 13l10-8"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>'
  };
  function factsStrip(c) {
    if (!c.facts || !c.facts.length) return "";
    return '<div class="wrap"><div class="facts-strip">' + c.facts.map(function (f) {
      return '<div><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[f.icon] || "") + "</svg><span><b>" + esc(f.label) + "</b>" + esc(f.v) + "</span></div>";
    }).join("") + "</div></div>";
  }

  function section(title, inner, sub, cls) {
    return '<section class="block' + (cls ? " " + cls : "") + '"><h2>' + title + "</h2>" + (sub ? '<p class="sub">' + sub + "</p>" : "") + inner + "</section>";
  }

  function hikeHtml(h, id) {
    if (!h) return "";
    var a = h.alt, mn = Math.min.apply(null, a), mx = Math.max.apply(null, a);
    var prof = a.map(function (v, i) { return (i / (a.length - 1) * 300).toFixed(1) + "," + (60 - (v - mn) / (mx - mn) * 56).toFixed(1); }).join(" ");
    return '<div class="hike"><div class="hike-map" id="hike-' + id + '" data-hike="' + id + '"></div>' +
      '<div class="hike-info"><h4>' + esc(h.label) + '</h4><dl><div><dt>Afstand</dt><dd>' + String(h.km).replace(".", ",") + ' km</dd></div><div><dt>Tijd</dt><dd>' + esc(h.tijd) +
      '</dd></div><div><dt>Hoogtewinst</dt><dd>' + h.omhoog + ' m</dd></div><div><dt>Hoogste punt</dt><dd>' + h.hoogste + ' m</dd></div></dl>' +
      '<svg class="hike-prof" viewBox="0 0 300 64" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,64 ' + prof + ' 300,64" fill="#bfdad4"/><polyline points="' + prof + '" fill="none" stroke="#0f766e" stroke-width="1.5"/></svg></div></div>';
  }
  function initHikes(t) {
    if (window.__PRERENDER || !window.L) return;
    t.days.forEach(function (d, i) {
      var el = d.hike && document.getElementById("hike-" + (i + 1));
      if (!el || el._leaflet_id) return;
      var m = L.map(el, { scrollWheelZoom: false });
      setTimeout(function () { m.invalidateSize(); m.fitBounds(L.polyline(d.hike.route).getBounds(), { padding: [20, 20] }); }, 300);
      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { maxZoom: 17, attribution: "© OpenStreetMap-bijdragers, © OpenTopoMap (CC-BY-SA)" }).addTo(m);
      var line = L.polyline(d.hike.route, { color: "#0f766e", weight: 4, opacity: .95 }).addTo(m);
      L.circleMarker(d.hike.route[0], { radius: 7, color: "#fff", weight: 2, fillColor: "#c2410c", fillOpacity: 1 }).addTo(m).bindTooltip("Start en finish");
      m.fitBounds(line.getBounds(), { padding: [20, 20] });
    });
  }
  function tripStamp(t) {
    var m = t.period.match(/([a-z]+) (\d{4})\s*$/i);
    return '<div class="stamp" aria-hidden="true"><div>Bezocht<b>' + esc(m ? m[1] + " " + m[2] : t.period) + "</b>" + t.nights + " nachten</div></div>";
  }
  function stampHtml(c) {
    return '<div class="stamp" aria-hidden="true"><div>Bezocht<b>' + esc(c.visited.replace(/^.*?(\d+ [a-z]+ \d{4})$/i, "$1").replace(/^\d+ /, "")) + "</b>" + c.nights + " nachten</div></div>";
  }

  function renderCountry(c) {
    if (!c.done) {
      $("country").innerHTML = '<div class="wrap"><a class="back" href="./#bestemmingen">' + ARROW + " Alle bestemmingen</a>" +
        '<h1 style="font-size:clamp(40px,7vw,88px);margin-top:28px">' + esc(c.name) + "</h1>" +
        '<p class="intro narrow" style="margin-top:24px">Deze pagina volgt binnenkort.</p></div>';
      return;
    }

    var pl = places(c);
    var rest = (c.activities || []).filter(function (a) { return !(a.photos && a.photos.length); });
    var html = '<section class="hero short">' + hero(c.cover.src, c.cover.alt, "Bestemming", c.name, c.tagline) + "</section>" + factsStrip(c) +
      '<div class="wrap">' +
      '<div class="c-body"><div><p class="intro">' + esc(c.intro) + "</p>" +
      "</div>" +
      (function () {
        var ts = trips.filter(function (t) { return t.countries.indexOf(c.slug) > -1; });
        if (!ts.length) return "";
        return '<aside class="fact-card"><h2>Onze reizen hier</h2><dl>' + ts.map(function (t) {
          return '<div><dt><a href="' + tpath(t) + '">' + esc(t.period) + '</a></dt><dd>' + t.nights + " nachten</dd></div>";
        }).join("") + "</dl></aside>";
      })() + "</div>";

    if (pl.length) {
      html += section("Dingen die we deden", '<div class="places">' + pl.map(function (a) {
        return '<a class="place" href="' + cpath(c) + a.slug + '/">' + photo(a.photos[0]) +
          "<h3>" + esc(a.t) + "</h3>" + (a.text ? "<p>" + esc(excerpt(a.text, 90)) + "</p>" : "") + "</a>";
      }).join("") + "</div>" + (rest.length
        ? '<div class="also"><h3>Ook gedaan</h3><ul>' + rest.map(function (a) {
            return '<li><span class="chip' + (a.ok === false ? " concept" : "") + '">' + esc(a.t) + "</span></li>";
          }).join("") + "</ul></div>" : ""),
        "Klik op een plaats voor foto's en uitleg.", "center");
    }

    if (c.getThere && c.getThere.length) {
      html += section("Er geraken anno 2026",
        '<div class="getthere">' + c.getThere.map(function (g) {
          return '<div class="gt"><h3>' + esc(g.from) + "</h3>" +
            (g.routes.length ? "<ul>" + g.routes.map(function (r) {
              return "<li><b>" + esc(r.airport) + "</b><span>" + esc(r.airline) + " naar " + esc(r.to) +
                (r.seasonal ? " · seizoensgebonden" : "") + (r.ours ? " · zo vlogen wij" : "") + "</span></li>";
            }).join("") + "</ul>" : "") +
            (g.note ? "<p>" + esc(g.note) + "</p>" : "") + "</div>";
        }).join("") + "</div>",
        "Rechtstreekse vluchten, stand oktober 2026.");
    }
    if (c.practical && c.practical.length) html += section("Praktisch", '<div class="facts">' + c.practical.map(function (f) {
      return '<div class="fact' + (f.ok === false ? " concept" : "") + '"><b>' + esc(f.label) + "</b><span>" + esc(f.t) + "</span></div>";
    }).join("") + "</div>");

    if (c.gallery && c.gallery.length) {
      html += section("Meer foto's", '<div class="gallery">' + c.gallery.map(figure).join("") + "</div>");
    }

    html += "</div>";
    $("country").innerHTML = html;
  }

  function renderPlace(c, a) {
    var pl = places(c);
    var i = pl.indexOf(a);
    var prev = pl[i - 1], next = pl[i + 1];
    var n = a.photos.length;
    var html = '<div class="wrap"><div class="crumbs"><a href="./#bestemmingen">Bestemmingen</a> › <a href="' + cpath(c) + '">' + esc(c.name) + "</a> › <span>" + esc(a.t) + "</span></div>" +
      '<div class="s-head"><span class="label">' + esc(c.name) + "</span><h1>" + esc(a.t) + "</h1>" +
      (a.text ? '<p class="s-lead">' + esc(a.text) + "</p>" : "") + "</div>" +
      (a.ok === false ? '<p class="concept-note s-note">Concept: dit is nog niet bevestigd.</p>' : "") +
      '<div class="s-photos' + (n === 2 ? " two" : "") + '">' + a.photos.map(figure).join("") + "</div>" +
      '<div class="s-more"><h2>Meer in ' + esc(c.name) + '</h2><div class="s-nav">' +
      (prev ? '<a class="prev" href="' + cpath(c) + prev.slug + '/"><small>Vorige</small><b>' + esc(prev.t) + "</b></a>" : "") +
      (next ? '<a class="next" href="' + cpath(c) + next.slug + '/"><small>Volgende</small><b>' + esc(next.t) + "</b></a>" : "") +
      '</div><a class="back" href="' + cpath(c) + '">' + ARROW + " Terug naar " + esc(c.name) + "</a></div></div>";
    $("country").innerHTML = html;
  }


  /* ---------- reis ---------- */

  function dayPhotos(ph) {
    if (!ph || !ph.length) return "";
    return '<div class="d-photos n' + Math.min(ph.length, 5) + '">' + ph.map(figure).join("") + "</div>";
  }

  function renderTrip(t) {
    var cs = t.countries.map(countryBySlug).filter(Boolean);
    var html = '<section class="hero short">' + hero(t.cover.src, t.cover.alt, t.period, t.title, t.tagline, tripStamp(t)) + "</section>" +
      '<div class="wrap"><div class="c-body"><div><p class="intro">' + esc(t.intro) + "</p>" +
      (t.route && t.route.length ? '<ol class="route" aria-label="Route">' + t.route.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>" : "") +
      '</div><aside class="fact-card"><h2>Onze reis</h2><dl>' +
      "<div><dt>Periode</dt><dd>" + esc(t.period) + "</dd></div><div><dt>Nachten</dt><dd>" + t.nights + "</dd></div>" +
      (t.with ? "<div><dt>Met</dt><dd>" + esc(t.with) + "</dd></div>" : "") +
      cs.map(function (c) { return '<div><dt>Bestemming</dt><dd><a href="' + cpath(c) + '">' + esc(c.name) + "</a></dd></div>"; }).join("") +
      "</dl></aside></div>";

    html += section("Dag per dag",
      '<nav class="day-index" aria-label="Dagen">' + t.days.map(function (d, i) {
        return '<a href="' + tpath(t) + "#dag-" + (i + 1) + '"><b>' + (i + 1) + "</b><span>" + esc(d.title) + "</span></a>";
      }).join("") + "</nav>" +
      '<div class="days">' + t.days.map(function (d, i) {
        var links = (d.places || []).map(function (slug) {
          var c = cs[0], a = c && places(c).filter(function (x) { return x.slug === slug; })[0];
          return a ? '<a class="chip" href="' + cpath(c) + a.slug + '/">' + esc(a.t) + " " + ARROW + "</a>" : "";
        }).join("");
        return '<article class="day" id="dag-' + (i + 1) + '"><header><span class="dnum">Dag ' + (i + 1) + "</span>" +
          '<span class="ddate">' + esc(d.date) + "</span>" +
          (d.temp ? '<span class="dtemp">' + d.temp + "°</span>" : "") +
          "<h3>" + esc(d.title) + "</h3></header>" +
          '<div class="dbody">' + d.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
          dayPhotos(d.photos) + hikeHtml(d.hike, i + 1) +
          (d.tips && d.tips.length ? '<ul class="tips">' + d.tips.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
          (links ? '<div class="dlinks"><span>Meer over</span>' + links + "</div>" : "") + "</article>";
      }).join("") + "</div>");

    if (t.stays && t.stays.length) {
      html += section("Waar we verbleven", '<div class="stays">' + t.stays.map(function (s) {
        return '<div class="stay">' + photo(s.photo) +
          '<div class="where">' + esc(s.place) + " · " + s.nights + " nachten</div>" +
          "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p>" +
          (s.perNight ? '<p class="pernight"><b>' + esc(s.perNight) + "</b> per nacht, voor ons tweeën</p>" : "") + "</div>";
      }).join("") + "</div>");
    }

    if (t.transport && t.transport.length) {
      html += section("Zo deden wij het", '<ul class="list">' + t.transport.map(item).join("") + "</ul>");
    }

    if (t.costPerDay && t.costPerDay.length) {
      html += section("Wat het ons kostte",
        '<div class="cost-panel"><div class="perday">' + t.costPerDay.map(function (k) {
          return "<div><b>" + esc(k.amount) + "</b><span>" + esc(k.label) + "<small>" + esc(k.sub) + "</small></span></div>";
        }).join("") + "</div>" +
        (t.costNote ? '<p class="verdict">' + esc(t.costNote) +
          (t.costSource ? ' <a href="' + esc(t.costSource.url) + '" rel="noopener">' + esc(t.costSource.t) + "</a>" : "") + "</p>" : "") + "</div>",
        "Per dag, voor ons tweeën.");
    }

    html += section("Alles over de bestemming",
      '<div class="dest-links">' + cs.map(function (c) {
        return '<a class="card dest" href="' + cpath(c) + '">' + photo(c.cover && c.cover.src ? { src: c.cover.src, alt: c.cover.alt } : { alt: c.name }) +
          '<div><span class="label">Bestemming</span><h3>' + esc(c.name) + "</h3><p>Praktisch, er geraken en de plekken die we bezochten.</p>" +
          '<span class="more">Bekijk de bestemming ' + ARROW + "</span></div></a>";
      }).join("") + "</div>");

    html += "</div>";
    $("trip").innerHTML = html;
    setTimeout(function () { initHikes(t); }, 0);
  }

  /* ---------- router ---------- */

  var BASE = new URL(document.baseURI).pathname;
  var SITE = (window.SITE_URL || "").replace(/\/?$/, "/");

  function setMeta(title, desc, path, noindex) {
    document.title = title;
    function tag(sel, make, attr, val) {
      var el = document.head.querySelector(sel);
      if (!el) { el = document.createElement(make); document.head.appendChild(el); }
      Object.keys(attr).forEach(function (k) { el.setAttribute(k, attr[k]); });
      return el;
    }
    tag('meta[name="description"]', "meta", { name: "description", content: desc });
    tag('link[rel="canonical"]', "link", { rel: "canonical", href: SITE + path });
    tag('meta[property="og:title"]', "meta", { property: "og:title", content: title });
    tag('meta[property="og:description"]', "meta", { property: "og:description", content: desc });
    tag('meta[property="og:url"]', "meta", { property: "og:url", content: SITE + path });
    var r = document.head.querySelector('meta[name="robots"]');
    if (noindex) tag('meta[name="robots"]', "meta", { name: "robots", content: "noindex" });
    else if (r) r.remove();
  }

  var HOME_DESC = "Travel Mustache: reisinspiratie per land, van plaatsen waar Rob en Joke zelf verbleven.";

  function route() {
    // oude hash-links (#/land, #/kaart) doorsturen naar de echte adressen
    if (/^#\//.test(location.hash)) {
      var h = location.hash.replace(/^#\/?/, "");
      var target = "";
      if (h === "kaart") target = "#kaart";
      else if (h === "landen") target = "#bestemmingen";
      else if (h) target = "bestemmingen/" + h.replace(/\/?$/, "/");
      location.replace(BASE + target);
      return;
    }
    var parts = location.pathname.slice(BASE.length).split("/").filter(Boolean);
    var c = parts[0] === "bestemmingen" && parts[1] ? countryBySlug(parts[1]) : null;
    var t = parts[0] === "reizen" && parts[1] ? trips.filter(function (x) { return x.slug === parts[1]; })[0] : null;
    var anchor = !c && !t && /^#(reizen|kaart|bestemmingen)$/.test(location.hash) ? location.hash.slice(1) : null;
    if (!c && location.hash === "#landen") anchor = "bestemmingen";

    $("home").hidden = !!(c || t);
    $("country").hidden = !c;
    $("trip").hidden = !t;

    var act = parts[2];
    document.body.classList.toggle("has-hero", !c || (c.done && !act));
    if (t) {
      document.body.classList.add("has-hero");
      renderTrip(t);
      setMeta(t.title + " · Travel Mustache", t.tagline || excerpt(t.intro, 155), tpath(t));
      var m = /^#dag-\d+$/.test(location.hash) && $(location.hash.slice(1));
      if (m) setTimeout(function () { m.scrollIntoView(); }, 30); else window.scrollTo(0, 0);
      return;
    }
    if (c) {
      var a = act && places(c).filter(function (x) { return x.slug === act; })[0];
      if (a) {
        renderPlace(c, a);
        setMeta(a.t + " · " + c.name + " · Travel Mustache", excerpt(a.text || c.tagline || c.intro || "", 155), cpath(c) + a.slug + "/");
      } else {
        renderCountry(c);
        setMeta(c.name + " · Travel Mustache", c.done ? (c.tagline || excerpt(c.intro || "", 155)) : c.name + ": deze pagina volgt binnenkort.", cpath(c), !c.done);
      }
      window.scrollTo(0, 0);
      return;
    }

    setMeta("Travel Mustache", HOME_DESC, "");
    if (geoLayer) geoLayer.eachLayer(function (l) { geoLayer.resetStyle(l); });
    if (map) setTimeout(function () { map.invalidateSize(); }, 0);
    if (anchor) setTimeout(function () { $(anchor).scrollIntoView(); }, 30);
    else window.scrollTo(0, 0);
  }

  function onScroll() { document.body.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  window.__routes = function () { return { countries: countries.map(function (c) { return { slug: c.slug, done: !!c.done, acts: places(c).map(function (a) { return a.slug; }) }; }), trips: trips.map(function (t) { return t.slug; }) }; };

  renderHome();
  renderMap();
  window.addEventListener("hashchange", route);
  window.addEventListener("popstate", route);
  route();
})();
