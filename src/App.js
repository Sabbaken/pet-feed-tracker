import React, { useState } from 'react';
import {Route, Switch, Router } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import firebase from './firebase/firebase'
import store from './store';
import './styles/main.scss';
import history from './history';
import Onboarding from './views/pages/onboarding';
import Main from './views/pages/main';
import Loader from './views/components/loader';



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
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/onboarding" component={Onboarding}/>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
