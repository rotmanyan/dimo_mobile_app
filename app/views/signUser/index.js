import React, {Component} from 'react'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {getLanguages} from 'react-native-i18n'
import PhoneInput from 'react-native-phone-input'
import en from '../../i18n/locales/en'
import ru from '../../i18n/locales/ru'
import pl from '../../i18n/locales/pl'

import {
  TextHeadMiddle,
  StyledButton,
  ButtonView,
  PhoneView,
  MainView,
  ViewHead,
  ViewBottom,
  ImageBg
} from './styles'

class SignUser extends Component {
  state = {
    value: '+255',
    storage: '',
    language: 'ru',
  }

  componentDidMount() {
    AsyncStorage.setItem('@storage_Key', 'yeyyeuquqwuewquuqwe')
    getLanguages().then(languages => {
      let language = languages[0].split('-')[0]
      this.setState({language})
    })
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>): void {
    this.state.storage.length === 0
      ? AsyncStorage.getItem('@storage_Key').then(storage => this.setState({storage}))
      : null
  }

  writeButton = () => {
    switch (this.state.language) {
      case 'ru':
        return <StyledButton
          onPress={() => this.setState({language: 'en'})}
          title={ru.next}
          color='#fff'/>
      case 'pl':
        return <StyledButton
          onPress={() => this.setState({language: 'en'})}
          title={pl.next}
          color='#fff'/>
      case 'en':
        return <StyledButton
          onPress={() => this.setState({language: 'ru'})}
          title={en.next}
          color='#fff'/>
      default:
        return <StyledButton
          onPress={() => this.setState({language: 'ru'})}
          title={en.next}
          color='#fff'/>
    }
  }

  render() {
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <TextHeadMiddle>
          Please enter your number
        </TextHeadMiddle>

        <PhoneView>
          <PhoneInput
            initialCountry='tz'
            ref={input => {
              if (input !== null) {
                let a = this.state.value.split(' ').join('')
                input.focus()

                if (a.length >= 13) {
                  input.blur()
                }
              }
            }}
            autoFormat={true}
            flagStyle={{borderRadius: 12.5, width: 25, height: 25}}
            isValidNumber={e => console.log(e, 'eve t')}
            blur={() => console.log('1zzzzzz')}
            focus={
              () => console.log('2qqqqq')
            }
            confirmText='Confirm'
            cancelText='Cancel'
            onChangePhoneNumber={value => this.setState({value})}
          />
        </PhoneView>

        <TextHeadMiddle>
          By clicking 'Next' you confirm that you have read and understand the Dimo Privacy Policy
          and Terms and Conditions, and agree to its
        </TextHeadMiddle>
        <ButtonView>
          {this.writeButton()}
        </ButtonView>
      </MainView>
    )
  }
}

export default SignUser