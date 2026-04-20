(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(l){if(l.ep)return;l.ep=!0;const n=a(l);fetch(l.href,n)}})();let k=null;async function le(){return k||(k=await(await fetch("./cv.json")).json(),k)}function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function re(e){return Object.entries(e).filter(([i])=>i!=="Email").map(([i,a])=>`<a href="${p(a)}" target="_blank" rel="noopener">${p(i)}</a>`).join(`
          `)}function ne(e){return e.split(/\.\s+/).filter(i=>i.trim()).map(i=>{const a=i.endsWith(".")?i:i+".";return`<li>${p(a)}</li>`}).join(`
            `)}const oe=`
          <div class="project-stations">
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Spectrum Application</h4>
              <p>Core app &mdash; actuator control, session management</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Desktop &middot; I/O &middot; custom H/W</dd>
                  <dt>Deployed</dt><dd>200+ franchise locations worldwide</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Member Assessment Kiosk</h4>
              <p>Touch-screen control, multi-screen kiosk for member health assessments</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Embedded Desktop UI</dd>
                  <dt>Features</dt><dd>Session flow, real-time force display, member profiles</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Cloud Infrastructure</h4>
              <p>Cloud API &amp; admin dashboard &amp; databases</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Servers &middot; Databases &middot; Load-Balancing &middot; Data-Lake &middot; Cross-x Messaging</dd>
                  <dt>Features</dt><dd>Franchise ops, member management, telemetry sync, auto-scaling</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Firmware</h4>
              <p>Next-gen IoT hardware (h/w drivers, protocols, safety FSM)</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt>
                  <dd>Node.js &middot; Micropython &middot; C</dd>

                  <dt>Features</dt>
                  <dd>Multiple types of actuators, load-cells and sensors;  Automatic h/w detect &amp; safety supervisor</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Member Journey App</h4>
              <p>Member-facing mobile/web apps</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>Cloud API server</dd>
                  <dt>Stack</dt><dd>PWA &middot; web-app</dd>
                  <dt>Stack</dt><dd>Android/iOS &middot; mobile-apps</dd>
                  <dt>Features</dt><dd>Session history, progress tracking, appointment scheduling</dd>
                </dl>
              </div>
            </div>
          </div>`,ce=`
          <div class="project-stations">
            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Coiled-Tubing Unit Auto-Driller</h4>
              <p>PLC-based automated control for coiled-tubing operations</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>PLC &middot; SCADA &middot; HMI</dd>
                  <dt>Features</dt><dd>Automated drilling control, real-time instrument monitoring, historical trending</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Automated Nitrogen Pump</h4>
              <p>Automated control system for nitrogen pumping units</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>PLC &middot; SCADA &middot; HMI</dd>
                  <dt>Features</dt><dd>Pressure &amp; flow control, safety interlocks, minimalist operator interface</dd>
                </dl>
              </div>
            </div>

            <div class="station" data-status="active" tabindex="0" role="button" aria-expanded="false">
              <span class="status-led green"></span>
              <h4>Automated Drilling-Fluid Pump</h4>
              <p>Automated control system for drilling fluid pump units</p>
              <div class="spec-plate">
                <dl>
                  <dt>Stack</dt><dd>PLC &middot; SCADA &middot; HMI</dd>
                  <dt>Features</dt><dd>Fluid management, automated mixing control, operational logging</dd>
                </dl>
              </div>
            </div>
          </div>`;function de(e){return e.experience.map(i=>{const a=i.company==="Turing Automations",o=i.company==="Premier Coil Solutions",l=i.location?` &middot; ${p(i.location)}`:"",n=a?oe:o?ce:"";return`
        <article class="role">
          <h3>${p(i.company)} &mdash; ${p(i.title)}</h3>
          <time>${p(i.dates)}${l}</time>
          <ul>
            ${ne(i.responsibilities)}
          </ul>${n}
        </article>`}).join(`
`)}function pe(e){return e.education.map(i=>`<li><strong>${p(i.degree)}</strong> &mdash; ${p(i.institution)}, ${i.year}</li>`).join(`
          `)}const M=[{id:"entryway",label:"Entryway",content:e=>`
      <div class="zone-content">
        <h1>${p(e.name)}</h1>
        <p class="cv-title">Co-Founder &amp; Principal Engineer &mdash; Turing Automations</p>
        <p class="cv-tagline">Creator of things &middot; Songwriter &middot; Thinkster</p>
        <div class="cv-links">
          ${re(e.links)}
          <a href="#projects" class="projects-link">Projects</a>
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
    `},{id:"workbench",label:"Workbench",content:e=>`
      <div class="zone-content">
        <h2>Skills &amp; Technologies</h2>
        <div class="skills-shelf">
          <div class="skill-group">
            <h3>Languages &amp; Runtime</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">JavaScript / Node.js</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Python</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">HTML / CSS</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">SQL</span><span class="meter" data-level="75"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">PLC / IEC 61131-3</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Frameworks &amp; Tools</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">Desktop (Electron, Tauri, etc.)</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Web (React, Express, etc.)</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Mobile (React Native, Flutter, Kotlin)</span><span class="meter" data-level="60"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Embedded (Micropython, Codesys, Siemens)</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Hardware &amp; Embedded</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">Serial Protocols</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Sensors &amp; Actuators</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Raspberry Pi / Pico W</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Safety FSMs</span><span class="meter" data-level="90"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">Industrial Control Systems</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Infrastructure</h3>
            <ul class="skill-meters">
              <li><span class="skill-name">Cloud (AWS, Azure, GCP)</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
              <li><span class="skill-name">Auto-update Systems</span><span class="meter" data-level="85"></span><span class="skill-label">Expert</span></li>
              <li><span class="skill-name">CI/CD Pipelines</span><span class="meter" data-level="70"></span><span class="skill-label">Advanced</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="zone-scenery">
        <svg class="scenery-scope-svg scenery-clickable" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg"
             tabindex="0" role="button" aria-label="Oscilloscope: details"
             data-info-title="Oscilloscope"
             data-info-body="Signal debugging across serial protocols (UART, SPI, I²C, RS-485) and hardware bring-up of custom boards.">
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
          ${[0,1,2,3,4,5,6,7].map(i=>[0,1,2,3,4].map(a=>'<circle cx="'+(12+a*24)+'" cy="'+(12+i*22)+'" r="3" fill="rgba(0,0,0,0.15)"/>').join("")).join("")}
          <!-- wrench -->
          <rect x="20" y="25" width="6" height="50" rx="3" fill="#888" opacity="0.5" transform="rotate(-15 23 50)"/>
          <!-- screwdriver -->
          <rect x="55" y="20" width="4" height="55" rx="2" fill="#E8742A" opacity="0.4"/>
          <rect x="54" y="60" width="6" height="20" rx="1" fill="#888" opacity="0.4"/>
          <!-- pliers -->
          <rect x="90" y="30" width="5" height="40" rx="2" fill="#666" opacity="0.4" transform="rotate(10 92 50)"/>
        </svg>
      </div>
    `},{id:"floor",label:"The Floor",content:e=>`
      <div class="zone-content">
        <h2>Experience</h2>
        ${de(e)}
      </div>
      <div class="zone-scenery">
        <svg class="scenery-actuator-svg scenery-clickable" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg"
             tabindex="0" role="button" aria-label="Linear actuator: details"
             data-info-title="Linear Actuator"
             data-info-body="Safety-supervised position control with load-cell feedback. Programmed for Spectrum Application force profiles.">
          <rect x="20" y="140" width="60" height="50" rx="4" fill="#555" stroke="#444" stroke-width="2"/>
          <rect x="10" y="130" width="80" height="14" rx="2" fill="#666"/>
          <rect class="actuator-rod" x="38" y="30" width="24" height="100" rx="4" fill="#999" stroke="#777" stroke-width="1"/>
          <rect x="34" y="20" width="32" height="16" rx="3" fill="#E8742A"/>
          <circle cx="50" cy="165" r="5" fill="#333"/>
          <circle cx="35" cy="155" r="3" fill="#0f0" class="machine-led"/>
          <g class="actuator-sparks">
            <circle class="spark spark-1" cx="50" cy="22" r="1.5" fill="#ffb347"/>
            <circle class="spark spark-2" cx="46" cy="22" r="1" fill="#ff7a2e"/>
            <circle class="spark spark-3" cx="54" cy="22" r="1.2" fill="#ffd166"/>
            <circle class="spark spark-4" cx="48" cy="22" r="0.9" fill="#ff9640"/>
          </g>
        </svg>
        <svg class="scenery-loadcell-svg scenery-clickable" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg"
             tabindex="0" role="button" aria-label="Load cell readout: details"
             data-info-title="Load Cell"
             data-info-body="Real-time force measurement. Drives member assessment scoring and safety cutoffs in the Spectrum platform.">
          <rect x="0" y="0" width="120" height="60" rx="4" fill="#222" stroke="#444" stroke-width="2"/>
          <rect x="8" y="8" width="104" height="36" rx="2" fill="#0a0a0a"/>
          <text class="loadcell-value" x="60" y="34" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="22" fill="#0f0">2847</text>
          <text x="96" y="52" font-family="JetBrains Mono, monospace" font-size="8" fill="#666">lbs</text>
        </svg>
        <svg class="scenery-conveyor-svg" viewBox="0 0 800 30" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="5" width="800" height="20" rx="3" fill="#444"/>
          <g class="conveyor-segments">
            ${Array.from({length:20},(i,a)=>'<rect x="'+a*40+'" y="7" width="35" height="16" rx="1" fill="#'+(a%2?"666":"555")+'"/>').join("")}
          </g>
        </svg>
      </div>
    `},{id:"rack",label:"The Rack",content:e=>`
      <div class="zone-content">
        <h2>Architecture &amp; DevOps</h2>
        <ul>
          <li>Electron app packaging and distribution across a fleet of Windows and Linux devices</li>
          <li>AWS architecture: Elastic Beanstalk, Aurora MySQL Serverless, ELB with auto-scaling</li>
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
      <div class="zone-scenery">
        <svg class="scenery-rack-svg scenery-clickable" viewBox="0 0 80 240" xmlns="http://www.w3.org/2000/svg"
             tabindex="0" role="button" aria-label="Server rack: details"
             data-info-title="Server Rack"
             data-info-body="AWS Elastic Beanstalk fleet, Aurora MySQL Serverless, auto-scaling load balancers serving 200+ franchise locations.">
          <rect x="0" y="0" width="80" height="240" rx="3" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
          <rect x="4" y="4" width="72" height="232" rx="2" fill="#1a1a1a"/>
          ${Array.from({length:8},(i,a)=>`
            <rect x="10" y="${12+a*28}" width="60" height="22" rx="2" fill="#333" stroke="#444" stroke-width="1"/>
            <circle cx="20" cy="${23+a*28}" r="2.5" fill="${["#0f0","#0f0","#ff0","#0f0","#0ff","#0f0","#f80","#0f0"][a]}" class="rack-led"/>
            <circle cx="30" cy="${23+a*28}" r="2.5" fill="${["#0f0","#ff0","#0f0","#0f0","#0f0","#0ff","#0f0","#ff0"][a]}" class="rack-led"/>
            <rect x="40" y="${17+a*28}" width="24" height="3" rx="1" fill="#555"/>
            <rect x="40" y="${23+a*28}" width="24" height="3" rx="1" fill="#555"/>
          `).join("")}
        </svg>
        <svg class="scenery-cables-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q50 10, 80 30 T160 25 T200 20" fill="none" stroke="#E8742A" stroke-width="3" opacity="0.3"/>
          <path d="M0 50 Q40 60, 90 45 T180 55 T200 50" fill="none" stroke="#4A6FA5" stroke-width="3" opacity="0.3"/>
          <path d="M0 75 Q60 65, 100 80 T200 70" fill="none" stroke="#1A6B5C" stroke-width="3" opacity="0.3"/>
        </svg>
      </div>
    `},{id:"stage",label:"The Stage",content:e=>`
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
          <text class="music-note note-4" x="140" y="70" font-size="16" fill="#E8742A" opacity="0.4">&#9834;</text>
          <text class="music-note note-5" x="260" y="90" font-size="22" fill="#1A6B5C" opacity="0.45">&#9839;</text>
          <text class="music-note note-6" x="120" y="50" font-size="14" fill="#4A6FA5" opacity="0.4">&#9837;</text>
        </svg>
      </div>
    `},{id:"library",label:"The Library",content:e=>`
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
          ${pe(e)}
        </ul>
      </div>
      <div class="zone-scenery">
        <svg class="scenery-bookshelf-svg scenery-clickable" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg"
             tabindex="0" role="button" aria-label="Bookshelf: details"
             data-info-title="Bookshelf"
             data-info-body="LEAN proofs, Knuth, Feynman, hymnals, philosophy. Books I actually reach for, not shelf décor.">
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
    `},{id:"exit",label:"The Exit",content:e=>`
      <div class="zone-content">
        <h2>Let&rsquo;s build something.</h2>
        <div class="contact-links">
          ${["GitHub","LinkedIn","X"].filter(i=>e.links[i]).map(i=>{const a=e.links[i],o=a.replace(/^https?:\/\//,"");return`<a href="${p(a)}" target="_blank" rel="noopener">${p(o)}</a>`}).join(`
          `)}
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
    `}];function he(){return`
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
  </svg>`}async function ue(){const e=document.getElementById("app"),i=sessionStorage.getItem("cv-plain")==="true"||window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=document.documentElement.dataset.theme||"light",o=await le();e.innerHTML=`
    <div class="icv${i?" plain-mode":""}" data-theme="${a}">
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
            ${M.map((l,n)=>`<button class="hud-dot${n===0?" active":""}" data-zone-index="${n}" title="${l.label}"></button>`).join("")}
          </div>
          <button class="theme-toggle" aria-label="Toggle dark mode">${a==="dark"?"☀️":"🌙"}</button>
          <button class="sound-toggle" aria-label="Toggle sound" aria-pressed="false">🔇</button>
          <button class="mode-toggle" aria-label="Toggle plain mode">${i?"🎮":"📄"}</button>
        </div>
      </div>

      <div class="character" aria-hidden="true">
        ${he()}
      </div>

      <div class="scenery-tooltip" role="dialog" aria-live="polite" hidden>
        <button class="scenery-tooltip-close" aria-label="Close">&times;</button>
        <h4 class="scenery-tooltip-title"></h4>
        <p class="scenery-tooltip-body"></p>
      </div>

      <div class="easter-egg" role="dialog" aria-modal="true" aria-labelledby="ee-title" hidden>
        <div class="easter-egg-card">
          <button class="easter-egg-close" aria-label="Close">&times;</button>
          <div class="easter-egg-konami">&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; B A</div>
          <h3 id="ee-title">SECRET LEVEL UNLOCKED</h3>
          <ul class="easter-egg-facts">
            <li>Father of 5. Husband of 1.</li>
            <li>Writes songs and proofs with equal seriousness.</li>
            <li>First program: a BASIC text adventure, age 9.</li>
            <li>Believes maintainable code is a love language.</li>
            <li>If you found this, you&rsquo;re exactly the kind of person I like working with.</li>
          </ul>
          <p class="easter-egg-hint">Press <kbd>Esc</kbd> to return to the workshop.</p>
        </div>
      </div>

      <div class="zones-track" id="main-content">
        ${M.map((l,n)=>`
          <section class="zone" id="zone-${l.id}" data-zone="${l.id}" data-zone-index="${n}">
            ${l.content(o)}
          </section>
        `).join("")}
      </div>
    </div>
  `,ge(e,i)}function ge(e,i){const a=e.querySelector(".icv"),o=e.querySelector(".zones-track"),l=e.querySelector(".character"),n=Array.from(e.querySelectorAll(".zone")),f=e.querySelector(".hud-progress-fill"),Y=e.querySelector(".hud-zone-label"),D=Array.from(e.querySelectorAll(".hud-dot")),P=e.querySelector(".mode-toggle"),z=e.querySelector(".parallax-sky"),q=e.querySelector(".parallax-wall");let c=i,A=0,S=-1;P.addEventListener("click",()=>{c=!c,a.classList.toggle("plain-mode",c),sessionStorage.setItem("cv-plain",String(c)),P.textContent=c?"🎮":"📄"});const E=e.querySelector(".sound-toggle");let g=!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&localStorage.getItem("cv-sound")==="on",C=null;const L=[392,440,523.25,587.33,659.25,739.99,830.61];function F(){E.textContent=g?"🔊":"🔇",E.setAttribute("aria-pressed",String(g))}F();function Z(){return C||(C=new(window.AudioContext||window.webkitAudioContext)),C}function j(t){if(!g)return;const s=Z(),r=s.currentTime,d=s.createOscillator(),y=s.createGain();d.type="sine",d.frequency.setValueAtTime(t,r),y.gain.setValueAtTime(0,r),y.gain.linearRampToValueAtTime(.08,r+.015),y.gain.exponentialRampToValueAtTime(5e-4,r+.28),d.connect(y).connect(s.destination),d.start(r),d.stop(r+.32)}E.addEventListener("click",()=>{g=!g,localStorage.setItem("cv-sound",g?"on":"off"),F(),g&&j(L[0])});const B=e.querySelector(".theme-toggle");B.addEventListener("click",()=>{const t=a.dataset.theme==="dark";a.dataset.theme=t?"light":"dark",document.documentElement.dataset.theme=a.dataset.theme,localStorage.setItem("cv-theme",a.dataset.theme),B.textContent=t?"🌙":"☀️"}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{if(!localStorage.getItem("cv-theme")){const s=t.matches?"dark":"light";a.dataset.theme=s,document.documentElement.dataset.theme=s,B.textContent=t.matches?"☀️":"🌙"}}),e.querySelector(".hud-home").addEventListener("click",()=>{c?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n[0].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}),D.forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.dataset.zoneIndex,10);c?n[s].scrollIntoView({behavior:"smooth",block:"start"}):n[s].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})})});function x(){if(c){const s=window.scrollY||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-window.innerHeight;f.style.width=(r>0?s/r*100:0)+"%"}else{const s=o.scrollLeft,r=o.scrollWidth-o.clientWidth,d=r>0?s/r:0;f.style.width=d*100+"%";const y=d*(o.clientWidth-80);l.style.transform=`translateX(${y}px)`,Math.abs(s-A)>1&&(l.classList.add("walking"),l.classList.toggle("facing-left",s<A)),A=s,clearTimeout(l._wt),clearTimeout(l._pt),l.classList.remove("pointing"),l._wt=setTimeout(()=>{l.classList.remove("walking"),l._pt=setTimeout(()=>l.classList.add("pointing"),400)},200),z&&(z.style.transform=`translateX(${-s*.1}px)`),q&&(q.style.transform=`translateX(${-s*.3}px)`)}let t=0;if(c){for(let s=n.length-1;s>=0;s--)if(n[s].getBoundingClientRect().top<=window.innerHeight/3){t=s;break}}else for(let s=n.length-1;s>=0;s--)if(n[s].getBoundingClientRect().left<=o.clientWidth/2){t=s;break}t!==S&&(Y.textContent=M[t].label,D.forEach((s,r)=>s.classList.toggle("active",r===t)),S!==-1&&j(L[t%L.length]),S=t)}o.addEventListener("scroll",x),window.addEventListener("scroll",x);function R(t){c||(t.key==="ArrowRight"?o.scrollBy({left:400,behavior:"smooth"}):t.key==="ArrowLeft"&&o.scrollBy({left:-400,behavior:"smooth"}))}window.addEventListener("keydown",R);const ee=e.querySelectorAll(".meter"),T=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("filled"),T.unobserve(s.target))})},{threshold:.2});ee.forEach(t=>T.observe(t));const O=e.querySelectorAll(".station");function H(t){const s=t.classList.contains("expanded");O.forEach(r=>{r.classList.remove("expanded"),r.setAttribute("aria-expanded","false")}),s||(t.classList.add("expanded"),t.setAttribute("aria-expanded","true"))}O.forEach(t=>{t.addEventListener("click",()=>H(t)),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),H(t))})});const u=e.querySelector(".scenery-tooltip"),te=u.querySelector(".scenery-tooltip-title"),se=u.querySelector(".scenery-tooltip-body"),V=u.querySelector(".scenery-tooltip-close");function W(t){const s=t.getAttribute("data-info-title")||"",r=t.getAttribute("data-info-body")||"";te.textContent=s,se.textContent=r,u.hidden=!1,u.classList.add("visible"),V.focus()}function _(){u.classList.remove("visible"),u.hidden=!0}V.addEventListener("click",_),e.querySelectorAll(".scenery-clickable").forEach(t=>{t.addEventListener("click",()=>W(t)),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),W(t))})}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!u.hidden&&_()});const $=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let m=[];const h=e.querySelector(".easter-egg"),N=h.querySelector(".easter-egg-close");function ie(){h.hidden&&(h.hidden=!1,requestAnimationFrame(()=>h.classList.add("visible")),N.focus())}function I(){h.classList.remove("visible"),setTimeout(()=>{h.hidden=!0},250)}N.addEventListener("click",I),h.addEventListener("click",t=>{t.target===h&&I()});function G(t){const s=t.key.length===1?t.key.toLowerCase():t.key;m.push(s),m.length>$.length&&m.shift(),m.length===$.length&&m.every((r,d)=>r===$[d])&&(m=[],ie()),t.key==="Escape"&&!h.hidden&&I()}window.addEventListener("keydown",G);const ae=e.querySelectorAll(".status-led"),v=[];ae.forEach(t=>{v.push(setInterval(()=>t.classList.toggle("blink"),800+Math.random()*1500))});const Q=e.querySelector(".loadcell-value");Q&&v.push(setInterval(()=>{Q.textContent=(2800+Math.floor(Math.random()*100)).toString()},600));function K(t,s){const r=document.createElement("span");r.classList.add("particle",`particle-${s}`),r.setAttribute("aria-hidden","true");const d=Math.random()*100;r.style.left=d+"%",r.style.setProperty("--drift",(Math.random()-.5)*40+"px"),s==="spark"?r.textContent=["*","•","✱"][Math.floor(Math.random()*3)]:r.textContent=["♫","♪","♩","♬"][Math.floor(Math.random()*4)],t.appendChild(r),r.addEventListener("animationend",()=>r.remove())}const w=e.querySelector("#zone-floor .zone-scenery"),b=e.querySelector("#zone-stage .zone-scenery");w&&v.push(setInterval(()=>{!c&&w.getBoundingClientRect().right>0&&w.getBoundingClientRect().left<window.innerWidth&&K(w,"spark")},800)),b&&v.push(setInterval(()=>{!c&&b.getBoundingClientRect().right>0&&b.getBoundingClientRect().left<window.innerWidth&&K(b,"note")},1200));const U=new MutationObserver(()=>{e.querySelector(".icv")||(window.removeEventListener("keydown",R),window.removeEventListener("keydown",G),window.removeEventListener("scroll",x),v.forEach(clearInterval),T.disconnect(),U.disconnect())});U.observe(e,{childList:!0}),requestAnimationFrame(x)}const fe=[{id:"brain-train",label:"Brain-Train",description:"Cognitive training &amp; educational tools",projects:[{name:"GRE Prep",url:"https://fingerskier.github.io/gre_prep",repo:"https://github.com/fingerskier/gre_prep",description:"GRE preparation tool"},{name:"SpeakEasy",url:"https://fingerskier.github.io/speakeasy",repo:"https://github.com/fingerskier/speakeasy",description:"Speech &amp; communication practice"},{name:"NumberSense",url:"https://fingerskier.github.io/numbersense",repo:"https://github.com/fingerskier/numbersense",description:"Numerical intuition trainer"},{name:"PsyDev",url:"https://psydev.vercel.app",description:"Psychology &amp; development app"}]},{id:"simulations",label:"Simulations &amp; Visualizations",description:"Interactive simulations and visual experiments",projects:[{name:"SolarSystem",url:"https://fingerskier.github.io/SolarSystem",repo:"https://github.com/fingerskier/SolarSystem",description:"Interactive solar system simulation"},{name:"Biologize Me",url:"https://fingerskier.github.io/biologize_me",repo:"https://github.com/fingerskier/biologize_me",description:"Biology-inspired visualization experiment"}]},{id:"tools",label:"Tools &amp; Utilities",description:"Standalone applications &amp; services",projects:[{name:"Poemia MCP",url:"https://poemia-mcp.vercel.app",description:"Poetry generation MCP server"},{name:"Reqall",url:"https://reqall.net",description:"Memory &amp; recall assistant"},{name:"Intelligence For Me",url:"https://intelligencefor.me",description:"Personal intelligence dashboard"}]}];function me(){const e=document.getElementById("app");e.innerHTML=`
    <div class="icv projects-page">
      <div class="hud" role="navigation" aria-label="Projects navigation">
        <div class="hud-left">
          <a href="#" class="hud-home" aria-label="Back to CV">&larr;</a>
          <span class="hud-zone-label">Projects</span>
        </div>
        <div class="hud-progress">
          <div class="hud-progress-fill" style="width:100%"></div>
        </div>
      </div>

      <main class="projects-main">
        <h1>Projects &amp; Sites</h1>
        <p class="projects-subtitle">Public repositories, apps, and experiments.</p>

        <div class="projects-grid">
          ${fe.map(i=>`
            <section class="project-category" id="cat-${i.id}">
              <h2>${i.label}</h2>
              <p class="category-desc">${i.description}</p>
              <div class="category-items">
                ${i.projects.map(a=>`
                  <div class="project-card">
                    <h3>${a.name}</h3>
                    <p>${a.description}</p>
                    <div class="project-links">
                      ${a.url?`<a href="${a.url}" target="_blank" rel="noopener" aria-label="Visit ${a.name} site">Visit</a>`:""}
                      ${a.repo?`<a href="${a.repo}" target="_blank" rel="noopener" aria-label="View ${a.name} repository">Repo</a>`:""}
                    </div>
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </main>
    </div>
  `}let J=null;async function X(){const e=window.location.hash==="#projects"?"projects":"cv";e!==J&&(J=e,e==="projects"?me():await ue())}window.addEventListener("hashchange",X);X();
