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
    console.log('123123123');
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: [...this.state.image, imageUri]});
    }, error => console.log(error, 'error'));
  }

  render() {
    const {images, step, isFirst} = this.state
    return (
      <>
        {isFirst
          ? <ImageOneView>
            <ImageOne source={require('../../assets/images/888.png')}/>
            <ContinueButton onPress={() => {
              this.setState({isFirst: !isFirst})
            }}>
              <ContinueButtonText>
                CONTINUE
              </ContinueButtonText>
            </ContinueButton>
          </ImageOneView>
          : step === 'proof'
            ? <MainView>
              <HeadView>
              </HeadView>
              <BodyView>
                <TextH1>Account verification</TextH1>
                <SelectorPassport>

                </SelectorPassport>

                <UploadImageBox>
                  <UploadImage onPress={() => this.pickImage()}>
                    <SvgView>
                      <SvgUri
                        width="16"
                        height='16'
                        source={require('../../assets/icons/downloadImg.svg')}
                      />
                    </SvgView>
                    <UploadImageTextBox>
                      <UploadImageTextHead>ADD FRONT SIDE</UploadImageTextHead>
                      <UploadImageTextFooter>Upload or take a picture</UploadImageTextFooter>
                    </UploadImageTextBox>
                  </UploadImage>

                  <UploadImage onPress={() => this.pickImage()}>
                    <SvgView>
                      <SvgUri
                        width="16"
                        height='16'
                        source={require('../../assets/icons/downloadImg.svg')}
                      />
                    </SvgView>
                    <UploadImageTextBox>
                      <UploadImageTextHead>ADD BACK SIDE</UploadImageTextHead>
                      <UploadImageTextFooter>Upload or take a picture</UploadImageTextFooter>
                    </UploadImageTextBox>
                  </UploadImage>
                  {!images.length
                    ? <ButtonProceedBlue onPress={() => this.props.navigation.navigate('Profile')}>
                      <ButtonProceedText>
                        PROCEED
                      </ButtonProceedText>
                    </ButtonProceedBlue>
                    : <ButtonProceedGrey>
                      <ButtonProceedText>
                        PROCEED
                      </ButtonProceedText>
                    </ButtonProceedGrey>}
                </UploadImageBox>
              </BodyView>
            </MainView>
            : step === 'selfie'
              ? ''
              : step === 'status'
                ? ''
                : ''

        }
      </>
    )
  }
}

export default Kyc