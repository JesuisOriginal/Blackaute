import React from 'react';
import {Grid, Box} from '@material-ui/core';
import Theme from '../../../themes';

export default class View extends React.Component {
    render() {
        console.log('theme',Theme)
        const {direction='row', alignItems='center', justify='center'} = this.props;
        return(
            <Box bgcolor=''>
                <Grid
                className='view'
                container
                spacing={1}
                style={{
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                }}
                
                direction={direction}
                alignItems={alignItems}
                justify={justify}
                >
                    <Grid item xs={10} md={8} lg={6}>
                        {this.props.children}
                    </Grid>
                </Grid>
            </Box>
        )
    }
};

