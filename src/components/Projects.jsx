import { PROJECTS } from '../data/resume'
import Carousel from './Carousel'
import '../styles/components/projects.css'

// Add screenshots here using static imports — Vite resolves these correctly at build time
import vcc1 from '../assets/vcc/1.png'
import vcc2 from '../assets/vcc/2.png'
import vcc3 from '../assets/vcc/3.png'
import vcc4 from '../assets/vcc/4.png'

import bfc1 from '../assets/bfc/1.jpg'

import b0 from '../assets/fyp/0.png'
import b1 from '../assets/fyp/1.png'
import b2 from '../assets/fyp/2.png'
import b3 from '../assets/fyp/3.png'
import b4 from '../assets/fyp/4.png'
import b5 from '../assets/fyp/5.png'

import pp1 from '../assets/primeplus/1.jpg'

import ss404 from '../assets/ss404.jpg'

const SCREENSHOTS = {
  'Prime Plus': [pp1],
  'Best Fuel Club': [bfc1],
  'Fleet Fuel Management System': [vcc1, vcc2, vcc3, vcc4],
  'Core Banking Omnichannel': [ss404],
  'eBilling System': [ss404],
  'Billing System': [b0, b1, b2, b3, b4, b5],
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">A collection of projects I’ve built, shipped, and maintained.</p>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <Carousel screenshots={SCREENSHOTS[p.title] ?? []} title={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
