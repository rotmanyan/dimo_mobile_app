import styled from 'styled-components/native'

export const MainView = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  flex: 5;
  background-color: rgba(17,29,85,0.78);
  align-items: center;
  margin: auto;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #0a8cff;
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