import React from 'react';
import {login} from '../../store/ducks/Auth';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    render() {
        console.log('login',this.props,this.state)
        return(
            <></>
        )
    }
};

const mapStateToProps = state => (
    state.AtuhReducer
);

const mapDispatchToProps = dispatch => (
    bindActionCreators({login}, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(Auth);