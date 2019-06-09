import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Linking, StyleSheet} from 'react-native';
// import {MainView, Button, Text, Image, CamStyle} from './styles'
import {CameraKitCamera, CameraKitCameraScreen} from 'react-native-camera-kit'

class Camera extends Component {
  state = {
    status: false,
    url: '',
    QR_Code_Value: '',
    Start_Scanner: false
  }

  componentDidMount() {

  }

  capture = () => {
    const {url} = this.state
    !!url
      ? this.setState({url: ''})
      : this.camera.capture(true).then(data => this.setState({url: data.uri}))
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

      return (
        <View style={styles.MainContainer}>

          <Text style={{fontSize: 22, textAlign: 'center'}}>React Native Scan QR Code Example</Text>

          <Text style={styles.QR_text}>
            {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
          </Text>

          {this.state.QR_Code_Value.includes("http") ?
            <TouchableOpacity
              onPress={this.openLink_in_browser}
              style={styles.button}>
              <Text style={{color: '#FFF', fontSize: 14}}>Open Link in default Browser</Text>
            </TouchableOpacity> : null
          }

          <TouchableOpacity
            onPress={this.open_QR_Code_Scanner}
            style={styles.button}>
            <Text style={{color: '#FFF', fontSize: 14}}>
              Open QR Scanner
            </Text>
          </TouchableOpacity>

        </View>
      );
    }
    return (
      <View style={{flex: 1}}>

        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          colorForScannerFrame={'black'}
          onReadCode={event =>
            this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
          }
        />

      </View>
    );
  }

  /*  render() {
      const {url} = this.state
      return (
        <MainView>
          <Button onPress={this.capture}>
            <Text>
              Capture
            </Text>
          </Button>
          {!!url
            ? <Image source={{uri: url}}/>
            : <CameraKitCamera
              ref={cam => this.camera = cam}
              style={CamStyle}
              cameraOptions={{
                focusMode: 'on',               // off/on(default)
                ratioOverlayColor: 'transparent' // optional
              }}
              onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional

            />}
        </MainView>
      );
    }*/
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});

export default Camera