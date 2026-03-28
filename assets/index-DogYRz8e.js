(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();let m=null;async function M(){return m||(m=await(await fetch("./cv.json")).json(),m)}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(e){return Object.entries(e).filter(([t])=>t!=="Email").map(([t,s])=>`<a href="${o(s)}" target="_blank" rel="noopener">${o(t)}</a>`).join(`
          `)}function z(e){return e.split(/\.\s+/).filter(t=>t.trim()).map(t=>{const s=t.endsWith(".")?t:t+".";return`<li>${o(s)}</li>`}).join(`
            `)}const F=`
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
          </div>`,q=`
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
          </div>`;function O(e){return e.experience.map(t=>{const s=t.company==="Turing Automations",n=t.company==="Premier Coil Solutions",i=t.location?` &middot; ${o(t.location)}`:"",l=s?F:n?q:"";return`
        <article class="role">
          <h3>${o(t.company)} &mdash; ${o(t.title)}</h3>
          <time>${o(t.dates)}${i}</time>
          <ul>
            ${z(t.responsibilities)}
          </ul>${l}
        </article>`}).join(`
`)}function H(e){return e.education.map(t=>`<li><strong>${o(t.degree)}</strong> &mdash; ${o(t.institution)}, ${t.year}</li>`).join(`
          `)}const y=[{id:"entryway",label:"Entryway",content:e=>`
      <div class="zone-content">
        <h1>${o(e.name)}</h1>
        <p class="cv-title">Co-Founder &amp; Principal Engineer &mdash; Turing Automations</p>
        <p class="cv-tagline">Creator of things &middot; Songwriter &middot; Thinkster</p>
        <div class="cv-links">
          ${j(e.links)}
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
          ${[0,1,2,3,4,5,6,7].map(t=>[0,1,2,3,4].map(s=>'<circle cx="'+(12+s*24)+'" cy="'+(12+t*22)+'" r="3" fill="rgba(0,0,0,0.15)"/>').join("")).join("")}
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
        ${O(e)}
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
            ${Array.from({length:20},(t,s)=>'<rect x="'+s*40+'" y="7" width="35" height="16" rx="1" fill="#'+(s%2?"666":"555")+'"/>').join("")}
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
      <div class="zone-scenery" aria-hidden="true">
        <svg class="scenery-rack-svg" viewBox="0 0 80 240" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="80" height="240" rx="3" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
          <rect x="4" y="4" width="72" height="232" rx="2" fill="#1a1a1a"/>
          ${Array.from({length:8},(t,s)=>`
            <rect x="10" y="${12+s*28}" width="60" height="22" rx="2" fill="#333" stroke="#444" stroke-width="1"/>
            <circle cx="20" cy="${23+s*28}" r="2.5" fill="${["#0f0","#0f0","#ff0","#0f0","#0ff","#0f0","#f80","#0f0"][s]}" class="rack-led"/>
            <circle cx="30" cy="${23+s*28}" r="2.5" fill="${["#0f0","#ff0","#0f0","#0f0","#0f0","#0ff","#0f0","#ff0"][s]}" class="rack-led"/>
            <rect x="40" y="${17+s*28}" width="24" height="3" rx="1" fill="#555"/>
            <rect x="40" y="${23+s*28}" width="24" height="3" rx="1" fill="#555"/>
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
          ${H(e)}
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
    `},{id:"exit",label:"The Exit",content:e=>`
      <div class="zone-content">
        <h2>Let&rsquo;s build something.</h2>
        <div class="contact-links">
          ${["GitHub","LinkedIn","X"].filter(t=>e.links[t]).map(t=>{const s=e.links[t],n=s.replace(/^https?:\/\//,"");return`<a href="${o(s)}" target="_blank" rel="noopener">${o(n)}</a>`}).join(`
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
    `}];function R(){return`
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
  </svg>`}async function _(){const e=document.getElementById("app"),t=sessionStorage.getItem("cv-plain")==="true"||window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=document.documentElement.dataset.theme||"light",n=await M();e.innerHTML=`
    <div class="icv${t?" plain-mode":""}" data-theme="${s}">
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
            ${y.map((i,l)=>`<button class="hud-dot${l===0?" active":""}" data-zone-index="${l}" title="${i.label}"></button>`).join("")}
          </div>
          <button class="theme-toggle" aria-label="Toggle dark mode">${s==="dark"?"☀️":"🌙"}</button>
          <button class="mode-toggle" aria-label="Toggle plain mode">${t?"🎮":"📄"}</button>
        </div>
      </div>

      <div class="character" aria-hidden="true">
        ${R()}
      </div>

      <div class="zones-track" id="main-content">
        ${y.map((i,l)=>`
          <section class="zone" id="zone-${i.id}" data-zone="${i.id}" data-zone-index="${l}">
            ${i.content(n)}
          </section>
        `).join("")}
      </div>
    </div>
  `,N(e,t)}function N(e,t){const s=e.querySelector(".icv"),n=e.querySelector(".zones-track"),i=e.querySelector(".character"),l=Array.from(e.querySelectorAll(".zone")),p=e.querySelector(".hud-progress-fill"),T=e.querySelector(".hud-zone-label"),x=Array.from(e.querySelectorAll(".hud-dot")),w=e.querySelector(".mode-toggle"),k=e.querySelector(".parallax-sky"),b=e.querySelector(".parallax-wall");let c=t,g=0;w.addEventListener("click",()=>{c=!c,s.classList.toggle("plain-mode",c),sessionStorage.setItem("cv-plain",String(c)),w.textContent=c?"🎮":"📄"});const f=e.querySelector(".theme-toggle");f.addEventListener("click",()=>{const r=s.dataset.theme==="dark";s.dataset.theme=r?"light":"dark",document.documentElement.dataset.theme=s.dataset.theme,localStorage.setItem("cv-theme",s.dataset.theme),f.textContent=r?"🌙":"☀️"}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{if(!localStorage.getItem("cv-theme")){const a=r.matches?"dark":"light";s.dataset.theme=a,document.documentElement.dataset.theme=a,f.textContent=r.matches?"☀️":"🌙"}}),e.querySelector(".hud-home").addEventListener("click",()=>{c?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l[0].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})}),x.forEach(r=>{r.addEventListener("click",()=>{const a=parseInt(r.dataset.zoneIndex,10);c?l[a].scrollIntoView({behavior:"smooth",block:"start"}):l[a].scrollIntoView({behavior:"smooth",inline:"start",block:"nearest"})})});function h(){if(c){const a=window.scrollY||document.documentElement.scrollTop,d=document.documentElement.scrollHeight-window.innerHeight;p.style.width=(d>0?a/d*100:0)+"%"}else{const a=n.scrollLeft,d=n.scrollWidth-n.clientWidth,B=d>0?a/d:0;p.style.width=B*100+"%";const P=B*(n.clientWidth-80);i.style.transform=`translateX(${P}px)`,Math.abs(a-g)>1&&(i.classList.add("walking"),i.classList.toggle("facing-left",a<g)),g=a,clearTimeout(i._wt),clearTimeout(i._pt),i.classList.remove("pointing"),i._wt=setTimeout(()=>{i.classList.remove("walking"),i._pt=setTimeout(()=>i.classList.add("pointing"),400)},200),k&&(k.style.transform=`translateX(${-a*.1}px)`),b&&(b.style.transform=`translateX(${-a*.3}px)`)}let r=0;if(c){for(let a=l.length-1;a>=0;a--)if(l[a].getBoundingClientRect().top<=window.innerHeight/3){r=a;break}}else for(let a=l.length-1;a>=0;a--)if(l[a].getBoundingClientRect().left<=n.clientWidth/2){r=a;break}T.textContent=y[r].label,x.forEach((a,d)=>a.classList.toggle("active",d===r))}n.addEventListener("scroll",h),window.addEventListener("scroll",h);function A(r){c||(r.key==="ArrowRight"?n.scrollBy({left:400,behavior:"smooth"}):r.key==="ArrowLeft"&&n.scrollBy({left:-400,behavior:"smooth"}))}window.addEventListener("keydown",A);const I=e.querySelectorAll(".meter"),u=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("filled"),u.unobserve(a.target))})},{threshold:.2});I.forEach(r=>u.observe(r));const E=e.querySelectorAll(".station");E.forEach(r=>{r.addEventListener("click",()=>{const a=r.classList.contains("expanded");E.forEach(d=>{d.classList.remove("expanded"),d.setAttribute("aria-expanded","false")}),a||(r.classList.add("expanded"),r.setAttribute("aria-expanded","true"))})});const D=e.querySelectorAll(".status-led"),v=[];D.forEach(r=>{v.push(setInterval(()=>r.classList.toggle("blink"),800+Math.random()*1500))});const S=e.querySelector(".loadcell-value");S&&v.push(setInterval(()=>{S.textContent=(2800+Math.floor(Math.random()*100)).toString()},600));const C=new MutationObserver(()=>{e.querySelector(".icv")||(window.removeEventListener("keydown",A),window.removeEventListener("scroll",h),v.forEach(clearInterval),u.disconnect(),C.disconnect())});C.observe(e,{childList:!0}),requestAnimationFrame(h)}const V=[{id:"brain-train",label:"Brain-Train",description:"Cognitive training &amp; educational tools",projects:[{name:"GRE Prep",url:"https://fingerskier.github.io/gre_prep",repo:"https://github.com/fingerskier/gre_prep",description:"GRE preparation tool"},{name:"SpeakEasy",url:"https://fingerskier.github.io/speakeasy",repo:"https://github.com/fingerskier/speakeasy",description:"Speech &amp; communication practice"},{name:"NumberSense",url:"https://fingerskier.github.io/numbersense",repo:"https://github.com/fingerskier/numbersense",description:"Numerical intuition trainer"},{name:"PsyDev",url:"https://psydev.vercel.app",description:"Psychology &amp; development app"}]},{id:"simulations",label:"Simulations &amp; Visualizations",description:"Interactive simulations and visual experiments",projects:[{name:"SolarSystem",url:"https://fingerskier.github.io/SolarSystem",repo:"https://github.com/fingerskier/SolarSystem",description:"Interactive solar system simulation"},{name:"Biologize Me",url:"https://fingerskier.github.io/biologize_me",repo:"https://github.com/fingerskier/biologize_me",description:"Biology-inspired visualization experiment"}]},{id:"tools",label:"Tools &amp; Utilities",description:"Standalone applications &amp; services",projects:[{name:"Poemia MCP",url:"https://poemia-mcp.vercel.app",description:"Poetry generation MCP server"},{name:"Reqall",url:"https://reqall.net",description:"Memory &amp; recall assistant"},{name:"Intelligence For Me",url:"https://intelligencefor.me",description:"Personal intelligence dashboard"}]}];function W(){const e=document.getElementById("app");e.innerHTML=`
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
          ${V.map(t=>`
            <section class="project-category" id="cat-${t.id}">
              <h2>${t.label}</h2>
              <p class="category-desc">${t.description}</p>
              <div class="category-items">
                ${t.projects.map(s=>`
                  <div class="project-card">
                    <h3>${s.name}</h3>
                    <p>${s.description}</p>
                    <div class="project-links">
                      ${s.url?`<a href="${s.url}" target="_blank" rel="noopener" aria-label="Visit ${s.name} site">Visit</a>`:""}
                      ${s.repo?`<a href="${s.repo}" target="_blank" rel="noopener" aria-label="View ${s.name} repository">Repo</a>`:""}
                    </div>
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </main>
    </div>
  `}let $=null;async function L(){const e=window.location.hash==="#projects"?"projects":"cv";e!==$&&($=e,e==="projects"?W():await _())}window.addEventListener("hashchange",L);L();
