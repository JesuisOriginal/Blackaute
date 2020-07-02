import {combineReducers} from 'redux';
import MainReducer from './main';
import theOrder from './theOrder';
import OrdersReducer from './order';
import AuthReducer from '../../pages/Auth/redux/reducer';

const reducers = combineReducers({
    MainReducer,
    theOrder,
    OrdersReducer,
    AuthReducer
});

export default reducers;