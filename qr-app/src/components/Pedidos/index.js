import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import * as pedido from "../../mocks/pedidos.json";
import Mapp from "../Mapp";
import Steps from "./Steps";
import {useDispatch, useSelector} from 'react-redux';
import {setActiveBarril, setToggleBarril} from '../../store/reducers/order';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "70%"
  }
}));

function Pedidos() {
  const classes = useStyles();
  // const pedido = useSelector(state => state.OrdersReducer.activeOrder);

  const dispatchBarril = useDispatch();
  dispatchBarril(setActiveBarril(pedido.related));

  const [selectedBarril, setSelectedBarril] = useState(null);


  const ifClicked = (barril) => {
    return (barril === selectedBarril);
  }

  const toggleBarril = (barril) => {
      setSelectedBarril(barril);
      if(selectedBarril == null){
        dispatchBarril(setToggleBarril(barril));
      }else{
        dispatchBarril(setToggleBarril(selectedBarril));
      }
  }


  const buttons = () => {
    return pedido.related.map((barril) => (
      <Button 
        variant= "contained"
        color="default"
        disabled={ifClicked(barril)}
        key={barril.meta.id} 
        style={{margin: "1%", float: 'left'}}
        onClick={() => {toggleBarril(barril)}}>
        {" "}
        {barril.content.name}{" "}
      </Button>
    ));
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Pedido N {pedido.meta.id}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Estaus: {pedido.content.status}
                </Typography>
                <Typography variant="body2" >
                  Barris: 
                </Typography>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  {buttons()}
                </Typography>
              </Grid>
              <Grid item sm container>
                <Steps status={pedido.content.status}/>
              </Grid>
              <Grid item>
                  { selectedBarril && (
                    <Typography variant="body2">
                        Voulume: {selectedBarril.description.volume}
                        {"   "}
                        Preço: R$ {selectedBarril.content.value}
                    </Typography>
                  )}
                </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">R$ 1000,00</Typography>
            </Grid>
            <Grid item>
                <Mapp />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Pedidos;
