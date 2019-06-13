import React, {Component} from 'react';
import {MainView} from "./styles";
import Camera from "../../../components/camera";
import Profile from "../../profile";
import Chat from "../../chat";
import Kyc from "../../kyc";
import Activity from "../../activity";

class Body extends Component {
  write = () => {
    switch (this.props.step) {
      case 'profile':
        return <Profile/>
      case 'chat':
        return <Chat/>
      case 'activity':
        return <Activity/>
      default:
      case 'kyc':
        return <Kyc/>
    }
  }

  render() {
    return (
      <MainView>
        {this.write()}
      </MainView>
    );
  }
}

export default Body;