import { API } from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  error: null,
  response: null
}

function api(state = initialState, action) {
  if(action.type == API) {
    console.log(action.status)
    switch(action.status) {
      case 'fetching':
        state.isFetching = true
        return state
      case 'error':
        console.log('error', action.error)
        state.isFetching = false
        state.error = action.error
        return state
      case 'success':
        console.log('fetched', action.response)
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