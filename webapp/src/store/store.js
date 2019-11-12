import { createStore } from 'redux'
import { setLogin } from './reducer'

const store = createStore(setLogin)
export default store
