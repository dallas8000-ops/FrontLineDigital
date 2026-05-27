// Utility to get editable site content from localStorage (or fallback to defaults)
export const getSiteContent = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('siteContent');
    if (stored) return JSON.parse(stored);
  }
  // Fallback defaults (should match AdminPanel)
  return {
    profileName: 'Barney R. Gilliom',
    profileTitle: 'QA Automation Engineer, Python API Developer, and Full-Stack Developer',
    about: 'My background spans FAA-certified air traffic control, military electronics, federal law enforcement QA, and modern full-stack development. That combination produces a zero-defect standard in every codebase I touch.',
    contactEmail: 'dallas8000@gmail.com',
    colorScheme: 'blue',
    skills: [
      { category: 'Languages', items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Bash'] },
      { category: 'Testing & QA', items: ['Python unittest', 'Jest', 'API Testing', 'Manual Testing'] },
    ],
    services: [
      { title: 'Full-Stack Dev', description: 'Django REST + React/TypeScript + PostgreSQL + cloud deployment' },
      { title: 'QA Automation', description: 'Python unittest, Jest, API validation, regression testing, bug reporting' },
    ],
    projects: [
      { title: 'Kristie Store', stack: 'Python, Django, React', desc: 'Live fashion ecommerce shipping from Kampala worldwide.', url: 'https://kristie-store.onrender.com' },
      { title: 'Django REST Blog API', stack: 'Python, Django REST, PostgreSQL', desc: 'Production blog and portfolio site deployed on Render.', url: 'https://blog-2-hggg.onrender.com' },
    ],
  };
};
