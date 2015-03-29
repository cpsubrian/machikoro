import React from 'react'
import connectToStores from '../lib/connect_to_stores'
import gameActions from '../actions/game'
import gameStore from '../stores/game'

const Navbar = React.createClass({

  statics: {
    getStores () {
      return [gameStore]
    },
    getPropsFromStores (props) {
      return {
        started: gameStore.getState().started
      }
    }
  },

  onClickStart (e) {
    gameActions.startGame()
  },

  onClickNewGame (e) {
    gameActions.newGame()
  },

  render () {
    return (
      <nav>
        <h1>Machi Koro</h1>
        <div className="buttons">
          {!this.props.started ? (
            <button type="button" onClick={this.onClickStart}>
              Start Game
            </button>
          ) : (
            <button type="button" onClick={this.onClickNewGame}>
              New Game
            </button>
          )}
        </div>
      </nav>
    )
  }

})

export default connectToStores(Navbar)