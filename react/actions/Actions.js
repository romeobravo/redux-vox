/* Action Types */
import * as types from '../constants/ActionTypes'

/* Action Creators */
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
  return { type: types.API, status: 'fetching' }
}

export function apiFailed(error) {
  return { type: types.API, status: 'error', error}
}

export function apiSuccess(response) {
  return { type: types.API, status: 'success', response}
}

// import get from './ajax'
export { get } from './ajax'
