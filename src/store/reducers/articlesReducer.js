const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: payload,
      };

    case 'FETCH_ARTICLES_ERROR':
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
