import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {View, Text, Platform} from 'react-native'
import store from './app/services/store'
import StartPage from './app/views/startPage'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {Platform.OS === 'ios'
          ? <StartPage/>
          : <View><Text>Android</Text></View>
        }
      </Provider>
    )
  }
}