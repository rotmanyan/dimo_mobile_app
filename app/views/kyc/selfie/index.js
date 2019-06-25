import React, {Component} from 'react';
import {View, Text} from 'react-native'

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
      <View>
        <Text>
          Identity
        </Text>
      </View>
    );
  }
}

export default FirstScreen;