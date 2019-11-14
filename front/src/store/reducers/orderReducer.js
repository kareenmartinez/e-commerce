import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  FETCH_ORDER,
  CLICK_NEW_ADDRESS,
  ADDRESS
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
    case FETCH_ORDER:
      console.log(actions.payload, "payloaaaaaaaaad");
      return {
        ...state,
        order: actions.payload[0]
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
      };

    default:
      return state;
  }
}
