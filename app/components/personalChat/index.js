import React, {Component} from 'react';
import {MainView, BodyView, MessageGreen} from './styles'

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
        <BodyView>

        </BodyView>
      </MainView>
    )
  }
}

export default PersonalChat