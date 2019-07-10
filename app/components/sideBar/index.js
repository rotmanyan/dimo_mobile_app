import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Switch} from 'react-native'
import SvgUri from "react-native-svg-uri";
import {Dropdown} from 'react-native-material-dropdown';
import {sideBarDisable} from "../../services/profile/actions";
import {
  MainView, OverflowBox, LeftBox,
  ItemBox, Text, Logo, Select,
} from "./styles"

let timerSend;

class SideBar extends Component {
  state = {
    transformValue: 280,
    switchValue: false,
    choosenIndex: 0,
    language: 'EN',
    langArr: [{value: 'EN'}, {value: 'PL'}, {value: 'RU'}]
  }

  componentDidMount() {
    timerSend = setInterval(() => this.setState({transformValue: this.state.transformValue - 20}), 4)
  }

  componentDidUpdate() {
    this.state.transformValue <= 0 && clearInterval(timerSend)
  }

  toggleSwitch = () => this.setState({switchValue: !this.state.switchValue})


  render() {
    const {transformValue, switchValue, language, langArr} = this.state
    let style = StyleSheet.create({
      child: {
        transform: [
          {translateX: transformValue},
        ],
      },
    })

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
              <Dropdown
                onChangeText={language => this.setState({language})}
                data={langArr}
                value={language}
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