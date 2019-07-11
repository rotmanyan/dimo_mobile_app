import React, {Component} from 'react';
import {CameraKitCameraScreen} from 'react-native-camera-kit'
import {connect} from 'react-redux';
import {
  MainView, SubView, Button, QRView,
  TextOne, TextTwo, QRtext
} from './styles';

class CodeScan extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    QR_Code_Value: '',
    Start_Scanner: true
  }

  onQR_Code_Scan_Done = (QR_Code) => {
    this.setState({QR_Code_Value: QR_Code},
      () => this.setState({Start_Scanner: false})
    )
  }

  render() {
    if (!this.state.Start_Scanner) {
      const {QR_Code_Value} = this.state
      return (
        <MainView>
          <QRtext>
            {QR_Code_Value}
          </QRtext>
        </MainView>
      );
    }
    return (
      <SubView>
        <QRView>
          <CameraKitCameraScreen
            scanBarcode={true}
            showFrame={true}
            colorForScannerFrame={'#3878FF'}
            onReadCode={event => this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)}
          />
        </QRView>
      </SubView>
    )
  }
}

const MSTP = state => ({})
const MDTP = {}

export default connect(MSTP, MDTP)(CodeScan)