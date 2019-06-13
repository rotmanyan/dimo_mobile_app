import React, {Component} from 'react';
import {MainView} from "./styles";
import CodeScan from "../../components/qrCodeScanner";

class Activity extends Component {
  render() {
    return (
      <MainView>
        <CodeScan/>
      </MainView>
    );
  }
}

export default Activity;