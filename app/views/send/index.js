import React, {Component} from 'react';
import SvgUri from "react-native-svg-uri";
import {Dropdown} from 'react-native-material-dropdown';
import CodeScan from '../../components/qrCodeScanner';
import {
  MainView, WhiteBox,
  AmountBox, AmountDropdown, AmountInput,
  RecipientBox, RecipientInput, RecipientIcon,
  SlideSendBox, SliderLeft, SliderRight, SliderText,
  NotesBox, NotesInput,
  BigText, SmallText,

} from "./styles";

class Send extends Component {
  static navigationOptions = {
    headerTitle: 'Send',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  render() {
    return (
      <MainView>
        <WhiteBox>
          <BigText>SEND</BigText>

          <SmallText>Enter amount to send</SmallText>
          <AmountBox>
            <AmountInput placeholder='0.00'/>
            <AmountDropdown>
              {/*<Dropdown value='DIMO'/>*/}
            </AmountDropdown>
          </AmountBox>

          <SmallText>Recipient</SmallText>
          <RecipientBox>
            <RecipientInput placeholder='Phone number or Username'/>
            <RecipientIcon>
              <SvgUri
                width="15"
                height="15"
                source={require("../../assets/icons/qrIcon.svg")}
              />
            </RecipientIcon>
          </RecipientBox>

          <SmallText>Notes (optional)</SmallText>
          <NotesBox>
            <NotesInput multiline={true}/>
          </NotesBox>
          <SlideSendBox>
            <SliderLeft>
              <SliderText>Slide to send</SliderText>
              <SvgUri
                width="15"
                height="15"
                source={require("../../assets/icons/rectangleWhite.svg")}
              />
            </SliderLeft>
            <SliderRight>
              <SvgUri
                width="15"
                height="15"
                source={require("../../assets/icons/sendMoney.svg")}
              />
            </SliderRight>
          </SlideSendBox>
        </WhiteBox>
        {/*<CodeScan/>*/}
      </MainView>
    );
  }
}

export default Send;