import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 10;
  padding: 20px 16px;
  background-color: #e9edf2;
`

export const HeadView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 23px;
`

export const BodyView = styled.View`
  margin-top: 20px;
`

export const StepView = styled.View`
  width: 60px;
`

export const StepNumberView = styled.View`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`

export const StepNumberText = styled.Text`
  text-align: center;
  font-size: 18px;	
  letter-spacing: 0.13px;
 	line-height: 24px;
`

export const StepText = styled.Text`
  font-size: 14px;
  letter-spacing: 0.29px;	
  line-height: 20px;
  color: #1D2531;
`

export const activeText = {
  color: '#3878FF'
}

export const activeStep = {
  borderColor: '#3878FF',
  shadowColor: 'rgba(0,0,0,1)',
  shadowOpacity: 0.19,
  shadowRadius: 9,
}