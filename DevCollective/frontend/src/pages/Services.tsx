
import React from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'

export default function Services() {
  usePageTitle('Services')
  const content = getSiteContent()

  return (
    <div className="bg-site-grid">
      <section className="page-hero">
        <div className="section-inner">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Services</p>
          <h1 className="mb-4 text-white">Services built around production experience</h1>
          <p className="text-xl text-brand-muted max-w-3xl leading-relaxed">
            Focused engineering engagements for teams that need operational clarity, dependable systems, and a
            verifiable path to production. Each scope starts with requirements and ends with a tested release.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/dashboard" className="btn btn-primary">
              View all projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Discuss a scope
            </Link>
          </div>
        </div>
      </section>

      <section className="section-inner py-16">
        <div className="section-inner">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Capabilities</p>
          <h2 className="text-white text-2xl font-bold mb-4">How engagements are structured</h2>
          <p className="text-brand-muted mb-10 max-w-2xl leading-relaxed">
            When your need does not map one-to-one to a portfolio app, these are the service areas I apply on
            custom scopes — still with acceptance criteria, automated tests, and live deployment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {content.services && content.services.length > 0
              ? content.services.map((service, idx) => (
                  <div
                    key={service.title + idx}
                    className="card-dark p-6 hover:border-brand-gold/20 transition-colors"
                  >
                    <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                    <p className="text-brand-muted mb-6 leading-relaxed">{service.description}</p>
                    <Link to="/contact" className="btn btn-primary w-full text-center">
                      Discuss this service
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  )
}
