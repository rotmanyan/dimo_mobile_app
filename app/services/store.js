import {createStore, applyMiddleware, combineReucers, compose} from 'redux'
import {createLogger} from 'redux-logger'
// import reviewJWT from './middlewares/reviewJWT'

// const rootReducer = combineReducers({})
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

const store = createStore(
  composeEnhancers(applyMiddleware(loggerMiddleware))
)
/*const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware))
)*/

export default store