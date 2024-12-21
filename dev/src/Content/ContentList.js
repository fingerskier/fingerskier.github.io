import {useEffect,useState} from 'react'
import Element from './Element'

import contentStructure from '../content.json'


export default function ContentList() {
  const [visible, setVisible] = useState(false)
  
  
  useEffect(() => {
    window.addEventListener('hashchange', event=>{
      setVisible(false)
    })
  }, [])
  
  
  return (
    <nav>
      <ul>
        <li onClick={()=>setVisible(!visible)}>☰</li>
        
        {visible && <Element content={contentStructure} />}
      </ul>
    </nav>
  )
}