import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MonitorSmartphone, ShieldCheck, Database, Workflow } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

const pillars = [
  {
    title: 'Real desktop client',
    icon: <MonitorSmartphone size={22} />,
    body: 'CustomTkinter multi-tab GUI with separate live vs diagnostic refresh timers, UAC-aware relaunch for administrator context, optional system tray support, SQLite-backed metric samples, persisted settings, and live CPU/RAM history charts rendered with Matplotlib.',
  },
  {
    title: 'Deep OS integration',
    icon: <ShieldCheck size={22} />,
    body: 'Collectors lean on PowerShell, WMI/CIM, Event Log patterns, Defender and Windows Update catalogs, winget metadata, registry-backed disk hints, hardware identity classes, and reliability-style counters where available. Checks are modular and structured instead of shelling out ad hoc commands.',
  },
  {
    title: 'One brain, many faces',
    icon: <Workflow size={22} />,
    body: 'A thread-safe SharedState snapshot powers the desktop GUI, the FastAPI local API, the --web dashboard, insights, exports, and optional webhook payloads so every surface reads from the same system model instead of duplicating logic.',
  },
  {
    title: 'Operational history',
    icon: <Database size={22} />,
    body: 'Background services can persist metric samples to SQLite, feed charts, schedule exports, and support ongoing diagnostic visibility without turning the app into a fragile one-shot script.',
  },
]

const architectureRows = [
  ['pc_checker/state.py', 'Thread-safe SharedState for live samples, history, findings, updates, disk hints, and export snapshots.'],
  ['pc_checker/gui/', 'CustomTkinter desktop application, tabs, scheduling, and chart rendering.'],
  ['pc_checker/api/server.py', 'FastAPI JSON surface with OpenAPI docs and the local static dashboard.'],
  ['pc_checker/checks/', 'Modular Windows diagnostics checks split by responsibility.'],
  ['pc_checker/diagnostics_collect.py', 'Full diagnostic orchestration pipeline feeding shared state.'],
  ['pc_checker/background_services.py', 'Tray support, alerts, webhook/export jobs, and metrics database writers.'],
  ['pc_checker/web/public/', 'Vanilla web dashboard backed by the same local snapshot shape.'],
]

const exports = ['JSON snapshots', 'HTML reports', 'PDF exports', 'Webhook payloads', 'Shared dashboard snapshots']

export default function PCChecker() {
  usePageTitle('PC Checker')

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
                Windows diagnostics utility
              </p>
              <h1 className="mb-5 max-w-3xl text-white">PC Checker</h1>
              <p className="text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
                PC Checker is a Windows-first diagnostic desktop app, not a cloud CRUD demo. It combines a
                shipped-style CustomTkinter client, a local FastAPI surface, structured system checks, and persistent
                metric history so the same machine can be inspected through a desktop workflow, a browser dashboard, or
                exported reports.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Python', 'CustomTkinter', 'FastAPI', 'SQLite', 'Matplotlib', 'PowerShell', 'WMI'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded text-sm font-medium bg-brand-navy border border-brand-line text-brand-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                  Request a Demo
                </Link>
                <button
                  type="button"
                  disabled
                  className="btn border border-brand-line text-slate-400 bg-brand-navy/50 cursor-not-allowed"
                >
                  Hosted App Not Available
                </button>
              </div>
            </div>
            <div className="card-dark p-3 border-brand-line">
              <img
                src="/images/profile/PC Checker.png"
                alt="PC Checker desktop application"
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
                <h2 className="text-xl font-bold text-brand-gold mb-3">Tradeoffs</h2>
                <p className="text-slate-200 leading-relaxed mb-4">
                  The measurements and remediation triggers belong on the Windows machine. Signature checks, Windows
                  Update scans, event log parsing, hardware identity, and full diagnostics are intentionally executed
                  locally where WMI, CIM, and registry-backed data actually exist.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Any optional cloud mirror is a read-only viewer of pushed JSON snapshots, not a second implementation
                  of Windows diagnostics on Linux. That boundary is deliberate engineering judgment, not a missing
                  feature.
                </p>
              </div>

              <div className="card-dark p-6">
                <h2 className="text-xl font-bold text-white mb-4">Exports and integrations</h2>
                <ul className="space-y-3">
                  {exports.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark p-6">
                <h2 className="text-xl font-bold text-white mb-4">Private-use note</h2>
                <p className="text-slate-200 leading-relaxed mb-4">
                  PC Checker is personal software by its author and is not positioned as resale or redistribution
                  software. The app and API expose ownership and boundary messaging clearly, and the tool stays
                  read-only with hints and reports rather than automatically moving, deleting, or repairing files.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  It is not a replacement for full malware scans, SMART or burn-in testing, or vendor support
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
