import {useState} from 'react'
import {snakeToCapitalized} from '../lib/helpers.js'


function FileElement({id, key, value}) {
  return <li key={id}>
    <a href={'#'+value.url}>
      {snakeToCapitalized(id)}
    </a>
  </li>
}


function DirectoryElement({id, key, value}) {
  const [visible, setVisible] = useState(false)
  
  return (
    <li key={id}>
      <span onClick={E=>setVisible(!visible)}>
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


export default function Element({content}) {
  const [visible, setVisible] = useState(false)


  return Object.entries(content).map(([key, value]) => {
    if (value.path && value.url) {
      // It's a file
      return <FileElement id={key} key={key} value={value} />
      return <li key={key}>
        <a href={'#'+value.url}>
          {snakeToCapitalized(key)}
        </a>
      </li>
    } else {
      // It's a directory
      console.log('DIR', key, value)
      return <DirectoryElement id={key} key={key} value={value} />
      return <li key={key}>
        <span onClick={E=>setVisible(!visible)}>
          {snakeToCapitalized(key)}
        </span>
        
        {visible?
          <ul>
            <Element content={value} />
          </ul>
        :
          <></>
        }
      </li>
    }
  })
}