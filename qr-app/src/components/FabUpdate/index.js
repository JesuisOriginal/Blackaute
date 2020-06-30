import React from 'react';
import {Fab, CircularProgress} from '@material-ui/core';
import {Refresh} from '@material-ui/icons';

export default function FabUpdate({onClick, loading}){
    return(
        <Fab style={styles.fab} variant={'round'} onClick={onclick} disabled={loading} size={'medium'}>
            {!loading ? <Refresh /> : <CircularProgress />}
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
