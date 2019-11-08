import { RECEIVED_PRODUCTS } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  products: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${RECEIVED_PRODUCTS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${RECEIVED_PRODUCTS}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${RECEIVED_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        products: actions.payload
      };

    default:
      return state;
  }
};
