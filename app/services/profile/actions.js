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

  'GET_USER_PROFILE_REQUEST': 'GET_USER_PROFILE_REQUEST',
  'GET_USER_PROFILE_SUCCESS': 'GET_USER_PROFILE_SUCCESS',
  'GET_USER_PROFILE_ERROR': 'GET_USER_PROFILE_ERROR',

  'UPDATE_USER_PROFILE_REQUEST': 'UPDATE_USER_PROFILE_REQUEST',
  'UPDATE_USER_PROFILE_SUCCESS': 'UPDATE_USER_PROFILE_SUCCESS',
  'UPDATE_USER_PROFILE_ERROR': 'UPDATE_USER_PROFILE_ERROR',

  'UPDATE_USER_AVATAR_REQUEST': 'UPDATE_USER_AVATAR_REQUEST',
  'UPDATE_USER_AVATAR_SUCCESS': 'UPDATE_USER_AVATAR_SUCCESS',
  'UPDATE_USER_AVATAR_ERROR': 'UPDATE_USER_AVATAR_ERROR',

  'CLEAR_USER': 'CLEAR_USER',
  'SIDE_BAR_ENABLE': 'SIDE_BAR_ENABLE',
  'SIDE_BAR_DISABLE': 'SIDE_BAR_DISABLE',
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


//GET_USER_PROFILE
export const getUserProfileRequest = () => ({
  type: actionTypes.GET_USER_PROFILE_REQUEST
})

export const getUserProfileSuccess = data => ({
  type: actionTypes.GET_USER_PROFILE_SUCCESS,
  payload: data
})

export const getUserProfileError = error => ({
  type: actionTypes.GET_USER_PROFILE_ERROR,
  payload: error
})


//UPDATE_USER_PROFILE
export const updateUserProfileRequest = () => ({
  type: actionTypes.UPDATE_USER_PROFILE_REQUEST
})

export const updateUserProfileSuccess = data => ({
  type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
  payload: data
})

export const updateUserProfileError = error => ({
  type: actionTypes.UPDATE_USER_PROFILE_ERROR,
  payload: error
})

//UPDATE_USER_AVATAR
export const updateUserAvatarRequest = () => ({
  type: actionTypes.UPDATE_USER_AVATAR_REQUEST
})

export const updateUserAvatarSuccess = data => ({
  type: actionTypes.UPDATE_USER_AVATAR_SUCCESS,
  payload: data
})

export const updateUserAvatarError = error => ({
  type: actionTypes.UPDATE_USER_AVATAR_ERROR,
  payload: error
})

//Delete user information in Store
export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
})

//activator Side Bar
export const sideBarEnable = () => ({
  type: actionTypes.SIDE_BAR_ENABLE
})

export const sideBarDisable = () => ({
  type: actionTypes.SIDE_BAR_DISABLE
})