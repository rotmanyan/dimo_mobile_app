import React, {Component} from 'react';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {MainView, ViewWait, TextWait} from './styles'

import SignUser from '../signUser'
// import OnBoard from '../onBoard'
import Kyc from '../kyc'
import {setLocalizationRequest, setLocalizationSuccess} from "../../services/i18n/actions";
import {getLanguages} from "react-native-i18n";
import OnBoard from "../onBoard";

class Start extends Component {
  state = {
    token: ''
  }

  componentDidMount() {

    console.log(this.props, 'this properties');
    const {setLocalizationRequest, setLocalizationSuccess} = this.props

    setLocalizationRequest()
    getLanguages()
      .then(data => setLocalizationSuccess(data[0].split('-')[0]))

    AsyncStorage.getItem('token')
      .then(token => this.setState({token: !!token ? 'success' : null}))
  }

  changeStep = data => this.setState({step: data})

  write = () => {
    if (!!this.props.localization)
      switch (this.state.token) {
        case 'success':
          return <OnBoard step={this.state.step} changeStep={this.changeStep}/>
        case 'null':
        default:
          return <SignUser step={this.state.step} changeStep={this.changeStep}/>
      } else return <ViewWait>
      <TextWait>
        Loading...
      </TextWait>
    </ViewWait>
  }

  render() {
    return <MainView>
      {this.write()}
    </MainView>
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

export default connect(MSTP, MDTP)(Start)