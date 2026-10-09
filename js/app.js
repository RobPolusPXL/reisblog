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
    $("hero").innerHTML = hero("images/home/costa-rica-palmen-aan-zee.webp", "Rob tussen palmbomen, kijkend over zee in Costa Rica",
      "Reisblog van Rob en Joke", "Waar we al geweest zijn",
      "Reisinspiratie per land, enkel over plaatsen waar we zelf verbleven en dingen die we zelf deden.");

    var done = countries.filter(function (c) { return c.done; });
    var soon = countries.filter(function (c) { return !c.done; });
    $("grid").innerHTML = done.map(function (c, i) {
      return '<a class="card' + (i === 0 ? " big" : "") + '" href="#/' + c.slug + '">' +
        photo(c.cover && c.cover.src ? { src: c.cover.src, alt: c.cover.alt } : { alt: c.name }) +
        "<div><span class=\"label\">" + esc(c.name) + " · " + c.nights + " nachten</span>" +
        "<h3>" + esc(c.tagline || c.name) + "</h3>" +
        (c.intro ? "<p>" + esc(excerpt(c.intro, 150)) + "</p>" : "") +
        '<span class="more">Lees verder ' + ARROW + "</span></div></a>";
    }).join("");
    $("soon").innerHTML = soon.length
      ? "<h3>Hier volgen nog meer landen</h3><ul>" + soon.map(function (c) {
          return '<li><a class="chip" href="#/' + c.slug + '">' + esc(c.name) + "</a></li>";
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
        return { color: "#ffffff", weight: 0.8, fillColor: c ? fill(c) : "#e9e1d2", fillOpacity: 1 };
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

  function section(title, inner, sub) {
    return '<section class="block"><h2>' + title + "</h2>" + (sub ? '<p class="sub">' + sub + "</p>" : "") + inner + "</section>";
  }

  function stampHtml(c) {
    return '<div class="stamp" aria-hidden="true"><div>Bezocht<b>' + esc(c.visited.replace(/^.*?(\d+ [a-z]+ \d{4})$/i, "$1").replace(/^\d+ /, "")) + "</b>" + c.nights + " nachten</div></div>";
  }

  function renderCountry(c) {
    if (!c.done) {
      $("country").innerHTML = '<div class="wrap"><a class="back" href="#/landen">' + ARROW + " Alle landen</a>" +
        '<h1 style="font-size:clamp(40px,7vw,88px);margin-top:28px">' + esc(c.name) + "</h1>" +
        '<p class="intro narrow" style="margin-top:24px">Deze pagina volgt binnenkort.</p></div>';
      return;
    }

    var hasConcept = JSON.stringify(c).indexOf('"ok":false') > -1;
    var pl = places(c);
    var rest = (c.activities || []).filter(function (a) { return !(a.photos && a.photos.length); });
    var html = '<section class="hero short">' + hero(c.cover.src, c.cover.alt, c.visited, c.name, c.tagline, stampHtml(c)) + "</section>" +
      '<div class="wrap">' +
      '<div class="c-body"><div><p class="intro">' + esc(c.intro) + "</p>" +
      (hasConcept ? '<p class="concept-note">Concept: items met een gestippelde streep zijn nog niet bevestigd en kunnen nog wijzigen.</p>' : "") + "</div>" +
      '<aside class="fact-card"><h2>In het kort</h2><dl>' +
      (c.info || []).map(function (r) { return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("") +
      "<div><dt>Periode</dt><dd>" + esc(c.visited) + "</dd></div><div><dt>Nachten</dt><dd>" + c.nights + "</dd></div>" +
      (c.with ? "<div><dt>Met</dt><dd>" + esc(c.with) + "</dd></div>" : "") + "</dl></aside></div>";

    if (pl.length) {
      html += section("Wat we deden", '<div class="places">' + pl.map(function (a) {
        return '<a class="place" href="#/' + c.slug + "/" + a.slug + '">' + photo(a.photos[0]) +
          "<h3>" + esc(a.t) + "</h3>" + (a.text ? "<p>" + esc(excerpt(a.text, 90)) + "</p>" : "") + "</a>";
      }).join("") + "</div>" + (rest.length
        ? '<div class="also"><h3>Ook gedaan</h3><ul>' + rest.map(function (a) {
            return '<li><span class="chip' + (a.ok === false ? " concept" : "") + '">' + esc(a.t) + "</span></li>";
          }).join("") + "</ul></div>" : ""),
        "Klik op een plaats voor foto's en uitleg.");
    }

    if (c.stays && c.stays.length) {
      html += section("Waar we verbleven", '<div class="stays">' + c.stays.map(function (s) {
        return '<div class="stay">' + photo(s.photo) +
          '<div class="where">' + esc(s.place) + " · " + s.nights + " nachten</div>" +
          "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p>" +
          (s.perNight ? '<p class="pernight"><b>' + esc(s.perNight) + "</b> per nacht, voor ons tweeën</p>" : "") + "</div>";
      }).join("") + "</div>");
    }

    if (c.getThere && c.getThere.length) {
      html += section("Er geraken",
        '<div class="getthere">' + c.getThere.map(function (g) {
          return '<div class="gt"><h3>' + esc(g.from) + "</h3>" +
            (g.routes.length ? "<ul>" + g.routes.map(function (r) {
              return "<li><b>" + esc(r.airport) + "</b><span>" + esc(r.airline) + " naar " + esc(r.to) +
                (r.seasonal ? " · seizoensgebonden, controleer de data" : "") + (r.ours ? " · zo vlogen wij" : "") + "</span></li>";
            }).join("") + "</ul>" : "") +
            (g.note ? "<p>" + esc(g.note) + "</p>" : "") + "</div>";
        }).join("") + "</div>" +
        (c.transport && c.transport.length ? '<h3 class="subh">Zo deden wij het</h3><ul class="list">' + c.transport.map(item).join("") + "</ul>" : ""),
        "Vluchten naar Bosnië vanuit België, Nederland en Duitsland, gecontroleerd in oktober 2026. Dienstregelingen veranderen, controleer altijd bij de maatschappij.");
    } else if (c.transport && c.transport.length) html += section("Er geraken", '<ul class="list">' + c.transport.map(item).join("") + "</ul>");
    if (c.practical && c.practical.length) html += section("Praktisch", '<ul class="list">' + c.practical.map(item).join("") + "</ul>");

    if (c.costPerDay && c.costPerDay.length) {
      html += section("Wat het ons kostte",
        '<div class="cost-panel"><div class="perday">' + c.costPerDay.map(function (k) {
          return "<div><b>" + esc(k.amount) + "</b><span>" + esc(k.label) + "<small>" + esc(k.sub) + "</small></span></div>";
        }).join("") + "</div>" +
        (c.costNote ? '<p class="verdict">' + esc(c.costNote) +
          (c.costSource ? ' <a href="' + esc(c.costSource.url) + '" rel="noopener">' + esc(c.costSource.t) + "</a>" : "") + "</p>" : "") + "</div>",
        "Per dag, voor ons tweeën.");
    }

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
    var html = '<div class="wrap"><div class="crumbs"><a href="#/landen">Landen</a> › <a href="#/' + c.slug + '">' + esc(c.name) + "</a> › <span>" + esc(a.t) + "</span></div>" +
      '<div class="s-head"><span class="label">' + esc(c.name) + "</span><h1>" + esc(a.t) + "</h1>" +
      (a.text ? '<p class="s-lead">' + esc(a.text) + "</p>" : "") + "</div>" +
      (a.ok === false ? '<p class="concept-note s-note">Concept: dit is nog niet bevestigd.</p>' : "") +
      '<div class="s-photos' + (n === 2 ? " two" : "") + '">' + a.photos.map(figure).join("") + "</div>" +
      '<div class="s-more"><h2>Meer in ' + esc(c.name) + '</h2><div class="s-nav">' +
      (prev ? '<a class="prev" href="#/' + c.slug + "/" + prev.slug + '"><small>Vorige</small><b>' + esc(prev.t) + "</b></a>" : "") +
      (next ? '<a class="next" href="#/' + c.slug + "/" + next.slug + '"><small>Volgende</small><b>' + esc(next.t) + "</b></a>" : "") +
      '</div><a class="back" href="#/' + c.slug + '">' + ARROW + " Terug naar " + esc(c.name) + "</a></div></div>";
    $("country").innerHTML = html;
  }

  /* ---------- router ---------- */

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var slug = parts[0];
    var c = countries.filter(function (x) { return x.slug === slug; })[0];
    var anchor = slug === "kaart" || slug === "landen" ? slug : null;

    $("home").hidden = !!c;
    $("country").hidden = !c;

    document.body.classList.toggle("has-hero", !c || (c.done && !parts[1]));
    if (c) {
      var a = parts[1] && places(c).filter(function (x) { return x.slug === parts[1]; })[0];
      if (a) {
        renderPlace(c, a);
        document.title = a.t + " · " + c.name + " · Travel Mustache";
      } else {
        renderCountry(c);
        document.title = c.name + " · Travel Mustache";
      }
      window.scrollTo(0, 0);
      return;
    }

    document.title = "Travel Mustache";
    if (map) setTimeout(function () { map.invalidateSize(); }, 0);
    if (anchor) setTimeout(function () { $(anchor).scrollIntoView(); }, 30);
    else window.scrollTo(0, 0);
  }

  function onScroll() { document.body.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  renderHome();
  renderMap();
  window.addEventListener("hashchange", route);
  route();
})();
