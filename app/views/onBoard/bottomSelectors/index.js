import React, {Component} from 'react';
import {MainView, View, Button, Text, Image} from "./styles";

class BottomSelectors extends Component {
  state = {
    selectors: ['Chat', 'Telegram', 'Wallet', 'Active', 'Profile']
  }

  render() {
    const {selectors} = this.state
    return (
      <MainView>
        <View>
          {selectors.map((el, id) => (
            <Button color='#3878FF' key={el + id}>
              <Text>{el}</Text>
            </Button>
          ))}
        </View>
      </MainView>
    );
  }
}

export default BottomSelectors