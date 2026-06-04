import React from 'react'
import { getSiteContent } from '../utils/siteContent'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'

export default function Profile() {
  const content = getSiteContent()
  usePageTitle(`Profile & CV — ${content.profileName}`)

  return (
    <div className="bg-site-grid min-h-full">
      <section className="page-hero border-b border-brand-line">
        <div className="section-inner">
          <h1 className="mb-2 text-white">{content.profileName}</h1>
          <p className="text-brand-gold text-lg font-medium">{content.profileTitle}</p>
          <p className="text-brand-muted text-sm mt-2">{content.location}</p>
        </div>
      </section>

      <section className="section-inner max-w-7xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="card-dark p-6 sticky top-24">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-gold/50">
                <img
                  src="/images/profile/Resume.png"
                  alt={content.profileName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-center text-xl mb-1 text-white">{content.profileName}</h2>
              <p className="text-center text-brand-muted text-sm mb-6">{content.location}</p>

              <div className="space-y-3 border-t border-brand-line pt-5">
                <a
                  href="tel:6824604038"
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-gold text-sm"
                >
                  <Phone size={16} /> {content.phone ?? '(682) 460-4038'}
                </a>
                <a
                  href={`mailto:${content.contactEmail}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-gold text-sm"
                >
                  <Mail size={16} /> {content.contactEmail}
                </a>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <MapPin size={16} /> Riverview, FL
                </div>
              </div>

              <a
                href="/images/portfolio/Barney_Gilliom_Resume_v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full mt-6 text-sm text-center block"
              >
                Download Resume PDF
              </a>
              <Link to="/contact" className="btn btn-primary w-full mt-3 text-sm text-center block">
                Hire Me
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Professional Summary</h3>
              <p className="text-slate-200 leading-relaxed">{content.about}</p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {content.skills?.map((group) => (
                  <div key={group.category}>
                    <h4 className="font-semibold mb-2 text-white">{group.category}</h4>
                    <ul className="space-y-1 text-slate-200 text-sm">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-brand-gold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {content.experience?.length > 0 && (
              <div className="card-dark p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-gold">Professional Experience</h3>
                <div className="space-y-6">
                  {content.experience.map((job) => (
                    <div key={job.role + job.period} className="border-b border-brand-line/60 last:border-0 pb-6 last:pb-0">
                      <h4 className="font-bold text-white">{job.role}</h4>
                      <p className="text-brand-gold text-sm font-medium">
                        {job.org} · {job.location}
                      </p>
                      <p className="text-brand-muted text-xs mb-3">{job.period}</p>
                      <ul className="space-y-2">
                        {job.highlights.map((h) => (
                          <li key={h} className="text-slate-200 text-sm flex gap-2 leading-relaxed">
                            <span className="text-brand-gold shrink-0">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">
                Technical Projects — Live Production
              </h3>
              <div className="space-y-6">
                {content.projects?.map((project) => (
                  <div key={project.title} className="border-b border-brand-line/60 last:border-0 pb-6 last:pb-0">
                    <h4 className="font-bold text-white text-lg">{project.title}</h4>
                    <p className="text-brand-gold text-xs font-mono mt-1 mb-2">{project.stack}</p>
                    <p className="text-slate-200 text-sm mb-3 leading-relaxed">{project.desc}</p>
                    {'highlights' in project &&
                      project.highlights?.map((h) => (
                        <p key={h} className="text-brand-muted text-sm mb-1 pl-4 border-l-2 border-brand-gold/40">
                          {h}
                        </p>
                      ))}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <ExternalLink size={14} /> Live Site
                        </a>
                      ) : null}
                      {'detailPath' in project && project.detailPath ? (
                        <Link to={project.detailPath} className="btn btn-outline btn-sm">
                          Details
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {content.certifications?.length > 0 && (
              <div className="card-dark p-6">
                <h3 className="text-xl font-bold mb-4 text-brand-gold">Certifications</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {content.certifications.map((cert) => (
                    <li key={cert} className="text-slate-200 text-sm flex gap-2">
                      <span className="text-brand-gold">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
