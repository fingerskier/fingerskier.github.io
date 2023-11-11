import {useState} from 'react'
import Element from './Element'

import contentStructure from '../content.json'


export default function ContentList() {
  return (
    <div>
      <ul>
        <Element content={contentStructure} />
      </ul>
    </div>
  )
}