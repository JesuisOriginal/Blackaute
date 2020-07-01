import React from "react";
import Routes from "./routes";

import {Provider} from 'react-redux';

import store from './store';
import marketStore from './marketStore';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={marketStore}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </Provider>
    );
  }
}
