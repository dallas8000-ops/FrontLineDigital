
import React from 'react'
import { Award, Briefcase, Shield, Code } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import { getSiteContent } from '../utils/siteContent'

  usePageTitle('About');
  const content = getSiteContent();
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="mb-4">About {content.profileName}</h1>
          <p className="text-xl text-primary-100">
            {content.profileTitle}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/images/profile/Gilliom.jpg"
                alt={content.profileName}
                className="relative w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6">{content.profileName}</h2>
            <p className="text-dark-700 text-lg mb-4 leading-relaxed">
              {content.profileTitle}
            </p>
            <p className="text-dark-700 mb-6 leading-relaxed">
              {content.about}
            </p>
            {/* Optionally: Add more dynamic fields here if needed */}
          </div>
        </div>
      </section>

      {/* Video Intro */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="mb-3">Meet the Developer</h2>
          <p className="text-dark-600 max-w-xl mx-auto">
            A quick personal introduction — who I am, what I build, and why it matters.
          </p>
        </div>
        <div className="card p-0 overflow-hidden shadow-xl">
          <video
            controls
            preload="auto"
            playsInline
            muted={false}
            className="w-full rounded-xl"
            style={{ maxHeight: '520px' }}
            onError={(e) => {
              const target = e.currentTarget as HTMLVideoElement
              target.style.display = 'none'
              const msg = target.nextElementSibling as HTMLElement
              if (msg) msg.style.display = 'block'
            }}
          >
            <source src="/images/profile/Ray.mp4" type="video/mp4" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
          <p className="hidden text-center text-dark-600 p-6">
            Video unavailable. <a href="/images/profile/Ray.mp4" className="text-primary-600 underline" download>Download the video</a> to watch locally.
          </p>
        </div>
      </section>

      {/* Background Timeline */}
      <section className="bg-dark-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center mb-12">Professional Background</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎖️', title: 'U.S. Army Electronics', years: '1987–1999', desc: 'FAA-Certified Air Traffic Controller. Diagnosed and repaired communication, radar, and navigation systems. Zero-defect mission standards.' },
              { icon: '🚔', title: 'Law Enforcement', years: '1998–2015', desc: 'Military Police · Waco PD · Dallas PD. TCOLE Master Police Officer. Rigorous documentation under federal and state compliance.' },
              { icon: '🔒', title: 'Federal QA Contractor', years: '2018', desc: 'Triple Canopy — QA Analyst on high-security threat-detection systems. 99.9% accuracy. Formal technical documentation.' },
              { icon: '⚡', title: 'Full Stack Developer', years: '2024–Present', desc: 'SDGKU-trained. Production deployments in Django, React, TypeScript, PostgreSQL, and GitHub Actions CI/CD.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-accent-600 font-semibold text-sm mb-3">{item.years}</p>
                <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-12 text-center">
          <h2 className="mb-6">What Drives Me</h2>
          <p className="text-xl mb-4 text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Every piece of software I build is held to the same standard I applied as an air traffic controller and federal QA analyst: it either works correctly under every condition, or it doesn't ship.
          </p>
          <p className="text-primary-200 text-lg">
            Frontline Digital — Precision-Built. Production-Ready.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="bg-dark-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center mb-12">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Full Stack Software Development — Technical Diploma', org: 'San Diego Global Knowledge University, Tampa, FL', period: '2025–2026', note: 'Python · React · TypeScript · Node.js · PostgreSQL · GitHub Actions · Agile/Scrum · Completed May 2026' },
              { title: 'Information Technology — Technical Diploma', org: 'MyComputerCareer', period: '2024–2025', note: 'IT Security · CompTIA · Networking · Systems Administration' },
              { title: 'Associate of Arts — Business Administration', org: 'American InterContinental University', period: '2007–2008', note: '' },
              { title: 'Associate of Arts — Legal Assistant/Paralegal', org: 'Northwest Mississippi Community College', period: '1980–1982', note: '' },
            ].map((edu) => (
              <div key={edu.title} className="card border-l-4 border-primary-600">
                <h3 className="font-bold text-dark-900 mb-1">{edu.title}</h3>
                <p className="text-primary-600 text-sm font-semibold">{edu.org}</p>
                <p className="text-dark-500 text-xs mb-2">{edu.period}</p>
                {edu.note && <p className="text-dark-600 text-sm">{edu.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-gradient-to-r from-accent-500 to-orange-600 text-white rounded-2xl p-12 text-center">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 text-white/90 max-w-xl mx-auto">
            Looking for a QA engineer or full-stack developer who delivers production-ready work? Let's talk.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="btn bg-dark-900 hover:bg-dark-800 text-white">Contact Me</a>
            {/* LinkedIn button removed */}
          </div>
        </div>
      </section>
    </div>
  )
}
