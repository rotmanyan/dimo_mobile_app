import React from 'react'
import SvgUri from 'react-native-svg-uri'
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Chat from '../chat'
import PersonalChat from '../../components/personalChat'
import Send from '../send'
import CodeScan from '../../components/qrCodeScanner'
import Wallet from '../wallet'
import FirstScreen from '../firstScreen'
import Activity from '../activity'
import Profile from '../profile'
import Kyc from '../kyc'

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
    Send,
    Code: CodeScan,
  },
  {
    initialRouteName: 'Send'
  }
)

SendStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  let headerVisible = true

  if (navigation.state.index > 0) {
    tabBarVisible = false
    headerVisible = false
  }
  if (navigation.state.index === 0) {
    headerVisible = false
  }

  return {
    tabBarVisible,
    headerVisible
  }
}

const WalletStack = createStackNavigator(
  {
    Wallet: Wallet,
    First: FirstScreen,
  },
  {
    initialRouteName: 'Wallet'
  }
)

WalletStack.navigationOptions = ({navigation}) => {
  let headerVisible = true

  if (navigation.state.index === 0) {
    headerVisible = false
  }

  return {
    headerVisible
  }
}

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

// And the app container
export const Navigation = createAppContainer(
  createBottomTabNavigator(
    {
      Chat: {
        screen: ChatStack,
        navigationOptions: {
          tabBarLabel: 'Chat',
          tabBarIcon: ({tintColor}) => (
            <SvgUri
              fill={tintColor}
              width='24'
              height='24'
              source={require('../../assets/icons/Chat.svg')}
            />
          )
        }
      },
      Send: {
        screen: SendStack,
        navigationOptions: {
          tabBarLabel: 'Send',
          tabBarIcon: ({tintColor}) => (
            <SvgUri
              fill={tintColor}
              width='24'
              height='24'
              source={require('../../assets/icons/Telegram.svg')}
            />
          )
        }
      },
      Wallet: {
        screen: WalletStack,
        navigationOptions: {
          tabBarLabel: 'Wallet',
          tabBarIcon: ({tintColor}) => (
            <SvgUri
              fill={tintColor}
              width='24'
              height='24'
              source={require('../../assets/icons/Wallet.svg')}
            />
          )
        }
      },
      Activity: {
        screen: ActivityStack,
        navigationOptions: {
          tabBarLabel: 'Activity',
          tabBarIcon: ({tintColor}) => (
            <SvgUri
              fill={tintColor}
              width='24'
              height='24'
              source={require('../../assets/icons/Activity.svg')}
            />
          )
        }
      },
      Profile: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({tintColor}) => (
            <SvgUri
              fill={tintColor}
              width='24'
              height='24'
              source={require('../../assets/icons/Profile.svg')}
            />
          )
        }
      },
    },
    {
      initialRouteName: 'Wallet',
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