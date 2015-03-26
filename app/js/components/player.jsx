import React from 'react'

const Player = React.createClass({

  render () {
    return (
      <div className="player">
        <h3>{this.props.name}</h3>
        <h4>{this.props.bank} gold</h4>
      </div>
    )
  }

})

export default Player