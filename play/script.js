fetch('../cv.json')
  .then(r => r.json())
  .then(data => {
    const impressEl = document.getElementById('impress');
    let index = 0;

    const addStep = (content, x, y) => {
      const div = document.createElement('div');
      div.className = 'step';
      div.innerHTML = content;
      div.setAttribute('data-x', x);
      div.setAttribute('data-y', y);
      impressEl.appendChild(div);
    };

    addStep(`<h1>${data.name}</h1><p>${data.title}</p>`, 0, 0);

    if (Array.isArray(data.experience)) {
      data.experience.forEach((exp, i) => {
        addStep(`<h2>Experience</h2><p>${exp}</p>`, (i+1)*1000, 0);
      });
      index += data.experience.length;
    }

    if (Array.isArray(data.education)) {
      data.education.forEach((edu, i) => {
        addStep(`<h2>Education</h2><p>${edu}</p>`, (i+1)*1000, 1000);
      });
    }

    impress().init();

    let score = 0;
    document.addEventListener('impress:stepenter', () => {
      score += 10;
      document.getElementById('score-value').textContent = score;
    });
  });
