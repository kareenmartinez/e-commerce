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
