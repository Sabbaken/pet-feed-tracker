import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
  error: null,
};


export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
      };

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        error: false,
      };

    case SIGNOUT_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
