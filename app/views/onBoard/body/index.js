import React, {Component} from 'react';
import {MainView} from "./styles";
import Camera from "../../../components/camera";
import Profile from "../../profile";
import Chat from "../../chat";

class Body extends Component {
  write = () => {
    switch (this.props.step) {
      case 'chat':
        return <Chat/>
      case 'profile':
      default:
        return <Profile/>
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