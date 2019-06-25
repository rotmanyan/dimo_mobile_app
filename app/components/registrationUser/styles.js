import styled from 'styled-components/native'


// start View Background
export const MainView = styled.View`
  flex: 1;
  background-color: #3878FF;
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
// end View Background

// start Button and Input
export const BodyScrollView = styled.ScrollView`
padding-top: 10%;
`

export const BodyView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

export const InputBoxView = styled.View`
  flex: 1;
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
// end Button and Input


export const Text = styled.Text`

`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #0a8cff;
`