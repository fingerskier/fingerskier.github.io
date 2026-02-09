import { render } from '../render.js'
import { layout } from '../layout.js'

export function renderHome() {
  const content = `
    <section class="home">
      <h1>Matt Currier</h1>
      <p class="tagline">Engineering leader &amp; eclecticist</p>

      <div class="home-narrative">
        <p>I've been using computers since I first watched my dad solder together a Zenith H89 CP/M machine when I was 4 years old. Wumpus was the catch of the day when we first powered it up.</p>
        <p>Since then I've worked on personal, commercial, and industrial systems — electronics, firmware, software, databases, and cloud services. I was an oilfield directional drilling service hand for nearly 10 years. I write (and read) music, books and code.</p>
        <p>Father of 5 — husband of 1. My true passion is to create and help others do what they were made to do.</p>
      </div>

      <div class="home-links">
        <a href="https://github.com/fingerskier" target="_blank" rel="noopener">GitHub</a>
        <a href="https://linkedin.com/in/matt-currier" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://bandcamp.com/mattcurrier" target="_blank" rel="noopener">Bandcamp</a>
      </div>

      <nav class="home-nav">
        <a href="#/blog">Blog</a>
        <a href="#/cv">Professional CV</a>
        <a href="#/game">Play the Adventure</a>
      </nav>
    </section>
  `
  render(layout(content, '/'))
}
