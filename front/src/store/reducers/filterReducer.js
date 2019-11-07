import { PRODUCTS_CATEGORIES } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  products: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${PRODUCTS_CATEGORIES}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${PRODUCTS_CATEGORIES}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${PRODUCTS_CATEGORIES}_FULFILLED`:
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
