import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import { getCaseStudy } from '../data/caseStudies'

type Props = {
  slug: string
}

export default function CaseStudyPage({ slug }: Props) {
  const cs = getCaseStudy(slug)

  usePageTitle(cs ? `Case Study: ${cs.title}` : 'Case Study Not Found')

  if (!cs) {
    return (
      <div className="section-inner py-20 text-center">
        <p className="text-brand-muted">Case study not found.</p>
        <Link to="/dashboard" className="btn btn-outline mt-6 inline-flex">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-site-grid min-h-full">
      {/* Header */}
      <section className="border-b border-brand-line bg-brand-card/80 py-16 md:py-20">
        <div className="section-inner max-w-4xl">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-white mb-8 text-sm font-semibold uppercase tracking-wide"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Case Study</p>
          <h1 className="mb-3 text-white">{cs.title}</h1>
          <p className="mb-6 text-xl font-semibold text-slate-200">{cs.subtitle}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {cs.stack.map((tag) => (
              <span
                key={tag}
                className="rounded border border-brand-line bg-brand-navy px-3 py-1 text-xs font-medium text-brand-gold"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
            <Link to="/contact" className="btn btn-outline inline-flex items-center gap-2">
              Discuss this project
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="section-inner max-w-4xl py-14 md:py-20 space-y-14">
        {/* Problem */}
        <section aria-labelledby={`${slug}-problem`}>
          <h2 id={`${slug}-problem`} className="mb-4 text-2xl font-bold text-white">
            The Problem
          </h2>
          <p className="text-base leading-relaxed text-slate-200">{cs.problem}</p>
        </section>

        {/* Solution */}
        <section aria-labelledby={`${slug}-solution`}>
          <h2 id={`${slug}-solution`} className="mb-4 text-2xl font-bold text-white">
            The Solution: {cs.title.split(' ')[0]}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-slate-200">{cs.solutionIntro}</p>
          <ul className="space-y-4">
            {cs.features.map((f) => (
              <li key={f.title} className="border-l-2 border-brand-gold/50 pl-4">
                <span className="font-semibold italic text-white">{f.title}*</span>
                <span className="text-slate-200">: {f.body}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section aria-labelledby={`${slug}-impact`}>
          <h2 id={`${slug}-impact`} className="mb-4 text-2xl font-bold text-white">
            The Impact
          </h2>
          <p className="text-base leading-relaxed text-slate-200">{cs.impact}</p>
        </section>

        {/* CTA */}
        <section className="card-dark border-brand-gold/30 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-white">
            Need something like {cs.title.split(' ')[0]}?
          </h3>
          <p className="mb-6 mx-auto max-w-xl text-sm leading-relaxed text-slate-200">
            Tell me which part of this system is closest to your goal. I'll scope the hours and deliver a
            written estimate at $40/hr before any work begins.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book a free consultation
          </Link>
        </section>
      </div>
    </div>
  )
}
