import React, {Component} from 'react';

import {
  MainView,
  View,
  Button,
  Text,
  Image,
  ViewLogo
} from "./styles";

class LogoTitle extends Component {
  render() {
    return (
      <ViewLogo>
        <Image
          source={require('../../assets/backgrounds/logo.png')}
          style={{width: 30, height: 30}}
        />
      </ViewLogo>
    );
  }
}

class Chat extends Component {
  static navigationOptions = {
    headerTitle: 'Contacts',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  };
  render() {
    return (
      <MainView>
        <Text>
          It's Chat
        </Text>
        <View>
          <Button onPress={() => this.props.navigation.navigate('Kyc')}>
            <Text>
              CLICK
            </Text>
          </Button>
        </View>
      </MainView>
    );
  }
}

export default Chat
