import React from 'react'
import {
  defaultCertifications,
  defaultEducation,
  defaultExperience,
  defaultProfile,
  defaultSkills,
  resumeProjectTitles,
} from '../data/resumeContent'
import { defaultPortfolioProjects } from '../data/portfolioProjects'

const selectedProjects = resumeProjectTitles
  .map((title) => defaultPortfolioProjects.find((project) => project.title === title))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))

export default function ResumePrint() {
  return (
    <article className="resume-print-document">
      <header className="resume-print-header">
        <h1>{defaultProfile.profileName}</h1>
        <p className="resume-print-title">{defaultProfile.profileTitle}</p>
        <p>
          {defaultProfile.phone} · {defaultProfile.contactEmail} · {defaultProfile.location}
        </p>
        <p>
          {defaultProfile.workAuthorization} · {defaultProfile.remoteAvailability}
        </p>
        <p>github.com/dallas8000-ops · gilliomfrontlinedigital.com</p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{defaultProfile.about}</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="resume-print-skills">
          {defaultSkills.map((group) => (
            <p key={group.category}>
              <strong>{group.category}:</strong> {group.items.join(', ')}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2>Selected Production Systems</h2>
        {selectedProjects.map((project) => (
          <div className="resume-print-entry" key={project.title}>
            <h3>{project.title}</h3>
            <p className="resume-print-meta">{project.stack}</p>
            <p>{project.proves}</p>
            <ul>
              {project.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Professional Experience</h2>
        {defaultExperience.map((job) => (
          <div className="resume-print-entry" key={`${job.role}-${job.period}`}>
            <h3>{job.role}</h3>
            <p className="resume-print-meta">
              {job.org} · {job.location} · {job.period}
            </p>
            <ul>
              {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {defaultEducation.map((education) => (
          <div className="resume-print-entry" key={`${education.title}-${education.period}`}>
            <h3>{education.title}</h3>
            <p className="resume-print-meta">
              {education.org} · {education.period}
            </p>
            {education.note && <p>{education.note}</p>}
          </div>
        ))}
      </section>

      <section>
        <h2>Certifications</h2>
        <p>{defaultCertifications.join(' · ')}</p>
      </section>
    </article>
  )
}