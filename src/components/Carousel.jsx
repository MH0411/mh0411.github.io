import { useState, useRef } from 'react'
import Lightbox from './Lightbox'
import '../styles/components/carousel.css'

export default function Carousel({ screenshots, title }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const skipClick = useRef(false)

  if (!screenshots?.length) {
    return (
      <div className="screenshot-placeholder">
        <span>📸 Add Screenshots</span>
      </div>
    )
  }

  const prev = (e) => { e.stopPropagation(); skipClick.current = true; setIndex((i) => (i - 1 + screenshots.length) % screenshots.length) }
  const next = (e) => { e.stopPropagation(); skipClick.current = true; setIndex((i) => (i + 1) % screenshots.length) }

  const handleCarouselClick = () => {
    if (skipClick.current) { skipClick.current = false; return }
    setLightbox(true)
  }

  return (
    <>
      <div className="carousel" onClick={handleCarouselClick}>
        <img
          src={screenshots[index]}
          alt={`${title} screenshot ${index + 1}`}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className="carousel-expand">⤢</div>
        {screenshots.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="carousel-btn next" onClick={next} aria-label="Next">&#8250;</button>
            <div className="carousel-dots">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); skipClick.current = true; setIndex(i) }}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox && (
        <Lightbox
          screenshots={screenshots}
          index={index}
          onClose={() => setLightbox(false)}
          onNav={(dir) => setIndex((i) => (i + dir + screenshots.length) % screenshots.length)}
        />
      )}
    </>
  )
}
