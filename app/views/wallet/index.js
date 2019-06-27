import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

class Wallet extends Component {
  componentDidMount() {
  }

  link = () => {
    Linking.openURL('https://app.dimo.org/login/forgot-password')
  }

  render() {
    return (
      <View>
        <Text>
          It's a Wallet
        </Text>
        <TouchableOpacity
          onPress={() => AsyncStorage.clear()}
          style={{
            backgroundColor: '#00ddff',
            width: 200,
            padding: 10,
            alignItems: 'center',
            marginTop: 100,
            borderRadius: 20
          }}
        >
          <Text>
            Please press to LOGOUT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.link}
          style={{
            backgroundColor: '#00ddff',
            width: 200,
            padding: 10,
            alignItems: 'center',
            marginTop: 100,
            borderRadius: 20
          }}
        >
          <Text>
            Please press to LINKING
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Wallet;