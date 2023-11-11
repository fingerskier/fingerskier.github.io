import React from 'react'

import './style/footer.css'
import './style/header.css'


export default function Layout({children}) {
  return <>
    <header>
      <a href="https://fingerskier.github.io">
        <h1>fingerskier</h1>
      </a>
    </header>
    
    <main>
      {children}
    </main>
    
    <footer>&copy;2023</footer>
  </>
}