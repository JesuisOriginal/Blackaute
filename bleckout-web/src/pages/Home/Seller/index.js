import React from 'react';
import View from '../../../components/common/View';
import { connect } from 'react-redux';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import QRCodesOverView from '../../../components/QRCodesOverview';
import LocalProductsStatus from '../../../components/LocalProductsStatus';

const mock = {
  availablesQr: [
    {
      title: 'Lager',
      qrImage: 'https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
    },
    {
      title: 'Premium',
      qrImage: ''
    },
  ],
  localProducts: [
    {
      title: 'Barril 1',
      level: '50%'
    },
    {
      title: 'Barril 2',
      level: '80%'
    }
  ]
}

class HomeSeller extends React.Component {
  render() {
    console.log('seller home', this.props)
    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container direction='row' alignItems='center'>
              <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                Bem vindo, {this.props.user.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <QRCodesOverView qrList={mock.availablesQr} />
          </Grid>
          <Grid item xs={12}>
            <LocalProductsStatus localProducts={mock.localProducts} />
          </Grid>
        </Grid>
    )
  }
}

const mapStateToProps = ({ AuthReducer }) => (
  AuthReducer
)

export default connect(mapStateToProps)(HomeSeller);
