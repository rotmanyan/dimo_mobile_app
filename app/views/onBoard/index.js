import React, {Component} from 'react';

import {MainView} from "./styles";
import BottomSelectors from "./bottomSelectors";
import Body from "./body";
import HeaderSelectors from "./headerSelectors";

class OnBoard extends Component {
  render() {
    return (
      <MainView>
        <HeaderSelectors step={this.props.step}/>
        <Body step={this.props.step}/>
        <BottomSelectors changeStep={this.props.changeStep} step={this.props.step}/>
      </MainView>
    );
  }
}

const MSTP = state => ({
  // step: state.profile.step
})

export default OnBoard