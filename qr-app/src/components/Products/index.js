import React, { Component } from 'react';
import BuyCard from '../BuyCard';
import { Grid } from '@material-ui/core';

class Products extends Component {
    render() {
        return (

            <Grid item>
                <BuyCard />
            </Grid>

        );
    }
}

export default Products;
