import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Example editable fields (expand as needed)
const defaultContent = {
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

export default function AdminPanel() {
  const [content, setContent] = useState(defaultContent);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // For demo: Save to localStorage (replace with API/backend integration for production)
    localStorage.setItem('siteContent', JSON.stringify(content));
    alert('Content saved!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <label className="block mb-4">
        <span className="font-semibold">Profile Name</span>
        <input
          type="text"
          name="profileName"
          value={content.profileName}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>
      <label className="block mb-4">
        <span className="font-semibold">Profile Title</span>
        <input
          type="text"
          name="profileTitle"
          value={content.profileTitle}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>
      <label className="block mb-4">
        <span className="font-semibold">About</span>
        <textarea
          name="about"
          value={content.about}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>
      <label className="block mb-4">
        <span className="font-semibold">Contact Email</span>
        <input
          type="email"
          name="contactEmail"
          value={content.contactEmail}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>
      <label className="block mb-4">
        <span className="font-semibold">Color Scheme</span>
        <select
          name="colorScheme"
          value={content.colorScheme}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
        >
          <option value="blue">Blue (Default)</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="gray">Gray</option>
        </select>
      </label>

      {/* Editable Skills */}
      <div className="mb-6">
        <span className="font-semibold block mb-2">Skills</span>
        {content.skills.map((group, i) => (
          <div key={i} className="mb-2 border p-2 rounded">
            <input
              type="text"
              value={group.category}
              onChange={e => {
                const skills = [...content.skills];
                skills[i].category = e.target.value;
                setContent({ ...content, skills });
              }}
              className="mb-1 block w-full border rounded px-2 py-1 font-semibold"
              placeholder="Category"
            />
            <textarea
              value={group.items.join(', ')}
              onChange={e => {
                const skills = [...content.skills];
                skills[i].items = e.target.value.split(',').map(s => s.trim());
                setContent({ ...content, skills });
              }}
              className="block w-full border rounded px-2 py-1"
              placeholder="Comma-separated skills"
            />
          </div>
        ))}
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setContent({ ...content, skills: [...content.skills, { category: '', items: [] }] })}
        >
          + Add Skill Group
        </button>
      </div>

      {/* Editable Services */}
      <div className="mb-6">
        <span className="font-semibold block mb-2">Services</span>
        {content.services.map((service, i) => (
          <div key={i} className="mb-2 border p-2 rounded">
            <input
              type="text"
              value={service.title}
              onChange={e => {
                const services = [...content.services];
                services[i].title = e.target.value;
                setContent({ ...content, services });
              }}
              className="mb-1 block w-full border rounded px-2 py-1 font-semibold"
              placeholder="Service Title"
            />
            <textarea
              value={service.description}
              onChange={e => {
                const services = [...content.services];
                services[i].description = e.target.value;
                setContent({ ...content, services });
              }}
              className="block w-full border rounded px-2 py-1"
              placeholder="Service Description"
            />
          </div>
        ))}
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setContent({ ...content, services: [...content.services, { title: '', description: '' }] })}
        >
          + Add Service
        </button>
      </div>

      {/* Editable Projects */}
      <div className="mb-6">
        <span className="font-semibold block mb-2">Projects</span>
        {content.projects.map((project, i) => (
          <div key={i} className="mb-2 border p-2 rounded">
            <input
              type="text"
              value={project.title}
              onChange={e => {
                const projects = [...content.projects];
                projects[i].title = e.target.value;
                setContent({ ...content, projects });
              }}
              className="mb-1 block w-full border rounded px-2 py-1 font-semibold"
              placeholder="Project Title"
            />
            <input
              type="text"
              value={project.stack}
              onChange={e => {
                const projects = [...content.projects];
                projects[i].stack = e.target.value;
                setContent({ ...content, projects });
              }}
              className="mb-1 block w-full border rounded px-2 py-1"
              placeholder="Stack (comma separated)"
            />
            <textarea
              value={project.desc}
              onChange={e => {
                const projects = [...content.projects];
                projects[i].desc = e.target.value;
                setContent({ ...content, projects });
              }}
              className="block w-full border rounded px-2 py-1"
              placeholder="Project Description"
            />
            <input
              type="text"
              value={project.url}
              onChange={e => {
                const projects = [...content.projects];
                projects[i].url = e.target.value;
                setContent({ ...content, projects });
              }}
              className="block w-full border rounded px-2 py-1"
              placeholder="Project URL"
            />
          </div>
        ))}
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setContent({ ...content, projects: [...content.projects, { title: '', stack: '', desc: '', url: '' }] })}
        >
          + Add Project
        </button>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Save & Publish
      </button>
    </div>
  );
}
