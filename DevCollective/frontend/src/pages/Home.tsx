import React from 'react'
import { Shield, FlaskConical, Rocket, Code } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <p className="text-accent-400 font-semibold uppercase tracking-widest text-sm mb-3">Frontline Digital</p>
              <h1 className="mb-6 text-white text-5xl md:text-6xl font-bold leading-tight">
                QA Automation.<br />
                <span className="text-accent-400">Full-Stack.</span><br />
                Production-Ready.
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-lg">
                Python · Django · React · TypeScript · PostgreSQL · GitHub Actions — deployed, tested, and production-hardened by Barney R. Gilliom.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/services" className="btn bg-accent-500 hover:bg-accent-600 text-white">
                  View Services
                </a>
                <a href="/profile" className="btn border-2 border-white text-white hover:bg-white/10">
                  See My Work
                </a>
              </div>
            </div>

            <div className="animate-slideInLeft flex justify-center">
              <div className="relative w-72 h-72">
                <img
                  src="/images/logos/frontline-digital-logo.png"
                  alt="Frontline Digital"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 bg-dark-50">
        <h2 className="text-center mb-4">What I Build & Deliver</h2>
        <p className="text-center text-dark-600 mb-16 max-w-xl mx-auto">
          Every service backed by real production deployments — not academic exercises.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Code size={32} />, title: 'Full-Stack Dev', desc: 'Django REST + React/TypeScript + PostgreSQL + cloud deployment' },
            { icon: <FlaskConical size={32} />, title: 'QA Automation', desc: 'Python unittest, Jest, API validation, regression testing, bug reporting' },
            { icon: <Shield size={32} />, title: 'App Security', desc: 'CSRF, session hardening, RBAC, input validation, auth audits' },
            { icon: <Rocket size={32} />, title: 'DevOps & CI/CD', desc: 'GitHub Actions pipelines, Render deployment, Gunicorn, WhiteNoise' },
          ].map((feature, idx) => (
            <div key={idx} className="card hover:shadow-xl transition-shadow">
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-dark-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Founder */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/images/profile/barney.jpeg"
              alt="Barney Gilliom"
              className="w-full max-w-sm rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <p className="text-accent-600 font-semibold uppercase tracking-widest text-sm mb-2">About Me</p>
            <h2 className="mb-4">Barney R. Gilliom</h2>
            <p className="text-dark-700 text-lg mb-4 leading-relaxed">
              QA Automation Engineer, Python API Developer, and Full-Stack Developer based in Riverview, FL. Open to remote and relocation.
            </p>
            <p className="text-dark-700 mb-4 leading-relaxed">
              My background spans FAA-certified air traffic control, military electronics, federal law enforcement QA, and modern full-stack development. That combination produces a zero-defect standard in every codebase I touch.
            </p>
            <p className="text-dark-600 mb-8 text-sm">
              SDGKU Full Stack Diploma · Azure AI-900 · CompTIA IT Security · TCOLE Master Police Officer · FAA ATC Certified
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/about" className="btn btn-primary">Full Background</a>
              <a href="/services" className="btn btn-outline">Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-12 text-center">
          <h2 className="mb-4">Ready to Build Something Real?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-xl mx-auto">
            Production-grade development, QA, and DevOps — delivered with a zero-defect standard.
          </p>
          <a href="mailto:dallas8000@gmail.com" className="btn bg-accent-500 hover:bg-accent-600 text-white text-lg">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-dark-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="mb-6 text-white">
                Welcome to <br />
                <span className="text-accent-400">Frontline Digital</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Your unified platform for professional dev services, team operations, and connecting with top talent.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn bg-accent-500 hover:bg-accent-600 text-white">
                  Explore Services
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white/10">
                  Join Marketplace
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slideInLeft flex justify-center">
              <div className="relative w-80 h-80">
                <img 
                  src="/images/logos/frontline-digital-logo.png" 
                  alt="Frontline Digital" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-dark-50">
        <h2 className="text-center mb-16">Why Choose Dev Collective?</h2>
        
        <div className="grid-auto">
          {[
            {
              icon: <Zap size={32} />,
              title: 'Fast & Reliable',
              desc: 'Lightning-quick service delivery with enterprise-grade reliability'
            },
            {
              icon: <Users size={32} />,
              title: 'Expert Team',
              desc: 'Connect with vetted developers and build your perfect team'
            },
            {
              icon: <TrendingUp size={32} />,
              title: 'Growth Focus',
              desc: 'Scale your business with tools designed for success'
            },
            {
              icon: <Code size={32} />,
              title: 'Modern Tech',
              desc: 'Built with cutting-edge technologies and best practices'
            },
          ].map((feature, idx) => (
            <div key={idx} className="card card-hover">
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-dark-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl">
        <div className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers and agencies using Dev Collective to streamline their operations.
          </p>
          <button className="btn bg-accent-500 hover:bg-accent-600 text-white text-lg">
            Create Your Account
          </button>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Meet the Founder</h2>
            <p className="text-dark-700 text-lg mb-4">
              <strong>Barney Gilliom</strong> is a QA Automation Engineer and Full Stack Developer with a unique background spanning federal law enforcement, military electronics, and modern software development.
            </p>
            <p className="text-dark-700 mb-6">
              With 30+ years of professional experience and a precision-first mindset honed through mission-critical work, Barney brings enterprise-grade excellence to every project.
            </p>
            <div className="flex gap-4">
              <a href="/about" className="btn btn-primary">Learn More</a>
              <a href="/profile" className="btn btn-outline">View Profile</a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/profile/barney.jpeg" 
              alt="Barney Gilliom" 
              className="w-full max-w-md rounded-2xl shadow-elevation-3"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
