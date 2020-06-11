import React from 'react';
import {Grid, Input, Button} from '@material-ui/core';
import './style.css';

export default function VoucherForms({onChange = null, onSubmit = null}) {
    return(
        <Grid container direction='row' spacing={2} justify='center' alignItems='center' className='container_voucher_method'>
            <Grid item xs={12} md={6}>
                <Input className='input_voucher_method' type='text' placeholder='VOUCHER' onChange={(e) => onChange('voucher',e.target.value)}  />
            </Grid>
            <Grid item xs={12}>
                <Button className='btn_voucher_method' variant='outlined' color='primary' onPress={onSubmit}>
                    Cadastrar
                </Button>
            </Grid>
        </Grid>
    )
}