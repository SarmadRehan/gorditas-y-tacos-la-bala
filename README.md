# Tacos La Bala: Landing Page Prototype

A demo landing page for Tacos La Bala, a family-owned taquería chain in Greater Houston. It is
built as a client prototype and is not the restaurant's official website.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Archivo Black (wordmark and headings), Oswald (labels), Nunito Sans (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles, favicon
  components/     one component per page section, plus Wordmark, PapelPicado and Serape motifs
  data/           restaurant.ts: menu, fillings grid, locations, hours, favorites, gallery
  assets/images/  optimized food photos (statically imported)
  lib/            price formatting
```

All business content lives in `src/data/restaurant.ts`, so menu, price, location and hours
updates don't touch any component.

## Content sources

Collected in October 2026:

- **Menu, prices, photos, hours and rating**: the Northside location's Uber Eats listing
  (9919 North Fwy). These are delivery prices; in-store prices on the printed menu are lower.
- **Branding** (colors, wordmark style, "Con Sabor a México", "¡No somos los únicos, pero sí los
  mejores!"): the restaurant's printed menu board.
- **Other locations**: Houstonia Magazine.
- **History** (1973 taco truck in Tampico): What Now Houston.
- **Press quote**: Houstonia Magazine.

There is no clean logo file, so the wordmark is type-set in CSS to match the menu board.
Confirm prices, hours and the location list with the client before going live.

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

This builds with `NEXT_PUBLIC_BASE_PATH=/tacos-la-bala` (the Pages project path), adds
`.nojekyll` so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch.
If the repository is renamed, update the base path in the `deploy` script.

## Notes

- The page is marked `noindex` so the demo never competes with the restaurant's own listings.
- Online ordering isn't part of the prototype. Every order button opens a "coming soon" dialog
  (`src/components/OrderDialog.tsx`) that offers to call the restaurant instead.
