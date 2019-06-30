import React, {Component} from 'react'
import {connect} from 'react-redux'
import PhoneInput from 'react-native-phone-input'
import {signUserVerifyPhone} from '../../services/profile/operation'
import SignUserCode from '../signUserCode'
import * as selectorLang from '../../services/selectors'
import {
  TextHeadMiddle,
  StyledButton,
  ButtonView,
  PhoneView,
  MainView,
  ViewHead,
  ViewBottom,
  ImageBg,
  ViewLogo,
  ImageLogo,
} from './styles'
import EnterPassword from "../../components/enterPassword";
import RegistrationUser from "../../components/registrationUser";

class SignUser extends Component {
  state = {
    value: '',
  }

  writeInput = () => {
    const {value} = this.state

    return (
      <PhoneInput
        initialCountry='tz'
        ref={input => {
          if (input !== null) {
            let a = value.split(' ').join('')
            input.focus()

            if (a.length >= 13) {
              input.blur()
              // sign(value)
            }
          }
        }}
        autoFormat={true}
        flagStyle={{borderRadius: 12.5, width: 25, height: 25}}
        confirmText='Confirm'
        cancelText='Cancel'
        value={value}
        onChangePhoneNumber={value => this.setState({value})}
        isValidNumber
        getFlag={a => console.log(a, 'getFlag')}
      />
    )
  }

  writeBody = () => {
    const {translate, sign} = this.props
    const {value} = this.state

    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <ViewLogo>
          <ImageLogo source={require('../../assets/backgrounds/logo.png')}/>
        </ViewLogo>
        <TextHeadMiddle>
          {translate.please_enter_your_number}
        </TextHeadMiddle>

        <PhoneView>
          {this.writeInput()}
        </PhoneView>

        <TextHeadMiddle>
          {translate.by_clicking_next}
        </TextHeadMiddle>
        <ButtonView>
          <StyledButton
            title={translate.next}
            color='#fff'
            onPress={() => {
              if (value.length > 3) sign(value)
            }}
          />
        </ButtonView>
      </MainView>
    )
  }

/*  render() {
    const {userNumber, success, isRegistered, phone} = this.props

    if (userNumber) {
      if (phone) {
        return <EnterPassword/>
      }
      if (success) {
        if (isRegistered) {
          return <EnterPassword/>
        } else return <RegistrationUser/>
      }
      return <SignUserCode/>
    } else if (!userNumber) {
      return this.writeBody()
    }
  }*/

    render() {
      return <RegistrationUser/>
    }
}

const MSTP = state => ({
  translate: selectorLang.translate(state),
  userNumber: state.profile.userNumber,
  success: state.profile.success,
  isRegistered: state.profile.isRegistered
})
const MDTP = {
  sign: signUserVerifyPhone,
}

export default connect(MSTP, MDTP)(SignUser)