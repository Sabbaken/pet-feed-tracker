import {
  UPDATE_DISPLAY_NAME_ERROR,
  UPDATE_DISPLAY_NAME_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  error: null,
  initialList: [],
  filteredList: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DISPLAY_NAME_SUCCESS:
      return {
        ...state,
      };

    case UPDATE_DISPLAY_NAME_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
