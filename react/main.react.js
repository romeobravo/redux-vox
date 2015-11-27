import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* Components */
import App from './components/App.react'

/* Libraries */
import pathfinder from './lib/pathfinder'
import router from './lib/router'

/* Routes */
import routes from './routes'

/* Store */
import configureStore from './store/configureStore'

/* Actions */
import { CHANGE_ROUTE } from './constants/ActionTypes'
import * as Actions from './actions/Actions'

/* Reducer */
import Reducer from './reducers'

const store = configureStore();

pathfinder.init({
  action: function(url) {
    store.dispatch(Actions.changeRoute(url))
  },
  CHANGE_EVENT: CHANGE_ROUTE
});

router.init({ routes })

function rerender() {
  let view = router.run(store.getState().route);
  view = (
    <Provider store={store}>
      {view.render}
    </Provider>
  )
  render(
    view,
    document.getElementById('react-root')
  );
}

store.subscribe(rerender);
rerender();