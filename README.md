# John Pendergrass — Portfolio

Personal portfolio site for John Pendergrass — AI practitioner, Certified ScrumMaster, and educator.

**Live site:** [johnwp8253.github.io](https://johnwp8253.github.io) *(GitHub Pages)*

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Plain CSS — one file per component in `src/styles/` |
| Data | `src/data/content.js` — portfolio content decoupled from markup |
| Deploy | `vite build` → static `dist/` to GitHub Pages |

No CSS framework, no UI library, no unnecessary dependencies.

## Project structure

```
src/
├── components/     # One component per section
├── data/
│   └── content.js  # All portfolio content as plain JS objects
├── styles/         # One CSS file per component + globals
├── App.jsx         # Root — mounts sections, runs IntersectionObserver
└── main.jsx
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Design decisions

- **Plain CSS over a framework** — readable at a glance, no abstraction to decode
- **Content in `data/content.js`** — updating the portfolio means editing one data file, not hunting through JSX
- **IntersectionObserver for scroll animations** — no animation library, ~10 lines of vanilla JS
- **`base: './'` in vite.config.js** — assets resolve correctly on GitHub Pages without a custom domain
