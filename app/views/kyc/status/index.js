import React, {Component} from 'react';
import {View, Text} from 'react-native'

class Status extends Component {
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
          REJECTED!
        </Text>
      </View>
    );
  }
}

export default Status;