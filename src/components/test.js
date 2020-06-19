import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import firebase from "firebase";
import { update } from "../services/db/queries/barrels";
import makeid from '../utils/makeid';
import addGeoLocatedBarrel from '../utils/addGeoLocatedBarrel';
import delayedUpdate from '../utils/delayedUpdate';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
    if (data) {
      // console.log(">Scanned "+data);
      console.log(">typeof data: " + typeof data);
      addGeoLocatedBarrel(data);
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

