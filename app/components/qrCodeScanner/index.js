import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MainView, SubView, Button, TextOne, TextTwo, QRtext, Linking} from './styles';
import {CameraKitCameraScreen} from 'react-native-camera-kit'

class Camera extends Component {
  state = {
    QR_Code_Value: '',
    Start_Scanner: true
  }

  openLink_in_browser = () => {
    Linking.openURL(this.state.QR_Code_Value);
  }

  onQR_Code_Scan_Done = (QR_Code) => {
    this.setState({QR_Code_Value: QR_Code});
    this.setState({Start_Scanner: false});
  }

  open_QR_Code_Scanner = () => {
    this.setState({QR_Code_Value: ''});
    this.setState({Start_Scanner: true});
  }

  render() {
    if (!this.state.Start_Scanner) {
      const {QR_Code_Value} = this.state
      return (
        <MainView>
          <TextOne>React Native Scan QR Code Example</TextOne>
          <QRtext>{QR_Code_Value ? 'Scanned QR Code: ' + QR_Code_Value : ''}</QRtext>

          {QR_Code_Value.includes("http")
            ?
            <Button onPress={this.openLink_in_browser}>
              <TextTwo>Open Link in default Browser</TextTwo>
            </Button>
            : null
          }

          <Button onPress={this.open_QR_Code_Scanner}>
            <TextTwo>Open QR Scanner</TextTwo>
          </Button>

        </MainView>
      );
    }
    return (
      <SubView>
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          colorForScannerFrame={'black'}
          onReadCode={event => this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)}
        />
      </SubView>
    )
  }
}

const MSTP = state => ({})
const MDTP = {}

export default connect(MSTP, MDTP)(Camera)