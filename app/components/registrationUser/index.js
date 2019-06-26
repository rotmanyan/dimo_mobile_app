import React, {Component} from 'react';
import {connect} from 'react-redux'
import {signUserUp} from "../../services/profile/operation";
import {
  MainView,
  ViewHead,
  ViewBottom,
  ImageBg,
  ButtonPanelView,
  NextButtonView,
  NextButton,
  InputForm,
  BodyScrollView,
  BodyView,
  InputBoxView,
  PlanView,
  SelectedPlan,
  NoSelectedPlan,
  NoSelectedPlanText,
  SelectedPlanText,
  TextH1
} from './styles'

class RegistrationUser extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    selectors: [
      {
        tariff: 'personal',
        selected: true
      },
      {
        tariff: 'business',
        selected: false
      }],
    selectedPlan: 'personal',
    passwordType: true,
    confirmPasswordType: true,
  }

  changeState = () => {
    const {selectors, selectedPlan} = this.state

    this.setState({
      selectedPlan: selectedPlan === 'personal' ? 'business' : 'personal',
      selectors: [{
        tariff: 'personal',
        selected: !selectors[0].selected
      },
        {
          tariff: 'business',
          selected: !selectors[1].selected
        }]
    })
  }

  next = () => {
    const {next} = this.props
    const {
      email, password, confirmPassword, selectedPlan
    } = this.state
    password === confirmPassword && next({
      email,
      password,
      tariff: selectedPlan
    })
  }

  render() {
    const {
      email, password, confirmPassword, selectors,
      passwordType, confirmPasswordType
    } = this.state

    return (
      <MainView>
        <TextH1>
          Sign Up
        </TextH1>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <BodyScrollView>
          <BodyView>
            <InputBoxView>
              <InputForm
                value={email}
                onChangeText={email => this.setState({email})}
                placeholder="E-mail"
                style={{textTransform: 'lowercase'}}
                textContentType={'emailAddress'}
              />

              <InputForm
                onChangeText={password => this.setState({password})}
                placeholder="Password"
                value={password}
                secureTextEntry={passwordType}
              />
              <InputForm
                onChangeText={confirmPassword => this.setState({confirmPassword})}
                placeholder="Re-enter password"
                value={confirmPassword}
                secureTextEntry={confirmPasswordType}
              />
            </InputBoxView>
            <PlanView>
              {selectors.map((el, key) => {
                if (el.selected) return (
                  <SelectedPlan key={key} onPress={this.changeState}>
                    <SelectedPlanText>
                      {el.tariff}
                    </SelectedPlanText>
                  </SelectedPlan>
                )
                else return (
                  <NoSelectedPlan key={key} onPress={this.changeState}>
                    <NoSelectedPlanText>
                      {el.tariff}
                    </NoSelectedPlanText>
                  </NoSelectedPlan>
                )
              })}
            </PlanView>
            <ButtonPanelView>
              <NextButtonView onPress={this.next}>
                <NextButton>
                  Next
                </NextButton>
              </NextButtonView>
            </ButtonPanelView>
          </BodyView>
        </BodyScrollView>
      </MainView>
    )
  }
}

const MDTP = {
  next: signUserUp
}

export default connect(null, MDTP)(RegistrationUser)