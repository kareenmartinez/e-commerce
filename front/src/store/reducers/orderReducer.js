import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY,
  DROP_ORDER,
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
    case `${ADD_ITEM}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
        //pon el state que quieras llamar :)
      };
    //--------------------------------------------------------------
    case `${BUY}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${BUY}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${BUY}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
        //pon el state que quieras llamar :)
      };

    case `${DROP_ORDER}`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        order: []
      };

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
