import {styled, Box, Grid} from '@material-ui/core';

export const Container = styled(Box)({
    display:'flex',
    flex:1,
    flexDirection:'row',
    position:'fixed',
    height: '100%',
    width: '100%',
    flexDirection:'row',
    overflow:'hidden',
});

export const MainContainer = styled(Grid)({
    display:'flex',
    flex: 6,
    justifyContent:'center',
    overflowX:'hidden'
});

export const SidebarContainer = styled(Grid)({
    display:'flex',
    flex: 1,
    height:'100%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});