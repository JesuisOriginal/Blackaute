import React from 'react';
import { login } from '../../store/ducks/Auth';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import View from '../../components/common/View';
import {
    Grid,
    Typography,
    Input,
    Button,
    Divider
} from '@material-ui/core';

import './styles.css';

const mock = [
    {
        username: 'giovanninp',
        password: 'teste123',
        role: 'seller',
    },
    {
        username: 'joao',
        password: 'teste123',
        role: 'client',
    }
]

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'giovanninp',
            password: 'teste123'
        }
    }

    navigateToMain() {
        const { logged_in, user, history } = this.props;
        if (logged_in && user.username) {
            history.push('/', {})
        }
    }

    componentDidMount() {
        this.navigateToMain()
    }

    handleInputChange = (event) => {
        const { value, id } = event.target;
        switch (id) {
            case 'login_username':
                return this.setState({ username: value });
            case 'login_password':
                return this.setState({ password: value });
            default:
                break;
        }
        console.log(value, id)
    }

    navigateRegister = () => {
        const { history } = this.props;
        history.push('/cadastro')
    }

    handleLogin = () => {
        const { username, password } = this.state;
        const { history } = this.props;
        const user = mock.filter(el => el.username === username && el.password === password)[0];
        console.log(user);
        if (user) {
            this.props.dispatch({ type: 'LOGIN', user });
            history.push('/');
        }
    }

    render() {
        console.log('login', this.props, this.state)
        return (
            <Grid container spacing={2} alignItems='center' justify='center' >
                <Grid item xs={12}>
                    <Typography
                        className='logo'
                        align='center'>
                        LOGO
                            </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Input
                        className='input_login'
                        placeholder='username'
                        id='login_username'
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Input
                        className='input_login'
                        placeholder='password'
                        value={this.state.password}
                        type='password'
                        id='login_password'
                        onChange={this.handleInputChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className='login_btn'
                        variant='outlined'
                        color='primary'
                        onClick={this.handleLogin} >
                        LOGIN
                            </Button>
                </Grid>
                <Divider style={{ width: '100%', marginBottom: '20px', marginTop: '20px' }} />
                <Grid item xs={12}>
                    <Button
                        className='register_btn'
                        variant='outlined'
                        color='secondary'
                        onClick={this.navigateRegister} >
                        REGISTRAR
                            </Button>
                </Grid>
            </Grid>
        )
    }
};

const mapStateToProps = state => (
    state.AuthReducer
);


export default connect(mapStateToProps)(Auth);