import { SET_LOGIN_CREDS } from './actions'

const initialState = {
  username: null,
  password: null
}

export const setLogin = (previousState = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_CREDS:
      return {
        ...previousState,
        username: action.payload.username.value,
        password: action.payload.password.value
      }
    default:
      return previousState
  }
}
