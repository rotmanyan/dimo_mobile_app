import React, {Component} from 'react'
import SvgUri from "react-native-svg-uri"
import {connect} from 'react-redux'
import {QrCodeModal} from "../../components/qrCodeModal"
import {
  MainView, QrCodeIcon,
} from "./styles"

class Wallet extends Component {
  state = {
    isOpenQrCode: true
  }

  openQrCode = () => this.setState({isOpenQrCode: !this.state.isOpenQrCode})

  render() {
    const {isOpenQrCode} = this.state
    const {number} = this.props
    console.log(this.state, 'state wallet');
    return (
      <>
        <MainView>
          <QrCodeIcon onPress={this.openQrCode}>
            <SvgUri
              width="15"
              height="15"
              source={require("../../assets/icons/qrIcon.svg")}
            />
          </QrCodeIcon>
        </MainView>
        {isOpenQrCode && <QrCodeModal number={number} openQrCode={this.openQrCode}/>}
      </>
    );
  }
}

const MSTP = state => ({
  balance: state.wallet.balance,
  number: state.profile.userNumber
})
const MDTP = {}
export default connect(MSTP, MDTP)(Wallet)