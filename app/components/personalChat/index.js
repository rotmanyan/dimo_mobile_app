import React, {Component} from 'react';
import {MainView, Button, Text, Image, CamStyle} from './styles'

class PersonalChat extends Component {
  static navigationOptions = {
    headerTitle: 'Support',
  }

  state = {}

  componentDidMount() {
  }

  render() {
    const {name} = this.props
    return (
      <MainView>
        <Text>
          Name
        </Text>
      </MainView>
    )
  }
}

export default PersonalChat