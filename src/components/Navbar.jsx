import { useState } from 'react'
import { NAV_LINKS } from '../data/resume'
import '../styles/components/navbar.css'

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <span className="nav-logo" onClick={() => scrollTo('about')}>MH</span>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((s) => (
          <li key={s}>
            <button
              className={activeSection === s.toLowerCase() ? 'active' : ''}
              onClick={() => scrollTo(s.toLowerCase())}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
