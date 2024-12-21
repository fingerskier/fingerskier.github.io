import {useEffect} from 'react'
import ContentList from './Content/ContentList'

import './style/footer.css'
import './style/header.css'


export default function Layout({children}) {
  return <>
    <header>
      <a href="https://fingerskier.github.io">
        <h1>fingerskier</h1>
      </a>
    </header>
    
    <ContentList />
    
    <main>
      {children}
    </main>
    
    <footer>
      <span> {process.env.REACT_APP_BUILD_DATE || 'passed past'} </span>
    </footer>
  </>
}