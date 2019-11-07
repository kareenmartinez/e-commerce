import { LOG_IN, LOG_USER } from "../constants"
import axios from "axios"

const logUser = (user) => {
    console.log('ENTER LOGUSER')
    return {
        type: LOG_USER,
        user: user
    }
}
export const logIn = (email, password) => ({
    type: LOG_IN,
    payload: (axios.post('/api/logIn', { email: email, password: password })
        .then(res => res.data
        )
        .then(user => {
            dispatch(logUser(user));
        }).catch((err) => { console.log(err, 'hola, soy tu dolor de cabeza') }))
})