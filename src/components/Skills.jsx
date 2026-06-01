import { SKILLS } from '../data/resume'
import '../styles/components/skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div className="skill-group" key={group.label}>
            <h4>{group.label}</h4>
            <div className="tags">
              {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="badges">
        <div className="cert-badge">🏅 AWS Certified Developer – Associate (Dec 2023 – Dec 2026)</div>
        <div className="cert-badge">🎓 Bachelor of Computer Science (Software Development) with Honors · UTeM (2013 – 2017)</div>
      </div>
    </section>
  )
}
