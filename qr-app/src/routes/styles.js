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
});