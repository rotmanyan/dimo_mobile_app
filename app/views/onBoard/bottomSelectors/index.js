import React, {Component} from 'react';
import {MainView, View, Button, TextBlue} from "./styles";
import SvgUri from 'react-native-svg-uri';

class BottomSelectors extends Component {
  state = {
    selectors: ['Chat', 'Telegram', 'Wallet', 'Active', 'Profile'],
    color: '#90a5c2',
    click: true
  }

  changeColor = () => this.setState({color: this.state.click ? '#3878FF' : '#90a5c2', click: !this.state.click})

  render() {
    const {selectors, color} = this.state
    return (
      <MainView>
        <View>

          <Button onPress={this.changeColor}>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Chat.svg')}
            />
            {/*<TextBlue>{selectors[0]}</Text>*/}
          </Button>

          <Button>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Telegram.svg')}
            />
            {/*<TextBlue>{selectors[1]}</Text>*/}
          </Button>

          <Button>
            <SvgUri
              style={{
                textAlign: 'center',
                margin: 'auto',
                border: '2px solid palevioletred'
              }}
              fill={color}
              width="24"
              height='24'
              source={require('../../../assets/icons/Wallet.svg')}
            />
            <TextBlue>{selectors[2]}</TextBlue>
          </Button>

          <Button>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Activity.svg')}
            />
            {/*<TextBlue>{selectors[3]}</Text>*/}
          </Button>

          <Button>
            <SvgUri
              width="24"
              height='24'
              source={require('../../../assets/icons/Profile.svg')}
            />
            {/*<TextBlue>{selectors[4]}</Text>*/}
          </Button>
        </View>
      </MainView>
    );
  }
}

export default BottomSelectors