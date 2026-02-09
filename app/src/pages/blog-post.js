import { marked } from 'marked'
import { render } from '../render.js'
import { layout } from '../layout.js'

export async function renderBlogPost(slug) {
  render(layout('<p>Loading...</p>', '/blog'))

  try {
    const resp = await fetch(`/content/${slug}.md`)
    if (!resp.ok) throw new Error('Not found')
    const md = await resp.text()
    const html = marked.parse(md)

    render(layout(`
      <nav class="blog-back"><a href="#/blog">&larr; Back to blog</a></nav>
      <article class="blog-post">${html}</article>
    `, '/blog'))
  } catch {
    render(layout('<p>Post not found.</p>', '/blog'))
  }
}
