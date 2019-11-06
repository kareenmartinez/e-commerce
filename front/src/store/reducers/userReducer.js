const initialState = {
  isFetching: false,
  didInvalidate: false,
  nuevoEstado: []
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
        didInvalidate: false,
        movie: actions.payload.nuevoEstado
      };

    default:
      return state;
  }
};
