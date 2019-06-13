import React, {Component} from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import {MainView, View, Button, TextBlue, Image} from "./styles";
import {ImagePickerIOS} from 'react-native';
import SvgUri from 'react-native-svg-uri';

class BottomSelectors extends Component {
  state = {
    selectors: ['Chat', 'Telegram', 'Wallet', 'Active', 'Profile'],
    color: '#90a5c2',
    click: true,
    image: []
  }

  pickImage() {
    console.log('123123123');
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: [...this.state.image, imageUri]});
    }, error => console.log(error, 'error'));
  }

  clearStorage = () => {
    AsyncStorage.clear().then(() => console.log('clear storage '))
  }

  render() {
    const {selectors, color, image} = this.state
    const {changeStep} = this.props

    console.log(this.state, 'state');
    return (
      <MainView>
        <View>
          {image.map((el, key) => <Image key={key} source={{uri: el}}/>)}
          <Button onPress={() => {
            changeStep('chat')
          }}>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Chat.svg')}
            />
            {/*<TextBlue>{selectors[0]}</TextBlue>*/}

          </Button>

          <Button onPress={() => {
            // this.changeColor()
            changeStep('send')
          }}>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Telegram.svg')}
            />
            {/*<TextBlue>{selectors[1]}</TextBlue>*/}
          </Button>
          <View>
            <Button onPress={() => this.pickImage()}>
              <SvgUri
                fill={color}
                width="24"
                height='24'
                source={require('../../../assets/icons/Wallet.svg')}
              />
              <TextBlue>{selectors[2]}</TextBlue>
            </Button>
          </View>
          <Button onPress={() => {
            // this.changeColor()
            changeStep('activity')
          }}>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Activity.svg')}
            />
            <TextBlue>{selectors[3]}</TextBlue>
          </Button>

          <Button onPress={() => {
            // this.changeColor()
            this.clearStorage()
            // changeStep('profile')
          }}>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Profile.svg')}
            />
            {/*<TextBlue>{selectors[4]}</TextBlue>*/}
          </Button>
        </View>
      </MainView>
    );
  }
}

export default BottomSelectors