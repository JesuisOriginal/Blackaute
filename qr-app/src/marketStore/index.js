import {createStore} from 'redux';
import reducers from './reducers';

const marketStore = createStore(reducers);

export default marketStore;