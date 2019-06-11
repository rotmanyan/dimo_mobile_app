import React from "react";
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import store from './app/services/store'
import {App} from './App';

const RNRedux = () => <Provider store={store}>
  <App/>
</Provider>

AppRegistry.registerComponent('DIMO', () => RNRedux)