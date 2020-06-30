import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Test from '../components/test';
import ReaderPage from '../pages/Reader';
import HomePage from '../pages/Home';
import BottomNav from '../components/BottomNav';
import ProductsPage from '../pages/Products';
import MapPage from '../pages/MapPage';
import AuthPage from '../pages/Auth';

const DEFAULT_ROUTES = [
  {
    path: '/auth',
    exact: true,
    icon:'login',
    component: AuthPage
  },
  {
    path: '/',
    exact: true,
    icon:'home',
    component: HomePage
  },
  {
    path: '/reader',
    exact: true,
    icon:'',
    component: ReaderPage
  },
  {
    path: '/products',
    exact: true,
    icon:'',
    component: ProductsPage
  },
  {
    path: '/map',
    exact: true,
    icon:'',
    component: MapPage
  }
];

export default class RootRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: DEFAULT_ROUTES,
      loading: false,
      actualPage:0
    }
  };

  render() {
    const {routes} = this.state;
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route key={`route_${index}`} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </Switch>
        <BottomNav {...this.state} />
      </Router>
    );
  }
}
