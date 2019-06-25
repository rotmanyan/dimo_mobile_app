export const actionTypes = {
  'SIGN_USER_VERIFY_PHONE_REQUEST': 'SIGN_USER_VERIFY_PHONE_REQUEST',
  'SIGN_USER_VERIFY_PHONE_SUCCESS': 'SIGN_USER_VERIFY_PHONE_SUCCESS',
  'SIGN_USER_VERIFY_PHONE_ERROR': 'SIGN_USER_VERIFY_PHONE_ERROR',

  'SIGN_USER_MOBILE_CONFIRM_REQUEST': 'SIGN_USER_MOBILE_CONFIRM_REQUEST',
  'SIGN_USER_MOBILE_CONFIRM_SUCCESS': 'SIGN_USER_MOBILE_CONFIRM_SUCCESS',
  'SIGN_USER_MOBILE_CONFIRM_ERROR': 'SIGN_USER_MOBILE_CONFIRM_ERROR',

  'SIGN_USER_LOGIN_REQUEST': 'SIGN_USER_LOGIN_REQUEST',
  'SIGN_USER_LOGIN_SUCCESS': 'SIGN_USER_LOGIN_SUCCESS',
  'SIGN_USER_LOGIN_ERROR': 'SIGN_USER_LOGIN_ERROR',

  'SIGN_USER_REGISTRATION_REQUEST': 'SIGN_USER_REGISTRATION_REQUEST',
  'SIGN_USER_REGISTRATION_SUCCESS': 'SIGN_USER_REGISTRATION_SUCCESS',
  'SIGN_USER_REGISTRATION_ERROR': 'SIGN_USER_REGISTRATION_ERROR',

  'CLEAR_USER': 'CLEAR_USER'
}

// SIGN_USER_VERIFY_PHONE
export const signUserVerifyPhoneRequest = () => ({
  type: actionTypes.SIGN_USER_VERIFY_PHONE_REQUEST
})

export const signUserVerifyPhoneSuccess = data => ({
  type: actionTypes.SIGN_USER_VERIFY_PHONE_SUCCESS,
  payload: data
})

export const signUserVerifyPhoneError = error => ({
  type: actionTypes.SIGN_USER_VERIFY_PHONE_ERROR,
  payload: error
})

//SIGN_USER_MOBILE_CONFIRM
export const signUserMobileConfirmRequest = () => ({
  type: actionTypes.SIGN_USER_MOBILE_CONFIRM_REQUEST
})

export const signUserMobileConfirmSuccess = data => ({
  type: actionTypes.SIGN_USER_MOBILE_CONFIRM_SUCCESS,
  payload: data
})

export const signUserMobileConfirmError = error => ({
  type: actionTypes.SIGN_USER_MOBILE_CONFIRM_ERROR,
  payload: error
})

//SIGN_USER_UP - Registration
export const signUserUpRequest = () => ({
  type: actionTypes.SIGN_USER_REGISTRATION_REQUEST
})

export const signUserUpSuccess = data => ({
  type: actionTypes.SIGN_USER_REGISTRATION_SUCCESS,
  payload: data
})

export const signUserUpError = error => ({
  type: actionTypes.SIGN_USER_REGISTRATION_ERROR,
  payload: error
})

//SIGN_USER_IN - Login
export const signUserInRequest = () => ({
  type: actionTypes.SIGN_USER_LOGIN_REQUEST
})

export const signUserInSuccess = data => ({
  type: actionTypes.SIGN_USER_LOGIN_SUCCESS,
  payload: data
})

export const signUserInError = error => ({
  type: actionTypes.SIGN_USER_LOGIN_ERROR,
  payload: error
})

//Delete user information in Store
export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
})