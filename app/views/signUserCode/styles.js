import styled from 'styled-components/native'

export const MainView = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  background-color: rgba(17,29,85,0.78);
  align-items: center;
  margin: auto;
`

//button
export const ButtonPanelView = styled.View`
  flex:1;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
  margin-top: auto;
`

export const BackButtonView = styled.TouchableOpacity`
  height: 40px;
  width: 104px;
  background-color: transparent;
  border-radius: 50px;
  align-items: center;
  justify-content: center; 
  border: 1px solid #FFFFFF;
`

export const NextButtonView = styled.TouchableOpacity`
  border-radius: 50px;
  width: 104px;
  height: 40px;
  background-color: #4EDBD0;  
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.Text`
color: #fff;
font-size: 14px;
`

export const NextButton = styled.Text`
color: #fff;
font-size: 14px;
`

export const TextHeadMiddle = styled.Text`
  flex:1;
  color: #fff;
  text-align: center;
  max-width: 296px;
  margin: auto auto 5px;
  font-size: 18px;
  font-weight: 700;
`

export const NumberMiddle = styled.Text`
flex:1;
  color: #fff;
  line-height: 35px;
  text-align: center;
  max-width: 296px;
  margin: 0 auto 16px auto;
  font-size: 26px;
  font-weight: 700;
`

export const InputForm = styled.TextInput`
  flex:1;
  width: 300px;
  border-radius: 18px;
  max-height: 40px;
  background-color: #fff;
  padding: 10px 0 10px 18px;
  margin-bottom: 16px;
`

export const SendCount = styled.TouchableOpacity`
 flex:1;
  font-size: 16px;
  color: #fff;
`

export const SendCountText = styled.Text`
  flex:1;
  font-size: 16px;
  color: #fff;
`

export const SendCountTextSec = styled.Text`
  font-size: 16px;
  color: #fff;
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

export const ImageBg = styled.Image`
  min-height: 20%;
  max-height: 280px;
  width: 100%;
`