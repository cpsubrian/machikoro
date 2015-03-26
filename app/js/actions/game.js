import alt from '../alt'

class GameActions {

  addPlayer (player) {
    this.dispatch(player)
  }

}

export default alt.createActions(GameActions)
