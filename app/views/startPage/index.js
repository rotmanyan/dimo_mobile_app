import React, {Component} from 'react'
import {ActivityIndicator, View, Text, TouchableHighlight} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'
import {getLanguages} from 'react-native-i18n'
import {
  setLocalizationRequest,
  setLocalizationSuccess
} from '../../services/i18n/actions'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerNavigator,
} from 'react-navigation'
import Kyc from '../kyc'
import Chat from '../chat'
import Wallet from '../wallet'
import Profile from '../profile'
import FirstScreen from '../firstScreen'
import Activity from '../activity'
import Send from '../send'
import SignUser from '../signUser'
import PersonalChat from '../../components/personalChat'
import EnterPassword from '../../components/enterPassword'

const ChatStack = createStackNavigator(
  {
    Chat,
    PersonalChat,
  },
  {
    initialRouteName: 'Chat'
  }
)

const SendStack = createStackNavigator(
  {
    Send
  },
  {
    initialRouteName: 'Send'
  }
)

const WalletStack = createStackNavigator(
  {
    Wallet: Wallet,
    First: FirstScreen,
  },
  {
    initialRouteName: 'First'
  }
)

const ActivityStack = createStackNavigator(
  {
    Activity
  },
  {
    initialRouteName: 'Activity'
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile,
    Kyc
  },
  {
    initialRouteName: 'Profile'
  }
)

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

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
    )
  }
}
*/

/*
Drawer: { screen: DrawerNavigator(
      {
        Home: { screen: TabNavigator(
          {
            Red: { screen: RedScreen },
            Blue: { screen: BlueScreen }
          },
          {
            tabBarOptions: {
              labelStyle: {
                fontSize: 20,
                marginBottom: 10
              }
            }
          }
        )},
        Send: { screen: SendStack }
      }
    ) }

 */

class GreenScreen extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Send')}
        >
          <Text style={{color: '#40ff00'}}>Go to Red</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class RedScreen extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Chat')}
        >
          <Text style={{color: '#ff0000'}}>Back to Green</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

// And the app container
const Navigation = createAppContainer(
  createBottomTabNavigator(
    {
      Chat: ChatStack,
      Send: SendStack,
      Wallet: WalletStack,
      Activity: ActivityStack,
      Profile: ProfileStack,
    },
    {
      initialRouteName: 'Profile',
      tabBarOptions: {
        activeTintColor: '#3878FF',
        inactiveTintColor: '#90a5c2'
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3878FF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
        }
      }
    }
  )
)

class StartPage extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false,
    phone: false
  }

  componentDidMount() {
    this.setState({phone: false}, () => {
      getLanguages()
        .then(data => setLocalizationSuccess(data[0].split('-')[0]))

      AsyncStorage.getItem('phone')
        .then(phone => {
          this.setState({phone: !!phone, isLoading: false})
        })
    })
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    !this.state.isAuthenticated && this.props.token && this.setState({isAuthenticated: !!this.props.token})

  }

  render() {
    const {isLoading, phone, isAuthenticated} = this.state
    console.log(this.state, 'phone state')

    if (isLoading) {
      return <ActivityIndicator
        animating={isLoading}
        color='#3878FF'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100
        }}
      />
    } else if (!isLoading) {
      if (phone) {
        if (isAuthenticated) {
          return <Navigation style={{backgroundColor: '#e9edf2'}}/>
        } else return <EnterPassword/>
      } else if (!phone) {
        return <SignUser/>
      }
    }
  }
}

const MSTP = state => ({
  token: state.profile.token,
  localization: state.localization.language
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}

export default connect(
  MSTP,
  MDTP
)(StartPage)
