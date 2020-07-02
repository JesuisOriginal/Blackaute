import {styled, Box, Grid} from '@material-ui/core';

export const Container = styled(Box)({
    display:'flex',
    flex:1,
    flexDirection:'row',
    position:'fixed',
    height: '100%',
    widht: '100%',
});

export const SidebarContainer = styled(Grid)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // height:'100%',
    // width:'25rem',
});

export const MainContainer = styled(Grid)({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'2rem',
    backgroundColor:'yellow',
})