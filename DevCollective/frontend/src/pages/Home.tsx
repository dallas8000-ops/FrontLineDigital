import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'
import { business } from '../data/freelanceContent'
import { defaultProfile } from '../data/resumeContent'
import ProjectCard from '../components/ProjectCard'
import {
  packages,
  addOns,
  processSteps,
  processSectionTitle,
  processSectionSubtitle,
  pricingNote,
  SOFTWARE_DEV_HOURLY_USD,
} from '../data/landingContent'

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

export default function Home() {
  usePageTitle('Gilliom Frontline Digital | Internal Tools & Ops Dashboards')
  const content = getSiteContent()
  const projects = content.projects ?? []
  const flagshipProjects = projects.filter((project) => project.flagship).slice(0, 6)
  const supportingProjects = projects.filter((project) => !project.flagship)

  return (
    <div className="bg-site-grid">
      <section className="section-inner pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              {business.name}
            </p>
            <h1 className="mb-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              {business.heroHeadline}
            </h1>
            <p className="mb-4 text-lg font-medium text-brand-gold">{defaultProfile.profileTitle}</p>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-200">{business.heroSubhead}</p>
            <div className="mb-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <a href="#portfolio" className="btn btn-outline">
                See live demos
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {business.credentials.map((item) => (
                <div key={item.label} className="border-l border-brand-gold/50 pl-3">
                  <p className="text-2xl font-bold text-brand-gold">{item.stat}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-dark border-brand-gold/20 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Best work in 10 seconds</p>
              <span className="text-xs text-brand-muted">Live demos + GitHub</span>
            </div>
            <div className="space-y-3">
              {flagshipProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border border-brand-line bg-brand-navy/80 p-3 transition hover:border-brand-gold/60"
                >
                  <div>
                    <p className="font-semibold text-white">{project.title}</p>
                    <p className="mt-1 line-clamp-1 text-xs text-brand-muted">{project.stack}</p>
                  </div>
                  <ArrowRight className="shrink-0 text-brand-gold transition group-hover:translate-x-1" size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="section-inner scroll-mt-24 py-14 md:py-20"
        aria-labelledby="portfolio-heading"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Portfolio</p>
        <h2 id="portfolio-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {business.portfolioSectionTitle}
        </h2>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
          {business.portfolioSectionLead}
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-card/40" aria-labelledby="capability-heading">
        <div className="section-inner py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Architecture scope</p>
          <h2 id="capability-heading" className="mb-8 text-2xl font-bold text-white">
            The work has moved beyond a basic developer portfolio
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
          Recruiters can quickly see the same production pattern repeated across the strongest apps: frontend,
          API layer, relational data, and external integrations.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {architectureProjects.map((project) => (
            <div key={project.name} className="card-dark p-6">
              <h3 className="mb-5 text-xl font-bold text-white">{project.name}</h3>
              <div className="space-y-3">
                {project.layers.map((layer, index) => (
                  <React.Fragment key={layer}>
                    <div className="border border-brand-line bg-brand-navy p-3 text-center text-sm font-semibold text-slate-100">
                      {layer}
                    </div>
                    {index < project.layers.length - 1 && (
                      <div className="text-center text-lg font-bold text-brand-gold" aria-hidden="true">
                        |
                      </div>
                    )}
                  </React.Fragment>
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

      {supportingProjects.length > 0 && (
        <section className="section-inner py-14" aria-labelledby="supporting-heading">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Additional systems</p>
          <h2 id="supporting-heading" className="mb-8 text-2xl font-bold text-white">
            More production work behind the flagship set
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} compact />
            ))}
          </div>
        </section>
      )}

      <section className="section-inner py-14 border-t border-brand-line" aria-labelledby="founder-heading">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="card-dark p-4 border-brand-gold/20">
            <img
              src="/images/profile/home.jpeg"
              alt={defaultProfile.profileName}
              className="max-h-80 w-full rounded-lg object-cover"
            />
            <p className="mt-4 text-center font-semibold text-white">{defaultProfile.profileName}</p>
            <p className="mt-1 text-center text-xs text-brand-muted">Software engineer, QA engineer, SaaS founder</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Founder background</p>
            <h2 id="founder-heading" className="mb-4 text-3xl font-bold text-white">
              Veteran discipline applied to production software
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-200">
              The differentiator is the combination: U.S. Army veteran (JST-documented service), FAA-certified air
              traffic control, TCOLE Master Police Officer (Texas) with Washington State equivalency, and
              full-stack engineering with QA discipline — applied to thirteen live production products.
            </p>
            <ul className="space-y-3">
              {business.founderHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-white"
            >
              About the founder <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-inner py-12 md:py-16" id="pricing" aria-labelledby="pricing-heading">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Pricing &amp; packages
          </p>
          <h2 id="pricing-heading" className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Fixed-scope packages at $40/hr
          </h2>
          <p className="mb-2 text-sm leading-relaxed text-brand-muted md:text-base">{pricingNote}</p>
          <p className="text-sm text-slate-200">
            Project rate:{' '}
            <span className="font-semibold text-brand-gold">${SOFTWARE_DEV_HOURLY_USD}/hr</span>
            {' · '}written estimate before work begins · 2–12 week delivery by package
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <article key={pkg.id} className={`pricing-card ${pkg.popular ? 'pricing-card-popular' : ''}`}>
              {pkg.popular && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                  Most Popular
                </span>
              )}
              <span className="card-watermark" aria-hidden="true">
                {pkg.id}
              </span>
              <p className="mb-1 text-xs uppercase tracking-widest text-brand-muted">Package</p>
              <h3 className="mb-3 text-2xl font-bold tracking-wide text-white">{pkg.name}</h3>
              <p className="mb-1 text-3xl font-extrabold text-brand-gold md:text-4xl">{pkg.price}</p>
              <p className="mb-1 text-xs text-slate-300">{pkg.hoursLabel}</p>
              <p className="mb-6 text-xs text-brand-muted">{pkg.delivery}</p>
              <ul className="feature-list mt-auto space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-outline mt-8 w-full justify-center text-center">
                Request quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner border-y border-brand-line/80 py-6" aria-label="Add-ons">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <span className="shrink-0 text-sm font-bold uppercase tracking-widest text-brand-gold">
            Add-ons:
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted">
            {addOns.map((addon, i) => (
              <li key={addon.label} className="flex items-center gap-6">
                <span>
                  {addon.label} <span className="text-white/80">{addon.price}</span>
                </span>
                {i < addOns.length - 1 && (
                  <span className="hidden text-brand-line sm:inline" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-inner py-14 md:py-20" aria-labelledby="process-heading">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Process</p>
        <div className="brand-line-thin mb-6 w-16" />
        <h2 id="process-heading" className="mb-3 text-3xl font-bold text-white md:text-4xl">
          {processSectionTitle}
        </h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-brand-muted md:mb-14 md:text-base">
          {processSectionSubtitle}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.id} className="process-card">
              <span className="card-watermark text-[4rem]" aria-hidden="true">
                {step.id}
              </span>
              <h3 className="relative z-10 mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="relative z-10 flex-grow text-sm leading-relaxed text-brand-muted">
                {step.description}
              </p>
              <div className="relative z-10 mt-6 h-0.5 w-full bg-brand-gold" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner pb-20">
        <div className="card-dark border-brand-gold/30 p-10 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Have a project like one in the portfolio?
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-slate-200">
            Tell me which reference app is closest to your goal. I will scope timeline, hours, and a written
            estimate at ${SOFTWARE_DEV_HOURLY_USD}/hr before any build work begins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Book consultation
            </Link>
            <a href="#portfolio" className="btn btn-outline">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
