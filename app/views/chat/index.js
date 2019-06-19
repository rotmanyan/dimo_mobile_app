import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';

import {
  MainView,
  BlockUser,
  AvatarUser,
  ViewUserText,
  UserTextBold,
  UserText,
  SvgUserView,
  BlockUserView,
  EmptyBox,
  EmptyImage, EmptyText, EmptyView
} from "./styles";
import {svgStyle, ViewSvg} from "../signUser/styles";

/*class LogoTitle extends Component {
  render() {
    return (
      <ViewLogo>
        <Image
          source={require('../../assets/backgrounds/logo.png')}
          style={{width: 30, height: 30}}
        />
      </ViewLogo>
    );
  }
}*/

class Chat extends Component {
  static navigationOptions = {
    headerTitle: 'Contacts',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  state = {
    contactName: ''
  }

  changeContactName = contactName => this.setState({contactName})

  render() {
    console.log(this.state, ' contactName contactName contactName')
    return (
      <>
        <MainView>
          {/*<BlockUser onPress={() => this.changeContactName('Support')}>*/}
          <BlockUser onPress={() => this.props.navigation.navigate('PersonalChat')}>

            <BlockUserView>
              <AvatarUser source={require('../../assets/images/oval58.png')}/>

              <ViewUserText>
                <UserTextBold>
                  Support
                </UserTextBold>
                <UserText>
                  Last seen 3 hours ago
                </UserText>
              </ViewUserText>

              <SvgUserView>
                <SvgUri
                  width="22"
                  height='22'
                  source={require('../../assets/icons/chat_bubble_outline.svg')}
                />
              </SvgUserView>
            </BlockUserView>
          </BlockUser>

          <EmptyBox>
            <EmptyView>
              <EmptyText>
                - Empty contacts -
              </EmptyText>
              <SvgUri
                width="102"
                height='102'
                source={require('../../assets/icons/group2.svg')}
                style={{margin: 16}}
              />
              <EmptyText>
                Tell your friend about
              </EmptyText>
              <EmptyText>
                DIMO
              </EmptyText>
            </EmptyView>
          </EmptyBox>
        </MainView>
      </>
    )
  }
}

export default Chat
