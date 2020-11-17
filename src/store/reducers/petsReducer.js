const initialState = {
  pets: [],
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'FETCH_INITIAL_SUCCESS':
      return {
        ...state
      };

    case 'FETCH_INITIAL_ERROR':
      return {
        ...state,
      };

    default:
      return state;
  }
};
