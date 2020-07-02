import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import AppTheme from '../../themes/constants';

export default class FeedItem extends React.PureComponent {
  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.container}>
          <Grid style={styles.container} container spacing={4}>
            <Grid item xs={12}>
              {this.props.children}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  card: {
    borderRadius: AppTheme.roundness,
  },
  container: {
    width: "100%",
  },
};
