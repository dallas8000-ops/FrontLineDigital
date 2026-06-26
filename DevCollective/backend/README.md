# Gilliom Frontline Digital — Backend API

Express + TypeScript API for the Gilliom Frontline Digital portfolio site. Handles the contact form and optional user authentication.

## Setup

### Prerequisites

- Node.js 18+
- PostgreSQL 12+ (required for auth routes)
- npm

### Installation

```bash
npm install
cp .env.example .env
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `PORT` | Server port (default `5000`) |
| `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` | PostgreSQL connection |
| `JWT_SECRET` | JWT signing secret |
| `GMAIL_USER` | Gmail address for contact form |
| `GMAIL_APP_PASSWORD` | Gmail app password for contact form |

The contact form uses `GMAIL_USER` and `GMAIL_APP_PASSWORD` (see `src/server.ts`).

### Database setup

```bash
createdb dev_collective
psql -U postgres -d dev_collective -f ../database/migrations/001_initial_schema.sql
psql -U postgres -d dev_collective -f ../database/migrations/002_add_user_name.sql
```

Auth routes expect a `name` column on `users` (added in migration 002).

### Development

```bash
npm run dev
```

Server runs at [http://localhost:5000](http://localhost:5000).

### Production build

```bash
npm run build
npm start
```

Production deploy: [https://frontlinedigital-1-production.up.railway.app/api/health](https://frontlinedigital-1-production.up.railway.app/api/health)

## API routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Contact form (rate-limited: 5 requests / 15 min per IP) |
| `POST` | `/api/auth/register` | Register user (`name`, `email`, `password`) |
| `POST` | `/api/auth/login` | Login (`email`, `password`) → JWT |
| `GET` | `/api/auth/me` | Current user (Bearer token) |

## Database schema

Migrations live in `../database/migrations/`. The auth routes use the `users` table. Additional tables in `001_initial_schema.sql` are legacy schema and are not wired to active API endpoints.

## Technologies

- Express.js
- TypeScript
- PostgreSQL (`pg`)
- JWT + bcryptjs
- Nodemailer (contact email)
- express-rate-limit
- CORS
