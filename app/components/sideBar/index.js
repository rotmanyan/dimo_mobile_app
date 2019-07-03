import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import {sideBarDisable} from "../../services/profile/actions";
import {
  MainView, OverflowBox, LeftBox,
  ItemBox, Text, Logo, Select,
} from "./styles"
import SvgUri from "react-native-svg-uri";

let timerSend;

class SideBar extends Component {
  state = {
    transformValue: 280,
  }

  componentDidMount() {
    timerSend = setInterval(() => this.setState({transformValue: this.state.transformValue - 20}), 4)
  }

  componentDidUpdate() {
    this.state.transformValue <= 0 && clearInterval(timerSend)
  }


  render() {
    const {transformValue} = this.state
    let style = StyleSheet.create({
      child: {
        transform: [
          {translateX: transformValue},
        ],
      }
    })
    console.log(this.state);
    return (
      <MainView>
        <OverflowBox onPress={this.props.sideBarDisable}/>
        <LeftBox style={style.child}>
          <ItemBox>
            <Logo>
              <SvgUri
                width="25"
                height='25'
                source={require('../../assets/icons/closeYellow.svg')}
              />
            </Logo>
            <Text>Notification</Text>
            <Select>
              <SvgUri
                width="25"
                height='25'
                source={require('../../assets/icons/closeYellow.svg')}
              />
            </Select>
          </ItemBox>
          <ItemBox>
            <Logo>
              <SvgUri
                width="25"
                height='25'
                source={require('../../assets/icons/closeYellow.svg')}
              />
            </Logo>
            <Text>Language</Text>
            <Select>
              <SvgUri
                width="25"
                height='25'
                source={require('../../assets/icons/closeYellow.svg')}
              />
            </Select>
          </ItemBox>
        </LeftBox>
      </MainView>
    )
  }
}

const MDTP = {
  sideBarDisable
}
export default connect(null, MDTP)(SideBar)