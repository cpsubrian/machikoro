import React from 'react'
import {RouteHandler} from 'react-router'
import Navbar from './navbar'

const App = React.createClass({

  render () {
    return (
      <div className="app">
        <Navbar/>
        <div className="page">
          <RouteHandler/>
        </div>
      </div>
    )
  }

});

export default App