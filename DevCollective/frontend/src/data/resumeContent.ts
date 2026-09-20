export const defaultProfile = {
  profileName: 'Barney R. Gilliom',
  profileTitle: 'Full-Stack Software Engineer',
  about:
    'Full-stack software engineer building production systems with Python, TypeScript, React, Django, FastAPI, and PostgreSQL. Independently delivers secure operations platforms from requirements through Railway deployment, including JWT/RBAC authorization, encrypted secrets, Stripe billing, audit trails, offline workflows, automated tests, and CI gates. Current flagship work demonstrates SaaS operations automation, governed database access, and jurisdiction-aware fleet compliance. Brings 25 years of precision-driven federal operations, military electronics, and QA experience to software that must remain dependable under real operating conditions.',
  contactEmail: 'dallas8000@gmail.com',
  phone: '(656) 245-5253',
  location: 'Wimauma, FL 33598 · Serving clients remotely worldwide',
  workAuthorization: 'U.S. citizen',
  remoteAvailability: 'Available for U.S. remote work',
}

export const resumeProjectTitles = [
  'AI Software Operations Studio',
  'DBOps Control Center',
  'RigHand AI',
] as const

export const defaultSkills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL', 'PowerShell', 'Bash'],
  },
  {
    category: 'QA & Testing',
    items: [
      'Acceptance-criteria verification',
      'Regression testing',
      'Python unittest',
      'Jest',
      'Vitest',
      'Testing Library',
      'Playwright E2E',
      'API/E2E testing',
      'CI pipeline validation',
      'Bug reporting',
      'Test case design',
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
      'Celery',
      'Django Channels',
      'WebSockets',
      'SQLAlchemy',
      'Alembic',
      'RESTful design',
      'JWT & session auth',
      'RBAC',
      'OpenAPI/Swagger',
    ],
  },
  {
    category: 'Frontend & UI/UX',
    items: [
      'React 18/19',
      'TypeScript',
      'Vite',
      'Framer Motion',
      'Bootstrap 5',
      'Tailwind CSS',
      'Zustand',
      'React Router',
      'HTML5/CSS3',
      'Responsive design',
      'ARIA accessibility',
    ],
  },
  {
    category: 'Mobile',
    items: ['Android (Java)', 'Android (Kotlin, Jetpack Compose)', 'Capacitor (hybrid/offline-first)'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQLite', 'Redis', 'Django ORM', 'SQLAlchemy ORM', 'Alembic migrations', 'Schema design'],
  },
  {
    category: 'Security',
    items: [
      'AES-256-GCM encryption',
      'Encrypted secret vaults',
      'CSRF protection',
      'JWT/session auth',
      'bcrypt',
      'RBAC',
      'Input validation',
      'Parameterized SQL',
      'SSL/HTTPS enforcement',
      'SHA-256 integrity hashing',
    ],
  },
  {
    category: 'DevOps / CI-CD',
    items: ['Git', 'GitHub Actions', 'Docker', 'Docker Compose', 'Railway', 'Render', 'Fly.io', 'Gunicorn', 'Uvicorn', 'Terraform', 'Linux/Ubuntu CLI'],
  },
  {
    category: 'Payments & AI',
    items: ['Stripe API', 'Stripe Checkout', 'Webhook handling', 'Subscription billing', 'LLM copilot integration', 'MCP server tooling'],
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
    role: 'Full-Stack Software Developer (Independent / Contract)',
    org: 'Self-Directed Portfolio',
    location: 'Remote · Wimauma, FL',
    period: 'Sept 2025 – Present',
    highlights: [
      'Built and deployed production applications across SaaS operations, database governance, fintech, logistics, regulatory compliance, and AI tooling on a hardened foundation for auth, RBAC, billing, and CI/CD.',
      'Full SDLC ownership as sole developer: terms of reference, user stories with acceptance criteria, wireframes, usability reports, implementation, and deployment.',
      'Applied Python unittest and Jest/Vitest/Playwright suites to API endpoints, auth logic, UI components, and E2E flows; used GitHub Actions to gate lint, test, build, and deployment on each push to main.',
      'Delivered e-commerce, database operations, market-entry intelligence, offline-first mobile, and AI-assisted systems for East African and EU use cases.',
      'Built native Android applications in Java and Kotlin/Jetpack Compose alongside Capacitor-based hybrid apps for offline-first mobile products.',
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
    period: 'Diploma conferred May 2026',
    note: 'Coursework completed 2025–2026. Python · React · TypeScript · Node.js · PostgreSQL · GitHub Actions · Agile/Scrum',
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
  'AI-900: Microsoft Azure AI Fundamentals',
  'IT Security (CompTIA)',
  'FAA Air Traffic Controller Certification',
  'FAA Helicopter Communication Systems/Repair',
  'TCOLE Master Police Officer',
  'Immersive Full Stack Software Development (SDGKU)',
]
