import meImg from '../assets/me.jpg'
import '../styles/components/hero.css'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Available for opportunities</div>
        <h1>Mike Ho <span className="accent">Zhen Hong</span></h1>
        <h2>Full Stack Software Engineer</h2>
        <p className="hero-desc">
          Full-stack engineer focused on building scalable web and mobile products with Ruby on Rails, React Native, and Java.
          I work across DevOps, CI/CD, and third-party integrations, taking features from idea to production.
          <br/>
          <br/>
          Based in Singapore 🇸🇬 · AWS Certified Developer
        </p>
        <div className="hero-links">
          <a href="mailto:z.mike0411@gmail.com" className="btn-primary">Get in Touch</a>
          <a href="https://github.com/mh0411" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
          <a href="https://linkedin.com/in/mh0411" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
        </div>
      </div>
      <div className="hero-avatar">
        <img src={meImg} alt="Mike Ho" />
      </div>
    </section>
  )
}
