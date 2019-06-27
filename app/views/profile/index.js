import React, {Component} from 'react';
import {ImagePickerIOS} from "react-native";
import {connect} from 'react-redux'
import {getUserProfile, updateUserProfile} from "../../services/profile/operation";
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

  state = {
    userInfo: {
      avatarImage: '',
      userNumber: '',
      userEmail: '',
      userAddress: ''
    }
  }

  componentDidMount() {
    this.props.getUserProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    !this.state.userInfo.avatarImage && this.props.avatar && this.setState({
      userInfo: {
        ...this.state.userInfo,
        avatarImage: this.props.avatar
      }
    })
  }

  submitProfile = () => {
    const {submit} = this.props
    const {userInfo} = this.state
    submit({
      // avatar: userInfo.avatarImage,
      phone: userInfo.userNumber,
      email: userInfo.userEmail,
      address: userInfo.userAddress
    })
  }

  pickImage = () => ImagePickerIOS.openSelectDialog({}, avatarImage => this.setState({
    userInfo: {
      ...this.state.userInfo,
      avatarImage
    }
  }), error => console.log(error, 'error'));

  render() {
    const {userInfo} = this.state

    const {
      userNumber, userEmail,
      userCountry, userName, userAddress,
      userFullName, kycStatus, dailyLimits,
      withdrawLimits, isVerified, type,
    } = this.props

    return (
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
              <ViewUser onPress={this.pickImage}>
                {!!userInfo.avatarImage && <ImageUser source={{uri: userInfo.avatarImage}}/>}
              </ViewUser>
              <TextUser>{userFullName}</TextUser>
              <TariffUserView>
                <TariffUserText>{type} Account</TariffUserText>
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
          <Input
            onChangeText={userEmail => this.setState({userInfo: {...userInfo, userEmail}})}
            value={userInfo.userEmail || userEmail}
            placeholder='Enter your e-mail'
          />
          <Text>
            Mobile number
          </Text>
          <Input
            onChangeText={userNumber => this.setState({userInfo: {...userInfo, userNumber}})}
            value={userInfo.userNumber || userNumber}
            placeholder='Enter your mobile number'
          />
          <Text>
            Country
          </Text>
          <Input
            style={{opacity: .5}}
            editable={false}
            value={userCountry}
            placeholder='Enter your country'
          />
          <Text>
            Address
          </Text>
          <Input
            onChangeText={userAddress => this.setState({userInfo: {...userInfo, userAddress}})}
            value={userInfo.userAddress || userAddress}
            placeholder='Enter your address'
          />
          <Text>
            Username
          </Text>
          <InputWhite defaultValue={userName} placeholder='Enter your username'/>
          <ViewBlueButton>
            <BlueButton onPress={this.submitProfile}>
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
  type: selector.type(state),
})

const MDTP = {
  getUserProfile,
  submit: updateUserProfile
}

export default connect(MSTP, MDTP)(Profile)