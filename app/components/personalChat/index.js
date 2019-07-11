import React, {Component} from 'react';
import ReactNative from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {
  MainView, BodyView, KeyboardAvoidingView,
  MessageGreen, MessageText, MessageGreenTime,
  MessageWhite, MessageWhiteTime,
  InputBoxView, InputView, InputForm,
  InputButton, InputButtonText
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
    ],
    isWriting: false
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
      messagesFromMe: [...messagesFromMe, {text: value.trim(), time: '7.15 PM'}]
    }, () => this.setState({value: ''}))
  }

  _scrollToInput(reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }

  render() {
    const {name} = this.props
    const {value, isWriting} = this.state
    const style = {
      position: 'relative',
      left: 0,
      bottom: '45%',
      backgroundColor: '#fff',
      width: '100%'
    }

    return (
      <KeyboardAwareScrollView
        innerRef={ref => this.scroll = ref}
      >
        <BodyView>
          {this.writeForMe()}
          {this.writeFromMe()}
        </BodyView>
        <InputBoxView>
          <KeyboardAvoidingView
            behavior='padding'
            enabled
          >
            <InputView>

              <InputForm
                value={value}
                onChange={e => this.setState({value: e.nativeEvent.text})}
                placeholder='Type a message here...'
                multiline={true}
                onFocus={(event: Event) => {
                  this._scrollToInput(ReactNative.findNodeHandle(event.target))
                  this.setState({isWriting: true})
                }}
                onBlur={() => this.setState({isWriting: false})}
              />

              <InputButton onPress={!!value ? this.spreadToState : null}>
                <InputButtonText>
                  ->
                </InputButtonText>
              </InputButton>
            </InputView>
          </KeyboardAvoidingView>
        </InputBoxView>
      </KeyboardAwareScrollView>
    )
  }
}

export default PersonalChat