import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award } from 'lucide-react'

export default function Profile() {
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
      desc: 'Full-stack production e-commerce platform. Django REST API, session auth, CSRF protection, SMTP email confirmations, GitHub Actions CI/CD, 80+ seeded products.',
      url: 'https://kristie-store.onrender.com',
    },
    {
      title: 'Django REST Blog API',
      stack: ['Python', 'Django REST', 'PostgreSQL', 'JWT', 'React'],
      desc: 'Production REST API with full CRUD, JWT + session auth, RBAC, responsive React frontend. Live personal portfolio platform.',
      url: 'https://blog-2-hggg.onrender.com',
    },
    {
      title: 'React Product Catalog',
      stack: ['React', 'TypeScript', 'Jest', 'Vite', 'CSS3'],
      desc: 'Modular React/TypeScript component library with Jest unit tests, dynamic modals, multi-criteria filter logic, and keyboard navigation.',
      url: 'https://gilliomfrontlinedigital.onrender.com',
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
                  <Github size={16} /> github.com/dallas8000-ops
                </a>
                <a href="https://linkedin.com/in/barney-gilliom-959981337" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                  <Linkedin size={16} /> LinkedIn Profile
                </a>
              </div>

              <a href="mailto:dallas8000@gmail.com" className="btn btn-primary w-full mt-6 text-sm">
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
                {skills.map((group, idx) => (
                  <div key={idx}>
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
                {projects.map((proj, idx) => (
                  <div key={idx} className="border-l-4 border-accent-500 pl-5 pb-5 border-b border-b-dark-100 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-lg text-dark-900">{proj.title}</h4>
                      <a href={proj.url} target="_blank" rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 flex items-center gap-1 text-sm font-semibold ml-4">
                        <ExternalLink size={14} /> Live
                      </a>
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
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-primary-600 pl-5">
                    <h4 className="font-bold text-dark-900">{exp.title}</h4>
                    <p className="text-primary-600 font-semibold text-sm">{exp.company}</p>
                    <p className="text-dark-500 text-xs mb-3">{exp.location} · {exp.period}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-dark-700 text-sm flex gap-2">
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
                {certs.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 bg-primary-50 rounded-lg px-4 py-3">
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
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-16">
        <div className="section">
          <h1>Profile</h1>
          <p className="text-primary-100">Your professional presence</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div>
            <div className="card sticky top-24">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                <img 
                  src="/images/profile/barney.jpeg" 
                  alt="Barney Gilliom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-center mb-1">Barney Gilliom</h2>
              <p className="text-center text-dark-600 mb-6">QA Engineer | Python Developer | DevOps</p>
              
              <div className="space-y-3 border-t border-dark-200 pt-6">
                <a href="tel:6824604038" className="flex items-center gap-3 text-dark-700 hover:text-primary-600">
                  <Phone size={18} />
                  (682) 460-4038
                </a>
                <a href="mailto:dallas8000@gmail.com" className="flex items-center gap-3 text-dark-700 hover:text-primary-600">
                  <Mail size={18} />
                  dallas8000@gmail.com
                </a>
                <div className="flex items-center gap-3 text-dark-700">
                  <MapPin size={18} />
                  Riverview, FL
                </div>
              </div>

              <div className="border-t border-dark-200 pt-6 mt-6 space-y-2">
                <a href="#" className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold">
                  <Github size={18} />
                  GitHub
                </a>
                <a href="#" className="flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>

              <button className="btn btn-primary w-full mt-6">Edit Profile</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Skills */}
            <div className="card mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText size={24} className="text-primary-600" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {[
                  { category: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'] },
                  { category: 'Testing & QA', skills: ['unittest', 'Jest', 'API Testing', 'Test Automation'] },
                  { category: 'Backend & APIs', skills: ['Django', 'Flask', 'Node.js', 'Express', 'Django REST'] },
                  { category: 'Frontend', skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'] },
                  { category: 'Databases', skills: ['PostgreSQL', 'SQLite', 'Django ORM', 'SQL Design'] },
                  { category: 'DevOps & CI/CD', skills: ['GitHub Actions', 'Git', 'Linux/Ubuntu', 'Docker', 'Deployment'] },
                ].map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-dark-900 mb-3">{skillGroup.category}</h4>
                    <div className="flex gap-2 flex-wrap">
                      {skillGroup.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="card mb-8">
              <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'QA Engineer / Full Stack Developer',
                    company: 'San Diego Global Knowledge University',
                    period: '2025 - 2026',
                    desc: 'Test, build, and deploy full-stack web applications with Python unittest and Jest test cases.',
                  },
                  {
                    title: 'Quality Assurance Analyst',
                    company: 'Triple Canopy (Federal Contractor)',
                    period: '2018',
                    desc: 'Performed precision QA analysis on high-security systems achieving 99.9% accuracy.',
                  },
                ].map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <p className="text-primary-600 font-semibold">{exp.company}</p>
                    <p className="text-dark-600 text-sm">{exp.period}</p>
                    <p className="text-dark-700 mt-2">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Kristie Store',
                    desc: 'Production e-commerce platform with full CRUD APIs, session authentication, and GitHub Actions CI/CD.',
                    url: 'kristie-store.onrender.com',
                  },
                  {
                    title: 'Django REST API Blog Platform',
                    desc: 'RESTful blog API with role-based access control, session authentication, and input validation.',
                    url: 'github.com/dallas8000-ops',
                  },
                ].map((proj, idx) => (
                  <div key={idx} className="border-b border-dark-200 pb-4 last:border-b-0">
                    <h4 className="font-bold text-lg mb-2">{proj.title}</h4>
                    <p className="text-dark-700 mb-3">{proj.desc}</p>
                    <a
                      href={`https://${proj.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Visit →
                    </a>
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
