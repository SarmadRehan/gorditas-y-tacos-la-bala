# Gorditas y Tacos La Bala: Landing Page Prototype

A demo landing page for Gorditas y Tacos La Bala, a taquería with two Houston locations. It is
built as a client prototype and is not the restaurant's official website; a banner at the top
of the page says so.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Rye (western display, like the storefront sign), Oswald (labels),
  Nunito Sans (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles, favicon
  components/     one component per page section, plus Wordmark, PapelPicado and Greca motifs
  data/           restaurant.ts: locations, hours, favorites, highlights, menu, reviews
  assets/images/  optimized photos (statically imported)
```

All business content lives in `src/data/restaurant.ts`, so menu, location and hours updates
don't touch any component.

## Content sources

- **Client brief**: demo banner, both locations and South Post Oak hours, customer favorites,
  review highlights, kids' menu, and the "coming soon" ordering placeholder.
- **Menu items and descriptions**: the South Post Oak listing on Restaurantji (Oct 2026).
- **Phone (713) 637-4413**: the same listing, and the phone number printed on the restaurant's cups.
- **Branding** (burgundy, lime, green ribbon, "Con Sabor Mexicano"): the storefront sign and
  logo cups in the listing's Google photos. There is no clean logo file, so the wordmark is
  type-set in CSS.
- **Review quotes**: Restaurantji customer reviews (March 2026, May 2025).

No source publishes prices, so the page shows none. Hours for FM 1960 are not published, so it
reads "Call for hours".

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/gorditas-y-tacos-la-bala` (the Pages project path), adds
`.nojekyll` so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch.
If the repository is renamed, update the base path in the `deploy` script.

## Notes

- The page is marked `noindex` so the demo never competes with the restaurant's own listings.
- Online ordering isn't part of the prototype. Every order button opens a "coming soon" dialog
  (`src/components/OrderDialog.tsx`) that offers to call the South Post Oak location instead.
