import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';
import RegisterPage from '../pages/Register';
import { connect } from 'react-redux';

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

const Application = ({role = null}) => (
  <Router >
    <Switch>
      <Main />
      {role === 'client' && <Client />}
      {role === 'seller' && <Seller />}
    </Switch>
  </Router>
);


class Routes extends React.Component {
  render() {
    console.log('route', this.props);
    return(
      <Application user={this.props} />
    )
  }
}

const mapStateToProps = ({AuthReducer}) => {
  const {user} = AuthReducer;
  return(
    user
  )
}

export default connect(mapStateToProps)(Routes);