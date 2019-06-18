import React from 'react'
import {Provider} from 'react-redux'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Start from "./app/views/start";
import Kyc from "./app/views/kyc";
import store from './app/services/store'
import Chat from "./app/views/chat";

// Create our stack navigator
let RootStack = createStackNavigator({
    Kyc: Kyc,
    Chat: Chat,
  },
  {initialRouteName: 'Chat'});

// And the app container
let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}