import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'
import {CameraKitCamera} from 'react-native-camera-kit'

class Camera extends Component {
  state = {
    status: false,
    url: ''
  }

  componentDidMount() {

  }

  capture = () => {
    const {url} = this.state
    !!url
      ? this.setState({url: ''})
      : this.camera.capture(true).then(data => this.setState({url: data.uri}))
  }

  render() {
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
  }
}

export default Camera