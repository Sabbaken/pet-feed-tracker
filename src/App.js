import React from 'react';
import { Route, Router, Switch } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import './styles/main.scss';

import Onboarding from './views/pages/onboarding';

export const history = createBrowserHistory()

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/onboarding" component={Onboarding}/>
          </Switch>
        </Router>
      </Provider>
      <ToastContainer/>
    </>
  );
}

export default App;
