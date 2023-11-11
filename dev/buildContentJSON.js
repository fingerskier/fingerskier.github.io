const fs = require('fs');
const path = require('path');

const contentDirectory = './public/content'; // Adjust this path to your content directory

const isMarkdownFile = fileName => {
  return path.extname(fileName).toLowerCase() === '.md';
};


const buildJson = (dir, baseUrl) => {
  let results = [];

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(buildJson(filePath, baseUrl));
    } else if (isMarkdownFile(file)) {
      const fileUrl = `${baseUrl}/${path.relative(contentDirectory, filePath).replace(/\\/g, '/')}`;
      results.push({ path: filePath, url: fileUrl });
    }
  });

  return results;
};


const jsonContent = buildJson(contentDirectory, '/content');

fs.writeFileSync('./src/content.json', JSON.stringify(jsonContent, null, 2));
