import React, {Component} from "react"
import {connect} from 'react-redux'
import {sideBarEnable, sideBarDisable} from '../../services/profile/actions'
import {HeaderIconBox, HeaderText, HeaderView} from "./styles"
import SvgUri from "react-native-svg-uri"

class LogoTitle extends Component {
  render() {
    const {enable, disable, status} = this.props
    return (
      <HeaderView>
        <HeaderText>
          Profile
        </HeaderText>
        <HeaderIconBox onPress={status ? disable : enable}>
          <SvgUri
            width="22"
            height='22'
            source={require('../../assets/icons/settings.svg')}
          />
        </HeaderIconBox>
      </HeaderView>
    );
  }
}

const MSTP = state => ({
  status: state.profile.sideBar
})
const MDTP = {
  enable: sideBarEnable,
  disable: sideBarDisable
}

export default connect(MSTP, MDTP)(LogoTitle)