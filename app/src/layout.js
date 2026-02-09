export function layout(content, activeRoute = '') {
  return `
    <header class="site-header">
      <a href="#/" class="site-title">fingerskier</a>
      <nav>
        <a href="#/"${activeRoute === '/' ? ' class="active"' : ''}>Home</a>
        <a href="#/blog"${activeRoute === '/blog' ? ' class="active"' : ''}>Blog</a>
        <a href="#/cv"${activeRoute === '/cv' ? ' class="active"' : ''}>CV</a>
        <a href="#/game"${activeRoute === '/game' ? ' class="active"' : ''}>Game</a>
      </nav>
    </header>
    <main>${content}</main>
  `
}
