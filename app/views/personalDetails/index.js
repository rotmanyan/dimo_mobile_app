import React, {Component} from 'react';
import {View, Text} from 'react-native'

class PersonalDetails extends Component {
  static navigationOptions = {
    headerTitle: 'Profile',
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
          Please, fill your personal details
          for account verification
        </Text>
      </View>
    );
  }
}

export default PersonalDetails