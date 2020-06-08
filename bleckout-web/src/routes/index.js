import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';

const Main = () => (
  <Route path='/'>
    <Route component={MainPage} />
    <Route path='/login' component={AuthPage} />
    <Route path='/cadastro' component={() => <></>} />
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
  <Router>
    <Switch>
      <Main />
      <Client />
      <Seller />
    </Switch>
  </Router>
);

export default Routes;