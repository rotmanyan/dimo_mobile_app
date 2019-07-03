import React, {Component} from 'react';
import CodeScan from '../../components/qrCodeScanner';
import {MainView, Text} from "./styles";

class Send extends Component {
  static navigationOptions = {
    headerTitle: 'Send',
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
        <Text>
          Send page
        </Text>

        <CodeScan/>
      </MainView>
    );
  }
}

export default Send;