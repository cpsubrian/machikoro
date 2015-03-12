import React from 'react'

const NotFound = React.createClass({

  render () {
    return (
      <div className="not-found">
        <h2>Error: Not Found</h2>
        <p>Sorry, we couldn't find what you were looking for.</p>
      </div>
    )
  }

});

export default NotFound