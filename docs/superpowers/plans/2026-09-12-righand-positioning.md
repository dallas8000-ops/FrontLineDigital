# RigHand Product Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make RigHand's first impression match its fleet operations and jurisdiction-aware compliance capabilities.

**Architecture:** Change static metadata and landing-page copy only. Preserve existing expense, profit, HOS, GPS, OBD-II, dispatch, and compliance behavior.

**Tech Stack:** React, Jest, Create React App, Django, Railway

**Spec:** `FrontlineDigital/docs/superpowers/specs/2026-09-12-production-proof-design.md`

## Global Constraints

- Do not claim RigHand is a certified ELD.
- Keep expense and profit tracking as supporting features.
- Lead with jurisdiction-aware compliance, dispatch readiness, offline workflows, GPS, and OBD-II.

---

### Task 1: Metadata Regression

**Files:**
- Create or modify: `frontend/src/__tests__/productPositioning.test.js`
- Modify: `frontend/public/index.html`

- [ ] **Step 1: Add a failing test**

Read `public/index.html`; require a title containing `Fleet Operations & Transport Compliance`, a description containing `jurisdiction-aware`, and no `Driver Profit Tracker`.

- [ ] **Step 2: Run the focused test and confirm RED**

Run the repository's focused Jest command for `productPositioning.test.js`.

- [ ] **Step 3: Update title, description, and social metadata**

Use `RigHand AI | Fleet Operations & Transport Compliance` and describe offline-first dispatch readiness, HOS assistance, GPS/OBD-II trip logging, and regional compliance.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run the same focused Jest command.

### Task 2: First-Screen Positioning

**Files:**
- Modify: `frontend/src/components/LandingPage.jsx`
- Modify: the nearest existing landing-page test

- [ ] **Step 1: Add failing hero assertions**

Require the hero to contain `fleet operations`, `jurisdiction-aware compliance`, and `dispatch readiness`, while retaining offline and trip-tracking proof.

- [ ] **Step 2: Run the test and confirm RED**

- [ ] **Step 3: Update the eyebrow, H1, subhead, and feature order**

Lead with fleet readiness and compliance; present profit-per-load as an operational outcome rather than the product category.

- [ ] **Step 4: Run frontend tests and build**

Run the focused test, full frontend tests, and production build.

- [ ] **Step 5: Commit, push, and verify remote metadata**

Commit with `fix: position RigHand as fleet compliance platform`, push the intended branch, then verify GitHub source and the deployed `<title>` separately.