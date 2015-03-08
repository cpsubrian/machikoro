import React from 'react'
import Navbar from './Navbar'

const App = React.createClass({

  render () {
    return (
      <div class="app">
        <Navbar />
        <p>
          Welcome to machi koro.
        </p>
      </div>
    )
  }

});

export default App