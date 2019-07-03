import styled from 'styled-components/native'

export const MainView = styled.ScrollView`
  background-color: #e9edf2;
`

export const TopView = styled.View`
  background-color: #fff;
  padding: 8px 8px 18px;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.3;
  shadow-radius: 2;
  shadow-offset: 0 2px;
  border-radius: 10px;
  margin-bottom: 5px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`

export const BottomView = styled.View`
  background-color: #e9edf2;
  padding: 8px 16px 0;
`

export const Text = styled.Text`
  color: #4C6180;
  padding-left: 8px;
  padding-top: 8px;
  font-weight: 700;
`

export const Input = styled.TextInput`
	color: #1D2531;
	background-color: #ffffff;
	border: 1px solid #CFD7E3;	
	border-radius: 20px;
	font-size: 16px;
	letter-spacing: .29px;
	line-height: 22px;
	padding: 9px 9px 9px 20px;
	margin-top: 8px;
`

export const InputWhite = styled.TextInput`
	color: #1D2531;
	background-color: #ffffff;
	border: 1px solid #CFD7E3;	
	border-radius: 20px;
	font-size: 16px;
	letter-spacing: .29px;
	line-height: 22px;
	padding: 9px 9px 9px 20px;
	margin-top: 8px;
`

export const YellowBlock = styled.View`
  height: 62px;
 	border-radius: 4px;	
 	background-color: #FFD057;
 	padding: 11px 12px;
 	justify-content: space-between;
 	flex-direction: row;
 	align-items: center;
`
export const YellowText = styled.Text`
  max-width: 40%;
  color: #1D2531;	
  font-size: 16px;	
  letter-spacing: 0.29px;	
  line-height: 20px;
`

export const YellowButtonView = styled.View`
  border-radius: 24px;	
  background-color: #FFFFFF;
  padding: 8px 12px;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.7;
  shadow-radius: 2;
  shadow-offset: 0 2px;
`

export const YellowButton = styled.TouchableOpacity`

`

export const YellowButtonText = styled.Text`
  color: #4C6180;	
  font-size: 14px;	
  letter-spacing: 1.35px;
	line-height: 19px;
	text-align: center;
	text-transform: uppercase;
`

export const HeadBlock = styled.View`
  padding-top: 16px;
  justify-content: space-between;
  flex-direction: row;
`

export const LeftBlock = styled.View`
`

export const CenterBlock = styled.View`
`

export const RightBlock = styled.View`
text-align: right;
`

export const TextLimit = styled.Text`
  font-size: 14px;
	color: #4C6180;
`

export const TextNumber = styled.Text`
  font-size: 16px;
  color: #1D2531;
`

export const TextNumberRight = styled.Text`
  font-size: 16px;
  color: #1D2531;
  text-align: right;
`

export const ViewUser = styled.TouchableOpacity`
  background-color: #ebebeb;
  width: 80px;
  height: 80px;
  border-radius: 64px;
  margin: auto auto 8px;
  align-items: center;
  justify-content: center;
`

export const ViewUserOverlay = styled.View`
  overflow: hidden;
`

export const ImageUser = styled.Image`
  border-radius: 40px;
  width: 80px;
  height: 80px;
`

export const TextUser = styled.Text`
text-align: center;
color: #1D2531;
font-size: 16px;	
letter-spacing: 0.16px;	
line-height: 22px;
`

export const TariffUserView = styled.View`
  opacity: 0.6;
	border-radius: 36px;
	background-color: #624ED2;
	padding: 2px 9px;
	margin-top: 6px;
`

export const TariffUserText = styled.Text`
  color: #FFFFFF;	
  font-size: 12px;	
  letter-spacing: 0.09px;
	line-height: 16px;
`

export const ViewBlueButton = styled.View`
  margin: 24px auto 30px;
  border-radius: 24px;	
  background-color: #3878FF;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.7;
  shadow-radius: 2;
  shadow-offset: 0 2px;
  	width: 150px;
  	padding: 11px 44px;
`

export const BlueButton = styled.TouchableOpacity`

`

export const BlueButtonText = styled.Text`
text-align: center;
color: #ffffff;
font-size: 14px;
line-height: 19px;
letter-spacing: 1.35px;
`

export const Confirmed = styled.View`
  position: absolute;
  height: 18px;
  width: 18px;
  align-items: center;
  justify-content: center;
  background-color: #57ffd0;
  border-radius: 9px;
  bottom: 4px;
  right: 4px;
`