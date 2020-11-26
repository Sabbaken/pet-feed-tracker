import { toast } from 'react-toastify';
import { FETCH_ARTICLES_SUCCESS } from '../../constants/actionTypes';

export const fetchArticles = (provider) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const articlesCollection = firestore.collection('articles');

  articlesCollection.get()
    .then((snapshot) => {
      const articles = [];
      snapshot.docs.map((doc) => articles.push({ ...doc.data(), id: doc.id }));
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: articles });
      toast.error('Не удалось загрузить статьи');
    }).catch((error) => {
      dispatch({ type: 'FETCH_ARTICLES_ERROR', payload: error });
    });
};
