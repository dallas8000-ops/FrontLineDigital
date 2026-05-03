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
