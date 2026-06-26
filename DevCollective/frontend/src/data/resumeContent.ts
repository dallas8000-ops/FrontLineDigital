export const defaultProfile = {
  profileName: 'Barney R. Gilliom',
  profileTitle:
    'Full-Stack Engineer · I ship audited SaaS with live Stripe, RBAC, and Railway deploys',
  about:
    'Full-Stack Software Engineer and QA Automation Engineer with production experience architecting, building, validating, and deploying thirteen independent real-world applications across e-commerce, REST APIs, system diagnostics, database operations, fintech, and internal tools. QA practice includes user stories with formal acceptance criteria, feature verification checklists, usability testing on live deployments, Python unittest and Jest/Vitest suites, and CI/CD validation on every push to main. Proficient in Python, Django, FastAPI, Flask, React, TypeScript, PostgreSQL, JWT auth, Docker, and GitHub Actions. Precision-first discipline from 25 years of zero-defect federal operations — FAA air traffic control, military electronics, and federal QA — applied to modern software engineering.',
  contactEmail: 'dallas8000@gmail.com',
  phone: '(682) 460-4038',
  location: 'Riverview, FL · U.S. Citizen · Open to Remote & Relocation',
}

export const defaultSkills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'PowerShell', 'Bash'],
  },
  {
    category: 'QA & Testing',
    items: [
      'User stories & acceptance criteria',
      'Feature verification checklists',
      'Live usability testing on production',
      'Python unittest',
      'Jest',
      'Vitest',
      'Testing Library',
      'Playwright E2E',
      'API testing',
      'CI pipeline validation',
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Flask',
      'Node.js',
      'Express.js',
      'SQLAlchemy',
      'Alembic',
      'RESTful design',
      'JWT & session auth',
      'RBAC',
      'WebSockets (Django Channels)',
      'OpenAPI/Swagger',
    ],
  },
  {
    category: 'Frontend & UI/UX',
    items: [
      'React 19',
      'TypeScript',
      'Vite',
      'Framer Motion',
      'Tailwind CSS',
      'Bootstrap 5',
      'CustomTkinter',
      'Responsive design',
      'ARIA accessibility',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQLite', 'Django ORM', 'SQLAlchemy ORM', 'Alembic migrations', 'SQL schema design'],
  },
  {
    category: 'DevOps, CI/CD & Security',
    items: [
      'GitHub Actions',
      'Docker',
      'Docker Compose',
      'Railway',
      'Gunicorn',
      'Uvicorn',
      'CSRF protection',
      'bcrypt',
      'Parameterized SQL',
      'SSL/HTTPS enforcement',
    ],
  },
  {
    category: 'Project & Documentation',
    items: [
      'Agile/Scrum',
      'Terms of Reference',
      'Wireframing',
      'Sprint planning (Trello)',
      'Technical runbooks',
      'MVC/MVT architecture',
    ],
  },
]

export const defaultServices = [
  {
    title: 'Internal tools & ops dashboards',
    description:
      'RBAC, audit trails, whitelisted SQL reporting, and incident workflows — Django or FastAPI backends with React front ends, deployed on Railway with CI.',
  },
  {
    title: 'Subscription & payment platforms',
    description:
      'Live Stripe checkout, webhooks, and plan limits — documented honestly (live vs. sandbox) — plus JWT auth and multi-tenant billing patterns you can demo today.',
  },
  {
    title: 'QA, acceptance criteria & production deploy',
    description:
      'User stories with acceptance criteria, unittest/Jest/Vitest/Playwright coverage, live usability testing, and GitHub Actions gates before Railway release.',
  },
]

export const defaultExperience = [
  {
    role: 'Full-Stack Software Engineer / QA Engineer (Project-Based)',
    org: 'San Diego Global Knowledge University',
    location: 'Tampa, FL',
    period: 'Sept 2025 – May 2026',
    highlights: [
      'Sole developer across thirteen production applications: e-commerce, REST APIs, diagnostics, database ops, fintech, and portfolio platforms.',
      'Formal ToR, user stories, acceptance criteria, wireframes, and usability test reports for each capstone and portfolio project.',
      'GitHub Actions on every repo: lint, test, build, and zero-downtime Railway deployment on push to main.',
    ],
  },
  {
    role: 'Quality Assurance Analyst',
    org: 'Triple Canopy (Federal Contractor)',
    location: 'Kuwait',
    period: '2018',
    highlights: [
      'QA on high-security threat-detection systems at 99.9% accuracy in mission-critical federal environments.',
      'Diagnostics, calibration, validation protocols, and formal technical documentation per regulatory standards.',
    ],
  },
  {
    role: 'Law Enforcement Officer',
    org: 'U.S. Army Military Police · Waco PD · Dallas PD',
    location: 'Texas / Washington',
    period: '1998 – 2015',
    highlights: [
      'Investigative documentation and chain-of-custody under federal and state compliance.',
      'TCOLE Master Police Officer (Texas); Washington State law-enforcement equivalency certificate.',
    ],
  },
  {
    role: 'Air Traffic Controller (FAA-Certified) · Electronics Maintenance',
    org: 'United States Army',
    location: 'U.S. / Overseas',
    period: '1987 – 1999',
    highlights: [
      'Zero-defect operational standards in FAA-certified air traffic control.',
      'Electronics maintenance on communication, radar, and navigation systems; U.S. Army service documented on JST.',
    ],
  },
]

export const defaultEducation = [
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
    note: 'IT Security · CompTIA · Networking · Systems Administration',
  },
  {
    title: 'Associate of Arts — Business Administration',
    org: 'American InterContinental University',
    period: '2007 – 2008',
    note: '',
  },
  {
    title: 'Associate of Arts — Legal Assistant / Paralegal',
    org: 'Northwest Mississippi Community College',
    period: '1980 – 1982',
    note: '',
  },
]

export const defaultCertifications = [
  'TCOLE Master Police Officer (Texas)',
  'Washington State Law Enforcement Equivalency Certificate',
  'FAA Air Traffic Controller Certification',
  'FAA Helicopter Communication Systems/Repair',
  'U.S. Army — Joint Services Transcript (JST) on file',
  'AI-900: Microsoft Azure AI Fundamentals',
  'IT Security (CompTIA)',
  'Immersive Full Stack Software Development (SDGKU)',
]
