import { useState, useEffect } from 'react'
import { NAV_LINKS } from './data/resume'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import './styles/global.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    NAV_LINKS.forEach((s) => {
      const el = document.getElementById(s.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ParticleBackground />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Mike Ho · Built with React & Vite
      </footer>
    </>
  )
}
