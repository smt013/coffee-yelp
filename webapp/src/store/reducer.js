import { SET_LOGIN_CREDS} from './actions'

const initialState = {
  username: null,
  password: null
}

export const setLogin = (previousState = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_CREDS:
      return {
        ...previousState,
        username: action.username,
        password: action.password
      }
    default:
      return previousState
  }
}
