import styled from 'styled-components/native'

export const MainView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  flex-direction: row;
  height: 100%;
  background-color: rgba(24,33,79,0.41);
`

export const OverflowBox = styled.TouchableOpacity`
	width: 20%;
`

export const LeftBox = styled.View`
	background-color: #fff;
	width: 80%;
	padding: 24px;
`

export const ItemBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

export const Text = styled.Text`
  color: #4C6180;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  text-align: left;
  margin: 0 auto 0 16px;
`

export const Logo = styled.View`
`

export const Select = styled.View`
`