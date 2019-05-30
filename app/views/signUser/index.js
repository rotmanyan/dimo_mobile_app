import React, {Component} from 'react'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import {getLanguages} from 'react-native-i18n'
import PhoneInput from 'react-native-phone-input'
import {
  TextHead,
  TextMiddle,
  StyledButton,
  ButtonView,
  PhoneView,
  MainView,
  View,
  ImageTop,
  ImageBottom,
  styles
} from './styles'

class SignUser extends Component {
  state = {
    value: '+255',
    storage: '',
    str: ''
  }

  componentDidMount() {
    AsyncStorage.setItem('@storage_Key', this.state.value)
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    prevState.storage !== this.state.storage
      ? AsyncStorage.getItem('@storage_Key').then(storage => this.setState({storage}))
      : null
  }

  render() {
    const {value, storage, str} = this.state
    getLanguages().then(languages => {
      console.log(languages, 'languages');
    });
    return (
      <MainView>
        <View style={styles}>
          <ImageBottom
            source={require('../../assets/backgrounds/bottom.png')}/>
        </View>
        <TextHead>
          {str}
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
          <StyledButton onPress={() => this.setState({str: value})} title='NEXT' color='#fff'/>
        </ButtonView>
      </MainView>
    )
  }
}

export default SignUser