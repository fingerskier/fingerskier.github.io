import React from 'react'
import contentStructure from './content.json'


const renderContent = (content) => {
  return Object.entries(content).map(([key, value]) => {
    if (value.path && value.url) {
      // It's a file
      return <li key={key}><a href={'#'+value.url}>{key}</a></li>;
    } else {
      // It's a directory
      return (
        <li key={key}>
          {key}
          <ul>{renderContent(value)}</ul>
        </li>
      )
    }
  })
}


export default function ContentList() {
  return (
    <div>
      <ul>{renderContent(contentStructure)}</ul>
    </div>
  )
}