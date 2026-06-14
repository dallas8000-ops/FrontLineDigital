# Dev Collective - Full Stack Platform

A professional Developer Collective platform combining Services Portfolio, Team Dashboard, and Freelancer Marketplace.

**Built by:** Barney Gilliom  
**Company:** Frontline Digital  
**Tagline:** Driven by Code. Built for Success.  
**Repository:** [https://github.com/dallas8000-ops/FrontLineDigital](https://github.com/dallas8000-ops/FrontLineDigital)

## 🌐 Live Demo

**Marketing site:** [https://gilliomfrontlinedigital.com](https://gilliomfrontlinedigital.com)  
**Railway URL (fallback):** [https://frontlinedigital-1-production.up.railway.app](https://frontlinedigital-1-production.up.railway.app)

**Portfolio apps with working live demos (Railway):**

| Project | Live URL |
| --- | --- |
| React Store Catalog | [react-store-catalog-1-production.up.railway.app](https://react-store-catalog-1-production.up.railway.app) |
| RigHand AI | [righand-production.up.railway.app](https://righand-production.up.railway.app) |
| DBOps Control Center | [dbops-web-production.up.railway.app](https://dbops-web-production.up.railway.app) |
| Specwright | [specwright-web-production.up.railway.app](https://specwright-web-production.up.railway.app) |
| API Transfer | [api-transfer-production.up.railway.app](https://api-transfer-production.up.railway.app) |
| EnPowerCommand | [enpowercommand-production.up.railway.app](https://enpowercommand-production.up.railway.app) |

**Contact / admin API:** [frontlinedigital-1-production.up.railway.app/api](https://frontlinedigital-1-production.up.railway.app/api/health)

Kristie Store, Blog API, PC Checker Extreme, and Stripe Installer are listed on the portfolio without live-demo buttons until those Railway services are healthy.

> All hosting is on **Railway**. Legacy Render URLs are blocked in the portfolio config.

## 🚀 Features

### 1. **Services Portfolio**
- Showcase professional development services
- Full-stack development, optimization, database architecture
- Security and QA services
- Featured project gallery
- Service pricing and details

### 2. **Team Dashboard**
- Project management and tracking
- Team collaboration tools
- Project statistics and metrics
- Task management interface
- Progress tracking

### 3. **Freelancer Marketplace**
- Developer discovery and hiring
- Advanced search and filtering
- Developer profiles with ratings and reviews
- Skills showcasing
- Experience level filtering
- Availability tracking

### 4. **Developer Profile**
- Comprehensive profile showcase
- Technical skills organized by category
- Professional experience timeline
- Portfolio project display
- Contact information
- Social links (GitHub, LinkedIn)

## 📁 Project Structure

```
DevCollective/
├── frontend/                 # React + TypeScript app
│   ├── src/
│   │   ├── components/       # Navigation, Footer, etc.
│   │   ├── pages/           # Home, Services, Dashboard, Marketplace, Profile
│   │   ├── styles/          # Global CSS and Tailwind
│   │   ├── utils/           # Helper functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   │   └── images/          # Logo and project images
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/                  # Node.js + Express server
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   ├── routes/          # API endpoints
│   │   ├── models/          # Database queries
│   │   ├── middleware/      # Auth, error handling
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md
│
├── database/
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   └── seeds/               # Sample data
│
├── package.json             # Monorepo configuration
└── README.md
```

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router v6** - Navigation
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Design System
- **Color Scheme**: Teal (Primary) + Orange (Accent)
- **Typography**: Inter + Fira Code
- **Responsive**: Mobile-first design
- **Components**: Custom + Tailwind utilities

## 🎨 Design Highlights

- **Professional Teal & Orange** - Bold, modern brand colors
- **Responsive Grid System** - Adapts to all screen sizes
- **Elevation Shadows** - Material Design inspired
- **Custom Animations** - Smooth transitions and effects
- **Accessibility** - WCAG compliant components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repo-url>
cd DevCollective

# Install dependencies
npm install

# Setup backend
cd backend
cp .env.example .env
# Update .env with your database credentials

# Setup database
psql -U postgres -d dev_collective -f ../database/migrations/001_initial_schema.sql

# Start development servers
npm run dev
```

### Frontend Development
```bash
npm run frontend
# Runs on http://localhost:3000
```

### Backend Development
```bash
npm run backend
# Runs on http://localhost:5000
```

### Production Build
```bash
npm run build
npm start
```

## ✅ Testing Procedures and Verification Results

The application functionality is verified with both unit/integration tests (Jest + Testing Library) and end-to-end browser tests (Playwright).

### Test Procedures

Run all test commands from `DevCollective/frontend`:

```bash
# 1) Unit and component behavior tests
npm run test -- --runInBand

# 2) End-to-end user-flow tests
npm run test:e2e

# 3) Optional coverage report
npm run test:coverage
```

### What Is Verified

- **Unit/Component coverage (Jest):**
  - `usePageTitle` hook title formatting and update behavior
  - `ErrorBoundary` normal render, fallback UI render, and custom fallback handling
  - Existing frontend suite coverage across application behavior checks
- **E2E coverage (Playwright):**
  - Home page renders and navigates correctly to Services
  - PC Checker detail page content/link states and disabled hosted-app action
  - Contact form client-side validation behavior
  - Unknown routes return the custom 404 page

### Latest Verification Results

Most recent local verification run:

- **Jest:** `3/3` test suites passed, `10/10` tests passed
- **Playwright:** `12/12` end-to-end scenarios passed
- **E2E status artifact:** `frontend/test-results/.last-run.json` reports `"status": "passed"` with no failed tests

## 📸 Image Directory

Place your images in:
- `/frontend/public/images/profile/` - Your headshot
- `/frontend/public/images/logos/` - Frontline Digital logo (already configured)
- `/frontend/public/images/portfolio/` - Project screenshots
- `/frontend/public/images/team/` - Team member photos
- `/frontend/public/images/backgrounds/` - Hero backgrounds

## 🔐 Authentication

The platform supports:
- User registration and login
- JWT token authentication
- Role-based access control (developer, client, admin)
- Secure password hashing with bcryptjs

## 📊 Database

PostgreSQL schema includes tables for:
- Users & authentication
- Services & offerings
- Projects & collaboration
- Marketplace listings
- Reviews & ratings
- Transactions

## 🚀 Deployment

### Live on Railway

- **Marketing site:** [https://gilliomfrontlinedigital.com](https://gilliomfrontlinedigital.com) (working deploy: [frontlinedigital-1-production.up.railway.app](https://frontlinedigital-1-production.up.railway.app))
- **Service root directory:** `DevCollective/frontend` (required — repo root will 502)
- **Start command:** `npm run start` (serves Vite `dist/` on `$PORT`)

If `gilliomfrontlinedigital.com` returns **502**, the custom domain is attached to a crashed `FrontLineDigital` service. In Railway → **FrontLineDigital-1** → **Settings** → **Networking**, add `gilliomfrontlinedigital.com` and remove it from the broken `FrontLineDigital` service, then redeploy.
- **React Store Catalog:** [react-store-catalog-production.up.railway.app](https://react-store-catalog-production.up.railway.app) (mirror: [react-store-catalog-1-production.up.railway.app](https://react-store-catalog-1-production.up.railway.app))
- **RigHand AI frontend:** [righand-frontend-production.up.railway.app](https://righand-frontend-production.up.railway.app) (API: [righand-production.up.railway.app](https://righand-production.up.railway.app))

### Frontend (Railway)
```bash
npm run build
# Railway serves dist/ via npm run start (see frontend/railway.toml)
```

### Backend (Railway)
```bash
npm run build
npm start
```

## 📝 API Documentation

See [backend/README.md](backend/README.md) for detailed API routes.

## 🤝 Contributing

This is a portfolio project showcasing full-stack development skills.

## 📞 Contact

- **Email:** dallas8000@gmail.com
- **Phone:** (682) 460-4038
- **GitHub:** github.com/dallas8000-ops
- **LinkedIn:** linkedin.com/in/barney-gilliom-959981337

## 📄 License

MIT License - Built with ❤️ by Barney Gilliom

---

**Frontline Digital** - Driven by Code. Built for Success. ⚡
