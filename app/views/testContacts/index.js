import React, {Component} from 'react';
import {CameraKitCamera} from 'react-native-camera-kit'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class BottomSelectors extends Component {

  state = {
    isOpenCam: false,
    selected: []
  };

  componentDidMount() {
    CameraKitCamera.requestDeviceCameraAuthorization().then(data => console.log(data, 'datata'));
  }

  render() {
    console.log(this.state, 'this.state');
    const {isOpenCam} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> 125 images has been selected </Text>
          </Text>
          <Button onPress={() => this.setState({isOpenCam: !isOpenCam})} title='Select'/>
        </View>
        {isOpenCam ?
          <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
              flex: 1,
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
          : null
        }
      </View>
    );
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