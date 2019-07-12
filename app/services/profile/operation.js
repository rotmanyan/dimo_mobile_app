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
  urlKyc, urlContacsSync
} from '../baseUrl'
import {contactSyncError, contactSyncSuccess} from "../chat/actions";

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
      if (response.data.success) dispatch(signUserVerifyPhoneSuccess(credential))
    })
    .catch(error => dispatch(signUserVerifyPhoneError(error)))
}

export const signUserMobileConfirm = credential => (dispatch, getState) => {
  dispatch(signUserMobileConfirmRequest())
  const state = getState()

  const options = {
    method: 'POST',
    data: {
      code: credential
    },
    url: urlMobileconfirm
  }
  console.log(options, 'optiittiti');
  axios(options)
    .then(data => {
      AsyncStorage.setItem('phone', state.profile.userNumber)
      dispatch(signUserMobileConfirmSuccess(data.data))
    })
    .catch(error => {
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
      password: credential.password,
    },
    url: urlSignUp
  }

  axios(options)
    .then(response => {
      AsyncStorage.setItem('token', response.data.data.token)
      AsyncStorage.setItem('phone', state.profile.userNumber)
      dispatch(signUserUpSuccess(response.data.data))
    })
    .then(data => {
      signUserIn(credential.password)
    })
    .catch(error => dispatch(signUserUpError(error)))
}

export const signUserIn = credential => (dispatch, getState) => {
  dispatch(signUserInRequest())
  const actualPhone = getState().profile.phone;

  AsyncStorage
    .getItem('phone')
    .then(phone => {
      const options = {
        method: 'POST',
        data: {
          phone: phone || actualPhone,
          password: credential
        },
        url: urlSignIn
      }

      axios(options)
        .then(response => {
          AsyncStorage.setItem('token', response.data.data.token)
          dispatch(signUserInSuccess(response.data.data))
        })
        .catch(error => dispatch(signUserInError(error.response.data)))
    })
    .catch(error => console.log(error, 'error getItem phone'))

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
  console.log(credential, 'credential logo');
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
  const store = getState();
  const actualToken = store.profile.token;

  AsyncStorage.getItem("token").then(token => {
    const options = {
      method: "POST",
      headers: {
        "x-access-token": actualToken || token
      },
      data: {data: credential},
      url: urlUpdateAvatar
    }

    axios(options)
      .then(data => dispatch(updateUserAvatarSuccess(data)))
      .catch(error => dispatch(updateUserAvatarError(error)));
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