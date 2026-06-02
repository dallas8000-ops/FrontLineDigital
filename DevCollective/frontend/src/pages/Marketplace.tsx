import React, { useState } from 'react'
import { Search, Star, MapPin } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function Marketplace() {
  usePageTitle('Developer Marketplace')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const developers = [
    {
      id: 1,
      name: 'Barney R. Gilliom',
      title: 'Full-Stack Software Engineer · QA Automation · Python & APIs',
      location: 'Riverview, FL — Open to Remote & Relocation',
      rating: 5,
      reviews: 6,
      skills: ['Python', 'Django', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Jest', 'Vitest', 'Docker'],
      hourlyRate: 'Open to Offers',
      image: '/images/profile/barney.jpeg',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 text-white py-16">
        <div className="section">
          <h1 className="mb-2">Developer Marketplace</h1>
          <p className="text-primary-100">Find and hire top developers</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section">
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400" size={20} />
            <input
              type="text"
              placeholder="Search developers by name or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex gap-3 flex-wrap">
            {['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat.toLowerCase())}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filterCategory === cat.toLowerCase() || (filterCategory === 'all' && cat === 'All')
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-200 text-dark-700 hover:bg-dark-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Developer Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {developers.map((dev) => (
            <div key={dev.id} className="card card-hover">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500 flex-shrink-0">
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%230ea5e9" width="64" height="64"/%3E%3Ctext x="50%25" y="50%25" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold"%3E' + dev.name.charAt(0) + '%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{dev.name}</h3>
                  <p className="text-dark-600">{dev.title}</p>
                  <div className="flex items-center gap-2 text-sm text-dark-500 mt-1">
                    <MapPin size={14} />
                    {dev.location}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-dark-200">
                <div className="flex gap-1">
                  {/* eslint-disable react/no-array-index-key */}
                  {new Array(5).fill(null).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(dev.rating) ? 'fill-accent-500 text-accent-500' : 'text-dark-300'}
                    />
                  ))}
                  {/* eslint-enable react/no-array-index-key */}
                </div>
                <span className="font-bold">{dev.rating}</span>
                <span className="text-dark-600 text-sm">({dev.reviews} reviews)</span>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex gap-2 flex-wrap">
                  {dev.skills.map((skill) => (
                    <span key={skill} className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-dark-200">
                <p className="font-bold text-primary-600">{dev.hourlyRate}</p>
                <div className="flex gap-2">
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-primary">Hire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-accent-500 to-orange-600 text-white rounded-2xl">
        <div className="text-center">
          <h2 className="mb-4">Available for Your Next Project</h2>
          <p className="text-xl mb-8 text-white/90">
            Independent full-stack developer available for national and international engagements — remote or on-site. Open to relocation.
          </p>
          <a href="/profile" className="btn bg-dark-900 hover:bg-dark-800 text-white">
            View My Work
          </a>
        </div>
      </section>
    </div>
  )
}
