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

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

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
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3878FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
        },
      },
    }
  )
);

class StartPage extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false
  }

  componentDidMount() {
    getLanguages()
      .then(data => setLocalizationSuccess(data[0].split('-')[0]))

    AsyncStorage.getItem('token')
      .then(token => {
        if (token || this.props.token) setTimeout(() => this.setState({isAuthenticated: true}, () => this.setState({isLoading: false})), 1000)
        else setTimeout(() => this.setState({isLoading: false}), 1000)
      })
  }

  render() {
    console.log(this.state.isAuthenticated, 'this.state.isAuthenticated');
    if (this.state.isLoading) {
      return <Text
        style={{textAlign: 'center', fontSize: 48, paddingTop: '20%'}}>
        Loading ...
      </Text>
    } else return this.state.isAuthenticated
      ? <Navigation/>
      : <SignUser/>
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