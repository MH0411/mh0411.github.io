import '../styles/components/certifications.css'

const CERTS = [
  {
    id: 'fbe0d579-6e2e-4421-8966-21e53741b0f9',
    title: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    period: 'Aug 2026 – Aug 2029',
    image: 'https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
  },
  {
    id: 'efea8fd6-516e-4fac-a3ea-60c975031a0f',
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    period: 'Dec 2023 – Aug 2029',
    image: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {CERTS.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <a
              href={`https://www.credly.com/badges/${cert.id}/public_url`}
              target="_blank"
              rel="noreferrer"
              className="cert-badge-link"
            >
              <img
                src={cert.image}
                alt={cert.title}
                width={150}
                height={150}
                loading="lazy"
                className="cert-badge-img"
              />
            </a>
            <div className="cert-info">
              <span className="cert-issuer">{cert.title}</span>
              <span className="cert-period">{cert.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}