# Dev Collective Frontend

Modern React + TypeScript frontend for the Developer Collective platform.

## Features

- 🎨 Responsive UI with Tailwind CSS
- 📱 Mobile-first design
- ⚡ Fast performance with Vite
- 🎯 Type-safe React with TypeScript
- 🔧 Component-based architecture
- 🎭 Professional color scheme (Teal + Orange)

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

App will run on `http://localhost:3000`

### Production Build

```bash
npm run build
```

## Testing Procedures and Results

Application functionality is validated with Jest (unit/component) and Playwright (end-to-end browser tests).

Run from `DevCollective/frontend`:

```bash
# Unit/component tests
npm run test -- --runInBand

# End-to-end tests
npm run test:e2e

# Optional coverage report
npm run test:coverage
```

### Verified Coverage

- Jest validates hook/component behavior, including:
  - `usePageTitle` title formatting and update behavior
  - `ErrorBoundary` normal render, fallback render, and custom fallback behavior
- Playwright validates critical user flows:
  - Home page render and navigation to Services
  - PC Checker detail page content and action states
  - Contact form client-side validation messages
  - Unknown route handling (custom 404)

### Latest Verification Results

- Jest: `3/3` suites passed, `10/10` tests passed
- Playwright: `4/4` scenarios passed
- E2E artifact: `test-results/.last-run.json` reports `"status": "passed"` with no failed tests

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components for routes
├── styles/        # Global CSS and Tailwind
├── utils/         # Helper functions and utilities
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Pages

- **Home** - Landing page with hero and features
- **Services** - Professional services showcase
- **Dashboard** - Team project management
- **Marketplace** - Developer marketplace
- **Profile** - User profile with portfolio

## Colors

- Primary: Teal (`#0ea5e9` - `#075985`)
- Accent: Orange (`#f97316` - `#ea580c`)
- Dark: Slate (`#111827` - `#f9fafb`)

## Technologies

- React 18 - UI library
- TypeScript - Type safety
- Tailwind CSS - Utility-first CSS
- Vite - Build tool
- React Router - Client-side routing
- Lucide React - Icon library
- Zustand - State management (optional)
