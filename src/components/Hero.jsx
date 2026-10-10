import { useEffect, useRef } from 'react'
import './Hero.css'

const roles = ['IT Student', 'Web Developer', 'Python Enthusiast', 'Problem Solver']

export default function Hero() {
  const roleRef = useRef(null)
  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const current = roles[roleIndex.current]
      const el = roleRef.current
      if (!el) return

      if (!deleting.current) {
        el.textContent = current.slice(0, charIndex.current + 1)
        charIndex.current++
        if (charIndex.current === current.length) {
          deleting.current = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIndex.current - 1)
        charIndex.current--
        if (charIndex.current === 0) {
          deleting.current = false
          roleIndex.current = (roleIndex.current + 1) % roles.length
        }
      }
      timeout = setTimeout(type, deleting.current ? 60 : 100)
    }

    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero-section" id="home">
      {/* Background Orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: '#7c3aed', top: '-100px', left: '-150px', animationDelay: '0s' }} />
      <div className="orb" style={{ width: 400, height: 400, background: '#f472b6', bottom: '-80px', right: '-100px', animationDelay: '3s' }} />
      <div className="orb" style={{ width: 300, height: 300, background: '#2dd4bf', top: '40%', right: '20%', animationDelay: '1.5s', opacity: 0.2 }} />

      {/* Grid background */}
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-inner">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Makeshwari S</span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="hero-role-prefix">I'm a </span>
              <span className="hero-role" ref={roleRef} />
              <span className="cursor-blink">|</span>
            </div>

            <p className="hero-desc">
              B.Tech Information Technology student at K.Ramakrishnan College of Technology, Trichy.
              Passionate about building impactful web solutions and exploring emerging technologies.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">4+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">7.2</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-view-work" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/Makeshwari_Resume.pdf" download className="btn btn-outline" id="hero-resume-download">
                Download Resume
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://linkedin.com/in/makeshwari-sampath" target="_blank" rel="noreferrer" className="social-link" id="social-linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/mahimaa647" target="_blank" rel="noreferrer" className="social-link" id="social-github" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="mailto:mahimaa647@gmail.com" className="social-link" id="social-email" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="hero-image-wrapper">
            <div className="profile-ring ring-1" />
            <div className="profile-ring ring-2" />
            <div className="profile-container">
              <img
                src="/profile.jpg"
                alt="Makeshwari S - IT Student"
                className="profile-img"
                id="hero-profile-img"
              />
              <div className="profile-overlay" />
            </div>
            <div className="floating-badge badge-java">
              <span>☕</span> Java
            </div>
            <div className="floating-badge badge-python">
              <span>🐍</span> Python
            </div>
            <div className="floating-badge badge-web">
              <span>🌐</span> Web Dev
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  )
}
