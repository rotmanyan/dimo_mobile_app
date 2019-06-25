import React, {Component} from 'react';
import {connect} from 'react-redux'
import {signUserUp} from "../../services/profile/operation";
import {
  MainView,
  ViewHead,
  ViewBottom,
  ImageBg,
  ButtonPanelView,
  NextButtonView,
  NextButton,
  InputForm
} from './styles'

class RegistrationUser extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  render() {
    const {email, password, confirmPassword} = this.state
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
            }
          }}
          value={password}
          onChange={e => this.setState({password: e.nativeEvent.text})}
          placeholder="Password"
          type='password'
        />
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