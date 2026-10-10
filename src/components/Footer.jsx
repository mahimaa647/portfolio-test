import './Footer.css'

export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="orb" style={{ width: 300, height: 300, background: '#7c3aed', top: '-100px', left: '-80px', opacity: 0.15 }} />
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-m">M</span>
                <span>akeshwari S</span>
              </div>
              <p className="footer-tagline">
                B.Tech IT Student & Developer<br />
                Building solutions, one line at a time.
              </p>
              <a href="/Makeshwari_Resume.pdf" download className="btn btn-primary footer-resume-btn" id="footer-resume-download">
                Download Resume ↓
              </a>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-links">
                {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map(id => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)} className="footer-link" id={`footer-link-${id}`}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Connect</h4>
              <ul className="footer-links">
                <li><a href="https://linkedin.com/in/makeshwari-sampath" target="_blank" rel="noreferrer" className="footer-link" id="footer-linkedin">LinkedIn</a></li>
                <li><a href="https://github.com/mahimaa647" target="_blank" rel="noreferrer" className="footer-link" id="footer-github">GitHub</a></li>
                <li><a href="mailto:mahimaa647@gmail.com" className="footer-link" id="footer-email">Email</a></li>
                <li><a href="tel:+918825658181" className="footer-link" id="footer-phone">+91 8825658181</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span className="gradient-text">Makeshwari S</span>. Crafted with ❤️ and lots of ☕
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/makeshwari-sampath" target="_blank" rel="noreferrer" className="social-link" id="footer-social-linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/mahimaa647" target="_blank" rel="noreferrer" className="social-link" id="footer-social-github" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
