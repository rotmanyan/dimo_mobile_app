import React from 'react';
import SignUser from './app/views/signUser'
// import ScanScreen from './app/views/testCamera'
import ExampleApp from './app/views/testContacts'
import {StyledView} from './stylesApp'

export const App = () => (
  <StyledView>
    {/*<SignUser/>*/}
    {/*<ScanScreen/>*/}
    <ExampleApp/>
  </StyledView>
)