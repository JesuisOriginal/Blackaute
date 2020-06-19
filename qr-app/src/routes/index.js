import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Test from '../components/test';
import ReaderPage from '../pages/Reader';
import HomePage from '../pages/Home';
import BottomNav from '../components/BottomNav';
import ProductsPage from '../pages/Products';
import MapPage from '../pages/MapPage';

export default class RootRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/reader" component={ReaderPage} exact/>
          <Route path="/products" component={ProductsPage} exact/>
          <Route path="/map" component={MapPage} exact/>
        </Switch>
        <BottomNav />
      </Router>
    );
  }
}
