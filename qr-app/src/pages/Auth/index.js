import React from 'react';
import {connect} from 'react-redux';
import auth from '../../services/db/auth';
import {Types} from './redux/reducer';

import {Grid, Box, Button} from '@material-ui/core';
import {Container, SidebarContainer, MainContainer, SidebarHeader, HeaderTitle, SidebarDivider, LogoContainer, ImageItem, SignUpLink} from './styles';
import AuthSidebar from './components/AuthSidebar';
import LoginInput from './components/LoginInput';
import { ThreeSixty } from '@material-ui/icons';
import RegisterForms from './components/RegisterForms';

const authModes = ['credentials', 'register'];

const INTIAL_STATE = {
  credentials: {},
  register:{},
  authMode: authModes[0],
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
      const {authMode} = this.state;
      this.handleUpdate(
        (authMode === authModes[0] ?  'credentials' : 'register'), id, value
      )
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

    AuthModeHeader = () => (
      this.state.authMode === authModes[0] 
      ? (
        <SidebarHeader>
          <HeaderTitle>Realize o seu login</HeaderTitle>
          <Button onClick={() => this.setState({authMode: authModes[1]})}>Ainda não é cadastrado?</Button>
        </SidebarHeader>
      )
      :(
        <>
        
        </>   
      )
    );

    AuthForms = () => (
      this.state.authMode === authModes[0] 
      ? (
        <LoginInput onChange={this.handleChange} onSubmit={this.handleSubmit} />
      ) 
      : (
        <RegisterForms onChange={this.handleChange} />
      )
    )

    componentDidMount() {
        const {logged_in, history} = this.props;
        console.log('Auth',this.props);
        
        if(logged_in) {
            history.push('/');
        }
    }

    //teste@teste.com teste123

    render() {
        console.log('auth',this.state)
        return(
          <Container>
            <SidebarContainer>
              <this.AuthModeHeader />
              <AuthSidebar onReturn={this.state.authMode !== authModes[0] && ( () =>  this.setState({authMode: authModes[0]}))}>
                <this.AuthForms />
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