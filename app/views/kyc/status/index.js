import React, {Component} from 'react';
import {
  BlueButton,
  BlueButtonText,
  HeadBlue,
  HeadBlueText,
  HeadBlueTitleText,
  PopupBox,
  RectangleSvgView
} from "../selfie/styles";
import SvgUri from "../selfie";

class Status extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  render() {
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
    );
  }
}

export default Status;