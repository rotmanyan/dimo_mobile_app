import axios from 'axios'
import {
  signUserRequest,
  signUserSuccess,
  signUserError
} from './actions'
import {urlSign} from '../baseUrl'
import AsyncStorage from "@react-native-community/async-storage";

export const signUser = credential => (dispatch, getState) => {
  dispatch(signUserRequest())
  // const actualToken = getState().profile.token || token;
  // const headerDefault = {Authorization: `Bearer ${actualToken}`};
  // +255 721 234 566
  const options = {
    method: 'POST',
    data: {
      phone: credential,
      password: 'Qwerty123'
    },
    url: urlSign
  }

  // localStorage.setItem('token', response.data.session.jwt);

  axios(options)
    .then(response => {
      let data = response.data.data.token
      AsyncStorage.setItem('token', data)
      dispatch(signUserSuccess(data))
    })
    .catch(error => dispatch(signUserError(error)))
}
