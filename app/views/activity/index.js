import React, {Component} from 'react';
import {MainView, Text} from "./styles";

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
        <Text>
          Activity page
        </Text>
      </MainView>
    );
  }
}

export default Activity;