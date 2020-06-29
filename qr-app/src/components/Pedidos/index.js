import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import * as pedido from "./../../default/data/pedidos.json";
import Mapp from "../Mapp";

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

export default function ComplexGrid() {
  const classes = useStyles();

  const [selectedBarril, setSelectedBarril] = useState(null);

  const buttons = () => {
    return pedido.related.map((barril) => (
      <Button 
        variant="contained" 
        color="default" 
        key={barril.meta.id} 
        style={{margin: "1%", float: 'left'}}
        onClick={() => {setSelectedBarril(barril)}}>
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
              {/* <Grid item>
              </Grid> */}
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
                <Mapp barris={pedido.related}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
