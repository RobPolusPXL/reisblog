#!/usr/bin/env python3
"""Haalt de Strava-activiteiten op die in js/trips.js staan (strava: "<id>")
en schrijft route + cijfers naar js/strava-data.js.
Vereist env: STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN."""
import json, os, re, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API = "https://www.strava.com"

def call(url, data=None, token=None):
    req = urllib.request.Request(url, data=urllib.parse.urlencode(data).encode() if data else None)
    if token:
        req.add_header("Authorization", "Bearer " + token)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def thin(seq, n=220):
    if len(seq) <= n:
        return seq
    step = (len(seq) - 1) / (n - 1)
    return [seq[round(i * step)] for i in range(n)]

def fmt_time(sec):
    h, m = divmod(round(sec / 60), 60)
    return f"{h} u {m} min" if h else f"{m} min"

def main():
    ids = re.findall(r'strava:\s*"(\d+)"', open(os.path.join(ROOT, "js/trips.js"), encoding="utf-8").read())
    tok = call(API + "/oauth/token", {
        "client_id": os.environ["STRAVA_CLIENT_ID"],
        "client_secret": os.environ["STRAVA_CLIENT_SECRET"],
        "refresh_token": os.environ["STRAVA_REFRESH_TOKEN"],
        "grant_type": "refresh_token"})["access_token"]
    out = {}
    for i in ids:
        a = call(f"{API}/api/v3/activities/{i}", token=tok)
        s = call(f"{API}/api/v3/activities/{i}/streams?keys=latlng,altitude&key_by_type=true", token=tok)
        route = [[round(x, 6), round(y, 6)] for x, y in thin(s["latlng"]["data"])]
        alt = [round(v) for v in thin(s["altitude"]["data"])]
        label = re.sub(r"[^\w\s|\-]", "", a["name"]).strip()
        out[i] = {"label": label, "km": round(a["distance"] / 1000, 1), "tijd": fmt_time(a["moving_time"]),
                  "omhoog": round(a["total_elevation_gain"]), "hoogste": round(max(alt)), "route": route, "alt": alt}
        print("ok", i, label)
    with open(os.path.join(ROOT, "js/strava-data.js"), "w", encoding="utf-8") as f:
        f.write("// Automatisch gegenereerd door scripts/sync_strava.py - niet met de hand aanpassen\nwindow.STRAVA = "
                + json.dumps(out, separators=(",", ":"), ensure_ascii=False) + ";\n")

if __name__ == "__main__":
    main()
