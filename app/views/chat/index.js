import React, {Component} from 'react';

import {
  MainView,
  View,
  Button,
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
        <View>
          <Button/>
        </View>
      </MainView>
    );
  }
}

export default Chat
