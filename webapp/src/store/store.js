import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { setLogin } from './reducer'
import logger from 'redux-logger'

const store = createStore(
  setLogin,
  applyMiddleware(logger, thunkMiddleware)
)
export default store
