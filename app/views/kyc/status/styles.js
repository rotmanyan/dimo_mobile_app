import styled from 'styled-components/native'

export const PopupBox = styled.View`
  background-color: #ffffff;
  padding-bottom: 19px;
  border-radius: 8px;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.1;
  shadow-radius: 9;
  shadow-offset: 0 -5px;
  overflow: hidden;
`


export const HeadBlue = styled.View`
  background-color: #3878FF;
  height: 64px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

export const RectangleSvgView = styled.View`
  background-color: #fff;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`

export const HeadYellowTitleText = styled.Text`
  color: #ffd338;
`
export const HeadBlueTitleText = styled.Text`
	color: #fff;
	font-size: 12px;	
	letter-spacing: 0.09px;	
	line-height: 14px;
	text-transform: uppercase;
`

export const HeadBlueText = styled.Text`
  margin: 16px 24px 13px;
	color: #000;
`

export const BlueButton = styled.TouchableOpacity`
	height: 34px;
	width: 96px;
	border-radius: 24px;
	background-color: #3878FF;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const BlueButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
`

export const FieldBox = styled.View`
  padding: 0 16px;
  margin: 16px 0;
`

export const ItemField = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`

export const TextField = styled.Text`
  margin-left: 4px;
`