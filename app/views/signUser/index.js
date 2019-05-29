import React, {Component} from 'react'
import PhoneInput from 'react-native-phone-input'
import {StyledView, StyledText, StyledTextInput, StyledButton, StyledButtonView, StyledInputView} from './styles'

class SignUser extends Component {
  state = {
    value: ''
  }

  render() {
    const {value} = this.state
    return (
      <StyledView>
        <StyledText>
          Please enter your number
          {value}
        </StyledText>
        <StyledInputView>
          <PhoneInput value={value + 1} onChangePhoneNumber={value => this.setState({value})}/>
        </StyledInputView>
        <StyledText>
          By clicking 'Next' you confirm that you have read and understand the Dimo Privacy Policy
          and Terms and Conditions, and agree to its
        </StyledText>
        <StyledButtonView>
          <StyledButton title='NEXT' color='#fff' style={{backgroundColor: 'red'}}/>
        </StyledButtonView>
      </StyledView>
    )
  }
}

export default SignUser