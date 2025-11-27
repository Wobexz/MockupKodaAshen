# KODA Studio Website

Animated multi-page marketing site for the KODA indie studio and its feature title **Ashen Throne**. Built with TypeScript, SCSS, and GSAP for premium motion design.

## Requirements
- Node.js 18+

## Setup
```bash
npm install
```

## Build assets
Compile SCSS and TypeScript to the `public/` folder:
```bash
npm run build
```

## View locally
Open `index.html` or `ashen-throne.html` in a browser after running the build. Use a lightweight static server for best results:
```bash
npx http-server .
```

## Structure
- `index.html` — main studio one-pager
- `ashen-throne.html` — dedicated game page
- `src/scss` — SCSS sources
- `src/ts` — TypeScript sources
- `public/css`, `public/js` — compiled assets
- `assets/images` — inline SVG illustration placeholders

## Notes
- Animations use GSAP + ScrollTrigger via CDN.
- Pixel-art hero uses a flat 3D tilt interaction driven by TypeScript.
