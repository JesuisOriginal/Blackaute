
import React, { useState } from "react";
import {connect, useDispatch, useStore} from 'react-redux';
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

const createSkeleton = (data) => ({
    content: {
  
        status: "Saindo Pra Entrega",
  
        location_id:"",
        
        receiver_id: "" 
        
    },
        
    meta: {
        
        schema: "<schema>",
            
        updated_at: "{'DD-MM-YYYY'}",
            
        created_at:" {'DD-MM-YYYY'}",
            
        id: ""
        
    },
  
    related:[]
});

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

    function newPedido(state) {
        var newpedido = createSkeleton({
            content: {
                status: "Saindo pra entrega"
            },

            related: []
        })

        console.log("new Pedido", newpedido);
        return newpedido;
    }

    const createOrder = () => {
        var orderState = store.getState().MainReducer.barrels;
        console.log("got state.theOrder", orderState);

        var pedidoToDispatch = newPedido();

        orderState.forEach((order, index) => {
            console.log("order ", order);
            pedidoToDispatch.related.push(order);

        });

                    
        if (pedidoToDispatch.meta.id === "") {
            console.log("set cliente: ", orderState[0].description.cliente);
            pedidoToDispatch.meta.id = orderState[0].description.cliente + Math.floor(Math.random() * 10000);
            console.log("market/pedido.meta.id: ", pedidoToDispatch.meta.id, pedidoToDispatch);
        }

        return pedidoToDispatch;
    }

    const test = () => {
        console.log("Clicado");
    }

    async function handleCompra()  {
        var pedidoToDispatch =  createOrder("Boobs a milanesa");
        console.log("Sending...", pedidoToDispatch);
        dispatch({type: Types.addRequest, data: pedidoToDispatch});

        // TODO: dar dispatch num {type: "market/CLEAR_ORDER"}

        var newDoc = products.doc(pedidoToDispatch.meta.id);
        
        await newDoc
        .set({
            pedidoToDispatch,
        })
        .then(function () {
            console.log("Pedido Added, check Firebase Console...");
        })
        .catch(function (error) {
            console.log("Error, whos hunting you: ", error);
        });
        history.push('/products');
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
            {/* {state.children.map((Child, index) => <Child key={`product_child_${index}`} />)}
             */}
            {state.children.map(Child => <Child />)}
        </div>   
    );
}

