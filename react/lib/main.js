/* Babel Polyfill */
import 'babel-polyfill';

/* React */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

/* Components */
import App from '../components/App'

/* Routes */
import routes from '../config/routes'

/* Store */
import configureStore from '../store/configureStore'

/* Actions */
import { CHANGE_ROUTE } from '../constants/ActionTypes'
import * as Actions from '../actions/Actions'

/* Reducer */
import Reducer from '../reducers'

/* Server Connection */
import Connect from '../lib/connect'

const store = configureStore()

render(
  <Router routes={routes} history={browserHistory} store={store} actions={Actions}/>,
  document.getElementById('react-root')
)
