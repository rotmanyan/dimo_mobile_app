import React, {Component} from 'react';
import {StyledView} from './stylesApp'
import Start from "./app/views/start";

class App extends Component {
  render() {
    return (
      <StyledView>
        <Start/>
      </StyledView>
    );
  }
}
export default App