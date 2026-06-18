import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import type { PortfolioProject } from '../data/portfolioProjects'

type ProjectCardProps = {
  project: PortfolioProject
  /** Show the one-line "what this proves for clients" line */
  showProves?: boolean
  highlightCount?: number
  compact?: boolean
}

export default function ProjectCard({
  project,
  showProves = true,
  highlightCount = 2,
  compact = false,
}: ProjectCardProps) {
  const highlights = project.highlights?.slice(0, highlightCount) ?? []
  const stack = project.stack.split(',').map((t) => t.trim())

  return (
    <article className={`card-dark flex h-full flex-col ${compact ? 'p-5' : 'p-0'}`}>
      {!compact && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-brand-line bg-brand-navy">
          {project.screenshot ? (
            <img src={project.screenshot} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Product preview</p>
                <p className="mt-2 text-xl font-bold text-white">{project.title}</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {stack.slice(0, 3).map((item) => (
                  <span key={item} className="h-2 rounded bg-white/15" />
                ))}
              </div>
            </div>
          )}
          {project.flagship && (
            <span className="absolute right-3 top-3 bg-brand-gold px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">
              Flagship
            </span>
          )}
        </div>
      )}
      <div className={compact ? '' : 'flex flex-1 flex-col p-6'}>
        <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
        {showProves && project.proves && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {project.proves}
          </p>
        )}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-brand-muted">{project.desc}</p>
        {highlights.map((h) => (
          <p key={h} className="mb-2 border-l border-brand-gold/40 pl-3 text-xs leading-relaxed text-slate-400">
            {h}
          </p>
        ))}
        <div className="mb-6 mt-2 flex flex-wrap gap-2">
          {stack.slice(0, compact ? 5 : 8).map((t) => (
            <span
              key={t}
              className="rounded border border-brand-line bg-brand-navy px-2.5 py-1 text-xs font-medium text-brand-gold"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2 sm:flex-row">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex flex-1 items-center justify-center gap-2"
            >
              <ExternalLink size={14} /> Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm flex flex-1 items-center justify-center gap-2"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.detailPath && (
            <Link to={project.detailPath} className="btn btn-outline btn-sm flex-1 text-center">
              Case study
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
