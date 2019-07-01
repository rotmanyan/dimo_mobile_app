import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 10;
  padding: 20px 16px;
  background-color: #e9edf2;
`

export const HeadView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`

export const BodyView = styled.ScrollView`
  margin-top: 10px;
`

export const StepView = styled.View`
  width: 60px;
  align-items: center;
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
  text-align: center;
  letter-spacing: 0.29px;	
  line-height: 20px;
  color: #1D2531;
`

export const StepLineOne = styled.View`
  background-color: #3878ff;
  position: absolute;
  top: 30px;
  left: 10%;
  height: 2px;
  width: 50%;
  z-index: -1;
`
export const StepLineTwo = styled.View`
  background-color: #000000;
  position: absolute;
  top: 30px;
  right: 10%;
  height: 2px;
  width: 50%;
  z-index: -1;
`

export const activeText = {
  color: '#3878FF'
}

export const activeLine = {
  backgroundColor: '#3878FF'
}

export const activeStep = {
  borderColor: '#3878FF',
  shadowColor: 'rgba(0,0,0,1)',
  shadowOpacity: 0.19,
  shadowRadius: 9,
}