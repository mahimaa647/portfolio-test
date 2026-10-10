import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => document.getElementById(l.id))
      const current = sections.find(s => {
        if (!s) return false
        const rect = s.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner container">
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-m">M</span>
          <span className="logo-text">akeshwari</span>
        </div>

        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link${active === link.id ? ' active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/Makeshwari_Resume.pdf"
              download
              className="btn btn-primary nav-resume-btn"
              id="nav-resume-download"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
