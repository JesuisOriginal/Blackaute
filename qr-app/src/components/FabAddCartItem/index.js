import React from 'react';
import {Fab, CircularProgress} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function FabAddCartItem({onClick, loading}){
    return(
        <Fab style={styles.fab} variant={'round'} onClick={onclick} disabled={loading} size={'medium'} color="secondary" aria-label="add">
            {!loading ? <AddIcon /> : <CircularProgress />}
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
