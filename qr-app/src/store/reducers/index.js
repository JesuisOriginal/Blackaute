import {combineReducers} from 'redux';
import MainReducer from './main';
import theOrder from './theOrder';

const reducers = combineReducers({
    MainReducer,
    theOrder
});

export default reducers;