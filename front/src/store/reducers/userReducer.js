const initialState = {
  isFetching: false,
  didInvalidate: false,
  user: {}

};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${actions.type}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    case `${actions.type}_PENDING`:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case `${actions.type}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: actions.payload.user,

      };

    default:
      return state;
  }
};
