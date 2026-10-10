import './About.css'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="orb" style={{ width: 400, height: 400, background: '#7c3aed', top: '50%', left: '-200px', opacity: 0.2 }} />

      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate Developer &amp; <span className="gradient-text">Lifelong Learner</span></h2>
          <p className="section-desc">Here's a little bit about who I am and what drives me</p>
        </div>

        <div className="about-inner">
          {/* Left card */}
          <div className="about-card card">
            <div className="about-card-icon">👩‍💻</div>
            <h3 className="about-card-title">Who I Am</h3>
            <p className="about-card-text">
              I'm <strong>Makeshwari S</strong>, a final-year B.Tech Information Technology student at
              K.Ramakrishnan College of Technology, Trichy. I'm passionate about software development
              and always eager to learn new technologies.
            </p>
            <p className="about-card-text">
              My journey in tech started with curiosity and has grown into a genuine love for building
              meaningful digital experiences that solve real problems.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-value">Trichy, Tamil Nadu</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Email</span>
                <span className="info-value">mahimaa647@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">📱 Phone</span>
                <span className="info-value">+91 8825658181</span>
              </div>
              <div className="info-item">
                <span className="info-label">🌐 Languages</span>
                <span className="info-value">Tamil, English</span>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="about-right">
            <div className="card about-edu-card">
              <div className="edu-icon">🎓</div>
              <h3 className="about-card-title">Education</h3>
              <div className="edu-timeline">
                <div className="edu-item">
                  <div className="edu-dot" />
                  <div>
                    <h4 className="edu-degree">B.Tech – Information Technology</h4>
                    <p className="edu-school">K.Ramakrishnan College of Technology, Trichy</p>
                    <div className="edu-meta">
                      <span className="tag">2023 – 2026</span>
                      <span className="tag edu-grade">CGPA: 7.203</span>
                    </div>
                  </div>
                </div>
                <div className="edu-item">
                  <div className="edu-dot" />
                  <div>
                    <h4 className="edu-degree">Higher Secondary (HSC)</h4>
                    <p className="edu-school">Infant Jesus Higher Secondary School, Trichy</p>
                    <div className="edu-meta">
                      <span className="tag">2022 – 2023</span>
                      <span className="tag edu-grade">84%</span>
                    </div>
                  </div>
                </div>
                <div className="edu-item">
                  <div className="edu-dot" />
                  <div>
                    <h4 className="edu-degree">Secondary Education (SSLC)</h4>
                    <p className="edu-school">Infant Jesus Higher Secondary School, Trichy</p>
                    <div className="edu-meta">
                      <span className="tag">2020 – 2021</span>
                      <span className="tag edu-grade">92.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card about-career-card">
              <div className="edu-icon">🎯</div>
              <h3 className="about-card-title">Career Objective</h3>
              <p className="about-card-text">
                B.Tech IT student with a strong interest in software development and emerging technologies.
                Quick learner with hands-on experience in Python, Java, and web development. Seeking
                opportunities to apply technical skills, gain industry experience, and contribute to
                real-world software projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
