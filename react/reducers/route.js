import { CHANGE_ROUTE } from '../constants/ActionTypes'

const initialState = '/'

function route(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ROUTE:
      state = action.route;
      return state;
    default:
      return state;
  }
}

export default route