import React, {Component} from 'react';
import {connect} from 'react-redux'
import {MainView} from './styles'

import SignUser from '../signUser'
import OnBoard from '../onBoard'

class Start extends Component {
  state = {
    step: 'sign'
  }

  changeStep = data => {
    this.setState({step: data})
  }

  render() {
    return (
      <MainView>
        {step === 'sign'
          ? <SignUser step={this.changeStep}/>
          : <OnBoard step={this.changeStep}/>
        }
      </MainView>
    );
  }
}

const MSTP = state => ({
  state
})

const MDTP = {}

export default connect(MSTP, MDTP)(Start)