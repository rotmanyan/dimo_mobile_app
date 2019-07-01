import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'

class Contacts extends Component {
  static navigationOptions = {
    headerTitle: 'Contacts',
  }

  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <MainView>
        <Text>
          It's a contacts
        </Text>
      </MainView>
    )
  }
}

export default Contacts