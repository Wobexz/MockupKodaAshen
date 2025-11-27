# KODA — Animated Indie Game Studio Site

Two-page, GSAP-powered website for KODA with smooth scroll, parallax, pixel-art hero tilt, and animated sections. Built with TypeScript, SCSS, and modular scripts.

## Requirements
- Node.js 18+ (only needed if you want to recompile assets)

## Setup
Precompiled JS/CSS live in `dist/` and GSAP loads from CDN, so you can open `index.html` directly in a browser.

To recompile locally (when registry access is available):
```bash
npm install
npm run build   # compile TypeScript to dist/scripts and SCSS to dist/styles
npm run dev     # watch TypeScript/SCSS and serve the site at http://localhost:3000
```

If your environment blocks npm registry access, the shipped `dist/` assets and CDN GSAP still provide a ready-to-run build.

## Structure
- `index.html` — KODA studio one-page site
- `ashen.html` — Ashen Throne feature page
- `src/scripts` — TypeScript source (shared utilities + per-page entry files)
- `src/styles` — SCSS with variables and base styles
- `assets/img` — Placeholder artwork for hero and project cards

## Notes
- Animations use GSAP + ScrollTrigger via lightweight helpers in `src/scripts/utils/animations.ts`.
- Parallax layers respond to pointer movement; pixel-art hero cards tilt in 3D.
- All sections animate into view; forms/buttons use smooth hover transitions.
