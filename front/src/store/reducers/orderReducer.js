import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY
} from "../constants";
const initialState = {
  isFetching: false,
  didInvalidate: false,
  quantity: 0,
  added: [],
  address: "",
  confirm: false,
  buy: false
};

export default function orderReducer(state = initialState, actions) {
  switch (actions.type) {
    case `${ADD_ITEM}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${ADD_ITEM}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${ADD_ITEM}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
        //pon el state que quieras llamar :)
      };

    default:
      return state;
  }
}
