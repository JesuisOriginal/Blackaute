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


import apa from './imgs/apa-1.png';
import americanIpa from './imgs/american-ipa.png';
import munich from './imgs/munich.png';
import witbier from './imgs/witbier.png';
import czech from './imgs/czech.png';
import * as barrel from './imgs/barrel.png';

import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { addToOrder } from '../../store/actions/barrelActions';
import { addBarrel } from '../../store/reducers/main';
import {Types} from '../../store/reducers/main';

import * as BarrelJSON from '../../DataFormats/barrel.json';
// import
// TODO por seletor de litragem
// TODO a qtd faz um loop de add_order pro redux
// TODO fazer um select de order do redux e adiocionar pra related da forma de pedidos.json

const createSkeleton = (data) => ({
  content: {
      name: "",
      pricing: 0,
      value: 0,
      unit: "BRL"
  },
  description: {
      volume: "",
      cliente: "",
      coord: {
              "lat": -8.062664,
              "lng": -34.872825
          }
  },
  meta: {
      schema: "produto",
      updated_at: new Date().getDate(),
      created_at: new Date().getDate(),
      id: 341592,
  },
  ...data
})

const BARRIL_SKELETON = {
      content: {

        name: "",
        
        pricing: 0,
        
        value: 0,
        
        unit: "BRL"
        
    },
        
    description: {
        
        volume: "",

        cliente: "",
        
        coord: {
                "lat": -8.062664,
                "lng": -34.872825
            }
        
    },
    meta: {
        
        schema: "produto",
        
        updated_at: new Date().getDate(),
        
        created_at: new Date().getDate(),
        
        id: 341592
        
    }
}


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
// "babel-plugin-transform-decorators": "6.24.1",





export default function BuyCard(props) {

    const classes = useStyles();
    const [state, setState] = React.useState(
        {
            tipo: '',
            volume: 0,
            qtd: 0,
            rem:'',
            update: false,
        }
    );

    const dispatch = useDispatch();
    const store = useStore();


    function imgSel (tipo) {
      switch(tipo) {
        case 'apa-1':{ 
          return apa
        }
        case 'american-ipa': {
          return americanIpa
        }
        case 'czech': {
          return czech
        }
        case 'munich': {
          return munich
        }
        case 'witbier': {
          return witbier
        }
        default :{
          return barrel
        }
      }
    }

    function getPrice (barrel) {
      switch(barrel) {
        case 'apa-1':{ 
          return 50
        }
        case 'american-ipa': {
          return 60
        }
        case 'czech': {
          return 70
        }
        case 'munich': {
          return 80
        }
        case 'witbier': {
          return 90
        }
        default :{
          return 800
        }
      }
    }
    
    function newBarrel() {

      const {tipo,rem,volume} = state;

        const pricing = volume * getPrice(tipo);
        const value = getPrice(tipo);

        var newBarril = createSkeleton({
          content: {
            name: tipo,
            value,
            pricing,

          },
          description:{
            cliente: rem,
            volume,
          }
        });
        
        console.log("newBarrel",newBarril);
        return newBarril;
    }

    async function handleChange(event) {
      const name = event.target.name;
      const name2 = event.target.name2;
      setState({
        ...state,
        [name]: event.target.value,
        // [name2]: event.target.value
      });
      if (state.tipo && state.qtd && state.rem && state.volume) {
        // TODO something
        // var newBarrel = Object.assign({}, BarrelJSON);
        console.log("Condicoes satisefitsas");

        //await newBarrel();
        var barrelToDispatch = newBarrel();
        console.log("barrelToDispa", barrelToDispatch);
        console.log('typeof ', typeof(barrelToDispatch));
        // console.log("barrelToDispatch()", (barrelToDispatch())() );
        // console.log("typeof(barrelToDispatch())", typeof(barrelToDispatch()));

        //Jorge Foreman

        if (state.update === false) {
            if (state.qtd > 1) {
                for (var i = 0; i < state.qtd; i++) {
                    // dispatch({type: "market/ADD_ORDER", payload: {order: BarrelJSON}});
                    dispatch({type: Types.addBarrel, barrel: barrelToDispatch});
                    console.log("state from loop", store.getState());
                }
            } else {
                // dispatch({type: "market/ADD_ORDER", payload: {order: BarrelJSON} });
                // dispatch({type: Types.addBarrel, barrel: BarrelJSON });
                // dispatch({type: "market/ADD_ORDER", order: BarrelJSON });
                dispatch({type: Types.addBarrel, barrel: barrelToDispatch});

                console.log("state from else", store.getState());
            }

          // dispatch add
            
            // dispatch(addBarrel())

            setState({
                ...state,
                update: true,
                });

            // console.log(selected);
        } else {
          // TODO: dispatch updatebarrel
        }
        
        // dis

      }
    };

    const handleQtd = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value

        });
    }



    return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
            <ButtonBase className={classes.image}>      
                {/* TODO: pqp mano vai se fuder link bugado do caralho pra imagem */}
                <img className={classes.img} alt="complex" src={imgSel(state.tipo)} />
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
                        name2: 'update',
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={"apa-1"}>apa-1</option>
                    <option value={"american-ipa"}>american-ipa</option>
                    <option value={"czech"}>czech</option>
                    <option value={"munich"}>munich</option>
                    <option value={"witbier"}>witbier</option>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-qtd-native-simple">Quantidade</InputLabel>
                    <Select
                    native
                    value={state.qtd}
                    onChange={handleChange}
                    label="Quantidade"
                    inputProps={{
                        name: 'qtd',
                        name2: 'update',
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
                    <InputLabel htmlFor="outlined-rem-native-simple">Cliente</InputLabel>
                    <Select
                    native
                    value={state.rem}
                    onChange={handleChange}
                    label="Cliente"
                    inputProps={{
                        name: 'rem',
                        name2: 'update',
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={'Bar do Gordo'}>Bar do Gordo</option>
                    <option value={'big'}>Bigbompreço</option>
                    <option value={'Hyper Casa Forte'}>Hyper Casa Forte</option>
                    <option value={'ceu'}>Casa de Jesus</option>
                    <option value={'henricao'}>Casa de Henricao</option>
                    <option value={'Agluglu'}>Casa de Gio</option>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-rem-native-simple">Volume</InputLabel>
                    <Select
                    native
                    value={state.volume}
                    onChange={handleChange}
                    label="Volume"
                    inputProps={{
                        name: 'volume',
                        name2: 'update',
                        id: 'outlined-tipo-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>10 L</option>
                    <option value={20}>20 L</option>
                    <option value={30}>30 L</option>
                    <option value={35}>35 L</option>
                    <option value={40}>40 L</option>
                    <option value={45}>45 L</option>
                    <option value={50}>50 L</option>                    
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">R$ {(state.tipo && state.qtd && state.volume) ? getPrice(state.tipo) * state.qtd *  state.volume + ".00": "Preencha os campos por favor" }</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
    </div>
    );
}

// DATA ACESSINC EXAMPLE

var temp = 
{
    orders:  [
        {
          'default': {
            content: {
              name: 'czech',
              pricing: 3150,
              value: 70,
              unit: 'BRL'
            },
            description: {
              volume: '45',
              cliente: 'Agluglu',
              coord: {
                lat: -8.062664,
                lng: -34.872825
              }
            },
            meta: {
              schema: 'produto',
              updated_at: '{\'DD-MM-YYYY\'}',
              created_at: '{\'DD-MM-YYYY\'}',
              id: 341592
            }
          }
        },
        {
          'default': {
            content: {
              name: 'czech',
              pricing: 3150,
              value: 70,
              unit: 'BRL'
            },
            description: {
              volume: '45',
              cliente: 'Agluglu',
              coord: {
                lat: -8.062664,
                lng: -34.872825
              }
            },
            meta: {
              schema: 'produto',
              updated_at: '{\'DD-MM-YYYY\'}',
              created_at: '{\'DD-MM-YYYY\'}',
              id: 341592
            }
          }
        }
      ]
}

console.log("temp", temp.orders[0].default);

var temp2 = {
    type: 'market/ADD_ORDER',
    orders: {
      payload: {
        'default': {
          content: {
            name: 'apa-1',
            pricing: 500,
            value: 50,
            unit: 'BRL'
          },
          description: {
            volume: '10',
            cliente: 'Bar do Gordo',
            coord: {
              lat: -8.062664,
              lng: -34.872825
            }
          },
          meta: {
            schema: 'produto',
            updated_at: '{\'DD-MM-YYYY\'}',
            created_at: '{\'DD-MM-YYYY\'}',
            id: 341592
          }
        }
      }
    }
  }

var addAction = 
{
    type: 'main/ADD_BARREL',
    barrel: {
      payload: {
        related: [
          {
            content: {
              pricing: 3150,
              value: 70,
              name: 'czech',
              unit: 'BRL'
            },
            description: {
              volume: '45',
              cliente: 'Agluglu',
              coord: {
                lat: -8.062664,
                lng: -34.872825
              }
            },
            meta: {
              created_at: '{\'DD-MM-YYYY\'}',
              schema: 'produto',
              updated_at: '{\'DD-MM-YYYY\'}',
              id: 341592
            }
          },
          {
            content: {
              unit: 'BRL',
              pricing: 3150,
              name: 'czech',
              value: 70
            },
            description: {
              volume: '45',
              cliente: 'Agluglu',
              coord: {
                lng: -34.872825,
                lat: -8.062664
              }
            },
            meta: {
              updated_at: '{\'DD-MM-YYYY\'}',
              created_at: '{\'DD-MM-YYYY\'}',
              schema: 'produto',
              id: 341592
            }
          }
        ],
        meta: {
          created_at: ' {\'DD-MM-YYYY\'}',
          id: 'Agluglu7302',
          updated_at: '{\'DD-MM-YYYY\'}',
          schema: '<schema>'
        },
        content: {
          location_id: '',
          status: 'Saindo Pra Entrega',
          receiver_id: ''
        }
      }
    }
  }

var mine = 
{
    type: 'main/ADD_BARREL',
    payload: {
      'default': {
        content: {
          name: 'american-ipa',
          pricing: 1800,
          value: 60,
          unit: 'BRL'
        },
        description: {
          volume: '30',
          cliente: 'Hyper Casa Forte',
          coord: {
            lat: -8.062664,
            lng: -34.872825
          }
        },
        meta: {
          schema: 'produto',
          updated_at: '{\'DD-MM-YYYY\'}',
          created_at: '{\'DD-MM-YYYY\'}',
          id: 341592
        }
      }
    }
  }