import React, {Component} from 'react'
import {
  MainView,
} from "./styles";
import {View, Text} from 'react-native'

class FirstScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Registration',
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
          Hey Buddy!
        </Text>
      </MainView>
    );
  }
}

export default FirstScreen;