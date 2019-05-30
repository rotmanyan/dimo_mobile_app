import React, {Component} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import en from '../../i18n/locales/en'
import ru from '../../i18n/locales/ru'
import pl from '../../i18n/locales/pl'

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
    console.log(this.state.language, 'state lang');
    switch (this.state.language) {
      case 'ru':
        return <StyledButton
          onPress={() => this.setState({language: 'en', lnth: this.state.lnth + 1})}
          title={ru.next}
          color='#fff'/>
      case 'pl':
        return <StyledButton
          onPress={() => this.setState({language: 'en', lnth: this.state.lnth + 1})}
          title={pl.next}
          color='#fff'/>
      case 'en':
        return <StyledButton
          onPress={() => this.setState({language: 'ru', lnth: this.state.lnth + 1})}
          title={en.next}
          color='#fff'/>
      default:
        return <StyledButton
          onPress={() => this.setState({language: 'ru', lnth: this.state.lnth + 1})}
          title={en.next}
          color='#fff'/>
    }
  }

  render() {
    const {value} = this.state
    console.log(this.state, 'this.state');

    return (
      <MainView>
        <View style={styles}>
          <ImageBottom
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
          {this.writeButton()}
        </ButtonView>
      </MainView>
    )
  }
}

export default SignUser