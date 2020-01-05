import * as actions from './consts'

const initialState = {
  username: null,
  password: null,
  firstname: null,
  lastname: null,
  token: null,
  authErr: false,
  authErrMessage: null,
  startingLogin: false
}

export const setLogin = (previousState = initialState, action) => {
  switch(action.type) {
    case actions.START_LOGIN:
        return {
            ...previousState,
            startingLogin: true
        }
    case actions.FINISH_LOGIN:
        return {
            ...previousState,
            startingLogin: false,
            username: action.payload.username,
            password: action.payload.password,
        }
    case actions.FAILED_LOGIN:
        return {
            ...previousState,
            authErr: true
        }
    default:
      return previousState
  }
}
