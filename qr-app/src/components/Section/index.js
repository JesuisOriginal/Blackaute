import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Section extends React.Component {
    render() {
        return(
            <Grid container  spacing={3} direction='row' alignItems='center' justify='center'>
                <Grid item xs={10} md={8} lg={6} >
                    {this.props.children}
                </Grid>
            </Grid>
        )
    }
};