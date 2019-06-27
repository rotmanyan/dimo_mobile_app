import axios from 'axios'
import AsyncStorage from "@react-native-community/async-storage";

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
  signUserInError,

  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,

  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileError,

  updateUserAvatarRequest,
  updateUserAvatarSuccess,
  updateUserAvatarError
} from './actions'

import {
  urlVerifyphone,
  urlMobileconfirm,
  urlSignIn,
  urlSignUp,
  urlProfile,
  urlProfileUpdate,
  urlUpdateAvatar,
  urlKyc
} from '../baseUrl'

export const signUserVerifyPhone = credential => (dispatch, getState) => {
  dispatch(signUserVerifyPhoneRequest())

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

  console.log(options, 'options ax9os');

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
  const state = getState()
  dispatch(signUserUpRequest())

  const options = {
    method: 'POST',
    data: {
      phone: state.profile.userNumber,
      email: credential.email,
      password: credential.password
    },
    url: urlSignUp
  }

  axios(options)
    .then(response => {
      AsyncStorage.setItem('token', response.data.data.token)
      dispatch(signUserUpSuccess(response.data.data))
    })
    .catch(error => dispatch(signUserUpError(error)))
}

export const signUserIn = credential => (dispatch, getState) => {
  dispatch(signUserInRequest())
  const state = getState()

  const options = {
    method: 'POST',
    data: {
      phone: state.profile.userNumber,
      password: credential
    },
    url: urlSignIn
  }

  axios(options)
    .then(response => {
      AsyncStorage.setItem('token', response.data.data.token)
      dispatch(signUserInSuccess(response.data.data))
    })
    .catch(error => dispatch(signUserInError(error)))
}

export const getUserProfile = credential => (dispatch, getState) => {
  dispatch(getUserProfileRequest())

  const actualToken = getState().profile.token;

  AsyncStorage.getItem('token')
    .then(data => token = data)
    .then(token => {

      const options = {
        method: 'GET',
        headers: {'x-access-token': actualToken || token},
        url: urlProfile
      }

      axios(options)
        .then(res => {
          dispatch(getUserProfileSuccess(res.data.data))
        })
        .catch(error => dispatch(getUserProfileError(error)))
    })
}

export const updateUserProfile = credential => (dispatch, getState) => {
  dispatch(updateUserProfileRequest())

  const actualToken = getState().profile.token;
  AsyncStorage.getItem('token')
    .then(data => token = data)
    .then(token => {

      const options = {
        method: 'POST',
        headers: {'x-access-token': actualToken || token},
        data: credential,
        url: urlProfileUpdate
      }

      axios(options)
        .then(res => dispatch(updateUserProfileSuccess(res.data.data)))
        .catch(error => dispatch(updateUserProfileError(error)))
    })

}

export const updateUserAvatar = credential => (dispatch, getState) => {
  dispatch(updateUserAvatarRequest())

  const actualToken = getState().profile.token;
  AsyncStorage.getItem('token')
    .then(data => token = data)
    .then(token => {

      const options = {
        method: 'POST',
        headers: {'x-access-token': actualToken || token},
        data: credential,
        url: urlUpdateAvatar
      }

      axios(options)
        .then(res => dispatch(updateUserAvatarSuccess(res.data.data)))
        .catch(error => dispatch(updateUserAvatarError(error)))
    })

}

export const sendKyc = credential => (dispatch, getState) => {
  dispatch(updateUserProfileRequest())
  const actualToken = getState().profile.token;

  AsyncStorage.getItem('token')
    .then(data => token = data)
    .then(token => {

      const options = {
        method: 'GET',
        headers: {'x-access-token': actualToken || token},
        data: {},
        url: urlProfile
      }

      axios(options)
        .then(res => {
          dispatch(updateUserProfileSuccess(res.data.data))
        })
        .catch(error => dispatch(updateUserProfileError(error)))
    })
}