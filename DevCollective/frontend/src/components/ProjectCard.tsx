import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import type { PortfolioProject } from '../data/portfolioProjects'

type ProjectCardProps = {
  project: PortfolioProject
  /** Show the one-line “what this proves for clients” line */
  showProves?: boolean
  highlightCount?: number
}

export default function ProjectCard({
  project,
  showProves = true,
  highlightCount = 2,
}: ProjectCardProps) {
  const highlights = project.highlights?.slice(0, highlightCount) ?? []

  return (
    <article className="card-dark p-6 flex flex-col h-full">
      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
      {showProves && project.proves && (
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-wide mb-3">
          {project.proves}
        </p>
      )}
      <p className="text-brand-muted text-sm mb-4 leading-relaxed flex-grow">{project.desc}</p>
      {highlights.map((h) => (
        <p key={h} className="text-slate-400 text-xs mb-2 pl-3 border-l border-brand-gold/40 leading-relaxed">
          {h}
        </p>
      ))}
      {project.stack && (
        <div className="flex flex-wrap gap-2 mb-6 mt-2">
          {project.stack.split(',').map((t) => (
            <span
              key={t}
              className="bg-brand-navy text-brand-gold text-xs px-2.5 py-1 rounded font-medium border border-brand-line"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2 mt-auto">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex items-center justify-center gap-2"
          >
            <ExternalLink size={14} /> Live demo
          </a>
        )}
        {project.detailPath && (
          <Link to={project.detailPath} className="btn btn-outline btn-sm text-center">
            Case study
          </Link>
        )}
      </div>
    </article>
  )
}
