import {combineReducers} from 'redux';
import MainReducer from './main';
import theOrder from './theOrder';
import OrdersReducer from './order';

const reducers = combineReducers({
    MainReducer,
    theOrder,
    OrdersReducer
});

export default reducers;