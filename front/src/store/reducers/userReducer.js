import { LOG_IN, FETCH_USER } from "../constants";

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

    default:
      return state;
  }
};
