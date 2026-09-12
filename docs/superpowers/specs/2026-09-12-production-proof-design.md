# Production Proof Repair Design

## Goal

Make the public portfolio, downloadable resume, and three named product demos present verified production capability without treating a normal Vite SPA shell as a Railway failure.

## Verified Baseline

- `https://gilliomfrontlinedigital.com/` renders successfully and its hashed JavaScript bundle returns HTTP 200 with a JavaScript content type.
- Raw HTML contains the normal Vite root shell, while JavaScript-capable fetchers see the complete site.
- AgriPay, EastBridge, and RigHand Railway URLs return HTTP 200.
- AgriPay has a working public product page and demo accounts, but no configured custom domain is represented in source.
- EastBridge contains seed, fixture, ingestion, embedding, verification, and Celery schedule code; its production initialization does not guarantee a populated demo dataset and a web-only Railway service does not execute Celery Beat.
- RigHand's body copy includes fleet and jurisdiction-aware compliance features, but its document metadata still calls it a "Driver Profit Tracker."
- The Frontline PDF resume is stale: it has an old phone number, old city, dead Render links, five-project copy, and an obsolete headline.

## Architecture

### Frontline

Keep the current Vite SPA and Railway commands. Add a meaningful initial-HTML fallback for non-JavaScript clients, remove brittle app-count claims, focus the homepage and resume on three representative systems, and generate the PDF from a print-focused route backed by the same TypeScript resume data as the web profile.

The resume must state: Wimauma, Florida; U.S. citizen; available for U.S. remote work. It must lead with technical capability and shipped outcomes. Federal experience remains evidence of operations and QA discipline rather than the headline.

### RigHand

Update static document metadata and the landing hero so the first impression is fleet operations and jurisdiction-aware transport compliance. Expense and profit tracking remain supporting features. No compliance claims may imply certified ELD status.

### EastBridge

Treat an empty database as an unhealthy demo state. Provide an idempotent production initialization command that loads the committed fixture snapshot only when required, embeds evidence with the configured fallback, and runs the existing verifier. Keep recurring ingestion in an explicit worker/beat process rather than hiding a scheduler inside the web request process.

### AgriPay

Do not replace the verified Railway URL with an unresolved custom host. Document the Railway custom-domain and DNS CNAME procedure and retain a live-link check. DNS ownership and Railway dashboard attachment are operational prerequisites and cannot be completed through a source push alone.

## Validation

- Frontline: Jest content tests, Vite production build, generated PDF text extraction, Playwright desktop/mobile smoke checks, and live URL probes after deployment.
- RigHand: metadata regression test, frontend test/build, and live title probe after deployment.
- EastBridge: command tests on empty and populated databases, backend tests, production build, and live ingestion-status count checks after deployment.
- AgriPay: health, landing, and demo URL probes; DNS verification only after a custom host is supplied and attached.

## Deployment Rule

Each repository is committed and pushed independently only after its focused tests and build pass. A successful push is reported separately from Railway deployment and live verification.