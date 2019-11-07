import { LOG_IN } from "../constants"
import axios from "axios"

export const logIn = (email, password) => ({
    type: LOG_IN,
    payload: (axios.post('/api/logIn', { email: email, password: password })
        .then(res => res.data
        )
        .then(user => {
            dispatch(logUser(user));
        }).catch((err) => { console.log(err, 'hola, soy tu dolor de cabeza') }))
})