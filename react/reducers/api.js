import { API } from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  error: null,
  response: null
}

function api(state = initialState, action) {
  if(action.type == API) {
    switch(action.status) {
      case 'fetching':
        state.isFetching = true
        return state
      case 'error':
        state.isFetching = false
        state.error = action.error
        return state
      case 'success':
        state.isFetching = false
        state.response = action.response
        return state
      default:
        return state
    }
  }
  return state
}

export default api
