import './styles/index.css'
import './styles/cv.css'
import { renderCV } from './pages/cv.js'
import { renderProjects } from './pages/projects.js'

function route() {
  const hash = window.location.hash
  if (hash === '#projects') {
    renderProjects()
  } else {
    renderCV()
  }
}

window.addEventListener('hashchange', route)
route()
