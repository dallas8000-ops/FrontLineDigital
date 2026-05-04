import React from 'react'
import { Link } from 'react-router-dom'
import { Code, FlaskConical, Shield, Rocket, ExternalLink } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function Services() {
  usePageTitle('Services')
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Full-Stack Web Development',
      desc: 'End-to-end production web applications built with React/TypeScript frontends and Django or Node.js backends, wired to PostgreSQL — deployed to the cloud.',
      features: [
        'React + TypeScript UI with responsive design',
        'Django REST or Express.js API development',
        'PostgreSQL schema design & migrations',
        'Session & JWT authentication with RBAC',
        'CSRF protection & input validation',
        'GitHub Actions CI/CD pipeline setup',
        'Cloud deployment to Render / cloud platforms',
      ],
    },
    {
      icon: <FlaskConical size={40} />,
      title: 'QA Automation & API Testing',
      desc: 'Systematic test coverage using Python unittest and Jest — from API endpoint validation to full authentication flow testing and regression suites.',
      features: [
        'Python unittest for Django APIs & logic',
        'Jest unit tests for React components',
        'API endpoint validation & error handling',
        'Authentication & permission flow testing',
        'Regression testing & bug reporting',
        'Test case design & documentation',
        'Manual QA across full SDLC',
      ],
    },
    {
      icon: <Shield size={40} />,
      title: 'Application Security',
      desc: 'Security-first development practices drawn from federal law enforcement and mission-critical systems — zero-defect standards applied to web applications.',
      features: [
        'CSRF protection implementation',
        'Session hardening & access control',
        'Input validation & sanitization',
        'Role-based access control (RBAC)',
        'Authentication audit & hardening',
        'Admin interface access control',
        'Compliance & security documentation',
      ],
    },
    {
      icon: <Rocket size={40} />,
      title: 'DevOps & CI/CD Automation',
      desc: 'Automated build, test, and deployment pipelines using GitHub Actions — cloud deployments with Gunicorn, WhiteNoise, and Render.',
      features: [
        'GitHub Actions CI/CD pipeline configuration',
        'Automated test runs on every push',
        'Render cloud deployment & configuration',
        'Gunicorn + WhiteNoise production setup',
        'Linux/Ubuntu CLI & Bash scripting',
        'Environment variable & secrets management',
        'Deployment documentation & runbooks',
      ],
    },
  ]

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
          {services.map((service) => (
            <div key={service.title} className="card hover:shadow-xl transition-shadow">
              <div className="text-accent-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="text-dark-600 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-dark-700 text-sm">
                    <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-primary w-full">
                Get In Touch
              </a>
            </div>
          ))}
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
            {[
              {
                title: 'Kristie Store',
                desc: 'Live fashion ecommerce (women\'s apparel & accessories) shipping from Kampala worldwide. Production Django storefront + staff tooling + DRF API on Render / PostgreSQL with CI on every push.',
                url: 'https://kristie-store.onrender.com',
                image: '/images/profile/Kistie-Store.png',
                tech: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'GitHub Actions'],
              },
              {
                title: 'Django REST Blog API',
                desc: 'Production blog and portfolio site deployed on Render. Full CRUD post management, social login (OAuth), public profiles, comments, contact form, and REST API with JWT auth.',
                url: 'https://blog-2-hggg.onrender.com',
                image: '/images/profile/Django Rest Blog API.png',
                tech: ['Python', 'Django REST', 'PostgreSQL', 'JWT Auth', 'React'],
              },
              {
                title: 'React Product Catalog',
                desc: 'React-based storefront SPA with product catalog, product details pages, shopping cart checkout flow, responsive UI, and localStorage persistence. Built with Vite for fast performance.',
                url: null,
                image: '/images/profile/React Store.jpg',
                tech: ['React', 'TypeScript', 'Jest', 'Vite', 'CSS3'],
              },
              {
                title: 'PC Checker',
                desc: 'Windows desktop diagnostics utility with a multi-tab CustomTkinter client, background live vs diagnostic refresh timers, UAC-aware elevation, SQLite metric history, local charts, and modular WMI/PowerShell-based checks exposed through a shared-state local API and web dashboard.',
                url: null,
                repoUrl: 'https://github.com/dallas8000-ops/PC-Checker',
                detailPath: '/projects/pc-checker',
                disableHostedApp: true,
                image: '/images/profile/PC Checker.png',
                tech: ['Python', 'CustomTkinter', 'FastAPI', 'SQLite', 'Matplotlib', 'WMI', 'PowerShell'],
              },
              {
                title: 'Frontline Digital',
                desc: 'This portfolio site — full-stack React/TypeScript frontend with Express backend. Features contact form with Nodemailer email delivery, live GitHub API integration, rate limiting, and production deployment on Render.',
                url: 'https://frontlinedigital-1.onrender.com',
                image: '/images/logos/frontline-digital-logo.png',
                tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Nodemailer', 'Tailwind CSS'],
              },
            ].map((project) => (
              <div key={project.title} className="card flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  {project.image && (project.detailPath ? (
                    <Link to={project.detailPath}>
                      <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4 object-cover max-h-44" />
                    </Link>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4 object-cover max-h-44" />
                  ))}
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-dark-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {project.title === 'PC Checker' ? (
                  <div className="flex flex-col gap-3">
                    <Link to={project.detailPath!} className="btn btn-primary w-full flex items-center justify-center gap-2">
                      <ExternalLink size={16} /> View Details
                    </Link>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full flex items-center justify-center gap-2">
                      <ExternalLink size={16} /> GitHub Repo
                    </a>
                    <span className="btn btn-outline w-full flex items-center justify-center gap-2 opacity-40 pointer-events-none">
                      <ExternalLink size={16} /> Hosted App Not Available
                    </span>
                  </div>
                ) : (
                  <a href={project.url ?? '#'} target="_blank" rel="noopener noreferrer"
                    className={`btn btn-outline w-full flex items-center justify-center gap-2${
                      project.url ? '' : ' opacity-40 pointer-events-none'
                    }`}>
                    <ExternalLink size={16} /> {project.url ? 'View Live' : 'Coming Soon'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
