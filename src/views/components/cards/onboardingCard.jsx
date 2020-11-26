import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../../store/actions/authActions';

const OnboardingCard = () => {
  const dispatch = useDispatch();
  const signinWithGoogle = () => dispatch(signin('google'));
  const signinWithAnonymous = () => dispatch(signin('anonymous'));

  return (
    <div className="onboarding">

      <div>
        <div className="onboarding__title">Welcome!</div>
        <div className="onboarding__description">Pet Feed Tracker позволяет следить за режимом питания вашего питомца</div>
      </div>

      <img className="onboarding__image" src="./images/dog.png" alt="woman with a dog" />

      <nav className="onboarding__buttons">
        <button onClick={signinWithGoogle} className="btn btn-primary">
          Войти использую Google
        </button>
        <button onClick={signinWithAnonymous} className="btn btn-secondary">
          Создать аккаунт позже
        </button>
      </nav>
    </div>
  );
};

export default OnboardingCard;
