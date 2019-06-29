import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import ProofIdentify from "./proofIdentify";
import Selfie from "./selfie";
import Status from "./status";
import {
  MainView,
  HeadView,
  BodyView, StepLineOne, StepLineTwo,
  StepView, StepNumberView, StepNumberText, StepText,
  activeText, activeStep, activeLine,
} from "./styles";

class Kyc extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
    step: 2
  }

  stepView = number => {
    const {step} = this.state
    const arrSteps = [' Proof of identify', 'Selfie', 'Status']

    const styleText = step >= number ? activeText : {}
    const styleSvg = step >= number ? {backgroundColor: '#3878ff', borderColor: '#3878ff'} : {}

    return (
      <StepView>
        <StepNumberView style={styleSvg}>
          <SvgUri
            width="15"
            height='15'
            source={require('../../assets/icons/rectangleWhite.svg')}
          />
        </StepNumberView>
        <StepText style={styleText}>
          {arrSteps[number - 1]}
        </StepText>
      </StepView>
    )
  }

  stepViewSec = number => {
    const {step} = this.state
    const arrSteps = [' Proof of identify', 'Selfie', 'Status']

    const styleStep = step >= number ? activeStep : {}
    const styleText = step >= number ? activeText : {}

    return (
      <StepView>
        <StepNumberView style={styleStep}>
          <StepNumberText style={styleText}>
            {number}
          </StepNumberText>
        </StepNumberView>
        <StepText style={styleText}>
          {arrSteps[number - 1]}
        </StepText>
      </StepView>
    )
  }

  render() {
    const step = this.state.step
    return (
      <MainView>
        <HeadView>
          {step > 1 ? this.stepView(1) : this.stepViewSec(1)}
          <StepLineOne/>
          {step > 2 ? this.stepView(2) : this.stepViewSec(2)}
          <StepLineTwo style={step === 3 ? activeLine : {}}/>
          {this.stepViewSec(3)}
        </HeadView>
        <BodyView>
          {step === 1 && <ProofIdentify changeStep={() => this.setState({step: this.state.step + 1})}/>}
          {step === 2 && <Selfie
            send={() => this.props.navigation.navigate('Profile')}
            changeStep={() => this.setState({step: this.state.step + 1})}
          />
          }
          {step === 3 && <Status
            changeStep={() => this.setState({step: 1})}
            send={() => this.props.navigation.navigate('Profile')}
          />}
        </BodyView>
      </MainView>
    )
  }
}

const MSTP = state => ({})
const MDTP = {}

export default Kyc