import React from 'react';
import {styled, Grid, Input, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';

export default function LoginInput({onChange, onSubmit}) {
    return(
        <Container container spacing={4} direction='row' alignItems='center' justify='center'>
            <Grid item xs={12}>
                <InputText placeholder='email' type='email' id='email' onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
                <InputText placeholder='password' type='password' id='password' onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
                <Button style={{width:'100%', padding:'10px'}} variant='contained' onClick={onSubmit}>
                    Acessar
                </Button>
            </Grid>
        </Container>
    )
};

const Container = styled(Grid)({
    width:'100%',
});

const InputText = styled(Input)({
    display:'flex',
    flex:1,
    height: '45px',
    // alignItems:'center',
    // justifyContent:'flex-start',
    // border:'1px solid black',
})
