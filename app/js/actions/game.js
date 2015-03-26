import alt from '../alt'

class GameActions {

  addPlayer (player) {
    this.displatch(player)
  }

}

export default alt.createActions(GameActions)
