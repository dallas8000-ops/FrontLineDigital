import React from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'
import { defaultPortfolioProjects } from '../data/portfolioProjects'
import { getSiteContent } from '../utils/siteContent'
import { business } from '../data/freelanceContent'
import ProjectCard from '../components/ProjectCard'

export default function Dashboard() {
  usePageTitle('Projects — Production Portfolio')
  const content = getSiteContent()
  const projects =
    content.projects?.length > 0 ? content.projects : defaultPortfolioProjects

  return (
    <div className="bg-site-grid">
      <section className="page-hero">
        <div className="section-inner">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Projects</p>
          <h1 className="mb-4 text-white">This is what I provide</h1>
          <p className="text-brand-muted text-lg max-w-3xl leading-relaxed">
            {business.portfolioSectionLead} Each entry includes a live demo where applicable — source code is
            not published publicly.
          </p>
          <Link to="/contact" className="btn btn-primary mt-8 inline-flex">
            Scope a project like these
          </Link>
        </div>
      </section>

      <section className="section-inner pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} highlightCount={3} />
          ))}
        </div>
      </section>
    </div>
  )
}
