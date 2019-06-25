import React, {Component} from 'react';
import {
  MainView,
  HeadView,
  BodyView,
  StepView, StepNumberView, StepNumberText, StepText,
  activeText, activeStep,

} from "./styles";
import ProofIdentify from "./proofIdentify";
import Selfie from "./selfie";
import Status from "./status";

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
    step: 1
  }

  render() {
    const step = this.state.step
    return (
      <MainView>
        <HeadView>
          <StepView>
            <StepNumberView style={step === 1 || step === 2 || step === 3 ? activeStep : {}}>
              <StepNumberText style={step === 1 || step === 2 || step === 3 ? activeText : {}}>
                1
              </StepNumberText>
            </StepNumberView>
            <StepText style={step === 1 || step === 2 || step === 3 ? activeText : {}}>
              Proof of identify
            </StepText>
          </StepView>
          <StepView>
            <StepNumberView style={step === 2 || step === 3 ? activeStep : {}}>
              <StepNumberText style={step === 2 || step === 3 ? activeText : {}}>
                2
              </StepNumberText>
            </StepNumberView>
            <StepText style={step === 2 || step === 3 ? activeText : {}}>
              Selfie
            </StepText>
          </StepView>
          <StepView>
            <StepNumberView style={step === 3 ? activeStep : {}}>
              <StepNumberText style={step === 3 ? activeText : {}}>
                3
              </StepNumberText>
            </StepNumberView>
            <StepText style={step === 3 ? activeText : {}}>
              Status
            </StepText>
          </StepView>
        </HeadView>
        <BodyView>
          {step === 1
            ? <ProofIdentify changeStep={() => this.setState({step: this.state.step + 1})}/>
            : step === 2
              ? <Selfie send={() => this.props.navigation.navigate('Profile')}
                        changeStep={() => this.setState({step: this.state.step + 1})}/>
              : <Status send={() => this.props.navigation.navigate('Profile')}/>
          }
        </BodyView>
      </MainView>
    )
  }
}

const MSTP = state => ({})
const MDTP = {}

export default Kyc