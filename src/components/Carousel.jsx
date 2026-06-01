import { useState } from 'react'
import '../styles/components/carousel.css'

export default function Carousel({ screenshots, title }) {
  const [index, setIndex] = useState(0)

  if (!screenshots?.length) {
    return (
      <div className="screenshot-placeholder">
        <span>📸 Add Screenshots</span>
      </div>
    )
  }

  const prev = () => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length)
  const next = () => setIndex((i) => (i + 1) % screenshots.length)

  return (
    <div className="carousel">
      <img src={screenshots[index]} alt={`${title} screenshot ${index + 1}`} onContextMenu={(e) => e.preventDefault()} draggable={false} />
      {screenshots.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">&#8249;</button>
          <button className="carousel-btn next" onClick={next} aria-label="Next">&#8250;</button>
          <div className="carousel-dots">
            {screenshots.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
