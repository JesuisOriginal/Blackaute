import React, { useState } from "react";
import {connect, useDispatch, useStore} from 'react-redux';
import Products from "../../components/Products";
import FabAddCartItem from "../../components/FabAddCartItem";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import classes from "*.module.css";
import {Provider} from 'react-redux';

import * as Pedido from '../../DataFormats/pedidos.json';
import {Types} from '../../store/reducers/main';
import { products } from '../../services/db/storage/';
import { firebase } from '../../services/db/config';

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

    const dispatch = useDispatch();
    const store = useStore();
    
    const createOrder = () => {
        var orderState = store.getState();
        orderState.orders.forEach(order => {
            Pedido.related.concat(order.payload.default);
        });

        Pedido.meta.id = Pedido.related[0].description.cliente + Math.floor(Math.random() * 10000);
    }

    const test = () => {
        console.log("Clicado");
    }

    async function handleCompra()  {
        await createOrder("Boobs");

        dispatch({type: Types.addRequest, payload: {order: Pedido}});
        // TODO: dar dispatch num {type: "market/CLEAR_ORDER"}
        var newDoc = products.doc(Pedido.meta.id);
        await newDoc
        .set({
            Pedido,
        })
        .then(function () {
            console.log("Barrel Added, check Firebase Console...");
        })
        .catch(function (error) {
            console.log("Error, whos hunting you: ", error);
        });

    }


    return (
        <div>
            {/* <FabAddCartItem onClick={console.log("Clicado")}/> */}
            <Fab style={fabStyle} variant={'round'} size={'medium'} color="secondary" onClick={appendChild} aria-label="add">
                <AddIcon />
            </Fab>
            <Button style={buttonStyle} variant="contained" color="secondary" onClick={handleCompra} >
                Comprar
            </Button>
            {/* <Typography>
            {state.children[0].state.tipo}
            </Typography> */}
            {state.children.map(Child=> <Child />)}
        </div>   
    );
}

