import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {createStackNavigator, createAppContainer} from "react-navigation"
// import {Linking} from "react-native";
import {MainView, SubView, Button, TextOne, TextTwo, QRtext} from './styles';
import {CameraKitCameraScreen} from 'react-native-camera-kit'

class CodeScan extends Component {
  state = {
    QR_Code_Value: '',
    Start_Scanner: true
  }
  openLink_in_browser = () => {
    console.log('aslfhalsjhfkjaskljashjk')
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
          <TextOne>QR Code Scanner</TextOne>
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

const AppNavigator = createStackNavigator({
  Home: {
    screen: CodeScan
  }
});

export default createAppContainer(AppNavigator);