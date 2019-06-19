import React, {Component} from 'react'
import {
  TextHeadMiddle,
  MainView,
  ButtonPanelView,
  BackButtonView,
  NextButtonView,
  BackButton,
  NextButton,
  NumberMiddle,
  InputForm,
  SendCount,
  ViewHead,
  ViewBottom,
  ImageBg
} from './styles'
import {CameraKitCamera} from "react-native-camera-kit";
import PhoneInput from "../signUser";

let timerSend;

class SignUserCode extends Component {
  state = {
    timer: 59,
    value: ''
  }

  componentDidMount(): void {
    timerSend = setInterval(() => this.setState({timer: this.state.timer - 1}), 1000)
  }

  componentWillUnmount(): void {
    clearInterval(timerSend)
  }

  render() {
    const {changeStep, changeState, viewValue} = this.props
    const {timer, value} = this.state
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>

        <TextHeadMiddle>We just sent to you a code to number</TextHeadMiddle>

        <NumberMiddle>{viewValue}</NumberMiddle>

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
          }} placeholder="Insert the 6-digit code"/>
        {timer > 0
          ? <SendCount>
            Send again: {timer}
          </SendCount>
          : <SendCount>
            Click to send again
          </SendCount>
        }
        <ButtonPanelView>
          <BackButtonView onPress={() => changeState()}>
            <BackButton>
              Back
            </BackButton>
          </BackButtonView>

          <NextButtonView onPress={() => changeStep('success')}>
            <NextButton>
              Next
            </NextButton>
          </NextButtonView>
        </ButtonPanelView>

      </MainView>
    )
  }
}

export default SignUserCode