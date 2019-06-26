import {actionTypes} from './actions';

const initialState = {
  token: '',
  userNumber: '',
  userEmail: '',
  userCountry: '',
  userName: '',
  userAddress: '',
  userFullName: '',
  dailyLimits: 0,
  withdrawLimits: 0,
  success: false,
  isRegistered: null,
}

export const signUser = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SIGN_USER_VERIFY_PHONE_SUCCESS:
      return {
        ...state,
        userNumber: payload
      };
    case actionTypes.SIGN_USER_MOBILE_CONFIRM_SUCCESS:
      return {
        ...state,
        success: payload.success,
        isRegistered: payload.isRegistered
      }
    case actionTypes.SIGN_USER_REGISTRATION_SUCCESS:
      console.log(payload, 'regist success');
      return {
        ...state,
        token: payload.token
      }
    case actionTypes.SIGN_USER_LOGIN_SUCCESS:
      console.log(payload, 'login success');
      return {
        ...state,
        token: payload.token
      }
    case actionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        token: '',
        userNumber: ''
      }
    case actionTypes.GET_USER_PROFILE_ERROR:
    case actionTypes.SIGN_USER_VERIFY_PHONE_ERROR:
    case actionTypes.SIGN_USER_MOBILE_CONFIRM_ERROR:
    default:
      return {...state}
  }
}