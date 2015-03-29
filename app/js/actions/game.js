import alt from '../alt'

class GameActions {

  startGame () {
    this.dispatch()
  }

  newGame () {
    this.dispatch()
  }

  addPlayer (player) {
    this.dispatch(player)
  }

}

export default alt.createActions(GameActions)
