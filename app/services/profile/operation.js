import axios from 'axios'
import {
  signUserVerifyPhoneRequest,
  signUserVerifyPhoneSuccess,
  signUserVerifyPhoneError,

  signUserMobileConfirmRequest,
  signUserMobileConfirmSuccess,
  signUserMobileConfirmError,

  signUserUpRequest,
  signUserUpSuccess,
  signUserUpError,

  signUserInRequest,
  signUserInSuccess,
  signUserInError
} from './actions'
import {urlVerifyphone, urlMobileconfirm, urlSignIn, urlSignUp} from '../baseUrl'
import AsyncStorage from "@react-native-community/async-storage";

export const signUserVerifyPhone = credential => (dispatch, getState) => {
  dispatch(signUserVerifyPhoneRequest())
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
      if (response.data.success) dispatch(signUserVerifyPhoneSuccess(credential))
    })
    .catch(error => dispatch(signUserVerifyPhoneError(error)))
}

export const signUserMobileConfirm = credential => (dispatch, getState) => {
  dispatch(signUserMobileConfirmRequest())

  const options = {
    method: 'POST',
    data: {
      code: credential
    },
    url: urlMobileconfirm
  }

  axios(options)
    .then(data => {
      console.log(data, 'response ax9os');
      dispatch(signUserMobileConfirmSuccess(data.data))
    })
    .catch(error => {
      console.log(error, 'error ax9os')
      dispatch(signUserMobileConfirmError(error))
    })
}

export const signUserUp = credential => (dispatch, getState) => {
  dispatch(signUserUpRequest())

  const options = {
    method: 'POST',
    data: {
      phone: getState.profile.userNumber,
      email: credential.email,
      password: credential.password
    },
    url: urlSignUp
  }

  axios(options)
}

export const signUserIn = credential => (dispatch, getState) => {
  dispatch(signUserInRequest())

  const options = {
    method: 'POST',
    data: {
      phone: getState.profile.userNumber,
      password: credential
    },
    url: urlSignIn
  }

  axios(options)
}

