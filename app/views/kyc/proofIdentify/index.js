import React, {Component} from 'react';
import {MainView} from "../styles";

class FirstScreen extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
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
          Account verification
        </Text>
      </MainView>
    );
  }
}

export default FirstScreen;