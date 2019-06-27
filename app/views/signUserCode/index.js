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
  ImageBg,
  SendCountText,
  SendCountTextSec
} from './styles'
import {signUserMobileConfirm, signUserVerifyPhone} from "../../services/profile/operation";

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
    const {back, next, userNumber, sign} = this.props
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
              if (value.length === 4) {
                next(value)
              }
            }
          }}
          maxLength={4}
          value={value}
          onChange={e => {
            this.setState({value: e.nativeEvent.text})
          }} placeholder="Insert the 4-digit code"/>
        {timer > 0
          ? <SendCountText>
            Send again: {timer}
          </SendCountText>
          :
          <SendCount onPress={() => {
            this.setState({timer: 59}, () => sign(userNumber))
          }}>
            <SendCountTextSec>
              Click to send again
            </SendCountTextSec>
          </SendCount>
        }
        <ButtonPanelView>
          <BackButtonView onPress={back}>
            <BackButton>
              Back
            </BackButton>
          </BackButtonView>

          <NextButtonView onPress={() => value.length === 4 && next(value)}>
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
  back: clearUser,
  next: signUserMobileConfirm,
  sign: signUserVerifyPhone,
}

export default connect(MSTP, MDTP)(SignUserCode)