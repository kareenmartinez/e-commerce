import { LOG_USER } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  user: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${LOG_USER}`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: actions.payload
      };

    default:
      return state;
  }
};
