import React, {Component} from 'react';
import SvgUri from "react-native-svg-uri";
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Dropdown} from 'react-native-material-dropdown';
import { SlideButton, SlideDirection } from 'react-native-slide-button';
import {
  MainView, WhiteBox,
  AmountBox, AmountDropdown, AmountInput,
  RecipientBox, RecipientInput, RecipientIcon,
  SlideSendBox, SliderLeft, SliderRight, SliderText,
  NotesBox, NotesInput,
  BigText, SmallText,

} from "./styles";

let timerSend;

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

  state = {
    left: 0
  }

  componentDidMount(): void {
    this.changePosition()
  }

  changePosition = () => {
    timerSend = setInterval(() => this.setState({left: this.state.left + 3}), 4)
  }

  componentDidUpdate() {
    this.state.left >= 140 && clearInterval(timerSend)
  }

  render() {
    const {left} = this.state
    console.log(left, 'left');
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: '#e9edf2'}}
      >
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
              <RecipientIcon onPress={() => this.props.navigation.navigate("Code")}>
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
              <SliderLeft style={{left: left}}>
                <SliderText>Slide to send</SliderText>
                <SvgUri
                  width="20"
                  height="10"
                  source={require("../../assets/icons/CombinedShape.svg")}
                />
              </SliderLeft>
              <SliderRight>
                <SvgUri
                  width="33"
                  height="14"
                  source={require("../../assets/icons/sendMoney.svg")}
                />
              </SliderRight>
            </SlideSendBox>
          </WhiteBox>
          {/*<CodeScan/>*/}
        </MainView>
      </KeyboardAwareScrollView>
    );
  }
}

const MSTP = state => ({})
const MDTP = {}

export default connect(MSTP, MDTP)(Send)