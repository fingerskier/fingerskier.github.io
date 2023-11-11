import React from 'react'

import './style/footer.css'
import './style/header.css'

import footerImage from './img/footer.png'
import headerImage from './img/header.png'


export default function Layout({children}) {
  const footerStyle = { 
    backgroundImage: `url(${footerImage})`,
  }

  const headerStyle = { 
    backgroundImage: `url(${headerImage})`,
  }

  return <>
    <header style={headerStyle}>
      <a href="https://fingerskier.github.io">
        <h1>fingerskier</h1>
      </a>
    </header>
    
    <main>
      {children}
    </main>
    
    <footer style={footerStyle}>
      <span> &copy;2023 </span>
    </footer>
  </>
}