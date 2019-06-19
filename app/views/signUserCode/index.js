import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  TextHeadMiddle,
  StyledButton,
  ButtonView,
  PhoneView,
  MainView,
  ViewHead,
  ViewBottom,
  ImageBg,
  ViewLogo,
  ImageLogo,
  ViewSvg,
  ButtonSvg,
  svgStyle
} from './styles'

class SignUserCode extends Component {
  render() {
    const {changeStep, changeState, viewValue} = this.props
    return (
      <MainView>
        <TextHeadMiddle>
          {viewValue}
        </TextHeadMiddle>
        <ButtonView>
          <StyledButton
            title='Back'
            color='#fff'
            onPress={() => changeState()}
          />
          <StyledButton
            title='Next'
            color='#fff'
            onPress={() => changeStep('success')}
          />
        </ButtonView>
      </MainView>
    )
  }
}

export default SignUserCode