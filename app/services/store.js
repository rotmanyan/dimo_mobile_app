import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
// import {activeAction} from "./middleware";
import {signUser} from "./profile/reducer";
import {i18n} from "./i18n/reducer";
import {kyc} from "./kyc/reducer";
import {contacts} from "./chat/reducer";


const rootReducer = combineReducers({
  profile: signUser,
  localization: i18n,
  kyc,
  contacts
})

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005'

  }
})

// const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const composeEnhancers = devtools ? devtools : compose

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store