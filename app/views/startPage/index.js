import React, {Component} from 'react';
import {Text} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {connect} from 'react-redux'
import {getLanguages} from "react-native-i18n";
import {setLocalizationRequest, setLocalizationSuccess} from '../../services/i18n/actions'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Kyc from "../kyc";
import Chat from "../chat";
import Profile from "../profile";
import Camera from "../../components/camera";
import Activity from "../activity";
import SignUser from "../signUser";
import PersonalChat from "../../components/personalChat";

// Create our stack navigator
let HomeStack = createStackNavigator({
    Kyc: Kyc,
    Chat: Chat,
    Profile: Profile
  },
  {
    initialRouteName: 'Kyc',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const ChatStack = createStackNavigator({
    Chat,
    PersonalChat
  },
  {
    initialRouteName: 'Chat'
  }
)

const SendStack = createStackNavigator({
    Camera
  },
  {
    initialRouteName: 'Camera'
  }
);

const WalletStack = createStackNavigator({
    Wallet: Chat
  },
  {
    initialRouteName: 'Wallet'
  }
);

const ActivityStack = createStackNavigator({
    Activity
  },
  {
    initialRouteName: 'Activity'
  }
);

const ProfileStack = createStackNavigator({
    Profile,
    Kyc
  },
  {
    initialRouteName: 'Profile'
  }
);

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
      initialRouteName: 'Profile',
      tabBarOptions: {
        activeTintColor: '#3878FF',
        inactiveTintColor: '#90a5c2',
      },
    }
  )
);

class StartPage extends Component {
  state = {
    isAuthenticated: false
  }

  componentDidMount() {
    getLanguages()
      .then(data => setLocalizationSuccess(data[0].split('-')[0]))

    AsyncStorage.getItem('token')
      .then(token => {
        if (token || this.props.token) this.setState({isAuthenticated: true})
      })
  }

  writeBoard = () => {
    if (1) return <Navigation/>
    // if (1) return <RootNavigator/>
    if (0) return <SignUser/>
  }

  render() {
    console.log(this.state, 'state');
    return this.writeBoard()
  }
}

const MSTP = state => ({
  token: state.profile.token,
  localization: state.localization.language,
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}

export default connect(MSTP, MDTP)(StartPage)