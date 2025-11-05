fetch('../cv.json')
  .then(r => r.json())
  .then(data => {
    const impressEl = document.getElementById('impress');

    const addStep = (content, x, y) => {
      const div = document.createElement('div');
      div.className = 'step';
      div.innerHTML = content;
      div.setAttribute('data-x', x);
      div.setAttribute('data-y', y);
      impressEl.appendChild(div);
    };

    const character = data.character || {};
    addStep(
      `
        <h1>${character.name || 'Adventurer'}</h1>
        ${character.tagline ? `<p>${character.tagline}</p>` : ''}
      `,
      0,
      0
    );

    if (Array.isArray(data.milestones)) {
      data.milestones.forEach((milestone, index) => {
        const baseX = (index + 1) * 1200;
        const sheet = milestone.sheet || {};

        const statsList = Array.isArray(sheet.stats)
          ? `<ul class="sheet-list">${sheet.stats
              .map(stat => `<li><strong>${stat.name}</strong>: ${stat.value}</li>`)
              .join('')}</ul>`
          : '';

        const inventoryList = Array.isArray(sheet.inventory)
          ? `<ul class="sheet-list">${sheet.inventory
              .map(item => `<li>${item}</li>`)
              .join('')}</ul>`
          : '';

        const questsList = Array.isArray(sheet.quests)
          ? `<ul class="sheet-list quests">${sheet.quests
              .map(quest => `
                <li>
                  <strong>${quest.name}</strong>
                  ${quest.objective ? `<div>Objective: ${quest.objective}</div>` : ''}
                  ${quest.outcome ? `<div>Outcome: ${quest.outcome}</div>` : ''}
                </li>
              `)
              .join('')}</ul>`
          : '';

        addStep(
          `
            <h2>${milestone.title || `Stage ${index + 1}`}</h2>
            ${milestone.summary ? `<p class="summary">${milestone.summary}</p>` : ''}
            ${milestone.description ? `<p>${milestone.description}</p>` : ''}
            ${sheet.class || sheet.level ? `<p class="sheet-meta">${[sheet.class, sheet.level].filter(Boolean).join(' · ')}</p>` : ''}
            ${statsList ? `<h3>Stats</h3>${statsList}` : ''}
            ${inventoryList ? `<h3>Inventory</h3>${inventoryList}` : ''}
            ${questsList ? `<h3>Quests</h3>${questsList}` : ''}
          `,
          baseX,
          0
        );
      });
    }

    impress().init();

    let score = 0;
    document.addEventListener('impress:stepenter', () => {
      score += 10;
      document.getElementById('score-value').textContent = score;
    });
  });
