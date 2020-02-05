import * as actions from './consts'
import history from '../history'

export const startLogin = (payload) => ({
    type: actions.START_LOGIN,
    payload
})

export const finishLogin = (payload, json) => ({
    type: actions.FINISH_LOGIN,
    payload,
    json
})

export const failedLogin = () => ({
    type: actions.FAILED_LOGIN,
})

export const setLogin = payload => {
    return dispatch => {
        dispatch(startLogin(payload))
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if( response.status !== 200 ) {
                dispatch(failedLogin())
            }
            else {
                history.replace('/home')
                console.log(history)
                response.json()
                .then(json => {
                    dispatch(finishLogin(payload, json))
                })
            }
        })
    }
}
