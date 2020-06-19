import React from "react";
import "./styles.css";
import NavLink from "../NavLink";
import { Grid, Button } from "@material-ui/core";
import {CropFree, Home, List} from '@material-ui/icons'
import MainTheme from '../../themes/constants';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const paths = [
    '/reader',
    '/'
  ]
  
  return (
    <Grid container direction='row' style={styles.container} justify='center' alignItems='center'>
      <Grid item>
        <NavLink to='/reader' content={<Button style={styles.button}><CropFree style={styles.icon}/></Button>} />
      </Grid>
      <Grid item>
        <NavLink to='/' content={<Button style={styles.button}><Home style={styles.icon} /></Button>} />
      </Grid>
      <Grid item>
        <NavLink to='/products' content={<Button style={styles.button}><List style={styles.icon} /></Button>} />
      </Grid>
    </Grid>
  );
}

//Change to zIndex from 2 to 10 by Henrique

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '5rem',
    zIndex: 2,
    backgroundColor:MainTheme.colors.paleBrown,
  },
  item: {
    textAlign: 'center',
    margin: '0 10px',
  },
  icon: {
    color: MainTheme.colors.greatYellow,
    textAlign: 'center'
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    width: '100px'
  }
};