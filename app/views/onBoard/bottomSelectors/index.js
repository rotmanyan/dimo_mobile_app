import React, {Component} from 'react';
import {MainView, View, Button, TextBlue, Image} from "./styles";
import {ImagePickerIOS} from 'react-native';
import SvgUri from 'react-native-svg-uri';

class BottomSelectors extends Component {
  state = {
    selectors: ['Chat', 'Telegram', 'Wallet', 'Active', 'Profile'],
    color: '#90a5c2',
    click: true,
    image: null
  }

  changeColor = () => this.setState({color: this.state.click ? '#3878FF' : '#90a5c2', click: !this.state.click})

  pickImage() {
    console.log('123123123');
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, error => console.log(error, 'error'));
  }

  render() {
    const {selectors, color, image} = this.state
    console.log(this.state, 'state');

    return (
      <MainView>
        <View>
          <Image source={{uri: image}}/>
          <Button onPress={this.changeColor}>
            {/*            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Chat.svg')}
            />*/}
            {/*<TextBlue>{selectors[0]}</TextBlue>*/}
          </Button>

          <Button>
            {/*      <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Telegram.svg')}
            />*/}
            {/*<TextBlue>{selectors[1]}</TextBlue>*/}
          </Button>
          <View>
            <Button onPress={() => this.pickImage()}>
              {/*          <SvgUri
                fill={color}
                width="24"
                height='24'
                source={require('../../../assets/icons/Wallet.svg')}
              />*/}
              <TextBlue>{selectors[2]}</TextBlue>
            </Button>
          </View>
          <Button onPress={() => this.pickImage()}>
            {/*  <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Activity.svg')}
            />*/}
            <TextBlue>{selectors[3]}</TextBlue>
          </Button>

          <Button>
            {/* <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Profile.svg')}
            />*/}
            {/*<TextBlue>{selectors[4]}</TextBlue>*/}
          </Button>
        </View>
      </MainView>
    );
  }
}

export default BottomSelectors