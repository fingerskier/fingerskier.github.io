import { route, start } from './router.js'
import { renderHome } from './pages/home.js'
import { renderBlogIndex } from './pages/blog-index.js'
import { renderBlogPost } from './pages/blog-post.js'
import { renderCV } from './pages/cv.js'
import { renderGame } from './pages/game.js'
import './styles/index.css'
import './styles/game.css'
import './styles/content.css'

route('/', renderHome)
route('/blog', renderBlogIndex)
route('/blog/*', ({ _ }) => renderBlogPost(_))
route('/cv', renderCV)
route('/game', renderGame)

start(() => renderHome())
