const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'app', 'src', 'resume.json');
const outputPath = path.join(__dirname, '..', 'cv.json');

const resumeRaw = fs.readFileSync(inputPath, 'utf8');
const resumeData = JSON.parse(resumeRaw);

if (!resumeData || typeof resumeData !== 'object') {
  throw new Error('Resume data must be an object.');
}

if (!resumeData.character || typeof resumeData.character !== 'object') {
  throw new Error('Resume data is missing a character profile.');
}

if (!Array.isArray(resumeData.milestones)) {
  throw new Error('Resume data is missing milestones.');
}

fs.writeFileSync(outputPath, JSON.stringify(resumeData, null, 2) + '\n');
console.log('Copied resume data to', outputPath);
