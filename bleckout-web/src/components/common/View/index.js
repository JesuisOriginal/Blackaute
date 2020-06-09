import React from 'react';
import {Grid} from '@material-ui/core';

export default class View extends React.Component {
    render() {
        const {direction='row', alignItems='center', justify='center'} = this.props;
        return(
            <Grid
            container
            spacing={24}
            style={{
                width:'100%',
                height:'100%',
                position:'absolute',
                backgroundColor:'#c6c6c6'}}
            direction={direction}
            alignItems={alignItems}
            justify={justify}
            >
                <Grid item>
                    {this.props.children}
                </Grid>
            </Grid>
        )
    }
};

