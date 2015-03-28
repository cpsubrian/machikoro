import React from 'react'

const Player = React.createClass({

  render () {
    return (
      <div className="player box">
        <h4 className="box-title">
          <span className="name">{this.props.name}</span>
          <span className="bank">{this.props.bank} gold</span>
        </h4>
      </div>
    )
  }

})

export default Player