import React, { useState } from "react";
import {connect} from 'react-redux';
import Products from "../../components/Products";
import FabAddCartItem from "../../components/FabAddCartItem";
import { makeStyles, Grid, Button } from "@material-ui/core";
// import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      button:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
    },

}));

const INITIAL_STATE = {
  children:[],
};


export default function Market() {
  // const classes = useStyles();
  const [state, setState] = useState(INITIAL_STATE);

  const appendChild = ()=> (
    setState({
      ...state,
      children:[
        ...state.children,
        Products
      ]
    })
  )

  const test = () => {
      console.log("Clicado");
  }


  return (
            
    <div>
        <FabAddCartItem onClick={console.log("Clicado")}/>
        <Products  />
        <Button variant="contained" color="secondary"  padding='20px' onClick={appendChild}>
            Comprardsadasdasds
        </Button>
        {state.children.map(Child=> <Child />)}
    </div>
    
    );
}

