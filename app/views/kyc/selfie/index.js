import React, {Component} from 'react';
import SvgUri from "react-native-svg-uri";
import {ImagePickerIOS} from "react-native";
import {
  UploadImageBox, TitleText, SubTitleText,
  FieldBox, ItemField, TextField, PopupBox,
  SvgView, UploadImage, UploadImageTextBox,
  UploadImageTextFooter, UploadImageTextHead,
  HeadBlue, RectangleSvgView, HeadBlueText,
  BlueButton, BlueButtonText, HeadBlueTitleText,
  ButtonProceedBlue, ButtonProceedGrey, ButtonProceedText
} from './styles'
import {} from "../proofIdentify/styles";

class Selfie extends Component {
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
    selfiePhoto: ''
  }

  pickImage = type => type
    ? this.setState({selfiePhoto: ''})
    : ImagePickerIOS.openSelectDialog({}, selfiePhoto => this.setState({selfiePhoto}), error => console.log(error, 'error'))

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.selfiePhoto) this.props.changeStep()
  }

  wellDone = () => {
    return (
      <PopupBox>
        <HeadBlue>
          <RectangleSvgView>
            <SvgUri
              width="16"
              height='16'
              source={require('../../../assets/icons/rectangle.svg')}
            />
          </RectangleSvgView>
          <HeadBlueTitleText>well done!</HeadBlueTitleText>
        </HeadBlue>
        <HeadBlueText>
          Thank you for submitting your KYC form.
          Please keep in mind, it may take several days to verify your information.
          Once your form will be reviewed you will receive a notification informing you of your KYC status
        </HeadBlueText>
        <BlueButton onPress={this.props.send}>
          <BlueButtonText>
            ok
          </BlueButtonText>
        </BlueButton>

      </PopupBox>
    )
  }

  render() {
    const {selfiePhoto} = this.state
    const {changeStep} = this.props
    return (
      <>
        <UploadImageBox>

          <TitleText>identity</TitleText>
          <SubTitleText>Please upload a photo with your passport in your hands</SubTitleText>

          <FieldBox>
            <ItemField>
              <SvgUri
                width="16"
                height='16'
                source={require('../../../assets/icons/rectangle.svg')}
              />
              <TextField>Color photograph</TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height='16'
                source={require('../../../assets/icons/rectangle.svg')}
              />
              <TextField>High resolution image</TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height='16'
                source={require('../../../assets/icons/rectangle.svg')}
              />
              <TextField>Your name and surname must be visible in the document</TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height='16'
                source={require('../../../assets/icons/rectangle.svg')}
              />
              <TextField>In the photo the entire document</TextField>
            </ItemField>
          </FieldBox>
          {selfiePhoto
            ? <UploadImage
              onPress={() => this.pickImage('clean_photo')}
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

            : <UploadImage onPress={() => this.pickImage()}>
              <SvgView>
                <SvgUri
                  width="16"
                  height='16'
                  source={require('../../../assets/icons/downloadImg.svg')}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>add photo</UploadImageTextHead>
                <UploadImageTextFooter>Upload or take a picture</UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          }

          {selfiePhoto.length
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

export default Selfie;