const appEl = document.getElementById('app')

export function render(html) {
  appEl.innerHTML = html
}

export function getAppEl() {
  return appEl
}
