import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Award, Code2 } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function Profile() {
  usePageTitle('Profile & CV — Barney R. Gilliom')
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Bash'] },
    { category: 'Testing & QA', items: ['Python unittest', 'Jest', 'API Testing', 'Manual Testing', 'Test Case Design', 'Bug Reporting', 'Regression Testing'] },
    { category: 'Backend & APIs', items: ['Django', 'Flask', 'Node.js', 'Express.js', 'RESTful API Design', 'JWT Auth', 'Session Auth', 'RBAC'] },
    { category: 'Frontend & UI/UX', items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'Modal Behavior', 'Filter & Sort Logic', 'Keyboard Navigation'] },
    { category: 'Databases', items: ['PostgreSQL', 'SQLite', 'Django ORM', 'SQL Schema Design', 'Database Migrations'] },
    { category: 'DevOps & CI/CD', items: ['GitHub Actions', 'Git', 'Render', 'Gunicorn', 'WhiteNoise', 'Linux/Ubuntu CLI', 'Bash'] },
    { category: 'AI Dev Tools', items: ['GitHub Copilot', 'OpenAI Codex', 'Claude (Anthropic)', 'Grok', 'Prompt Engineering'] },
    { category: 'Security', items: ['CSRF Protection', 'Session Hardening', 'Input Validation', 'Access Control', 'Auth Hardening'] },
  ]

  const experience = [
    {
      title: 'QA Engineer / Full Stack Developer (Project-Based)',
      company: 'San Diego Global Knowledge University',
      location: 'Tampa, FL',
      period: '2025 – 2026',
      bullets: [
        'Test, build, and deploy full-stack web applications; responsible for QA validation across the full SDLC',
        'Write Python unittest and Jest test cases for API endpoints, authentication logic, and UI components',
        'Configure and maintain GitHub Actions CI/CD pipelines; deploy to cloud platforms with Render',
        'Document test cases, bug reports, and deployment procedures following Agile/Scrum workflow',
        'Graduate of SDGKU Full Stack Software Development Technical Diploma — Completed May 2026',
      ],
    },
    {
      title: 'Quality Assurance Analyst',
      company: 'Triple Canopy (Federal Contractor)',
      location: 'Kuwait',
      period: '2018',
      bullets: [
        'Performed precision QA analysis on high-security threat-detection systems achieving 99.9% accuracy under mission-critical conditions',
        'Executed diagnostics, calibration, and system validation protocols; produced formal technical QA documentation',
        'Identified equipment faults and coordinated corrective action in compliance with federal regulatory standards',
      ],
    },
    {
      title: 'Law Enforcement Officer',
      company: 'U.S. Army Military Police | Waco PD | Dallas PD',
      location: 'Texas / Washington',
      period: '1998 – 2015',
      bullets: [
        'Maintained rigorous investigative documentation and chain-of-custody records under strict federal and state compliance standards',
        'Operated law enforcement databases, communication systems, and field technology under high-pressure conditions',
        'Attained Master Police Officer Certification (TCOLE); received commendations for precision and judgment',
      ],
    },
    {
      title: 'Air Traffic Controller / Electronics Technician',
      company: 'United States Army',
      location: 'U.S. / Overseas',
      period: '1987 – 1999',
      bullets: [
        'FAA-Certified ATC operator; managed safe aircraft sequencing requiring split-second accuracy and zero-defect execution',
        'Diagnosed and repaired communication, radar, and navigation systems using multimeters, oscilloscopes, and signal analyzers',
        'Maintained precise technical logs and system documentation in mission-critical operational environments',
      ],
    },
  ]

  const projects = [
    {
      title: 'Kristie Store',
      stack: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'GitHub Actions'],
      desc: 'Live fashion ecommerce (women\'s apparel & accessories) shipping from Kampala worldwide. Production Django storefront + staff tooling + DRF API on Render / PostgreSQL with CI on every push.',
      url: 'https://kristie-store.onrender.com',
      image: '/images/profile/Kistie-Store.png',
    },
    {
      title: 'Django REST Blog API',
      stack: ['Python', 'Django REST', 'PostgreSQL', 'JWT', 'React'],
      desc: 'Production blog and portfolio site deployed on Render. Full CRUD post management, social login (OAuth), public profiles, comments, contact form, and REST API with JWT auth.',
      url: 'https://blog-2-hggg.onrender.com',
      image: '/images/profile/Django Rest Blog API.png',
    },
    {
      title: 'React Product Catalog',
      stack: ['React', 'TypeScript', 'Jest', 'Vite', 'CSS3'],
      desc: 'React-based storefront SPA with product catalog, product details pages, shopping cart checkout flow, responsive UI, and localStorage persistence. Built with Vite for fast performance.',
      url: null,
      image: '/images/profile/React Store.jpg',
    },
    {
      title: 'PC Checker',
      stack: ['Python', 'CustomTkinter', 'FastAPI', 'SQLite', 'Matplotlib', 'WMI', 'PowerShell'],
      desc: 'Windows desktop diagnostics utility with a multi-tab CustomTkinter client, background live vs diagnostic refresh timers, UAC-aware elevation, SQLite metric history, local charts, and modular WMI/PowerShell-based checks exposed through a shared-state local API and web dashboard.',
      url: null,
      repoUrl: 'https://github.com/dallas8000-ops/PC-Checker',
      detailPath: '/projects/pc-checker',
      disableHostedApp: true,
      image: '/images/profile/PC Checker.png',
    },
    {
      title: 'Frontline Digital',
      stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Nodemailer', 'Tailwind CSS'],
      desc: 'This portfolio site — full-stack React/TypeScript frontend with Express backend. Features contact form with Nodemailer email delivery, live GitHub API integration, rate limiting, and production deployment on Render.',
      url: 'https://frontlinedigital.onrender.com',
      image: '/images/logos/frontline-digital-logo.png',
    },
  ]

  const certs = [
    'AI-900 — Microsoft Azure',
    'IT Security Certification — CompTIA',
    'FAA Air Traffic Controller',
    'FAA Helicopter Communication Systems/Repair',
    'TCOLE Master Police Officer',
    'Immersive Full Stack Software Development — SDGKU',
  ]

  return (
    <div>
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="mb-2">Barney R. Gilliom</h1>
          <p className="text-primary-100 text-lg">QA Automation Engineer · Python API Developer · Full-Stack Developer · DevOps</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div>
            <div className="card sticky top-24">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                <img src="/images/profile/barney.jpeg" alt="Barney Gilliom" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-center text-xl mb-1">Barney R. Gilliom</h2>
              <p className="text-center text-dark-500 text-sm mb-6">Riverview, FL · U.S. Citizen · Open to Remote & Relocation</p>

              <div className="space-y-3 border-t border-dark-200 pt-5">
                <a href="tel:6824604038" className="flex items-center gap-3 text-dark-700 hover:text-primary-600 text-sm">
                  <Phone size={16} /> (682) 460-4038
                </a>
                <a href="mailto:dallas8000@gmail.com" className="flex items-center gap-3 text-dark-700 hover:text-primary-600 text-sm">
                  <Mail size={16} /> dallas8000@gmail.com
                </a>
                <div className="flex items-center gap-3 text-dark-700 text-sm">
                  <MapPin size={16} /> Riverview, FL
                </div>
              </div>

              <div className="border-t border-dark-200 pt-5 mt-5 space-y-2">
                <a href="https://github.com/dallas8000-ops" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  <Code2 size={16} /> github.com/dallas8000-ops
                </a>
                <a href="https://linkedin.com/in/barney-gilliom-959981337" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  <Linkedin size={16} /> LinkedIn Profile
                </a>
              </div>

              <a href="/contact" className="btn btn-primary w-full mt-6 text-sm">
                Hire Me
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">

            {/* Summary */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Professional Summary</h3>
              <p className="text-dark-700 leading-relaxed">
                Full Stack Developer and QA Automation Engineer with production experience building, testing, and deploying real-world web applications. Proficient in Python (unittest), JavaScript (Jest), Django REST APIs, React/TypeScript, PostgreSQL, and CI/CD automation via GitHub Actions. Background in federal law enforcement and military electronics brings a precision-first, zero-defect mindset directly applicable to software quality assurance, API validation, and deployment reliability. All projects are independently developed production deployments — not academic exercises.
              </p>
            </div>

            {/* Skills */}
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-primary-700">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h4 className="font-semibold text-dark-800 text-sm mb-2 uppercase tracking-wide">{group.category}</h4>
                    <div className="flex gap-2 flex-wrap">
                      {group.items.map((skill) => (
                        <span key={skill} className="bg-primary-50 text-primary-800 px-3 py-1 rounded-lg text-sm font-medium border border-primary-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-primary-700">Production Projects</h3>
              <div className="space-y-6">
                {projects.map((proj) => (
                  <div key={proj.title} className="border-l-4 border-accent-500 pl-5 pb-5 border-b border-b-dark-100 last:border-b-0">
                    {proj.image && (
                      proj.detailPath ? (
                        <Link to={proj.detailPath}>
                          <img src={proj.image} alt={proj.title} className="w-full rounded-lg mb-4 object-cover max-h-48 hover:opacity-90 transition-opacity" />
                        </Link>
                      ) : (
                        <a href={proj.url ?? undefined} target="_blank" rel="noopener noreferrer">
                          <img src={proj.image} alt={proj.title} className="w-full rounded-lg mb-4 object-cover max-h-48 hover:opacity-90 transition-opacity" />
                        </a>
                      )
                    )}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-bold text-lg text-dark-900">{proj.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3">
                      {proj.detailPath && (
                        <Link to={proj.detailPath} className="text-primary-600 hover:text-primary-700 flex items-center gap-1 text-sm font-semibold">
                          <ExternalLink size={14} /> Project Details
                        </Link>
                      )}
                      {proj.repoUrl && (
                        <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1 text-sm font-semibold">
                          <ExternalLink size={14} /> GitHub Repo
                        </a>
                      )}
                      {proj.url && (
                        <a href={proj.url} target="_blank" rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1 text-sm font-semibold">
                          <ExternalLink size={14} /> Live App
                        </a>
                      )}
                      {proj.disableHostedApp && (
                        <span className="text-dark-400 flex items-center gap-1 text-sm font-semibold">
                          <ExternalLink size={14} /> Hosted app not available
                        </span>
                      )}
                    </div>
                    <p className="text-dark-600 text-sm mb-3">{proj.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {proj.stack.map((t) => (
                        <span key={t} className="bg-dark-100 text-dark-700 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-primary-700">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.company} className="border-l-4 border-primary-600 pl-5">
                    <h4 className="font-bold text-dark-900">{exp.title}</h4>
                    <p className="text-primary-600 font-semibold text-sm">{exp.company}</p>
                    <p className="text-dark-500 text-xs mb-3">{exp.location} · {exp.period}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b) => (
                        <li key={b} className="text-dark-700 text-sm flex gap-2">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-primary-700 flex items-center gap-2">
                <Award size={20} /> Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {certs.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 bg-primary-50 rounded-lg px-4 py-3">
                    <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></span>
                    <span className="text-dark-800 text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
