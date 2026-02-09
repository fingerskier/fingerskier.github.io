import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentDir = path.resolve(__dirname, '../../content')
const outPath = path.resolve(__dirname, '../src/data/blog-manifest.json')

function walkMd(dir, base) {
  const entries = []
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      entries.push(...walkMd(fullPath, base))
    } else if (item.name.endsWith('.md')) {
      const rel = path.relative(base, fullPath)
      const slug = rel.replace(/\.md$/, '')
      const title = item.name
        .replace(/\.md$/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
      const parts = slug.split('/')
      entries.push({
        slug,
        title,
        category: parts.length > 1 ? parts.slice(0, -1).join('/') : 'general',
      })
    }
  }
  return entries
}

const posts = walkMd(contentDir, contentDir)
fs.writeFileSync(outPath, JSON.stringify(posts, null, 2))
console.log(`Generated blog manifest with ${posts.length} posts`)
