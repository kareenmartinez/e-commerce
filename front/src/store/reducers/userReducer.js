const initialState = {
  isFetching: false,
  didInvalidate: false
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
      };

    default:
      return state;
  }
};
import { userConstants } from "../constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
