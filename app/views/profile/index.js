import React, {Component} from 'react';
import {connect} from 'react-redux'
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

  render() {
    return (
      <MainView>
        <TopView>
          <YellowBlock>
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
          </YellowBlock>
          <HeadBlock>
            <LeftBlock>
              <TextLimit>
                Daily Limits:
              </TextLimit>
              <TextNumber>
                10.000
              </TextNumber>
            </LeftBlock>

            <CenterBlock>
              <ViewUser>
                <ImageUser source={require('../../assets/images/ignat.png')}/>
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
                10.000.000
              </TextNumberRight>
            </RightBlock>
          </HeadBlock>


        </TopView>
        <BottomView>
          <Text>
            E-mail
          </Text>
          <Input placeholder='Enter your e-mail'/>
          <Text>
            Mobile number
          </Text>
          <Input placeholder='Enter your mobile number'/>
          <Text>
            Country
          </Text>
          <Input placeholder='Enter your country'/>
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
    );
  }
}

const MSTP = state = ({})

const MDTP = {}

export default connect(MSTP, MDTP)(Profile)