import React, {Component} from 'react';
import {ImagePickerIOS} from "react-native";
import SvgUri from "react-native-svg-uri";
import {
  ButtonProceedBlue, ButtonProceedGrey, ButtonProceedText,
  SelectorPassport,
  SvgView,
  TextH1,
  UploadImage,
  UploadImageBox,
  UploadImageTextBox, UploadImageTextFooter,
  UploadImageTextHead,
  UploadBackground
} from "./styles";

class ProofIdentify extends Component {
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
    frontPic: '',
    backPic: ''
  }

  pickImage = side => {
    switch (side) {
      case 'front':
        return ImagePickerIOS.openSelectDialog({}, frontPic => this.setState({frontPic}), error => console.log(error, 'error'));
      case 'clean_front':
        return this.setState({frontPic: ''})
      case 'clean_back':
        return this.setState({backPic: ''})
      case 'back':
      default:
        return ImagePickerIOS.openSelectDialog({}, backPic => this.setState({backPic}), error => console.log(error, 'error'));
    }
  }

  render() {
    const {frontPic, backPic} = this.state
    const {changeStep} = this.props
    return (
      <>
        <TextH1>Account verification</TextH1>
        <SelectorPassport>

        </SelectorPassport>

        <UploadImageBox>
          {frontPic
            ? <UploadImage
              onPress={() => this.pickImage('clean_front')}
              style={{backgroundColor: '#74E2BF', justifyContent: 'space-between'}}
            >
              <SvgView style={{backgroundColor: '#fff'}}>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/rectangleGreen.svg')}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead style={{textAlign: 'center', color: '#fff'}}>UPLOADED!</UploadImageTextHead>
              </UploadImageTextBox>
              <SvgView style={{backgroundColor: '#31d4a0'}}>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/closeIcon.svg')}
                />
              </SvgView>
            </UploadImage>
            : <UploadImage onPress={() => this.pickImage('front')}>
              <SvgView>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/downloadImg.svg')}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>ADD FRONT SIDE</UploadImageTextHead>
                <UploadImageTextFooter>Upload or take a picture</UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          }

          {backPic
            ? <UploadImage
              onPress={() => this.pickImage('clean_front')}
              style={{backgroundColor: '#74E2BF', justifyContent: 'space-between'}}
            >
              <SvgView style={{backgroundColor: '#fff'}}>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/rectangleGreen.svg')}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead style={{textAlign: 'center', color: '#fff'}}>UPLOADED!</UploadImageTextHead>
              </UploadImageTextBox>
              <SvgView style={{backgroundColor: '#31d4a0'}}>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/closeIcon.svg')}
                />
              </SvgView>
            </UploadImage>
            : <UploadImage onPress={() => this.pickImage('back')}>
              <SvgView>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/downloadImg.svg')}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>ADD BACK SIDE</UploadImageTextHead>
                <UploadImageTextFooter>Upload or take a picture</UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          }

          {frontPic.length && backPic.length
            ? <ButtonProceedBlue onPress={changeStep}>
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
      </>
    );
  }
}

export default ProofIdentify