import React from 'react';
import SignUser from './app/views/signUser'
import OnBoard from './app/views/onBoard'
import ScanScreen from './app/views/testCamera'
import ExampleApp from './app/views/testContacts'
import {StyledView} from './stylesApp'

export const App = () => (
  <StyledView>
    {/*<SignUser/>*/}
    {/*<OnBoard/>*/}
    {/*<ScanScreen/>*/}
    <ExampleApp/>
  </StyledView>
)