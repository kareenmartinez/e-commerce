import {
    ADD_ITEM,
    ADD_ADDRESS,
    REMOVE_ITEM,
    CONFIRM_ORDER,
    BUY, ADD,
    FETCH_ORDER, SUBTRACT
} from "../constants";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    added: [],
    address: "",
    buy: false,
    order: [],

};

export default function orderReducer(state = initialState, actions) {

    switch (actions.type) {

        case FETCH_ORDER:
            console.log(actions.payload[0], "que onda que esta llegando?", actions.type)
            return {
                ...state,
                order: actions.payload[0],
                // input: actions.payload[0].quantity
                //pon el state que quieras llamar :)
            };



        //---------

        case `${ADD}_REJECTED`:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false
            };
        case `${ADD}_PENDING`:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case `${ADD}_FULFILLED`:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                order: actions.payload[0]
            };
        case `${SUBTRACT}_REJECTED`:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false
            };
        case `${SUBTRACT}_PENDING`:

            console.log(actions.payload, "que onda que esta llegando?", actions.type)
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case `${SUBTRACT}_FULFILLED`:

            console.log(actions.payload, "que onda que esta llegando?", actions.type)
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                order: actions.payload[0]
            };
        default:
            return state;
    }
}
