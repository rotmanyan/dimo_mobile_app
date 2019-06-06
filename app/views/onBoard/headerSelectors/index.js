import React, {Component} from 'react';
import {MainView, Text, Button} from "./styles";
import SvgUri from 'react-native-svg-uri';

class HeaderSelectors extends Component {
  render() {
    return (
      <MainView>
        <Button>
          <SvgUri
            width="24"
            height='24'
            source={require('../../../assets/icons/Chat.svg')}
          />
        </Button>
        <Text>
          KYC
        </Text>
      </MainView>
    );
  }
}

export default HeaderSelectors