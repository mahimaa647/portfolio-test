import { useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    id: 'technical',
    label: 'Technical',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 75, color: '#f89820' },
      { name: 'Python', level: 80, color: '#3776ab' },
      { name: 'C', level: 70, color: '#a8b9cc' },
      { name: 'HTML', level: 90, color: '#e34f26' },
      { name: 'CSS', level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 72, color: '#f7df1e' },
      { name: 'PHP', level: 60, color: '#777bb4' },
      { name: 'MySQL', level: 75, color: '#4479a1' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Teamwork', level: 95, color: '#a78bfa' },
      { name: 'Leadership', level: 85, color: '#f472b6' },
      { name: 'Discipline', level: 90, color: '#2dd4bf' },
      { name: 'Time Management', level: 88, color: '#fb923c' },
      { name: 'Community Engagement', level: 82, color: '#34d399' },
      { name: 'Communication', level: 80, color: '#60a5fa' },
    ],
  },
]

const techStack = [
  { icon: '☕', name: 'Java' },
  { icon: '🐍', name: 'Python' },
  { icon: '🌐', name: 'HTML/CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '🐘', name: 'PHP' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '💻', name: 'C' },
  { icon: '📊', name: 'Data Science' },
]

export default function Skills() {
  const [active, setActive] = useState('technical')
  const cat = skillCategories.find(c => c.id === active)

  return (
    <section className="section skills-section" id="skills">
      <div className="orb" style={{ width: 400, height: 400, background: '#f472b6', top: '0%', right: '-150px', opacity: 0.2 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My <span className="gradient-text">Technical Arsenal</span></h2>
          <p className="section-desc">Technologies and tools I've worked with and continue to grow in</p>
        </div>

        {/* Tech Stack Pills */}
        <div className="tech-stack-row">
          {techStack.map(t => (
            <div key={t.name} className="tech-pill">
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="skill-tabs">
          {skillCategories.map(c => (
            <button
              key={c.id}
              id={`skill-tab-${c.id}`}
              className={`skill-tab${active === c.id ? ' active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="skills-grid">
          {cat.skills.map((skill, i) => (
            <div key={skill.name} className="skill-item" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                    boxShadow: `0 0 12px ${skill.color}66`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
