import React, {Component} from 'react';
import {MainView, ImageBg, ViewBottom, ViewHead} from './styles'
import {InputForm} from "../../views/signUserCode/styles";

class EnterPassword extends Component {
  state = {value: ''}

  render() {
    return (
      <MainView>
        <ViewHead>
          <ImageBg source={require('../../assets/backgrounds/Top.png')}/>
        </ViewHead>
        <ViewBottom>
          <ImageBg source={require('../../assets/backgrounds/bottom.png')}/>
        </ViewBottom>
        <InputForm
          ref={input => {
            if (input !== null) {
              input.focus()
              if (value.length >= 6) {
                input.blur()
              }
            }
          }}
          value={value}
          onChange={e => {
            this.setState({value: e.nativeEvent.text})
          }} placeholder="Enter your password"/>
      </MainView>
    )
  }
}

export default EnterPassword