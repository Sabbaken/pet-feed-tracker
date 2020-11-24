const initialState = {
  pets: [],
  posting: false
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

    case 'ADD_FEED_SUCCESS':
      return {
        ...state,
        posting: false
      };

    case 'ADD_FEED_START':
      return {
        ...state,
        posting: true
      };

    case 'ADD_FEED_ERROR':
      return {
        ...state,
        posting: false
      };

    case 'ADD_PET_SUCCESS':
      return {
        ...state,
      };

    case 'ADD_PET_ERROR':
      return {
        ...state,
      };

    default:
      return state;
  }
};
