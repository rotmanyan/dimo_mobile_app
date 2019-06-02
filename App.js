import React, {Component} from 'react';
import SignUser from './app/views/signUser'
// import SameFn from './app/i18n'
import {StyledView} from './stylesApp'

export class App extends Component {
  componentDidMount() {
    // SameFn()
  }

  render() {
    return <StyledView>
      <SignUser/>
    </StyledView>

  }
}