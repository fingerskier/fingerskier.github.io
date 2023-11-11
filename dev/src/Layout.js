import React from 'react'


export default function Layout({children}) {
  return <>
    <header>
      <h1>fingerskier</h1>
    </header>

    <main>
      {children}
    </main>

    <footer>&copy;2023</footer>
  </>
}