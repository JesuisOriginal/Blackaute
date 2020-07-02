import React from "react";
import View from "../../components/View";
import Section from "../../components/Section";
import FeedItem from "../../components/FeedItem";
import { Typography, Grid } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <View>
          <Section>
                <Grid
                container
                alignItems="center"
                direction='row'
                justify="center"
                >
                <Grid item xs={12}>
                    <FeedItem>
                    <Typography>Bem vindo</Typography>
                    </FeedItem>
                </Grid>
                </Grid>
          </Section>
      </View>
    );
  }
}

export default Home;

// const styles = {
//   container: {
//     padding: "10px",
//   },
// };
