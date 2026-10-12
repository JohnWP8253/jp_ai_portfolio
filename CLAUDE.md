# jp_ai_portfolio

Personal portfolio site (React + Vite), deployed to GitHub Pages.

## Branch workflow

- `main` is production. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys the live site.
- `staging` is the integration branch that sits in front of `main`.
- Cut feature branches from `origin/staging` and open pull requests with `--base staging`, not `main`.
- Changes reach `main` only through a `staging` -> `main` pull request, once the staged changes have been checked.
- Do not commit or push directly to `main` or `staging`.

## Content

- Site copy (projects, experience, contact links) lives in `src/data/content.js`.
- Project cards are rendered by `src/components/Projects.jsx`: `href` shows as "GitHub", `site` as "Live Site", `caseStudy` as "Case Study".
