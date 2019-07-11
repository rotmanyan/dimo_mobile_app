import styled from 'styled-components/native'

export const MainView = styled.View`
  background-color: #e9edf2;
  padding: 16px;
  flex: 1;
`

export const WhiteBox = styled.View`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 16px;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.1;
  shadow-radius: 9;
  shadow-offset: 0 -5px;
`

export const BigText = styled.Text`
	color: #4C6180;
	font-size: 20px;
	font-weight: bold;
	line-height: 27px;
	margin-bottom: 8px;
`

export const SmallText = styled.Text`
	color: #4C6180;
	font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 16px;
  margin: 8px 0;
`

export const AmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const AmountInput = styled.TextInput`
  border: 1px solid #CFD7E3;
  border-radius: 4px;
  padding: 12px 10px;
  width: 70%;
`
export const AmountDropdown = styled.View`
  border: 1px solid #CFD7E3;
  border-radius: 4px;
  height: 44px;
  width: 25%;
`

export const RecipientBox = styled.View`
  justify-content: center;
`

export const RecipientInput = styled.TextInput`
  border: 1px solid #CFD7E3;
  border-radius: 4px;
  padding: 12px 10px;
`

export const RecipientIcon = styled.TouchableOpacity`
  width: 32px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`

export const NotesBox = styled.View`
  justify-content: center;
`

export const NotesInput = styled.TextInput`
  border: 1px solid #CFD7E3;
  border-radius: 4px;
  padding: 12px 10px;
  min-height: 106px;
  max-height: 106px;
`

export const SlideSendBox = styled.View`
  margin-top: 16px;
  border: 1px solid #CFD7E3;
  border-radius: 28px;
  height: 40px;
  overflow: hidden;
  flex-direction: row;
`

export const SliderLeft = styled.TouchableOpacity`
  background-color: #3878ff;
  align-items: center;
  justify-content: center;
  width: 173px;
  height: 100%;
  border-radius: 28px;
  flex-direction: row;
  position: relative;
  z-index: 1;
`

export const SliderText = styled.Text`
  font-size: 14px;
  letter-spacing: 1.35px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-right: 12px;
`

export const SliderRight = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  margin-left: auto;
`

