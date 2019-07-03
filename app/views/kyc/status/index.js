import React, { Component } from "react";
import { connect } from "react-redux";
import SvgUri from "react-native-svg-uri";

import { kycStatus } from "../../../services/selectors";
import {
  PopupBox,
  HeadBlue,
  RectangleSvgView,
  HeadBlueText,
  BlueButton,
  BlueButtonText,
  HeadBlueTitleText,
  HeadYellowTitleText,
  FieldBox,
  ItemField,
  TextField
} from "./styles";

class Status extends Component {
  static navigationOptions = {
    headerTitle: "KYC",
    headerStyle: {
      backgroundColor: "#3878FF"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  writeDone = () => {
    return (
      <PopupBox>
        <HeadBlue>
          <RectangleSvgView>
            <SvgUri
              width="16"
              height="16"
              source={require("../../../assets/icons/rectangle.svg")}
            />
          </RectangleSvgView>
          <HeadBlueTitleText>well done!</HeadBlueTitleText>
        </HeadBlue>
        <HeadBlueText>
          Thank you for submitting your KYC form. Please keep in mind, it may
          take several days to verify your information. Once your form will be
          reviewed you will receive a notification informing you of your KYC
          status
        </HeadBlueText>
        <BlueButton onPress={this.props.send}>
          <BlueButtonText>ok</BlueButtonText>
        </BlueButton>
      </PopupBox>
    );
  };

  writeFieldBox = () => {
    return (
      <FieldBox>
        <ItemField>
          <SvgUri
            width="16"
            height="16"
            source={require("../../../assets/icons/closeYellow.svg")}
          />
          <TextField>Color photograph</TextField>
        </ItemField>
        <ItemField>
          <SvgUri
            width="16"
            height="16"
            source={require("../../../assets/icons/closeYellow.svg")}
          />
          <TextField>High resolution image</TextField>
        </ItemField>
        <ItemField>
          <SvgUri
            width="16"
            height="16"
            source={require("../../../assets/icons/closeYellow.svg")}
          />
          <TextField>
            Your name and surname must be visible in the document
          </TextField>
        </ItemField>
        <ItemField>
          <SvgUri
            width="16"
            height="16"
            source={require("../../../assets/icons/closeYellow.svg")}
          />
          <TextField>In the photo the entire document</TextField>
        </ItemField>
      </FieldBox>
    );
  };

  writeRejected = () => {
    return (
      <PopupBox>
        <HeadBlue style={{ backgroundColor: "#FFD338" }}>
          <RectangleSvgView>
            <HeadYellowTitleText>i</HeadYellowTitleText>
          </RectangleSvgView>
          <HeadBlueTitleText>rejected!</HeadBlueTitleText>
        </HeadBlue>
        {this.writeFieldBox()}
        <BlueButton
          style={{ backgroundColor: "#FFD338" }}
          onPress={this.props.changeStep}
        >
          <BlueButtonText>ok</BlueButtonText>
        </BlueButton>
      </PopupBox>
    );
  };

  render() {
    const kycStatus = this.props.kycStatus.toLowerCase();
    return kycStatus === "pending"
      ? this.writeDone()
      : kycStatus === "rejected" && this.writeRejected();
  }
}

const MSTP = state => ({
  kycStatus: kycStatus(state)
});
const MDTP = {};

export default connect(
  MSTP,
  MDTP
)(Status);
