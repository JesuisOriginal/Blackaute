import {combineReducers} from 'redux';
import MainReducer from './main';
import OrdersReducer from './order';

const reducers = combineReducers({
    MainReducer,
    OrdersReducer
});

export default reducers;