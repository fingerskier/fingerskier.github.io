const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'cv.txt');
const outputPath = path.join(__dirname, '..', 'cv.json');

const text = fs.readFileSync(inputPath, 'utf8');
const lines = text.split(/\r?\n/);
const result = {};
let currentKey = null;

for (let line of lines) {
  const trimmed = line.trim();
  if (trimmed === '') continue;
  if (trimmed.includes(':') && !trimmed.startsWith('-')) {
    const [key, ...rest] = trimmed.split(':');
    currentKey = key.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (value) {
      result[currentKey] = value;
      currentKey = null;
    } else {
      result[currentKey] = [];
    }
  } else if (trimmed.startsWith('-') && currentKey) {
    if (!Array.isArray(result[currentKey])) {
      result[currentKey] = [];
    }
    result[currentKey].push(trimmed.slice(1).trim());
  }
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log('Generated', outputPath);
