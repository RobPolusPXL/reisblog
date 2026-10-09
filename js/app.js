(function () {
  "use strict";

  var countries = window.COUNTRIES;
  var $ = function (id) { return document.getElementById(id); };
  var map = null;

  var PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

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

  function hero(src, alt, pillText, title, text, short) {
    return '<div class="hero' + (short ? " short" : "") + '">' +
      '<img src="' + esc(src) + '" alt="' + esc(alt) + '" fetchpriority="high">' +
      '<div class="wrap hero-text">' +
      (pillText ? '<span class="pill">' + PIN + esc(pillText) + "</span>" : "") +
      "<h1>" + esc(title) + "</h1>" +
      (text ? "<p>" + esc(text) + "</p>" : "") +
      "</div></div>";
  }

  /* ---------- home ---------- */

  function renderHome() {
    var first = countries.filter(function (c) { return c.done && c.cover && c.cover.src; })[0];
    $("hero").outerHTML = first
      ? hero(first.cover.src, first.cover.alt, null, "Waar we al geweest zijn",
          "Reisinspiratie per land, enkel over plaatsen waar we zelf verbleven en dingen die we zelf deden.")
          .replace('class="hero"', 'class="hero" id="hero"')
      : '<section class="wrap" id="hero"><h1>Waar we al geweest zijn</h1></section>';

    var done = countries.filter(function (c) { return c.done; });
    var soon = countries.filter(function (c) { return !c.done; });
    $("grid").innerHTML = done.map(function (c) {
      return '<a class="card done" href="#/' + c.slug + '">' +
        (c.cover && c.cover.src ? '<img src="' + esc(c.cover.src) + '" alt="" loading="lazy">' : "") +
        '<span class="pill">' + PIN + esc(c.name) + "</span>" +
        "<h3>" + esc(c.tagline || c.name) + "</h3>" +
        '<span class="more">Lees verder ' + ARROW + "</span></a>";
    }).join("");
    $("soon").innerHTML = soon.length
      ? "<h3>Hier volgen nog meer landen</h3><ul>" + soon.map(function (c) {
          return '<li><a class="chip" href="#/' + c.slug + '">' + PIN + esc(c.name) + "</a></li>";
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
    var fill = function (c) { return c.done ? "#3f9a8f" : "#bfdad4"; };

    map = L.map("map", {
      scrollWheelZoom: false, worldCopyJump: false, zoomSnap: 0.25,
      minZoom: 2, maxBounds: [[-60, -200], [85, 200]], attributionControl: false
    });

    L.geoJSON(window.WORLD, {
      style: function (f) {
        var c = byIso[f.id];
        return { color: "#ffffff", weight: 0.8, fillColor: c ? fill(c) : "#e3e9e7", fillOpacity: 1 };
      },
      onEachFeature: function (f, layer) {
        var c = byIso[f.id];
        if (!c) return;
        layer.bindTooltip(c.name, { sticky: true });
        layer.on("click", function () { location.hash = "#/" + c.slug; });
        layer.on("mouseover", function () { layer.setStyle({ fillColor: "#0f766e" }); });
        layer.on("mouseout", function () { layer.setStyle({ fillColor: fill(c) }); });
      }
    }).addTo(map);

    map.fitBounds(L.latLngBounds(countries.map(function (c) { return c.pin; })), { padding: [40, 40], maxZoom: 4 });
  }

  /* ---------- landpagina ---------- */

  function section(title, inner) {
    return '<section class="block"><h2>' + title + "</h2>" + inner + "</section>";
  }

  function renderCountry(c) {
    if (!c.done) {
      $("country").innerHTML = '<div class="wrap"><a class="back" href="#/landen">Alle landen</a>' +
        '<h1 style="font-size:clamp(40px,7vw,88px);margin-top:28px">' + esc(c.name) + "</h1>" +
        '<p class="intro narrow">Deze pagina volgt binnenkort.</p></div>';
      return false;
    }

    var hasConcept = JSON.stringify(c).indexOf('"ok":false') > -1;
    var html = hero(c.cover.src || "", c.cover.alt, c.name, c.name, c.tagline, true);
    if (!c.cover.src) html = '<div class="wrap"><h1>' + esc(c.name) + "</h1></div>";

    html += '<div class="wrap">' +
      '<div class="facts"><span>' + esc(c.visited) + "</span><span>" + c.nights + " nachten</span>" + (c.with ? "<span>met " + esc(c.with) + "</span>" : "") + "</div>" +
      '<p class="intro narrow">' + esc(c.intro) + "</p>" +
      (hasConcept ? '<p class="concept-note">Concept: items met een gestippelde streep zijn nog niet bevestigd en kunnen nog wijzigen.</p>' : "");

    if (c.stays && c.stays.length) {
      html += section("Waar we verbleven", '<div class="stays">' + c.stays.map(function (s) {
        return '<div class="stay">' + photo(s.photo) +
          '<div class="where">' + esc(s.place) + ", " + s.nights + " nachten</div>" +
          "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></div>";
      }).join("") + "</div>");
    }

    if (c.activities && c.activities.length) {
      html += section("Wat we deden", c.activities.map(function (x) {
        var has = x.photos && x.photos.length;
        var shots = has ? x.photos : [{ alt: x.t }];
        return '<div class="activity' + (x.ok === false ? " concept" : "") + '">' +
          '<div class="tekst"><h3>' + esc(x.t) + "</h3>" +
          (x.text ? "<p>" + esc(x.text) + "</p>" : '<p class="todo">Uitleg volgt.</p>') + "</div>" +
          '<div class="shots n' + shots.length + (has ? "" : " none") + '">' + shots.map(figure).join("") + "</div></div>";
      }).join(""));
    }

    if (c.transport && c.transport.length) html += section("Er geraken", '<ul class="list">' + c.transport.map(item).join("") + "</ul>");
    if (c.practical && c.practical.length) html += section("Praktisch", '<ul class="list">' + c.practical.map(item).join("") + "</ul>");

    if (c.costs && c.costs.length) {
      html += section("Wat wij betaalden",
        '<table class="costs">' + c.costs.map(function (k) {
          return "<tr><td>" + esc(k.post) + (k.detail ? "<small>" + esc(k.detail) + "</small>" : "") + "</td><td>" +
            (k.amount == null ? '<span class="todo">nog in te vullen</span>' : esc(k.amount)) + "</td></tr>";
        }).join("") +
        (c.costTotal ? '<tr class="total"><td>Totaal' + (c.costTotal.detail ? "<small>" + esc(c.costTotal.detail) + "</small>" : "") + "</td><td>" + esc(c.costTotal.amount) + "</td></tr>" : "") +
        "</table>" +
        (c.costNote ? '<p class="verdict">' + esc(c.costNote) +
          (c.costSource ? ' <a href="' + esc(c.costSource.url) + '" rel="noopener">' + esc(c.costSource.t) + "</a>" : "") + "</p>" : ""));
    }

    if (c.gallery && c.gallery.length) {
      html += section("Meer foto's", '<div class="gallery">' + c.gallery.map(figure).join("") + "</div>");
    }

    html += '<a class="back" href="#/landen">Alle landen</a></div>';
    $("country").innerHTML = html;
    return true;
  }

  /* ---------- router ---------- */

  function route() {
    var slug = location.hash.replace(/^#\/?/, "");
    var c = countries.filter(function (x) { return x.slug === slug; })[0];
    var anchor = slug === "kaart" || slug === "landen" ? slug : null;

    $("home").hidden = !!c;
    $("country").hidden = !c;

    if (c) {
      var withHero = renderCountry(c);
      document.body.classList.toggle("has-hero", withHero);
      document.title = c.name + " · Rob op reis";
      window.scrollTo(0, 0);
      return;
    }

    document.body.classList.add("has-hero");
    document.title = "Rob op reis";
    if (map) setTimeout(function () { map.invalidateSize(); }, 0);
    if (anchor) setTimeout(function () { $(anchor).scrollIntoView(); }, 30);
    else window.scrollTo(0, 0);
  }

  renderHome();
  renderMap();
  window.addEventListener("hashchange", route);
  route();
})();
