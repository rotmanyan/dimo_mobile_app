import React, {Component} from 'react';

import {MainView} from "./styles";
import BottomSelectors from "./bottomSelectors";
import Body from "./body";
import HeaderSelectors from "./headerSelectors";

class OnBoard extends Component {
  render() {
    return (
      <MainView>
        <HeaderSelectors/>
        <Body/>
        <BottomSelectors step={this.props.step}/>
      </MainView>
    );
  }
}

export default OnBoard