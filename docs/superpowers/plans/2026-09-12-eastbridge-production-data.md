# EastBridge Production Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prevent EastBridge from presenting an HTTP-healthy but empty production demo and make recurring ingestion deployment explicit.

**Architecture:** Add one idempotent management command that checks data counts, loads the committed initial fixtures only when required, embeds evidence, and calls the existing verifier. Invoke it from Railway only when `INITIALIZE_DEMO_DATA=true`; deploy Celery worker and Beat as explicit processes/services.

**Tech Stack:** Django 5, PostgreSQL, Celery, Redis, React, Docker, Railway

**Spec:** `FrontlineDigital/docs/superpowers/specs/2026-09-12-production-proof-design.md`

## Global Constraints

- Never reset or delete a populated production database.
- Initialization must be idempotent.
- A failed data verification must fail deployment or health verification visibly.
- Recurring jobs must not run inside Gunicorn request workers.

---

### Task 1: Idempotent Production Initialization

**Files:**
- Create: `backend/core/management/commands/initialize_demo_data.py`
- Create: `backend/core/tests/test_initialize_demo_data.py`
- Modify: `deploy/railway/start.sh`

- [ ] **Step 1: Test empty and populated database behavior**

On an empty test database, mock/capture `load_initial_data`, `embed_evidence`, and `verify_data` calls and require all three in order. On a populated verified database, require no fixture reload and a verifier call only.

- [ ] **Step 2: Run focused tests and confirm RED**

Run: `python manage.py test core.tests.test_initialize_demo_data`

- [ ] **Step 3: Implement the command**

Use existing model counts as the guard. Call existing management commands; do not duplicate fixture or embedding logic. Print counts before and after initialization.

- [ ] **Step 4: Wire the explicit Railway flag**

In `start.sh`, run `python manage.py initialize_demo_data` only when `INITIALIZE_DEMO_DATA=true`. Remove or deprecate the incomplete `SEED_ON_DEPLOY` behavior with a clear log message.

- [ ] **Step 5: Run focused tests and confirm GREEN**

Run the focused Django test and `python manage.py verify_data` against a seeded local database.

### Task 2: Scheduled Ingestion Deployment Contract

**Files:**
- Modify: `DEPLOY-RAILWAY.md`
- Modify: `deploy/DATA-SEED.md`
- Modify: Railway process configuration if the repository already supports process commands

- [ ] **Step 1: Add a deployment contract check**

Add a script or test that requires documented commands for a Celery worker (`celery -A config worker`) and Beat (`celery -A config beat`) plus required Redis variables.

- [ ] **Step 2: Run the check and confirm RED**

- [ ] **Step 3: Add explicit worker/beat service commands and verification endpoints**

Document separate Railway services using the same image and database/Redis references. Include a post-deploy check of `/api/v1/ingestion/status/` counts and last-run timestamps.

- [ ] **Step 4: Run backend tests and production build**

Run the focused deployment check, Django tests, and repository build.

- [ ] **Step 5: Commit, push, deploy, and verify live counts**

Commit with `fix: initialize and schedule EastBridge production data`, push the intended branch, set the one-time initialization variable, deploy worker/beat services, and verify nonzero evidence/regulatory/economic/trade counts.