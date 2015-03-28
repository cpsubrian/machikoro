import React from 'react'
import Players from './players'

class Game extends React.Component {

  render () {
    return (
      <div className="game">
        <Players/>
      </div>
    )
  }

}

export default Game