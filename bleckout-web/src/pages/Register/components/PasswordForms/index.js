import React from 'react';
import {Grid, Input, Button} from '@material-ui/core';
import './styles.css';

export default function PasswordForms({onChange = null, onSubmit = null}) {
    return (
        <Grid container direction='row' spacing={2} justify='center' alignItems='center' className='container_password_method'>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='name' placeholder='NOME' onChange={(e) => onChange('name',e.target.value)}  />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='last_name' placeholder='SOBRENOME' onChange={(e) => onChange('last_name',e.target.value)}  />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='email' placeholder='EMAIL' onChange={(e) => onChange('email',e.target.value)}  />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='password' placeholder='SENHA' onChange={(e) => onChange('password',e.target.value)}  />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='phone' placeholder='TELEFONE' onChange={(e) => onChange('phone',e.target.value)}  />
            </Grid>
            <Grid item xs={12} md={6}>
                <Input className='input_password_method' type='number' placeholder='CNPJ' onChange={(e) => onChange('reg_num',e.target.value)}  />
            </Grid>
            <Grid xs={12}>
                <Grid container spacing={4} direction='row-reverse'>
                    <Grid item xs={12} md={6}>
                        <Button className='btn_password_method' variant='outlined' onClick={onSubmit}>CADASTRAR</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}