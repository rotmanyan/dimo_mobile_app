import React, {Component} from 'react';
import SvgUri from "react-native-svg-uri";
import {ImagePickerIOS} from "react-native";
import {
  UploadImageBox, TitleText, SubTitleText,
  FieldBox, ItemField, TextField,
  SvgView, UploadImage, UploadImageTextBox,
  UploadImageTextFooter, UploadImageTextHead,
  PopupBox,
  HeadBlue, RectangleSvgView, HeadBlueText,
  BlueButton, BlueButtonText, HeadBlueTitleText
} from './styles'


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

  pickImage = () => ImagePickerIOS.openSelectDialog({}, selfiePhoto => this.setState({selfiePhoto}), error => console.log(error, 'error'));

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
    return (
      <>
        {this.state.selfiePhoto
          ? this.wellDone()
          : <UploadImageBox>

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

            <UploadImage onPress={() => this.pickImage()}>
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

          </UploadImageBox>}
      </>
    );
  }
}

export default Selfie;