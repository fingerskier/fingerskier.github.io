
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
        <svg class="scenery-door-svg" viewBox="0 0 140 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="0" width="120" height="210" rx="6" fill="#8B5E3C" stroke="#5C3A1E" stroke-width="4"/>
          <rect x="20" y="10" width="45" height="90" rx="2" fill="#6B4226"/>
          <rect x="75" y="10" width="45" height="90" rx="2" fill="#6B4226"/>
          <rect x="20" y="110" width="45" height="90" rx="2" fill="#6B4226"/>
          <rect x="75" y="110" width="45" height="90" rx="2" fill="#6B4226"/>
          <circle cx="118" cy="115" r="8" fill="#c49a6c" stroke="#a67c52" stroke-width="2"/>
          <circle cx="118" cy="115" r="3" fill="#8B5E3C"/>
        </svg>
        <svg class="scenery-neon-sign" viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="10" width="220" height="35" rx="4" fill="rgba(45,45,45,0.8)"/>
          <text x="110" y="35" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="18" font-weight="600" letter-spacing="6" class="neon-text">WORKSHOP</text>
        </svg>
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
        <svg class="scenery-scope-svg" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="160" height="120" rx="8" fill="#333" stroke="#555" stroke-width="3"/>
          <rect x="12" y="10" width="136" height="80" rx="4" fill="#0a1a0a"/>
          <line x1="12" y1="50" x2="148" y2="50" stroke="#0a3a0a" stroke-width="0.5"/>
          <line x1="80" y1="10" x2="80" y2="90" stroke="#0a3a0a" stroke-width="0.5"/>
          <path class="scope-wave" d="M12 50 Q30 20, 48 50 T84 50 T120 50 T148 50" fill="none" stroke="#00ff44" stroke-width="2"/>
          <circle cx="30" cy="106" r="6" fill="#555" stroke="#666" stroke-width="1"/>
          <circle cx="55" cy="106" r="6" fill="#555" stroke="#666" stroke-width="1"/>
          <circle cx="130" cy="106" r="4" fill="#E8742A"/>
        </svg>
        <svg class="scenery-pegboard-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="180" rx="2" fill="#c4a882" opacity="0.3"/>
          ${[0,1,2,3,4,5,6,7].map(r => [0,1,2,3,4].map(c =>
            '<circle cx="' + (12 + c * 24) + '" cy="' + (12 + r * 22) + '" r="3" fill="rgba(0,0,0,0.15)"/>'
          ).join('')).join('')}
          <!-- wrench -->
          <rect x="20" y="25" width="6" height="50" rx="3" fill="#888" opacity="0.5" transform="rotate(-15 23 50)"/>
          <!-- screwdriver -->
          <rect x="55" y="20" width="4" height="55" rx="2" fill="#E8742A" opacity="0.4"/>
          <rect x="54" y="60" width="6" height="20" rx="1" fill="#888" opacity="0.4"/>
          <!-- pliers -->
          <rect x="90" y="30" width="5" height="40" rx="2" fill="#666" opacity="0.4" transform="rotate(10 92 50)"/>
        </svg>
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
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Spectrum Application</h4>
              <p>Core Electron app &mdash; actuator control, session management</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Electron &middot; Node.js &middot; USB-Serial</dd>
                  <dt>Deployed</dt><dd>200+ franchise locations worldwide</dd>
                  <dt>Role</dt><dd>Architect &amp; sole developer since 2017</dd>
                </dl>
              </div>
            </div>
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Spectrum UI</h4>
              <p>Touch-screen kiosk interface for members</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>React &middot; Electron renderer</dd>
                  <dt>Features</dt><dd>Session flow, real-time force display, member profiles</dd>
                </dl>
              </div>
            </div>
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>OS Chroma</h4>
              <p>Cloud API &amp; admin dashboard (Express/MySQL/AWS)</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Express &middot; Aurora MySQL &middot; AWS EB &middot; S3 &middot; SES &middot; SQS</dd>
                  <dt>Features</dt><dd>Franchise ops, member management, telemetry sync, auto-scaling</dd>
                </dl>
              </div>
            </div>
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>OS Firmware</h4>
              <p>Hardware drivers, serial protocols, safety FSM</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Node.js &middot; USB-Serial &middot; RS-232</dd>
                  <dt>Features</dt><dd>5 actuator types, 3 load-cell types, auto-detect, safety supervisor</dd>
                </dl>
              </div>
            </div>
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Believer App</h4>
              <p>Member-facing mobile/web app</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>React &middot; Express API</dd>
                  <dt>Features</dt><dd>Session history, progress tracking, appointment scheduling</dd>
                </dl>
              </div>
            </div>
            <div class="station" data-status="rnd" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led yellow"></span>
              <h4>Shrewdy</h4>
              <p>Next-gen IoT hardware (Pico W devices)</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Raspberry Pi Pico W &middot; MicroPython</dd>
                  <dt>Status</dt><dd>R&amp;D &mdash; next-generation hardware platform</dd>
                </dl>
              </div>
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
        <svg class="scenery-actuator-svg" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="140" width="60" height="50" rx="4" fill="#555" stroke="#444" stroke-width="2"/>
          <rect x="10" y="130" width="80" height="14" rx="2" fill="#666"/>
          <rect class="actuator-rod" x="38" y="30" width="24" height="100" rx="4" fill="#999" stroke="#777" stroke-width="1"/>
          <rect x="34" y="20" width="32" height="16" rx="3" fill="#E8742A"/>
          <circle cx="50" cy="165" r="5" fill="#333"/>
          <circle cx="35" cy="155" r="3" fill="#0f0" class="machine-led"/>
        </svg>
        <svg class="scenery-loadcell-svg" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="60" rx="4" fill="#222" stroke="#444" stroke-width="2"/>
          <rect x="8" y="8" width="104" height="36" rx="2" fill="#0a0a0a"/>
          <text class="loadcell-value" x="60" y="34" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="22" fill="#0f0">2847</text>
          <text x="96" y="52" font-family="JetBrains Mono, monospace" font-size="8" fill="#666">lbs</text>
        </svg>
        <svg class="scenery-conveyor-svg" viewBox="0 0 800 30" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="5" width="800" height="20" rx="3" fill="#444"/>
          <g class="conveyor-segments">
            ${Array.from({length: 20}, (_, i) =>
              '<rect x="' + (i * 40) + '" y="7" width="35" height="16" rx="1" fill="#' + (i % 2 ? '666' : '555') + '"/>'
            ).join('')}
          </g>
        </svg>
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
        <svg class="scenery-rack-svg" viewBox="0 0 80 240" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="80" height="240" rx="3" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
          <rect x="4" y="4" width="72" height="232" rx="2" fill="#1a1a1a"/>
          ${Array.from({length: 8}, (_, i) => `
            <rect x="10" y="${12 + i * 28}" width="60" height="22" rx="2" fill="#333" stroke="#444" stroke-width="1"/>
            <circle cx="20" cy="${23 + i * 28}" r="2.5" fill="${['#0f0','#0f0','#ff0','#0f0','#0ff','#0f0','#f80','#0f0'][i]}" class="rack-led"/>
            <circle cx="30" cy="${23 + i * 28}" r="2.5" fill="${['#0f0','#ff0','#0f0','#0f0','#0f0','#0ff','#0f0','#ff0'][i]}" class="rack-led"/>
            <rect x="40" y="${17 + i * 28}" width="24" height="3" rx="1" fill="#555"/>
            <rect x="40" y="${23 + i * 28}" width="24" height="3" rx="1" fill="#555"/>
          `).join('')}
        </svg>
        <svg class="scenery-cables-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q50 10, 80 30 T160 25 T200 20" fill="none" stroke="#E8742A" stroke-width="3" opacity="0.3"/>
          <path d="M0 50 Q40 60, 90 45 T180 55 T200 50" fill="none" stroke="#4A6FA5" stroke-width="3" opacity="0.3"/>
          <path d="M0 75 Q60 65, 100 80 T200 70" fill="none" stroke="#1A6B5C" stroke-width="3" opacity="0.3"/>
        </svg>
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
        <svg class="scenery-stage-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <!-- stage platform -->
          <rect x="25" y="160" width="250" height="20" rx="3" fill="#8B5E3C" opacity="0.5"/>
          <rect x="20" y="155" width="260" height="8" rx="2" fill="#a67c52" opacity="0.4"/>
          <!-- microphone stand -->
          <line x1="150" y1="60" x2="150" y2="155" stroke="#888" stroke-width="3"/>
          <circle cx="150" cy="55" r="12" fill="none" stroke="#888" stroke-width="3"/>
          <circle cx="150" cy="55" r="8" fill="#555"/>
          <line x1="140" y1="155" x2="160" y2="155" stroke="#888" stroke-width="4"/>
          <!-- guitar -->
          <g transform="translate(60, 40) rotate(15)">
            <ellipse cx="25" cy="90" rx="22" ry="28" fill="#8B5E3C" opacity="0.5"/>
            <ellipse cx="25" cy="50" rx="18" ry="22" fill="#a67c52" opacity="0.5"/>
            <rect x="22" y="0" width="6" height="55" rx="2" fill="#5C3A1E" opacity="0.5"/>
            <circle cx="25" cy="90" r="6" fill="#5C3A1E" opacity="0.3"/>
          </g>
          <!-- floating notes -->
          <text class="music-note note-1" x="200" y="80" font-size="24" fill="#E8742A" opacity="0.5">&#9835;</text>
          <text class="music-note note-2" x="230" y="60" font-size="18" fill="#4A6FA5" opacity="0.4">&#9834;</text>
          <text class="music-note note-3" x="180" y="40" font-size="20" fill="#1A6B5C" opacity="0.4">&#9833;</text>
        </svg>
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
        <svg class="scenery-bookshelf-svg" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
          <!-- shelf frame -->
          <rect x="0" y="0" width="140" height="200" rx="2" fill="#8B5E3C" opacity="0.25"/>
          <rect x="5" y="0" width="130" height="3" fill="#6B4226" opacity="0.4"/>
          <!-- shelf 1 -->
          <rect x="5" y="48" width="130" height="3" fill="#6B4226" opacity="0.4"/>
          <rect x="10" y="8" width="12" height="38" rx="1" fill="#4A6FA5" opacity="0.4"/>
          <rect x="24" y="12" width="10" height="34" rx="1" fill="#E8742A" opacity="0.35"/>
          <rect x="36" y="6" width="14" height="40" rx="1" fill="#1A6B5C" opacity="0.4"/>
          <rect x="52" y="14" width="9" height="32" rx="1" fill="#8B5E3C" opacity="0.5"/>
          <rect x="63" y="8" width="13" height="38" rx="1" fill="#4A6FA5" opacity="0.3"/>
          <rect x="78" y="10" width="11" height="36" rx="1" fill="#E8742A" opacity="0.4"/>
          <rect x="91" y="6" width="15" height="40" rx="1" fill="#2D2D2D" opacity="0.3"/>
          <rect x="108" y="12" width="10" height="34" rx="1" fill="#1A6B5C" opacity="0.35"/>
          <!-- shelf 2 -->
          <rect x="5" y="98" width="130" height="3" fill="#6B4226" opacity="0.4"/>
          <rect x="12" y="56" width="14" height="40" rx="1" fill="#1A6B5C" opacity="0.35"/>
          <rect x="28" y="60" width="10" height="36" rx="1" fill="#2D2D2D" opacity="0.35"/>
          <rect x="40" y="54" width="12" height="42" rx="1" fill="#E8742A" opacity="0.3"/>
          <rect x="54" y="58" width="16" height="38" rx="1" fill="#4A6FA5" opacity="0.4"/>
          <rect x="72" y="55" width="11" height="41" rx="1" fill="#8B5E3C" opacity="0.4"/>
          <rect x="85" y="62" width="13" height="34" rx="1" fill="#1A6B5C" opacity="0.4"/>
          <!-- shelf 3 -->
          <rect x="5" y="148" width="130" height="3" fill="#6B4226" opacity="0.4"/>
          <rect x="10" y="106" width="11" height="40" rx="1" fill="#E8742A" opacity="0.35"/>
          <rect x="23" y="110" width="15" height="36" rx="1" fill="#4A6FA5" opacity="0.35"/>
          <rect x="40" y="104" width="10" height="42" rx="1" fill="#2D2D2D" opacity="0.3"/>
          <rect x="52" y="108" width="13" height="38" rx="1" fill="#1A6B5C" opacity="0.4"/>
        </svg>
        <svg class="scenery-chalkboard-svg" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="180" height="120" rx="2" fill="#8B5E3C" opacity="0.4"/>
          <rect x="6" y="6" width="168" height="108" rx="2" fill="#2a4a2a"/>
          <!-- equation -->
          <text x="20" y="35" font-family="Source Serif 4, serif" font-size="12" fill="rgba(255,255,255,0.6)" font-style="italic">dy/dx = ky</text>
          <text x="20" y="60" font-family="Source Serif 4, serif" font-size="12" fill="rgba(255,255,255,0.5)" font-style="italic">y = Ce^(kx)</text>
          <text x="20" y="95" font-family="Source Serif 4, serif" font-size="10" fill="rgba(255,255,255,0.35)">Q.E.D.</text>
          <!-- chalk dust -->
          <rect x="30" y="108" width="40" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
          <rect x="90" y="108" width="20" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
        </svg>
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
        <svg class="scenery-exit-svg" viewBox="0 0 180 260" xmlns="http://www.w3.org/2000/svg">
          <!-- door frame -->
          <rect x="20" y="10" width="120" height="220" rx="4" fill="#ccc" stroke="#aaa" stroke-width="3"/>
          <!-- daylight gradient through door -->
          <defs>
            <linearGradient id="daylight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#87CEEB"/>
              <stop offset="60%" stop-color="#F0E68C"/>
              <stop offset="100%" stop-color="#FAF8F5"/>
            </linearGradient>
          </defs>
          <rect x="30" y="18" width="100" height="205" rx="2" fill="url(#daylight)"/>
          <!-- door panels (partially open) -->
          <rect x="25" y="15" width="40" height="210" rx="2" fill="#ddd" stroke="#bbb" stroke-width="1" transform="skewY(-2)" opacity="0.7"/>
          <!-- handle -->
          <rect x="58" y="120" width="4" height="20" rx="2" fill="#888"/>
        </svg>
        <svg class="scenery-mailbox-svg" viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg">
          <!-- post -->
          <rect x="21" y="40" width="8" height="40" fill="#666"/>
          <!-- box -->
          <rect x="5" y="10" width="40" height="32" rx="4" fill="#4A6FA5"/>
          <path d="M5 26 Q25 10 45 26" fill="#3a5f95"/>
          <!-- flag -->
          <rect class="mailbox-flag" x="42" y="14" width="4" height="18" rx="1" fill="#E8742A"/>
        </svg>
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
  const appEl = document.getElementById('app')
  const plain = sessionStorage.getItem('cv-plain') === 'true' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  appEl.innerHTML = `
    <div class="icv${plain ? ' plain-mode' : ''}">
      <a href="#main-content" class="skip-link">Skip to content</a>

      <div class="parallax-layer parallax-sky" aria-hidden="true"></div>
      <div class="parallax-layer parallax-wall" aria-hidden="true"></div>

      <div class="hud" role="navigation" aria-label="CV navigation">
        <div class="hud-left">
          <button class="hud-home" aria-label="Go to start">&larr;</button>
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

  /* ── Home button ── */
  const homeBtn = root.querySelector('.hud-home')
  homeBtn.addEventListener('click', () => {
    if (isPlain) {
      zones[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      zones[0].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    }
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
      clearTimeout(character._pt)
      character.classList.remove('pointing')
      character._wt = setTimeout(() => {
        character.classList.remove('walking')
        character._pt = setTimeout(() => character.classList.add('pointing'), 400)
      }, 200)

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

  /* ── Station spec plates ── */
  const stations = root.querySelectorAll('.station')
  stations.forEach(station => {
    station.addEventListener('click', () => {
      const wasOpen = station.classList.contains('expanded')
      stations.forEach(s => {
        s.classList.remove('expanded')
        s.setAttribute('aria-expanded', 'false')
      })
      if (!wasOpen) {
        station.classList.add('expanded')
        station.setAttribute('aria-expanded', 'true')
      }
    })
  })

  /* ── LED blink ── */
  const leds = root.querySelectorAll('.status-led')
  const intervals = []
  leds.forEach(led => {
    intervals.push(setInterval(() => led.classList.toggle('blink'), 800 + Math.random() * 1500))
  })

  /* ── Load cell display tick ── */
  const loadcellVal = root.querySelector('.loadcell-value')
  if (loadcellVal) {
    intervals.push(setInterval(() => {
      loadcellVal.textContent = (2800 + Math.floor(Math.random() * 100)).toString()
    }, 600))
  }

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
