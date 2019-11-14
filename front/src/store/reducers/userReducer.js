import { LOG_IN, FETCH_USER, LOG_OUT } from "../constants";

const initialState = {
  user: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOG_IN:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: actions.user
      };
    case FETCH_USER:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: actions.user
      };

    case `${LOG_OUT}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
      };
    case `${LOG_OUT}_PENDING`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
      };
    case `${LOG_OUT}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: {}
      };

    default:
      return state;
  }
};
