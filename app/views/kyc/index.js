import React, {Component} from 'react';

import {
  MainView,
  Text
} from "./styles";


class Kyc extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
  }

  render() {
    return (
      <MainView>

        <Text>
          It's Kyc
        </Text>
      </MainView>
    );
  }
}

export default Kyc