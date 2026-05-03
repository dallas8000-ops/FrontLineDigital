import React, { useEffect, useState } from 'react'
import { Star, GitFork, ExternalLink, Users, BookOpen, Code2, RefreshCw } from 'lucide-react'

const GITHUB_USERNAME = 'dallas8000-ops'
const GITHUB_API = 'https://api.github.com'

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
  company: string
  location: string
  blog: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  fork: boolean
}

const LANG_COLORS: Record<string, string> = {
  Python: 'bg-blue-100 text-blue-700',
  TypeScript: 'bg-blue-200 text-blue-800',
  JavaScript: 'bg-yellow-100 text-yellow-700',
  Shell: 'bg-green-100 text-green-700',
  Dockerfile: 'bg-sky-100 text-sky-700',
  Go: 'bg-cyan-100 text-cyan-700',
  YAML: 'bg-purple-100 text-purple-700',
  HTML: 'bg-orange-100 text-orange-700',
}

export default function Dashboard() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`),
        fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`),
      ])
      if (!userRes.ok) throw new Error('GitHub user not found')
      const userData: GitHubUser = await userRes.json()
      const reposData: GitHubRepo[] = await reposRes.json()
      setUser(userData)
      const excluded = /fsdi|sdgku|cohort/i
      setRepos(reposData.filter((r) => !r.fork && !excluded.test(r.name)))
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load GitHub data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const languages = ['all', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean)))]
  const filtered = filter === 'all' ? repos : repos.filter((r) => r.language === filter)
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">GitHub Activity</h1>
              <p className="text-primary-100">Live data from @{GITHUB_USERNAME}</p>
            </div>
            <button onClick={fetchData} disabled={loading}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
          </div>
        </div>
      </section>

      {loading && (
        <div className="flex justify-center items-center py-32">
          <RefreshCw size={32} className="animate-spin text-primary-600" />
          <span className="ml-3 text-dark-600 text-lg">Loading GitHub data…</span>
        </div>
      )}

      {error && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
          <button onClick={fetchData} className="mt-4 btn btn-primary">Try Again</button>
        </div>
      )}

      {!loading && !error && user && (
        <>
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Card */}
              <div className="card flex-shrink-0 w-full md:w-72 text-center">
                <img src={user.avatar_url} alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-100" />
                <h2 className="text-xl font-bold text-dark-900">{user.name || user.login}</h2>
                <p className="text-primary-600 text-sm mb-3">@{user.login}</p>
                {user.bio && <p className="text-dark-600 text-sm mb-4">{user.bio}</p>}
                {user.location && <p className="text-dark-500 text-xs mb-1">📍 {user.location}</p>}
                {user.company && <p className="text-dark-500 text-xs mb-4">🏢 {user.company}</p>}
                <a href={user.html_url} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary w-full text-sm">
                  <ExternalLink size={14} /> View on GitHub
                </a>
              </div>

              {/* Stats + Filters */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Public Repos', value: user.public_repos, icon: <BookOpen size={20} /> },
                    { label: 'Followers', value: user.followers, icon: <Users size={20} /> },
                    { label: 'Following', value: user.following, icon: <Users size={20} /> },
                    { label: 'Total Stars', value: totalStars, icon: <Star size={20} /> },
                  ].map((stat, i) => (
                    <div key={i} className="card text-center">
                      <div className="text-primary-600 flex justify-center mb-2">{stat.icon}</div>
                      <p className="text-3xl font-bold text-dark-900">{stat.value}</p>
                      <p className="text-dark-500 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button key={lang} onClick={() => setFilter(lang)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        filter === lang ? 'bg-primary-600 text-white' : 'bg-dark-100 text-dark-600 hover:bg-dark-200'}`}>
                      {lang === 'all' ? 'All Languages' : lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Repos Grid */}
          <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
            <h2 className="text-2xl font-bold text-dark-900 mb-6">
              Repositories <span className="text-dark-400 font-normal text-lg">({filtered.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((repo) => (
                <div key={repo.id} className="card flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-dark-900 text-base leading-tight">{repo.name}</h3>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                        className="text-dark-400 hover:text-primary-600 ml-2 flex-shrink-0">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-dark-500 text-sm mb-4 line-clamp-2">
                      {repo.description || 'No description provided.'}
                    </p>
                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {repo.topics.slice(0, 4).map((t) => (
                          <span key={t} className="bg-primary-50 text-primary-700 text-xs px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-dark-500 pt-3 border-t border-dark-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Star size={13} /> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork size={13} /> {repo.forks_count}</span>
                    </div>
                    {repo.language && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${LANG_COLORS[repo.language] ?? 'bg-dark-100 text-dark-600'}`}>
                        <Code2 size={11} /> {repo.language}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-dark-400 py-16">No repositories found for this filter.</p>
            )}
          </section>
        </>
      )}
    </div>
  )
}

                <button className="flex-1 btn btn-outline">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
