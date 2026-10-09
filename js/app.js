(function () {
  "use strict";

  var countries = window.COUNTRIES;
  var $ = function (id) { return document.getElementById(id); };
  var map = null;

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

  function item(i) {
    var cls = i.ok === false ? ' class="concept"' : "";
    return "<li" + cls + "><strong>" + esc(i.t) + "</strong>" +
      (i.text ? "<p>" + esc(i.text) + "</p>" : "") + "</li>";
  }

  /* ---------- home ---------- */

  function renderGrid() {
    $("grid").innerHTML = countries.map(function (c) {
      return '<a class="tile" href="#/' + c.slug + '">' +
        photo(c.cover || { alt: c.name }) +
        "<h3>" + esc(c.name) + "</h3>" +
        (c.done
          ? "<p>" + esc(c.tagline || "") + "</p>"
          : '<p class="soon">volgt binnenkort</p>') +
        "</a>";
    }).join("");
  }

  function renderMap() {
    if (!window.L) {
      $("map").style.display = "none"; // zonder internet blijft het overzicht eronder werken
      return;
    }
    map = L.map("map", { scrollWheelZoom: false, worldCopyJump: true }).setView([36, 5], 3);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 8,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);
    countries.forEach(function (c) {
      var icon = L.divIcon({ className: "", html: '<div class="pin' + (c.done ? " done" : "") + '"></div>', iconSize: [16, 16] });
      L.marker(c.pin, { icon: icon, title: c.name, keyboard: true })
        .addTo(map)
        .bindTooltip(c.name, { direction: "top", offset: [0, -8] })
        .on("click", function () { location.hash = "#/" + c.slug; });
    });
  }

  /* ---------- landpagina ---------- */

  function section(title, inner) {
    return '<section class="block"><h2>' + title + "</h2>" + inner + "</section>";
  }

  function renderCountry(c) {
    var html = '<a class="back" href="#/">← Alle landen</a><h1>' + esc(c.name) + "</h1>";

    if (!c.done) {
      html += '<p class="intro">Deze pagina volgt binnenkort.</p>';
      $("country").innerHTML = html;
      return;
    }

    var hasConcept = JSON.stringify(c).indexOf('"ok":false') > -1;

    html += '<p class="tagline">' + esc(c.tagline) + "</p>" +
      photo(c.cover, "cover") +
      '<div class="facts">' +
      "<div><b>Wanneer</b>" + esc(c.visited) + "</div>" +
      "<div><b>Nachten</b>" + c.nights + "</div>" +
      (c.with ? "<div><b>Met</b>" + esc(c.with) + "</div>" : "") +
      "</div>" +
      '<p class="intro narrow">' + esc(c.intro) + "</p>";

    if (hasConcept) {
      html += '<p class="concept-note">Concept: items met een gestippelde streep zijn nog niet bevestigd en kunnen nog wijzigen.</p>';
    }

    if (c.stays && c.stays.length) {
      html += section("Waar we verbleven", c.stays.map(function (s) {
        return '<div class="stay">' + photo(s.photo) +
          "<div><div class=\"where\">" + esc(s.place) + " · " + s.nights + " nachten</div>" +
          "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></div></div>";
      }).join(""));
    }

    if (c.activities && c.activities.length) {
      html += section("Wat we deden", '<ul class="list">' + c.activities.map(item).join("") + "</ul>");
    }

    if (c.transport && c.transport.length) {
      html += section("Er geraken", '<ul class="list">' + c.transport.map(item).join("") + "</ul>");
    }

    if (c.practical && c.practical.length) {
      html += section("Praktisch", '<ul class="list">' + c.practical.map(item).join("") + "</ul>");
    }

    if (c.costs && c.costs.length) {
      html += section("Wat wij betaalden",
        '<table class="costs">' + c.costs.map(function (k) {
          return "<tr><td>" + esc(k.post) + "</td><td>" +
            (k.amount == null ? '<span class="todo">nog in te vullen</span>' : esc(k.amount)) + "</td></tr>";
        }).join("") + "</table>" +
        (c.costNote ? '<p class="verdict">' + esc(c.costNote) + "</p>" : ""));
    }

    if (c.gallery && c.gallery.length) {
      html += section("Meer foto's", '<div class="gallery">' + c.gallery.map(function (g) { return photo(g); }).join("") + "</div>");
    }

    $("country").innerHTML = html;
  }

  /* ---------- router ---------- */

  function route() {
    var slug = location.hash.replace(/^#\/?/, "");
    var c = countries.filter(function (x) { return x.slug === slug; })[0];
    $("home").hidden = !!c;
    $("country").hidden = !c;
    if (c) {
      renderCountry(c);
      document.title = c.name + " · Rob op reis";
      window.scrollTo(0, 0);
    } else {
      document.title = "Rob op reis";
      if (map) setTimeout(function () { map.invalidateSize(); }, 0);
    }
  }

  renderGrid();
  renderMap();
  window.addEventListener("hashchange", route);
  route();
})();
