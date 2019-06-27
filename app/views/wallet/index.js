import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
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
        <TouchableOpacity style={{backgroundColor: '#00ddff', opacity: '.7', padding: '10px 15px', margin: 'auto'}}>
          <Text>
            Please press to LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Wallet;