import {createStore} from 'redux';
import reducers from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducers, devToolsEnhancer({ realtime: true}));

export default store;