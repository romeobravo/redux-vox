import { combineReducers } from 'redux'
import app from './app'
import route from './route'

const rootReducer = combineReducers({
  app,
  route
})

export default rootReducer