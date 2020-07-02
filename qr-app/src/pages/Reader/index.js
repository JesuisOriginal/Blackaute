import React from "react";
import TagReader from "../../components/TagReader";
import View from "../../components/View";
import Section from "../../components/Section";
import { Grid } from "@material-ui/core";
import addGeoLocatedBarrel from "../../utils/addGeoLocatedBarrel";

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastResult: null,
    };
  }

  handleUpdateResult = (data) => {
    this.setState({ lastResult: data });
  };

  handleHit = (data) => {
    this.handleUpdateResult(data);
  };

  render() {
    if (this.state.lastResult !== null)
      console.log(this.state);
    return (
      <View>
        <TagReader onRead={this.handleUpdateResult} />
      </View>
    );
  }
}

export default Reader;
