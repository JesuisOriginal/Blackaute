import React from "react";
import { Grid, Fab, styled } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

export default class AuthSidebar extends React.PureComponent {
  handleReturn = () => {
    const { onReturn } = this.props;
    if (onReturn) onReturn();
  };

  Return = () => (
    <ItemContainer item xs={12}>
      <Grid container alignItems="center" direction="row" justify="flex-start">
        <Grid item xs={2}>
          <Fab size="big" onClick={this.handleReturn}>
            <ArrowBack />
          </Fab>
        </Grid>
      </Grid>
    </ItemContainer>
  );

  Main = () => (
    <ItemContainer item xs={12}>
      {this.props.children}
    </ItemContainer>
  );

  render() {
    const {onReturn, content} = this.props;
    return (
      <Container container spacing={10}>
        <Grid item>
          <Grid container alignItems='center' justify='center' direction='column' spacing={10}>
            {onReturn && <this.Return />}
            {content && {content}}
            <this.Main />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const Container = styled(Grid)({
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  display:'flex',
  flexDirection:'column',
  padding: '2rem',
  alignItems:'center',
  justifyContent:'center',
  height: '100%',
});

const ItemContainer = styled(Grid)({
  display:'flex',
  flex:1,
  flexDirection:'row'
})
