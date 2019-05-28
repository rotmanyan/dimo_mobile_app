import {signOut} from '../signUser/operation'
import jwt_decode from 'jwt-decode'
import {token} from "../baseUrl";

const reviewJWT = store => next => action => {
  const actualToken = store.getState().session.token || token;

  if (actualToken) {
    const dateNow = (Date.now() / 1000).toFixed()
    const jwtDec = jwt_decode(actualToken).exp
    const actualDate = jwtDec - dateNow

    if (action.type === 'GET_NEWS_TICKER_REQUEST') {
      if (actualDate < 0) {
        store.dispatch(signOut())
      }
    }
  }

  next(action)
}

export default reviewJWT