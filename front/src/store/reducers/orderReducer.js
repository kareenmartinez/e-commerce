import {
  ADD_ITEM,
  ADD_ADDRESS,
  CONFIRM_ORDER,

  FETCH_ORDER,
  CLICK_NEW_ADDRESS,
  ADDRESS,

  BUY,
  DROP_ORDER,
} from "../constants";

import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  added: [],
  address: "",
  clickNewAddress: false,
  buy: false,
  order: []
};
TouchRipple;

export default function orderReducer(state = initialState, actions) {
  switch (actions.type) {
    case `${FETCH_ORDER}_REJECTED `:
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
      return {
        ...state,
        order: actions.payload[0]
<<<<<<< HEAD
      };

    case CLICK_NEW_ADDRESS:
      return {
        ...state,
        clickNewAddress: true
      };

    case ADDRESS:
      console.log("----------------------------------------------------");
      console.log(actions);
      return {
        ...state,
        address: actions.payload
=======
>>>>>>> 32f3248efdf9ad81165970ddf103ca60252bc56d
      };

    default:
      return state;
  }
}
