import React from 'react'
import {Provider} from 'react-redux'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Start from "./app/views/start";
import store from './app/services/store'

// Create our stack navigator
let RootStack = createStackNavigator({
  Counter: Start,
});

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