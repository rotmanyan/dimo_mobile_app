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
  SendCountText
} from './styles'
import {connect} from "react-redux";
import {signUserIn} from "../../services/profile/operation";

class EnterPassword extends Component {
  state = {value: ''}

  render() {
    const {value} = this.state
    const {next} = this.props
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
              if (value.length >= 4) {
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
          <NextButtonView onPress={() => next(value)}>
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