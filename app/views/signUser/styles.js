import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components/native'

export const MainView = styled.View`
  background-color: #3878FF;
  flex: 1;
`

export const ImageBg = styled.Image`
  min-height: 20%;
  max-height: 280px;
  width: 100%;
`

export const PhoneView = styled.View`
  background-color: #fff;
  padding: 10px;
  width: 296px;
  margin: auto;
  border-radius: 50px;
`

export const TextHead = styled.Text`
  color: #fff;
  text-align: center;
  max-width: 296px;
  margin: auto;
`

export const TextMiddle = styled.Text`
  color: #fff;
  text-align: center;
  max-width: 296px;
  margin: auto;
`

export const ButtonView = styled.View`
  background-color: #4EDBD0;
  border-radius: 50px;
  width: 156px;
  height: 40px;
  margin: auto;
`

export const StyledButton = styled.Button`
  color: #fff;
  font-size: 150px;
`

export const ViewHead = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ViewBottom = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
  align-items: flex-end;
`
