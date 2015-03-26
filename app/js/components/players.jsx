import React from 'react'
import gameActions from '../actions/game'
import gameStore from '../stores/game'
import Player from './player'

const Players = React.createClass({

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

  onClickAddPlayer (e) {
    e.preventDefault()
    gameActions.addPlayer({})
  },

  render () {
    return (
      <div className="players">
        <h2>Players ({this.state.players.length})</h2>
        <ul>
          {this.state.players.map((player, i) => {
            return <li key={i}><Player {...player}/></li>
          })}
        </ul>
        <button type="button" onClick={this.onClickAddPlayer}>
          Add Player
        </button>
      </div>
    )
  }

})

export default Players