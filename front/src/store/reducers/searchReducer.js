import { FETCH_PRODUCT } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  search: {}
};

export default (state = initialState, actions) => {
  console.log("ENTRPPPPOO");
  console.log(actions);

  switch (actions.type) {
    case `${FETCH_PRODUCT}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${FETCH_PRODUCT}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${FETCH_PRODUCT}_FULFILLED`:
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
