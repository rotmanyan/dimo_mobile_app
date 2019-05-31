import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
// import reviewJWT from './middlewares/reviewJWT'
import {signUser} from "./profile/reducer";

const rootReducer = combineReducers({
  profile: signUser
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

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools ? devtools : compose

// const store = createStore(
//   composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
// )

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
)

export default store