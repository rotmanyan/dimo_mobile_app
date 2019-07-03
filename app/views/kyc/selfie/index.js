import React, {Component} from "react";
import {connect} from "react-redux";
import {sendingPhotoKyc} from "../../../services/kyc/operation";
import SvgUri from "react-native-svg-uri";

import ImagePicker from "react-native-image-picker";
import {
  UploadImageBox,
  TitleText,
  SubTitleText,
  FieldBox,
  ItemField,
  TextField,
  SvgView,
  UploadImage,
  UploadImageTextBox,
  UploadImageTextFooter,
  UploadImageTextHead,
  HeadBlueText,
  BlueButton,
  BlueButtonText,
  HeadBlueTitleText,
  ButtonProceedBlue,
  ButtonProceedGrey,
  ButtonProceedText
} from "./styles";

class Selfie extends Component {
  static navigationOptions = {
    headerTitle: "KYC",
    headerStyle: {
      backgroundColor: "#3878FF"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  state = {
    selfiePhoto: "",
    selfiePhotoBASE64: ""
  };

  pickImage = type => {
    if (type) {
      return this.setState({selfiePhoto: ""});
    }

    const options = {
      title: "Selfie",
      cameraType: "front",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    return ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
      } else {
        const source = "data:image/jpeg;base64," + response.data;
        const source2 = response.origURL || response.uri;
        this.props.sendPhoto(source);
        this.setState({
          ...this.state,
          selfiePhoto: source2,
          selfiePhotoBASE64: source
        });
      }
    });
  };
  // pickImage = type =>
  //   type
  //     ? this.setState({ selfiePhoto: "" })
  //     : ImagePickerIOS.openSelectDialog(
  //         {},
  //         selfiePhoto => this.setState({ selfiePhoto }),
  //         error => console.log(error, "error")
  //       );

  render() {
    const {selfiePhoto} = this.state;
    const {changeStep} = this.props;
    return (
      <>
        <UploadImageBox>
          <TitleText>identity</TitleText>
          <SubTitleText>
            Please upload a photo with your passport in your hands
          </SubTitleText>

          <FieldBox>
            <ItemField>
              <SvgUri
                width="16"
                height="16"
                source={require("../../../assets/icons/rectangle.svg")}
              />
              <TextField>Color photograph</TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height="16"
                source={require("../../../assets/icons/rectangle.svg")}
              />
              <TextField>High resolution image</TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height="16"
                source={require("../../../assets/icons/rectangle.svg")}
              />
              <TextField>
                Your name and surname must be visible in the document
              </TextField>
            </ItemField>
            <ItemField>
              <SvgUri
                width="16"
                height="16"
                source={require("../../../assets/icons/rectangle.svg")}
              />
              <TextField>In the photo the entire document</TextField>
            </ItemField>
          </FieldBox>
          {selfiePhoto ? (
            <UploadImage
              onPress={() => this.pickImage("clean_photo")}
              style={{
                backgroundColor: "#74E2BF",
                justifyContent: "space-between"
              }}
            >
              <SvgView style={{backgroundColor: "#fff"}}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/rectangleGreen.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead
                  style={{textAlign: "center", color: "#fff"}}
                >
                  UPLOADED!
                </UploadImageTextHead>
              </UploadImageTextBox>
              <SvgView style={{backgroundColor: "#31d4a0"}}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/closeIcon.svg")}
                />
              </SvgView>
            </UploadImage>
          ) : (
            <UploadImage onPress={() => this.pickImage()}>
              <SvgView>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/downloadImg.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>add photo</UploadImageTextHead>
                <UploadImageTextFooter>
                  Upload or take a picture
                </UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          )}

          {selfiePhoto.length ? (
            <ButtonProceedBlue onPress={changeStep}>
              <ButtonProceedText>PROCEED</ButtonProceedText>
            </ButtonProceedBlue>
          ) : (
            <ButtonProceedGrey>
              <ButtonProceedText>PROCEED</ButtonProceedText>
            </ButtonProceedGrey>
          )}
        </UploadImageBox>
      </>
    );
  }
}

const MDTP = {
  sendPhoto: sendingPhotoKyc
};

export default connect(
  null,
  MDTP
)(Selfie);
