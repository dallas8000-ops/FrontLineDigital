# Frontline Resume and Production Proof Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Frontline initial response crawlable, focus its presentation on representative outcomes, and replace the stale PDF with an ATS-readable resume generated from current site data.

**Architecture:** Extend the existing data modules rather than adding a CMS or SSR framework. A print-focused React route consumes the same resume and selected-project exports as the web profile; a Playwright script prints that route to the existing public PDF path.

**Tech Stack:** React 18, TypeScript, Vite, Jest, Testing Library, Playwright, Railway

**Spec:** `docs/superpowers/specs/2026-09-12-production-proof-design.md`

## Global Constraints

- Keep Railway build and start commands unchanged.
- Do not add `react-snap`, Puppeteer, or an SSR framework.
- Resume facts must say Wimauma, Florida; U.S. citizen; available for U.S. remote work.
- Do not advertise dead Render hosts or a fixed total number of production apps.
- The generated PDF must come from canonical TypeScript content, not separately maintained prose.

---

### Task 1: Resume Contract and Focused Project Proof

**Files:**
- Modify: `DevCollective/frontend/src/__tests__/resumeContent.test.ts`
- Modify: `DevCollective/frontend/src/data/resumeContent.ts`
- Modify: `DevCollective/frontend/src/data/freelanceContent.ts`
- Modify: `DevCollective/frontend/src/pages/Profile.tsx`

**Interfaces:**
- Produces: `defaultProfile.workAuthorization: string`, `defaultProfile.remoteAvailability: string`, and `resumeProjects: PortfolioProject[]`.

- [ ] **Step 1: Write the failing assertions**

Assert that work authorization is `U.S. citizen`, availability contains `U.S. remote`, the summary leads with Python/TypeScript/React/Django/FastAPI/PostgreSQL, no resume or business copy contains a fixed `12`/`13` app claim, and selected projects are AI Software Operations Studio, DBOps Control Center, and RigHand AI.

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- --runInBand src/__tests__/resumeContent.test.ts`

- [ ] **Step 3: Implement the canonical fields and focused project list**

Update the summary and independent-development bullets to emphasize stack, production outcomes, testing, and U.S. remote eligibility. Render the new fields near the profile heading and limit the resume project section to `resumeProjects`.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `npm test -- --runInBand src/__tests__/resumeContent.test.ts`

### Task 2: Crawlable Initial HTML and Consistent Positioning

**Files:**
- Create: `DevCollective/frontend/src/__tests__/initialHtml.test.ts`
- Modify: `DevCollective/frontend/index.html`
- Modify: `DevCollective/frontend/src/data/freelanceContent.ts`
- Modify: `DevCollective/frontend/src/pages/Home.tsx`

**Interfaces:**
- Produces: initial HTML containing the brand, offer, location, contact, resume link, and three representative case-study links before JavaScript runs.

- [ ] **Step 1: Add a failing raw-HTML test**

Read `index.html` and assert it contains `Gilliom Frontline Digital`, `Wimauma, Florida`, `/profile`, `/case-studies/dbops`, `/case-studies/righand`, and no fixed `12 live`, `13 live`, or empty-only `<div id="root"></div>` shell.

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- --runInBand src/__tests__/initialHtml.test.ts`

- [ ] **Step 3: Add accessible fallback markup and focused homepage copy**

Place concise semantic fallback content inside `#root`; React will replace it after startup. Remove fixed-count metadata/copy and select Studio, DBOps, and RigHand as homepage proof.

- [ ] **Step 4: Run the focused tests and confirm GREEN**

Run: `npm test -- --runInBand src/__tests__/initialHtml.test.ts src/__tests__/resumeContent.test.ts`

### Task 3: Canonical Printable Resume and PDF

**Files:**
- Create: `DevCollective/frontend/src/pages/ResumePrint.tsx`
- Create: `DevCollective/frontend/scripts/generate-resume-pdf.mjs`
- Create: `DevCollective/frontend/src/__tests__/ResumePrint.test.tsx`
- Modify: `DevCollective/frontend/src/App.tsx`
- Modify: `DevCollective/frontend/src/styles/globals.css`
- Modify: `DevCollective/frontend/package.json`
- Replace: `DevCollective/frontend/public/images/portfolio/Barney_Gilliom_Resume_v3.pdf`

**Interfaces:**
- Produces: `/resume-print` and `npm run resume:pdf`.

- [ ] **Step 1: Add a failing component test**

Render `ResumePrint` and assert the current phone, Wimauma location, U.S. citizenship, U.S. remote availability, technical headline, and three selected project titles are present; assert dead Render hosts are absent.

- [ ] **Step 2: Run the component test and confirm RED**

Run: `npm test -- --runInBand src/__tests__/ResumePrint.test.tsx`

- [ ] **Step 3: Build the print route and generator**

Create an unframed, ATS-readable resume layout with summary, concise skills, selected projects, experience, education, and certifications. The generator starts `vite preview`, waits for `/resume-print`, writes the PDF, and always terminates the preview process and browser.

- [ ] **Step 4: Run focused tests and build**

Run: `npm test -- --runInBand src/__tests__/ResumePrint.test.tsx`

Run: `npm run build`

- [ ] **Step 5: Generate and inspect the PDF**

Run: `npm run resume:pdf`

Extract text with `pypdf` and verify current contact/location, U.S. citizenship, three selected projects, and no `onrender.com` text.

### Task 4: Frontline Full Validation and Commit

- [ ] **Step 1: Run all Jest tests**

Run: `npm test -- --runInBand`

- [ ] **Step 2: Run the production build**

Run: `npm run build`

- [ ] **Step 3: Run Playwright smoke tests**

Run: `npm run test:e2e`

- [ ] **Step 4: Commit and push**

Stage only Frontline implementation, PDF, tests, design, and plans. Commit with `fix: align portfolio and resume proof`, push the current intended branch, and verify the remote files.