import {styled, Box, Grid, Typography, Divider} from '@material-ui/core';
import Logo from '../../assets/logos/logo.png';

export const Container = styled(Box)({
    display:'flex',
    flex:1,
    flexDirection:'row',
    position:'fixed',
    height: '100%',
    width:'100%',
   
});

export const SidebarContainer = styled(Grid)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    flex: 2,
    zIndex:2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

export const MainContainer = styled(Grid)({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'2rem',
    // backgroundColor:'yellow',
    flex: 4,
});

export const SidebarHeader = styled(Grid)({
    display:'flex',
    flex: 1,
    paddingTop:'10rem'
});

export const HeaderTitle = styled(Typography)({
    color:'black',
    fontWeight:'bold',
    fontSize:'3rem',
    flex: 1,
});

export const SidebarDivider = styled(Divider)({

    height:'.5px',
    width:'100%',

    backgroundColor: '#c8c8c8',
});

export const LogoContainer = styled(Grid)({
    display: 'flex',
    flex:1,
    height: '100%',
    width: '100%',
});

export const ImageItem = styled(Grid)({
    display:'flex',
    flex:1,
    backgroundPosition:'center',
    backgroundImage:`url(${Logo})`,
});