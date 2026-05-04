import React from 'react'
import { Award, Briefcase, Shield, Code } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="mb-4">About Barney R. Gilliom</h1>
          <p className="text-xl text-primary-100">
            QA Automation Engineer · Python API Developer · Full-Stack Developer · DevOps
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
                alt="Barney Gilliom"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6">Barney R. Gilliom</h2>
            <p className="text-dark-700 text-lg mb-4 leading-relaxed">
              Full Stack Developer and QA Automation Engineer with production experience building, testing, and deploying real-world web applications. Based in Riverview, FL — open to remote and relocation.
            </p>
            <p className="text-dark-700 mb-6 leading-relaxed">
              My background spans federal law enforcement, FAA-certified air traffic control, military electronics, and modern software development. That history brings a precision-first, zero-defect mindset directly to software quality assurance, API validation, and deployment reliability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code size={22} />, label: 'Full Stack', desc: 'Django · React · TypeScript' },
                { icon: <Shield size={22} />, label: 'QA & Security', desc: 'unittest · Jest · CSRF' },
                { icon: <Briefcase size={22} />, label: 'DevOps', desc: 'GitHub Actions · Render' },
                { icon: <Award size={22} />, label: 'Certified', desc: 'Azure AI-900 · TCOLE · FAA' },
              ].map((stat) => (
                <div key={stat.label} className="flex gap-3 items-start">
                  <div className="text-accent-500 flex-shrink-0 mt-0.5">{stat.icon}</div>
                  <div>
                    <p className="font-bold text-dark-900 text-sm">{stat.label}</p>
                    <p className="text-xs text-dark-600">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            preload="metadata"
            className="w-full rounded-xl"
            style={{ maxHeight: '520px' }}
          >
            <source src="/images/profile/Ray.mp4" type="video/mp4" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
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
            <a href="https://linkedin.com/in/barney-gilliom-959981337" target="_blank" rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white/10">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  )
}
