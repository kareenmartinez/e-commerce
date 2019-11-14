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
  quantity: 0,
  added: [],
  address: "",
  confirm: false,
  buy: false,
  order: []
};

export default function orderReducer(state = initialState, actions) {
  switch (actions.type) {
    case `${FETCH_ORDER}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${FETCH_ORDER}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case FETCH_ORDER:
      return {
        ...state,
        order: actions.payload[0]
      };

    default:
      return state;
  }
}
