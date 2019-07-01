import styled from 'styled-components/native'

export const MainView = styled.View`
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.1;
  shadow-radius: 9;
  shadow-offset: 0 -5px;
  flex: 1;
`

export const View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0 24px 50px;
`

//button
export const Button = styled.TouchableOpacity`
  padding: 5px;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
`

export const TextGrey = styled.Text`
  color: #90a5c2;
`

export const TextBlue = styled.Text`
  color: #3878FF;
`

export const Image = styled.Image`
  height: 250px;
  width: 250px;
`