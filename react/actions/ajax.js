import connect from '../lib/connect'
import { apiStart, apiSuccess, apiFailed } from './Actions'

export function get(route) {
  return async dispatch => {
    dispatch(apiStart(route))
    try {
      const response = await connect.xhrGet(route)
      dispatch(apiSuccess(response.body))
    } catch(err) {
      dispatch(apiFailed(err))
    }
  }
}
