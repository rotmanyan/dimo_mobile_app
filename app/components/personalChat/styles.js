import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 10;
`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #0a8cff;
`

export const Text = styled.Text`
  text-align: center;
  color: #ffffff;
`

export const BodyView = styled.ScrollView`
flex: 9;
background-color: #e9edf2;
padding: 15px 21.5px;
`

export const MessageGreen = styled.View`
  margin-left: auto;
  background-color: #effedd;
  min-width: 141px;
  max-width: 260px;
  padding: 9px 12px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-direction: row;
`

export const MessageGreenTime = styled.Text`
	font-size: 13px;
	letter-spacing: -0.1px;	
	line-height: 16px;
	color: #69C35F;
  margin-left: auto;

`

export const MessageText = styled.Text`
  color: #000000;
  font-size: 13px;
	letter-spacing: -0.1px;
	line-height: 16px;
	max-width: 151px;
	margin-right: 4px;
`

export const MessageWhite = styled.View`
  margin-right: auto;
  min-width: 141px;
  max-width: 260px;
  padding: 9px 12px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-direction: row;
  background-color: #ffffff;
`

export const MessageWhiteTime = styled.Text`
	font-size: 13px;
	letter-spacing: -0.1px;	
	line-height: 16px;
  color: #A0ACB7;
  margin-left: auto;
`


export const InputBoxView = styled.View`
  background-color: #ffffff;
  padding: 12px 16px;
`

export const InputView = styled.View`
	background-color: rgba(197,207,220,0.3);
  border-radius: 18px;
  flex-direction: row;
  justify-content: space-between;
`

export const InputForm = styled.TextInput`
margin-left: 10px;
  width: 80%;
`

export const InputButton = styled.TouchableOpacity`
  background-color: #3878ff;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`

export const InputButtonText = styled.Text`
font-size: 16px;
color: #ffffff;
`