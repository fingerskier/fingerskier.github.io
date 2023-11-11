import { useState } from 'react'
import Layout from './Layout'
import MarkdownRenderer from './Markdowner' 

import './style/App.css'


function App() {
  const [thingy, setThingy] = useState()
  // Assuming your Markdown file is at 'public/content.md'
  const markdownFileUrl = process.env.PUBLIC_URL + '/content/index.md'
  
  
  return <Layout>
    
    {thingy? <>
    </>
    :
    <>
      <h1>Welcome!</h1>
    </>}
    <div>
      <MarkdownRenderer markdownFile={markdownFileUrl} />
    </div>
  </Layout>
}

export default App;
