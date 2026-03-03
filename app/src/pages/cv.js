import { getAppEl } from '../render.js'

const ZONES = [
  {
    id: 'entryway',
    label: 'Entryway',
    content: () => `
      <div class="zone-content">
        <h1>Matt Currier</h1>
        <p class="cv-title">Founder &amp; Principal Engineer &mdash; Turing Automations</p>
        <p class="cv-tagline">Songwriter &middot; Thinker &middot; Builder of Things That Move</p>
        <div class="cv-links">
          <a href="https://github.com/fingerskier" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/matt-currier" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:fingerskier@gmail.com">Email</a>
          <a href="https://x.com/fingerskier" target="_blank" rel="noopener">X</a>
          <a href="https://youtube.com/@fingerskier" target="_blank" rel="noopener">YouTube</a>
          <a href="https://bandcamp.com/mattcurrier" target="_blank" rel="noopener">Bandcamp</a>
        </div>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-door"></div>
        <div class="scenery-sign">WORKSHOP</div>
      </div>
    `,
  },
  {
    id: 'workbench',
    label: 'Workbench',
    content: () => `
      <div class="zone-content">
        <h2>Skills &amp; Technologies</h2>
        <div class="skills-shelf">
          <div class="skill-group">
            <h3>Languages &amp; Runtime</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">JavaScript / Node.js</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Python</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Rust</span><span class="meter" data-level="45"></span><span class="skill-label">Intermediate</span></li>
              <li><span class="skill-name">HTML / CSS</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">SQL</span><span class="meter" data-level="75"></span><span class="skill-label">Advanced</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Frameworks &amp; Tools</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">Electron</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">React</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Express</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Git</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Hardware &amp; Embedded</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">Serial Protocols</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Load Cells &amp; Force</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Actuator Control</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Raspberry Pi / Pico W</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Safety FSMs</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Infrastructure</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">AWS (EB, S3, SES, SQS, Aurora)</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Auto-update Systems</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">CI/CD Pipelines</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-oscilloscope"></div>
        <div class="scenery-pegboard"></div>
      </div>
    `,
  },
  {
    id: 'floor',
    label: 'The Floor',
    content: () => `
      <div class="zone-content">
        <h2>Experience</h2>
        <article class="role">
          <h3>Turing Automations &mdash; Founder &amp; Principal Engineer</h3>
          <time>2017 &ndash; Present</time>
          <p><em>Primary Client: OsteoStrong</em></p>
          <ul>
            <li>Architect and sole developer of the Spectrum platform: safety-critical Electron applications controlling exercise equipment across 200+ franchise locations worldwide</li>
            <li>Designed FSM-based actuator control with real-time safety supervisor monitoring force limits, timeouts, wrong-way motion, and signal validity</li>
            <li>Built hardware abstraction layer supporting 5 actuator types and 3 load-cell types with automatic detection</li>
            <li>Developed cloud infrastructure on AWS (Elastic Beanstalk, Aurora MySQL, S3, SES, SQS)</li>
            <li>Created over-the-air auto-update system for fleet of deployed kiosk devices</li>
            <li>Maintained ~1,000 module codebase spanning firmware control, desktop UI, cloud API, and member-facing apps</li>
            <li>Built digital twin / simulator system enabling full development and testing without physical hardware</li>
          </ul>
          <div class="project-stations">
            <div class="station" data-status="active">
              <span class="status-led green"></span>
              <h4>Spectrum Application</h4>
              <p>Core Electron app &mdash; actuator control, session management</p>
            </div>
            <div class="station" data-status="active">
              <span class="status-led green"></span>
              <h4>Spectrum UI</h4>
              <p>Touch-screen kiosk interface for members</p>
            </div>
            <div class="station" data-status="active">
              <span class="status-led green"></span>
              <h4>OS Chroma</h4>
              <p>Cloud API &amp; admin dashboard (Express/MySQL/AWS)</p>
            </div>
            <div class="station" data-status="active">
              <span class="status-led green"></span>
              <h4>OS Firmware</h4>
              <p>Hardware drivers, serial protocols, safety FSM</p>
            </div>
            <div class="station" data-status="active">
              <span class="status-led green"></span>
              <h4>Believer App</h4>
              <p>Member-facing mobile/web app</p>
            </div>
            <div class="station" data-status="rnd">
              <span class="status-led yellow"></span>
              <h4>Shrewdy</h4>
              <p>Next-gen IoT hardware (Pico W devices)</p>
            </div>
          </div>
        </article>

        <article class="role">
          <h3>Premier Coil Solutions &mdash; Controls/Software Engineer</h3>
          <time>2017 &ndash; 2019</time>
          <ul>
            <li>Developed advanced PLC automated control systems and standards</li>
            <li>Created automation controller function libraries for command-request processing, task queuing, sequencing</li>
            <li>Created Hardware-in-Loop machine simulators (Siemens, Wago, PC)</li>
            <li>Designed SCADA software for coiled-tubing, drilling fluid, and nitrogen pumping units</li>
          </ul>
        </article>

        <article class="role">
          <h3>Aker Solutions / MHWirth / AFGlobal &mdash; Controls/Software Engineer</h3>
          <time>2014 &ndash; 2017</time>
          <ul>
            <li>PLC-based mux system for subsea distributed control (direct-hydraulic, remote hydraulic, mechanical)</li>
            <li>Control system for robotic drilling rig machinery and automated drilling safety manifold</li>
            <li>SCADA software for land and offshore drilling rigs</li>
          </ul>
        </article>

        <article class="role">
          <h3>Paragon Web Solutions &mdash; Web Developer</h3>
          <time>2009 &ndash; 2015</time>
          <ul>
            <li>Charter school web application: learning plans, grading, transcripts, document management with e-signing</li>
            <li>Document control system for Sisters of Charity hospital network</li>
            <li>E-commerce, content management, and data visualization web apps</li>
          </ul>
        </article>

        <article class="role">
          <h3>Scientific Drilling &mdash; Directional Drilling</h3>
          <time>2005 &ndash; 2013</time>
          <ul>
            <li>Shell ERDD HLT: 22 wells, slant-well and horizontal wells for oil-shale recovery</li>
            <li>Anadarko gas-well surface program (Uintah Basin) with high anti-collision risks</li>
            <li>Barrick mine-shaft freeze wall: 36 wells in a ring with 2-foot spacing tolerances</li>
          </ul>
        </article>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-machine"></div>
        <div class="scenery-conveyor"></div>
      </div>
    `,
  },
  {
    id: 'rack',
    label: 'The Rack',
    content: () => `
      <div class="zone-content">
        <h2>Architecture &amp; DevOps</h2>
        <ul>
          <li>Electron app packaging and distribution across Windows kiosk fleet</li>
          <li>AWS architecture: Elastic Beanstalk, Aurora MySQL Serverless, ALB with auto-scaling</li>
          <li>Multi-environment deployment (dev &rarr; test &rarr; production)</li>
          <li>Real-time hardware telemetry and cloud sync</li>
          <li>Session-based auth, API key management, franchise-scoped data isolation</li>
        </ul>
        <div class="deploy-pipeline" aria-hidden="true">
          <span class="pipeline-step">Code</span>
          <span class="pipeline-arrow">&rarr;</span>
          <span class="pipeline-step">Build</span>
          <span class="pipeline-arrow">&rarr;</span>
          <span class="pipeline-step">Test</span>
          <span class="pipeline-arrow">&rarr;</span>
          <span class="pipeline-step">Ship</span>
        </div>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-rack"></div>
        <div class="scenery-cables"></div>
      </div>
    `,
  },
  {
    id: 'stage',
    label: 'The Stage',
    content: () => `
      <div class="zone-content">
        <h2>Music &amp; Creativity</h2>
        <p>Songwriter and musician. The same mind that designs safety-critical state machines also writes songs.</p>
        <ul>
          <li>Compositions include &ldquo;Conqueror&rsquo;s Song&rdquo; and &ldquo;The Father&rsquo;s Hand&rdquo;</li>
          <li>Interests in music theory, hymn writing, and the intersection of mathematics and music</li>
        </ul>
        <div class="music-links">
          <a href="https://bandcamp.com/mattcurrier" target="_blank" rel="noopener">Bandcamp</a>
          <a href="https://youtube.com/@fingerskier" target="_blank" rel="noopener">YouTube</a>
        </div>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-stage"></div>
      </div>
    `,
  },
  {
    id: 'library',
    label: 'The Library',
    content: () => `
      <div class="zone-content">
        <h2>Intellectual Interests</h2>
        <ul>
          <li>Formal verification &amp; proof systems (LEAN)</li>
          <li>Differential equations and mathematical modeling</li>
          <li>Philosophy &mdash; practical wisdom and technical craft</li>
          <li>Advocate for proven, maintainable approaches over trendy technologies</li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li><strong>M.S. Information Systems</strong> &mdash; University of Phoenix, 2003&ndash;2005</li>
          <li><strong>B.S. Computer Science</strong> &mdash; Colorado Mesa University, 1995&ndash;2003</li>
        </ul>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-bookshelf"></div>
        <div class="scenery-chalkboard"></div>
      </div>
    `,
  },
  {
    id: 'exit',
    label: 'The Exit',
    content: () => `
      <div class="zone-content">
        <h2>Let&rsquo;s build something.</h2>
        <div class="contact-links">
          <a href="mailto:fingerskier@gmail.com">fingerskier@gmail.com</a>
          <a href="https://github.com/fingerskier" target="_blank" rel="noopener">github.com/fingerskier</a>
          <a href="https://linkedin.com/in/matt-currier" target="_blank" rel="noopener">linkedin.com/in/matt-currier</a>
          <a href="https://x.com/fingerskier" target="_blank" rel="noopener">x.com/fingerskier</a>
        </div>
        <p class="cv-tagline">Father of 5 &mdash; husband of 1.<br>My true passion is to create and help others do what they were made to do.</p>
      </div>
      <div class="zone-scenery" aria-hidden="true">
        <div class="scenery-exit-door"></div>
        <div class="scenery-mailbox"></div>
      </div>
    `,
  },
]

/* ── Character SVG ── */
function characterSVG() {
  return `
  <svg class="character-svg" viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
    <!-- hard hat -->
    <ellipse cx="30" cy="14" rx="16" ry="8" fill="#E8742A"/>
    <rect x="14" y="10" width="32" height="5" rx="2" fill="#E8742A"/>
    <!-- head -->
    <circle cx="30" cy="24" r="10" fill="#F5CBA7"/>
    <!-- eyes -->
    <circle cx="26" cy="22" r="1.8" fill="#2D2D2D"/>
    <circle cx="34" cy="22" r="1.8" fill="#2D2D2D"/>
    <!-- smile -->
    <path d="M25 28 Q30 32 35 28" stroke="#2D2D2D" stroke-width="1.2" fill="none"/>
    <!-- body -->
    <rect x="21" y="34" width="18" height="26" rx="3" fill="#4A6FA5"/>
    <!-- tool belt -->
    <rect x="19" y="54" width="22" height="4" rx="2" fill="#8B5E3C"/>
    <rect x="22" y="54" width="3" height="6" rx="1" fill="#777"/>
    <rect x="35" y="54" width="3" height="6" rx="1" fill="#777"/>
    <!-- legs -->
    <rect class="leg-left" x="23" y="60" width="6" height="22" rx="3" fill="#2D2D2D"/>
    <rect class="leg-right" x="31" y="60" width="6" height="22" rx="3" fill="#2D2D2D"/>
    <!-- boots -->
    <rect x="21" y="80" width="10" height="5" rx="2" fill="#5C3A1E"/>
    <rect x="29" y="80" width="10" height="5" rx="2" fill="#5C3A1E"/>
    <!-- arms -->
    <rect class="arm-left" x="11" y="36" width="10" height="5" rx="2.5" fill="#F5CBA7"/>
    <rect class="arm-right" x="39" y="36" width="10" height="5" rx="2.5" fill="#F5CBA7"/>
  </svg>`
}

export function renderCV() {
  const appEl = getAppEl()
  const plain = sessionStorage.getItem('cv-plain') === 'true' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  appEl.innerHTML = `
    <div class="icv${plain ? ' plain-mode' : ''}">
      <a href="#main-content" class="skip-link">Skip to content</a>

      <div class="parallax-layer parallax-sky" aria-hidden="true"></div>
      <div class="parallax-layer parallax-wall" aria-hidden="true"></div>

      <div class="hud" role="navigation" aria-label="CV navigation">
        <div class="hud-left">
          <a href="#/" class="hud-home" aria-label="Back to home">&larr;</a>
          <span class="hud-zone-label">Entryway</span>
        </div>
        <div class="hud-progress">
          <div class="hud-progress-fill"></div>
        </div>
        <div class="hud-right">
          <div class="hud-nav-dots">
            ${ZONES.map((z, i) => `<button class="hud-dot${i === 0 ? ' active' : ''}" data-zone-index="${i}" title="${z.label}"></button>`).join('')}
          </div>
          <button class="mode-toggle" aria-label="Toggle plain mode">${plain ? '🎮' : '📄'}</button>
        </div>
      </div>

      <div class="character" aria-hidden="true">
        ${characterSVG()}
      </div>

      <div class="zones-track" id="main-content">
        ${ZONES.map((z, i) => `
          <section class="zone" id="zone-${z.id}" data-zone="${z.id}" data-zone-index="${i}">
            ${z.content()}
          </section>
        `).join('')}
      </div>
    </div>
  `

  initInteractiveCV(appEl, plain)
}

function initInteractiveCV(root, startPlain) {
  const icv = root.querySelector('.icv')
  const track = root.querySelector('.zones-track')
  const character = root.querySelector('.character')
  const zones = Array.from(root.querySelectorAll('.zone'))
  const hudFill = root.querySelector('.hud-progress-fill')
  const hudLabel = root.querySelector('.hud-zone-label')
  const hudDots = Array.from(root.querySelectorAll('.hud-dot'))
  const modeToggle = root.querySelector('.mode-toggle')
  const parallaxSky = root.querySelector('.parallax-sky')
  const parallaxWall = root.querySelector('.parallax-wall')
  let isPlain = startPlain
  let lastScrollLeft = 0

  /* ── Mode toggle ── */
  modeToggle.addEventListener('click', () => {
    isPlain = !isPlain
    icv.classList.toggle('plain-mode', isPlain)
    sessionStorage.setItem('cv-plain', String(isPlain))
    modeToggle.textContent = isPlain ? '🎮' : '📄'
  })

  /* ── Dot navigation ── */
  hudDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.zoneIndex, 10)
      if (isPlain) {
        zones[idx].scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        zones[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      }
    })
  })

  /* ── Scroll-driven updates ── */
  function onScroll() {
    if (isPlain) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docH = document.documentElement.scrollHeight - window.innerHeight
      hudFill.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%'
    } else {
      const sl = track.scrollLeft
      const max = track.scrollWidth - track.clientWidth
      const pct = max > 0 ? sl / max : 0
      hudFill.style.width = (pct * 100) + '%'

      // Character position
      const charX = pct * (track.clientWidth - 80)
      character.style.transform = `translateX(${charX}px)`

      // Walking animation
      const delta = Math.abs(sl - lastScrollLeft)
      if (delta > 1) {
        character.classList.add('walking')
        // Face direction
        character.classList.toggle('facing-left', sl < lastScrollLeft)
      }
      lastScrollLeft = sl
      clearTimeout(character._wt)
      character._wt = setTimeout(() => character.classList.remove('walking'), 200)

      // Parallax
      if (parallaxSky) parallaxSky.style.transform = `translateX(${-sl * 0.1}px)`
      if (parallaxWall) parallaxWall.style.transform = `translateX(${-sl * 0.3}px)`
    }

    // Active zone detection
    let activeIdx = 0
    if (isPlain) {
      for (let i = zones.length - 1; i >= 0; i--) {
        if (zones[i].getBoundingClientRect().top <= window.innerHeight / 3) { activeIdx = i; break }
      }
    } else {
      for (let i = zones.length - 1; i >= 0; i--) {
        if (zones[i].getBoundingClientRect().left <= track.clientWidth / 2) { activeIdx = i; break }
      }
    }
    hudLabel.textContent = ZONES[activeIdx].label
    hudDots.forEach((d, i) => d.classList.toggle('active', i === activeIdx))
  }

  track.addEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll)

  /* ── Keyboard ── */
  function onKey(e) {
    if (isPlain) return
    if (e.key === 'ArrowRight') track.scrollBy({ left: 400, behavior: 'smooth' })
    else if (e.key === 'ArrowLeft') track.scrollBy({ left: -400, behavior: 'smooth' })
  }
  window.addEventListener('keydown', onKey)

  /* ── Skill meters animate on visibility ── */
  const meters = root.querySelectorAll('.meter')
  const mObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('filled')
        mObs.unobserve(e.target)
      }
    })
  }, { threshold: 0.2 })
  meters.forEach(m => mObs.observe(m))

  /* ── LED blink ── */
  const leds = root.querySelectorAll('.status-led')
  const intervals = []
  leds.forEach(led => {
    intervals.push(setInterval(() => led.classList.toggle('blink'), 800 + Math.random() * 1500))
  })

  /* ── Cleanup ── */
  const obs = new MutationObserver(() => {
    if (!root.querySelector('.icv')) {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
      intervals.forEach(clearInterval)
      mObs.disconnect()
      obs.disconnect()
    }
  })
  obs.observe(root, { childList: true })

  requestAnimationFrame(onScroll)
}
