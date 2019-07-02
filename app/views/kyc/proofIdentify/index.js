import React, { Component } from "react";
import { connect } from "react-redux";

import { sendingPhotoKyc } from "../../../services/kyc/operation";
import ImagePicker from "react-native-image-picker";
import SvgUri from "react-native-svg-uri";
import {
  ButtonProceedBlue,
  ButtonProceedGrey,
  ButtonProceedText,
  SelectorPassport,
  SvgView,
  TextH1,
  UploadImage,
  UploadImageBox,
  UploadImageTextBox,
  UploadImageTextFooter,
  UploadImageTextHead,
  UploadBackground
} from "./styles";

class ProofIdentify extends Component {
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
    frontPic: "",
    backPic: "",
    frontPicBASE64: "",
    backPicBASE64: "",
    loadImage: false
  };
  pickImage = side => {
    const options = {
      title: "Proof of identity",
      cameraType: "front",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    switch (side) {
      case "front":
        return ImagePicker.showImagePicker(options, response => {
          console.log("Response = ", response);

          if (response.didCancel) {
            console.log("User cancelled image picker");
          } else if (response.error) {
          } else {
            const source = "data:image/jpeg;base64," + response.data;
            const source2 = response.origURL;

            this.props.sendPhoto(source);

            this.setState({
              ...this.state,
              loadImage: false,
              frontPic: source2,
              frontPicBASE64: source
            });
          }
        });
      case "clean_front":
        this.setState({ frontPic: "" });
        break;
      case "clean_back":
        this.setState({ backPic: "" });
        break;
      case "back":
        return ImagePicker.showImagePicker(options, response => {
          console.log("Response = ", response);

          if (response.didCancel) {
            console.log("User cancelled image picker");
          } else if (response.error) {
          } else {
            const source = "data:image/jpeg;base64," + response.data;
            const source2 = response.origURL;
            this.props.sendPhoto(source);
            this.setState({
              ...this.state,
              loadImage: false,
              backPic: source2,
              backPicBASE64: source
            });
          }
        });
    }
  };

  // pickImage = side => {
  //   switch (side) {
  //     case "front":
  //       return ImagePickerIOS.openSelectDialog(
  //         {},
  //         frontPic => this.setState({ frontPic }),
  //         error => console.log(error, "error")
  //       );
  //     case "clean_front":
  //       return this.setState({ frontPic: "" });
  //     case "clean_back":
  //       return this.setState({ backPic: "" });
  //     case "back":
  //     default:
  //       return ImagePickerIOS.openSelectDialog(
  //         {},
  //         backPic => this.setState({ backPic }),
  //         error => console.log(error, "error")
  //       );
  //   }
  // };

  render() {
    const { frontPic, backPic } = this.state;
    const { changeStep } = this.props;
    return (
      <>
        {console.log(this.state, "FROM COMPONENT")}
        <TextH1>Account verification</TextH1>
        <SelectorPassport />

        <UploadImageBox>
          {frontPic ? (
            <UploadImage
              onPress={() => this.pickImage("clean_front")}
              style={{
                backgroundColor: "#74E2BF",
                justifyContent: "space-between"
              }}
            >
              <SvgView style={{ backgroundColor: "#fff" }}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/rectangleGreen.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  UPLOADED!
                </UploadImageTextHead>
              </UploadImageTextBox>
              <SvgView style={{ backgroundColor: "#31d4a0" }}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/closeIcon.svg")}
                />
              </SvgView>
            </UploadImage>
          ) : (
            <UploadImage onPress={() => this.pickImage("front")}>
              <SvgView>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/downloadImg.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>ADD FRONT SIDE</UploadImageTextHead>
                <UploadImageTextFooter>
                  Upload or take a picture
                </UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          )}

          {backPic ? (
            <UploadImage
              onPress={() => this.pickImage("clean_back")}
              style={{
                backgroundColor: "#74E2BF",
                justifyContent: "space-between"
              }}
            >
              <SvgView style={{ backgroundColor: "#fff" }}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/rectangleGreen.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  UPLOADED!
                </UploadImageTextHead>
              </UploadImageTextBox>
              <SvgView style={{ backgroundColor: "#31d4a0" }}>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/closeIcon.svg")}
                />
              </SvgView>
            </UploadImage>
          ) : (
            <UploadImage onPress={() => this.pickImage("back")}>
              <SvgView>
                <SvgUri
                  width="16"
                  height="16"
                  source={require("../../../assets/icons/downloadImg.svg")}
                />
              </SvgView>
              <UploadImageTextBox>
                <UploadImageTextHead>ADD BACK SIDE</UploadImageTextHead>
                <UploadImageTextFooter>
                  Upload or take a picture
                </UploadImageTextFooter>
              </UploadImageTextBox>
            </UploadImage>
          )}

          {frontPic.length && backPic.length ? (
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
)(ProofIdentify);
