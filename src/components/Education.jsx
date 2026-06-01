import { EDUCATION } from '../data/resume'
import '../styles/components/experience.css'

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {EDUCATION.map((edu) => (
          <div className="timeline-item" key={edu.school}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <span className="company">{edu.school}</span>
                </div>
                <span className="period">{edu.period}</span>
              </div>
              <ul>
                {edu.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
