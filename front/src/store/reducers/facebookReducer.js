import { USER_FACEBOOK } from "../constants";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  user: ""
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case USER_FACEBOOK:
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
