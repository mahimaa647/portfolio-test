import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoLink = `mailto:mahimaa647@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="orb" style={{ width: 400, height: 400, background: '#7c3aed', bottom: '-100px', right: '-100px', opacity: 0.2 }} />
      <div className="orb" style={{ width: 300, height: 300, background: '#2dd4bf', top: '10%', left: '-80px', opacity: 0.15 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-desc">Have an opportunity, a project idea, or just want to say hi? I'd love to hear from you!</p>
        </div>

        <div className="contact-inner">
          {/* Info Side */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3 className="info-title">Get In Touch</h3>
              <p className="info-subtitle">
                I'm currently open to internships, collaborative projects, and new learning opportunities.
                Feel free to reach out anytime!
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:mahimaa647@gmail.com" className="contact-link-item" id="contact-email-link">
                <div className="cli-icon email-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="cli-text">
                  <span className="cli-label">Email</span>
                  <span className="cli-value">mahimaa647@gmail.com</span>
                </div>
                <span className="cli-arrow">→</span>
              </a>

              <a href="tel:+918825658181" className="contact-link-item" id="contact-phone-link">
                <div className="cli-icon phone-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="cli-text">
                  <span className="cli-label">Phone</span>
                  <span className="cli-value">+91 8825658181</span>
                </div>
                <span className="cli-arrow">→</span>
              </a>

              <a href="https://linkedin.com/in/makeshwari-sampath" target="_blank" rel="noreferrer" className="contact-link-item" id="contact-linkedin-link">
                <div className="cli-icon linkedin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="cli-text">
                  <span className="cli-label">LinkedIn</span>
                  <span className="cli-value">makeshwari-sampath</span>
                </div>
                <span className="cli-arrow">→</span>
              </a>

              <a href="https://github.com/mahimaa647" target="_blank" rel="noreferrer" className="contact-link-item" id="contact-github-link">
                <div className="cli-icon github-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <div className="cli-text">
                  <span className="cli-label">GitHub</span>
                  <span className="cli-value">mahimaa647</span>
                </div>
                <span className="cli-arrow">→</span>
              </a>

              <div className="contact-link-item location-item">
                <div className="cli-icon location-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="cli-text">
                  <span className="cli-label">Location</span>
                  <span className="cli-value">Trichy, Tamil Nadu – 621112</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form card" onSubmit={handleSubmit} id="contact-form">
            <h3 className="form-title">Send a Message</h3>

            {sent && (
              <div className="form-success">
                ✅ Opening your email client... Thank you for reaching out!
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Internship Opportunity / Collaboration"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit" id="contact-submit">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
