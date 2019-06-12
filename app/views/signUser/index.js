import React, {Component} from 'react'
import {connect} from 'react-redux'
import PhoneInput from 'react-native-phone-input'
import {signUser} from '../../services/profile/operation'
import * as selectorLang from '../../services/i18n/selectors'
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
  ImageLogo
} from './styles'

class SignUser extends Component {
  state = {
    value: '+255721234566',
    storage: '',
    photos: []
  }

  writeInput = () => {
    return (
      <PhoneInput
        initialCountry='tz'
        ref={input => {
          if (input !== null) {
            let a = this.state.value.split(' ').join('')
            // input.focus()

            if (a.length >= 13) {
              input.blur()
            }
          }
        }}
        autoFormat={true}
        flagStyle={{borderRadius: 12.5, width: 25, height: 25}}
        confirmText='Confirm'
        cancelText='Cancel'
        onChangePhoneNumber={value => this.setState({value})}
      />
    )
  }

  render() {
    const {translate, sign, step} = this.props
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
          {translate.or_login_via_social_networks}
        </TextHeadMiddle>

        <TextHeadMiddle>
          {translate.by_clicking_next}
        </TextHeadMiddle>
        <ButtonView>
          <StyledButton
            title={translate.next}
            color='#fff'
            onPress={() => {
              console.log(this.state.value.trim());
              sign(this.state.value.trim())
              step('onBoard')
            }}
          />
        </ButtonView>
      </MainView>
    )
  }
}

const MSTP = state => ({
  translate: selectorLang.translate(state),
})
const MDTP = {
  sign: signUser,
}

export default connect(MSTP, MDTP)(SignUser)