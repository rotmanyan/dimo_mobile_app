import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'
import {CameraKitCamera, CameraKitCameraScreen} from 'react-native-camera-kit'

class Camera extends Component {
  state = {
    status: false,
    url: '',
  }

  componentDidMount() {
    CameraKitCamera
      .checkDeviceCameraAuthorizationStatus()
      .then(data => data
        ? console.log(data, 'status')
        : CameraKitCamera
          .requestDeviceCameraAuthorization(true)
          .then(data => console.log(data, 'status 1'))
      )

  }

  capture = () => {
    const {url} = this.state
    !!url
      ? this.setState({url: ''})
      : this.camera.capture(false)
        .then(data => this.setState({url: data.uri}))
  }
  /*

    changeCamera = () => {
      const {url} = this.state
      !!url
        ? this.setState({url: ''})
        : this.camera.changeCamera().then(data => console.log(data, 'changeCamera'))
    }
  */

  /*  onFlash = () => {
      const {url} = this.state
      !!url
        ? this.setState({url: ''})
        : this.camera.setFlashMode().then(data => console.log(data, 'onFlash'))
    }*/

  render() {
    const {url} = this.state

    return (
      <MainView>
        <Button onPress={this.capture}>
          <Text>Capture</Text>
        </Button>
        {!!url
          ? <Image source={{uri: url}}/>
          : <CameraKitCamera
            ref={cam => this.camera = cam}
            style={CamStyle}
            cameraOptions={{focusMode: 'on'}}
          />}
      </MainView>
    );
  }
}

export default Camera