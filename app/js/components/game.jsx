import React from 'react'
import Shop from './shop'
import Players from './players'

const Game = React.createClass({

  render () {
    return (
      <div className="game">
        <Shop/>
        <Players/>
      </div>
    )
  }

})

export default Game