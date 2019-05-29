import React, {Component} from 'react'
import PhoneInput from 'react-native-phone-input'
import {TextHead, TextMiddle, StyledButton, ButtonView, PhoneView, MainView, View, Image} from './styles'

class SignUser extends Component {
  state = {
    value: '+255'
  }

  render() {
    const {value} = this.state
    return (
      <MainView source={require('../../assets/backgrounds/bottom.png')}>
        <View>
          <Image
            source={require('../../assets/backgrounds/bottom.png')}/>
        </View>
        <TextHead>
          Please enter your number
        </TextHead>

        <PhoneView>
          <PhoneInput
            flagStyle={{borderRadius: 12.5, width: 25, height: 25}}
            value={value}
            confirmText='Confirm'
            cancelText='Cancel'
            onChangePhoneNumber={value => this.setState({value})}
          />
        </PhoneView>

        <TextMiddle>
          By clicking 'Next' you confirm that you have read and understand the Dimo Privacy Policy
          and Terms and Conditions, and agree to its
        </TextMiddle>
        <ButtonView>
          <StyledButton title='NEXT' color='#fff'/>
        </ButtonView>
      </MainView>
    )
  }
}

export default SignUser