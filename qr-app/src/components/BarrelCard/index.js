import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import image from './barrel.png';
import { Button } from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '70%'
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
}));

export default function BarrelCard(props) {
  const classes = useStyles();

  let gitLoc = () => {
    console.log('essa função deve encaminhar para uma rota que mostre um mapa e a posição autal do barril');
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image}/>
            </ButtonBase>
          </Grid>
          <Grid item xl={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.tipo}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.rem}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {Math.floor(Math.random() * 1000000)}
                </Typography>
              </Grid>
              <Grid item>
              <Button
                variant="contained"
                color="default"
                startIcon={<AddLocationIcon />}
                onClick={gitLoc}
              >
                Localização Atual
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}