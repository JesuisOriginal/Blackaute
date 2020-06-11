import React from 'react';
import {Card, CardContent} from '@material-ui/core';

export default function ProductBox({image}) {
    return (
        <Card className='card'>
            <CardContent style={{ height: '10rem', width: '10rem', backgroundImage:`url(${image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
            </CardContent>
        </Card>
    )
}