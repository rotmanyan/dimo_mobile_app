import React, {Component} from 'react';
import {Vibration, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {contacsSync} from "../../services/chat/operations";
import Contacts from 'react-native-contacts'
import SvgUri from 'react-native-svg-uri';

import {
  MainView, BlockUser, AvatarUser,
  ViewUserText, UserTextBold, UserText,
  SvgUserView, BlockUserView, EmptyBox,
  EmptyImage, EmptyText, EmptyView,
  MainScrollView
} from "./styles";

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
    contactName: '',
  }

  componentDidMount() {
    this.props.send([])
    /*    Contacts.getAll((error, data) => {
          console.log(data, 'console .data')
          console.log(error, 'console .error')

          let numbers = []


          this.props.send(numbers)
          /!*      console.log(data, 'data contacts ');
                console.log(error, 'error contacts ');

                Vibration.vibrate(1000)
                const numbers = Array.isArray(data) ? data.map(el => el.phoneNumbers[0].number.split('-').join('').split('(').join('').split(' ').join('').split(')').join('')) : []

                this.props.send(numbers)*!/
        })*/
  }

  render() {
    const {contacts, send, status} = this.props

    return (
      !status
        ? <ActivityIndicator
          color='#3878FF'
          size="large"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        />
        : <>
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
              </BlockUserView>
            </BlockUser>
            <MainScrollView>
              {
                contacts
                  ? contacts.map((el, key) =>
                    <BlockUser onPress={() => this.props.navigation.navigate('PersonalChat')} key={el.phone}>

                      <BlockUserView>
                        <AvatarUser source={{uri: el.avatar}}/>
                        <ViewUserText>
                          <UserTextBold>
                            {el.firstName} {el.lastName}
                          </UserTextBold>
                          <UserText>
                            Last seen {key + 1} minute ago
                          </UserText>
                        </ViewUserText>
                      </BlockUserView>
                    </BlockUser>)
                  : <EmptyBox onPress={() => {
                    Vibration.vibrate(1000)
                    Contacts.getAll((error, data) => {
                      const numbers = data.map(el => el.phoneNumbers[0].number.split('-').join('').split('(').join('').split(' ').join('').split(')').join(''))
                      send(numbers)
                    })
                  }}>
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
              }
            </MainScrollView>
          </MainView>
        </>
    )
  }
}

const MSTP = state => ({
  contacts: state.contacts.friends,
  status: state.contacts.status
})
const MDTP = {
  send: contacsSync
}
export default connect(MSTP, MDTP)(Chat)
