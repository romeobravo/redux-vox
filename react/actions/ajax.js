import connect from '../lib/connect'
import { apiStart, apiSuccess, apiFailed } from './Actions'

export async function get(store, route) {
  const dispatch = store.dispatch
  dispatch(apiStart(route))
  try {
    let response = await connect.get(`http://www.reddit.com/r/${route}.json`)
    let json = response.body
    console.log(json)
    dispatch(apiSuccess(json))
    console.log(store.getState().api)
  } catch(err) {
    console.log(err)
    dispatch(apiFailed(err))
  }
}
