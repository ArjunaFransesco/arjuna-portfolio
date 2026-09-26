# Arjuna Fransesco — Portfolio

Portfolio: https://arjunafransesco.github.io/arjuna-portfolio/

The published site is the static `index.html` page. Styles and interactions live in `assets/portfolio.css` and `assets/portfolio.js`. Fonts and GSAP are served locally from `assets/vendor/`.

## Development

Run `node server.cjs`, then open http://127.0.0.1:5173/.

## Build and publish

Run `npm run build` (no dependency installation required). The build checks local asset references and navigation anchors, then copies the public website to `dist/`.

Pushing to `main` runs the GitHub Pages workflow and publishes `dist/` at the existing portfolio URL. The earlier React prototype in `src/` is retained but is not the published page.

## Content

The portfolio includes 13 projects, work experience, education, skills, courses, contact links, a customer churn simulation, and a command terminal. Project filters and all essential content work independently of animation. Scroll animations respect reduced-motion preferences. The churn experiment is a weighted logistic simulation, not a trained predictive model.


<!-- Last Maintenance Audit: 2026-09-26 -->
