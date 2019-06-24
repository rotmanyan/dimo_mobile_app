import axios from 'axios'
import {
  signUserRequest,
  signUserSuccess,
  signUserError
} from './actions'
import {urlVerifyphone} from '../baseUrl'
import AsyncStorage from "@react-native-community/async-storage";

export const signUserVerifyphone = credential => (dispatch, getState) => {
  dispatch(signUserRequest())
  // const actualToken = getState().profile.token || token;
  // const headerDefault = {Authorization: `Bearer ${actualToken}`};
  // +255 721 234 566
  const options = {
    method: 'POST',
    data: {
      phone: credential
    },
    url: urlVerifyphone
  }


  axios(options)
    .then(response => {
      // let data = response.data.data.token
      // AsyncStorage.setItem('token', data)
      if (response.data.success) dispatch(signUserSuccess(credential))
    })
    .catch(error => dispatch(signUserError(error)))
}

export const signUserVerifypho = credential => (dispatch, getState) => {

}