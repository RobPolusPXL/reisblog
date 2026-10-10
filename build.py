#!/usr/bin/env python3
"""Genereert de statische pagina's (echte URL's per land en activiteit), sitemap.xml en robots.txt.

Gebruik:  python3 build.py
Vereist:  pip install playwright && playwright install chromium
Draai dit na elke wijziging in js/countries.js, js/app.js of template.html en commit de gegenereerde bestanden.
"""
import http.server, os, re, shutil, socketserver, subprocess, sys, threading
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
SITE = re.search(r'SITE_URL\s*=\s*"([^"]+)"', open("site.js").read()).group(1).rstrip("/") + "/"
SITE_PATH = urlparse(SITE).path  # bv. /reisblog/ of /
TEMPLATE = open("template.html", encoding="utf-8").read()
PORT = 8765

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    srv = socketserver.TCPServer(("127.0.0.1", PORT), Quiet)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv

def page_html(route, base):
    return TEMPLATE.replace('<base href="./">', '<base href="%s">' % base, 1)

def out_path(route):
    return os.path.join(ROOT, route, "index.html") if route else os.path.join(ROOT, "index.html")

def main():
    srv = serve()
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        ctx = b.new_context(viewport={"width": 1280, "height": 900})
        pg = ctx.new_page()

        def render(route, base, template_route=None):
            url = "http://127.0.0.1:%d/%s" % (PORT, route)
            html = page_html(route, base)
            def handler(r):
                if r.request.resource_type == "document":
                    r.fulfill(status=200, content_type="text/html; charset=utf-8", body=html)
                else:
                    r.continue_()
            pg.route("**/*", handler)
            pg.goto(url, wait_until="networkidle")
            pg.wait_for_timeout(300)
            data = pg.evaluate("""() => {
                const m = document.getElementById('map');
                if (m) { m.className = ''; m.removeAttribute('style'); m.removeAttribute('tabindex'); m.innerHTML = ''; }
                document.body.classList.remove('scrolled');
                return '<!doctype html>\\n' + document.documentElement.outerHTML;
            }""")
            pg.unroute("**/*")
            return data

        # routes bepalen
        pg.route("**/*", lambda r: r.fulfill(status=200, content_type="text/html; charset=utf-8", body=page_html("", "./")) if r.request.resource_type == "document" else r.continue_())
        pg.goto("http://127.0.0.1:%d/" % PORT, wait_until="networkidle")
        info = pg.evaluate("window.__routes()")
        pg.unroute("**/*")

        routes = [""]
        sitemap = [""]
        for c in info:
            routes.append(c["slug"] + "/")
            if c["done"]: sitemap.append(c["slug"] + "/")
            for a in c["acts"]:
                routes.append(c["slug"] + "/" + a + "/")
                if c["done"]: sitemap.append(c["slug"] + "/" + a + "/")

        # oude gegenereerde mappen opruimen
        for c in info:
            shutil.rmtree(os.path.join(ROOT, c["slug"]), ignore_errors=True)

        for route in routes:
            depth = len([p for p in route.split("/") if p])
            html = render(route, "../" * depth or "./")
            p = out_path(route)
            os.makedirs(os.path.dirname(p), exist_ok=True)
            open(p, "w", encoding="utf-8").write(html)
            print("ok", route or "/")

        # 404: de homepagina met een absolute base zodat assets op elke diepte laden
        h404 = render("", SITE_PATH)
        h404 = h404.replace("</head>", '<meta name="robots" content="noindex"></head>', 1)
        open("404.html", "w", encoding="utf-8").write(h404)
        b.close()
    srv.shutdown()

    urls = "\n".join("  <url><loc>%s%s</loc></url>" % (SITE, r) for r in sitemap)
    open("sitemap.xml", "w", encoding="utf-8").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n%s\n</urlset>\n' % urls)
    open("robots.txt", "w", encoding="utf-8").write("User-agent: *\nAllow: /\n\nSitemap: %ssitemap.xml\n" % SITE)
    print("klaar:", len(routes), "pagina's,", len(sitemap), "in de sitemap")

if __name__ == "__main__":
    main()
