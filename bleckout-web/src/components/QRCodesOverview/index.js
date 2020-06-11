import React from 'react';
import {
    Grid,
    CardContent,
    Card,
} from '@material-ui/core';

import ProductBox from '../ProductBox';

export default function QRCodesOverview({ qrList = [] }) {
    return (
        <Grid container spacing={3} direction='row'>
            {qrList.length && (
                qrList.map((qr, index) => (
                    <Grid key={`qr_${index}`} item>
                        <ProductBox
                            image={qr.qrImage}
                        />
                    </Grid>
                ))
            )}
        </Grid>
    )
}