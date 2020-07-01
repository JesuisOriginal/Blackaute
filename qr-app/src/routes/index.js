import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Test from '../components/test';
import ReaderPage from '../pages/Reader';
import HomePage from '../pages/Home';
import BottomNav from '../components/BottomNav';
import ProductsPage from '../pages/Products';
import MapPage from '../pages/MapPage';
import AuthPage from '../pages/Auth';
import Market from '../pages/Market';
import SideNav from '../components/SideNav';

import {Grid, Drawer} from '@material-ui/core';
import {Home, CropFree, Toc} from '@material-ui/icons';

const DEFAULT_ROUTES = [
  {
    path: '/',
    exact: true,
    icon:Home,
    name:'Home',
    component: HomePage
  },
  {
    path: '/auth',
    exact: true,
    name: 'Auth',
    // icon:'login',
    component: AuthPage
  },
  {
    path: '/reader',
    exact: true,
    icon: CropFree,
    name:'Leitor',
    component: ReaderPage
  },
  {
    path: '/products',
    exact: true,
    icon: Toc,
    name:'Barris',
    component: ProductsPage
  },
  {
    path: '/market',
    exact: true,
    icon: Toc,
    name:'Market',
    component: Market
  },
  {
    path: '/map',
    exact: true,
    // icon:,
    component: MapPage
  }
];

export default class RootRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: DEFAULT_ROUTES,
      loading: false,
      actualPage:0,
      screenType: 0
    }
  };

  handleSetScreenType({height, width}) {
    if(height >= width) {
      this.setState({screenType:1}) //MOBILE
    } else {
      this.setState({screenType:0}) //DESKTOP && LANDSCAPED SCREEN
    }
    // console.log(height, width);
  }

  componentDidMount() {
    this.handleSetScreenType ({
      width: window.screen.width,
      height: window.screen.height
    });
  }

  styles = () => (
    this.state.screenType ? ({
      'padding': 0,
    }) : ({
      'paddingLeft': '8rem',
    })
  )

  render() {
    const {routes, screenType} = this.state;
    console.log(screenType)
    return (
      <Router>
            <div style={{
              paddingLeft: screenType ? '' : '8rem',
              paddingBottom: screenType ? '2rem' :'',
            }}>
              <Switch>
                {routes.map((route, index) => (
                  <Route key={`route_${index}`} path={route.path} exact={route.exact} component={route.component} />
                  ))}
              </Switch>
          </div>
          {screenType ? <BottomNav {...this.state} screenType={screenType}/>:<SideNav />}
      </Router>
    );
  }
};
