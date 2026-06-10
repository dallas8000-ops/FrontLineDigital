import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Activity, Brain, Cloud, Cpu } from 'lucide-react'
import { portfolioLiveUrls } from '../data/portfolioLiveUrls'
import { usePageTitle } from '../utils/usePageTitle'

const LIVE_URL = portfolioLiveUrls.pcCheckerExtreme

const pillars = [
  {
    title: 'Command-center UI',
    icon: <Activity size={22} />,
    body: 'Health matrix index, live telemetry for CPU/RAM/disk load, scan history trends, and subsystem waveform charts — all in a dark diagnostic dashboard built for at-a-glance system status.',
  },
  {
    title: 'Deep Windows diagnostics',
    icon: <Cpu size={22} />,
    body: 'Full system scans orchestrate WMI hardware ID by manufacturer, winget update detection, and Windows Update status. Modular diagnostic modules cover CPU/GPU, storage, network, and BIOS subsystems.',
  },
  {
    title: 'AI-assisted review',
    icon: <Brain size={22} />,
    body: 'Optional OpenAI neural analysis turns raw scan output into prioritized actions and subsystem insights — configurable via API key for operators who want automated triage on top of structured telemetry.',
  },
  {
    title: 'Cloud + local boundary',
    icon: <Cloud size={22} />,
    body: 'The Render-hosted UI serves scan history and the diagnostic command center on Linux. Full WMI/winget hardware scans run on the Windows machine where OS APIs exist — a deliberate split between cloud visibility and local execution.',
  },
]

const architectureRows = [
  ['Django backend', 'Scan orchestration, history archive, health matrix aggregation, and optional OpenAI review endpoints.'],
  ['Diagnostic modules', 'WMI collectors, winget sweep, Windows Update status, and manufacturer-specific hardware ID.'],
  ['Command-center UI', 'Live telemetry, resource load panels, scan archive, and subsystem waveform visualization.'],
  ['Render deployment', 'Cloud-hosted dashboard and scan history; full WMI scans require a local Windows agent.'],
]

const features = [
  'Health matrix index',
  'Live CPU/RAM/disk telemetry',
  'Scan history archive',
  'WMI hardware ID by manufacturer',
  'winget outdated-app detection',
  'Windows Update status',
  'Optional OpenAI neural review',
]

export default function PCChecker() {
  usePageTitle('PC Checker Extreme')

  return (
    <div className="bg-site-grid min-h-full">
      <section className="border-b border-brand-line bg-brand-card/80 py-16 md:py-20">
        <div className="section-inner max-w-6xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-white mb-8 text-sm font-semibold uppercase tracking-wide"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-10 items-start">
            <div>
              <p className="uppercase tracking-[0.25em] text-brand-gold text-xs font-semibold mb-4">
                Diagnostic command center
              </p>
              <h1 className="mb-5 max-w-3xl text-white">PC Checker Extreme</h1>
              <p className="text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
                PC Checker Extreme is a cloud-hosted diagnostic command center — not a simple CRUD demo. It
                combines live system telemetry, structured WMI/winget scans, scan history, and optional AI review
                so operators can monitor health, run full diagnostics, and archive results from a single dashboard.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Python', 'Django', 'WMI', 'winget', 'OpenAI', 'Render'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded text-sm font-medium bg-brand-navy border border-brand-line text-brand-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Visit Live Demo
                </a>
                <Link to="/contact" className="btn btn-outline inline-flex items-center gap-2">
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="card-dark p-3 border-brand-line">
              <img
                src="/images/profile/PC Checker.png"
                alt="PC Checker Extreme diagnostic command center"
                className="w-full rounded-lg object-cover max-h-[22rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-inner max-w-6xl py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card-dark p-6 h-full">
              <div className="flex items-center gap-3 mb-4 text-brand-gold">
                {pillar.icon}
                <h2 className="text-xl font-bold text-white">{pillar.title}</h2>
              </div>
              <p className="text-slate-200 text-base leading-relaxed">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line py-16">
        <div className="section-inner max-w-6xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div className="card-dark p-6">
              <h2 className="text-2xl font-bold text-brand-gold mb-6">Architecture</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-brand-line text-sm text-brand-gold uppercase tracking-wide">
                      <th className="py-3 pr-4">Layer</th>
                      <th className="py-3">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {architectureRows.map(([layer, role]) => (
                      <tr key={layer} className="border-b border-brand-line/60 last:border-b-0 align-top">
                        <td className="py-4 pr-4 font-mono text-sm text-brand-gold">{layer}</td>
                        <td className="py-4 text-slate-200 leading-relaxed">{role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-dark p-6 border-brand-gold/30">
                <h2 className="text-xl font-bold text-brand-gold mb-3">Cloud vs local</h2>
                <p className="text-slate-200 leading-relaxed mb-4">
                  The Render-hosted UI and scan history work from any browser. Full WMI/winget hardware scans
                  require running the diagnostic agent on a Windows PC where WMI, CIM, and registry-backed data
                  are available.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  That boundary is deliberate engineering — cloud visibility for operators, local execution for
                  measurements that only exist on the machine being diagnosed.
                </p>
              </div>

              <div className="card-dark p-6">
                <h2 className="text-xl font-bold text-white mb-4">Diagnostic modules</h2>
                <ul className="space-y-3">
                  {features.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
