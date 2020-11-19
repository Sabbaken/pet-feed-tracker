import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import firebase from './firebase/firebase'
import './styles/main.scss';
import history from './history';
import Onboarding from './views/pages/onboarding';
import Main from './views/pages/main';
import Loader from './views/components/loader';
import Settings from './views/pages/settings';
import Articles from './views/pages/articles';

function App() {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true
  });

  React.useEffect(() => firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setAuthState({
        authenticated: true,
        initializing: false
      });
    } else {
      setAuthState({
        authenticated: false,
        initializing: false
      });
    }
  }), [setAuthState]);

  if (authentication.initializing) {
    return <Loader/>;
  }

  if (!authentication.initializing && !authentication.authenticated) {
    history.push('/onboarding')
  }

  return (
    <>
      <Router history={history}>
        <Provider store={store}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/onboarding" component={Onboarding}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/articles" component={Articles}/>
        </Provider>
      </Router>
    </>
  );
}

export default App;
