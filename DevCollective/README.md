# Gilliom Frontline Digital

Marketing portfolio site for **Gilliom Frontline Digital** — internal tools, operations dashboards, and live production demos.

**Built by:** Barney Gilliom  
**Repository:** [https://github.com/dallas8000-ops/FrontLineDigital](https://github.com/dallas8000-ops/FrontLineDigital)

## Live site

| Site | URL |
| --- | --- |
| Custom domain | [https://gilliomfrontlinedigital.com](https://gilliomfrontlinedigital.com) |
| Railway fallback | [https://frontlinedigital-1-production.up.railway.app](https://frontlinedigital-1-production.up.railway.app) |
| Contact / admin API | [https://frontlinedigital-1-production.up.railway.app/api/health](https://frontlinedigital-1-production.up.railway.app/api/health) |

## Portfolio live demos (Railway)

All portfolio apps link to Railway production URLs. Canonical URLs are defined in `frontend/src/data/portfolioLiveUrls.ts`.

| Project | Live URL |
| --- | --- |
| EastBridge Ops Intelligence | [eastbridge-ops-production.up.railway.app](https://eastbridge-ops-production.up.railway.app) |
| AgriPay Logistics AI | [agripay-api-production.up.railway.app/demo](https://agripay-api-production.up.railway.app/demo) |
| DBOps Control Center | [dbops-web-production.up.railway.app](https://dbops-web-production.up.railway.app) |
| Deployment & Stripe Automation Center | [stripe-installer-production.up.railway.app/login](https://stripe-installer-production.up.railway.app/login) |
| Elite Fintech Systems | [elite-fintech-web-production.up.railway.app/demo](https://elite-fintech-web-production.up.railway.app/demo) |
| Kistie Store | [kistie-store-production.up.railway.app](https://kistie-store-production.up.railway.app) |
| SilverFox | [silverfox-production.up.railway.app](https://silverfox-production.up.railway.app) |
| RigHand AI | [righand-production.up.railway.app](https://righand-production.up.railway.app) |
| Django REST Blog API | [blog-2-production-72bc.up.railway.app](https://blog-2-production-72bc.up.railway.app) |
| React Store Catalog | [react-store-catalog-1-production.up.railway.app](https://react-store-catalog-1-production.up.railway.app) |
| PC Checker Extreme | [pc-checker-extreme-production.up.railway.app](https://pc-checker-extreme-production.up.railway.app) |
| Specwright | [specwright-web-production.up.railway.app](https://specwright-web-production.up.railway.app) |
| EnPowerCommand | [enpowercommand-production.up.railway.app](https://enpowercommand-production.up.railway.app) |

## What the site includes

### Frontend pages

- **Home** — Hero, flagship portfolio grid with live-demo links, pricing, and founder section
- **About** — Background timeline, education, and competencies
- **Services** — Service offerings backed by live portfolio products
- **Projects** (`/dashboard`) — Full portfolio grid with live-demo and GitHub links
- **Resume** (`/profile`) — CV, skills, experience, and downloadable PDF
- **Contact** — Contact form (posts to the backend API in production)
- **PC Checker Extreme** (`/projects/pc-checker`) — Case-study detail page
- **Admin** (`/admin`) — Password-protected content editor (saves to browser localStorage)
- **404** — Custom not-found page

`/marketplace` redirects to `/about`.

### Backend API

The Express backend provides:

- `GET /api/health` — Health check
- `POST /api/contact` — Contact form email delivery (rate-limited)
- `POST /api/auth/register` — User registration
- `POST /api/auth/login` — User login
- `GET /api/auth/me` — Authenticated user profile

## Project structure

```
DevCollective/
├── frontend/                 # React + TypeScript (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/             # Portfolio, resume, landing content
│   │   └── utils/
│   ├── public/images/
│   ├── railway.toml
│   └── README.md
├── backend/                  # Node.js + Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.ts
│   └── README.md
└── database/migrations/      # PostgreSQL schema (auth users)
```

## Tech stack

### Frontend

- React 18, TypeScript, Vite, Tailwind CSS, React Router, Lucide React

### Backend

- Node.js, Express, TypeScript, PostgreSQL, JWT, bcryptjs, Nodemailer

### Design

- Navy + gold brand palette (`brand-navy`, `brand-gold`)
- Inter font family
- Mobile-first responsive layout

## Local development

### Prerequisites

- Node.js 18+
- PostgreSQL 12+ (backend auth only; contact form works without DB if auth routes are unused)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000). In development, `/api` is proxied to the backend.

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Set GMAIL_USER and GMAIL_APP_PASSWORD for contact form email
npm run dev
```

Runs at [http://localhost:5000](http://localhost:5000).

## Testing

Run from `frontend/`:

```bash
npm run test -- --runInBand    # Jest unit/component tests
npm run test:e2e               # Playwright end-to-end tests
npm run test:coverage          # Coverage report
```

Playwright verifies home navigation, portfolio live-demo hrefs, PC Checker detail page, contact validation, and the 404 page.

## Deployment (Railway)

- **Service root directory:** `DevCollective/frontend`
- **Build:** `npm install && npm run build`
- **Start:** `npm run start` (serves Vite `dist/` on `$PORT`)
- **Production API URL:** set `VITE_API_URL=https://frontlinedigital-1-production.up.railway.app/api` (see `frontend/.env.production`)

If `gilliomfrontlinedigital.com` returns **502**, attach the custom domain to the working **FrontLineDigital-1** Railway service, then redeploy.

### Portfolio app repos (Kistie-Store, Specwright, etc.)

Each linked app repo should **delete `render.yaml`**, remove Render deploy walkthroughs from its README, and document **Railway** as the live host. Copy-paste sections and env var tables: **[docs/PORTFOLIO_RAILWAY_README.md](docs/PORTFOLIO_RAILWAY_README.md)**.

Do **not** remove Render from **API-Transfer / Stripe-Installer** — those products support multi-provider deploy for clients.

## Images

Place assets under `frontend/public/images/`:

- `logos/` — Site logo
- `profile/` — Founder and resume photos (`home.jpeg`, `About.png`, `Resume.png`, etc.)
- `portfolio/` — Project screenshots

See [frontend/public/images/README.md](frontend/public/images/README.md).

## Contact

- **Email:** dallas8000@gmail.com
- **Phone:** (682) 460-4038
- **GitHub:** [github.com/dallas8000-ops](https://github.com/dallas8000-ops)

## License

MIT License
