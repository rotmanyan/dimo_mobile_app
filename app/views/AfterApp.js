import React from "react";
import {connect} from 'react-redux'
import {View} from 'react-native'
import {setLocalizationRequest, setLocalizationSuccess} from '../services/i18n/actions'
import {getLanguages} from "react-native-i18n";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Kyc from "./kyc";
import Chat from "./chat";
import Profile from "./profile";
import Camera from "../components/camera";
import SignUser from "./signUser";

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
    Chat
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
      tabBarOptions: {
        activeTintColor: '#3878FF',
        inactiveTintColor: '#90a5c2',
      },
    }
  )
);

class AfterApp extends Component {
  state = {
    value: ''
  }
  changeStep = value => this.setState({value})

  componentDidMount() {
    getLanguages()
      .then(data => console.log(data[0].split('-')[0]))
    // .then(data => setLocalizationSuccess(data[0].split('-')[0]))
  }

  render() {
    return (
      <View>
        {!this.state.value
          ? <Navigation/>
          : <SignUser step={this.state.value} changeStep={this.changeStep}/>
        }
      </View>
    );
  }
}

const MSTP = state => ({
  isAuthenticated: state.profile.isAuthenticated,
  localization: state.localization.language
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}

export default connect(MSTP, MDTP)(AfterApp)