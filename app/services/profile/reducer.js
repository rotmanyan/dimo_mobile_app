import {actionTypes} from './actions';

const initialState = {
  token: '',
  userNumber: '',
  success: false,
  isRegistered: null
}

export const signUser = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SIGN_USER_VERIFY_PHONE_SUCCESS:
      return {
        ...state,
        userNumber: payload
      };
    case actionTypes.SIGN_USER_MOBILE_CONFIRM_SUCCESS:
      console.log(payload, 'payload123123123123');
      return {
        ...state,
        success: payload.success,
        isRegistered: payload.isRegistered
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        token: '',
        userNumber: ''
      }
    case actionTypes.SIGN_USER_VERIFY_PHONE_ERROR:
    case actionTypes.SIGN_USER_MOBILE_CONFIRM_ERROR:
    default:
      return {...state}
  }
}