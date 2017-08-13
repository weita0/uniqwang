import React from 'react'
import { List } from './List'
const records = require('./records.json')
// const movies = require('./movies.json')

export default class Collection extends React.Component {
  render () {    
    return (
      <div style={{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
        fontSize: 20        
      }}>
        <List data={records} />
      </div>
    )    
  }
}