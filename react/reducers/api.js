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
        return {
          isFetching: true
        }
      case 'error':
        return {
          isFetching: false,
          error: action.error
        }
      case 'success':
        return {
          isFetching: false,
          response: action.response
        }
      default:
        return state
    }
  }
  return state
}

export default api
