import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components/native'

export const MainView = styled.View`
  background-color: #3878FF;
  flex: 1;
`

export const ImageTop = styled.Image`
  position: absolute;
  bottom: -630px;
  left: 0;
  height: 240px;
  width: 100%;
`

export const ImageBottom = styled.Image`
  position: absolute;
  bottom: -630px;
  height: 240px;
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

export const BackView = styled.ImageBackground`
  width: 100%;
  height: 100%
`

export const View = styled.View`
  position: absolute;
  bottom: -150px;
  left: 0;
`


export const styles = StyleSheet.create({
  textWrapper: {
    position: 'absolute',
    bottom: hp('1%'),
    left: wp('1%'),
    height: hp('70%'),
    width: wp('80%')
  }
})