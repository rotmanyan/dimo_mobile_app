/*
import axios from 'axios'
import AsyncStorage from "@react-native-community/async-storage";

import {
} from './actions'

import {
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
      if (response.data.success) dispatch(signUserVerifyPhoneSuccess(credential))
    })
    .catch(error => dispatch(signUserVerifyPhoneError(error)))
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

}*/
