import React, { Component } from 'react'
import { Clock } from './Clock' 
import './App.css'
import { Counter } from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />       
        <Counter />     
      </div>
    )
  }
}

export default App
