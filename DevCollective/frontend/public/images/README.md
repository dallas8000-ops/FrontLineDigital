Lightweight **Windows** diagnostics: live CPU/RAM/disk/temperature sampling, hardware and application log checks, update catalogs (Defender, Windows Update, winget), and **read-only** disk hints (install paths, Program Files registry cross-check, common cleanup folders). **Version:** see `pc_checker/__init__.py` (`__version__`).

## Personal use — not for distribution

**Author-facing / hardwired policy:** This repository is **personal software** by its author (**edit `APP_OWNER` in `pc_checker/__init__.py` if you adapt a private fork**). It is **not** intended for public distribution, resale, sublicense, or republication. The same notice is embedded in the app (window title, footer, CLI, API `GET /api/v1/meta`, OpenAPI description, and web UI via meta).

This tool is **not** a substitute for full malware scans, SMART/hardware burn-in tests, or vendor support. It does **not** move, delete, or repair files automatically.
# Image Assets Directory

This directory is organized for the Developer Collective Platform. Add your images here:

## Directory Structure

- **profile/** - Your headshot/profile photos
- **portfolio/** - Screenshots of your Kristie Store and other projects
- **team/** - Team member photos (if featuring a team)
- **backgrounds/** - Hero backgrounds, gradient overlays, etc.
- **logos/** - Company logo, tech stack icons, certifications

## How to Use in React Components

Reference images using relative paths from the `public` folder:

```jsx
// Profile Image
<img src="/images/profile/headshot.jpg" alt="Your Name" />

// Portfolio Project
<img src="/images/portfolio/kristie-store.png" alt="Kristie Store Project" />

// Background Image in CSS
.hero-section {
  background-image: url('/images/backgrounds/hero-bg.jpg');
}
```

## Supported Formats
- PNG (recommended for logos, transparent backgrounds)
- JPG/JPEG (recommended for photos, smaller file size)
- WebP (modern format, best compression)
- SVG (scalable, best for logos)

## File Naming Convention
Use lowercase with hyphens: `kristie-store-dashboard.png`, `barney-headshot.jpg`
