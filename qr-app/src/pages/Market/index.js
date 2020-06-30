import React from "react";
import {connect} from 'react-redux';
import Products from "../../components/Products";
import FabAddCartItem from "../../components/FabAddCartItem";
import { makeStyles, Grid } from "@material-ui/core";
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
    },

  }));

class Market extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        };
      }

    render() {
    // const {Products} = this.props;
    return (
        
        <div>
            <FabAddCartItem />
            <Products  />
        </div>
        
        );
    }
}

export default Market;
