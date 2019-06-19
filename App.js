import React from 'react'
import {connect, Provider} from 'react-redux'
// import {setLocalizationRequest, setLocalizationSuccess} from 'app/services/i18n/actions'
import {getLanguages} from "react-native-i18n";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Kyc from "./app/views/kyc";
import store from './app/services/store'
import Chat from "./app/views/chat";
import Profile from "./app/views/profile";
import Camera from "./app/components/camera";
import SignUser from "./app/views/signUser";

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
let Navigation = createAppContainer(
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

class App extends React.Component {
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
      <Provider store={store}>
        {!this.state.value
          ? <Navigation/>
          : <SignUser step={this.state.value} changeStep={this.changeStep}/>
        }
      </Provider>
    )
  }
}

/*
const MSTP = state => ({
  isAuthenticated: state.profile.isAuthenticated,
  localization: state.localization.language
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}*/

export default App