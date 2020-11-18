import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const UserProfile = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOut());

  let { displayName, photoURL, email } = auth;

  if (displayName === null) {
    displayName = 'Anonymous signin';
  }

  if (photoURL === null) {
    photoURL = 'https://firebasestorage.googleapis.com/v0/b/pet-feed-tracker.appspot.com/o/user.png?alt=media&token=4ca2bc18-3c16-45de-a185-9ea84af7a6a9';
  }

  if (email === null) {
    email = 'email isn\'t linked';
  }

  return (
    <div className="profile">
      <img className="profile__picture" src={photoURL} referrerPolicy="no-referrer" alt="lecturer" />
      <div className="profile__contacts">
        <span className="profile__name">{`${displayName}`}</span>
        <span className="profile__email">{email}</span>
      </div>
      <div className="profile__link link link-danger" onClick={signOutHandler}>Выйти</div>
    </div>
  );
};

export default UserProfile;
