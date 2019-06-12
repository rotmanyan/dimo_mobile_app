import React, {Component} from 'react';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {MainView, ViewWait, TextWait} from './styles'

import SignUser from '../signUser'
import OnBoard from '../onBoard'
import {setLocalization} from "../../services/i18n/actions";
import {getLanguages} from "react-native-i18n";

class Start extends Component {
  state = {
    token: 'wait',
    step: ''
  }

  componentDidMount() {
    const {set} = this.props

    getLanguages()
      .then(data => set(data[0].split('-')[0]))

    AsyncStorage.getItem('token')
      .then(token => this.setState({token: !!token ? 'success' : null}))
  }

  changeStep = data => this.setState({step: data})

  write = () => {
    if (!this.props.isAuthenticated)
      switch (this.state.token) {
        case 'wait':
          return <ViewWait>
            <TextWait>
              Loading...
            </TextWait>
          </ViewWait>
        case 'success':
          return <OnBoard step={this.state.step} changeStep={this.changeStep}/>
        case 'null':
        default:
          return <SignUser step={this.state.step} changeStep={this.changeStep}/>
      }
    return <SignUser changeStep={this.changeStep}/>
  }

  render() {
    return <MainView>
      {this.write()}
    </MainView>
  }
}

const MSTP = state => ({
  isAuthenticated: state.profile.isAuthenticated
})

const MDTP = {
  set: setLocalization
}

export default connect(MSTP, MDTP)(Start)