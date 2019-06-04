import React, {Component} from 'react';

import {MainView, ButtonView, StyledButton, TextHeadMiddle} from "./styles";
import BottomSelectors from "./bottomSelectors";
import Body from "./body";

class OnBoard extends Component {
  render() {
    return (
      <MainView>
     {/*   <TextHeadMiddle>
          On board
        </TextHeadMiddle>*/}
        <Body/>
        <BottomSelectors/>
      </MainView>
    );
  }
}

export default OnBoard