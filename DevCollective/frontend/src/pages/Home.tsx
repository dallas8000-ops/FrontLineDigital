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
  clientHourlyRate,
  SOFTWARE_DEV_HOURLY_USD,
  CLIENT_DISCOUNT_PERCENT,
} from '../data/landingContent'

export default function Home() {
  usePageTitle('Gilliom Frontline Digital — Freelance Software Engineer')
  const content = getSiteContent()
  const projects = content.projects ?? []

  return (
    <div className="bg-site-grid">
      <section className="section-inner pt-10 pb-10 md:pt-16 md:pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="animate-fadeInUp">
            <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {business.name}
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-3">
              {business.heroHeadline}
            </h1>
            <p className="text-brand-gold text-lg font-medium mb-4">{defaultProfile.profileTitle}</p>
            <p className="text-slate-200 text-lg leading-relaxed mb-6 max-w-2xl">{business.heroSubhead}</p>
            <p className="text-brand-muted text-sm mb-8">{business.location}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn btn-primary">
                See production work
              </a>
              <Link to="/contact" className="btn btn-outline">
                Start a project
              </Link>
              <Link to="/profile" className="btn btn-ghost">
                Resume / CV
              </Link>
            </div>
          </div>
          <div className="card-dark p-4 border-brand-gold/20">
            <img
              src="/images/profile/Gilliom.jpg"
              alt={defaultProfile.profileName}
              className="w-full rounded-lg object-cover max-h-80"
            />
            <p className="text-white font-semibold mt-4 text-center">{defaultProfile.profileName}</p>
            <p className="text-brand-muted text-xs text-center mt-1">Freelance · {business.location}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-card/40">
        <div className="section-inner py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {business.credentials.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-brand-gold text-3xl md:text-4xl font-bold">{item.stat}</p>
                <p className="text-brand-muted text-xs mt-2 uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="section-inner py-16 md:py-20 scroll-mt-24"
        aria-labelledby="portfolio-heading"
      >
        <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Portfolio</p>
        <h2 id="portfolio-heading" className="text-white text-3xl md:text-4xl font-bold mb-4">
          {business.portfolioSectionTitle}
        </h2>
        <p className="text-slate-200 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          {business.portfolioSectionLead}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <p className="text-brand-muted text-sm mt-10 text-center">
          Need a scoped quote for work like one of these?{' '}
          <a href="#pricing" className="text-brand-gold font-semibold hover:text-white">
            View packages
          </a>{' '}
          or{' '}
          <Link to="/contact" className="text-brand-gold font-semibold hover:text-white">
            contact me
          </Link>
          .
        </p>
      </section>

      <section className="section-inner py-14 border-t border-brand-line" aria-labelledby="how-heading">
        <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">How I work</p>
        <h2 id="how-heading" className="text-white text-2xl font-bold mb-8">
          Same discipline on every project — custom or package
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {business.valueProps.map((item) => (
            <article key={item.title} className="card-dark p-6">
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="card-dark p-6 border-brand-line">
          <h3 className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4">
            Also available for custom scopes
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {business.engagementTypes.map((type) => (
              <li key={type} className="text-slate-200 text-sm flex gap-2">
                <span className="text-brand-gold">→</span>
                {type}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm mt-6 hover:text-white"
          >
            About me <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <div className="brand-line-thin max-w-7xl mx-auto" />

      <section className="section-inner py-12 md:py-16" id="pricing" aria-labelledby="pricing-heading">
        <div className="mb-10 max-w-3xl">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Pricing &amp; packages
          </p>
          <h2 id="pricing-heading" className="text-white text-2xl md:text-3xl font-bold mb-3">
            Fixed packages when your need matches a standard web build
          </h2>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-2">{pricingNote}</p>
          <p className="text-slate-200 text-sm">
            List: <span className="text-white/90">${SOFTWARE_DEV_HOURLY_USD}/hr</span> × estimated hours
            (2–12 week projects) · Your price:{' '}
            <span className="text-brand-gold font-semibold">${clientHourlyRate}/hr</span> effective after{' '}
            {CLIENT_DISCOUNT_PERCENT}% discount.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`pricing-card ${pkg.popular ? 'pricing-card-popular' : ''}`}
            >
              {pkg.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </span>
              )}
              <span className="card-watermark" aria-hidden="true">
                {pkg.id}
              </span>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Package</p>
              <h3 className="text-white text-2xl font-bold tracking-wide mb-3">{pkg.name}</h3>
              <p className="text-brand-muted text-xs line-through mb-1">List {pkg.listPrice}</p>
              <p className="text-brand-gold text-3xl md:text-4xl font-extrabold mb-1">{pkg.price}</p>
              <p className="text-slate-300 text-xs mb-1">{pkg.hoursLabel}</p>
              <p className="text-brand-muted text-xs mb-6">{pkg.delivery}</p>
              <ul className="feature-list space-y-2.5 mt-auto">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-outline w-full mt-8 text-center justify-center">
                Request quote
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner py-6 border-y border-brand-line/80" aria-label="Add-ons">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <span className="text-brand-gold font-bold text-sm uppercase tracking-widest shrink-0">
            Add-ons:
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted">
            {addOns.map((addon, i) => (
              <li key={addon.label} className="flex items-center gap-6">
                <span>
                  {addon.label} <span className="text-white/80">{addon.price}</span>
                </span>
                {i < addOns.length - 1 && (
                  <span className="hidden sm:inline text-brand-line" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-inner py-14 md:py-20" aria-labelledby="process-heading">
        <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Process</p>
        <div className="brand-line-thin w-16 mb-6" />
        <h2 id="process-heading" className="text-white text-3xl md:text-4xl font-bold mb-3">
          {processSectionTitle}
        </h2>
        <p className="text-brand-muted text-sm md:text-base max-w-2xl mb-10 md:mb-14 leading-relaxed">
          {processSectionSubtitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <article key={step.id} className="process-card">
              <span className="card-watermark text-[4rem]" aria-hidden="true">
                {step.id}
              </span>
              <h3 className="text-white font-bold text-lg mb-2 relative z-10">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed relative z-10 flex-grow">
                {step.description}
              </p>
              <div className="h-0.5 w-full bg-brand-gold mt-6 relative z-10" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner pb-20">
        <div className="card-dark p-10 md:p-12 text-center border-brand-gold/30">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Have a project like one in the portfolio?
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Tell me which reference app is closest to your goal — I will scope timeline, hours, and a written
            estimate at $40/hr with your package discount applied.
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
