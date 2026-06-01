import { EXPERIENCES } from '../data/resume'
import '../styles/components/experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {EXPERIENCES.map((exp) => (
          <div className="timeline-item" key={exp.company}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <ul>
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
