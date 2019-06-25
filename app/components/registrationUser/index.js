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
  InputForm,
  BodyScrollView,
  BodyView,
  InputBoxView
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
        <BodyScrollView>
          <BodyView>
            <InputBoxView>
              <InputForm
                value={email}
                onChange={e => this.setState({email: e.nativeEvent.text})}
                placeholder="E-mail"
              />
              <InputForm
                onChange={e => this.setState({password: e.nativeEvent.text})}
                placeholder="Password"
                value={password}
              />
              <InputForm
                onChange={e => this.setState({confirmPassword: e.nativeEvent.text})}
                placeholder="Re-enter password"
                value={confirmPassword}
              />
            </InputBoxView>
            <ButtonPanelView>
              <NextButtonView onPress={() => console.log('success')}>
                <NextButton>
                  Next
                </NextButton>
              </NextButtonView>
            </ButtonPanelView>
          </BodyView>
        </BodyScrollView>
      </MainView>
    )
  }
}

const MDTP = {
  next: signUserUp
}

export default connect(null, MDTP)(RegistrationUser)