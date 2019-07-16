import React, {Component} from 'react'
import {View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SvgUri from "react-native-svg-uri"
import {
  MainView, tabStyles, labelStyle, indicatorStyle,
} from "./styles"

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}/>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}/>
);

class WalletBody extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'topup', title: 'Topup'},
      {key: 'redeem', title: 'Redeem'},
      {key: 'exchange', title: 'Exchange'},
      {key: 'charts', title: 'Charts'},
    ],
  }

  renderScene = ({route}) => {
    switch (route.key) {
      case 'topup':
        return <FirstRoute/>;
      case 'redeem':
        return <SecondRoute/>;
      case 'exchange':
        return <SecondRoute/>;
      case 'charts':
        return <SecondRoute/>;
      default:
        return null;
    }
  };

  renderTabBar = props =>
    <TabBar
      {...props}
      indicatorStyle={indicatorStyle}
      style={tabStyles}
      labelStyle={labelStyle}
      activeColor='#4C6180'
      inactiveColor='#909DAE'
    />

  render() {
    const {walletNumber, balance, currency, openQrCode} = this.props
    console.log(this.state, 'log')
    return (
      <MainView>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
        />
      </MainView>
    )
  }
}

export default WalletBody;