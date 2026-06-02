
import React from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'
import { business } from '../data/freelanceContent'
import ProjectCard from '../components/ProjectCard'

export default function Services() {
  usePageTitle('Services')
  const content = getSiteContent()
  const projects = content.projects ?? []

  return (
    <div className="bg-site-grid">
      <section className="page-hero">
        <div className="section-inner">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Services</p>
          <h1 className="mb-4 text-white">Defined by what is already in production</h1>
          <p className="text-xl text-brand-muted max-w-3xl leading-relaxed">
            I do not sell abstract “development hours.” The projects below are the clearest statement of what I
            build — e-commerce, APIs, desktop tools, SaaS, database platforms, and business sites. Custom work
            extends from these reference implementations.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/#portfolio" className="btn btn-primary">
              Portfolio on home
            </a>
            <a href="/#pricing" className="btn btn-outline">
              Package pricing
            </a>
          </div>
        </div>
      </section>

      <section className="section-inner pb-16">
        <h2 className="text-white text-2xl font-bold mb-8 sr-only">Production projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line py-16">
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
                      Discuss this scope
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
