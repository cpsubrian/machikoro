import alt from '../alt'
import _ from 'underscore'
import {establishments, landmarks} from '../data'
import gameActions from '../actions/game'

class GameStore {

  constructor () {
    // Setup default state.
    this.started = false
    this.elapsed = 0
    this.players = []
    this.cards = establishments.map(function (card) {
      return _.extend({}, card, {
        count: 4
      })
    })

    // Setup listeners.
    this.bindListeners({
      handleAddPlayer: [gameActions.addPlayer]
    })
  }

  addPlayer (player) {
    this.players.push(_.defaults(player, {
      name: `Player ${this.players.length}`,
      bank: 3,
      landmarks: landmarks.map(function (landmark) {
        return _.extend({}, landmark, {
          constructed: false
        })
      }),
      establishments: ['001', '003'].map(function (id) {
        return _.extend({}, _.findWhere(establishments, {id}), {
          count: 1,
          default: true
        })
      })
    }))
    return player
  }

  handleAddPlayer (player) {
    this.addPlayer(player)
  }

}

export default alt.createStore(GameStore)