import React from 'react';
import {connect} from 'react-redux';
import auth from '../../services/db/auth';
import {Types} from './redux/reducer';

import {Grid, Box, Divider} from '@material-ui/core';
import {Container, SidebarContainer, MainContainer, SidebarHeader, HeaderTitle, SidebarDivider, LogoContainer, ImageItem} from './styles';
import AuthSidebar from './components/AuthSidebar';
import LoginInput from './components/LoginInput';


const INTIAL_STATE = {
  credentials: {},
  register:{}
}

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = INTIAL_STATE;
    }

    handleUpdate = (category, label, value) => (this.setState({
      ...this.state,
      [`${category}`]:{
        ...this.state[`${category}`],
        [`${label}`]: value
      }
    }))

    handleChange = ({target}) => {
      const {value, id} = target;
      this.handleUpdate('credentials', id, value)
      console.log(id,value);
    }

    handleLogin = (data) => {
      const {history, login} = this.props;
      login(data);
      history.push('/');
    }
    
    handleSubmit = () => {
        auth.login(this.state.credentials, {onSuccess: this.handleLogin});
    };

    componentDidMount() {
        const {logged_in, history} = this.props;
        console.log('Auth',this.props);
        
        if(logged_in) {
            history.push('/');
        }
    }

    //teste@teste.com teste123

    render() {
        console.log('auth',this.props)
        return(
          <Container>
            <SidebarContainer>
              <SidebarHeader>
                <HeaderTitle>Realize o seu login</HeaderTitle>
              </SidebarHeader>
              <AuthSidebar>
                <LoginInput onChange={this.handleChange} onSubmit={this.handleSubmit} />
              </AuthSidebar>
            </SidebarContainer>
            <MainContainer>
              <LogoContainer>
                <ImageItem />
              </LogoContainer>
            </MainContainer>
          </Container>
        )
    }
};

const mapStateToProps = ({AuthReducer}) => ({
    userData: AuthReducer.userData,
    logged_in: AuthReducer.logged_in
});

const mapDispatchToProps = dispatch => ({
    login: ({user}) => dispatch({type:Types.login, userData: user }),
    setLoading: (loading) => dispatch({type: Types.setUpdateLoading, loading}),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);