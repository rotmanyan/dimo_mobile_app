import React, {Component} from 'react'
import SvgUri from "react-native-svg-uri"
import {
  MainView, Top, Bottom,
  TitleBox, Title, SubTitle,
  BalanceBox, CurrentAccount, Balance, Currency,
  QrCodeBox,
} from "./styles"

class WalletHead extends Component {
  state = {
    tabs: ['topup', 'redeem', 'exchange', 'charts'],
    selectedTab: 'topup',
  }

  render() {
    const {walletNumber, balance, currency, openQrCode} = this.props
    const {tabs, selectedTab} = this.state
    return (
      <MainView>
        <Top>
          <TitleBox>
            <Title>balance</Title>
            <SubTitle>wallet #{walletNumber}</SubTitle>
          </TitleBox>
          <BalanceBox>
            <CurrentAccount>
              <Balance>{balance}</Balance>
              <Currency>{currency}</Currency>
            </CurrentAccount>
            <QrCodeBox onPress={openQrCode}>
              <SvgUri
                width="24"
                fill='#fff'
                height="24"
                source={require("../../assets/icons/qrIcon.svg")}
              />
            </QrCodeBox>
          </BalanceBox>
        </Top>

        <Bottom>
          {}
        </Bottom>
      </MainView>
    );
  }
}

export default WalletHead;