export const actionTypes = {
  'SIGN_USER_REQUEST': 'SIGN_USER_REQUEST',
  'SIGN_USER_SUCCESS': 'SIGN_USER_SUCCESS',
  'SIGN_USER_ERROR': 'SIGN_USER_ERROR',
}

export const signUserRequest = () => ({
  type: actionTypes.REQUEST
})

export const signUserSuccess = data => ({
  type: actionTypes.REQUEST,
  payload: data
})

export const signUserError = error => ({
  type: actionTypes.ERROR,
  payload: error
})