import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Button } from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';

import apa from './apa-1.png';
import americanIpa from './american-ipa.png';
import munich from './munich.png';
import witbier from './witbier.png';
import czech from './czech.png';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  comprar: {
      color: 'red'
  }
}));

const images = [apa, czech, americanIpa, munich, witbier];
// TODO: Mudar Imagem pra cada selecao de items

export default function BuyCard(props) {
    const classes = useStyles();
    const [state, setState] = React.useState(
        {
            tipo: '',
            value: 0,
            qtd:0,
            rem:'',
        }
    );
  
    const handleChange = (event) => {
      const name = event.target.name;
    //   const src = event.target.imgSrc;
      setState({
        ...state,
        [name]: event.target.value,
        // [src]: event.target.value
        // [cost]: event.target
      });
    };

    const handleQtd = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value

        });
    }



    const imgsrc = "./";
    const test = imgsrc + 'munich.png' ;
    const selectImage = (image) => {return (imgsrc + image + '.png')};



    return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
            <ButtonBase className={classes.image}>      
                {/* TODO: pqp mano vai se fuder link bugado do caralho pra imagem */}
                <img className={classes.img} alt="complex" src={apa} />
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-tipo-native-simple">Tipo</InputLabel>
                    <Select
                    native
                    value={state.tipo}
                    onChange={handleChange}
                    label="Tipo"
                    inputProps={{
                        name: 'tipo',
                        imgSrc: 'image', 
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={500}>apa-1</option>
                    <option value={600}>american-ipa</option>
                    <option value={700}>czech</option>
                    <option value={800}>munich</option>
                    <option value={900}>witbier</option>
                    </Select>
                </FormControl>
                {/*  */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-qtd-native-simple">Quantidade</InputLabel>
                    <Select
                    native
                    value={state.qtd}
                    onChange={handleChange}
                    label="Quantidade"
                    inputProps={{
                        name: 'qtd',
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>

                    </Select>
                </FormControl>
                </Grid>
                <Grid item xl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-rem-native-simple">Remetente</InputLabel>
                    <Select
                    native
                    value={state.qtd}
                    onChange={handleChange}
                    label="Remetente"
                    inputProps={{
                        name: 'rem',
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>

                    </Select>
                </FormControl>
                </Grid>
                <Grid item>
                <Button className={classes.comprar}>
                    Comprar
                    {/* TODO: enviar pro bd */}
                </Button>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">${state.tipo * state.qtd }</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
    </div>
    );
}