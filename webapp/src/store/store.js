import { createStore, applyMiddleware } from 'redux'
import { setLogin } from './reducer'
import logger from 'redux-logger'

const store = createStore(
  setLogin,
  applyMiddleware(logger)
)
export default store
