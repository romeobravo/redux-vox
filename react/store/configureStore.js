import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const configureStore = createStore(rootReducer, initialState);
  return configureStore;
}