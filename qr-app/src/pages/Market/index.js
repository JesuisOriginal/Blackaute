import React, { useState } from "react";
import {connect} from 'react-redux';
import Products from "../../components/Products";
import FabAddCartItem from "../../components/FabAddCartItem";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import classes from "*.module.css";
import {Provider} from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
}));

const buttonStyle = {
      padding: "1rem",
      right: '20rem',
      textAlign: 'center',
      margin: 0,
      bottom: 'auto',
      right: 20,
      top: 20,
      left: 'auto',
      position: 'fixed',
      // color: theme.palette.text.secondary,
}
const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const INITIAL_STATE = {
  children:[],
};


export default function Market() {
  const classes = useStyles();
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
          {/* <FabAddCartItem onClick={console.log("Clicado")}/> */}
          <Fab style={fabStyle} variant={'round'} size={'medium'} color="secondary" onClick={appendChild} aria-label="add">
              <AddIcon />
          </Fab>
          <Button style={buttonStyle} variant="contained" color="secondary"  >
              Comprar
          </Button>
          {/* <Typography>
            {state.children[0].state.tipo}
          </Typography> */}
          {state.children.map(Child=> <Child />)}
      </div>   
    );
}

