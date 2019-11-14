import { ADD_ITEM, ADD_ADDRESS, REMOVE_ITEM, CONFIRM_ORDER, BUY, ADD, SUBTRACT } from "../constants"
const initialState = {
    isFetching: false,
    didInvalidate: false,
    added: [],
    address: "",
    confirm: false,
    buy: false
};

export default function orderReducer(state = initialState, actions) {
    switch (actions.type) {
        







        default:
            return state;

    }
}
