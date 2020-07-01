// This file takes in data from a mock and will be
//modifed in int he servives, to load from firebase.

import * as data from '../../mocks/pedidos.json';
import React from 'react';
import { connect } from "react-redux";
import updateRequests from '../../store/reducers';

function loadMockData( { order , dispatch } ) {
    
    return (
        <div>
            {dispatch(updateRequests(data))}
            {console.log(order)}
        </div>
    )
}

export default connect(state => ({ order: state.mainReducer.requests }))(loadMockData);
