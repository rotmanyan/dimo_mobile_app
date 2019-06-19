import React, {Component} from 'react';
import {MainView} from "./styles";
import CodeScan from "../../components/qrCodeScanner";

class Activity extends Component {
  static navigationOptions = {
    headerTitle: 'Activity',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }
  render() {
    return (
      <MainView>
        <CodeScan/>
      </MainView>
    );
  }
}

export default Activity;