import React from 'react'
import connectToStores from '../lib/connect_to_stores'
import gameActions from '../actions/game'
import gameStore from '../stores/game'
import Player from './player'

const Players = React.createClass({

  statics: {
    getStores () {
      return [gameStore]
    },
    getPropsFromStores (props) {
      return {
        players: gameStore.getState().players
      }
    }
  },

  onClickAddPlayer (e) {
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

export default connectToStores(Players);