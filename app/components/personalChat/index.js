import React, {Component} from 'react';
import {
  MainView,
  BodyView,
  MessageGreen,
  MessageText,
  MessageGreenTime,
  MessageWhite,
  MessageWhiteTime,
  InputBoxView,
  InputView,
  InputForm,
  InputButton,
  InputButtonText
} from './styles'

class PersonalChat extends Component {
  static navigationOptions = {
    headerTitle: 'Support',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
    value: '',
    messagesFromMe: [
      {text: 'Can you send it for me? Well, yes, why not?', time: '5:41 PM'},
    ],
    messagesForMe: [
      {text: 'Hello!', time: '5:42 PM'},
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

  writeForMe = () => {
    const {messagesForMe} = this.state
    return (
      messagesForMe.map((el, id) => {
        return (
          <MessageWhite key={id}>
            <MessageText>
              {el.text}
            </MessageText>
            <MessageWhiteTime>
              {el.time}
            </MessageWhiteTime>
          </MessageWhite>
        )
      })
    )
  }

  spreadToState = () => {
    const {value, messagesFromMe} = this.state

    this.setState({
      messagesFromMe: [...messagesFromMe, {text: value, time: '7.15 PM'}]
    }, () => this.setState({value: ''}))
  }

  render() {
    const {name} = this.props
    const {value} = this.state
    return (
      <MainView>
        <BodyView>
          {this.writeForMe()}
          {this.writeFromMe()}
        </BodyView>
        <InputBoxView>
          <InputView>
            <InputForm
              value={value}
              onChange={e => this.setState({value: e.nativeEvent.text})}
              placeholder='Type a message here...'
            />
            <InputButton onPress={this.spreadToState}>
              <InputButtonText>
                ->
              </InputButtonText>
            </InputButton>
          </InputView>
        </InputBoxView>
      </MainView>
    )
  }
}

export default PersonalChat