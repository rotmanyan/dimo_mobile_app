import React from 'react';
import {connect} from "react-redux";
import {StyledView} from './stylesApp'
import Start from "./app/views/start";

const App = () => <StyledView><Start/></StyledView>

export default connect()(App)