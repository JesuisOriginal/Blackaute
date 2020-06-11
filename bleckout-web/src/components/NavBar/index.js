import React, {useState} from 'react';
import { Drawer, List, ListItem, Button, Grid, Typography } from '@material-ui/core';

const NavButton = ({ onClick, title, color, selected = false }) => (
    <Button onClick={onClick} color={color} variant={selected ? 'outlined' : 'text' } style={{ height: '100%', width:'100%' }}>
        <Typography variant='h5'>
            {title}
        </Typography>
    </Button>
)

const OptionsList = (options) => (
    options.map(opt => (
        <NavButton 
            title={opt.title}
            onClick={opt.onClick}
            color={opt.color ? opt.color : null}
        />
    ))
);

export default function NavBar({options, onExit, history}) {
    const [selected,setSelected] = useState(0);

    console.log('nav', history)

    return (
        <Drawer
            variant='permanent'
            
        >
            <Grid container style={{flex:1, overflowX:'hidden', borderRight:'2px solid black'}}  alignItems='center' direction='column' justify='space-between' >
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item style={{paddingTop:'20px'}}>
                            <Typography>LOGO</Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                <ListItem>
                                    <NavButton title='DASHBOARD' />
                                </ListItem>
                                <ListItem>
                                    <NavButton title='COMPRAR' />
                                </ListItem>
                                <ListItem>
                                    <NavButton title='CONTATO' />
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item>
                    <List>
                        <ListItem>
                            <NavButton title='SAIR' color={'secondary'} />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>

        </Drawer>
    )
}