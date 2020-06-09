import React from 'react';
import {connect} from 'react-redux';

import View from '../../components/common/View';

class Register extends React.Component {
    render() {
        return(
            <View>

            </View>
        )
    }
};

const mapStateToProps = state => (
    state.AuthReducer
);

export default connect(mapStateToProps)(Register);

