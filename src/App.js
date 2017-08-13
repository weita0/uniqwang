import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Nav from './nav'
import Collection from './collection'
import Footer from './foot'
class App extends Component {
  render() {
    return (
      <Router>
        <div>                
          <Route exact path='/' component={Home} />
          <Route path='/collection' component={Collection} />
          <Nav />    
          <Footer />    
        </div>
      </Router>
    )
  }
}

export default App
