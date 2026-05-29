import React from 'react'
import { getSiteContent } from '../utils/siteContent'
import { Mail, Phone, MapPin, ExternalLink, Code2 } from 'lucide-react'
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
