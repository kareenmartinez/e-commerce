import { REGISTER } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  register: []
};

export function registerReducer(state = initialState, actions) {
  switch (actions.type) {
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        register: actions.payload.register
      };

    default:
      return state;
  }
}
