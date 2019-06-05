import React, {Component} from 'react';
import {Image, ImagePickerIOS, View, TouchableOpacity} from 'react-native';

import {MainView, Text} from "./styles";
import CameraRollPicker from 'react-native-camera-roll-picker';

/*
class Camera extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 0,
      selected: [],
    };
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }


  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);
    console.log(this.state.selected);
  }

  render() {
    return (
      <MainView>
        <CameraRollPicker
          groupTypes='SavedPhotos'
          maximum={3}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages}/>
        <Text>
          Hello
        </Text>
      </MainView>
    );
  }
}

export default Camera;*/

class Camera extends Component {
  constructor() {
    super();
    this.state = {image: null};
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, error => console.error(error));
  }

  render() {
    // console.log(this.state, 'state');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <TouchableOpacity title='CLiCK me' onpress={this.pickImage}/>
      </View>
    );
  }
}

export default Camera