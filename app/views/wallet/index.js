import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

class Wallet extends Component {
  componentDidMount() {
  }


  render() {
    return (
      <View>
        <Text>
          It's a Wallet
        </Text>
        <TouchableOpacity
          onPress={() => AsyncStorage.clear()}
          style={{backgroundColor: '#00ddff', width: 200, padding: 10, alignItems: 'center', marginTop: 100, borderRadius: 20}}
        >
          <Text>
            Please press to LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Wallet;