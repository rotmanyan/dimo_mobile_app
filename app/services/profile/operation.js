import axios from 'axios'
import {
  signUserRequest,
  signUserSuccess,
  signUserError
} from './actions'
import {urlSign, token} from '../baseUrl'
import AsyncStorage from "@react-native-community/async-storage";

export const signUser = credential => (dispatch, getState) => {
  signUserRequest()
  console.log(getState());
  // const actualToken = getState().profile.token || token;
  // const headerDefault = {Authorization: `Bearer ${actualToken}`};

  const options = {
    method: 'POST',
    data: {number: credential},
    url: urlSign
  }

  // localStorage.setItem('token', response.data.session.jwt);

  axios(options)
    .then(response => {
      AsyncStorage.setItem('token', response.data)
      dispatch(signUserSuccess(response))
    })
    .catch(shit => dispatch(signUserError(shit)))
}