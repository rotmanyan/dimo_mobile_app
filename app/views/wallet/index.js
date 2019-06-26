import React, {Component} from 'react';
import {Text, View} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

class Wallet extends Component {
  componentDidMount() {
    AsyncStorage.clear()
  }

  render() {
    return (
      <View>
        <Text>
          It's a Wallet
        </Text>
      </View>
    );
  }
}

export default Wallet;