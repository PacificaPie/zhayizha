# 扎一扎 · Pin a Wish

Public product showcase: **https://pacificapie.github.io/zhayizha/**

Turn travel saves into a map, shape a day, and adjust it to your pace. This bilingual interactive concept uses original sample posts and six public Mexico City locations. It includes a 25-second walkthrough, source lookups, two-day itinerary changes, and fixed example lunch reservations. Planning is a preset demonstration, not a live route optimizer.

## Development

Node.js 22.13+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

This is a standalone React + Vite frontend. Relative asset paths work under `/zhayizha/` as well as a custom domain. `?lang=en` opens English; `?view=film` opens historical recordings; `?view=get` retains the explicitly labeled v0.2 source trial. Main-branch pushes build and publish through GitHub Actions. Repository Settings → Pages uses GitHub Actions as its source.

## Scope and contact

- No server, model API, account access, Google Maps writes, analytics, or form storage. Preview requests open a mail draft to the public contact address; the visitor sends it themselves.
- Demo posts and SVG illustrations are original, not private user posts or photos of the buildings.
- Public OpenStreetMap geometry and locations are attributed in [SOURCES.md](public/demo/SOURCES.md); displayed routes are illustrative, not navigation.
- Historical recordings show real local model extraction, one manually confirmed map entity, and public map lookup. They do not demonstrate unattended collection or saving. The v0.2 download is a historical source trial, not a production installer.
- This repository contains only reviewed frontend files and public demo/release assets. Production backend source, runtime data, profiles, credentials, raw account recordings, private reports and Site configuration are excluded.

Project background: [Pacifica’s portfolio](https://pacificapie.github.io/work/zhayizha.html).

The private Sites deployment remains a separate checkout. Changes to this public showcase are maintained here; do not overwrite it from the server-backed site without preserving relative URLs and email-based contact.
