import { toast } from 'react-toastify';
import {
  UPDATE_DISPLAY_NAME_ERROR,
  UPDATE_DISPLAY_NAME_SUCCESS,
} from '../../constants/actionTypes';

export const updateProfile = (updatedProfile) => (dispatch, getState, { getFirestore, getFirebase }) => {
  const firebase = getFirebase();
  const functions = firebase.app().functions('europe-west3');

  functions.httpsCallable('updateUserProfile')({ ...updatedProfile })
    .then(() => {
      toast.success('Изменения сохранены');
      dispatch({ type: UPDATE_DISPLAY_NAME_SUCCESS });
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch({ type: UPDATE_DISPLAY_NAME_ERROR, payload: error });
    });
};
