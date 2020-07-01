import React from "react";
import {useHistory} from 'react-router-dom';
import "./styles.css";
import NavLink from "../NavLink";
import { Grid, Button, BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Icon from '@material-ui/core/Icon'
import MainTheme from '../../themes/constants';

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);
  const history = useHistory();


  const MenuItems = () => {
    const {routes} = props;
    const handleClick = (index) => {
      setValue(index)
      history.push(routes[index].path)
    };

    return routes && routes.length && routes.map((route, index) => (
      route.icon && (
        <BottomNavigationAction showLabel style={{color: value === index ? MainTheme.colors.greatYellow : '#c8c8c8'}} onClick={() => handleClick(index)} label={route.name} icon={<route.icon />} />
      )
    ))
  };

  console.log(value);

  return(
    <BottomNavigation value={value} showLabels 
    style={{position:'fixed', bottom:0, width: '100%'}}
    >
      <MenuItems />
    </BottomNavigation>
  )
};
