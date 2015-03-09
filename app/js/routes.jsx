import React from 'react'
import {Route, DefaultRoute, NotFoundRoute} from 'react-router'
import App from './components/App'
import NotFound from './components/NotFound'
import Lobby from './components/Lobby'

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Lobby}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

export default routes