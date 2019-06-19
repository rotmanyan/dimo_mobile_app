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

let timerSend;

class SignUserCode extends Component {
  state = {
    timer: 59
  }

  componentDidMount(): void {
    timerSend = setInterval(() => this.setState({timer: this.state.timer - 1}), 1000)
  }

  componentWillUnmount(): void {
    clearInterval(timerSend)
  }

  render() {
    const {changeStep, changeState, viewValue} = this.props
    const {timer} = this.state
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

        <InputForm placeholder="Insert the 6-digit code"/>
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