import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'
import {CameraKitCamera, CameraKitCameraScreen} from 'react-native-camera-kit'
import QRCode from 'react-native-qrcode';


class Camera extends Component {
  state = {
    status: false,
    url: '',
    text: 'Hello Kira Abramov'
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
        {/*       <Button onPress={this.changeCamera}>
          <Text>Change camera</Text>
        </Button>*/}
        {/*        <Button onPress={this.onFlash}>
          <Text>Flash on</Text>
        </Button>*/}
        {!!url
          ? <Image source={{uri: url}}/>
          : <QRCode
            value={this.state.text}
            size={200}
            bgColor='purple'
            fgColor='white'/>}
      </MainView>
    );
  }
}

export default Camera