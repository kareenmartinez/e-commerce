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
<<<<<<< HEAD
        didInvalidate: true
=======
        didInvalidate: true,
>>>>>>> 167b55a75f4ba47e698890150bc5957320724b1c
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
<<<<<<< HEAD
        register: payload.register,
        isUnique: true
=======
        register: actions.payload,
>>>>>>> 167b55a75f4ba47e698890150bc5957320724b1c
      };

    default:
      return state;
  }
}
