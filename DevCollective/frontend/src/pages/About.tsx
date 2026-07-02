import React from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'
import { business } from '../data/freelanceContent'

export default function About() {
  usePageTitle('About')
  const content = getSiteContent()

  const timeline = [
    {
      icon: '⚡',
      title: 'Full-Stack Software Engineer',
      years: 'Sept 2025 – May 2026',
      desc: 'SDGKU technical diploma. Fourteen solo-built production applications — Django, FastAPI, React, TypeScript, PostgreSQL, automated tests, and CI/CD on Railway.',
    },
    {
      icon: '🔒',
      title: 'Federal QA Contractor',
      years: '2018',
      desc: 'Triple Canopy — QA on high-security threat-detection systems at 99.9% accuracy. Formal technical documentation.',
    },
    {
      icon: '🚔',
      title: 'Law Enforcement',
      years: '1998 – 2015',
      desc: 'Military Police · Waco PD · Dallas PD. TCOLE Master Police Officer (Texas); Washington State law-enforcement equivalency certificate. Investigative documentation and chain-of-custody under compliance.',
    },
    {
      icon: '🎖️',
      title: 'Air Traffic Control (FAA-Certified)',
      years: '1987 – 1999',
      desc: 'U.S. Army — zero-defect operational standards in FAA-certified air traffic control and electronics maintenance. Military service documented on Joint Services Transcript (JST).',
    },
  ]

  const education = [
    {
      title: 'Full Stack Software Development — Technical Diploma',
      org: 'San Diego Global Knowledge University · Tampa, FL',
      period: 'Completed May 2026',
      note: 'Python · React · TypeScript · Node.js · PostgreSQL · GitHub Actions · Agile/Scrum',
    },
    {
      title: 'Information Technology — Technical Diploma',
      org: 'MyComputerCareer',
      period: '2024 – 2025',
      note: 'IT Security · CompTIA · Networking',
    },
  ]

  return (
    <div className="bg-site-grid min-h-full">
      <section className="page-hero border-b border-brand-line">
        <div className="section-inner text-center md:text-left">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">About</p>
          <h1 className="mb-4 text-white">{content.profileName}</h1>
          <p className="text-brand-gold text-lg font-medium max-w-2xl">{content.profileTitle}</p>
        </div>
      </section>

      <section className="section-inner py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="card-dark p-3">
            <img
              src="/images/profile/About.png"
              alt={content.profileName}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Who I am</h2>
            <p className="text-slate-200 leading-relaxed mb-6">{content.about}</p>
            <p className="text-brand-muted text-sm mb-6">{business.location}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/profile" className="btn btn-outline">
                Full resume
              </Link>
              <Link to="/dashboard" className="btn btn-primary">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-inner py-12 border-t border-brand-line">
        <h2 className="text-white text-2xl font-bold text-center mb-10">Professional background</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item) => (
            <article key={item.title} className="card-dark p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-brand-gold text-xs font-semibold mb-3">{item.years}</p>
              <p className="text-slate-200 text-xs leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner py-12 max-w-4xl">
        <h2 className="text-white text-2xl font-bold text-center mb-3">Introduction</h2>
        <p className="text-brand-muted text-center text-sm mb-8">
          A quick overview of who I am and what I build.
        </p>
        <div className="card-dark p-2 overflow-hidden">
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-lg"
            style={{ maxHeight: '480px' }}
          >
            <source src="/images/profile/Ray.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </section>

      <section className="section-inner py-16 border-t border-brand-line">
        <h2 className="text-white text-2xl font-bold text-center mb-10">Education</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <article key={edu.title} className="card-dark p-6 border-l-4 border-brand-gold">
              <h3 className="font-bold text-white mb-1">{edu.title}</h3>
              <p className="text-brand-gold text-sm">{edu.org}</p>
              <p className="text-brand-muted text-xs mt-2">{edu.period}</p>
              {edu.note && <p className="text-slate-200 text-sm mt-2">{edu.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section-inner pb-20">
        <div className="card-dark p-10 text-center border-brand-gold/20">
          <h2 className="text-white text-2xl font-bold mb-4">What drives my work</h2>
          <p className="text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6">
            Every release is held to the same standard I applied as an air traffic controller and federal QA
            analyst: it works correctly under real conditions, or it does not ship.
          </p>
          <p className="text-brand-gold font-semibold">{business.name} — Precision-built. Production-ready.</p>
          <Link to="/contact" className="btn btn-primary mt-8 inline-flex">
            Work with me
          </Link>
        </div>
      </section>
    </div>
  )
}
