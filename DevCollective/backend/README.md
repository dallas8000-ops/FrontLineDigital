# Dev Collective Backend

Backend server for the Developer Collective platform built with Node.js/Express and PostgreSQL.

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Configuration

Copy `.env.example` to `.env` and update with your values:

```bash
cp .env.example .env
```

### Database Setup

1. Create PostgreSQL database:
```bash
createdb dev_collective
```

2. Run migrations:
```bash
psql -U postgres -d dev_collective -f ../database/migrations/001_initial_schema.sql
```

### Development

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## API Routes

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/services` - Get all services
- `GET /api/projects` - Get all projects
- `GET /api/marketplace` - Get marketplace listings
- `GET /api/profile/:id` - Get user profile

## Database Schema

See [migrations/001_initial_schema.sql](../database/migrations/001_initial_schema.sql)

## Technologies

- Express.js - Web framework
- TypeScript - Type safety
- PostgreSQL - Database
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin requests
