import React, {Component} from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import {connect} from 'react-redux'
import {getLanguages} from "react-native-i18n";
import {setLocalizationRequest, setLocalizationSuccess} from '../../services/i18n/actions'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Kyc from "../kyc";
import Chat from "../chat";
import Profile from "../profile";
import Camera from "../../components/camera";
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
    PersonalChat: PersonalChat
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
    Chat
  },
  {
    initialRouteName: 'Chat'
  }
);

const ProfileStack = createStackNavigator({
    Profile
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
      initialRouteName: 'Chat',
      tabBarOptions: {
        activeTintColor: '#3878FF',
        inactiveTintColor: '#90a5c2',
      },
    }
  )
);

class StartPage extends Component {
  state = {
    value: '',
    token: ''
  }
  changeStep = value => this.setState({value})

  componentDidMount() {
    getLanguages()
      .then(data => setLocalizationSuccess(data[0].split('-')[0]))

    AsyncStorage.getItem('token')
      .then(token => this.setState({token: !!token ? 'success' : null}))
  }

  write = () => this.state.value === 'success'
    ? <SignUser step={this.state.value} changeStep={this.changeStep}/>
    : <Navigation/>

  render() {
    console.log(this.state, 'changeStep changeStep changeStep');
    return this.write()
  }
}

const MSTP = state => ({
  isAuthenticated: state.profile.isAuthenticated,
  localization: state.localization.language,
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}

export default connect(MSTP, MDTP)(StartPage)