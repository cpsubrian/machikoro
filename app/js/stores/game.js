import alt from '../alt'
import _ from 'underscore'
import {establishments, landmarks} from '../data'
import gameActions from '../actions/game'

class GameStore {

  constructor () {
    // Setup default state.
    this.newGame()

    // Setup listeners.
    this.bindListeners({
      startGame: [gameActions.startGame],
      newGame: [gameActions.newGame],
      addPlayer: [gameActions.addPlayer]
    })
  }

  startGame () {
    this.started = true
  }

  newGame () {
    this.started = false
    this.players = []
    this.shop = establishments.map(function (card) {
      return _.extend({}, card, {
        count: 4
      })
    })
  }

  addPlayer (player) {
    let newPlayer = _.defaults({}, player, {
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
    })
    this.players.push(newPlayer)
  }

}

export default alt.createStore(GameStore)