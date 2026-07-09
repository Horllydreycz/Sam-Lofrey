# Sam Lofrey — Nigerian Luxury Menswear

Marketing site for the Sam Lofrey tailoring brand. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # serve production build
npm run lint    # run eslint
```

## Structure

- `src/app/` — App Router entry (layout, page, global styles)
- `src/components/` — page sections (Navbar, Hero, Collections, Craftsmanship, About, Contact, Footer)
- `src/assets/` — images (optimized automatically via `next/image`)

## Notes

- Fonts (Playfair Display, Inter) are self-hosted at build time via `next/font`.
- `lucide-react` is pinned to `^0.577.0` — v1 removed brand icons (Instagram).
