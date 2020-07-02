import React, { Component } from 'react';
import BuyCard from '../BuyCard';
import { Grid } from '@material-ui/core';

class Products extends Component {
    render() {
        return (
            <Grid item key={this.props.key}>
                <BuyCard />
            </Grid>
        );
    }
}

export default Products;
