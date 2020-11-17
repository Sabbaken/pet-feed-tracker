import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducers';
import firebase from '../firebase/firebase';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableClaims: true,
};

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
  ),
);

export default store;
