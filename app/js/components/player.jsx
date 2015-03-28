import React from 'react'

class Player extends React.Component {

  render () {
    return (
      <div className="player">
        <h3>{this.props.name}</h3>
        <h4>{this.props.bank} gold</h4>
      </div>
    )
  }

}

export default Player