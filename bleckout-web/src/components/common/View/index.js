import React from 'react';
import {Grid, Box} from '@material-ui/core';
import Theme from '../../../themes';
import NavBar from '../../NavBar';

export default class View extends React.Component {
    render() {
        console.log('theme',Theme)
        const {direction='row', alignItems='center', justify='center'} = this.props;
        return(
            <Box bgcolor=''>
                <Grid
                className='view'
                container
                spacing={4}
                style={{
                    flex:1,
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                }}
                
                direction={direction}
                alignItems={alignItems}
                justify={justify}
                >
                    {this.props.logged && 
                    <Grid item><NavBar /></Grid>}
                    <Grid item md={12} lg={6}>
                        {this.props.children}
                    </Grid>
                </Grid>
            </Box>
        )
    }
};

