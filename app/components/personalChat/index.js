import React, {Component} from 'react';
import {MainView, BodyView, MessageGreen, MessageText, MessageGreenTime} from './styles'

class PersonalChat extends Component {
  static navigationOptions = {
    headerTitle: 'Support',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
    messagesFromMe: [
      {text: 'Can you send it for me? Well, yes, why not?', time: '5:41 PM'},
      {text: 'Can you send it for me? Well, yes, why not?', time: '5:41 PM'}
    ],
    messagesForMe: [
      {text: 'Thanks!', time: '5:42 PM'},
    ]
  }

  componentDidMount() {
  }

  writeFromMe = () => {
    const {messagesFromMe} = this.state
    return (
      messagesFromMe.map((el, id) => {
        return (
          <MessageGreen key={id}>
            <MessageText>
              {el.text}
            </MessageText>
            <MessageGreenTime>
              {el.time}
            </MessageGreenTime>
          </MessageGreen>
        )
      })
    )
  }

  render() {
    const {name} = this.props
    return (
      <MainView>
        <BodyView>
          {this.writeFromMe()}
        </BodyView>
      </MainView>
    )
  }
}

export default PersonalChat