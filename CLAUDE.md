# CLAUDE.md — Gilliom Frontline Digital

Owner: Barney R. Gilliom (barney@gilliomfrontlinedigital.com). Live site: https://gilliomfrontlinedigital.com
My global working agreement (stay on direction, plan first, verify, ask before deploying) lives in
`~/.claude/CLAUDE.md` and applies here too. This file adds what is specific to this repo.

## 1. Site-specific rules

- **Real data only.** No pilots have been completed yet — don't imply any. If a section needs proof that doesn't
  exist, leave it out.
- **Gilliom FrontLine is a different project** (`C:\Software Projects\Gilliom-Frontline`, served at
  frontline.gilliomfrontlinedigital.com). Don't touch it or its database from this repo.

## 2. Project map

```
DevCollective/
  frontend/   Live site: Vite + React 18 + TypeScript + Tailwind (this is what gets deployed)
  backend/    Express + pg API — NOT deployed yet (planned home for the CRM/leads API)
  database/   SQL migrations for the backend
docs/         Notes and outreach drafts
```

Key frontend files:
- `src/data/` — all site content (case studies, services, contact info, FAQ). Edit content here, not in pages.
- `src/data/routeMeta.ts` — single list of public pages with titles/descriptions. **Add every new public page
  here**, or it won't be prerendered, in the sitemap, or in llms.txt.
- `scripts/prerender.mjs` — build step: writes each route to its own HTML file, plus `404.html`, `sitemap.xml`,
  `llms.txt`, and noindex shells for client-only routes (`/admin`, etc.).
- `src/main.tsx` — hydrates prerendered pages (keeps server markup), renders client-only routes fresh.
- `index.html` — head tags and site-wide JSON-LD. Blocks marked `data-home-only` are stripped from other pages.
- `Staticfile` — `index_fallback: false` so unknown URLs return a real 404.

## 3. Commands (run from `DevCollective/frontend`)

| Task | Command |
|---|---|
| Dev server (port 3000) | `npm run dev` |
| Unit tests (Jest) | `npm test` |
| Production build (includes prerender) | `npm run build` |
| Serve the build like production | `npx serve dist -l 4199` |
| Browser tests (Playwright) | `npm run test:e2e` |
| Convert images to WebP | `node scripts/optimize-images.mjs <files>` |

Known, pre-existing — don't "fix" unless asked: `npx tsc --noEmit` reports 12 implicit-`any` errors in
`Profile.tsx`/`Services.tsx`; `npm run lint` fails because ESLint isn't installed.

Before saying a frontend change is done: `npm test` and `npm run build` pass, and for anything visible, check the
page in a browser at phone width (375px) and desktop.

## 4. How the site is deployed

- Railway project **hearty-enjoyment**, service **FrontLineDigital-1**, auto-deploys on every push to `main`.
  Root directory `DevCollective/frontend`, builder **Railpack** (SPA mode via `RAILPACK_SPA_OUTPUT_DIR`), served
  by Railpack's built-in Caddy. Custom domains: `gilliomfrontlinedigital.com`, `www.gilliomfrontlinedigital.com`.
- **`DevCollective/frontend/railway.toml` is NOT what runs** (it says Nixpacks + `npm start`). Railway's service
  settings win. Don't rely on it.
- After a deploy, verify on the live domain: each page has its own `<title>`, `/does-not-exist` returns 404, no
  console errors.
- Cloudflare: DNS, Web Analytics beacon in `index.html`. Search Console sitemap: `/sitemap.xml`.

## 5. Code conventions for this repo

- Prettier (`DevCollective/.prettierrc`): single quotes, semicolons, 2-space indent, print width 100.
- Reuse existing helpers: `toJsonLd` (`src/data/faqContent.ts`), `usePageTitle`, `YouTubeFacade`.
- Images: serve WebP with `width`/`height`; `loading="lazy"` below the fold. Keep the original PNG/JPG for
  Open Graph and JSON-LD.
- Keep the brand: navy/gold palette, Inter font (self-hosted via `@fontsource-variable/inter`).

## 6. Contact facts (use exactly)

- Phone: (656) 245-5253 — US number. WhatsApp: +1 656-245-5253, link `https://wa.me/16562455253`.
- Email: barney@gilliomfrontlinedigital.com. Location: Wimauma, FL · available remotely worldwide.
