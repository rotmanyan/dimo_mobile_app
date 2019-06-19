import React, {Component} from 'react'
import {
    TextHeadMiddle,
    MainView,
    ButtonPanelView,
    BackButtonView,
    NextButtonView,
    BackButton,
    NextButton,
    NumberMiddle,
    InputForm,
    SendCount,
    ViewHead,
    ViewBottom,
    ImageBg
} from './styles'

class SignUserCode extends Component {
    render() {
        const {changeStep, changeState, viewValue} = this.props
        return (
            <MainView>
                <ViewHead>
                    <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
                </ViewHead>
                <ViewBottom>
                    <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
                </ViewBottom>

                <TextHeadMiddle>We just sent to you a code to number</TextHeadMiddle>

                <NumberMiddle>+255 534 45 33</NumberMiddle>

                <InputForm placeholder="Insert the 6-digit code"/>
                <SendCount>
                    Send again: 59
                </SendCount>
                <ButtonPanelView>
                    <BackButtonView onPress={() => changeState()}>
                        <BackButton>
                            Back
                        </BackButton>
                    </BackButtonView>

                    <NextButtonView onPress={() => changeStep('success')}>
                        <NextButton>
                            Next
                        </NextButton>
                    </NextButtonView>
                </ButtonPanelView>

            </MainView>
        )
    }
}

export default SignUserCode