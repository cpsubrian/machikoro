import React from 'react'

/**
 * 'Higher Order Component' that controls the props of the wrapped
 * component via stores.
 *
 * Expects the Component to have two static methods:
 *   - getStores(): Should return an array of stores.
 *   - getPropsFromStores: Should return the props from the stores.
 */
const connectToStores = function (Component) {

  // Cache stores.
  const stores = Component.getStores()

  // Wrapper Component.
  const StoreConnection = React.createClass({

    getInitialState () {
      return Component.getPropsFromStores(this.props)
    },

    componentDidMount () {
      stores.forEach(store => store.listen(this.onChange))
    },

    componentWillUnmount () {
      stores.forEach(store => store.unlisten(this.onChange))
    },

    onChange () {
      this.setState(Component.getPropsFromStores(this.props))
    },

    render () {
      return <Component {...this.props} {...this.state} />
    }
  })

  return StoreConnection
}

export default connectToStores