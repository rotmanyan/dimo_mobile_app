import {actionTypes} from './actions';

const initialState = {
  userNumber: '',
  userEmail: '',
  isAuthenticated: false,
  token: '',
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
        token: payload,
        isAuthenticated: true,
      };
    case actionTypes.SIGN_USER_ERROR:
      return {
        ...state,
        userEmail: '',
        isAuthenticated: false,
        token: null,
      };
    default:
      return {...state}
  }
}