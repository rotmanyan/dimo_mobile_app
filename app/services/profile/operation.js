import axios from 'axios'
import {
  signUserRequest,
  signUserSuccess,
  signUserError
} from './action'
import {urlSign, token} from '../baseUrl'

export const signUser = credential => (dispatch, getState) => {
  signUserRequest()

  const actualToken = getState().profile.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`};

  const option = actualToken
    ? {
      method: 'GET',

    }
    : {
      method: 'GET',

    }

  axios(option)
    .then(data => dispatch(signUserSuccess(data)))
    .catch(shit => dispatch(signUserError(shit)))
}