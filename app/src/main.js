import './styles/index.css'
import './styles/cv.css'
import { renderCV } from './pages/cv.js'
import { renderProjects } from './pages/projects.js'

let currentPage = null

async function route() {
  const page = window.location.hash === '#projects' ? 'projects' : 'cv'
  if (page === currentPage) return
  currentPage = page
  if (page === 'projects') {
    renderProjects()
  } else {
    await renderCV()
  }
}

window.addEventListener('hashchange', route)
route()
