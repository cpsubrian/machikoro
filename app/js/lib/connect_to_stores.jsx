import React from 'react'

const connectToStores = function (Component, stores, getStateFromStores) {

  const StoreConnection = React.createClass({

    getInitialState () {
      return getStateFromStores(this.props)
    },

    componentDidMount () {
      stores.forEach(store =>
        store.listen(this.onChange)
      )
    },

    componentWillUnmount () {
      stores.forEach(store =>
        store.unlisten(this.onChange)
      )
    },

    onChange () {
      if (this.isMounted()) {
        this.setState(getStateFromStores(this.props))
      }
    },

    render () {
      return <Component {...this.props} {...this.state} />
    }

  })

  return StoreConnection
}

export default connectToStores