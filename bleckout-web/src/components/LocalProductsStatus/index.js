import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

export default function LocalProductsStatus({ localProducts = [] }) {
    return (
        <Card className='card'>
            <CardContent>
                <Grid container direction='row' spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant='h4'>SEUS BARRIS</Typography>
                    </Grid>

                    {localProducts.length && (
                        localProducts.map((product, index) => (
                            <Grid item xs={12} key={`product_${index}`}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h6'>{product.title}</Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ backgroundColor: 'black', height: '30px', width: product.level }} />

                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    )}

                    {/* <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant='h6'>Barril 2 - Volume</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <div style={{ backgroundColor: 'black', height: '30px', width: '50%' }} />

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant='h6'>Barril 2 - Volume</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <div style={{ backgroundColor: 'black', height: '30px', width: '75%' }} />

                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </CardContent>
        </Card>

    )
}