import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUserProfile} from "../../services/profile/operation";
import * as selector from '../../services/selectors'
import {
  MainView,
  TopView,
  BottomView,
  Text,
  Input,
  InputWhite,
  TextLimit,
  TextNumber,
  TextNumberRight,
  ImageUser, ViewUser, TextUser, TariffUserView, TariffUserText,
  YellowButtonView, YellowButton, YellowText, YellowButtonText,
  HeadBlock,
  LeftBlock,
  CenterBlock,
  RightBlock,
  YellowBlock,
  ViewBlueButton,
  BlueButton,
  BlueButtonText
} from "./styles";

class Profile extends Component {
  static navigationOptions = {
    headerTitle: 'Profile',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  };

  componentDidMount() {
    this.props.getUserProfile()
  }


  render() {
    const {
      avatar, userNumber, userEmail,
      userCountry, userName, userAddress,
      userFullName, kycStatus, dailyLimits,
      withdrawLimits, isVerified
    } = this.props
    return (
      !!avatar &&
      <MainView>
        <TopView>
          {!isVerified && <YellowBlock>
            <YellowText>
              Account wit limited abilities
            </YellowText>
            <YellowButtonView>
              <YellowButton onPress={() => this.props.navigation.navigate('Kyc')}>
                <YellowButtonText>
                  Complete KYC
                </YellowButtonText>
              </YellowButton>
            </YellowButtonView>
          </YellowBlock>}
          <HeadBlock>
            <LeftBlock>
              <TextLimit>
                Daily Limits:
              </TextLimit>
              <TextNumber>
                {dailyLimits}
              </TextNumber>
            </LeftBlock>

            <CenterBlock>
              <ViewUser>
                <ImageUser source={{uri: avatar}}/>
              </ViewUser>
              <TextUser>John Doe</TextUser>
              <TariffUserView>
                <TariffUserText>Business Account</TariffUserText>
              </TariffUserView>
            </CenterBlock>

            <RightBlock>
              <TextLimit>
                Withdraw Limit:
              </TextLimit>
              <TextNumberRight>
                {withdrawLimits}
              </TextNumberRight>
            </RightBlock>
          </HeadBlock>
        </TopView>

        <BottomView>
          <Text>
            E-mail
          </Text>
          <Input defaultValue={userEmail} placeholder='Enter your e-mail'/>
          <Text>
            Mobile number
          </Text>
          <Input defaultValue={userNumber} placeholder='Enter your mobile number'/>
          <Text>
            Country
          </Text>
          <Input defaultValue={userCountry} placeholder='Enter your country'/>
          <Text>
            Address
          </Text>
          <Input placeholder='Enter your address'/>
          <Text>
            Username
          </Text>
          <InputWhite placeholder='Enter your username'/>
          <ViewBlueButton>
            <BlueButton>
              <BlueButtonText>
                SUBMIT
              </BlueButtonText>
            </BlueButton>
          </ViewBlueButton>
        </BottomView>
      </MainView>
    )
  }
}

const MSTP = state => ({
  avatar: selector.avatar(state),
  userNumber: selector.userNumber(state),
  userEmail: selector.userEmail(state),
  userCountry: selector.userCountry(state),
  userName: selector.userName(state),
  userAddress: selector.userAddress(state),
  userFullName: selector.userFullName(state),
  kycStatus: selector.kycStatus(state),
  dailyLimits: selector.dailyLimits(state),
  withdrawLimits: selector.withdrawLimits(state),
  isVerified: selector.isVerified(state),
  profile: selector.profile(state),
})

const MDTP = {
  getUserProfile
}

export default connect(MSTP, MDTP)(Profile)