import React, {Component} from 'react'
import SvgUri from "react-native-svg-uri"
import {connect} from 'react-redux'
import {QrCodeModal} from "../../components/qrCodeModal"
import {
  MainView, QrCodeIcon,
} from "./styles"
import WalletHead from "../../components/walletHead/WalletHead";
import WalletBody from "../../components/walletBody/WalletBody";

class Wallet extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    isOpenQrCode: false
  }

  openQrCode = () => this.setState({isOpenQrCode: !this.state.isOpenQrCode})

  render() {
    const {isOpenQrCode} = this.state
    const {number} = this.props
    return (
      <>
        <MainView>
          <WalletHead
            openQrCode={this.openQrCode}
            walletNumber={1}
            balance={216.0124}
            currency={'nDIMO'}
          />
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