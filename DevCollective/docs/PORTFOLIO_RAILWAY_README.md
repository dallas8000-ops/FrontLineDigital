# Portfolio apps — Railway README playbook

Use this when you open each app repo individually. **Delete `render.yaml`** (and **`RENDER.md`** if present). Paste the **Deploy on Railway** section below into that repo’s README and replace Render/onrender links.

Canonical live URLs (also in `frontend/src/data/portfolioLiveUrls.ts`):

| Repo | Live URL |
| --- | --- |
| Kistie-Store | https://kistie-store-production.up.railway.app |
| SilverFox | https://silverfox-production.up.railway.app |
| Specwright (web) | https://specwright-web-production.up.railway.app |
| Specwright (API) | https://specwright-api-production.up.railway.app |
| EnPowerCommand | https://enpowercommand-production.up.railway.app |
| PC-Checker-Extreme | https://pc-checker-extreme-production.up.railway.app |
| DBOps Control Center (web) | https://dbops-web-production.up.railway.app |
| Elite Fintech (web) | https://elite-fintech-web-production.up.railway.app/demo |

**Do not delete Render references** in **API-Transfer / Stripe-Installer** — those describe client deploy adapters, not your demo host.

---

## Checklist (every repo below)

- [ ] Delete `render.yaml` from repo root
- [ ] Delete `RENDER.md` if it exists (PC-Checker-Extreme)
- [ ] Replace README **Live** line with Railway URL from table
- [ ] Remove **Deploy on Render** / **Custom domain on Render** sections
- [ ] Paste **Deploy on Railway** section from this doc
- [ ] Search: `rg -i "onrender|render\.yaml|dashboard\.render" .` — fix remaining **your-demo** hits
- [ ] Add `railway.toml` (optional but recommended) using templates below
- [ ] Commit: `docs: remove Render deploy config; document Railway production`

---

## Kistie-Store (highest priority)

### README find-replace

| Remove | Replace with |
| --- | --- |
| `https://kristie-store.onrender.com` | `https://kistie-store-production.up.railway.app` |
| `kristie-store.onrender.com` | `kistie-store-production.up.railway.app` |
| Spelling note about kristie vs kistie | Delete — URL now uses **kistie** |
| All “on Render” / “Render gives” hosting sentences | “on Railway” / Railway equivalents |
| Links to `[render.yaml](render.yaml)` | Remove or point to `railway.toml` |
| Portfolio link `jnalumansi.onrender.com` | `https://gilliomfrontlinedigital.com` |

### Delete

- `render.yaml`

### Add `railway.toml` (repo root)

```toml
[build]
builder = "NIXPACKS"
buildCommand = "pip install -r requirements.txt && python backend/manage.py collectstatic --noinput && python backend/manage.py migrate && python backend/manage.py seed_inventory_if_empty && python backend/manage.py link_static_images_to_products"

[deploy]
startCommand = "gunicorn --chdir backend core.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120"
healthcheckPath = "/health/"
restartPolicyType = "ON_FAILURE"
```

### Paste into README — Deploy on Railway

```markdown
## Deploy on Railway

**Live demo:** https://kistie-store-production.up.railway.app

### Service setup

1. Railway → **New Project** → **Deploy from GitHub** → `Kistie-Store`
2. Add **PostgreSQL** plugin; Railway injects `DATABASE_URL`
3. **Root directory:** repository root (where `requirements.txt` lives)
4. Railway reads `railway.toml` for build/start, or set manually:

| Setting | Value |
| --- | --- |
| **Build** | `pip install -r requirements.txt && python backend/manage.py collectstatic --noinput && python backend/manage.py migrate && python backend/manage.py seed_inventory_if_empty && python backend/manage.py link_static_images_to_products` |
| **Start** | `gunicorn --chdir backend core.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120` |
| **Health check** | `/health/` |

### Required environment variables

| Variable | Example / notes |
| --- | --- |
| `DATABASE_URL` | From Railway Postgres plugin |
| `DJANGO_SECRET_KEY` | Long random string |
| `DJANGO_DEBUG` | `False` |
| `DJANGO_ENABLE_ADMIN` | `False` in production (or `True` if you need admin) |
| `ALLOWED_HOSTS` | `kistie-store-production.up.railway.app` (+ custom domain if any) |
| `CSRF_TRUSTED_ORIGINS` | `https://kistie-store-production.up.railway.app` |
| `SITE_URL` | `https://kistie-store-production.up.railway.app` |
| `EMAIL_*` / `CONTACT_RECIPIENT_EMAIL` | Gmail SMTP (see README SMTP section) |

Optional: `PESAPAL_INITIATE_URL`, AI keys, `WHATSAPP_STORE_NUMBER`, etc. (unchanged from local `.env.example`).

### Health check

`GET https://kistie-store-production.up.railway.app/health/?format=json` → `{"status":"ok","service":"kistie-store"}`
```

---

## SilverFox

Same Django monorepo pattern as Kistie-Store (adjust manage.py path / WSGI module if different).

- **Live:** https://silverfox-production.up.railway.app
- **Delete:** `render.yaml`
- **Build/start:** mirror Kistie — `collectstatic`, `migrate`, any project-specific seed commands
- **Env:** `ALLOWED_HOSTS`, `CSRF_TRUSTED_ORIGINS`, `SITE_URL` → `silverfox-production.up.railway.app`

---

## PC-Checker-Extreme

- **Delete:** `render.yaml`, **`RENDER.md`**
- **Live:** https://pc-checker-extreme-production.up.railway.app

### Paste into README — Deploy on Railway

```markdown
## Deploy on Railway

**Live demo:** https://pc-checker-extreme-production.up.railway.app

1. Railway → deploy from GitHub → add **PostgreSQL**
2. **Build:** install Python deps, `collectstatic`, `migrate` (add project seed command if you use one)
3. **Start:** `gunicorn` (or your documented WSGI entry) bound to `$PORT`
4. **Health check:** your `/health/` or root health route

### Environment variables

| Variable | Notes |
| --- | --- |
| `DATABASE_URL` | Railway Postgres |
| `SECRET_KEY` / `DJANGO_SECRET_KEY` | Required |
| `DEBUG` | `False` |
| `ALLOWED_HOSTS` | `pc-checker-extreme-production.up.railway.app` |
| `CSRF_TRUSTED_ORIGINS` | `https://pc-checker-extreme-production.up.railway.app` |
```

---

## Specwright (web + API)

- **Delete:** `render.yaml`
- **Live (portfolio link):** https://specwright-web-production.up.railway.app
- **API:** https://specwright-api-production.up.railway.app

### README — replace “Live on Render” block with:

```markdown
## Live on Railway

| Service | URL |
| --- | --- |
| Web app | https://specwright-web-production.up.railway.app |
| Try GitHub | https://specwright-web-production.up.railway.app/try |
| API health | https://specwright-api-production.up.railway.app/api/v1/health |
| Public badge | `https://specwright-api-production.up.railway.app/api/v1/badge/{slug}.svg` |

## Deploy on Railway

Two Railway services (web + API):

### `specwright-api`

| Setting | Value |
| --- | --- |
| **Root** | `api/` or repo root per your Dockerfile |
| **Start** | `uvicorn api.main:app --host 0.0.0.0 --port $PORT` |
| **Health** | `/api/v1/health` |

| Variable | Value |
| --- | --- |
| `SPECWRIGHT_DATABASE_URL` | `sqlite+aiosqlite:///specwright.db` (demo) or Postgres URL |
| `SPECWRIGHT_FRONTEND_URL` | `https://specwright-web-production.up.railway.app` |
| `SPECWRIGHT_PUBLIC_API_URL` | `https://specwright-api-production.up.railway.app` |
| `SPECWRIGHT_PUBLIC_SITE_URL` | `https://specwright-web-production.up.railway.app` |

### `specwright-web`

| Setting | Value |
| --- | --- |
| **Root** | `frontend/` |
| **Build** | `npm install && npm run build` |
| **Start** | static serve of `dist/` on `$PORT` |

| Variable | Value |
| --- | --- |
| `VITE_API_URL` | `https://specwright-api-production.up.railway.app/api/v1` |

Redeploy **web** after changing `VITE_API_URL` (baked in at build time).
```

---

## EnPowerCommand (web + API)

- **Delete:** `render.yaml`
- **Live:** https://enpowercommand-production.up.railway.app

### Replace entire “Deploy on Render” section with:

```markdown
## Deploy on Railway

**Live demo:** https://enpowercommand-production.up.railway.app

### Services

1. **PostgreSQL** — Railway plugin → `DATABASE_URL` on API service
2. **API** (`server/`) — Node/Express
3. **Web** (`client/`) — Vite static build

### API service (`server/`)

| Setting | Value |
| --- | --- |
| **Build** | `npm ci && npm run build` |
| **Start** | `npm start` (or `node dist/index.js`) |

| Variable | Notes |
| --- | --- |
| `DATABASE_URL` | From Postgres plugin |
| `AUTH_SECRET` | Long random string (16+ chars) |
| `ADMIN_PASSWORD` | 8+ chars |
| `CORS_ORIGIN` | `https://enpowercommand-production.up.railway.app` |
| `OPENAI_API_KEY` | Optional |

Do **not** set `SKIP_AUTH` in production.

After first deploy, run schema init once (Railway shell or release command):

```bash
npm run db:init
```

### Web service (`client/`)

| Setting | Value |
| --- | --- |
| **Build** | `npm ci && npm run build` |
| **Start** | serve `dist/` on `$PORT` |

| Variable | Value |
| --- | --- |
| `VITE_API_URL` | Your Railway API URL (no trailing slash) |

Redeploy web after changing `VITE_API_URL`.
```

---

## DBOps Control Center

- **Delete:** `render.yaml` from repo (your demo runs on Railway)
- **Live demo URL in README:** https://dbops-web-production.up.railway.app
- **Keep in README:** buyers/clients may deploy on Railway **or** Render — that is a **product** feature, not your hosting path. Do not link **your** demo to onrender.com.

---

## Elite Fintech Systems

- **Delete:** `render.yaml`
- **Live:** https://elite-fintech-web-production.up.railway.app/demo
- **API (internal):** `elite-fintech-api-production.up.railway.app` — portfolio links to **web** only

Same two-service pattern as Specwright (Django/React split per your repo layout).

---

## KEEP — multi-provider deploy products

| Repo | Action |
| --- | --- |
| Stripe-Installer / API-Transfer | **Keep** Render as supported provider adapter |
| Deployment & Stripe Automation Center | **Keep** Render as client deploy target in product docs |

Only ensure **your** portfolio card links to `stripe-installer-production.up.railway.app`, not Render.

---

## One-line rule

**Your demo runs on Railway. Render appears only where the product deploys *someone else's* app.**
