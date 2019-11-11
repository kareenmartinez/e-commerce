import { LOG_USER, LOG_IN } from "../actions/userAction";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  user: []
};

export default (state = initialState, actions) => {
  console.log("ENTRE AL REDUCER");
  switch (actions.type) {
    case "LOG_USER":
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
        user: actions.user
      };
    default:
      return state;
  }
};
