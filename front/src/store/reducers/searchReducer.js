import { SEARCH_PRODUCTS } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  search: ""
};

export default (state = initialState, actions) => {
  console.log(actions);
  console.log(SEARCH_PRODUCTS);

  switch (actions.type) {
    case `${SEARCH_PRODUCTS}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${SEARCH_PRODUCTS}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${SEARCH_PRODUCTS}_FULFILLED`:
      console.log(actions.payload);

      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        search: actions.payload
      };

    default:
      return state;
  }
};
