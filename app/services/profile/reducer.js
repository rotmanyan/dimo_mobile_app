import {actionTypes} from './actions';

const initialState = {
  token: '',

  avatar: '',

  userNumber: '',
  userEmail: '',
  userCountry: '',
  userName: '',
  userAddress: '',
  userFullName: '',
  userFirstName: '',
  userLastName: '',

  type: '',
  isVerified: false,

  kyc: {
    status: 'empty'
  },

  dailyLimits: 0,
  withdrawLimits: 0,
  success: false,
  isRegistered: null,

  sideBar: false,
  loginStatus: false,
  errorMessage: ''
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
      return {
        ...state,
        token: payload.token,
      }
    case actionTypes.SIGN_USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        loginStatus: true
      }
    case actionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        avatar: payload.avatar,
        userNumber: payload.phone,
        userEmail: payload.email,
        userCountry: payload.country,
        kyc: {status: payload.kyc.status},
        isVerified: payload.isVerified,
        type: payload.type,
        userName: payload.username,
        userAddress: payload.address,
        userFullName: `${payload.firstName} ${payload.lastName}`,
        userFirstName: payload.firstName,
        userLastName: payload.lastName
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        token: '',
        userNumber: ''
      }
    case actionTypes.SIDE_BAR_ENABLE:
      return {
        ...state,
        sideBar: true
      }
    case actionTypes.SIDE_BAR_DISABLE:
      return {
        ...state,
        sideBar: false
      }
    case actionTypes.SIGN_USER_LOGIN_ERROR:
      console.log(payload, 'payload');
      return {
        ...state,
        errorMessage: payload.message
      }
    case actionTypes.GET_USER_PROFILE_ERROR:
    case actionTypes.SIGN_USER_VERIFY_PHONE_ERROR:
    case actionTypes.SIGN_USER_MOBILE_CONFIRM_ERROR:
    default:
      return {...state}
  }
}