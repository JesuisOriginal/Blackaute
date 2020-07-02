import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import MainTheme from '../../themes/constants';

export default class View extends React.PureComponent {
  render() {
    return (
        <Grid style={styles} container direction="column" alignItems='flex-start'>
          <Grid item style={{width:'100%', paddingTop:'2rem'}}>
          {this.props.children}
          </Grid>
        </Grid>
    );
  }
};

const styles = {
  display:'flex',
  flex:1,
  height: '100%',
  overflowX:'hidden',
};