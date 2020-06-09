import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';
import RegisterPage from '../pages/Register';

const Main = () => (
  <Route path='/'>
    <Route path='/' component={MainPage} exact/>
    <Route path='/login' component={AuthPage} exact />
    <Route path='/cadastro' component={RegisterPage} />
  </Route>
);

const Client = () => (
  <Route path='/'>
    <Route path='/produtos' component={() => <></>} />
  </Route>
);

const Seller = () => (
  <Route path='/'>
    <Route path='/produtos' component={() => <></>} />
  </Route>
);

const Routes = () => (
  <Router >
    <Switch>
      <Main />
      <Client />
      <Seller />
    </Switch>
  </Router>
);

export default Routes;