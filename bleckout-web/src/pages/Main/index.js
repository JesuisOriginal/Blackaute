import React from 'react';
import {connect} from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user:{}
    }
  }

  updateUser(user) {
    this.setState({user})
  }

  componentDidMount() {
    const {logged_id, user, history} = this.props;
    this.updateUser(user);
    if(!logged_id){
      history.push('/login',{data:'hello'})
    }
  }

  render() {
    return (
      <>
        Hello
      </>
    )
  }
};

const mapStateToProps = state => (
  state.AuthReducer
);

export default connect(mapStateToProps)(Main);