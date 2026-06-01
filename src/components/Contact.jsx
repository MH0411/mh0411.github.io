import { CONTACT } from '../data/resume'
import '../styles/components/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <h2 className="section-title">Contact</h2>
      <p className="section-sub">Let's build something great together.</p>
      <div className="contact-links">
        {CONTACT.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="contact-item"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span>{icon}</span> {label}
          </a>
        ))}
      </div>
    </section>
  )
}
