import React, {Component} from 'react';
import {
  MainView,
  ImageBg,
  ViewBottom,
  ViewHead,
  ButtonPanelView,
  InputForm,
  NextButton,
  NextButtonView,
  SendCount,
  SendCountText,
  ImageKey
} from './styles'
import {connect} from "react-redux";
import {Linking} from "react-native";
import {signUserIn} from "../../services/profile/operation";

class EnterPassword extends Component {
  state = {
    value: '',
    passwordType: true,
  }

  link = () => {
    Linking.openURL('https://app.dimo.org/login/forgot-password')
  }

  render() {
    const {value, passwordType} = this.state
    const {next} = this.props
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <ImageKey
          source={require('../../assets/icons/ico-pass.png')}
        />
        <InputForm
          value={value}
          onChange={e => this.setState({value: e.nativeEvent.text})}
          placeholder="Enter your password"
          autoCapitalize='none'
          secureTextEntry={passwordType}
        />

        <SendCount onPress={this.link}>
          <SendCountText>
            I've forgotten my password
          </SendCountText>
        </SendCount>

        <ButtonPanelView>
          <NextButtonView onPress={() => value.length >= 8 && next(value)}>
            <NextButton>
              Next
            </NextButton>
          </NextButtonView>
        </ButtonPanelView>

      </MainView>
    )
  }
}

const MDTP = {
  next: signUserIn
}

export default connect(null, MDTP)(EnterPassword)