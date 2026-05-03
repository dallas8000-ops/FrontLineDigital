# Dev Collective - Full Stack Platform

A professional Developer Collective platform combining Services Portfolio, Team Dashboard, and Freelancer Marketplace.

**Built by:** Barney Gilliom  
**Company:** Frontline Digital  
**Tagline:** Driven by Code. Built for Success.

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

### Frontend (Render/Vercel)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Render/Heroku)
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
