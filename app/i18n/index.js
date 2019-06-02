import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getLanguages} from "react-native-i18n";

class SameFn extends Component {
  componentDidMount() {
    getLanguages().then(languages => {
      let language = languages[0].split('-')[0]
      this.setState({language})
    })
  }

  render() {
    return <View>
    </View>
  }
}

const MDTP = {
  // setLocal:
}
export default connect(null, MDTP)(SameFn)