import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Switch} from 'react-native'
import {sideBarDisable} from "../../services/profile/actions";
import {
  MainView, OverflowBox, LeftBox,
  ItemBox, Text, Logo, Select,
  Picker
} from "./styles"
import SvgUri from "react-native-svg-uri";

let timerSend;

class SideBar extends Component {
  state = {
    transformValue: 280,
    switchValue: false,
    choosenIndex: 0,
    language: 'EN'
  }

  componentDidMount() {
    timerSend = setInterval(() => this.setState({transformValue: this.state.transformValue - 20}), 4)
  }

  componentDidUpdate() {
    this.state.transformValue <= 0 && clearInterval(timerSend)
  }

  toggleSwitch = () => this.setState({switchValue: !this.state.switchValue})


  render() {
    const {transformValue, switchValue} = this.state
    let style = StyleSheet.create({
      child: {
        transform: [
          {translateX: transformValue},
        ],
      },
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
                source={require('../../assets/icons/ico-notification.svg')}
              />
            </Logo>
            <Text>Notification</Text>
            <Select>
              <Switch
                onValueChange={this.toggleSwitch}
                value={switchValue}
              />
            </Select>
          </ItemBox>
          <ItemBox>
            <Logo>
              <SvgUri
                width="25"
                height='25'
                source={require('../../assets/icons/ico-language.svg')}
              />
            </Logo>
            <Text>Language</Text>
            <Select>
              <Picker
                selectedValue={this.state.language}
                onValueChange={itemValue => this.setState({language: itemValue})}>
                <Picker.Item label="EN" value="en"/>
                <Picker.Item label="PL" value="pl"/>
                <Picker.Item label="RU" value="ru"/>
              </Picker>
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