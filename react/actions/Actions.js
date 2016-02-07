import fetch from 'isomorphic-fetch'

import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

export function changeRoute(route) {
  return { type: types.CHANGE_ROUTE, route }
}

export function apiStart(route) {
  console.log('start')
  return { type: types.API, status: 'fetching' }
}

export function apiFailed(error) {
  console.log('failed')
  return { type: types.API, status: 'error', error}
}

export function apiSuccess(response) {
  console.log('success')
  return { type: types.API, status: 'success', response}
}

export async function fetchAPI(store, route) {
  const dispatch = store.dispatch
  dispatch(apiStart(route))
  try {
    let response = await fetch(`http://www.reddit.com/r/${route}.json`)
    let json = await response.json()
    console.log(json)
    dispatch(apiSuccess(json))
    console.log(store.getState().api)
  } catch(err) {
    console.log(err)
    dispatch(apiFailed(err))
  }
}

// export function fetchAPI(route) {

//   // Thunk middleware knows how to handle functions.
//   // It passes the dispatch method as an argument to the function,
//   // thus making it able to dispatch actions itself.
//   console.log('fetch', route)

//   return dispatch => {

//     // First dispatch: the app state is updated to inform
//     // that the API call is starting.

//     dispatch(apiStart(route))

//     // The function called by the thunk middleware can return a value,
//     // that is passed on as the return value of the dispatch method.

//     // In this case, we return a promise to wait for.
//     // This is not required by thunk middleware, but it is convenient for us.

//     return fetch(`http://www.reddit.com/r/${route}.json`)
//       .then(response => response.json())
//       .then(json =>

//         // We can dispatch many times!
//         // Here, we update the app state with the results of the API call.

//         dispatch(apiSuccess(json))
//       )

//       // In a real world app, you also want to
//       // catch any error in the network call.
//   }
// }