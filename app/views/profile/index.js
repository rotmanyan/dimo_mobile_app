import React, {Component} from 'react';
import {ImagePickerIOS, ActivityIndicator} from "react-native";
import SvgUri from 'react-native-svg-uri';
import ImagePicker from 'react-native-image-picker';
import RNImgToBase64 from 'react-native-image-base64';
import {connect} from 'react-redux'
import {getUserProfile, updateUserProfile, updateUserAvatar} from "../../services/profile/operation";
import * as selector from '../../services/selectors'
import {
  MainView, TopView, BottomView,
  Text, Input, InputWhite, ViewUserOverlay,
  TextLimit, TextNumber, TextNumberRight,
  ImageUser, ViewUser, TextUser, TariffUserView, TariffUserText,
  YellowButtonView, YellowButton, YellowText, YellowButtonText,
  HeadBlock, LeftBlock, CenterBlock,
  RightBlock, YellowBlock, ViewBlueButton,
  BlueButton, BlueButtonText, Confirmed
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
    loadImage: false,
    userInfo: {
      // avatarImage: 'assets-library://asset/asset.HEIC?id=CC95F08C-88C3-4012-9D6D-64A413D254B3&ext=HEIC',
      avatarImage: '',
      userNumber: '',
      userEmail: '',
      userAddress: '',
      userName: '',
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
      }
    })
  }

  submitProfile = () => {
    const {submit} = this.props
    const {userInfo} = this.state
    submit({
      address: userInfo.userAddress,
      username: userInfo.userName
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
          const source2 = response.origURL

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

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

  render() {
    const {userInfo, loadImage} = this.state

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
            E-mail
          </Text>
          <Input
            editable={false}
            style={{opacity: .5}}
            onChangeText={userEmail => this.setState({userInfo: {...userInfo, userEmail}})}
            value={userInfo.userEmail || userEmail}
            placeholder='Enter your e-mail'
            autoCapitalize='none'
          />
          <Text>
            Mobile number
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
          />
          <Text>
            Username
          </Text>
          <InputWhite
            onChangeText={userName => this.setState({userInfo: {...userInfo, userName}})}
            value={userInfo.userName}
            placeholder='Enter your username'
            autoCapitalize='none'
          />
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
  submit: updateUserProfile,
  updateAvatar: updateUserAvatar
}

export default connect(MSTP, MDTP)(Profile)