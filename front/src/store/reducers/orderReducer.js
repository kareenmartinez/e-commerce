import {
    ADD_ITEM,
    ADD_ADDRESS,
    REMOVE_ITEM,
    CONFIRM_ORDER,
    BUY,
    FETCH_ORDER
} from "../constants";
const initialState = {
    isFetching: false,
    didInvalidate: false,
    added: [],
    address: "",
    buy: false,
    order: []
};

export default function orderReducer(state = initialState, actions) {
    switch (actions.type) {

        case FETCH_ORDER:
            console.log(actions.payload, "payloaaaaaaaaad");
            return {
                ...state,
                order: actions.payload[0]
                //pon el state que quieras llamar :)
            };

        default:
            return state;
    }
}
