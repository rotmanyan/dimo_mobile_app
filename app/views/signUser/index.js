import React, {Component} from 'react'
import {connect} from 'react-redux'
import PhoneInput from 'react-native-phone-input'
import SvgUri from 'react-native-svg-uri';
import {signUser} from '../../services/profile/operation'
import SignUserCode from '../signUserCode'
import * as selectorLang from '../../services/selectors'
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

class SignUser extends Component {
    state = {
        value: '+255721234566',
        viewValue: '',
        storage: '',
        photos: [],
        step: 'one'
    }

    writeInput = () => {
        return (
            <PhoneInput
                initialCountry='tz'
                ref={input => {
                    if (input !== null) {
                        let a = this.state.viewValue.split(' ').join('')
                        // input.focus()

                        if (a.length >= 13) {
                            input.blur()
                        }
                    }
                }}
                autoFormat={true}
                flagStyle={{borderRadius: 12.5, width: 25, height: 25}}
                confirmText='Confirm'
                cancelText='Cancel'
                // onChangePhoneNumber={value => this.setState({value})}
                onChangePhoneNumber={viewValue => this.setState({viewValue})}
            />
        )
    }

    writeBody = () => {
        const {translate, sign} = this.props

        return (
            <>
                <ViewHead>
                    <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
                </ViewHead>
                <ViewBottom>
                    <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
                </ViewBottom>
                <ViewLogo>
                    <ImageLogo source={require('../../assets/backgrounds/logo.png')}/>
                </ViewLogo>
                <TextHeadMiddle>
                    {translate.please_enter_your_number}
                </TextHeadMiddle>

                <PhoneView>
                    {this.writeInput()}
                </PhoneView>

                <TextHeadMiddle>
                    {translate.or_login_via_social_networks}
                </TextHeadMiddle>
                <ViewSvg>
                    <SvgUri
                        width="22"
                        height='22'
                        source={require('../../assets/icons/Google.svg')}
                        style={svgStyle}
                    />
                    <SvgUri
                        width="22"
                        height='22'
                        source={require('../../assets/icons/facebook.svg')}
                        style={svgStyle}
                    />
                    <SvgUri
                        width="22"
                        height='22'
                        source={require('../../assets/icons/Twitter.svg')}
                    />
                </ViewSvg>
                {/*

          <SvgUri
            width="22"
            height='22'
            source={require('../../../assets/icons/Chat.svg')}
          />
          <SvgUri
            width="22"
            height='22'
            source={require('../../../assets/icons/Chat.svg')}
          />
          <SvgUri
            width="22"
            height='22'
            source={require('../../../assets/icons/Chat.svg')}
          />
  */}

                <TextHeadMiddle>
                    {translate.by_clicking_next}
                </TextHeadMiddle>
                <ButtonView>
                    <StyledButton
                        title={translate.next}
                        color='#fff'
                        onPress={() => {
                            console.log(this.state.value.trim());
                            sign(this.state.value.trim())
                            this.setState({step: 'two'})
                        }}
                    />
                </ButtonView>
            </>
        )
    }

    render() {
        const {translate, sign, changeStep} = this.props
        const {step, viewValue} = this.state
        return step === 'one'
            ? <MainView>{this.writeBody()}</MainView>
            : step === 'two'
                ? <SignUserCode viewValue={viewValue} changeState={() => this.setState({step: 'one'})}
                                changeStep={changeStep}/>
                : null
    }
}

const MSTP = state => ({
    translate: selectorLang.translate(state),
})
const MDTP = {
    sign: signUser,
}

export default connect(MSTP, MDTP)(SignUser)