import React from 'react'

import './style/footer.css'
import './style/header.css'

import footerImage from './img/footer.png'
import headerImage from './img/header.png'


export default function Layout({children}) {
  return <>
    <header style={{ backgroundImage: `url(${headerImage})` }}>
      <a href="https://fingerskier.github.io">
        <h1>fingerskier</h1>
      </a>
    </header>
    
    <main>
      {children}
    </main>
    
    <footer style={{ backgroundImage: `url(${footerImage})` }}>
      &copy;2023
    </footer>
  </>
}