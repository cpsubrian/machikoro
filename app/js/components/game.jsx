import React from 'react'
import gameActions from '../actions/game'
import gameStore from '../stores/game'
import Players from './players'

const Game = React.createClass({

  getInitialState () {
    return gameStore.getState()
  },

  componentDidMount () {
    gameStore.listen(this.onChange)
  },

  componentWillUnmount () {
    gameStore.unlisten(this.onChange)
  },

  onChange () {
    this.setState(this.getInitialState())
  },

  render () {
    return (
      <div className="game">
        <Players/>
      </div>
    )
  }

})

export default Game