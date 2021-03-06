import { toast } from 'react-toastify';
import history from '../../history';
import {
  ADD_FEED_ERROR,
  ADD_FEED_START,
  ADD_FEED_SUCCESS,
  ADD_PET_ERROR,
  ADD_PET_SUCCESS,
  FETCH_FEEDS_BY_DAYS_ERROR,
  FETCH_FEEDS_BY_DAYS_SUCCESS,
} from '../../constants/actionTypes';

export const fetchFeedsByDays = (petId) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const state = getState();
  const { feeds } = state.firebase.profile.pets[petId];

  if (feeds === undefined) {
    dispatch({ type: FETCH_FEEDS_BY_DAYS_ERROR });
  }

  dispatch({ type: FETCH_FEEDS_BY_DAYS_SUCCESS, payload: { feeds, petId } });
};

export const addFeed = (amount, petId) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const state = getState();

  const firestore = getFirestore();
  const { uid } = state.firebase.auth;

  dispatch({ type: ADD_FEED_START });
  const userDockRef = firestore.collection('users').doc(uid);

  userDockRef.get()
    .then((doc) => {
      if (doc.data() === undefined) {
        dispatch({ type: ADD_FEED_ERROR });
        toast.success('Изменения не сохранены');
      }

      const updatedDoc = doc.data();
      const timestamp = Date.now();

      if (updatedDoc.pets[petId].feeds === undefined) {
        updatedDoc.pets[petId].feeds = [];
      }

      updatedDoc.pets[petId].feeds.push({ timestamp, amount });

      userDockRef.set(updatedDoc)
        .then(() => {
          const { feeds } = state.firebase.profile.pets[petId];
          feeds.push({ timestamp, amount });
          dispatch({ type: ADD_FEED_SUCCESS, payload: { feeds, petId } });
        }).catch((error) => {
          dispatch({ type: ADD_FEED_ERROR, payload: error });
          toast.success('Изменения не сохранены');
        });
    })
    .catch((error) => {
      dispatch({ type: ADD_FEED_ERROR, payload: error });
      console.error('нет такого дока userDockRef');
    });
};

export const addNewPet = (name) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const state = getState();
  console.log('addNewPet');
  const firestore = getFirestore();
  const { uid } = state.firebase.auth;
  const userDockRef = firestore.collection('users').doc(uid);

  userDockRef.get()
    .then((doc) => {
      if (doc.data() !== undefined) {
        dispatch({ type: ADD_PET_ERROR });
        toast.success('Изменения не сохранены');
      }

      const updatedDoc = doc.data();

      if (updatedDoc.pets === undefined) {
        updatedDoc.pets = [];
      }

      const newPetId = updatedDoc.pets.length;
      updatedDoc.pets.push({ id: newPetId, name, feeds: [] });

      userDockRef.set(updatedDoc)
        .then(() => {
          dispatch({ type: ADD_PET_SUCCESS });
          history.push('/');
        }).catch((error) => {
          dispatch({ type: ADD_PET_ERROR, payload: error });
          toast.success('Изменения не сохранены');
        });
    })
    .catch((error) => {
      dispatch({ type: ADD_PET_ERROR, payload: error });
      console.error('нет такого дока userDockRef');
    });
};
