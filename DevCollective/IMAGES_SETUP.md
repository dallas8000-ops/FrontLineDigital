# Image Setup

Profile and portfolio images live under `frontend/public/images/`.

## Current files in use

| File | Used on |
| --- | --- |
| `profile/home.jpeg` | Home — founder section |
| `profile/About.png` | About page |
| `profile/Resume.png` | Resume / profile page |
| `profile/PC Checker.png` | PC Checker case-study page |
| `profile/Ray.mp4` | About page video |
| `logos/frontline-digital-logo.svg` | Navigation and footer |
| `portfolio/*.png` | Project card screenshots |
| `portfolio/Barney_Gilliom_Resume_v3.pdf` | Resume download link |

## Directory layout

```
frontend/public/images/
├── logos/
├── profile/
└── portfolio/
```

## Local preview

```bash
cd frontend
npm run dev
```

Then open:

- [http://localhost:3000/](http://localhost:3000/) — Home
- [http://localhost:3000/about](http://localhost:3000/about) — About
- [http://localhost:3000/profile](http://localhost:3000/profile) — Resume

## Adding or replacing images

1. Save files under the matching folder above.
2. Use lowercase hyphenated names for new assets (for example `kistie-store-shop.png`).
3. Update the component `src` if the filename changes.

See also [frontend/public/images/README.md](frontend/public/images/README.md).
