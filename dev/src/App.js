import { useEffect, useState } from 'react'
import Layout from './Layout'
import MarkdownRenderer from './Markdowner' 

import backgroundImage from './img/background.webp'
import './style/App.css'
import './style/nav.css'


function App() {
  const [thingy, setThingy] = useState()
  
  // Assuming your Markdown file is at 'public/content.md'
  // const markdownFileUrl = process.env.PUBLIC_URL + '/content/index.md'
  
  
  useEffect(() => {
    window.addEventListener('hashchange', event=>{
      setThingy(window.location.hash.substring(2))
      console.log(window.location.hash.substring(2))
    })
    
    document.body.style.backgroundImage = `url(${backgroundImage})`
    
  }, [])
  
  
  return <Layout>
    <div>
      <MarkdownRenderer markdownFile={thingy} />
    </div>
  </Layout>
}

export default App;
