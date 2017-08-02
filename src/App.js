import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Nav from './nav'
import Collection from './collect'

class App extends Component {
  render() {
    return (
      <Router>
        <div>                
          <Route exact path='/' component={Home} />
          <Route path='/collection' component={Collection} />
          <Nav />        
        </div>
      </Router>
    )
  }
}

export default App
