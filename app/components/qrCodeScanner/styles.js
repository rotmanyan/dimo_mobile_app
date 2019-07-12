import styled from 'styled-components/native'

export const MainView = styled.View`
  flex: 1;
  padding: 50px 0 0 0;
  align-items: center;
  justify-content: center;
`

export const SubView = styled.View`
  background-color: #000;
  padding-top: 50px;
  height: 100%;
  justify-content: center;
`

export const QRView = styled.View`
  height: 80%;
`

export const QRtext = styled.Text`
  color: #000;
  font-size: 19px;
  padding: 8px;
  margin-top: 12px;
`

export const TextOne = styled.Text`
  font-size: 22px;
  color: #ffffff;
`

export const Button = styled.TouchableOpacity`
  position:absolute;
  left: 30px;
  top: 15px;
  width: 100%;
`