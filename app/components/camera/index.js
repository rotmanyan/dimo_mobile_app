import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'
import {CameraKitCamera, CameraKitGalleryView} from 'react-native-camera-kit'

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
      : this.camera.capture(false)
        .then(data => this.setState({url: data.uri}))
  }

  changeCamera = () => {
    const {url} = this.state
    !!url
      ? this.setState({url: ''})
      : this.camera.changeCamera().then(data => console.log(data, 'changeCamera'))
  }
  onFlash = () => {
    const {url} = this.state
    !!url
      ? this.setState({url: ''})
      : this.camera.setFlashMode().then(data => console.log(data, 'onFlash'))
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
        <Button onPress={this.changeCamera}>
          <Text>
            Change camera
          </Text>
        </Button>
        <Button onPress={this.onFlash}>
          <Text>
            Flash on
          </Text>
        </Button>
        <CameraKitGalleryView
          ref={gallery => this.gallery = gallery}
          style={{flex: 1, marginTop: 20}}
          minimumInteritemSpacing={10}
          minimumLineSpacing={10}
          columnCount={3}
          onTapImage={event => {
            console.log(event, 'event');
            // event.nativeEvent.selected - ALL selected images ids
          }}
        />
      </MainView>
    );
  }
}

export default Camera