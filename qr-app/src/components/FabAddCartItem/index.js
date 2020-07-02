import React from 'react';
import {Fab, CircularProgress} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function FabAddCartItem({onClick}){
    // console.log('loading: '+ loading);
    return(
        <Fab style={styles.fab} variant={'round'} onClick={onclick}  size={'medium'} color="secondary" aria-label="add">
            <AddIcon />
        </Fab>
    )
};

const styles = {
    fab: {
        position:'fixed',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
