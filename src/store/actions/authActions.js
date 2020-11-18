import { toast } from 'react-toastify';
import history from '../../history';

export const signin = (provider) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const authProvider = new firebase.auth.GoogleAuthProvider();
  authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  switch (provider) {
    case 'google':
      firebase.auth().useDeviceLanguage();

      firebase.auth().signInWithPopup(authProvider)
      .then(() => {
        history.push('/');
        dispatch({ type: 'LOGIN_SUCCESS' });
        window.location.reload();
      })
      .catch((error) => {
        toast.error('Что-то пошло не так');
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
      break;

    case 'anonymous':
      firebase.auth().signInAnonymously()
      .then(() => {
        history.push('/');
        dispatch({ type: 'LOGIN_SUCCESS' });
        window.location.reload();
      })
      .catch((error) => {
        toast.error('Что-то пошло не так');
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
      break;

    default:
      break
  }
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signOut()
  .then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  })
  .catch((error) => {
    toast.error('Что-то пошло не так');
    dispatch({ type: 'SIGNOUT_ERROR', payload: error });
  });
};
