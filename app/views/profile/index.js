import React, {Component} from 'react';
import {ActivityIndicator} from "react-native";
import SvgUri from 'react-native-svg-uri';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux'
import {getUserProfile, updateUserProfile, updateUserAvatar} from "../../services/profile/operation";
import * as selector from '../../services/selectors'
import SideBar from "../../components/sideBar";
import LogoTitle from '../../components/logoTitle'
import {
  MainView, TopView, BottomView, GlobalView,
  Text, Input, InputWhite, ViewUserOverlay,
  TextLimit, TextNumber, TextNumberRight,
  ImageUser, ViewUser, TextUser, TariffUserView, TariffUserText,
  YellowButtonView, YellowButton, YellowText, YellowButtonText,
  HeadBlock, LeftBlock, CenterBlock,
  RightBlock, YellowBlock, ViewBlueButton,
  BlueButton, BlueButtonText, Confirmed,
  KeyboardAvoidingView,
} from "./styles";

class Profile extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  };

  state = {
    loadImage: false,
    isWriting: '',
    userInfo: {
      avatarImage: '',
      userNumber: '',
      userEmail: '',
      userAddress: '',
      userName: '',
      firstName: '',
      lastName: '',
      confirmed: false
    }
  }

  componentDidMount() {
    this.props.getUserProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    !this.state.userInfo.avatarImage && this.props.avatar && this.setState({
      userInfo: {
        ...this.state.userInfo,
        avatarImage: this.props.avatar,
        userNumber: this.props.userNumber,
        userEmail: this.props.userEmail,
        userAddress: this.props.userAddress,
        userName: this.props.userName,
        firstName: this.props.userFirstName,
        lastName: this.props.userLastName,
      }
    })
  }

  submitProfile = () => {
    const {submit} = this.props
    const {userInfo} = this.state
    submit({
      address: userInfo.userAddress,
      username: userInfo.userName,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName
    })
  }

  pickImage = () => {
    this.setState({loadImage: true}, () => {
      const options = {
        title: 'Select Avatar',
        cameraType: 'front',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
          this.setState({loadImage: false})
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          this.setState({loadImage: false})
        } else {
          const source = 'data:image/jpeg;base64,' + response.data
          const source2 = response.origURL || response.uri

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.props.updateAvatar(source)

          this.setState({
            loadImage: false,
            userInfo: {
              ...this.state.userInfo,
              avatarImage: source2
            }
          })
        }
      })
    })
  }
  writeBoard = () => {
    const {userInfo, loadImage, isWriting} = this.state

    console.log(this.state, ' state');

    const {
      userNumber, userEmail, sideBar,
      userCountry, userName, userAddress,
      userFullName, kycStatus, dailyLimits,
      withdrawLimits, isVerified, type,
      userFirstName, userLastName
    } = this.props
    return <>
      {sideBar && <SideBar/>}
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
              <ViewUserOverlay>
                {!!userInfo.avatarImage &&
                <ImageUser style={loadImage && {opacity: 0.2}} source={{uri: userInfo.avatarImage}}/>}
              </ViewUserOverlay>
              {loadImage && <ActivityIndicator
                animating={loadImage}
                color='#3878FF'
                size="large"
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80
                }}
              />}
              <Confirmed style={!userInfo.confirmed ? {} : {backgroundColor: '#FF0000'}}>
                <SvgUri
                  width="12"
                  height='12'
                  source={require('../../assets/icons/rectangleWhite.svg')}
                />
              </Confirmed>
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
          First Name
        </Text>
        <Input
          onChangeText={userFirstName => this.setState({userInfo: {...userInfo, firstName: userFirstName}})}
          value={userInfo.firstName}
          placeholder='First Name'
          autoCapitalize='none'
        />
        <Text>
          Last Name
        </Text>
        <Input
          onChangeText={userLastName => this.setState({userInfo: {...userInfo, lastName: userLastName}})}
          value={userInfo.lastName}
          placeholder='Last Name'
          autoCapitalize='none'
        />
        <Text>
          E-mail
        </Text>
        <Input
          editable={false}
          onChangeText={userEmail => this.setState({userInfo: {...userInfo, userEmail}})}
          value={userInfo.userEmail || userEmail}
          placeholder='Enter your e-mail'
          autoCapitalize='none'
          style={{opacity: .5}}
        />
        <Text>
          Mobile Number
        </Text>
        <Input
          editable={false}
          style={{opacity: .5}}
          onChangeText={userNumber => this.setState({userInfo: {...userInfo, userNumber}})}
          value={userInfo.userNumber || userNumber}
          autoCapitalize='none'
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
          value={userInfo.userAddress}
          autoCapitalize='none'
          placeholder='Enter your address'
          onFocus={() => this.setState({isWriting: 'address'})}
          onBlur={() => this.setState({isWriting: ''})}
        />
        <Text>
          Username
        </Text>
        <InputWhite
          onChangeText={userName => this.setState({userInfo: {...userInfo, userName}})}
          value={userInfo.userName}
          placeholder='Enter your username'
          autoCapitalize='none'
          onFocus={() => this.setState({isWriting: 'username'})}
          onBlur={() => this.setState({isWriting: ''})}
        />
        <ViewBlueButton>
          <BlueButton onPress={this.submitProfile}>
            <BlueButtonText>
              SUBMIT
            </BlueButtonText>
          </BlueButton>
        </ViewBlueButton>
      </BottomView>
    </>
  }

  render() {
    const {userInfo} = this.state
    const {sideBar} = this.props

    return (
      !userInfo.avatarImage
        ? <ActivityIndicator
          color='#3878FF'
          size="large"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        />
        : sideBar
        ? <GlobalView>
          {this.writeBoard()}
        </GlobalView>
        : <MainView>
          {this.writeBoard()}
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
  userFirstName: selector.userFirstName(state),
  userLastName: selector.userLastName(state),
  kycStatus: selector.kycStatus(state),
  dailyLimits: selector.dailyLimits(state),
  withdrawLimits: selector.withdrawLimits(state),
  isVerified: selector.isVerified(state),
  profile: selector.profile(state),
  type: selector.type(state),
  sideBar: selector.sideBar(state),
})

const MDTP = {
  getUserProfile,
  submit: updateUserProfile,
  updateAvatar: updateUserAvatar,
}

export default connect(MSTP, MDTP)(Profile)