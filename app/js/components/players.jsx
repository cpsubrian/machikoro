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
      let gameState = gameStore.getState();

      return {
        started: gameState.started,
        players: gameState.players
      }
    }
  },

  onClickAddPlayer (e) {
    gameActions.addPlayer({})
  },

  render () {
    return (
      <ul className="players">
        {this.props.players.map((player, i) =>
          <li key={i}><Player {...player}/></li>
        )}
        {(!this.props.started && this.props.players.length < 4) ? (
          <li>
            <div className="box">
              <button type="button" onClick={this.onClickAddPlayer}>
                Add Player
              </button>
            </div>
          </li>
        ) : ''}
      </ul>
    )
  }
})

export default connectToStores(Players);