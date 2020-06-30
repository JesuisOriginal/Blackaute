import React from "react";
import Routes from "./routes";

import {Provider} from 'react-redux';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
