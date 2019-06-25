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

// start Plan
export const PlanView = styled.View`
  border: 1px solid #CFD7E3;
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
`

export const NoSelectedPlan = styled.TouchableOpacity`
background-color: transparent;
padding: 10px;
`

export const SelectedPlan = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 10px;
`

export const NoSelectedPlanText = styled.Text`
  text-align: center;
  opacity: 0.7;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 12px;	
  letter-spacing: 1.16px;	
  line-height: 16px;
`

export const SelectedPlanText = styled.Text`
  text-transform: uppercase;
  color: #1F3C91;
  font-size: 12px;	
  letter-spacing: 1.16px;	
  line-height: 16px;	
  text-align: center;
`
//

export const TextH1 = styled.Text`
  color: #ffffff;
	font-size: 21px;
	letter-spacing: 0.14px;
	line-height: 28px;
	text-align: center;
	margin-top: 56px;
`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #0a8cff;
`