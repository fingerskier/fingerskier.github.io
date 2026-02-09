import gameData from '../data/cv-game.json'
import { getAppEl } from '../render.js'

const { character, milestones } = gameData

export function renderGame() {
  let index = 0
  const appEl = getAppEl()

  function update() {
    const milestone = milestones[index]
    const sheet = milestone.sheet || { class: '', level: '', stats: [], inventory: [], quests: [] }
    const pct = milestones.length > 1 ? (index / (milestones.length - 1)) * 100 : 0

    appEl.innerHTML = `
      <div class="resume-game">
        <header class="resume-header">
          <h1>${character.name}</h1>
          <p>${character.tagline}</p>
        </header>

        <div class="game-layout">
          <section class="board-section">
            <div class="progress-track" aria-hidden="true">
              <div class="progress-bar">
                <div class="progress-fill" style="width:${pct}%"></div>
              </div>
              <span class="progress-label">Stage ${index + 1} of ${milestones.length}</span>
            </div>

            <div class="board" role="list">
              ${milestones.map((m, i) => `
                <article role="listitem"
                  class="board-tile${i === index ? ' current' : ''}${i < index ? ' completed' : ''}"
                  tabindex="0"
                  data-index="${i}">
                  <div class="tile-header">
                    <span class="tile-index">${i + 1}</span>
                    ${i === index ? '<span class="token" aria-hidden="true">&#x1F9ED;</span>' : ''}
                  </div>
                  <h3>${m.title}</h3>
                  <p>${m.summary}</p>
                </article>
              `).join('')}
            </div>

            <div class="journey-log">
              <h2>Current Quest</h2>
              <p>${milestone.description}</p>
            </div>

            <p class="controls" role="note">
              Use the &larr; and &rarr; arrow keys or click a tile to travel the board.
            </p>
          </section>

          <aside class="character-sheet">
            <h2>Character Sheet</h2>
            <div class="sheet-section"><h3>Class</h3><p>${sheet.class}</p></div>
            <div class="sheet-section"><h3>Level</h3><p>${sheet.level}</p></div>
            <div class="sheet-section">
              <h3>Stats</h3>
              <ul class="stats-grid">
                ${sheet.stats.map(s => `<li><span>${s.name}</span><span>${s.value}</span></li>`).join('')}
              </ul>
            </div>
            <div class="sheet-section">
              <h3>Inventory</h3>
              <ul class="inventory-list">
                ${sheet.inventory.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            <div class="sheet-section">
              <h3>Quests Completed</h3>
              <ul class="quests-list">
                ${sheet.quests.map(q => `
                  <li>
                    <h4>${q.name}</h4>
                    <p><strong>Objective:</strong> ${q.objective}</p>
                    <p><strong>Outcome:</strong> ${q.outcome}</p>
                  </li>
                `).join('')}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    `

    appEl.querySelector('.board').addEventListener('click', (e) => {
      const tile = e.target.closest('.board-tile')
      if (tile) {
        index = parseInt(tile.dataset.index, 10)
        update()
      }
    })

    appEl.querySelector('.board').addEventListener('keydown', (e) => {
      const tile = e.target.closest('.board-tile')
      if (tile && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        index = parseInt(tile.dataset.index, 10)
        update()
      }
    })
  }

  function handleKey(e) {
    if (e.key === 'ArrowRight') {
      index = Math.min(index + 1, milestones.length - 1)
      update()
    } else if (e.key === 'ArrowLeft') {
      index = Math.max(index - 1, 0)
      update()
    }
  }

  window.addEventListener('keydown', handleKey)

  // Clean up keyboard listener when navigating away
  const observer = new MutationObserver(() => {
    if (!appEl.querySelector('.resume-game')) {
      window.removeEventListener('keydown', handleKey)
      observer.disconnect()
    }
  })
  observer.observe(appEl, { childList: true })

  update()
}
