import './Certifications.css'

const certifications = [
  {
    id: 'nptel-soft',
    title: 'Soft Skill Development',
    issuer: 'NPTEL',
    year: '2025',
    grade: '56%',
    icon: '🏆',
    color: '#f59e0b',
    desc: 'Completed NPTEL certification course on Soft Skill Development covering communication, teamwork, and professional development.',
  },
  {
    id: 'python-simplilearn',
    title: 'Python For Data Science',
    issuer: 'Simplilearn',
    year: '2026',
    icon: '🐍',
    color: '#3776ab',
    desc: 'Comprehensive Python programming for data science including data manipulation, analysis, and visualization fundamentals.',
  },
  {
    id: 'ds-simplilearn',
    title: 'Fundamentals of Data Science',
    issuer: 'Simplilearn',
    year: '2026',
    icon: '📊',
    color: '#a78bfa',
    desc: 'Foundational concepts in data science including statistical analysis, machine learning basics, and data-driven decision making.',
  },
  {
    id: 'sql-simplilearn',
    title: 'SQL Certification Course',
    issuer: 'Simplilearn',
    year: '2025',
    icon: '🗄️',
    color: '#2dd4bf',
    desc: 'Complete SQL course covering database design, queries, joins, stored procedures, and database management fundamentals.',
  },
]

const achievements = [
  { icon: '🚀', title: 'Smart India Hackathon', desc: 'Participated in Smart India Hackathon activities, showcasing innovative solutions for national-level challenges.' },
  { icon: '💡', title: 'MSME Hackathon', desc: 'Participated in MSME hackathon, developing creative tech solutions for small and medium enterprises.' },
]

export default function Certifications() {
  return (
    <section className="section certs-section" id="certifications">
      <div className="orb" style={{ width: 350, height: 350, background: '#f472b6', top: '20%', right: '-120px', opacity: 0.2 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials &amp; <span className="gradient-text">Achievements</span></h2>
          <p className="section-desc">Continuous learning through certifications and real-world competitions</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div key={cert.id} className="cert-card card" id={`cert-${cert.id}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="cert-icon-wrap" style={{ background: `${cert.color}18`, borderColor: `${cert.color}33` }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-body">
                <div className="cert-meta">
                  <span className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.desc}</p>
                {cert.grade && (
                  <div className="cert-grade">
                    <span className="grade-label">Score:</span>
                    <span className="grade-value" style={{ color: cert.color }}>{cert.grade}</span>
                  </div>
                )}
              </div>
              <div className="cert-accent" style={{ background: cert.color }} />
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h3 className="achievements-title">🏅 Extra-Curricular &amp; Achievements</h3>
          <div className="achievements-grid">
            {achievements.map(a => (
              <div key={a.title} className="achievement-card card">
                <div className="ach-icon">{a.icon}</div>
                <div>
                  <h4 className="ach-title">{a.title}</h4>
                  <p className="ach-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
