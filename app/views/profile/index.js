import React, {Component} from 'react';
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
              <YellowButton>
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
          <Input placeholder='Enter your username'/>
          <Text>
            Mobile number
          </Text>
          <Input placeholder='Enter your username'/>
          <Text>
            Country
          </Text>
          <Input placeholder='Enter your username'/>
          <Text>
            Address
          </Text>
          <Input placeholder='Enter your username'/>
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

export default Profile;