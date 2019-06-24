import styled from 'styled-components/native'

export const MainView = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  flex: 5;
  background-color: rgba(17,29,85,0.78);
  align-items: center;
  margin: auto;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #0a8cff;
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

export const ButtonPanelView = styled.View`
  flex:1;
  width: 240px;
  justify-content: flex-end;
  margin-top: auto;
`

export const NextButtonView = styled.TouchableOpacity`
  border-radius: 50px;
  height: 40px;
  background-color: #4EDBD0;  
  align-items: center;
  justify-content: center;
`

export const NextButton = styled.Text`
color: #fff;
font-size: 14px;
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
`

export const SendCountText = styled.Text`
  text-decoration: underline #fff;
  font-size: 16px;
  color: #ffffff;
`
