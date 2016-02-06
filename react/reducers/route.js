import { CHANGE_ROUTE } from '../constants/ActionTypes'
import VoxView from '../lib/vox-view'
import VoxRoutes from '../config/vox-routes'

const viewer = new VoxView({
  routes: VoxRoutes
})

const initialState = {
  path: '/',
  view: viewer.go('/')
}

function route(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ROUTE:
      return Object.assign({}, {
        path: action.route,
        view: viewer.go(state.path)
      })
    default:
      return state
  }
}

export default route