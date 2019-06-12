import React, {Component} from 'react';

import {
  MainView,
  View,
  // Button,
  Text,
  // Image
} from "./styles";
// import Camera from "../../components/camera";

class Kyc extends Component {
  state = {
    kycStep: 'proof',
    headSteps: ['Proof of identify', 'Selfie', 'Status'],
    docArr: ['Passport', 'Certificate of birthday', 'Driver\' license']
  }

/*  head = () => <View>
    {this.state.headSteps.map((el, key) => <Text key={key}>
        {el}
      </Text>
    )}
  </View>


  body = () => {
    switch (this.state.kycStep) {
    }

    return <View>
      <Text>
        Account verification
      </Text>
    </View>
  }*/

  render() {
    return (
      <MainView>
        {/*{this.head()}*/}
        {/*{this.body()}*/}
        <Text>
          {/*<Camera/>*/}
          It's Kyc
        </Text>
      </MainView>
    );
  }
}

export default Kyc