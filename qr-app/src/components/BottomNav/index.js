import React from "react";
import "./styles.css";
import NavLink from "../NavLink";
import { Grid, Button, Typography} from "@material-ui/core";
import Icon from '@material-ui/core/Icon'
import MainTheme from '../../themes/constants';

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  console.log('nav', props);

  const styles = {
    container: {
      position: 'fixed',
      bottom: 0,
      width: props.screenType ? '100%' : '10rem',
      height: props.screenType ? '5rem' : '100%',
      zIndex: 10,
      paddingTop: props.screenType ? '' : '2rem',
      backgroundColor:MainTheme.colors.paleBrown,
    },
    item: {
      textAlign: 'center',
      margin: '0 10px',
    },
    icon: {
      textAlign: 'center'
    },
    button: {
      color: MainTheme.colors.greatYellow,
      alignItems:'center',
      justifyContent:'center',
      width: props.screenType ? '100px' : '2rem',
      padding: props.screenType ? '' : '2rem',
      height: props.screenType ? '' : '2rem',
      width: props.screenType ? '' : '100%'
    }
  };


  const MenuItems = () => {
    const {routes} = props;
    return routes.map(_route => (
      _route.icon && (
        <Grid item>
          <NavLink 
            to={_route.path}
            content={
              <Button style={styles.button}>
                <_route.icon style={styles.icon} />
                {props.screenType ? null : _route.name}
              </Button>
            } 
          />
        </Grid>
      )
    ))
  };

  return (
    <Grid container direction={props.screenType ? 'row' : 'column'} style={styles.container} justify={props.screenType ? 'center' : 'flex-start' } alignItems={'center'}>
      <MenuItems />
    </Grid>
  );
};
