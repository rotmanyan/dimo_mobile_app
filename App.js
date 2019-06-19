import React, {Component} from 'react'
import store from './app/services/store'
import {Provider} from 'react-redux'
import StartPage from './app/views/startPage'
import Profile from "./app/views/profile";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartPage/>
      </Provider>
    )
  }
}