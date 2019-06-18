import {createStackNavigator, createAppContainer} from "react-navigation"
import {routesTypes} from "./routes"

import CodeScan from "../components/qrCodeScanner"

const AppNavigator = createStackNavigator(
  {
    [routesTypes.QR_CODE_FULL_SCREEN]: CodeScan
  },
  {headerMode: "none"}
)
export default createAppContainer(AppNavigator)