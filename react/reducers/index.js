import { combineReducers } from 'redux'
import app from './app'
import route from './route'
import api from './api'

const rootReducer = combineReducers({
  app,
  route,
  api
})

export default rootReducer