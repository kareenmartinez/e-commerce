// import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import {
  ADD_ITEM,
  ADD_ADDRESS,
  CONFIRM_ORDER,
  FETCH_ORDER,
  CLICK_NEW_ADDRESS,
  ADDRESS,
  SUBTRACT,
  REMOVE_ITEM,
  BUY,
  ADD,
  DROP_ORDER
} from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  added: [],
  address: "",
  clickNewAddress: false,
  buy: false,
  order: []
};

export default function orderReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ORDER:
      return {
        ...state,
        order: actions.payload[0]
        // input: actions.payload[0].quantity
        //pon el state que quieras llamar :)
      };
    case CLICK_NEW_ADDRESS:
      return {
        ...state,
        clickNewAddress: true
      };

    case ADDRESS:
      return {
        ...state,
        address: actions.payload
      };

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
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${SUBTRACT}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        order: actions.payload[0]
      };
    case `${DROP_ORDER}`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        order: []
      };
    default:
      return state;
  }
}

//--------------------------------------------------------------
