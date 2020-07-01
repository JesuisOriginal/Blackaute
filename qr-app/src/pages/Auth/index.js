import React from 'react';
import {connect} from 'react-redux';

import {Types} from '../../store/reducers/main';

class AuthPage extends React.Component {

    handleLogin = () => {
        const {dispatch} = this.props;
    };

    componentDidMount() {
        const {user, history} = this.props;
        if(user.username) {
            history.push('/');
        }
    }

    render() {
        console.log(this.props)
        return(
            <></>
        )
    }
};

const mapStateToProps = ({MainReducer}) => ({
    user: MainReducer.user,
    loading: MainReducer.loading
});

export default connect(mapStateToProps)(AuthPage);