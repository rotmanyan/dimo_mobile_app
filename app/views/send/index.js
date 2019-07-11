import React, {Component} from 'react';
import SvgUri from "react-native-svg-uri";
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Dropdown} from 'react-native-material-dropdown';
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
    left: 0,
    number: ''
  }

  changePosition = () => {
    timerSend = setInterval(() => this.setState({left: this.state.left + 3}), 4)
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    this.state.left >= 140 && clearInterval(timerSend)
    prevProps.code !== this.props.code && this.setState({number: this.props.code})
  }

  render() {
    const {left, number} = this.state
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
              <RecipientInput
                onChangeText={number => this.setState({number})}
                value={number}
                autoCapitalize='none'
                placeholder='Phone number or Username'
              />
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
              <SliderLeft onPress={this.changePosition} style={{left: left}}>
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
        </MainView>
      </KeyboardAwareScrollView>
    );
  }
}

const MSTP = state => ({
  code: state.send.code
})

const MDTP = {}

export default connect(MSTP, MDTP)(Send)