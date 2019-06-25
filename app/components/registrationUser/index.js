import React, {Component} from 'react';
import {connect} from "react-redux";
import {signUserUp} from "../../services/profile/operation";
import {MainView, Button, Text} from './styles'
import {
  ButtonPanelView,
  ImageBg,
  InputForm, NextButton, NextButtonView,
  SendCount,
  SendCountText,
  ViewBottom,
  ViewHead
} from "../enterPassword/styles";


class RegistrationUser extends Component {
  state = {}

  render() {
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <InputForm
          ref={input => {
            if (input !== null) {
              input.focus()
              if (value.length >= 6) {
                input.blur()
              }
            }
          }}
          value={value}
          onChange={e => {
            this.setState({value: e.nativeEvent.text})
          }} placeholder="Enter your password"/>
        <SendCount>
          <SendCountText>
            I've forgotten my password
          </SendCountText>
        </SendCount>
        <ButtonPanelView>
          <NextButtonView onPress={() => console.log('success')}>
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
  next: signUserUp
}

export default connect(null, MDTP)(RegistrationUser)