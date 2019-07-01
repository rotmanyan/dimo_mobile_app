import React, {Component} from 'react';
import {CameraKitCamera} from 'react-native-camera-kit'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class BottomSelectors extends Component {

  componentDidMount() {
    CameraKitCamera.requestDeviceCameraAuthorization(1).then(data => console.log(data, 'datata'));
  }

  render() {
    return (
          <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
              flex: 2,
              backgroundColor: 'white'
            }}
            cameraOptions={{
              flashMode: 'auto',             // on/off/auto(default)
              focusMode: 'on',               // off/on(default)
              ratioOverlay: '1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
              ratioOverlayColor: '#ffffff77' // optional
            }}
            onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional

          />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});