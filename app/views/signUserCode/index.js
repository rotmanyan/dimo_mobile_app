import React, {Component} from 'react'
import {connect} from "react-redux";
import {clearUser} from "../../services/profile/actions";
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
    const {clearUser, userNumber} = this.props
    console.log(this.props, 'props logger');
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

        <NumberMiddle>{userNumber}</NumberMiddle>

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
          <BackButtonView onPress={clearUser}>
            <BackButton>
              Back
            </BackButton>
          </BackButtonView>

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

const MSTP = state => ({
  userNumber: state.profile.userNumber
})
const MDTP = {
  clearUser
}

export default connect(MSTP, MDTP)(SignUserCode)