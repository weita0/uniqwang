import React from 'react'
import { Clock } from './Clock' 
import { Counter } from './Counter'
import './App.css'

export default class Home extends React.Component {
  render () {
    return (
      <div className="App">
        <Clock />       
        <Counter />        
      </div>      
    )
  }
}