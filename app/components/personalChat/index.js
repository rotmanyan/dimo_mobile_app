import React, {Component} from 'react';
import {MainView, BodyView, MessageGreen, MessageText, MessageGreenTime} from './styles'

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
          <MessageGreen>
            <MessageText>
              Can you send it for me?
              Well, yes, why not?
            </MessageText>
            <MessageGreenTime>

            </MessageGreenTime>
          </MessageGreen>
        </BodyView>
      </MainView>
    )
  }
}

export default PersonalChat