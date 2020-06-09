import React from 'react';
import { connect } from 'react-redux';

import View from '../../components/common/View';
import { Grid, Typography, Input, Button } from '@material-ui/core';

import PasswordForms from './components/PasswordForms';

import './styles.css';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            method: '',
            forms: {}
        };
        this.handleUpdateForms = this.handleUpdateForms.bind(this);
    };

    handleSetMehthod(value) {
        this.setState({ method: value })
    };

    handleUpdateForms = (type,value) => {
        this.setState({
            ...this.state,
            forms:{
                ...this.state.forms,
                [type]: value,
            }
        })
    };

    componentDidMount() {
        const {logged_in, history} = this.props;
        if(logged_in) {
            history.push('/');
        }
        console.log('register',this.props)
    };

    methodsRenders = {
        voucher: <div />,
        password: <PasswordForms onChange={this.handleUpdateForms} />
    }

    render() {
        console.log(this.state)
        return (
            <View>
                {!this.state.method.length ?
                    <Grid container spacing={2} alignItems='center' justify='space-between' direction='row' >
                        <Grid item xs={12}>
                            <Typography className='title_register' variant='h2' align='center'>
                                CADASTRE-SE
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems='space-center' justify='space-between' direction='row'>
                                <Grid item xs={12}>
                                    <Button
                                        className='opt_register'
                                        variant='outlined'
                                        id='voucher_method'
                                        onClick={() => this.handleSetMehthod('voucher')}
                                    >
                                        POR VOUCHER
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant='outlined'
                                        className='opt_register'
                                        id='voucher_method'
                                        onClick={() => this.handleSetMehthod('password')}
                                    >
                                        POR SENHA
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    : this.methodsRenders[this.state.method]}
            </View>
        )
    }
};

const mapStateToProps = state => (
    state.AuthReducer
);

export default connect(mapStateToProps)(Register);

