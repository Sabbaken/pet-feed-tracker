import { sortFeedsByDaysOfWeek } from '../../helpers/sortFeedsByDaysOfWeek';

const initialState = {
  pets: [],
  posting: false,
  feedsByDays: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let feedsByDays;

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
      feedsByDays = sortFeedsByDaysOfWeek(payload.feeds);

      return {
        ...state,
        posting: false,
        feedsByDays: { [payload.petId]: [...feedsByDays] }
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

    case 'FETCH_FEEDS_BY_DAYS_SUCCESS':
      feedsByDays = sortFeedsByDaysOfWeek(payload.feeds);

      return {
        ...state,
        feedsByDays: { [payload.petId]: [...feedsByDays] }
      };

    case 'FETCH_FEEDS_BY_DAYS_ERROR':
      return {
        ...state,
      };

    default:
      return state;
  }
};
