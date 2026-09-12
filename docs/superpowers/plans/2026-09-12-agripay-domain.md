# AgriPay Domain Operations Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep AgriPay publicly reachable and attach a custom domain without confusing DNS operations with application build behavior.

**Architecture:** Continue advertising the verified Railway URL until Railway reports the custom domain and certificate as active. DNS configuration remains at the registrar; source documentation and live-link checks prevent an unresolved host from reaching the portfolio.

**Tech Stack:** Django, React, Railway, DNS

**Spec:** `docs/superpowers/specs/2026-09-12-production-proof-design.md`

## Global Constraints

- Do not replace the portfolio URL until the custom host resolves and returns HTTP 200.
- Do not invent a hostname; use the hostname selected in Railway.
- DNS and certificate activation require Railway dashboard and registrar access.

---

### Task 1: Verify Current Production URL

- [ ] **Step 1: Probe application and health endpoints**

Require HTTP 200 from `https://agripay-api-production.up.railway.app/`, `/landing`, `/login`, and `/health/` and confirm the returned product title contains `AgriPay`.

- [ ] **Step 2: Record the verified fallback URL**

Keep `portfolioLiveUrls.agripayLogistics` on the Railway host until custom-domain validation passes.

### Task 2: Attach and Verify Custom Domain

- [ ] **Step 1: Add the selected host in Railway**

In the AgriPay web service, use Settings -> Networking -> Custom Domain and copy Railway's exact DNS target.

- [ ] **Step 2: Add the registrar DNS record**

For a subdomain, create the CNAME Railway specifies. For an apex domain, use the registrar's supported ALIAS/ANAME or Railway's exact apex instructions. Remove conflicting A/AAAA/CNAME records for the same host.

- [ ] **Step 3: Add Django origin configuration**

Set `ALLOWED_HOSTS`, `CSRF_TRUSTED_ORIGINS`, `CORS_ALLOWED_ORIGINS`, and `APP_URL` to include the exact HTTPS custom host, then redeploy.

- [ ] **Step 4: Verify DNS, TLS, and app behavior**

Check DNS resolution, Railway certificate status, HTTP 200, login, static assets, API calls, and Stripe webhook/callback URLs before changing the portfolio link.

- [ ] **Step 5: Update Frontline only after verification**

Change the canonical AgriPay URL, run portfolio URL/content tests and a production build, then commit and push that isolated update.