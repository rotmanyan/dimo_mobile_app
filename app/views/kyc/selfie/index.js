import React, {Component} from 'react';
import {
  UploadImageBox, TitleText, SubTitleText,
  FieldBox, ItemField, TextField
} from './styles'

class Selfie extends Component {
  static navigationOptions = {
    headerTitle: 'KYC',
    headerStyle: {
      backgroundColor: '#3878FF',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  }

  render() {
    return (
      <>
        <UploadImageBox>

          <TitleText>identity</TitleText>
          <SubTitleText>Please upload a photo with your passport in your hands</SubTitleText>

          <FieldBox>
            <ItemField>
              <TextField>Color photograph</TextField>
            </ItemField>
            <ItemField>
              <TextField>High resolution image</TextField>
            </ItemField>
            <ItemField>
              <TextField>Your name and surname must be visible in the document</TextField>
            </ItemField>
            <ItemField>
              <TextField>In the photo the entire document</TextField>
            </ItemField>
          </FieldBox>



        </UploadImageBox>
      </>
    );
  }
}

export default Selfie;