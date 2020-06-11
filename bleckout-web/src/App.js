import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux'
import {ThemeProvider} from '@material-ui/core'
import './App.css';

import store from './store';
import theme from './themes';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
