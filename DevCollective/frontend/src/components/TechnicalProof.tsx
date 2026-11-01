import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/freelanceContent'
import { portfolioSeoEntries } from '../data/seoContent'

const architectureProjects = [
  {
    name: 'DBOps Control Center',
    layers: ['React + TypeScript', 'FastAPI + SQLAlchemy', 'PostgreSQL + Alembic', 'Stripe + Railway + OIDC'],
  },
  {
    name: 'Deployment & Stripe Automation Center',
    layers: ['React + TypeScript', 'Django + WebSockets', 'Encrypted vault + Celery', 'Stripe + Railway deploy'],
  },
  {
    name: 'Elite Fintech Systems',
    layers: ['React + TypeScript', 'Django REST + Channels', 'PostgreSQL + FX snapshots', 'Live Stripe · Flutterwave in progress'],
  },
]

/** Solutions grid, architecture scope, diagrams and metrics. Moved off the homepage onto /services. */
export default function TechnicalProof() {
  return (
    <>
      <section id="solutions" className="scroll-mt-24 border-y border-brand-line bg-brand-card/40" aria-labelledby="solutions-heading">
        <div className="section-inner py-14 md:py-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Solutions</p>
          <h2 id="solutions-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Operations software for real business workflows
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Explore the systems behind the portfolio: compliance intelligence, logistics, billing, diagnostics,
            developer tooling, and sales operations.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioSeoEntries.map((entry) => {
              const content = (
                <>
                  <h3 className="mb-3 text-lg font-bold text-white">{entry.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted">{entry.description}</p>
                </>
              )

              return entry.url?.startsWith('/') ? (
                <Link key={entry.name} to={entry.url} className="card-dark p-5 transition hover:border-brand-gold/60">
                  {content}
                </Link>
              ) : (
                <a
                  key={entry.name}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-dark p-5 transition hover:border-brand-gold/60"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-card/40" aria-labelledby="capability-heading">
        <div className="section-inner py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Architecture scope</p>
          <h2 id="capability-heading" className="mb-8 text-2xl font-bold text-white">
            Built the way operations teams need it
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {business.valueProps.map((item) => (
              <article key={item.title} className="card-dark p-5">
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="section-inner py-14 md:py-20" aria-labelledby="architecture-heading">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Technical architecture</p>
        <h2 id="architecture-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Product diagrams for the core SaaS systems
        </h2>
        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
          For your technical reviewer: every core system follows the same production pattern: frontend, API
          layer, relational data, and external integrations.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {architectureProjects.map((project) => (
            <div key={project.name} className="card-dark p-6">
              <h3 className="mb-5 text-xl font-bold text-white">{project.name}</h3>
              <div className="space-y-3">
                {project.layers.map((layer, index) => (
                  <Fragment key={layer}>
                    <div className="border border-brand-line bg-brand-navy p-3 text-center text-sm font-semibold text-slate-100">
                      {layer}
                    </div>
                    {index < project.layers.length - 1 && (
                      <div className="text-center text-lg font-bold text-brand-gold" aria-hidden="true">
                        |
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-inner border-y border-brand-line/80 py-10" aria-labelledby="metrics-heading">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Metrics</p>
            <h2 id="metrics-heading" className="text-2xl font-bold text-white">
              Measurable scope, not just adjectives
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {business.metrics.map((metric) => (
              <li key={metric} className="border-l border-brand-gold/60 bg-brand-card/60 px-4 py-3 text-sm text-slate-200">
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
