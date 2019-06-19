import React, {Component} from 'react';

import {
  MainView,
  Text
} from "./styles";
import Camera from "../../components/camera";


class Kyc extends Component {
  static navigationOptions = {
    title: 'KYC',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '300',
    },
  };

  render() {
    return (
      <MainView>

        <Text>
          It's Kyc
        </Text>
        <Camera/>
   {/*     <View>
          <Button onPress={() => this.props.navigation.navigate('Chat')}>
            <Text>
              CLICK
            </Text>
          </Button>
        </View>*/}
      </MainView>
    );
  }
}

export default Kyc