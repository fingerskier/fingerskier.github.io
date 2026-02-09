import { marked } from 'marked'
import { render } from '../render.js'
import { layout } from '../layout.js'

export async function renderCV() {
  render(layout('<p>Loading...</p>', '/cv'))

  const resp = await fetch('/CV.md')
  const md = await resp.text()
  const html = marked.parse(md)

  render(layout(`<article class="cv-page">${html}</article>`, '/cv'))
}
