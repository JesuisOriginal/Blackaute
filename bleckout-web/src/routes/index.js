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

import SellerHome from '../pages/Home/Seller';

import NavBar from '../components/NavBar';
import View from '../components/common/View';

const Main = () => (
  <Route path='/'>
    <Route path='/' component={MainPage} exact />
    <Route path='/login' component={AuthPage} exact />
    <Route path='/cadastro' component={RegisterPage} />
  </Route>
);

const Client = () => (
  <>
    <Route path='/' component={() => <>hello</>} />
  </>
);

const Seller = () => (
  <Route path='/'>
    <Route path='/' component={SellerHome} />
  </Route>
);

const Application = ({ content }) => (
    <Router >
      <Switch>
        {!content.logged_id && <Main />}
        {content.user && content.user.role === 'client' && <Client />}
        {content.user && content.user.role === 'seller' && <Seller />}
      </Switch>
    </Router>
);


class Routes extends React.Component {
  render() {
    console.log('route', this.props);
    return (
      <View  logged={this.props.logged_id} history={this.props.history}>
        <Application content={this.props} />
      </ View>
    )
  }
}

const mapStateToProps = ({ AuthReducer }) => {
  return (
    AuthReducer
  )
}

export default connect(mapStateToProps)(Routes);