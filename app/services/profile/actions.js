export const actionTypes = {
  'SIGN_USER_REQUEST': 'SIGN_USER_REQUEST',
  'SIGN_USER_SUCCESS': 'SIGN_USER_SUCCESS',
  'SIGN_USER_ERROR': 'SIGN_USER_ERROR',
  'CLEAR_USER': 'CLEAR_USER'
}

export const signUserRequest = () => ({
  type: actionTypes.SIGN_USER_REQUEST
})

export const signUserSuccess = data => ({
  type: actionTypes.SIGN_USER_SUCCESS,
  payload: data
})

export const signUserError = error => ({
  type: actionTypes.SIGN_USER_ERROR,
  payload: error
})

export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
})