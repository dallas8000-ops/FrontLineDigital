import React from 'react'
import { getSiteContent } from '../utils/siteContent'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink, Award, Code2 } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function Profile() {
  const content = getSiteContent();
  usePageTitle(`Profile & CV — ${content.profileName}`);

  return (
    <div>
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="mb-2">{content.profileName}</h1>
          <p className="text-primary-100 text-lg">{content.profileTitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div>
            <div className="card sticky top-24">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg flex items-center justify-center">
                <img src="/images/profile/Gilliom.jpg" alt={content.profileName} className="w-full h-full object-cover object-top" />
              </div>
              <h2 className="text-center text-xl mb-1">{content.profileName}</h2>
              <p className="text-center text-dark-500 text-sm mb-6">Riverview, FL · U.S. Citizen · Open to Remote & Relocation</p>

              <div className="space-y-3 border-t border-dark-200 pt-5">
                <a href="tel:6824604038" className="flex items-center gap-3 text-dark-700 hover:text-primary-600 text-sm">
                  <Phone size={16} /> (682) 460-4038
                </a>
                <a href={`mailto:${content.contactEmail}`} className="flex items-center gap-3 text-dark-700 hover:text-primary-600 text-sm">
                  <Mail size={16} /> {content.contactEmail}
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
                {/* LinkedIn profile link removed */}
              </div>

              <a
                href="/images/portfolio/Barney_Gilliom_Resume_v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full mt-6 text-sm text-center block"
              >
                View Resume
              </a>
              <a href="/contact" className="btn btn-primary w-full mt-3 text-sm text-center block">
                Hire Me
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">

            {/* Summary */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Professional Summary</h3>
              <p>{content.about}</p>
            </div>

            {/* Skills */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Skills</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.skills && content.skills.length > 0
                  ? content.skills.map((group, idx) => (
                      <div key={group.category + idx}>
                        <h4 className="font-semibold mb-1">{group.category}</h4>
                        <ul className="list-disc pl-5 text-dark-700">
                          {group.items.map((item, i) => (
                            <li key={item + i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : null}
              </div>
            </div>

            {/* Projects */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Projects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.projects && content.projects.length > 0
                  ? content.projects.map((project, idx) => (
                      <div key={project.title + idx}>
                        <h4 className="font-semibold mb-1">{project.title}</h4>
                        <p className="text-dark-600 text-sm mb-2">{project.desc}</p>
                        <div className="flex gap-2 flex-wrap mb-2">
                          {project.stack && project.stack.split(',').map((t, i) => (
                            <span key={t + i} className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-medium">
                              {t.trim()}
                            </span>
                          ))}
                        </div>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">
                            <ExternalLink size={14} /> Visit Site
                          </a>
                        ) : null}
                      </div>
                    ))
                  : null}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
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
