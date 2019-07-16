import styled from 'styled-components/native'

export const MainView = styled.View`
`

export const Top = styled.View`
  background-color: #3878ff;
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const TitleBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`

export const Title = styled.Text`
  text-transform: uppercase;
  color: #FFFFFF;	
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`

export const SubTitle = styled.Text`
  text-transform: capitalize;
  color: #CFD7E3;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
`

export const BalanceBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CurrentAccount = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const Balance = styled.Text`
  color: #FFFFFF;
  font-size: 32px;
  letter-spacing: 0.24px;
  line-height: 36px;
`

export const Currency = styled.Text`
  color: #CFD7E3;
  font-size: 16px;
  text-align: center;
  padding-bottom: 2px;
  margin-left: 8px;
`

export const Bottom = styled.View`
  background-color: #ffffff;
  height: 100%;
`


export const QrCodeBox = styled.TouchableOpacity`
`
