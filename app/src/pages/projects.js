const CATEGORIES = [
  {
    id: 'brain-train',
    label: 'Brain-Train',
    description: 'Cognitive training &amp; educational tools',
    projects: [
      {
        name: 'GRE Prep',
        repo: 'https://github.com/fingerskier/gre_prep',
        description: 'GRE preparation tool',
      },
      {
        name: 'SpeakEasy',
        repo: 'https://github.com/fingerskier/speakeasy',
        description: 'Speech &amp; communication practice',
      },
      {
        name: 'NumberSense',
        repo: 'https://github.com/fingerskier/numbersense',
        description: 'Numerical intuition trainer',
      },
      {
        name: 'PsyDev',
        url: 'https://psydev.vercel.app',
        description: 'Psychology &amp; development app',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools &amp; Utilities',
    description: 'Standalone applications &amp; services',
    projects: [
      {
        name: 'Poemia MCP',
        url: 'https://poemia-mcp.vercel.app',
        description: 'Poetry generation MCP server',
      },
      {
        name: 'Reqall',
        url: 'https://reqall.net',
        description: 'Memory &amp; recall assistant',
      },
      {
        name: 'Intelligence For Me',
        url: 'https://intelligencefor.me',
        description: 'Personal intelligence dashboard',
      },
    ],
  },
]

export function renderProjects() {
  const appEl = document.getElementById('app')

  appEl.innerHTML = `
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
          ${CATEGORIES.map(cat => `
            <section class="project-category" id="cat-${cat.id}">
              <h2>${cat.label}</h2>
              <p class="category-desc">${cat.description}</p>
              <div class="category-items">
                ${cat.projects.map(p => `
                  <div class="project-card">
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                    <div class="project-links">
                      ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">Visit</a>` : ''}
                      ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>
          `).join('')}
        </div>
      </main>
    </div>
  `
}
