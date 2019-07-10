import styled from 'styled-components/native'

export const MainView = styled.View`
  width: 100%;
  flex: 4;
  padding: 32px 0;
  background-color: rgba(17,29,85,0.78);
  
  align-items: center;
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
  width: 240px;
`

export const ImageKey = styled.Image`
  width: 128px;
  height: 128px;
  margin: 32px 0 47px;
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
  text-transform: uppercase;
`

export const InputForm = styled.TextInput`
  width: 300px;
  border-radius: 18px;
  max-height: 40px;
  background-color: #fff;
  padding: 10px 0 10px 18px;
  text-transform: lowercase;
`

export const SendCount = styled.TouchableOpacity`
  margin: 16px 0 42px;
`

export const SendCountText = styled.Text`
  text-decoration: underline #fff;
  font-size: 16px;
  color: #ffffff;
`

export const RedText = styled.Text`
  position: relative;
  color: #ff2d4e;
  top: 20px;
  text-align: center;
`