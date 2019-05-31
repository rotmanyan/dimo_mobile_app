import {actionTypes} from './actions';
import {token} from '../baseUrl';

const initialState = {
  userNumber: '',
  userEmail: '',
  isAuthenticated: !!token,
  token: null,
  isResetPassword: false,
  status: '',
  message: ''
};

export const signUser = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SIGN_USER_REQUEST:
      return {
        ...state,
        status: 'wait',
      };
    case actionTypes.SIGN_USER_SUCCESS:
      return {
        ...state,
        // userEmail: payload.data.session.email,
        // isAuthenticated: true,
        // token: payload.data.session.jwt,
        status: 'good',
      };
    case actionTypes.SIGN_USER_ERROR:
      return {
        ...state,
        userEmail: '',
        // isAuthenticated: false,
        token: null,
        status: 'error',
        // message: payload.message
      };
    default:
      return {...state}
  }
}