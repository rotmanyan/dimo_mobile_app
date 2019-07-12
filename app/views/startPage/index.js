import React, {Component} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {getLanguages} from 'react-native-i18n'
import {connect} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import {
  setLocalizationRequest,
  setLocalizationSuccess
} from '../../services/i18n/actions'
import {Navigation} from "../navigation";
import SignUser from '../signUser'
import EnterPassword from '../../components/enterPassword'

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

  componentDidUpdate(): void {
    const {isAuthenticated, phone} = this.state
    const {token, loginStatus} = this.props

    !isAuthenticated && token && this.setState({isAuthenticated: !!token})
    loginStatus && !phone && this.setState({phone: loginStatus})
  }

  /*  render() {
      const {isLoading, phone, isAuthenticated} = this.state
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
    }*/

  render() {
    return <Navigation/>
  }
}

const MSTP = state => ({
  token: state.profile.token,
  localization: state.localization.language,
  loginStatus: state.profile.loginStatus,
  store: state
})

const MDTP = {
  setLocalizationRequest,
  setLocalizationSuccess
}

export default connect(MSTP, MDTP)(StartPage)
