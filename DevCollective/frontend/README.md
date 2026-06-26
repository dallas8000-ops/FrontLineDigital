# Gilliom Frontline Digital — Frontend

React + TypeScript marketing portfolio for Gilliom Frontline Digital. Showcases live production apps, services, resume, and contact.

## Features

- Responsive navy + gold UI (Tailwind CSS)
- Portfolio grid with Railway live-demo links
- Services, pricing, and founder sections on Home
- Resume / CV page with downloadable PDF
- Contact form (production posts to Railway backend API)
- PC Checker Extreme case-study page
- Admin panel for editing site copy (localStorage)
- Playwright + Jest test coverage

## Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

In development, API requests to `/api` are proxied to `http://localhost:5000` (see `vite.config.ts`).

### Production build

```bash
npm run build
npm run start
```

Production API URL is set in `.env.production`:

```
VITE_API_URL=https://frontlinedigital-1-production.up.railway.app/api
```

## Pages and routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/dashboard` | Projects (portfolio grid) |
| `/profile` | Resume / CV |
| `/contact` | Contact form |
| `/projects/pc-checker` | PC Checker Extreme case study |
| `/deployment-stripe-automation-center` | Redirect to external live demo |
| `/admin`, `/admin-login` | Content admin (localStorage) |
| `/marketplace` | Redirects to `/about` |

## Portfolio URLs

Live-demo URLs are centralized in `src/data/portfolioLiveUrls.ts`. All portfolio apps use `*.up.railway.app` hosts.

## Testing

```bash
npm run test -- --runInBand   # Jest
npm run test:e2e              # Playwright
npm run test:coverage
```

Playwright checks:

- Home page hero and navigation to Services
- Portfolio live-demo link hrefs (Railway production URLs)
- PC Checker detail page links
- Contact form client-side validation
- Custom 404 page

## Project structure

```
src/
├── components/     # Navigation, Footer, ProjectCard, etc.
├── pages/          # Route pages
├── data/           # portfolioProjects, portfolioLiveUrls, resumeContent
├── utils/          # siteContent, apiClient, colorScheme
├── styles/         # globals.css
├── App.tsx
└── main.tsx
```

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Lucide React
- Axios (API client)
- Jest + Testing Library + Playwright

## Railway deployment

Configured via `railway.toml`:

- **Build:** `npm install && npm run build`
- **Start:** `npm run start`
- **Health check:** `/`

Set the Railway service root directory to `DevCollective/frontend`.
