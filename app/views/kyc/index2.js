import React, {Component} from 'react';
import {ImagePickerIOS} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {
  MainView,
  HeadView,
  BodyView,
  TextH1,
  SelectorPassport,
  UploadImageBox,
  UploadImage,
  UploadImageTextBox,
  UploadImageTextHead,
  UploadImageTextFooter,
  ButtonProceedBlue,
  ButtonProceedText,
  ButtonProceedGrey,
  SvgView, ImageOne, ImageOneView,
  ContinueButton,
  ContinueButtonText
} from "./styles";


class Kyc extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
    images: [],
    step: 'proof',
    isFirst: true
  }

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({images: [...this.state.images, imageUri]});
    }, error => console.log(error, 'error'));
  }

  render() {
    const {images} = this.state
    console.log(images, 'images');
    return (
      <>
        <ImageOneView>
          <ImageOne source={require('../../assets/images/888.png')}/>
          <ContinueButton>
            <ContinueButtonText>
              CONTINUE
            </ContinueButtonText>
          </ContinueButton>
        </ImageOneView>
      </>
    )
  }
}

export default Kyc