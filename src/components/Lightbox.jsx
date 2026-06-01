import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import '../styles/components/lightbox.css'

export default function Lightbox({ screenshots, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

      {screenshots.length > 1 && (
        <>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onNav(-1) }} aria-label="Previous">&#8249;</button>
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNav(1) }} aria-label="Next">&#8250;</button>
        </>
      )}

      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img
          src={screenshots[index]}
          alt={`Screenshot ${index + 1}`}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>

      {screenshots.length > 1 && (
        <div className="lightbox-dots">
          {screenshots.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); onNav(i - index) }}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="lightbox-counter">{index + 1} / {screenshots.length}</div>
    </div>,
    document.body
  )
}
