# Interactive CV Spec — Matt (fingerskier)

## Vision

A side-scrolling, Robby Leonardi-inspired interactive CV built as a single-page web app.
The player character walks through a stylized **"lab/factory floor"** — each station represents a career chapter, skill domain, or project.
Scrolling (or arrow keys) drives the character forward through the world.

**Two modes, same URL:**

1. **Interactive Mode** (default) — the gamified scroll-through experience
2. **Plain Mode** — toggled via a button; renders a clean, accessible, printable CV (same semantic HTML, just stripped of the game layer)

This is itself a portfolio piece: it demonstrates frontend craft, game-loop thinking, hardware metaphors, and attention to accessibility — all things relevant to the person it describes.

---

## Metaphor & Theme

The world is a **cross-section of a workshop/lab**, progressing left to right:

| Zone | Visual Metaphor | Content |
|------|----------------|---------|
| **Entryway** | Workshop door, welcome sign | Name, title, tagline, links |
| **Workbench** | Tools, oscilloscope, schematics | Skills & Technologies |
| **The Floor** | Machines, actuators, load cells, wiring | OsteoStrong / Turing Automations work |
| **The Rack** | Server rack, cloud icons, deploy pipelines | Cloud / DevOps / Architecture |
| **The Stage** | Microphone, guitar, sheet music | Music & Songwriting |
| **The Library** | Books, chalkboard, equations | Philosophy, Math, LEAN |
| **The Exit** | Door to outside, mailbox | Contact & Links |

The **character** is a simple, recognizable pixel-art or vector avatar (hard hat, tool belt) who walks, stops, and gestures at each station.

### Color Palette

Industrial warm tones — think Wes Anderson meets a maker space:
- Background: warm concrete gray `#E8E0D8` with subtle grain texture
- Accent 1: safety orange `#E8742A` (highlights, interactive elements)
- Accent 2: deep teal `#1A6B5C` (skills bars, success states)
- Accent 3: steel blue `#4A6FA5` (links, secondary actions)
- Dark: charcoal `#2D2D2D`
- Light: warm white `#FAF8F5`

### Typography

- Headings: **"JetBrains Mono"** or similar monospace with character (reinforces dev identity)
- Body: **"Source Serif 4"** or similar readable serif
- Labels/HUD: Pixel-style font like **"Press Start 2P"** (sparingly, for game UI elements only)

---

## Technical Architecture

### Stack

- **Vanilla HTML/CSS/JS** — no framework required; this should be deployable to GitHub Pages with zero build step
- **GSAP** (GreenSock) for scroll-driven animation and character movement
- **Canvas or SVG** for the character and animated elements (SVG preferred for accessibility)
- **CSS custom properties** for theming and plain-mode toggle
- **Intersection Observer** for triggering zone animations as they scroll into view

### File Structure

```
interactive-cv/
├── index.html          # Single HTML file with all semantic content
├── css/
│   ├── main.css        # Layout, zones, responsive
│   ├── game.css        # Game layer styles (disabled in plain mode)
│   └── print.css       # Print stylesheet
├── js/
│   ├── main.js         # Entry point, mode toggle
│   ├── character.js    # Avatar movement, animation states
│   ├── parallax.js     # Multi-layer parallax scrolling
│   ├── zones.js        # Zone-specific animations & interactions
│   └── skills.js       # Animated skill bars / meters
├── assets/
│   ├── character/      # SVG sprite states (walk, idle, point, wave)
│   ├── zones/          # Background layers, station art
│   └── icons/          # Tech/skill icons
├── CV.md               # Plain text source of truth (markdown)
└── README.md
```

### Progressive Enhancement Strategy

The HTML contains all CV content in semantic, accessible markup.
The game layer is purely visual enhancement:

```html
<!-- Semantic content always present -->
<section id="experience" class="zone" data-zone="floor">
  <div class="zone-content">
    <h2>Experience</h2>
    <article class="role">
      <h3>Turing Automations — Founder & Principal Engineer</h3>
      <time>2017–Present</time>
      <p>Primary Client: OsteoStrong</p>
      ...
    </article>
  </div>
  <!-- Game layer (hidden in plain mode) -->
  <div class="zone-scenery" aria-hidden="true">
    <!-- SVG machines, animated actuators, blinking status LEDs -->
  </div>
</section>
```

---

## Content Sections (Zone Details)

### Zone 1: Entryway

**Game elements:** Workshop door slides open as character approaches. Neon-style sign flickers on.

**Content:**
```
Matt
Founder & Principal Engineer — Turing Automations
Songwriter · Thinker · Builder of Things That Move

[Blog] [GitHub] [Contact]
```

**Interactive:** Character waves at the viewer. Sign letters animate in one by one.

---

### Zone 2: Workbench (Skills)

**Game elements:** An oscilloscope displays a waveform. Tools hang on a pegboard. The character picks up each tool as the corresponding skill highlights.

**Content — Skills displayed as gauges/meters (not boring bar charts):**

**Languages & Runtime:**
- JavaScript/Node.js — Expert (8+ years, ~1000 modules)
- Python — Advanced
- Rust — Intermediate (active learning)
- HTML/CSS — Expert
- SQL — Advanced

**Frameworks & Tools:**
- Electron — Expert (safety-critical desktop apps since 2017)
- React — Advanced
- Express — Expert
- GSAP — Familiar
- Git — Expert

**Hardware & Embedded:**
- Serial protocols (USB-serial, RS-232) — Expert
- Load cells & force measurement — Expert
- Actuator control (DC motors, relays, linear actuators) — Expert
- Raspberry Pi / Pico W — Advanced
- Finite State Machines for hardware safety — Expert

**Infrastructure:**
- AWS (EB, S3, SES, SQS, Aurora, Rekognition) — Advanced
- Auto-update systems (Electron) — Expert
- CI/CD pipelines — Advanced

**Visual treatment:** Each skill is an analog gauge or VU meter that fills as the character walks past.
The needle sweeps from 0 to the skill level with a satisfying mechanical animation.
Group by category on different "shelves" of the workbench.

---

### Zone 3: The Floor (Experience — OsteoStrong / Turing Automations)

**Game elements:** The biggest zone. Machines line the floor — an actuator extends/retracts, a load cell display shows force numbers ticking, status LEDs blink green.
A conveyor belt moves components across the scene.

**Content:**

**Turing Automations — Founder & Principal Engineer | 2017–Present**
*Primary Client: OsteoStrong*

- Architect and sole developer of the Spectrum platform: safety-critical Electron applications controlling exercise equipment across 200+ franchise locations worldwide
- Designed and implemented FSM-based actuator control with real-time safety supervisor monitoring force limits, timeouts, wrong-way motion, and signal validity
- Built hardware abstraction layer supporting 5 actuator types and 3 load-cell types with automatic detection via serial port enumeration and confidence scoring
- Developed cloud infrastructure on AWS (Elastic Beanstalk, Aurora MySQL, S3, SES, SQS) for member management, session tracking, and franchise operations
- Created over-the-air auto-update system for fleet of deployed kiosk devices
- Maintained ~1,000 module codebase spanning firmware control, desktop UI, cloud API, and member-facing applications
- Built digital twin / simulator system enabling full development and testing without physical hardware

**Key Projects (interactive sub-stations the character can explore):**

| Project | Description | Status Light |
|---------|-------------|-------------|
| Spectrum Application | Core Electron app — actuator control, session management | 🟢 Active |
| Spectrum UI | Touch-screen kiosk interface for members | 🟢 Active |
| OS Chroma | Cloud API & admin dashboard (Express/MySQL/AWS) | 🟢 Active |
| OS Firmware | Hardware drivers, serial protocols, safety FSM | 🟢 Active |
| Believer App | Member-facing mobile/web app | 🟢 Active |
| Shrewdy | Next-gen IoT hardware (Pico W devices) | 🟡 R&D |

**Interactive:** Clicking/tapping a machine opens a "spec plate" (like an industrial nameplate) with project details. The actuator visually extends when hovered.  The load cell display shows real force values ticking.

---

### Zone 4: The Rack (Architecture & DevOps)

**Game elements:** Server rack with blinking lights, cables, a deploy pipeline visualized as a conveyor belt with packages moving along it.

**Content:**

- Electron app packaging and distribution across Windows kiosk fleet
- AWS architecture: Elastic Beanstalk (c5.large), Aurora MySQL Serverless, ALB with auto-scaling
- Multi-environment deployment (dev → test → production)
- Real-time hardware telemetry and cloud sync
- Session-based auth, API key management, franchise-scoped data isolation

**Interactive:** A simplified deploy pipeline animation: code → build → test → ship. Packages slide along the conveyor when scrolled into view.

---

### Zone 5: The Stage (Music & Creativity)

**Game elements:** Character puts down hard hat, picks up a guitar. A small stage with a microphone, sheet music stand, and subtle musical notes floating up.

**Content:**

- Songwriter and musician
- Compositions include "Conqueror's Song" and "The Father's Hand" (modern hymn based on Ashokan Farewell)
- Interests in music theory, hymn writing, and the intersection of mathematics and music
- This section demonstrates range — the same mind that designs safety-critical state machines also writes songs

**Interactive:** Subtle ambient audio option (off by default, click to enable). Musical notes float up from the stage in a particle effect. Sheet music on the stand could show a real snippet.

---

### Zone 6: The Library (Intellectual Interests)

**Game elements:** Bookshelves, a chalkboard with equations, a comfortable reading chair. Quieter, more contemplative atmosphere.

**Content:**

- Formal verification & proof systems (LEAN)
- Differential equations and mathematical modeling
- Philosophy — particularly the intersection of practical wisdom and technical craft
- Advocate for proven, maintainable approaches over trendy technologies

**Interactive:** Chalkboard gradually reveals an equation or proof sketch as the character walks past. Books on the shelf have readable spines with topic names.

---

### Zone 7: The Exit (Contact)

**Game elements:** Workshop door opening to daylight. A mailbox. The character turns and waves goodbye.

**Content:**

```
Let's build something.

📧  [email]
🔗  fingerskier.github.io
💻  github.com/fingerskier
```

**Interactive:** Contact form or mailto link. The "door to outside" implies there's a whole world of possibilities. Character does a final wave animation.

---

## Game Mechanics

### Scroll-Driven Movement

```
Scroll position → Character X position → Camera follows character
                → Parallax layers move at different rates
                → Zone animations trigger at thresholds
```

- **Desktop:** Scroll wheel or arrow keys move character
- **Mobile:** Swipe left/right or tap arrows
- Character has 3 animation states: **idle** (breathing), **walk** (legs moving), **point** (gesturing at content)
- Character auto-transitions to **point** when stopped at a content station

### Parallax Layers (back to front)

1. **Sky/ceiling** — very slow scroll, gradient
2. **Back wall** — workshop wall, posters, clocks — slow scroll
3. **Mid machines** — larger background equipment — medium scroll
4. **Floor/ground** — where character walks — 1:1 with scroll
5. **Foreground details** — cables, pipes crossing the screen — slight forward parallax

### HUD (Heads-Up Display)

A minimal game-style HUD overlay:
- **Progress bar** at top (how far through the CV) styled as a "loading" or "completion" meter
- **Zone indicator** — current section name (like level names in a game)
- **Mode toggle** button — 🎮 / 📄 to switch between interactive and plain
- **Navigation dots** — click to jump to any zone

### Responsive Behavior

- **Desktop (>1024px):** Full side-scroll experience, parallax, character animation
- **Tablet (768–1024px):** Simplified parallax, touch-friendly tap zones
- **Mobile (<768px):** Vertical scroll layout (zones stack), character walks downward instead of sideways, simplified animations
- **Print:** Plain mode auto-activates, clean typography, no game elements

---

## Plain Mode Spec

When toggled (or when `prefers-reduced-motion` is set, or when JavaScript is disabled):

- All `.zone-scenery` elements get `display: none`
- Character hidden
- HUD hidden
- Zones become standard document flow (vertical stack)
- Clean typography, generous whitespace
- Print-friendly
- Class toggle on `<body>`: `body.plain-mode`
- Persisted in `sessionStorage` (or URL param `?plain=true`)

CSS:

```css
body.plain-mode .zone-scenery,
body.plain-mode .character,
body.plain-mode .hud,
body.plain-mode .parallax-layer {
  display: none !important;
}

body.plain-mode .zone {
  display: block;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
```

---

## Performance Budget

- **First paint:** < 1.5s
- **Total JS:** < 100KB gzipped (GSAP is ~30KB, rest is custom)
- **Total assets:** < 2MB (SVGs compress well)
- **No frameworks** — vanilla JS, no React, no bundler required
- **Deployable to GitHub Pages** with zero build step (or optional Vite for dev convenience)
- **Lazy load** zone assets — only load scenery SVGs as zones approach viewport

---

## Accessibility

- All content readable without JS
- Semantic HTML (sections, articles, headings, time elements)
- `aria-hidden="true"` on all decorative game elements
- Keyboard navigable (arrow keys for game, Tab for content)
- `prefers-reduced-motion` respected — disables animations, falls back to plain mode
- `prefers-color-scheme` support (dark mode variant)
- Skip-to-content link
- Minimum contrast ratios met in both modes

---

## Content Source of Truth

All CV content lives in `CV.md` and is rendered into the HTML.  When updating the CV, edit the markdown; a simple build script (or manual process) syncs it into `index.html`.  This means the plain text version is always canonical.

---

## Implementation Priority

### Phase 0 - Remove old content ✅
1. ~~Identify and remove the older, irrelevant app from the repo.~~

### Phase 1 — Skeleton (get it live) ✅
1. ~~Semantic HTML with all content in zones~~
2. ~~Plain mode working and print-ready~~
3. ~~Basic horizontal scroll layout (CSS scroll-snap)~~
4. ~~Mode toggle~~
5. ~~Deploy to GitHub Pages~~

### Phase 2 — Character & Movement ✅
1. ~~SVG character with idle/walk/point states~~
2. ~~Scroll-driven movement~~ (vanilla JS — GSAP not needed)
3. ~~Camera following~~
4. ~~Zone transition animations~~

### Phase 3 — Scenery & Polish *(in progress)*
1. ~~Parallax background layers~~
2. Zone-specific scenery (machines, instruments, bookshelves)
3. ~~Skill meters/gauges animation~~
4. Interactive elements (clickable machines, spec plates)
5. ~~HUD with progress bar and navigation~~

### Phase 4 — Delight
1. Sound design (optional, off by default)
2. Easter eggs (Konami code? Hidden project details?)
3. Dark mode variant
4. ~~Mobile vertical-scroll adaptation~~
5. Particle effects (sparks near machines, musical notes on stage)
