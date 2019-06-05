import React, {Component} from 'react';
import {MainView, Viewv, Button, TextBlue, Buttonx} from "./styles";
import {ImagePickerIOS, View, Image} from 'react-native';
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
        <Viewv>

          <Button onPress={this.changeColor}>
            {/*<SvgUri*/}
            {/*width="24"*/}
            {/*height='24'*/}
            {/*source={require('../../../assets/icons/Chat.svg')}*/}
            {/*/>*/}
            {/*<TextBlue>{selectors[0]}</Text>*/}
          </Button>

          <Button>
            {/*<SvgUri*/}
            {/*width="24"*/}
            {/*height='24'*/}
            {/*source={require('../../../assets/icons/Telegram.svg')}*/}
            {/*/>*/}
            {/*<TextBlue>{selectors[1]}</Text>*/}
          </Button>
          <Buttonx onPress={() => this.pickImage()} title='asdasda'/>
          <Image source={{uri: image}}/>
          <View>
            <Button>
              {/*            <SvgUri
              style={{
                textAlign: 'center',
                margin: 'auto',
                border: '2px solid palevioletred'
              }}
              fill={color}
              width="24"
              height='24'
              source={require('../../../assets/icons/Wallet.svg')}
            />*/}
              <TextBlue>{selectors[2]}</TextBlue>
            </Button>
          </View>
          <Button>
            {/*<SvgUri*/}
            {/*width="24"*/}
            {/*height='24'*/}
            {/*source={require('../../../assets/icons/Activity.svg')}*/}
            {/*/>*/}
            {/*<TextBlue>{selectors[3]}</Text>*/}
          </Button>

          <Button>
            {/*<SvgUri*/}
            {/*width="24"*/}
            {/*height='24'*/}
            {/*source={require('../../../assets/icons/Profile.svg')}*/}
            {/*/>*/}
            {/*<TextBlue>{selectors[4]}</Text>*/}
          </Button>
        </Viewv>
      </MainView>
    );
  }
}

export default BottomSelectors