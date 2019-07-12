import styled from 'styled-components/native'

export const MainView = styled.TouchableOpacity`
   position: absolute;
   height: 100%;
   width: 100%;
   background-color: rgba(24,33,79,0.41);
   justify-content: center;
   align-items: center;
`

export const QrCodeWhiteBlock = styled.View`
  height: 350px;
  width: 308px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px 32px 32px;
  align-items: center;
  shadow-color: rgba(0,0,0,0.7);
  shadow-opacity: 0.1;
  shadow-radius: 9;
  shadow-offset: 0 -5px;
`

export const QrCodeHeader = styled.View`
  justify-content: center;
  width: 100%;
`

export const QrCodeTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  color: #4C6180;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.15px;
  line-height: 26px;
 `

export const QrCodeBody = styled.View`
  margin-top: 24px;
`

export const QrCodeSvg = styled.View`
  position: absolute;
  right: 0;
  top: 0;
`