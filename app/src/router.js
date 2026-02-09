const routes = []

export function route(pattern, handler) {
  routes.push({ pattern, handler })
}

export function navigate(hash) {
  window.location.hash = hash
}

export function start(fallback) {
  function dispatch() {
    const hash = window.location.hash.slice(1) || '/'

    for (const { pattern, handler } of routes) {
      const match = matchRoute(pattern, hash)
      if (match) {
        handler(match.params)
        return
      }
    }

    if (fallback) fallback()
  }

  window.addEventListener('hashchange', dispatch)
  dispatch()
}

function matchRoute(pattern, path) {
  if (pattern === path) return { params: {} }

  // Handle wildcard catch-all: /blog/*
  if (pattern.endsWith('/*')) {
    const prefix = pattern.slice(0, -2)
    if (path.startsWith(prefix + '/')) {
      return { params: { _: path.slice(prefix.length + 1) } }
    }
    return null
  }

  // Handle :param segments
  const patternParts = pattern.split('/')
  const pathParts = path.split('/')
  if (patternParts.length !== pathParts.length) return null

  const params = {}
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i])
    } else if (patternParts[i] !== pathParts[i]) {
      return null
    }
  }

  return { params }
}
