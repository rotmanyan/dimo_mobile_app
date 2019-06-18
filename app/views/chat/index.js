import React, {Component} from 'react';
import {NavigationEvents} from 'react-navigation';

import {
  MainView,
  // View,
  // Button,
  Text,
  // Image
} from "./styles";

class Chat extends Component {
  render() {
    return (
      <MainView>
        <Text>
          It's Chat
        </Text>
        <NavigationEvents
          onWillFocus={payload => console.log('will focus', payload)}
          onDidFocus={payload => console.log('did focus', payload)}
          onWillBlur={payload => console.log('will blur', payload)}
          onDidBlur={payload => console.log('did blur', payload)}
        />
      </MainView>
    );
  }
}

export default Chat
