import { useEffect, useState } from 'react'
import resumeData from './resume.json'
import './ResumeGame.css'

type Section = {
  title: string
  content: string
}

function ResumeGame() {
  const sections = (resumeData as { sections: Section[] }).sections
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIndex((i) => Math.min(i + 1, sections.length - 1))
      } else if (e.key === 'ArrowLeft') {
        setIndex((i) => Math.max(i - 1, 0))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [sections.length])

  return (
    <div className="resume-game">
      <div
        className="sections-container"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {sections.map((s, idx) => (
          <section key={idx} className="section">
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </section>
        ))}
      </div>
      <div className="controls">Use ← and → to navigate</div>
    </div>
  )
}

export default ResumeGame
