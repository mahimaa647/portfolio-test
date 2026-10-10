import './Projects.css'

const projects = [
  {
    id: 'pet-health',
    emoji: '🐾',
    title: 'Pet Health Care & Adoption System',
    year: '2026',
    description:
      'A comprehensive web-based system to help users view pets available for adoption and access basic pet health-care information. Features user-friendly pages with login, pet details, adoption and health-care sections.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    highlights: [
      'User-friendly UI for pet adoption browsing',
      'Login & authentication system',
      'Pet details and adoption workflow',
      'Health-care information module',
      'Backend powered by PHP & MySQL',
    ],
    color: '#a78bfa',
    featured: true,
  },
  {
    id: 'traffic-monitoring',
    emoji: '🚦',
    title: 'Traffic Monitoring System',
    year: '2026',
    description:
      'A Python-based Traffic Monitoring System to monitor traffic conditions with vehicle detection and vehicle counting capabilities. Helps collect traffic-related information and understand vehicle movement patterns.',
    techStack: ['Python', 'Computer Vision', 'OpenCV'],
    highlights: [
      'Real-time vehicle detection',
      'Vehicle counting algorithm',
      'Traffic pattern analysis',
      'Data collection & reporting',
      'Python-based implementation',
    ],
    color: '#2dd4bf',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="orb" style={{ width: 450, height: 450, background: '#7c3aed', bottom: '0', left: '-150px', opacity: 0.2 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've <span className="gradient-text">Built</span></h2>
          <p className="section-desc">Real-world projects that demonstrate my skills and problem-solving mindset</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.id} className="project-card card" id={`project-${project.id}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="project-top">
                <div className="project-emoji-wrap" style={{ background: `${project.color}22`, borderColor: `${project.color}44` }}>
                  <span className="project-emoji">{project.emoji}</span>
                </div>
                {project.featured && (
                  <span className="featured-badge">⭐ Featured</span>
                )}
              </div>

              <div className="project-meta">
                <span className="project-year">{project.year}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map(h => (
                  <li key={h}>
                    <span className="highlight-dot" style={{ background: project.color }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {project.techStack.map(t => (
                  <span key={t} className="tag" style={{ borderColor: `${project.color}33`, color: project.color, background: `${project.color}11` }}>{t}</span>
                ))}
              </div>

              <div className="project-line" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
