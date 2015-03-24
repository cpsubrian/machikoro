import React from 'react'
import {Route, DefaultRoute, NotFoundRoute} from 'react-router'
import App from './components/app'
import NotFound from './components/not_found'
import Game from './components/game'

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Game}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

export default routes