import React from 'react'
import Players from './players'

const Game = React.createClass({

  render () {
    return (
      <div className="game">
        <Players/>
      </div>
    )
  }

})

export default Game