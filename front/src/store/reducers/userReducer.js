import { LOG_IN, FETCH_USER } from "../constants";

const initialState = {

  user: []
};

export default (state = initialState, actions) => {
  console.log("ENTRE AL REDUCER");
  switch (actions.type) {
<<<<<<< HEAD
    case "LOG_USER":
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
        user: actions.user
      };
=======

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

>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93
    default:
      return state;
  }
};
