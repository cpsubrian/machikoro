import React from 'react'
import Navbar from './navbar'

const App = React.createClass({

  render () {
    return (
      <div class="app">
        <Navbar />
        <p>
          This is the app.
        </p>
      </div>
    )
  }

});

export default App