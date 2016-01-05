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

const store = configureStore();
const pathfinder = new Pathfinder({
  event: CHANGE_ROUTE
})

pathfinder.on(CHANGE_ROUTE, function(url) {
  store.dispatch(Actions.changeRoute(url))
})

router.init({ routes })

function rerender() {
  let view = router.run(store.getState().route)
  view = (
    <Provider store={store}>
      {view.render}
    </Provider>
  )
  render(
    view,
    document.getElementById('react-root')
  )
}

store.subscribe(rerender)
console.log(store.getState(), 'hello')
rerender()
console.log('App Online')

const voxRouter = new VoxRouter({ routes: voxRoutes })