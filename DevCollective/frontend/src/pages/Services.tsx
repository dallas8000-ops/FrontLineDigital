
import React from 'react'
import { ExternalLink } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'

export default function Services() {
  usePageTitle('Services')
  const content = getSiteContent()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="mb-4">Professional Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Production-grade development, QA automation, security, and DevOps — delivered by a full-stack engineer with a zero-defect background.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {content.services && content.services.length > 0
            ? content.services.map((service, idx) => (
                <div key={service.title + idx} className="card hover:shadow-xl transition-shadow">
                  <div className="text-accent-500 mb-4">{/* Optionally add icons */}</div>
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-dark-600 mb-6 leading-relaxed">{service.description}</p>
                  <a href="/contact" className="btn btn-primary w-full">
                    Get In Touch
                  </a>
                </div>
              ))
            : null}
        </div>
      </section>

      {/* Live Projects */}
      <section className="bg-dark-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center mb-4">Production Projects</h2>
          <p className="text-center text-dark-600 mb-16 max-w-2xl mx-auto">
            All projects are independently developed and live in production — not academic exercises.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.projects && content.projects.length > 0
              ? content.projects.map((project, idx) => (
                  <div key={project.title + idx} className="card flex flex-col justify-between hover:shadow-xl transition-shadow">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-dark-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                      <div className="flex gap-2 flex-wrap mb-6">
                        {project.stack && project.stack.split(',').map((t, i) => (
                          <span key={t + i} className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-medium">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full flex items-center justify-center gap-2">
                        <ExternalLink size={16} /> Visit Site
                      </a>
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  )
}
