import { render } from '../render.js'
import { layout } from '../layout.js'
import manifest from '../data/blog-manifest.json'

export function renderBlogIndex() {
  const grouped = {}

  for (const post of manifest) {
    if (!grouped[post.category]) grouped[post.category] = []
    grouped[post.category].push(post)
  }

  const categories = Object.keys(grouped).sort()

  const listHtml = categories.map(cat => {
    const label = cat.replace(/[/_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    const posts = grouped[cat]
      .map(p => `<li><a href="#/blog/${p.slug}">${p.title}</a></li>`)
      .join('')
    return `
      <div class="blog-category">
        <h3>${label}</h3>
        <ul>${posts}</ul>
      </div>
    `
  }).join('')

  const content = `
    <section class="blog-index">
      <h1>Blog</h1>
      ${listHtml}
    </section>
  `

  render(layout(content, '/blog'))
}
