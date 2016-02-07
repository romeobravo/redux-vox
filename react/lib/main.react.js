/* Babel Polyfill */
import 'babel-polyfill';

/* React */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* Components */
import App from '../components/App.react'

/* Libraries */
import Pathfinder from 'pathfinder'
import VoxRouter from 'vox-router'
import router from './router'

/* Routes */
import routes from '../config/routes'
import voxRoutes from '../config/vox-routes'

/* Store */
import configureStore from '../store/configureStore'

/* Actions */
import { CHANGE_ROUTE } from '../constants/ActionTypes'
import * as Actions from '../actions/Actions'

/* Reducer */
import Reducer from '../reducers'

const store = configureStore()
store.dispatch(Actions.changeRoute(window.location.pathname))

const pathfinder = new Pathfinder({
  event: CHANGE_ROUTE
}).on(CHANGE_ROUTE, function(url) {
  store.dispatch(Actions.changeRoute(url))
})

router.init({ routes })

function rerender() {
  const view = (
    <App store={store} actions={Actions} />
  )
  render(
    view,
    document.getElementById('react-root')
  )
}

store.subscribe(rerender)
rerender()

const voxRouter = new VoxRouter({ routes: voxRoutes })