import {useState} from 'react'
import {snakeToCapitalized} from '../lib/helpers.js'


export default function Element({content}) {
  function FileElement({id, key, value}) {
    return <li key={id}>
      <a href={'#'+value.url}>
        {snakeToCapitalized(id)}
      </a>
    </li>
  }
  
  
  function DirectoryElement({id, key, value}) {
    const [visible, setVisible] = useState(false)
    
    const handleClick = event=>{
      setVisible(!visible)
    }
    
    return (
      <li key={id}>
        <span onClick={handleClick}>
          {snakeToCapitalized(id)}
        </span>
        
        {visible?
          <ul>
            <Element content={value} />
          </ul>
        :
          <></>
        }
      </li>
    )
  }
  
  
  return Object.entries(content).map(([key, value]) => {
    if (value.path && value.url) {
      // It's a file
      return <FileElement id={key} key={key} value={value} />
    } else {
      // It's a directory
      return <DirectoryElement id={key} key={key} value={value} />
    }
  })
}