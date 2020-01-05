import { SET_LOGIN_CREDS } from './actions'

const initialState = {
  username: null,
  password: null,
  firstname: null,
  lastname: null,
  token: null,
  authErr: false,
  authErrMessage: null
}

export const setLogin = (previousState = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_CREDS:
      console.log("Payload: ", JSON.stringify(action.payload))
      fetch('http://0.0.0.0:8080/login', {

        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        //body: JSON.stringify(action.payload)
        body: action.payload
      })
      .then( response => response.json())
      .then(res => {
        return {
          ...previousState,
          username: res.username,
          firstname: res.firstname,
          lastname: res.lastname,
          token: res.token
        }
      }).catch( err => {

        console.log("fetch error: ", err)
        return {
          ...previousState,
          authErr: true,
          authErrMessage: err.error
        }
      });
      break
    default:
      return previousState
  }
}
