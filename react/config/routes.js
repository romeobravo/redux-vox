// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import About from '../components/About'

module.exports = (
  <Route path="/" component={App}>
    <Route path="/about" component={About}/>
  </Route>
)
