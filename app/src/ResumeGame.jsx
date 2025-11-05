import { useEffect, useMemo, useState } from 'react'
import resumeData from './resume.json'
import './ResumeGame.css'

const { character, milestones } = resumeData

export default function ResumeGame() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowRight') {
        setIndex((current) => Math.min(current + 1, milestones.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        setIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const activeMilestone = milestones[index] ?? milestones[0]

  const sheet = useMemo(() => {
    return activeMilestone?.sheet ?? {
      class: 'Adventurer',
      level: 'Level 1',
      stats: [],
      inventory: [],
      quests: [],
    }
  }, [activeMilestone])

  const progressPercent = milestones.length > 1
    ? (index / (milestones.length - 1)) * 100
    : 0

  return (
    <div className="resume-game">
      <header className="resume-header">
        <h1>{character.name}</h1>
        <p>{character.tagline}</p>
      </header>

      <div className="game-layout">
        <section className="board-section">
          <div className="progress-track" aria-hidden="true">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="progress-label">
              Stage {index + 1} of {milestones.length}
            </span>
          </div>

          <div className="board" role="list">
            {milestones.map((milestone, milestoneIndex) => {
              const isCurrent = milestoneIndex === index
              const isCompleted = milestoneIndex < index

              return (
                <article
                  role="listitem"
                  key={milestone.title}
                  className={[
                    'board-tile',
                    isCurrent ? 'current' : '',
                    isCompleted ? 'completed' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  tabIndex={0}
                  aria-pressed={isCurrent}
                  onClick={() => setIndex(milestoneIndex)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setIndex(milestoneIndex)
                    }
                  }}
                >
                  <div className="tile-header">
                    <span className="tile-index">{milestoneIndex + 1}</span>
                    {isCurrent && <span className="token" aria-hidden="true">🧭</span>}
                  </div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.summary}</p>
                </article>
              )
            })}
          </div>

          <div className="journey-log">
            <h2>Current Quest</h2>
            <p>{activeMilestone.description}</p>
          </div>

          <p className="controls" role="note">
            Use the ← and → arrow keys or click a tile to travel the board.
          </p>
        </section>

        <aside className="character-sheet">
          <h2>Character Sheet</h2>
          <div className="sheet-section">
            <h3>Class</h3>
            <p>{sheet.class}</p>
          </div>
          <div className="sheet-section">
            <h3>Level</h3>
            <p>{sheet.level}</p>
          </div>
          <div className="sheet-section">
            <h3>Stats</h3>
            <ul className="stats-grid">
              {sheet.stats.map((stat) => (
                <li key={stat.name}>
                  <span>{stat.name}</span>
                  <span>{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sheet-section">
            <h3>Inventory</h3>
            <ul className="inventory-list">
              {sheet.inventory.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sheet-section">
            <h3>Quests Completed</h3>
            <ul className="quests-list">
              {sheet.quests.map((quest) => (
                <li key={quest.name}>
                  <h4>{quest.name}</h4>
                  <p>
                    <strong>Objective:</strong> {quest.objective}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {quest.outcome}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
