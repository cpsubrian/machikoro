import React from 'react'
import {RouteHandler} from 'react-router'
import Navbar from './navbar'

class App extends React.Component {

  render () {
    return (
      <div className="app">
        <Navbar/>
        <RouteHandler/>
      </div>
    )
  }

}

export default App