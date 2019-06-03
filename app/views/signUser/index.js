import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLanguages} from 'react-native-i18n'
import PhoneInput from 'react-native-phone-input'
import {signUser} from '../../services/profile/operation'
import * as selectorLang from '../../services/i18n/selectors'
import {setLocalization} from "../../services/i18n/actions";
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
// import {CameraRoll, ScrollView, View, Image} from "react-native";

class SignUser extends Component {
  state = {
    value: '+255',
    storage: '',
    photos: []
  }

  componentDidMount() {
    // console.log(CameraRoll, 'CameraRoll');
    let language = 'en'
    getLanguages()
      .then(languages => language = languages[0].split('-')[0])
      .then(() => this.props.set(language))
  }

/*
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        this.setState({photos: r.edges});
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
*/

  writeInput = () => {
    return (
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
        confirmText='Confirm'
        cancelText='Cancel'
        onChangePhoneNumber={value => this.setState({value})}
      />
    )
  }

  render() {
    const {translate} = this.props
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
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
            // onPress={e => console.log(e, 'event button')}
            title={translate.next}
            color='#fff'
            onPress={()=> alert('We are create more...')}
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
  set: setLocalization
}

export default connect(MSTP, MDTP)(SignUser)