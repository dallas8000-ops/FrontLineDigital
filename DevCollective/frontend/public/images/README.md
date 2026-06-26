# Image Assets

Static images for the Gilliom Frontline Digital portfolio site. Files here are served from `/images/...` in production.

## Directory structure

```
images/
├── logos/          # frontline-digital-logo.svg
├── profile/        # Founder photos and resume image
│   ├── home.jpeg   # Home page founder section
│   ├── About.png   # About page
│   └── Resume.png  # Resume / profile page
└── portfolio/      # Project screenshots and resume PDF
    ├── kistie-store-shop.png
    ├── dbops-control-center-features.png
    ├── pc-checker-extreme.png
    └── Barney_Gilliom_Resume_v3.pdf
```

## Usage in React

Reference paths from the `public` folder root:

```jsx
<img src="/images/profile/home.jpeg" alt="Founder" />
<img src="/images/portfolio/kistie-store-shop.png" alt="Kistie Store" />
```

## Formats

- **PNG** — Screenshots and photos with detail
- **JPEG** — Profile photos
- **SVG** — Logo (scalable)
- **PDF** — Downloadable resume (`/images/portfolio/Barney_Gilliom_Resume_v3.pdf`)

## Naming

Use lowercase with hyphens: `kistie-store-shop.png`, `pc-checker-extreme.png`
