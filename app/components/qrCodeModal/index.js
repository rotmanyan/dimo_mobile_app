import React from 'react'
import QRCode from 'react-native-qrcode'
import SvgUri from "react-native-svg-uri"
import {
  MainView, QrCodeWhiteBlock, QrCodeHeader,
  QrCodeTitle, QrCodeBody, QrCodeSvg
} from "./styles";


export class QrCodeModal extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <MainView onPress={this.props.openQrCode}>
        <QrCodeWhiteBlock>
          <QrCodeHeader>
            <QrCodeTitle>your address</QrCodeTitle>
            <QrCodeSvg>
              <SvgUri
                width="20"
                height="20"
                source={require("../../assets/icons/closeIconGray.svg")}
              />
            </QrCodeSvg>
          </QrCodeHeader>
          <QrCodeBody>
            <QRCode
              value={'+380994425999'}
              size={244}
              bgColor='#000'
              fgColor='#fff'
            />
          </QrCodeBody>
        </QrCodeWhiteBlock>
      </MainView>
    );
  }
}