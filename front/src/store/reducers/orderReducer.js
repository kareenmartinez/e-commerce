import { ADD_ITEM, ADD_ADDRESS, REMOVE_ITEM, CONFIRM_ORDER, BUY } from "../constants"
const initialState = {
    isFetching: false,
    didInvalidate: false,
    quantity: 0,
    added: [],
    address: "",
    confirm: false,
    buy: false
};




//-------------------remove--------------------------------------------------------------------

export default function orderReducer(state = initialState, actions) {
    switch (actions.type) {
        case `${REMOVE_ITEM}_REJECTED`:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
            };
        case `${REMOVE_ITEM}_PENDING`:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case `${REMOVE_ITEM}_FULFILLED`:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                added:actions.payload
                //traer todo lo del carrito de bd y guardarlo en el array, estaria
                //actualizado ya que se elimino antes el producto de la bd
            };

//-------------------remove--------------------------------------------------------------------

        default:
            return state;

    }
}
