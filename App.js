import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './app/services/store'
import StartPage from './app/views/startPage'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartPage/>
      </Provider>
    )
  }
}