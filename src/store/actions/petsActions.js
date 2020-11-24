import { toast } from 'react-toastify';

export const fetchInitialData = () => (dispatch, getState, { getFirebase, getFirestore }) => {

};

export const addFeed = (amount, petId) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const state = getState();

  const firestore = getFirestore();
  const uid = state.firebase.auth.uid;
  dispatch({ type: 'ADD_FEED_START' });
  const userDockRef = firestore.collection('users').doc(uid);

  userDockRef.get()
  .then((doc) => {
    if (doc.data() !== undefined) {
      dispatch({ type: 'ADD_FEED_ERROR' });
      toast.success('Изменения не сохранены');
    }

    let updatedDoc = doc.data();
    let timestamp = Date.now();

    if (updatedDoc.pets[petId].feeds === undefined) {
      updatedDoc.pets[petId].feeds = []
    }

    updatedDoc.pets[petId].feeds.push({ timestamp, amount });

    userDockRef.set(updatedDoc)
    .then(() => {
      dispatch({ type: 'ADD_FEED_SUCCESS', payload: { timestamp, amount } });
    }).catch((error) => {
      dispatch({ type: 'ADD_FEED_ERROR', payload: error });
      toast.success('Изменения не сохранены');
    })
  })
  .catch((error) => {
    dispatch({ type: 'ADD_FEED_ERROR', payload: error });
    console.error('нет такого дока userDockRef');
  });
};
