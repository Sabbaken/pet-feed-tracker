import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/analytics';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDokFkFmQYbW5DnR8vt8nv-Lj-XgNuEx4",
  authDomain: "pet-feed-tracker.firebaseapp.com",
  databaseURL: "https://pet-feed-tracker.firebaseio.com",
  projectId: "pet-feed-tracker",
  storageBucket: "pet-feed-tracker.appspot.com",
  messagingSenderId: "648923643808",
  appId: "1:648923643808:web:caf20a8fc0b1553ab3aec5",
  measurementId: "G-K8Y9S8KC7K"
};

firebase.initializeApp(config);
firebase.analytics();
firebase.firestore();
firebase.functions();

export default firebase;
