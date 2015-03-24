import alt from '../alt'

class GameActions {

  addPlayer (player) {
    this.displatch(player)
  }

}

export default const gameActions = alt.createActions(GameActions)
