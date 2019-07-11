import React, {Component} from 'react';
import {connect} from 'react-redux'
import {CameraKitCameraScreen} from 'react-native-camera-kit'
import {detectionQrCode} from "../../services/send/actions";
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
      () => this.setState({Start_Scanner: false}, () => {
        this.props.navigation.goBack()
      })
    )
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    prevState.QR_Code_Value !== this.state.QR_Code_Value && this.state.QR_Code_Value && this.props.set(this.state.QR_Code_Value)
  }

  render() {
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

const MDTP = {
  set: detectionQrCode
}

export default connect(null, MDTP)(CodeScan)