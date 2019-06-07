import React, {Component} from 'react';
import {MainView} from "./styles";
import Camera from "../../../components/camera";

class Body extends Component {
  render() {
    return (
      <MainView>
        <Camera/>
      </MainView>
    );
  }
}

export default Body;