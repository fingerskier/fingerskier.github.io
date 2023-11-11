const fs = require('fs');
const path = require('path');

const contentDirectory = './public/content'

const isMarkdownFile = fileName => {
  return path.extname(fileName).toLowerCase() === '.md'
}


const buildJson = (dir, baseUrl) => {
  let results = {}
  
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results[file] = buildJson(filePath, baseUrl)
    } else if (isMarkdownFile(file)) {
      const fileKey = path.basename(file, '.md')
      const fileUrl = `${baseUrl}/${path.relative(contentDirectory, filePath)}`

      results[fileKey] = {
        path: filePath.replace(/\\/g, '/'), 
        url: fileUrl.replace(/\\/g, '/').slice(0, -3),
      }
    }
  })
  
  return results
}


const jsonContent = buildJson(contentDirectory, '/content');

fs.writeFileSync('./src/content.json', JSON.stringify(jsonContent, null, 2));
