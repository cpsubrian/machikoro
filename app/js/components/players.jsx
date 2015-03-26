import React from 'react'
import connectToStores from '../lib/connect_to_stores'
import gameActions from '../actions/game'
import gameStore from '../stores/game'
import Player from './player'

let Players = React.createClass({

  onClickAddPlayer (e) {
    e.preventDefault()
    gameActions.addPlayer({})
  },

  render () {
    return (
      <div className="players">
        <h2>Players ({this.props.players.length})</h2>
        <ul>
          {this.props.players.map((player, i) =>
            <li key={i}><Player {...player}/></li>
          )}
        </ul>
        <button type="button" onClick={this.onClickAddPlayer}>
          Add Player
        </button>
      </div>
    )
  }

})

// Wrap componentn to connect it to stores.
Players = connectToStores(Players, [gameStore], (props) => {
  return {
    players: gameStore.getState().players
  }
})

export default Players