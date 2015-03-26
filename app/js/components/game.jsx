import React from 'react'
import gameActions from '../actions/game'
import gameStore from '../stores/game'

const Game = React.createClass({

  getInitialState() {
    return gameStore.getState()
  },

  componentDidMount() {
    gamestore.listen(this.onChange)
  },

  componentWillUnmount() {
    gameStore.unlisten(this.onChange)
  },

  onChange() {
    this.setState(this.getInitialState())
  },

  render () {
    return (
      <div className="game">
        <h2>Game</h2>
        <p>
          <button type="button">Add Player</button>
        </p>
      </div>
    )
  }

});

export default Game