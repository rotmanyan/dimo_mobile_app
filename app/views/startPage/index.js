import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import { getLanguages } from "react-native-i18n";
import {
  setLocalizationRequest,
  setLocalizationSuccess
} from "../../services/i18n/actions";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Kyc from "../kyc";
import Chat from "../chat";
import Wallet from "../wallet";
import Profile from "../profile";
import CodeScan from "../../components/qrCodeScanner";
import Activity from "../activity";
import SignUser from "../signUser";
import PersonalChat from "../../components/personalChat";

const ChatStack = createStackNavigator(
  {
    Chat,
    PersonalChat
  },
  {
    initialRouteName: "Chat"
  }
);

const SendStack = createStackNavigator(
  {
    CodeScan
  },
  {
    initialRouteName: "CodeScan"
  }
);

const WalletStack = createStackNavigator(
  {
    Wallet: Wallet
  },
  {
    initialRouteName: "Wallet"
  }
);

const ActivityStack = createStackNavigator(
  {
    Activity
  },
  {
    initialRouteName: "Activity"
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile,
    Kyc
  },
  {
    initialRouteName: "Profile"
  }
);

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

/*
class LogoTitle extends Component {
  render() {
    return (
      <ViewLogo>
        <Image
          source={require('../../assets/backgrounds/logo.png')}
          style={{width: 30, height: 30}}
        />
      </ViewLogo>
    );
  }
}
*/

// And the app container
const Navigation = createAppContainer(
  createBottomTabNavigator(
    {
      Chat: ChatStack,
      Send: SendStack,
      Wallet: WalletStack,
      Activity: ActivityStack,
      Profile: ProfileStack
    },
    {
      initialRouteName: "Profile",
      tabBarOptions: {
        activeTintColor: "#3878FF",
        inactiveTintColor: "#90a5c2"
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#3878FF"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff"
        }
      }
    }
  )
);

class StartPage extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false
  };

  componentDidMount() {
    getLanguages()
      .then(data => setLocalizationSuccess(data[0].split('-')[0]))
    /*   AsyncStorage.getItem('phone')
         .then(phone => {

         })*/

    AsyncStorage.getItem('token')
      .then(token => {
        if (token || this.props.token) setTimeout(() => this.setState({isAuthenticated: true}, () => this.setState({isLoading: false})), 15)
        else setTimeout(() => this.setState({isLoading: false}), 15)
      })
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator
        animating={this.state.isLoading}
        color='#3878FF'
        size="large"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100
        }}
      />
    } else return this.state.isAuthenticated || this.props.token
      ? <Navigation/>
      : <SignUser/>
  }
}

const MSTP = state => ({
  token: state.profile.token,
  localization: state.localization.language
});

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
};

export default connect(
  MSTP,
  MDTP
)(StartPage);
