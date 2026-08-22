# Gilliom Frontline Digital

Production portfolio for secure internal tools, operations dashboards, and full-stack SaaS products.

## Live demo

- [Railway production demo](https://frontlinedigital-1-production.up.railway.app)
- [Custom domain](https://gilliomfrontlinedigital.com)

The application source is under [`DevCollective/`](DevCollective/). See the [full project documentation](DevCollective/README.md) for the portfolio demo directory, local setup, architecture, testing, and deployment details.

## Recent changes

- **Case study pages** — Dedicated pages for EastBridge (`/case-studies/eastbridge`), AgriPay (`/case-studies/agripay`), and DBOps (`/case-studies/dbops`) with problem / solution / impact layout
- **Portfolio SEO** — Visible Solutions section on the homepage and `ItemList` JSON-LD structured data in `index.html` for all twelve promoted products
- **Agency positioning** — About page copy updated to client-service language; job-seeker phrases removed
- **TS cleanup** — `tsconfig.json` deprecation fix, duplicate React import, deprecated `Github` icon, readonly props

## Local frontend

From the repository root:

```bash
./start-frontend.sh
```

The frontend runs at [http://localhost:3000](http://localhost:3000).