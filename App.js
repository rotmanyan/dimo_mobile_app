import React from 'react'
import {Provider} from 'react-redux'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import store from './app/services/store'

// Create our stack navigator
let RootStack = createStackNavigator({
  Counter: CounterContainer,
  StaticCounter: StaticCounterContainer,
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


/*
import {connect} from "react-redux";
import {StyledView} from './stylesApp'
import Start from "./app/views/start";

const App = () => <StyledView><Start/></StyledView>

export default connect()(App)
*/